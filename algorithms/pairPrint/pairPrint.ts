// Write a function `pairPrint` that accepts an array as an argument. The function should print all unique pairs of elements in the array. The function doesn't need to return any value. It should just print to the terminal.

const pairPrint = (arr: Array<number | string>) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`${arr[i]} - ${arr[j]}`);
    }
  }
};

pairPrint([1, 4, 7]);
// prints
// 1 - 4
// 1 - 7
// 4 - 7

pairPrint(["apple", "banana", "clementine"]);
// // prints
// //  apple - banana
// //  apple - clementine
// //  banana - clementine
