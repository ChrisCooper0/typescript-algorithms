// Write a function `makeAcronym` that accepts a sentence string as an argument. The function should return a string containing the first character of each word in the sentence
const makeAcronym = (str: string): any => {
  const wordArr = str.split(" ");
  let newStr = "";
  for (let i = 0; i < wordArr.length; i++) {
    newStr += wordArr[i].slice(0, 1);
  }
  return newStr;
};

console.log(
  makeAcronym("Lorem ipsum dolor sit amet, consectetur adipiscing elit")
); // Lidsacae
