// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// O(n2) - Runtime: 133 ms
const twoSumLC = (nums: number[], target: number): number[] => {
  let arr = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        arr.push(i, j);
      }
    }
  }
  return arr;
};

console.log(twoSumLC([2, 7, 11, 15], 9)); // [0,1]

// O(n) - Runtime: 105 ms
const twoSumLC2 = (nums: number[], target: number): number[] => {
  // Make object where keys are numbers and values are indicies
  // {{value}: index}
  // {2: 0, 7: 1, 11: 2, 15: 3}
  const map: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    // populate object
    const num = nums[i];

    const diff = target - num;
    // if difference between num and target equals a key, we know we have a pair
    if (diff in map) {
      const secondIndex = map[diff];
      return [i, secondIndex];
    }
    map[num] = i;
  }

  // appease typescript
  return [0, 1];
};

console.log(twoSumLC2([2, 7, 11, 15], 9)); // [1, 0]

// Runtime: 67 ms
const twoSumLC3 = (nums: number[], target: number): number[] => {
  const map: Map<number, any> = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;
    if (map.has(diff)) {
      const secondIndex = map.get(diff);
      return [i, secondIndex];
    }
    map.set(num, i);
  }

  return [0, 1];
};

console.log(twoSumLC3([2, 7, 11, 15], 9)); // [1, 0]
