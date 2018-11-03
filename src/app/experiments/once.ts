/**
 * # Functional Programming: Once higher order function
 * Keywords: Closure, Higher order function
 */
export const onceExperiment = () => {
    const once = fn => {
        let done = false;
        return (...args) => {
            if (!done) {
                fn(...args);
                done = true;
            }
        };
    };

    const squeak = (extra: string = '') => console.log('Squeak!' + extra);
    const squeakOnce = once(squeak);
    const squeakTwice = once(squeak);

    squeak();
    squeak();
    squeak();
    squeakOnce('I can only do it once! ');
    squeakOnce('I can only do it once! ');
    squeakOnce('I can only do it once! ');
    squeakTwice('I can also only do it once! ');
    squeakTwice('I can also only do it once! ');
    squeakTwice('I can also only do it once! ');
};
