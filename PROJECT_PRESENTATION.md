# Two Sum Kata

## Overview
The **Two Sum Kata** is a common coding challenge that tests your ability to work with arrays and implement algorithms efficiently. The task requires finding two distinct numbers in an array that sum up to a given target number. This README will guide you through understanding the challenge, the approach taken, and how to test the solution.

## Problem Description

You are provided with a function skeleton that accepts two parameters:
1. **array**: An array of integers.
2. **target**: A single integer representing the target sum.

### Your Goal
Your task is to implement the function so that it returns an array containing exactly two numbers from the input array that add up to the `target` number. If no such pair exists, the function should return `null`.

### Example

Given the following input:

```javascript
twoSum([2, 7, 11, 15], 9)

[2, 7] // output
```

### Constraints
    - The input array will contain only integers.
    - The array should contain only one combination of numbers that can reach the target sum.
    - The same element cannot be used twice.




<details>
  <summary>Click to reveal spoiler</summary>

### Approach
- To solve this challenge, you can follow these steps:

1. **Initialize a storage array**: This will store numbers you've already checked.

2. **Outer Loop**: Iterate over each number in the input array.
    - For each number, calculate the difference between the `target` and the current number (let's call this the `neededValue`).

3. **Inner Loop**: Iterate through the storage array to see if any of the previously stored numbers match the `neededValue`.
    - If a match is found, return the pair as an array.
    - If no match is found, store the current number in the storage array and continue to the next number.

4. **Return the result**: If no pair is found after checking all numbers, return `null`.

</details>