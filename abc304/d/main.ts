import * as fs from "fs";

const i = fs.readFileSync("/dev/stdin", "utf8").split("\n");

const [w, h] = i[0].split(" ").map((i) => parseInt(i));
const n = parseInt(i[1]);
const pcl: string[] = [];
for (let index = 2; index < n; index++) {
    pcl.push(i[index]);
}
const A = parseInt(i[n + 2]);
const acl: number[] = i[n + 3].split(" ").map((i) => parseInt(i));
