// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).

const isTriangle = (a: number, b: number, c: number) => {
  return a + b > c && a + c > b && c + b > a;
};

console.log(isTriangle(4, 2, 3)); // true
console.log(isTriangle(5, 1, 5)); // true
console.log(isTriangle(1, 2, 5)); // false
console.log(isTriangle(2, 5, 1)); // false
