// Write a function `endsWithT` that accepts a string as an argument. The function should return a boolean indicating whether or not the string ends with the character 't'.

const endsWithT = (str: string) => {
  return str.slice(-1) === "t" ? true : false;
};

console.log(endsWithT("endswitht")); // true
console.log(endsWithT("endswithp")); // false