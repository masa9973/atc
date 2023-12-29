import * as fs from "fs";
const log = console.log;
const i = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const pi = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";
log(pi.slice(0, Number(i[0]) + 2));
