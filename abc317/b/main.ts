import * as fs from "fs";
const log = console.log;
const i = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const N = parseInt(i[0]);
const A = i[1].split(" ").map(Number);

const ans = A.sort((a, b) => a - b);
function findMissingNumber(arr: number[]) {
    const expectedDifference = 1; // 期待される隣接する数値の差

    for (let i = 1; i < arr.length; i++) {
        const currentDifference = arr[i] - arr[i - 1];
        if (currentDifference > expectedDifference) {
            return arr[i - 1] + expectedDifference;
        }
    }

    // 配列の末尾が欠けている場合
    return arr[arr.length - 1] + expectedDifference;
}

log(findMissingNumber(ans));
