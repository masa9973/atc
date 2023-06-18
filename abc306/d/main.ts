import * as fs from "fs";
const log = console.log;
const i = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const N = parseInt(i[0]);
const XY = i.filter((i, idx) => idx !== 0).map((i) => i.split(" ").map((i) => parseInt(i)));
const X = XY.map((i) => i[0]);
const Y = XY.map((i) => i[1]);
// お腹を壊している時に毒入りの料理を食べない、dp
let dp = new Array(300005);
for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(2);
}
for (let i = 0; i <= N; i++) {
    dp[i][0] = 0;
    dp[i][1] = 0;
}

for (let i = 0; i < N; i++) {
    // i番目の料理を食べる場合
    if (X[i] === 0) {
        // i番目でお腹を壊していない場合
        dp[i + 1][0] = Math.max(dp[i][0], Math.max(dp[i][0], dp[i][1]) + Y[i]);
    } else {
        dp[i + 1][1] = Math.max(dp[i][1], dp[i][0] + Y[i]);
    }
    // i番目の料理を食べない場合
    dp[i + 1][0] = Math.max(dp[i + 1][0], dp[i][0]);
    dp[i + 1][1] = Math.max(dp[i + 1][1], dp[i][1]);
}
log(Math.max(dp[N][0], dp[N][1]));
