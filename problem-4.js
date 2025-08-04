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
