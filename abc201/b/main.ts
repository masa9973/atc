import * as fs from "fs";
const log = console.log;
const i = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const N = parseInt(i[0]);
const [W, ...STL] = i;
const ST = STL.map((i) => {
    const tmp = i.split(" ");
    return {
        name: tmp[0],
        height: parseInt(tmp[1]),
    };
});
ST.sort((a, b) => b.height - a.height);
// log(ST);
log(ST[1].name);
