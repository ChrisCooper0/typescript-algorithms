// Write a function which returns the factorial (x!) of a given number

const factorial = (num: number): number => {
  // Solution 1 - while loop
  let count = 1;
  while (num > 0) {
    count *= num;
    num--;
  }
  return count;

  // Solution 2 - Recursive
  //   if (n === 0) {
  //     return 1;
  //   }
  //   return n * factorial(n - 1);

  // Solution 3 - for loop
  //   let count = 1;
  //   for (let i = 1; i <= num; i++) {
  //     count *= i;
  //   }
  //   return count;
};

console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
