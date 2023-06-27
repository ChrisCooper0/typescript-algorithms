// Given a string, find the number of different characters in it.
// Example
// For s = "cabca", the output should be differentSymbolsNaive(s) = 3.
// There are 3 different characters a, b and c.

const differentSymbols = (str: string): number => {
  let occurences: string[] = [];

  let strArray = str.split("");

  strArray.forEach((char) => {
    if (!occurences.includes(char)) {
      occurences.push(char);
    }
  });

  return occurences.length;
};

console.log(differentSymbols("cabca")); // 3
console.log(differentSymbols("cabcade")); // 5
