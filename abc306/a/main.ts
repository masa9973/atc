import * as fs from "fs";
const log = console.log;
const i = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const str = i[1]
    .split("")
    .map((i) => {
        return i + i;
    })
    .join("");

log(str);
