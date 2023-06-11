import * as fs from "fs";

const i = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const l = i[1].split(" ").map((i) => parseInt(i));
// const l = [2, 2, 2, 2];

function solve(a: number[], initial: number) {
    const n = a.length;
    let cnt = Math.abs(initial); // 操作を行った回数
    let acc = a[0] + initial; // 現在までの合計
    for (let i = 0; i < n - 1; i++) {
        // ゼロから始まるのでn-1まで調べる
        let nacc = acc + a[i + 1]; // nまでの合計
        if (acc > 0 && nacc >= 0) {
            // n番目の項を加算する前までの合計と符号がプラスで一緒の場合
            cnt += nacc + 1; // 強制的にマイナスにする操作をする
            nacc = -1;
        }
        if (acc < 0 && nacc <= 0) {
            // 符号がマイナスで一致する場合
            cnt += -nacc + 1; // 強制的にプラスにする操作を行う
            nacc = 1;
        }
        acc = nacc;
    }
    return cnt;
}

const a = solve(l, 0); // 最初がそのままの場合
const b = solve(l, -l[0] - 1); // 最初がマイナス1の場合
const c = solve(l, -l[0] + 1); // 最初がプラス1の場合
console.log(Math.min(a, b, c));
