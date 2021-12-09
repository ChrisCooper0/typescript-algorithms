// Given a rectangular matrix of characters, add a border of asterisks(*) to it.
// For picture = ["abc", "ded"]
// the output should be
// ["*****",
//  "*abc*",
//  "*ded*",
//  "*****"]

const border = (arr: string[]) => {
  const result = [];
  const length = arr[0].length;
  const asterisk = "*".repeat(length + 2);
  result.push(asterisk);
  for (let i = 0; i < arr.length; i++) {
    result.push(`*${arr[i]}*`);
  }
  result.push(asterisk);
  return result;
};

console.log(border(["abc", "ded"]));
console.log(border(["abc", "def", "ghi"]));
