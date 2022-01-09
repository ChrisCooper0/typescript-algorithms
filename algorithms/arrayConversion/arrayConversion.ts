// Given an array of 2k integers (for some integer k), perform the following operations until the array contains only one element:

// On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of consecutive elements with their sum;
// On the 2nd, 4th, 6th, etc. iterations replace each pair of consecutive elements with their product. After the algorithm has finished, there will be a single element left in the array. Return that element.

// For inputArray = [1, 2, 3, 4, 5, 6, 7, 8], the output should be arrayConversion(inputArray) = 186.

// We have [1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186], so the answer is 186.

const arrayConversion = (arr: number[]): number => {
  let curr = arr;
  for (let i = 0; curr.length > 1; i++) {
    const next = [];
    for (let j = 0; j < curr.length; j += 2) {
      if (i & 1) {
        next.push(curr[j] * curr[j + 1]);
      } else {
        next.push(curr[j] + curr[j + 1]);
      }
    }
    curr = next;
  }
  return curr[0];
};

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8])); // 186
