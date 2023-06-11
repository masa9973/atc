import * as fs from "fs";

const i = fs.readFileSync("/dev/stdin", "utf8").split("\n");

// 奇数が2個で偶数1個分になると考える
// 偶数が偶数個あればyes

const il = i[1].split(" ").map((i) => parseInt(i));

const sum = il.reduce((a, b) => a + b);
let ans = "YES";
if (sum % 2 !== 0) {
    ans = "NO";
}

console.log(ans);
