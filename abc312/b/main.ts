import * as fs from "fs";
const log = console.log;
const i = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const [N, M] = i[0].split(" ").map(Number);
const [G, ...S] = i;
// const SS = S.map((i) => {
//     return i.split("");
// });
// log(SS);

const ans: number[][] = [];
// 座標を入れてtakかどうかを判定する
// 文字列切り出した方が楽そう
const checkTak = (j: number, k: number, S: string[]) => {
    // 1-3行目の判定、jから頭四つ切り出して一致するか判定
    const if1to3 = S[j].slice(k, k + 4) === "###." && S[j + 1].slice(k, k + 4) === "###." && S[j + 2].slice(k, k + 4) === "###.";
    const if46 = S[j + 3].slice(k, k + 4) === "...." && S[j + 5].slice(k + 5, k + 9) === "....";
    // log(S[j].slice(k + 5, k + 9));
    const if7to9 = S[j + 6].slice(k + 5, k + 9) === ".###" && S[j + 7].slice(k + 5, k + 9) === ".###" && S[j + 8].slice(k + 5, k + 9) === ".###";
    // log(if1to3, if7to9, if46);
    return if1to3 && if7to9 && if46;
};

for (let j = 0; j <= N - 9; j++) {
    // 横の座標
    for (let k = 0; k <= M - 9; k++) {
        // 縦の座標
        // takだったなら座標を追加す
        // log(checkTak(j, k, S));
        if (checkTak(j, k, S)) {
            ans.push([j + 1, k + 1]);
        }
    }
}

ans.forEach((i) => log(`${i[0]} ${i[1]}`));
