// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
// - If a word begins with a vowel, just add way at the end.

const translatePigLatin = (str: string | any) => {
  let vowels = str.match(/[aeiou]/);
  let firstIndex = str.indexOf(vowels);

  if (firstIndex > 0) {
    str = str.slice(firstIndex) + str.slice(0, firstIndex) + "ay";
  } else if (vowels === null) {
    str = str + "ay";
  } else {
    str = str + "way";
  }
  return str;
};

console.log(translatePigLatin("glove")); // oveglay
console.log(translatePigLatin("algorithm")); // algorithmway
console.log(translatePigLatin("paragraphs")); // aragraphspay
