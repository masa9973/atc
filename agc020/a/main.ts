import * as fs from "fs";

const i = fs.readFileSync("/dev/stdin", "utf8").split("\n");

// 差が偶数ならaliceの勝利

const il = i[0].split(" ").map((i) => parseInt(i));

const [, a, b] = il;
const d = b - a;
let ans;
if (d % 2 === 0) {
    ans = "Alice";
} else {
    ans = "Borys";
}

console.log(ans);
