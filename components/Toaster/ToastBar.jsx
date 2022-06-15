import { createMemo } from 'solid-js';
import { styled, keyframes } from 'solid-styled-components';

import { resolveValue } from '../../lib/types';
import { ToastIcon } from './ToastIcon';
import { prefersReducedMotion } from '../../lib/util';

const enterAnimation = factor => `
0% {transform: translate3d(0,${factor * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`;

const exitAnimation = factor => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${factor * -150}%,-1px) scale(.6); opacity:0;}
`;

const fadeInAnimation = `0%{opacity:0;} 100%{opacity:1;}`;
const fadeOutAnimation = `0%{opacity:1;} 100%{opacity:0;}`;

const ToastBarBase = styled('div')`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`;

const Message = styled('div')`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`;

const getAnimationStyle = (
    position,
    visible
) => {
    const top = position.includes('top');
    const factor = top ? 1 : -1;

    const [enter, exit] = prefersReducedMotion()
        ? [fadeInAnimation, fadeOutAnimation]
        : [enterAnimation(factor), exitAnimation(factor)];

    return {
        animation: visible
            ? `${keyframes(enter)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
            : `${keyframes(exit)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
};

export const ToastBar = ({ toast, position, style, children }) => {
    const animationStyle = toast?.height
        ? getAnimationStyle(
            toast.position || position || 'top-center',
            toast.visible
        )
        : { opacity: 0 };

    const icon = <ToastIcon toast={toast} />;
    const message = (
        <Message {...toast.ariaProps}>
            {resolveValue(toast.message, toast)}
        </Message>
    );

    return (
        <ToastBarBase
            className={toast.className}
            style={{
                ...animationStyle,
                ...style,
                ...toast.style,
            }}
        >
            {typeof children === 'function' ? (
                children({
                    icon,
                    message,
                })
            ) : (
                <>
                    {icon}
                    {message}
                </>
            )}
        </ToastBarBase>
    );
};