import * as fs from "fs";

const input = fs
    .readFileSync("/dev/stdin", "utf8")
    .split("\n")
    .filter((i) => i !== "");

const [N, ...coordinate] = input;
const distNum = parseInt(N);

// 初期状態
const t = [0];
const x = [0];
const y = [0];

for (let i = 1; i < coordinate.length + 1; i++) {
    const [T, X, Y] = coordinate[i - 1].split(" ").map((i) => parseInt(i));
    t[i] = T;
    x[i] = X;
    y[i] = Y;
}

let answer = true;
for (let i = 0; i < distNum; i++) {
    const dt = t[i + 1] - t[i];
    const dx = x[i + 1] - x[i];
    const dy = y[i + 1] - y[i];
    const dist = Math.abs(dx) + Math.abs(dy);
    console.log("差分", dt, dx, dy, dist);
    if (dt < dist) answer = false; // 1sに1しか動けないので
    if (dist % 2 !== dt % 2) answer = false; // なんで差分時間と目的地の偶奇が一致するんだ？　移動回数と移動距離の偶奇は一致するって言い換えれる？
}

if (answer) {
    console.log("Yes", t, x, y);
} else {
    console.log("No", t, x, y);
}
