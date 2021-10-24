// Write a function `commonElements` that accepts two arrays as arguments. The function should return a new array containing the elements that are found in both of the input arrays. The order of the elements in the output array doesn't matter as long as the function returns the correct elements.

const commonElements = (
  arr1: Array<number | string>,
  arr2: Array<number | string>
): Array<number | string> => {
  let common: Array<number | string> = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      common.push(arr1[i]);
    }
  }
  return common;
};

console.log(commonElements(["a", "b", "c", "d"], ["c", "d", "e", "f"])); // ['c', 'd']
console.log(commonElements([1, 4, 5, 7], [5, 8, 3, 1])); // [1, 5]
