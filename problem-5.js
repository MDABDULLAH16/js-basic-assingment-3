/** Problem 05 - ( PH Email Generator )  */
var student = { name: "mewo", roll: 96, department: "cse" };
//write your code here
var emailExtension = "@ph.ac.bd";
var studentEmail = `${student.name}${student.roll}.${student.department}${emailExtension}`;
console.log(studentEmail);
