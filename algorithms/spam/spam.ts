// Write a function `spam` that accepts a 2D array as an argument. The array contains pairs as elements. The first element of every pair is a number and the second element is a word. The function should return a string containing the words repeated the specified number of times.

const spam = (arr: [number, string][]): string => {
  return arr.reduce((acc, [num, word]) => acc + word.repeat(num), "");
};

console.log(
  spam([
    [2, "a"],
    [3, "b"],
    [1, "c"],
  ])
); // aabbbc

console.log(
  spam([
    [3, "hi"],
    [2, "bye"],
  ])
); // hihihibyebye
