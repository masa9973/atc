import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split(" ");

const [a, b] = [+input[0], +input[1]];

console.log(a - b + 1);
