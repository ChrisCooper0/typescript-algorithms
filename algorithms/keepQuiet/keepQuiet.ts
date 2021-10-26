// Write a function `keepQuiet` that accepts a string as an argument. The function should return the lowercase version of the string with 3 periods added to the end of it.

const keepQuiet = (str: string) => {
  return `${str.toLowerCase()}...`;
};

console.log(keepQuiet("LOUD")); // 'loud...'
console.log(keepQuiet("HOORAY")); // 'hooray...'
console.log(keepQuiet("WHAT?!?!")); // 'what?!?!...'
