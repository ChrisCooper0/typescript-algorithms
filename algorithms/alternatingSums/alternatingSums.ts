// Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.
// You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.
// For a = [50, 60, 60, 45, 70], the output should be alternatingSums(a) = [180, 105].

const alternatingSums = (arr: number[]): number[] => {
  let sum = [];
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      count1 += arr[i];
    } else {
      count2 += arr[i];
    }
  }
  sum.push(count1, count2);

  // Alternative with forEach loop

  //   arr.forEach((element, index) => {
  //     if (index % 2 === 0) {
  //       count1 += element;
  //     } else {
  //       count2 += element;
  //     }
  //   });
  //   return [count1, count2];

  return sum;
};

console.log(alternatingSums([50, 60, 60, 45, 70])); // [180, 105]
