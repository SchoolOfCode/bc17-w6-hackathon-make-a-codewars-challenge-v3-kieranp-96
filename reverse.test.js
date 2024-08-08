import {test, expect} from "vitest";
import {reverseArray} from "./reverse"

test("Order the array", () => {
    expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1])
});

test("Order the array", () => {
    expect(reverseArray(["a", "b", "c"])).toEqual(["c", "b", "a"])
});

test("Order the array", () => {
    expect(reverseArray([true, null, undefined])).toEqual([undefined, null, true])
});



/*
DO NOT OPEN

 let reversedArray = [];
    for(let i = array.length -1; i >= 0; i--){
        reversedArray.push(array[i])
    }
    return reversedArray
 */