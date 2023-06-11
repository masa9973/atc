import * as fs from "fs";

const i = fs.readFileSync("/dev/stdin", "utf8").split("\n")[0];
const n = parseInt(i);

// 81以上は無理なので除外
// 1-9で割り切れるか判定

const checkDivisibility = (n: number) => {
    if (n === 1) return "Yes";
    if (n > 81) return "No";
    for (let i = 9; i > 1; i--) {
        if (n % i === 0 && 1 <= n / i && n / i <= 9) {
            return "Yes";
        }
    }
    return "No";
};

console.log(checkDivisibility(n));
