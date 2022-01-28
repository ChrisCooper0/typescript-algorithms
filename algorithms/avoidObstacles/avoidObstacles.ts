// You are given an array of integers representing coordinates of obstacles situated on a straight line.
// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.
// Find the minimal length of the jump enough to avoid all the obstacles.
// Example
// For inputArray = [5, 3, 6, 7, 9], the output should be avoidObstacles(inputArray) = 4.

const avoidObstacles = (arr: number[]) => {
  let sortedArr = arr.sort();
  let largestArrVal = sortedArr[sortedArr.length - 1];

  for (let i = 1; i <= largestArrVal + 1; i++) {
    if (sortedArr.every((element) => element % i !== 0)) {
      return i;
    }
  }
};

console.log(avoidObstacles([5, 3, 6, 7, 9])); // 4
