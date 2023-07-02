import * as fs from "fs";
const log = console.log;
const i = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const S: number[] = i[0].split(" ").map((i) => parseInt(i));
// const S = [250, 250, 250, 250, 250, 250, 250, 250];

// 単調増加判定
const isMonotonicIncreasing = (arr: number[]) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
};

const isWithinRange = (arr: number[]) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 100 || arr[i] > 675) {
            return false;
        }
    }
    return true;
};

const is25 = (arr: number[]) => {
    for (let i = 0; i < arr.length; i++) {
        const val = arr[i] % 25 === 0;
        if (!val) {
            return false;
        }
    }
    return true;
};

const p = (arr: number[]) => {
    if (is25(arr) && isMonotonicIncreasing(arr) && isWithinRange(arr)) {
        return "Yes";
    } else {
        return "No";
    }
};

console.log(p(S));
