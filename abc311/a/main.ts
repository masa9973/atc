import * as fs from "fs";
const log = console.log;
const i = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const N = parseInt(i[0]);
const S: string[] = i[1].split("");

let AFlag = false;
let BFlag = false;
let CFlag = false;
let count = 0;
while (!AFlag || !BFlag || !CFlag) {
    const s = S[count];
    if (s === "A") {
        AFlag = true;
    } else if (s === "B") {
        BFlag = true;
    } else if (s === "C") {
        CFlag = true;
    }
    count++;
}

log(count);
