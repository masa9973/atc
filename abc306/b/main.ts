import * as fs from "fs";
const log = console.log;
const i = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
const A = i[0].split(" ").map((i) => parseInt(i));
// let res = 1 << 3; // 2の3乗
let ans: bigint = BigInt(0);
A.forEach((i, idx) => {
    if (A[idx] === 1) {
        const x = BigInt(2) ** BigInt(idx);
        ans += x;
    }
});
log(ans.toString());
// let ans2 = 0;
// A.forEach((i, idx) => {
//     if (A[idx] === 1) {
//         const x = 1 << idx;
//         log(x);
//         ans2 += x;
//     }
// });
// log(ans2);
