"use strict";
// Write a function `makeAcronym` that accepts a sentence string as an argument. The function should return a string containing the first character of each word in the sentence
var makeAcronym = function (str) {
    var words = str.split(" ");
    var acronym = "";
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        acronym += word[0];
    }
    return acronym.toUpperCase();
};
console.log(makeAcronym("New York")); // NY
console.log(makeAcronym("same stuff different day")); // SSDD
console.log(makeAcronym("Laugh out loud")); // LOL
console.log(makeAcronym("don't over think stuff")); // DOTS
