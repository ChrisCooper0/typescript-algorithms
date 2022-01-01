// Call two arms equally strong if the heaviest weights they each are able to lift are equal.

// Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

// Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

// For yourLeft = 10, yourRight = 15, friendsLeft = 15 and friendsRight = 10, the output should be areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
// For yourLeft = 15, yourRight = 10, friendsLeft = 15 and friendsRight = 10, the output should be areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;

const equallyStrong = (
  yourLeft: number,
  yourRight: number,
  friendsLeft: number,
  friendsRight: number
) => {
  let yourStrongest = Math.max(yourLeft, yourRight);
  let friendsStrongest = Math.max(friendsLeft, friendsRight);

  if (yourStrongest === friendsStrongest) {
    return true;
  }

  if (yourLeft + yourRight === friendsLeft + friendsRight) {
    return true;
  }

  return false;
};

console.log(equallyStrong(10, 15, 15, 10)); // true
console.log(equallyStrong(15, 10, 15, 10)); // true
console.log(equallyStrong(15, 12, 10, 10)); // false
