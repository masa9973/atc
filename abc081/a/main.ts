import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8");

let count = 0;

const inputStr = [...input];

if (inputStr[0] === "1") count++;
if (inputStr[1] === "1") count++;
if (inputStr[2] === "1") count++;

console.log(count);
