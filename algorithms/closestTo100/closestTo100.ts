// Given two values, write a function to determine which value is nearest 100

const closestTo100 = (num1: number, num2: number) => {
  return Math.abs(num1 - 100) < Math.abs(num2 - 100) ? num1 : num2;
};

console.log(closestTo100(45, 76)); // 76
console.log(closestTo100(90, 20)); // 90
