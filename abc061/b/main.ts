import * as fs from "fs";
const log = console.log;
const i = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const [N, M] = i[0].split(" ").map((i) => parseInt(i));
const abl = i.slice(1).map((i) => i.split(" ").map((j) => parseInt(j)));

const ans = Array(N).fill(0);
for (let i = 0; i < M; i++) {
    const a = abl[i][0];
    const b = abl[i][1];
    ans[a - 1]++;
    ans[b - 1]++;
}

ans.forEach((i) => {
    log(i);
});
