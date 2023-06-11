import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split(" ");

const a = +input[0];
const b = +input[1];

function checkNum(a: number, b: number) {
    if (a % 2 === 0) {
        return "Even";
    } else if (b % 2 !== 0) {
        return "Odd";
    } else {
        return "Even";
    }
}

console.log(checkNum(a, b));
