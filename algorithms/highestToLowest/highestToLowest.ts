// Given an array of numbers, sort the array from highest to lowest

const highestToLowest = (arr: number[]): number[] => {
  return arr.sort().reverse();
};

console.log(highestToLowest([1, 6, 9, 3, 4, 6, 7, 2]));
