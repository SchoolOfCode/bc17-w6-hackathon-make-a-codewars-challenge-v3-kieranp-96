import { test, expect } from 'vitest';
import { twoSum } from './twoSum.js'; 

test('twoSum', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([2, 7]);
});

test('twoSum', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([2, 4]);
});

test('twoSum', () => {
    expect(twoSum([3, 3], 6)).toEqual([3, 3]);
});

test('twoSum', () => {
    expect(twoSum([1, 2, 3, 4], 8)).toBeNull();
});



/* DO NOT OPEN
    const usedNumbers = [];

    for (let i = 0; i < array.length; i++) {
        const currentNumber = array[i];

        const neededValue = target - currentNumber;

        for (let j = 0; j < usedNumbers.length; j++) {
            if (usedNumbers[j].number === neededValue) {
                return [neededValue, currentNumber];
            }
        }
        usedNumbers.push({number: currentNumber});
    }
    return null;
 */