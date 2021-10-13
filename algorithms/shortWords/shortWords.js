"use strict";
// Write a function `filterLongWords` that accepts an array of strings as an argument. The function should return a new array containing only the strings that are less than 5 characters long.
var filterLongWords = function (arr) {
    return arr.filter(function (arr) { return arr.length < 5; });
};
console.log(filterLongWords(["one", "two", "three", "superlongword"])); // ['one', 'two']
// Alternative solution
var filterLongWords2 = function (arr) {
    var shortWords = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length < 5) {
            shortWords.push(arr[i]);
        }
    }
    return shortWords;
};
console.log(filterLongWords2(["true", "false"])); // ['true', 'false']
