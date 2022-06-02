// Given an array A of N integers, return the smallest positive integer (greater than 0) that does not occur in A.
// Given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.

const smallestPositiveInt = (A: number[]) => {
  A.sort((a, b) => a - b);
  let x = 1;

  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0 && A[i] !== x) {
      return x;
    }
    x++;
  }

  return x;
};

console.log(smallestPositiveInt([1, 2, 3])); // 4
console.log(smallestPositiveInt([1, 3, 6, 4, 2])); // 5
