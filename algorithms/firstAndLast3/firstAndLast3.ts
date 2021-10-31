// Write a function that takes a given string and returns the first and last 3 characters. Return original string if the string is not longer than 3 characters
const firstAndLast3 = (str: string) =>
  str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

console.log(firstAndLast3("ABC1223243DEF")); // ABCDEF
console.log(firstAndLast3("acbd")); // abcdcbd
