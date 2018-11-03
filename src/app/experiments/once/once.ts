/**
 * Functional Programming: Once higher order function
 * Keywords: Closure, Higher order function
 */
export const once = fn => {
    let done = false;
    return (...args) => {
        if (!done) {
            fn(...args);
            done = true;
        }
    };
};
