const i = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

const lc1 = i[0].split(" ").map(Number);
const lc2 = i[1].split(" ").map(Number);
const lc3 = i[2].split(" ").map(Number);

const c11 = lc1[0];
const c22 = lc2[1];
const c33 = lc3[2];

let ans = "No";
for (let a1 = 0; a1 <= c11; a1++) {
    const b1 = c11 - a1;
    for (let a2 = 0; a2 <= c22; a2++) {
        const b2 = c22 - a2;
        for (let a3 = 0; a3 <= c33; a3++) {
            const b3 = c33 - a3;
            const cc12 = lc1[1] === a2 + b1;
            const cc13 = lc1[2] === a3 + b1;
            const cc21 = lc2[0] === a1 + b2;
            const cc23 = lc2[2] === a3 + b2;
            const cc31 = lc3[0] === a1 + b3;
            const cc32 = lc3[1] === a2 + b3;
            if (cc12 && cc13 && cc21 && cc23 && cc31 && cc32) {
                ans = "Yes";
                break;
            }
        }
        if (ans === "Yes") {
            break;
        }
    }
    if (ans === "Yes") {
        break;
    }
}

console.log(ans);
