// Write a function `fib` which takes in a number, n, and returne the n-th number in the fibonacci sequence

const fib = (n: number): number => {
  if (n === 1 || n === 2) return 1;

  return fib(n - 1) + fib(n - 2);
};

// Time: 0(2^n)
// Space: 0(n)

console.log(fib(1)); // 1
console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(4)); // 3
console.log(fib(5)); // 5
console.log(fib(6)); // 8
console.log(fib(7)); // 13
  