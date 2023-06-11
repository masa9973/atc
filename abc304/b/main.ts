import * as fs from "fs";

const i = fs.readFileSync("/dev/stdin", "utf8").split("\n");

const d = i[0].length;
const n = parseInt(i[0]);

const rz = (n: number) => {
    const sn = n.toString();
    const ln = sn.length - 3;
    const ts = parseInt(sn.slice(0, 3));
    const z = 10 ** ln;
    return ts * z;
};

if (d <= 3) {
    console.log(n);
} else {
    console.log(rz(n));
}
