// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = (l: number, w: number) => {
  return l === w ? l * w : l * 2 + w * 2;
};

console.log(areaOrPerimeter(2, 5)); // 14
console.log(areaOrPerimeter(5, 5)); // 25
console.log(areaOrPerimeter(9, 3)); // 24
