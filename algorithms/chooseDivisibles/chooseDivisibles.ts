// Write a function `chooseDivisibles(numbers, target)` that accepts an array of numbers and a target number as arguments. The function should return an array containing elements of the original array that are divisible by the target.

const chooseDivisibles = (numbers: number[], target: number): number[] => {
  let divisables: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % target === 0) {
      divisables.push(numbers[i]);
    }
  }
  return divisables;
};

console.log(chooseDivisibles([40, 7, 22, 20, 24], 4)); // [40, 20, 24]
console.log(chooseDivisibles([9, 33, 8, 17], 3)); // [9, 33]
console.log(chooseDivisibles([4, 25, 1000], 10)); // [1000]
