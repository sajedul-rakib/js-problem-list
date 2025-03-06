var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let biggestNum = 0;
for (const num of numbers) {
  if (num > biggestNum) {
    biggestNum = num;
  }
}

console.log(biggestNum);
