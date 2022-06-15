import { createSignal, createEffect } from 'solid-js';

const TOAST_LIMIT = 20;

const toastTimeouts = new Map();

const addToRemoveQueue = (toastId) => {
    if (toastTimeouts.has(toastId)) {
        return;
    }

    const timeout = setTimeout(() => {
        toastTimeouts.delete(toastId);
        dispatch({
            type: ActionType.REMOVE_TOAST,
            toastId: toastId,
        });
    }, 1000);

    toastTimeouts.set(toastId, timeout);
};

const clearFromRemoveQueue = (toastId) => {
    const timeout = toastTimeouts.get(toastId);
    if (timeout) {
        clearTimeout(timeout);
    }
};

export const ActionType = {
    ADD_TOAST: 'ADD_TOAST',
    UPDATE_TOAST: 'UPDATE_TOAST',
    UPSERT_TOAST: 'UPSERT_TOAST',
    DISMISS_TOAST: 'DISMISS_TOAST',
    REMOVE_TOAST: 'REMOVE_TOAST',
    START_PAUSE: 'START_PAUSE',
    END_PAUSE: 'END_PAUSE',
};

export const reducer = (state, action) => {
    switch (action.type) {
        case ActionType.ADD_TOAST:
            return {
                ...state,
                toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
            };

        case ActionType.UPDATE_TOAST:
            //  ! Side effects !
            if (action.toast.id) {
                clearFromRemoveQueue(action.toast.id);
            }

            return {
                ...state,
                toasts: state.toasts.map((t) =>
                    t.id === action.toast.id ? { ...t, ...action.toast } : t
                ),
            };

        case ActionType.UPSERT_TOAST:
            const { toast } = action;
            return state.toasts.find((t) => t.id === toast.id)
                ? reducer(state, { type: ActionType.UPDATE_TOAST, toast })
                : reducer(state, { type: ActionType.ADD_TOAST, toast });

        case ActionType.DISMISS_TOAST:
            const { toastId } = action;

            // ! Side effects ! - This could be execrated into a dismissToast() action, but I'll keep it here for simplicity
            if (toastId) {
                addToRemoveQueue(toastId);
            } else {
                state.toasts.forEach((toast) => {
                    addToRemoveQueue(toast.id);
                });
            }

            return {
                ...state,
                toasts: state.toasts.map((t) =>
                    t.id === toastId || toastId === undefined
                        ? {
                            ...t,
                            visible: false,
                        }
                        : t
                ),
            };
        case ActionType.REMOVE_TOAST:
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: [],
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t) => t.id !== action.toastId),
            };

        case ActionType.START_PAUSE:
            return {
                ...state,
                pausedAt: action.time,
            };

        case ActionType.END_PAUSE:
            const diff = action.time - (state.pausedAt || 0);

            return {
                ...state,
                pausedAt: undefined,
                toasts: state.toasts.map((t) => ({
                    ...t,
                    pauseDuration: t.pauseDuration + diff,
                })),
            };
    }
};

const listeners = [];

let memoryState = { toasts: [], pausedAt: undefined };

export const dispatch = (action) => {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener) => {
        listener(memoryState);
    });
};

const defaultTimeouts = {
    blank: 4000,
    error: 4000,
    success: 2000,
    loading: Infinity,
    custom: 4000,
};

export const useStore = (toastOptions = {}) => {
    const [state, setState] = createSignal(memoryState);
    createEffect(() => {
        listeners.push(setState);
        const index = listeners.indexOf(setState);
        if (index > -1) {
            listeners.splice(index, 1);
        };
    });

    const mergedToasts = state().toasts.map((t) => ({
        ...toastOptions,
        ...toastOptions[t.type],
        ...t,
        duration:
            t.duration ||
            toastOptions[t.type]?.duration ||
            toastOptions?.duration ||
            defaultTimeouts[t.type],
        style: {
            ...toastOptions.style,
            ...toastOptions[t.type]?.style,
            ...t.style,
        },
    }));

    return {
        ...state(),
        toasts: mergedToasts,
    };
};