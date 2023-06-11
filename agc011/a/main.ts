import * as fs from "fs";

const i = fs.readFileSync("/dev/stdin", "utf8").split("\n");

const [n, c, k] = i[0].split(" ").map((i) => parseInt(i));
const tl: number[] = i
    .splice(1, n)
    .map((i) => parseInt(i))
    .sort((a, b) => a - b);

let [pp, bs] = [0, 0];

for (let index = 0; index < n; ) {
    let tk = tl[index] + k; // 最初の乗客の限界を計算する
    while (index < n && tl[index] <= tk) {
        // インデックスが人数を超えていない、かつ、最初の乗客の限界時間を迎えていない場合
        // インデックスをすすめ、人数を増やす
        pp++;
        index++;
        if (pp % c === 0) {
            // もし人数が定員に達したら、次のバスを用意する
            // バスを増やして、人数をゼロにする
            // 次のインデックスへ
            bs++;
            pp = 0;
            break;
        }
    }
    // 全員を配分し終わった、または、最初の乗客の限界が来てしまった場合
    if (pp > 0) {
        // バスの数を増やして
        bs++;
        // バスを発車させるので人数をゼロに戻す
        pp = 0;
    }
}

console.log(bs);
