import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");

// 数字を入れると2で何回割り切れるかを返す関数
const separateNum = (num: number): number => {
    let tmp = num;
    let count = 0;
    while (tmp % 2 === 0) {
        tmp = tmp / 2;
        count++;
    }
    return count;
};

const results = input[1].split(" ").map((item) => separateNum(parseInt(item)));

console.log(Math.min(...results));
