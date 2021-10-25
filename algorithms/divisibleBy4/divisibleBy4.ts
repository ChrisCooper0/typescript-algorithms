// Write a function `isDivBy4` that accepts a number as an argument. The function should return a boolean indicating whether or not the number is divisible by 4.

const isDivBy4 = (num: number) => {
  return num % 4 === 0 ? true : false;
};

console.log(isDivBy4(16)); // true
console.log(isDivBy4(32)); // true
console.log(isDivBy4(18)); // false
console.log(isDivBy4(7)); // false
