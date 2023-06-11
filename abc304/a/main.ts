import * as fs from "fs";

const i = fs.readFileSync("/dev/stdin", "utf8").split("\n");

const [n, ...l] = i;

const nl: string[] = [];
const ol: number[] = [];

l.forEach((i) => {
    const tl = i.split(" ");
    nl.push(tl[0]);
    ol.push(parseInt(tl[1]));
});

// 最小のインデックスを取得する
const gmi = (arr: number[]) => {
    let ret = 0;
    let minv = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minv) {
            minv = arr[i];
            ret = i;
        }
    }
    return ret;
};

const idx = gmi(ol);

// nlを並べ替える
const csa = (arr: string[], i: number) => {
    if (i >= arr.length) {
        return [];
    }
    const ret = arr.slice(i);
    return ret.concat(arr.slice(0, i)).filter((e) => e !== "");
};

const ansl = csa(nl, idx);

for (let i = 0; i < ansl.length; i++) {
    console.log(ansl[i]);
}
