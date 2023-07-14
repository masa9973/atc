import * as fs from "fs";
const i = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
const log = console.log;

const [A, B] = i[0].split(" ").map(Number);
// const [A, B] = [2, 4];
let ans = "No";
const diff = B - A;
const anti1 = A === 3 && B === 4;
const anti2 = A === 6 && B === 7;

if (diff === 1 && !anti1 && !anti2) {
    ans = "Yes";
}

log(ans);
