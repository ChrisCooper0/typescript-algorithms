// Given array of integers, for each position i, search among the previous positions for the last (from the left) position that contains a smaller value. Store this value at position i in the answer. If no such value can be found, store -1 instead.
// Example
// For items = [3, 5, 2, 4, 5], the output should be arrayPreviousLess(items) = [-1, 3, -1, 2, 4].

const arrayPreviousLess = (arr: number[]): number[] => {
  return arr.map((item, index) => {
    for (let i = index - 1; i >= 0; i--) {
      if (arr[i] < item) {
        return arr[i];
      }
    }
    return -1;
  });
};

console.log(arrayPreviousLess([3, 5, 2, 4, 5])); // [-1, 3, -1, 2, 4]
