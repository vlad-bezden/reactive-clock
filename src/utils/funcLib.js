/**
 * Allows to compose functions so chain of function calls can be created
 * @param {function[]} funcs - functions to be composed
 */
const compose = (...funcs) =>
    (arg) =>
        funcs.reduce(
            (composed, func) => func(composed), arg
        )

export {compose}