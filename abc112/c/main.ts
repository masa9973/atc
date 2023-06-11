import * as fs from "fs";

const i = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const n = parseInt(i[0]);
const fl = i.slice(1, i.length - 1);
const l = fl.map((i) => {
    return i.split(" ").map((j) => parseInt(j));
});

// cx,cyを入れて高さを返す関数を作成、hと比べる

let index = 0;
const x = [];
const y = [];
const h = [];

for (let i = 0; i < n; i++) {
    const [xVal, yVal, hVal] = l[i];
    x.push(xVal);
    y.push(yVal);
    h.push(hVal);
    if (hVal !== 0) {
        index = i;
    }
}

for (let cx = 0; cx <= 100; cx++) {
    for (let cy = 0; cy <= 100; cy++) {
        const ch = h[index] + Math.abs(x[index] - cx) + Math.abs(y[index] - cy);
        let isValid = true;
        for (let i = 0; i < n; i++) {
            if (Math.max(ch - Math.abs(x[i] - cx) - Math.abs(y[i] - cy), 0) !== h[i]) {
                isValid = false;
                break;
            }
        }
        if (isValid) {
            console.log(cx, cy, ch);
        }
    }
}
