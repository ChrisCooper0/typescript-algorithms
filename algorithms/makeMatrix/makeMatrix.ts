// Write a function `makeMatrix(m, n, value)` that accepts three arguments. The function should return a 2-dimensional array of height `m` and width `n` that contains the `value` as every element.

const makeMatrix = (m: any, n: any, value: any): any[][] => {
  let insideArr: Array<any> = [];
  let outsideArr: any[][] = [];
  for (let i = 0; i < n; i++) {
    insideArr.push(value);
  }
  for (let i = 0; i < m; i++) {
    outsideArr.push(insideArr);
  }

  return outsideArr;
};

console.log(makeMatrix(3, 4, 1));
console.log(makeMatrix(3, 5, null));
// [
//   [ null, null, null, null, null ],
//   [ null, null, null, null, null ],
//   [ null, null, null, null, null ]
// ]

console.log(makeMatrix(4, 2, "x"));
// [
//   [ 'x', 'x' ],
//   [ 'x', 'x' ],
//   [ 'x', 'x' ],
//   [ 'x', 'x' ]
// ]

console.log(makeMatrix(2, 2, 0));
// [
//   [ 0, 0 ],
//   [ 0, 0 ]
// ]
