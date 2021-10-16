// Write a function `divisors` that accepts a number as an argument. The function should return an array containing all positive numbers that can divide into the argument

const divisors = (num: number) => {
  let divisableArr: number[] = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisableArr.push(i);
    }
  }
  return divisableArr;
};

console.log(divisors(15)); // [1, 3, 5, 15]
console.log(divisors(7)); // [1, 7]
console.log(divisors(24)); // [1, 2, 3, 4, 6, 8, 12, 24]
