// Write a function `startsWithR` that accepts a string as an argument and returns a boolean indicating whether or not the string starts with 'r' or 'R'.

const startsWithR = (str: string) => {
  return str[0] === "r" || str[0] === "R" ? true : false;
};

console.log(startsWithR("Does not start with r")); // false
console.log(startsWithR("R starts with r")); // true
console.log(startsWithR("r starts with r")); // true
