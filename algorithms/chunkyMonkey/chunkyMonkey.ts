// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// chunkyMonkey(["a", "b", "c", "d"], 2) should return [ ["a", "b"], ["c", "d"] ].
// chunkyMonkey([0, 1, 2, 3, 4, 5], 4) should return [ [0, 1, 2, 3], [4, 5]].

const chunkyMonkey = (
  arr: Array<string | number>,
  num: number
): (string | number)[][] => {
  // One solution
  //   let chunkedArr = [];
  //   let firstArr = [];
  //   let secondArr = [];

  //   for (let i = 0; i < num; i++) {
  //     firstArr.push(arr[i]);
  //   }
  //   for (let i = num; i < arr.length; i++) {
  //     secondArr.push(arr[i]);
  //   }
  //   chunkedArr.push(firstArr);
  //   chunkedArr.push(secondArr);
  //   return chunkedArr;

  // Another solution
  let holderArr = [];
  while (arr.length) {
    holderArr.push(arr.splice(0, num));
  }
  return holderArr;
};

console.log(chunkyMonkey(["a", "b", "c", "d"], 2)); // [ ["a", "b"], ["c", "d"] ]
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4)); // [ [0, 1, 2, 3], [4, 5]]
