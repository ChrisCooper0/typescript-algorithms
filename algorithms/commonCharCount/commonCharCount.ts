// Given two strings, find the number of common characters between them.
// For s1 = "aabcc" and s2 = "adcaa", the output should be commonCharacterCount(s1, s2) = 3.
// Strings have 3 common characters - 2 "a"s and 1 "c".

const commonCharacterCount = (s1: string, s2: string): number => {
  let s2Arr = s2.split("");
  let count = 0;

  for (let i = 0; i < s1.length; i++) {
    if (s2Arr.indexOf(s1[i]) !== -1) {
      s2Arr.splice(s2Arr.indexOf(s1[i]), 1);
      count++;
    }
  }
  return count;
};

console.log(commonCharacterCount("aabcc", "adcaa")); // 3
