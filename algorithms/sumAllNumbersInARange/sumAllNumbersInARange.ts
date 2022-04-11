//

const sumAll = (arr: number[]) => {
  let count = 0;
  arr.sort((a, b) => a - b);
  for (let i = arr[0]; i <= arr[1]; i++) {
    count += i;
  }
  return count;
};

console.log(sumAll([1, 4])); // 10
console.log(sumAll([4, 1])); // 10
console.log(sumAll([5, 10])); // 45
