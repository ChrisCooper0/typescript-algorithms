// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

const spinalCase = (str: string): string => {
  let fixedStr = str.replace(/([a-z])([A-Z])/g, "$1_$2");
  let regex = /[\s_]+/g;
  return fixedStr.split(regex).join("-").toLowerCase();
};

console.log(spinalCase("This Is Spinal Tap")); // this-is-spinal-tap
