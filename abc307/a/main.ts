import * as fs from "fs";
const log = console.log;
const i = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const sumup = (a: number[], start: number) => {
    const end = start + 6;
    let sum = 0;
    for (let o = start; o <= end; o++) {
        sum += a[o];
    }
    return sum;
};

const N = parseInt(i[0]);
const A = i[1].split(" ").map((i) => parseInt(i));
let ans: number[] = [];
for (let i = 0; i < N; i++) {
    const currentSum = sumup(A, i * 7);
    ans.push(currentSum);
}

log(ans.join(" "));
