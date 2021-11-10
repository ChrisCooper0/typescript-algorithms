// Write a function `print2d` that accepts a two-dimensional array as an argument. The function should print all inner elements of the array.

const print2d = (arr: number[][] | string[][]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }
};

console.log(print2d([[9, 3, 4], [11], [42, 100]]));
console.log(
  print2d([
    ["a", "b", "c", "d"],
    ["e", "f"],
    ["g", "h", "i"],
  ])
);
