export default class Util {
    static isMobile() {
        if (!global.window)
            return false;
        return window.innerWidth <= 768;
    }
}

export const genId = (() => {
    let count = 0;
    return () => {
        return (++count).toString();
    };
})();

export const createRectRef = onRect => (el) => {
    if (el) {
        setTimeout(() => {
            const boundingRect = el.getBoundingClientRect();
            onRect(boundingRect);
        });
    }
};

export const prefersReducedMotion = (() => {
    // Cache result
    let shouldReduceMotion = undefined;

    return () => {
        if (shouldReduceMotion === undefined && typeof window !== 'undefined') {
            const mediaQuery = matchMedia('(prefers-reduced-motion: reduce)');
            shouldReduceMotion = !mediaQuery || mediaQuery.matches;
        }
        return shouldReduceMotion;
    };
})();