// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like the and of

const titleCase = (str: string): string => {
  let words = str.toLowerCase().split(" ");
  let array = [];
  for (let word of words) {
    array.push(word[0].toUpperCase() + word.slice(1));
  }
  return array.join(" ");
};

console.log(titleCase("I'm a little tea pot")); // I'm A Little Tea Pot
