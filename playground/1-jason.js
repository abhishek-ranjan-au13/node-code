const fs = require("fs");

// const book = { title: "ego is th enemy", author: "Rayan Holiday" };

// const bookJson = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJson);

// const dataBuffer = fs.readFileSync("1-json.json");
// console.log(dataBuffer);
// const dataJson = dataBuffer.toString();
// const data = JSON.parse(dataJson);
// console.log(dataJson);
// console.log(data);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJson = dataBuffer.toString();
const user = JSON.parse(dataJson);
console.log(user);
user.name = "Abhishek Ranjan";
user.age = 29;

const userJson = JSON.stringify(user);

fs.writeFileSync("1-json.json", userJson);
