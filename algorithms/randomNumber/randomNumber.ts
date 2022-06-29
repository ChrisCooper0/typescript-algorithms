// Write a function which outputs a random number between 1 - 100

const randomNum = () => {
  return 1 + Math.floor(Math.random() * (100 - 1 + 1));
};

console.log(randomNum()); // Logs a random number
