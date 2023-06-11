import * as fs from "fs";

const i = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const n = parseInt(i[0]);

function cd(n: number) {
    return Math.abs(n).toString().length;
}

// a,bは入れ替わっても同じなので、√nだけ考えれば良い
let ans = 0;
const r = Math.ceil(Math.sqrt(n));
for (let i = 1; i <= r; i++) {
    if (n % i === 0) {
        ans = cd(Math.max(i, n / i));
    }
}

console.log(ans);
