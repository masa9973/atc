import * as fs from "fs";

const i = fs.readFileSync("/dev/stdin", "utf8").split("\n");

const atn = (s: string) => {
    return s.toUpperCase().charCodeAt(0) - 64;
};

const nta = (n: number) => {
    return String.fromCharCode(n + 64).toLowerCase();
};

const p = i[0].split("").map((i) => atn(i));
const s = new Set(p);

let ans = "None";
for (let i = 1; i < 27; i++) {
    if (!s.has(i)) {
        ans = nta(i);
        break;
    }
}

console.log(ans);
