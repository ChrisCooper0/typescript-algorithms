// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// O(n) for time and space
const validParentheses = (str: string): boolean => {
  const bracket: any = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  let heap = [];

  for (let char of str) {
    if (bracket[char]) {
      heap.push(bracket[char]);
    } else {
      if (heap.pop() !== char) {
        return false;
      }
    }
  }

  return !heap.length;
};

console.log(validParentheses("[]{}()")); // true
console.log(validParentheses("[]{{}}()")); // true
console.log(validParentheses("([]{)")); // false
