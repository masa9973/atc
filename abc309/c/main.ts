import * as fs from "fs";
const log = console.log;
const i = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const [N, K] = i[0].split(" ").map(Number);
const AB: number[][] = [];
for (let j = 0; j < N; j++) {
    const l = i[j + 1].split(" ").map(Number);
    AB.push(l);
}

// aiの昇順にソートを行う
AB.sort((a, b) => a[0] - b[0]);
let medNum = AB.reduce((a, b) => a + b[1], 0);
let flg = false;
if (medNum <= K) log("1");
else {
    for (let j = 0; j < AB.length; j++) {
        if (medNum <= K) {
            // 条件を満たしていた場合、前回飲み切った薬を飲み切るまでの日数+1が経過している
            log(AB[j - 1][0] + 1);
            flg = true;
            break;
        }
        medNum -= AB[j][1];
    }
    // ここでなんかしないといけない
    if (!flg) {
        log(AB[AB.length - 1][0] + 1);
    }
}
