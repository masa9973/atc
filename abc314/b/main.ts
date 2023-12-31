import * as fs from "fs";
const log = console.log;
const i = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const peopleNum = Number(i[0]);
// 1, 3, 5...が賭けた数字の数
// 2, 4, 6...が賭けた具体的な数字

type Bet = {
    peopleId: number;
    orders: number[];
};

const betArr: Bet[] = [];
// create BetObjects
for (let idx = 1; idx < peopleNum + 1; idx++) {
    const item: Bet = {
        peopleId: Number(idx),
        orders: i[idx * 2].split(" ").map((item) => Number(item)),
    };
    betArr.push(item);
}

// 答えになった番号を取得する
const ansIdx = peopleNum * 2 + 1;
const ansNum = Number(i[ansIdx]);

// betArrから答えの番号を持つものを抽出
const hasAnsArr = betArr.filter((item) => {
    return item.orders.indexOf(ansNum) !== -1;
});

// 1番個数が少ない数を調べる
const hasAnsBetNumArr = hasAnsArr.map((item) => item.orders.length);
const minNum = Math.min(...hasAnsBetNumArr);

// 答えの条件を満たすもの
const hasAnsArrMins = hasAnsArr.filter((item) => {
    return item.orders.length === minNum;
});

console.log(hasAnsArrMins.length);
if (hasAnsArrMins.length) {
    console.log(
        hasAnsArrMins
            .map((item) => {
                return item.peopleId;
            })
            .join(" "),
    );
}
