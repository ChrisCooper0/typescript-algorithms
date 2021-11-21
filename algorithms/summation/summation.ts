const summation = (num: number): number => {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
};

console.log(summation(4)); // 10
console.log(summation(8)); // 36
console.log(summation(28)); // 406
