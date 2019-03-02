export function debounce(func: any, wait: number, immediate?: boolean) {
    let timeout: number | undefined;
    return function() {
        const args = arguments;
        let later = function() {
            timeout = undefined;
            if (!immediate) func.apply(undefined, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(undefined, args);
    };
};