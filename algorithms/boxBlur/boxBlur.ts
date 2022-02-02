// Last night you had to study, but decided to party instead. Now there is a black and white photo of you that is about to go viral. You cannot let this ruin your reputation, so you want to apply box blur algorithm to the photo to hide its content.
// The algorithm works as follows: each pixel x in the resulting image has a value equal to the average value of the input image pixels' values from the 3 × 3 square with the center at x. All pixels at the edges are cropped.
// As pixel's value is an integer, all fractions should be rounded down.

// Example

// For

// image = [[1, 1, 1],
//         [1, 7, 1],
//         [1, 1, 1]]
// the output should be boxBlur(image) = [[1]].

// In the given example all boundary pixels were cropped, and the value of the pixel in the middle was obtained as (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) / 9 = 15 / 9 = rounded down = 1.

const boxBlur = (arr: number[][]): number[][] => {
  let finalArr = [];
  for (let y = 0; y < arr.length - 2; y++) {
    let line = [];
    for (let x = 0; x < arr[y].length - 2; x++) {
      let sum = 0;
      let count = 0;
      for (let a = y; a < y + 3; a++) {
        for (let b = x; b < x + 3; b++) {
          sum += arr[a][b];
          count++;
        }
      }
      line.push(Math.floor(sum / count));
    }
    finalArr.push(line);
  }
  return finalArr;
};

console.log(
  boxBlur([
    [1, 1, 1],
    [1, 7, 1],
    [1, 1, 1],
  ])
); // [[1]]
