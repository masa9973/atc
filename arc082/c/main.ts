import * as fs from "fs";
const log = console.log;
const i = fs.readFileSync("/dev/stdin", "utf8").split("\n");

const N = parseInt(i[0]);

const a = i[1].split(" ").map((i) => parseInt(i));

const xl = Array(100002).fill(0);
for (let i = 0; i < N; i++) {
    xl[a[i]]++;
}

let ans = 0;
for (let x = 0; x < 100000; x++) {
    const count = xl[x] + xl[x + 1] + xl[x + 2];
    ans = Math.max(count, ans); // 個数を更新
}

log(ans);
