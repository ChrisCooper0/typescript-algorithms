// Given two cells on the standard chess board, determine whether they have the same color or not.

// For cell1 = "A1" and cell2 = "C3", the output should be chessBoardCellColor(cell1, cell2) = true.
// For cell1 = "A1" and cell2 = "H3", the output should be chessBoardCellColor(cell1, cell2) = false.

const chessBoardCellColor = (cell1: string, cell2: string): boolean => {
  const cell1Color = (cell1.charCodeAt(0) + cell1.charCodeAt(1)) % 2 === 0;
  const cell2Color = (cell2.charCodeAt(0) + cell2.charCodeAt(1)) % 2 === 0;
  return cell1Color === cell2Color;
};

console.log(chessBoardCellColor("A1", "C3")); // true
console.log(chessBoardCellColor("A1", "H3")); // false
