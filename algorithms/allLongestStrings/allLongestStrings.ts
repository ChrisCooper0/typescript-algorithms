// Given an array of strings, return another array containing all of its longest strings.
// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

const allLongestStrings = (array: string[]) => {
  let largestLength = array[0].length;

  for (let i = 1; i < array.length; i++) {
    if (array[i].length >= largestLength) {
      largestLength = array[i].length;
    }
  }
  array = array.filter((el) => {
    return el.length === largestLength;
  });
  return array;
};

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
