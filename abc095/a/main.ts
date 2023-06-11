import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");

const orderArr = input[0].split("");
let answer: number = 700;

if (orderArr[0] === "o") answer += 100;
if (orderArr[1] === "o") answer += 100;
if (orderArr[2] === "o") answer += 100;

console.log(answer);
