// Write a function which takes in two arguments and returns another function, that function takes in two arguments and also returns another function which takes in two arguments
// Return the sum of the first arguments and add to the sum of the second arguments in each function
// e.g. example(1,2)(1,2)(3,4) // 1 * 1 * 3 + 2 * 2 * 4 = 19

const example =
  (a: number, b: number) => (c: number, d: number) => (e: number, f: number) =>
    a * c * e + b * d * f;

console.log(example(1, 2)(1, 2)(3, 4)); // 19
