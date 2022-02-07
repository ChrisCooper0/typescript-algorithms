// Given the string, check if it is a palindrome.
// For inputString = "aabaa", the output should be checkPalindrome(inputString) = true;
// For inputString = "abac", the output should be checkPalindrome(inputString) = false;
// For inputString = "a", the output should be checkPalindrome(inputString) = true.

const checkPalindrome = (input: string): boolean => {
  return input === input.split("").reverse().join("");
};

// Without built in array methods
// const checkPalindrome = (input: string): boolean => {
//   let reversedInput = "";
//   for (let i = input.length - 1; i >= 0; i--) {
//     reversedInput += input[i];
//   }
//   return input === reversedInput ? true : false;
// };

console.log(checkPalindrome("aabaa")); // true
console.log(checkPalindrome("abac")); // false
console.log(checkPalindrome("a")); // true
