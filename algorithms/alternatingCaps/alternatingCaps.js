"use strict";
// Write a function `alternatingCaps` that accepts a sentence string as an argument. The function should return the sentence where words alternate between lowercase and uppercase.
var alternatingCaps = function (str) {
    var word = str.split(" ");
    var alternating = "";
    for (var i = 0; i < word.length; i++) {
        if (i % 2 === 0) {
            alternating += word[i].toLowerCase() + " ";
        }
        else {
            alternating += word[i].toUpperCase() + " ";
        }
    }
    return alternating;
};
// Alternative but 3% slower according to jsbench
// let alternatingCaps = (str: string) => {
//   let words = str.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     if (i % 2 === 0) {
//       words[i] = words[i].toLowerCase();
//     } else {
//       words[i] = words[i].toUpperCase();
//     }
//   }
//   return words.join(" ");
// };
console.log(alternatingCaps("Alternating caps on this sentence string"));
console.log(alternatingCaps("take them to school")); // 'take THEM to SCHOOL'
console.log(alternatingCaps("What did ThEy EAT before?")); // 'what DID they EAT before?'
