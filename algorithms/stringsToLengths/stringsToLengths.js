"use strict";
// Write a function `stringsToLengths` that accepts an array of strings as an argument. The function should return a new array containing the lengths of the elements of the original array
var stringsToLengths = function (stringArr) {
    var lengths = [];
    for (var i = 0; i < stringArr.length; i++) {
        lengths.push(stringArr[i].length);
    }
    return lengths;
};
console.log(stringsToLengths(["1", "to", "tre"])); // [1,2,3]
console.log(stringsToLengths(["belly", "echo", "irony", "pickled"])); // [5, 4, 5, 7]
console.log(stringsToLengths(["on", "off", "handmade"])); // [2, 3, 8]
