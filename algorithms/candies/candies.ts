// n children have got m pieces of candy. They want to eat as much candy as they can, but each child must eat exactly the same amount of candy as any other child. Determine how many pieces of candy will be eaten by all the children together. Individual pieces of candy cannot be split.
// For n = 3 and m = 10, the output should be candies(n, m) = 9.
// Each child will eat 3 pieces. So the answer is 9.

const candies = (n: number, m: number) => {
  return Math.floor(m / n) * n;
};

console.log(candies(3, 10)); // 9
console.log(candies(3, 7)); // 6
console.log(candies(2, 9)); // 8
