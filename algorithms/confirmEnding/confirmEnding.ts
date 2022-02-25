// Check if a string (first argument, str) ends with the given target string (second argument, target).
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
// confirmEnding("Abstraction", "action") returns true;
// confirmEnding("Open sesame", "pen") returns false;
// substr()

const confirmEnding = (str: string, target: string): boolean => {
  // .endsWith() method
  //   return sentence.endsWith(str);

  // .substring() method
  let start = str.length - target.length;
  return str.substring(start) === target;
};

console.log(confirmEnding("Abstraction", "action")); // true
console.log(confirmEnding("Open sesame", "pen")); // false
