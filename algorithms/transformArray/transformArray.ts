// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

const map = (arr: number[], fn: (n: number, i: number) => number): number[] => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i], i));
  }

  return newArr;
};

const arr = [1, 2, 3];

const func = function plusone(n: number) {
  return n + 1;
};

console.log(map(arr, func)); // [2,3,4]
