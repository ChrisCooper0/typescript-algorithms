// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

const lengthOfLastWord = (s: string): number => {
  const sArr = s.trim().split(" ");
  return sArr[sArr.length - 1].length;
};

console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
