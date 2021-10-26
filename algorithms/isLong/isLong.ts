// Write a function `isLong` that accepts a string as an argument. The function should return a boolean indicating whether or not the string is longer than 5 characters

const isLong = (str: string) => {
  return str.length > 5;
};

console.log(isLong("long string")); // true
console.log(isLong("short")); // false
