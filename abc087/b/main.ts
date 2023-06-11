import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");

// 合計金額の全通りを作成する

const [A, B, C, X] = input.map((item) => parseInt(item));

let res = 0;

for (let a = 0; a <= A; a++) {
    for (let b = 0; b <= B; b++) {
        for (let c = 0; c <= C; c++) {
            const total = a * 500 + b * 100 + c * 50;
            if (total === X) res++;
        }
    }
}

console.log(res);
