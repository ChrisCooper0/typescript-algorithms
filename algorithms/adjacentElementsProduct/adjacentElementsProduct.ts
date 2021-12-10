// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be adjacentElementsProduct(inputArray) = 21.
// 7 and 3 produce the largest product.

const adjacentElementsProduct = (arr: number[]): number => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    const product = arr[i] * arr[i - 1];
    if (product > result) {
      result = product;
    }
  }
  return result;
};

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21
console.log(adjacentElementsProduct([1, 6, -4, -2, 9, 5])); // 45
