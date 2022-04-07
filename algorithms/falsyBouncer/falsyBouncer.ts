// Falsy Bouncer
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr: any[]): any[] {
  let falseArray: any[] = [];
  for (let item of arr) {
    if (Boolean(item) === false) {
      falseArray.push(item);
    }
  }
  return falseArray;

  // Alternative solution
  // return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9, undefined, NaN])); // ["", false, undefined, NaN]
