// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

const replaceStr = (str: string, before: string, after: string) => {
  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  } else {
    after = after[0].toLowerCase() + after.slice(1);
  }

  return str.replace(before, after);
};

console.log(replaceStr("His name is Tom", "Tom", "john")); // His name is John
console.log(
  replaceStr("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
); // A quick brown fox leaped over the lazy dog

console.log(
  replaceStr("Let us get back to more Coding", "Coding", "algorithms")
); // Let us get back to more Algorithms
