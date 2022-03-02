// Given an array of integers, write a function that determines whether the array contains any duplicates. Your function should return true if any element appears at least twice in the array, and it should return false if every element is distinct.

// For a = [1, 2, 3, 1], the output should be containsDuplicates(a) = true.
// There are two 1s in the given array.

// For a = [3, 1], the output should be containsDuplicates(a) = false.
// The given array contains no duplicates.

const containsDuplicates = (arr: number[]): boolean => {
  // A Set is a collection of values, where each value may occur only once.
  const set = new Set(arr);
  return set.size !== arr.length;
};

console.log(containsDuplicates([1, 2, 3, 1])); // true
console.log(containsDuplicates([1, 2, 3])); // false
