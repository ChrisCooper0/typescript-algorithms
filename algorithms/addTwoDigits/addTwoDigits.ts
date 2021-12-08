// You are given a two-digit integer n. Return the sum of its digits.
// For n = 29, the output should be addTwoDigits(n) = 11.

const addTwoDigits = (digits: any) => {
  return digits
    .toString()
    .split("")
    .reduce((prev: string, curr: string) => parseInt(prev) + parseInt(curr));
};

console.log(addTwoDigits("11")); // 2
console.log(addTwoDigits("24")); // 6
console.log(addTwoDigits("29")); // 11
