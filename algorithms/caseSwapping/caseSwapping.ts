// Given a string, swap the case for each of the letters.
// e.g. CodEwArs --> cODeWaRS

const swap = (str: string): string => {
  let strArr = str.split("");
  let swappedStr = "";
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].toUpperCase() === str[i]) {
      swappedStr += strArr[i].toLowerCase();
    } else {
      swappedStr += strArr[i].toUpperCase();
    }
  }
  return swappedStr;
};

console.log(swap("abc")); // ABC
console.log(swap("ABC")); // abc
console.log(swap("CodeWars")); // cODEwARS
