import * as fs from "fs";

const i = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const sl = i[0].split(" ");
const nl = sl.map((i) => parseInt(i));
const [a, b, c] = nl;
// for (let i = 1; i < 40; i++) {
//     const an = a + b + c + 2 * i;
//     const bb = an % 3 === 0;
//     const al = an / 3 >= a;
//     const bl = an / 3 >= b;
//     const cl = an / 3 >= c;
//     if (bb && al && bl && cl) {
//         ans = i;
//         break;
//     }
// }
let j = 0;
let ann = false;
while (!ann) {
    let an = a + b + c + 2 * j;
    let bb = an % 3 === 0;
    let al = an / 3 >= a;
    let bl = an / 3 >= b;
    let cl = an / 3 >= c;
    ann = bb && al && bl && cl;
    if (ann) break;
    j++;
}
console.log(j);
