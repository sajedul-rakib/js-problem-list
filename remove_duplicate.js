var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

const arrayLength = numbers.length;

for (let i = 0; i < arrayLength - 1; i++) {
  for (let j = i + 1; j < arrayLength; j++) {
    if (numbers[i] === numbers[j]) {
      numbers.splice(j, 1);
    }
  }
}

console.log(numbers);
