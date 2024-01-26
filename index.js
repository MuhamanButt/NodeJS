//! index.js

const fs = require("node:fs");

console.log("First");
let fileContents = fs.readFileSync("./file.txt");
console.log(fileContents);
fileContents = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContents);
console.log("Second");
//here sync means that the js engine will wait till the data is read before moving to next line

fs.readFile("./file.txt", "utf-8", (error, data) => {
  if (error) console.log(error);
  else console.log(data);
});
console.log("Third");

fs.writeFileSync("./greet.txt", "Hello world");
fs.writeFile("./greet.txt", "Hello Muhaman", (error) => {
  if (error) console.log(error);
  else console.log("File written");
});

fs.writeFile("./greet.txt", " Hello Ali", { flag: "a" }, (error) => {
  if (error) console.log(error);
  else console.log("File written");
});
