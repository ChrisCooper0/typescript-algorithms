// Check whether the given string is a subsequence of the plaintext alphabet
// For s = "effg" or s = "cdce", the output should be alphabetSubsequence(s) = false
// For s = "ace" or s = "bxz", the output should be alphabetSubsequence(s) = true

const alphabetSubSequence = (str: string): boolean => {
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) <= str.charAt(i - 1)) {
      return false;
    }
  }
  return true;
};

console.log(alphabetSubSequence("effg")); // false
console.log(alphabetSubSequence("cdce")); // false
console.log(alphabetSubSequence("ace")); // true
console.log(alphabetSubSequence("bxz")); // true
