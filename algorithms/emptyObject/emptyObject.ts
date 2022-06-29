// Write a function to check if an object is empty or not

const isEmptyObject = (obj: Object) => {
  return Object.keys(obj).length ? false : true;
};

console.log(isEmptyObject({ empty: false })); // false
console.log(isEmptyObject({})); // true
