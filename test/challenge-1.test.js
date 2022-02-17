
import { describe, beforeEach, test, expect } from '@jest/globals'
import { visualNutsGenerator, } from '../src/challenge-1.js';

describe('Challenge 1', () => {
    let rgm;
    beforeEach(() => {
        rgm = function* rangeMockData(end, range = true) {
            if (range) {
                yield end
                return;
            }
            for (let i = 1; i <= end; i++)  yield i;
        }
    })

    test('prints "Visual" when the number is divisible by 3', () => {
        const visual = visualNutsGenerator(rgm(3)).next().value;
        expect(visual).toBe('Visual')
    })

    test('prints "Nuts" when the number is divisible by 5', () => {
        const nuts = visualNutsGenerator(rgm(5)).next().value;
        expect(nuts).toBe('Nuts')
    })

    test('prints "Visual Nuts" when the number is both divisible by 3 and 5', () => {
        const visualNuts = visualNutsGenerator(rgm(15)).next().value;
        expect(visualNuts).toBe('Visual Nuts')
    })

    test('prints 92 when the number is not divisible by 3 or 5', () => {
        const number = visualNutsGenerator(rgm(92)).next().value;
        expect(number).toBe(92)
    })

    test('prints all possible cases in a range of 15 numbers', () => {
        const numbers = [...(visualNutsGenerator(rgm(15, false)))];
        const dataGenerated = [
            1, 2, 'Visual', 4, 'Nuts', 'Visual', 7, 8, 'Visual', 'Nuts', 11, 'Visual', 13, 14, 'Visual Nuts'
        ]
        expect(numbers).toEqual(dataGenerated)
    })
})