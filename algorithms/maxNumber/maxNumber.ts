// Write a function to return the max number from an array

const maxNumber = (arr: number[]) => {
  return Math.max(...arr);
};

console.log(maxNumber([1, 4, 7, 9, 1, 4, 8, 2])); // 9
