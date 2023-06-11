import * as fs from "fs";

const i = fs.readFileSync("/dev/stdin", "utf8").split("\n");

const [a, b] = i[0].split(" ").map((i) => parseInt(i));
// 範囲内で桁数比べていく

const c = (n: number) => {
    let nn = n;
    const f = nn % 10;
    nn = Math.floor(nn / 10);
    const s = nn % 10;
    nn = Math.floor(nn / 10);
    const t = nn % 10;
    nn = Math.floor(nn / 10);
    const four = nn % 10;
    nn = Math.floor(nn / 10);
    const five = nn % 10;
    return f === five && s === four;
};

let ans = 0;
for (let i = a; i <= b; i++) {
    if (c(i)) ans++;
}

console.log(ans);
