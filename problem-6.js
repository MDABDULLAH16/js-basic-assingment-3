/** Problem 06 :  (Current Salary )  */
var experience = 3;
var startingSalary = 15000;
//write your code here

var salary = startingSalary;
for (var i = 1; i <= experience; i++) {
  salary = salary + salary * 0.05;
}
console.log(parseFloat(salary.toFixed(2)));
