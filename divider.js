const numbers = [
  23, 8, 35, 17, 42, 3, 27, 14, 50, 6, 30, 11, 45, 1, 33, 19, 39, 5, 21, 47, 9,
  26, 48, 16, 31, 4, 37, 13, 41, 2, 28, 46, 7, 34, 22, 49, 12, 44, 18, 32, 10,
  38, 15, 36, 24, 40, 20, 29, 43, 25,
];

const newNumList = [];
const arrayLength = numbers.length;
for (let i = 0; i < arrayLength; i++) {
  if (numbers[i] % 3 == 0 || numbers[i] % 5 == 0) {
    newNumList.push(numbers[i]);
  }
}

console.log(newNumList);
