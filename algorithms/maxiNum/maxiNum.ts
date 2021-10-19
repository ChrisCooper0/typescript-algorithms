// Write a function `maximum` that accepts an array of numbers as an argument. The function should return the largest number of the array. If the array is empty, then the function should return null.

const maxiNum = (arr: number[]) => {
  if (arr.length === 0) {
    return null;
  }

  let largestNum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return largestNum;
};

console.log(maxiNum([5, 6, 3, 7])); // 7
console.log(maxiNum([17, 15, 19, 11, 2])); // 19
console.log(maxiNum([])); // null
