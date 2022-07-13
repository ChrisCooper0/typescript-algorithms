// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.

const isPalindrome = (x: number): boolean => {
  return x.toString() === x.toString().split("").reverse().join("");
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(123)); // false
