import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");

const nums: number[] = input[1]
    .split(" ")
    .map((item) => parseInt(item))
    .sort((a, b) => b - a);

let sA = 0;
let sB = 0;

for (let n = 0; n < nums.length; n++) {
    if (n % 2 === 0) {
        sA += nums[n];
    } else {
        sB += nums[n];
    }
}

console.log(sA - sB);
