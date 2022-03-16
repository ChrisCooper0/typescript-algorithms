// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

const largestOfFour = (arr: number[][]): number[] => {
  let largestArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNum = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] > largestNum) {
        largestNum = arr[i][j];
      }
    }
    largestArr.push(largestNum);
  }
  return largestArr;
};

console.log(
  largestOfFour([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
); // [27, 5, 39, 1001]
