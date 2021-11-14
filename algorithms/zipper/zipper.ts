// Write a function `zipper` that accepts two arrays as arguments. The function should return a 2D array containing pairs of elements at the same indices. You can assume that the arrays have the same length.

const zipper = (arr1: Array<number | string>, arr2: Array<number | string>) => {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push([arr1[i], arr2[i]]);
  }
  return result;
};

console.log(zipper([1, 2, 3], ["a", "b", "c"])); // [ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] ]

let array5 = ["a", "b", "c", "d"];
let array6 = [-1, -2, -3, -4];

console.log(zipper(array5, array6));
// [
//   ['a', -1],
//   ['b', -2],
//   ['c', -3],
//   ['d', -4],
// ]

let array7 = ["whisper", "talk", "shout"];
let array8 = ["quiet", "normal", "loud"];

console.log(zipper(array7, array8));
// [
//   ['whisper', 'quiet'],
//   ['talk', 'normal'],
//   ['shout', 'loud'],
// ]
