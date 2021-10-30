// Write a function to replace every character in a given string with the character following it in the alphabet
// String.fromCharCode
// charCodeAt

const charPlusOne = (str: any) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str[i].charCodeAt(str[i]);
    newStr += String.fromCharCode(charCode + 1);
  }
  return newStr;
};

console.log(charPlusOne("abcd")); // bcde

// Alternative solution
// const alphabetPlusOne = (str) => {
//   return str
//     .split("")
//     .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
//     .join("");
// };

// console.log(alphabetPlusOne("ABCDE")); // BCDEF
