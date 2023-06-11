import * as fs from "fs";

const input = fs
    .readFileSync("/dev/stdin", "utf8")
    .split(" ")
    .map((item) => parseInt(item));

const [N, Y] = [...input];

let [aa, ba, ca] = [-1, -1, -1];

for (let a = 0; a <= N; a++) {
    for (let b = 0; a + b <= N; b++) {
        const c = N - a - b;
        const total = 10000 * a + 5000 * b + 1000 * c;
        if (a + b + c === N && total === Y) {
            aa = a;
            ba = b;
            ca = c;
        }
    }
}

console.log(aa, ba, ca);
