// Write a function `removeShortWords` that accepts a sentence string as an argument. The function should return a new sentence where all of the words shorter than 4 characters are removed.

const removeShortWords = (str: string) => {
  let arrStr = str.split(" ");
  let shortStr = [];
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i].length >= 4) {
      shortStr.push(arrStr[i]);
    }
  }
  return shortStr.join(" ");
};

console.log(removeShortWords("knock on the door will you")); // 'knock door will'
console.log(removeShortWords("a terrible plan")); // 'terrible plan'
console.log(removeShortWords("run faster that way")); // 'faster that'
