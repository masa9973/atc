import * as fs from "fs";
const log = console.log;
const i = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const N = parseInt(i[0]);

const jTen = (n: number) => {
    return n.toString().includes("7");
};

function toOctal(num: number): string {
    if (num === 0) return "0"; // 0の場合は特別扱い

    let octalStr = "";
    let tempNum = num;

    while (tempNum !== 0) {
        const digit = tempNum % 8;
        octalStr = digit.toString() + octalStr;
        tempNum = Math.floor(tempNum / 8);
    }

    return octalStr;
}

const jOct = (n: number) => {
    const s = toOctal(n);
    return s.includes("7");
};
let ans = 0;
for (let i = 1; i <= N; i++) {
    if (jTen(i) === false && jOct(i) === false) {
        ans++;
    }
}
log(ans);
