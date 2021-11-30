// Compare two integers given as strings.
// For a = "12" and b = "13", the output should be compareIntegers(a, b) = "less";
// For a = "875" and b = "799", the output should be compareIntegers(a, b) = "greater";
// For a = "1000" and b = "1000", the output should be compareIntegers(a, b) = "equal".

function compareIntegers(a: string, b: string): string {
  if (parseInt(a) == parseInt(b)) {
    return "equal";
  }
  return parseInt(a) < parseInt(b) ? "less" : "greater";
}

console.log(compareIntegers("12", "13")); // less
console.log(compareIntegers("875", "799")); // greater
console.log(compareIntegers("1000", "1000")); // equal
