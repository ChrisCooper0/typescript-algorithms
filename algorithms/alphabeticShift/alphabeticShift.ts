// Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).
// For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".

const alphabeticShift = (str: any): string => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArr = alphabet.split("");

  str = str.split("");

  for (let i = 0; i < str.length; i++) {
    let indexVal = 0;
    if (str[i] != "z") {
      indexVal = alphabetArr.indexOf(str[i]) + 1;
    }
    str[i] = alphabetArr[indexVal];
  }
  return str.join("");
};

console.log(alphabeticShift("crazy")); // "dsbaz"
