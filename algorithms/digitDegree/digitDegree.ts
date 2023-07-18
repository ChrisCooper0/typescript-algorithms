// Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

// Given an integer, find its digit degree.

// Example

// For n = 5, the output should be digitDegree(n) = 0;
// For n = 100, the output should be digitDegree(n) = 1. 1 + 0 + 0 = 1.
// For n = 91, the output should be digitDegree(n) = 2. 9 + 1 = 10 -> 1 + 0 = 1.

const digitDegree = (n: number): number => {
  let count = 0;
  let currentNumber = n;

  while (currentNumber >= 10) {
    // Convert current number to string and split it into individual digits
    const digits = currentNumber.toString().split("");

    // Calculate the sum of the digits
    const digitSum = digits.reduce((sum, n) => sum + parseInt(n), 0);

    // Update the current number with the digit sum
    currentNumber = digitSum;

    // Increment the count
    count++;
  }

  return count;
};

console.log(digitDegree(5)); // 0
console.log(digitDegree(100)); // 1
console.log(digitDegree(91)); // 2
