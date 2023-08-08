type FnType = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: FnType, init: number): number {
  let res = init;

  for (const n of nums) {
    res = fn(res, n);
  }

  return res;
}

const nums = [1, 2, 3, 4];
const functionProp = function sum(accum: any, curr: any) {
  return accum + curr;
};
const init = 0;

console.log(reduce(nums, functionProp, init)); // 10
