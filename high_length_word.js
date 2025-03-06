var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let biggestWord = "";
for (const name of friends) {
  if (name.length > biggestWord.length) {
    biggestWord = name;
  }
}

console.log(biggestWord);
