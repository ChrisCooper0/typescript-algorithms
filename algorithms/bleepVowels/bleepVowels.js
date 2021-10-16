"use strict";
// Write a function `bleepVowels` that accepts a string as an argument. The function should return a new string where all vowels are replaced with `*`s. Vowels are the letters a, e, i, o, u.
var bleepVowels = function (str) {
    var vowels = ["a", "e", "i", "o", "u"];
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) > -1) {
            newStr += "*";
        }
        else {
            newStr += str[i];
        }
    }
    return newStr;
};
console.log(bleepVowels("skateboard")); // 'sk*t*b**rd'
console.log(bleepVowels("slipper")); // 'sl*pp*r'
console.log(bleepVowels("range")); // 'r*ng*'
console.log(bleepVowels("brisk morning")); // 'br*sk m*rn*ng'
