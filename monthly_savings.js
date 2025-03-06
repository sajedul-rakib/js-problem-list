function monthlySavings(totalIncome, livingCost) {
  if (totalIncome === undefined && livingCost === undefined) {
    return "invalid input";
  } else {
    if (typeof totalIncome === "object" && typeof livingCost === "number") {
      let totalSave = 0;
      for (const salary of totalIncome) {
        if (salary >= 3000) {
          totalSave += salary - salary * (20 / 100);
        } else {
          totalSave += salary;
        }
      }
      let savings = totalSave - livingCost;
      if (livingCost >= 0) {
        return savings;
      } else {
        return "earn more";
      }
    } else {
      return "invalid input";
    }
  }
}
let firstIncome = [1000, 2000, 3000];
let secondIncome = [1000, 2000, 2500];

let savings = monthlySavings(firstIncome, 5000);

console.log(savings);
