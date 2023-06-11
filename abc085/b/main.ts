import * as fs from "fs";

const input = fs
    .readFileSync("/dev/stdin", "utf8")
    .split("\n")
    .filter((item) => item !== "")
    .map((item) => parseInt(item));

console.log([...new Set(input.slice(1))].length);
