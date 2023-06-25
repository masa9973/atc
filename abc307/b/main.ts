import * as fs from "fs";
const log = console.log;
const i = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
const ifLoop = (s: string): boolean => {
    const sArr = s.split("");
    let ans = true;
    for (let i = 0; i < s.length; i++) {
        if (sArr[s.length - 1 - i]) {
            const c = sArr[i] === sArr[s.length - 1 - i];
            if (!c) {
                ans = false;
            }
        } else {
            if (sArr[0] !== sArr[1]) {
                ans = false;
            }
        }
    }
    return ans;
};

// ijに対して、異なる、連結した時に回文は判定する
const [n, ...S] = i;
const N = parseInt(n);
let ans: string = "No";
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (i !== j) {
            const joinedStr = S[i] + S[j];
            if (ifLoop(joinedStr)) {
                ans = "Yes";
                break;
            }
        }
    }
}

log(ans);
