import { isDivisibleBy, ifThenElse, range } from './common.js'

const isDivisibleBy5 = isDivisibleBy(5);
const isDivisibleBy3 = isDivisibleBy(3);

const visualNutsOrNumber = (number) => {
    return ifThenElse(
        isDivisibleBy3(number),
        ifThenElse(
            isDivisibleBy5(number),
            () => "Visual Nuts",
            () => "Visual"
        ),
        ifThenElse(
            isDivisibleBy5(number),
            () => "Nuts",
            () => number
        )
    )();
}

// I'm exporting this one to be a testable code
// as the printer version does not make sense to test
// because it's a void function just to print the results
export function* visualNutsGenerator(generator) {
    // all the new logic that could  produce another different output
    // could go here or in any other generator pipeline
    // it's interchageable beetween them
    for (let item of generator) {
        yield visualNutsOrNumber(item)
    }
}

export const excercise1Solution = (start = 1, end = 100) => visualNutsGenerator(range(end, start));