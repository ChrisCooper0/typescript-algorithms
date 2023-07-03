// Write a function which takes in an array of numbers and returns the sum of all the numbers recursively

// Time: 0(n)
// Space: 0(n)
const optimisedSum = (arr: number[]) => {
  return _optimisedSum(arr, 0);
};

const _optimisedSum = (arr: number[], idx: number): number => {
  if (idx === arr.length) return 0;

  return arr[idx] + _optimisedSum(arr, idx + 1);
};

console.log(optimisedSum([])); // 0
console.log(optimisedSum([1])); // 1
console.log(optimisedSum([3, 7])); // 10
console.log(optimisedSum([4, 6, 5])); // 15

// Time: 0(n*2)
// Space: 0(n)
const sum = (arr: number[]): number => {
  if (arr.length === 0) return 0;

  // Take off first number from the array returning a new array
  const rest = arr.slice(1);

  // Add the first number to the rest of the array
  return arr[0] + sum(rest);
};

console.log(sum([])); // 0
console.log(sum([1])); // 1
console.log(sum([3, 7])); // 10
console.log(sum([4, 6, 5])); // 15
