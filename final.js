/** Problem -01 ( Divide the Asset ) */
var area = 2060;
//write your code here
var everyPersonLand = area / 2;
console.log(everyPersonLand);

/** Problem -02 ( Cycle or Laptop ) */
var money = 45000;
//write your code here
if (money >= 25000) {
  console.log("Laptop");
} else if (money >= 10000) {
  console.log("Cycle");
} else console.log("Chocolate");

/** Problem -03 ( Medicine Planner ) */
var lastDay = 6;
//write your code here
for (var i = 1; i <= lastDay; i++) {
  if (i % 3 == 0) {
    console.log(`${i} - medicine`);
  } else {
    console.log(`${i} - rest`);
  }
}

/** Problem 04 - (Delete / Store) */
var fileName = "exp.mp4";
//write your code here

var fileExtension = fileName.split(".").pop();
var firstHash = fileName.slice(0, 1);

if (firstHash == "#") {
  console.log("Store");
} else if (fileExtension.toLowerCase() === "pdf") {
  console.log("Store");
} else if (fileExtension.toLowerCase() === "docx") {
  console.log("Store");
} else {
  console.log("Delete");
}

/** Problem 05 - ( PH Email Generator )  */
var student = { name: "mewo", roll: 96, department: "cse" };
//write your code here
var emailExtension = "@ph.ac.bd";
var studentEmail = `${student.name}${student.roll}.${student.department}${emailExtension}`;
console.log(studentEmail);

/** Problem 06 :  (Current Salary )  */
var experience = 3;
var startingSalary = 15000;
//write your code here

var salary = startingSalary;
for (var i = 1; i <= experience; i++) {
  salary = salary + salary * 0.05;
}
console.log(parseFloat(salary.toFixed(2)));
