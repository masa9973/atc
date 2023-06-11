import * as fs from "fs";

const i = fs
    .readFileSync("/dev/stdin", "utf8")
    .split("\n")[0]
    .split(" ")
    .map((i) => parseInt(i));

const [a, b, c, x, y] = i;
// a,bピザのみで買う
const p1 = a * x + b * y;

// abピザを買う場合、abピザが割高の場合
// xyの小さい分だけ買う
// どっちかの差分とabの差分だけ買い増す
const calcP2 = () => {
    const d = x - y;
    if (d > 0) {
        return c * y * 2 + d * a;
    } else if (d < 0) {
        return c * x * 2 - d * b;
    } else {
        return c * x * 2;
    }
};

// abピザがめちゃくちゃ安い場合
const calcP3 = () => {
    return c * 2 * Math.max(x, y);
};

console.log(Math.min(p1, calcP2(), calcP3()));
