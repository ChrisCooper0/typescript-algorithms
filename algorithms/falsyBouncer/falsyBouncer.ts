// Falsy Bouncer
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr: any[]): any[] {
  let falseArray: any[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i]) === false) {
      falseArray.push(arr[i]);
    }
  }
  return falseArray;
}

console.log(bouncer([7, "ate", "", false, 9, undefined, NaN])); // ["", false, undefined, NaN]
