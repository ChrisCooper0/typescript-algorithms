"use strict";
// Write a function `stayPositive` that accepts an array of numbers as an argument. The function should return an array containing only the positive numbers.
var positiveNumbers = function (num) {
    var positives = [];
    for (var i = 0; i < num.length; i++) {
        if (num[i] >= 0) {
            positives.push(num[i]);
        }
    }
    return positives;
};
console.log(positiveNumbers([10, -4, 3, 6])); // [10, 3, 6]
console.log(positiveNumbers([-5, 11, -40, 30.3, -2])); // [11, 30.3]
console.log(positiveNumbers([-11, -30])); // []
