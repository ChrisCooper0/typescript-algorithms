// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Example

// For sequence = [1, 3, 2, 1], the output should be almostIncreasingSequence(sequence) = false;
// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be almostIncreasingSequence(sequence) = true.
// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

const almostIncreasingSequence = (arr: number[]): boolean => {
  let decreaseCount = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      decreaseCount++;
      if (arr[i] <= arr[i - 2] && arr[i + 1] <= arr[i - 1]) {
        decreaseCount++;
      }
    }
  }
  return decreaseCount > 1 ? false : true;
};

console.log(almostIncreasingSequence([1, 3, 2])); // true
console.log(almostIncreasingSequence([1, 3, 2, 1])); // false
console.log(almostIncreasingSequence([1, 2, 1, 2])); // false
