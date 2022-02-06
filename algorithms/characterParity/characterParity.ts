// Given a character, check if it represents an odd digit, an even digit or not a digit at all.

// For symbol = '5', the output should be characterParity(symbol) = "odd";
// For symbol = '8', the output should be characterParity(symbol) = "even";
// For symbol = 'q', the output should be characterParity(symbol) = "not a digit".

const characterParity = (char: string): string => {
  let character = parseInt(char);

  if (isNaN(character)) {
    return "not a digit";
  } else if (character % 2 !== 0) {
    return "odd";
  } else {
    return "even";
  }
};

console.log(characterParity("5")); // "odd"
console.log(characterParity("8")); // "even"
console.log(characterParity("q")); // "not a digit"
