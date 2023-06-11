import * as fs from "fs";

const i = fs.readFileSync("/dev/stdin", "utf8").split("\n");

const [n, k] = i[0].split(" ").map((i) => parseInt(i));
const l: number[] = i[1]
    .split(" ")
    .map((i) => parseInt(i))
    .sort((a, b) => b - a);

let ans = 0;
for (let i = 0; i < k; i++) {
    ans += l[i];
}

console.log(ans);
