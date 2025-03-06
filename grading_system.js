//80–100 --A+
//70-79	 --A
//60- 69 --A-
//50-59  --B
//40-49  --C
//33-39  --D
//0--32  --F

let result = 101;

if (result >= 0 && result <= 32) {
  console.log("You faild!Try againg and study more");
} else if (result >= 33 && result <= 39) {
  console.log("You got D. You passed");
} else if (result >= 40 && result <= 49) {
  console.log("You got C. You passed");
} else if (result >= 50 && result <= 59) {
  console.log("You got B. You passed");
} else if (result >= 60 && result <= 69) {
  console.log("You got A-. You passed");
} else if (result >= 70 && result <= 79) {
  console.log("You got A. You passed");
} else if (result >= 80 && result <= 100) {
  console.log("Congratulation you got A+. You passed");
} else {
  console.log("Invalid result");
}
