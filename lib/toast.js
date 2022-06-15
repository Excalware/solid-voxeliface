import { resolveValue } from './types';
import { genId } from './util';
import { dispatch, ActionType } from './store';

const createToast = (
    message,
    type = 'blank',
    opts
) => ({
    createdAt: Date.now(),
    visible: true,
    type,
    ariaProps: {
        role: 'status',
        'aria-live': 'polite',
    },
    message,
    pauseDuration: 0,
    ...opts,
    id: opts?.id || genId(),
});

const createHandler = (type) => (
    message,
    options
) => {
    const toast = createToast(message, type, options);
    dispatch({ type: ActionType.UPSERT_TOAST, toast });
    return toast.id;
};

const toast = (message, opts) =>
    createHandler('blank')(message, opts);

toast.error = createHandler('error');
toast.success = createHandler('success');
toast.loading = createHandler('loading');
toast.custom = createHandler('custom');

toast.dismiss = (toastId) => {
    dispatch({
        type: ActionType.DISMISS_TOAST,
        toastId,
    });
};

toast.remove = (toastId) =>
    dispatch({ type: ActionType.REMOVE_TOAST, toastId });

toast.promise = (
    promise,
    msgs,
    opts
) => {
    const id = toast.loading(msgs.loading, { ...opts, ...opts?.loading });

    promise
        .then((p) => {
            toast.success(resolveValue(msgs.success, p), {
                id,
                ...opts,
                ...opts?.success,
            });
            return p;
        })
        .catch((e) => {
            toast.error(resolveValue(msgs.error, e), {
                id,
                ...opts,
                ...opts?.error,
            });
        });

    return promise;
};

export { toast };