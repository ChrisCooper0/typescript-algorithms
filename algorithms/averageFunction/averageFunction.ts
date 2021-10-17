// Write a function `averageFunction` that accepts an array of numbers as an argument. The function should return the average of all elements of the array. If the input array is empty, then the function should return null.

const averageFunction = (arr: number[]): number | null => {
  if (arr.length === 0) {
    return null;
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let average = sum / arr.length;

  return average;
};

console.log(averageFunction([5, 2, 7, 24])); // 9.5
console.log(averageFunction([100, 6])); // 53
console.log(averageFunction([31, 32, 40, 12, 33])); // 29.6
console.log(averageFunction([])); // null
