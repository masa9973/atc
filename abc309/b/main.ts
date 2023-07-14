import * as fs from "fs";
const log = console.log;
const i = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const N = parseInt(i[0]);
let A: number[][] = [];
for (let index = 0; index < N; index++) {
    const l = i[index + 1].split("").map(Number);
    A.push(l);
}

// Aを参考にしながら、答えの配列を作成してゆく
for (let j = 0; j < N; j++) {
    const pushArr = [];
    // 一列目の場合
    if (j === 0) {
        pushArr.push(A[1][0]);
        for (let k = 0; k < N - 1; k++) {
            pushArr.push(A[0][k]);
        }
    } else if (j === N - 1) {
        // 最後の列の場合
        for (let k = 0; k < N - 1; k++) {
            pushArr.push(A[N - 1][k + 1]);
        }
        pushArr.push(A[N - 2][N - 1]);
    } else {
        // 真ん中の列の場合
        pushArr.push(A[j + 1][0]);
        for (let k = 0; k < N - 2; k++) {
            pushArr.push(A[j][k + 1]);
        }
        pushArr.push(A[j - 1][N - 1]);
    }
    const a = pushArr.join("");
    console.log(a);
}
