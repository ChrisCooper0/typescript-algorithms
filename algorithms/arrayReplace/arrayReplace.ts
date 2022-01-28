// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.
// Example
// For inputArray = [1, 2, 1], elemToReplace = 1 and substitutionElem = 3, the output should be arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].

const arrayReplace = (
  inputArr: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] => {
  inputArr.forEach((element, index) => {
    if (element === elemToReplace) {
      inputArr[index] = substitutionElem;
    }
  });

  return inputArr;
};

console.log(arrayReplace([1, 2, 1], 1, 3)); // [3, 2, 3]
