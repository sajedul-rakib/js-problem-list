const numbers = [
  12, 5, 18, 1, 9, 16, 3, 20, 7, 14, 10, 4, 19, 8, 15, 2, 11, 6, 17, 13,
];

const arrayLength = numbers.length;

for (let i = 0; i < arrayLength - 1; i++) {
  for (let j = i + 1; j < arrayLength; j++) {
    if (numbers[i] > numbers[j]) {
      let temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;
    }
  }
}

//another way
// numbers.sort((a, b) => a - b);

console.log(numbers);
