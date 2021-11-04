// Write a function `isPrime` that accepts a number as an argument. The function should return a boolean indicating whether or not the given number is prime. A prime number is a number that is only divisible by 1 and itself. The smallest prime number is 1.

const isPrime = (num: number): boolean => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(11)); // true
console.log(isPrime(8)); // false
console.log(isPrime(7)); // true
console.log(isPrime(21)); // false
console.log(isPrime(2)); // true
console.log(isPrime(15)); // false
console.log(isPrime(1)); // true
