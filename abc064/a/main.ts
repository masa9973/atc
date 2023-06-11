import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");

const [r, g, b] = input[0].split(" ").map((e) => parseInt(e));
const num = r * 100 + g * 10 + b;
if (num % 4 === 0) {
    console.log("YES");
} else {
    console.log("NO");
}
