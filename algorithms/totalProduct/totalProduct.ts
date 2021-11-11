// Write a function `totalProduct(array)` that accepts a 2D array of numbers. The function should return the total product of all numbers in the array.

const totalProduct = (arr: number[][]): number => {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
};

console.log(
  totalProduct([
    [1, 2, 3],
    [4, 5, 6],
  ])
); // 720

console.log(
  totalProduct([
    [3, 5, 2],
    [6, 2],
  ])
); // 360

console.log(
  totalProduct([
    [4, 6],
    [2, 3],
    [1, 2],
  ])
); // 288
