import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");

const [N, A, B] = input[0].split(" ").map((item) => parseInt(item));

const sumDigits = (n: number) => {
    let res = 0;
    while (n > 0) {
        res += n % 10;
        n = Math.floor(n / 10);
    }
    return res;
};

let ans = 0;

for (let n = 1; n <= N; n++) {
    const sum = sumDigits(n);
    if (A <= sum && sum <= B) ans += n;
}

console.log(ans);
