// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.
// Note: You have to use the arguments object.

// @ts-ignore
function destroyer(arr: number[], ...arg: number[]): number[] {
  let newArr = [];
  let args = Array.from(arguments);
  let targets = args.splice(1);

  for (let num of arr) {
    if (targets.indexOf(num) === -1) {
      newArr.push(num);
    }
  }

  return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
