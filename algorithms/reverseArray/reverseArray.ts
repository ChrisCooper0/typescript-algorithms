// Write a function `reverseArray` that accepts an array as an argument. The function should return an array containing the elements of the original array in reverse order

const reverseArray = (arr: (string | number)[]) => {
  let revArray: (string | number)[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revArray.push(arr[i]);
  }
  return revArray;
};

console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseArray(["zero", "one", "two", "three"])); // ['three', 'two', 'one', 'zero']
