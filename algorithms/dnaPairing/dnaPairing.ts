// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.
// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str: string) {
  let pairedArr: string[][] = [];

  for (let letter of str) {
    switch (letter) {
      case "A":
        pairedArr.push(["A", "T"]);
        break;
      case "T":
        pairedArr.push(["T", "A"]);
        break;
      case "C":
        pairedArr.push(["C", "G"]);
        break;
      case "G":
        pairedArr.push(["G", "C"]);
        break;
      default:
        break;
    }
  }
  return pairedArr;
}

console.log(pairElement("ACG")); // [ [ 'A', 'T' ], [ 'C', 'G' ], [ 'G', 'C' ] ]
