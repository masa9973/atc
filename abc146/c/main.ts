import * as fs from "fs";
const log = console.log;
const i = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const [A, B, X] = i[0].split(" ").map(BigInt);

// const A = BigInt(1e9);
// const B = BigInt(13e9);
// const X = BigInt(1e18);

const calcP = (N: bigint): bigint => {
    const nStr = N.toString();
    const dn = BigInt(nStr.length);
    return A * N + B * dn;
};

let left = 0n;
let right = BigInt(1e9 + 1);
while (left + 1n < right) {
    const mid = (left + right) / 2n;
    // const price = A * mid + B * BigInt(mid.toString().length);
    const price = calcP(mid);
    if (price > X) {
        right = mid;
    } else {
        left = mid;
    }
}

log(Number(left));
