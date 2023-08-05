import * as fs from "fs";
const log = console.log;
const i = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
// やるだけ
const N = parseInt(i[0]);
const [A, B] = [i[1].split(" ").map(Number), i[2].split(" ").map(Number)];
let ans = 0;
for (let i = 0; i < N; i++) {
    const sum = A[i] * B[i];
    ans += sum;
}

if (ans === 0) {
    log("Yes");
} else {
    log("No");
}
