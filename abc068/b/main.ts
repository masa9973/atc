import * as fs from "fs";

const i = fs.readFileSync("/dev/stdin", "utf8").split("\n")[0];
const n = parseInt(i);
let nn = 6;
while (n < 2 ** nn) {
    nn--;
}

console.log(2 ** nn);
