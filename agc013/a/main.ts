import * as fs from "fs";

const i = fs.readFileSync("/dev/stdin", "utf8").split("\n");

let l: number[] = i[1].split(" ").map((i) => parseInt(i));

// const process = (l: number[]) => {
//     let rn = 0;
//     let dec = false;
//     let inc = false;
//     while (rn < l.length) {
//         let diff = l[rn + 1] - l[rn];
//         const a = diff > 0 && dec;
//         const b = diff < 0 && inc;
//         if (a || b) {
//             return l.slice(rn + 1);
//         } else {
//             rn++;
//         }
//         if (dec || inc) break;
//         if (diff > 0) {
//             inc = true;
//         } else if (diff < 0) {
//             dec = true;
//         }
//     }
//     while (rn < l.length) {
//         let diff = l[rn + 1] - l[rn];
//         const a = diff > 0 && dec;
//         const b = diff < 0 && inc;
//         if (a || b) {
//             return l.slice(rn + 1);
//         } else {
//             rn++;
//         }
//     }
//     return [];
// };

// let ans = 0;
// while (l.length > 0) {
//     l = process(l);
//     ans++;
// }

// console.log(ans);

const process = (l: number[], startIndex: number) => {
    let rn = startIndex;
    let dec = false;
    let inc = false;
    const listLength = l.length;
    while (rn < listLength) {
        let diff = l[rn + 1] - l[rn];
        if (diff > 0 && dec) {
            return rn + 1;
        } else if (diff < 0 && inc) {
            return rn + 1;
        } else {
            rn++;
        }

        if (diff > 0) {
            inc = true;
        } else if (diff < 0) {
            dec = true;
        }
    }
    return listLength;
};

let listLength = l.length;
let startIndex = 0;
let ans = 0;
while (startIndex < listLength) {
    startIndex = process(l, startIndex);
    ans++;
}

console.log(ans);
