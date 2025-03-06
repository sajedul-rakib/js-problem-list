let year = 1700; //the year is not leap year
year = 2000; //the year is leap year

//check the year is leap year

if (year % 4 == 0 && year % 100 != 0) {
  console.log("The year of " + year + " is leap year");
} else if (year % 400 == 0) {
  console.log("The year of " + year + " is leap year");
} else {
  console.log("The year of " + year + " is not leap year");
}
