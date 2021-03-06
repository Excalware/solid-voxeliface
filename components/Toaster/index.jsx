import { css } from 'solid-styled-components';
import { resolveValue } from '../../lib/types';
import { useToaster } from '../../lib/use-toaster';
import { createRectRef, prefersReducedMotion } from '../../lib/util';
import { ToastBar } from './ToastBar';

const getPositionStyle = (
    position,
    offset
) => {
    const top = position.includes('top');
    const verticalStyle = top ? { top: 0 } : { bottom: 0 };
    const horizontalStyle = position.includes('center')
        ? {
            justifyContent: 'center',
        }
        : position.includes('right')
            ? {
                justifyContent: 'flex-end',
            }
            : {};
    return {
        left: 0,
        right: 0,
        display: 'flex',
        position: 'absolute',
        transition: prefersReducedMotion()
            ? undefined
            : `all 230ms cubic-bezier(.21,1.02,.73,1)`,
        transform: `translateY(${offset * (top ? 1 : -1)}px)`,
        ...verticalStyle,
        ...horizontalStyle,
    };
};

const activeClass = css`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;

const DEFAULT_OFFSET = 16;

export default function Toaster({
    reverseOrder,
    position = 'top-center',
    toastOptions,
    gutter,
    children,
    containerStyle,
    containerClassName,
}) {
    const { toasts, handlers } = useToaster(toastOptions);
    return (
        <div
            style={{
                position: 'fixed',
                zIndex: 9999,
                top: DEFAULT_OFFSET,
                left: DEFAULT_OFFSET,
                right: DEFAULT_OFFSET,
                bottom: DEFAULT_OFFSET,
                pointerEvents: 'none',
                ...containerStyle,
            }}
            className={containerClassName}
            onMouseEnter={handlers().startPause}
            onMouseLeave={handlers().endPause}
        >
            {toasts.map((t) => {
                const toastPosition = t.position || position;
                const offset = handlers().calculateOffset(t, {
                    reverseOrder,
                    gutter,
                    defaultPosition: position,
                });
                const positionStyle = getPositionStyle(toastPosition, offset);

                const ref = t.height
                    ? undefined
                    : createRectRef((rect) => {
                        handlers().updateHeight(t.id, rect.height);
                    });

                return (
                    <div
                        ref={ref}
                        className={t.visible ? activeClass : ''}
                        key={t.id}
                        style={positionStyle}
                    >
                        {t.type === 'custom' ? (
                            resolveValue(t.message, t)
                        ) : children ? (
                            children(t)
                        ) : (
                            <ToastBar toast={t} position={toastPosition} />
                        )}
                    </div>
                );
            })}
        </div>
    );
};