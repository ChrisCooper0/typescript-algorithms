// Given a rectangular matrix and integers a and b, consider the union of the ath row and the bth (both 0-based) column of the matrix (i.e. all cells that belong either to the ath row or to the bth column, or to both). Return sum of all elements of that union.

// For
// matrix = [ [1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]] a = 1 and b = 3, the output should be crossingSum(matrix, a, b) = 12.

// Here (2 + 2 + 2 + 2) + (1 + 3) = 12.

const crossingSum = (matrix: number[][], a: number, b: number): number => {
  let rowSum = matrix[a].reduce((acc, curr) => acc + curr); // Sum of elements in the ath row
  let colSum = matrix.reduce((acc, curr) => acc + curr[b], 0); // Sum of elements in the bth column
  let commonElement = matrix[a][b]; // Element that is present in both the ath row and the bth column
  return rowSum + colSum - commonElement; // Sum of elements in the union
};

console.log(
  crossingSum(
    [
      [1, 1, 1, 1],
      [2, 2, 2, 2],
      [3, 3, 3, 3],
    ],
    1,
    3
  )
); // 12
