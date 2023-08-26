import * as fs from "fs";
const log = console.log;
const i = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const [N, H, X] = i[0].split(" ").map(Number);

const P: number[] = i[1].split(" ").map(Number);

const ans = P.map((i, idx) => {
    if (H + i >= X) {
        return idx + 1;
    }
    return 1000;
});

log(Math.min(...ans));
