// Write a function `doubleVowel` that accepts a string as an argument. The function should return the string where every occurrence of a vowel in the original string is repeated twice consecutively.

// const doubleVowel = (str: string): string =>{
//   return str.replace(/[aeiou]/gi, "$&$&");
// }

const doubleVowel = (str: string) => {
  let vowels = "aeiou";
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      newStr += str[i] + str[i];
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};

console.log(doubleVowel("hello")); // "heelloo"
console.log(doubleVowel("runner")); // 'ruunneer'
console.log(doubleVowel("stoplight")); // 'stoopliight'
