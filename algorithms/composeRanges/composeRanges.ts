// Given a sorted integer array that does not contain any duplicates, return a summary of the number ranges it contains.
// For nums = [-1, 0, 1, 2, 6, 7, 9], the output should be composeRanges(nums) = ["-1->2", "6->7", "9"].

const composeRanges = (arr: number[]): string[] => {
  let ranges: any[] = [];
  let subRanges: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 === arr[i + 1]) {
      subRanges.push(arr[i]);
    } else {
      subRanges.push(arr[i]);
      ranges.push(subRanges);
      subRanges = [];
    }
  }

  for (let i = 0; i < ranges.length; i++) {
    let start: number = ranges[i][0];
    let end: number = ranges[i][ranges[i].length - 1];
    ranges[i] = ranges[i].length > 1 ? `${start} -> ${end}` : `${start}`;
  }

  return ranges;
};

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9])); // ["-1->2", "6->7", "9"]
