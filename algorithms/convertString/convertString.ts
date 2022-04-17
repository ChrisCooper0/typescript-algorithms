// You are given the string s. Your friend just asked you if it's possible to change the string from s to a string t by removing some characters from it.
// You're a pro at programming, so you decided to create a program to determine this.
// For s = "ceoydefthf5iyg5h5yts" and t = "codefights", the output should be convertString(s, t) = true.
// For s = "addbyca" and t = "abcd", the output should be convertString(s, t) = false.

const convertString = (s: string, t: string) => {
  let word = "";
  let index = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[index]) {
      word = word.concat(s[i]);
      index += 1;
    }
  }
  if (word === t) {
    return true;
  }
  return false;
};

console.log(convertString("ceoydefthf5iyg5h5yts", "codefights")); // true
console.log(convertString("addbyca", "abcd")); // false
