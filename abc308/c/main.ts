import * as fs from "fs";
const log = console.log;
const i = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const [N, ...r] = i;
const R = r.map((i) => {
    return i.split(" ").map(Number);
});
// const R = [
//     [2, 2],
//     [2, 4],
//     [2, 8],
// ];
const RR: BigInt[] = R.map((item) => {
    const a: bigint = BigInt(item[0]) * BigInt(10 ** 32);
    const b: bigint = BigInt(item[1]) * BigInt(10 ** 32);
    log(a, b, a / (a + b));
    return a / (a + b);
});
log(RR);

const getSortedIndices = (numbers: BigInt[]) => {
    const indices = Array.from(numbers.keys()); // 配列のインデックス番号の配列を生成
    indices.sort((a, b) => {
        if (numbers[a] > numbers[b]) {
            return 1;
        } else if (numbers[a] < numbers[b]) {
            return -1;
        } else {
            return 0;
        }
    });
    return indices.map((i) => i + 1);
};

log(getSortedIndices(RR).join(" "));
