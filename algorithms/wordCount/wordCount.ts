// Write a function `wordCount(sentence, targetWords)` that accepts a sentence string and an array of `targetWords`. The function should return a count of the number of words of the sentence that are in `targetWords`.

const wordCount = (sentence: string, targetWords: string[]): number => {
  let count = 0;
  let sentenceArr = sentence.split(" ");

  for (let i = 0; i < sentenceArr.length; i++) {
    if (targetWords.includes(sentenceArr[i])) {
      count++;
    }
  }
  return count;
};

console.log(wordCount("a b c d a b a", ["a", "c"])); // 4s
console.log(wordCount("open the window please", ["please", "open", "sorry"])); // 2
console.log(wordCount("drive to the cinema", ["the", "driver"])); // 1
console.log(wordCount("can I have that can", ["can", "I"])); // 3
