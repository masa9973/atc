import * as fs from "fs";
const log = console.log;
const i = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const [N, M, P] = i[0].split(" ").map(Number);

// m + xp が nよりも小さい条件でxの大きいものを求める

let count = 0;
while (M + count * P <= N) {
    count++;
}
log(count);
