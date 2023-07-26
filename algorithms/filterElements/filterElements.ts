// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

const filter = (arr: number[], fn: (n: number, i: number) => any): number[] => {
  // declarive solution - not allowed on LC
  //   return arr.filter(fn);

  // imperative solution
  const newArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

function greaterThan10(n: number) {
  return n > 10;
}

console.log(filter([0, 10, 20, 30], greaterThan10)); // [20, 30]
