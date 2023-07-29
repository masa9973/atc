import * as fs from "fs";
const log = console.log;
const i = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const S = i[0];
let ans = "No";
if (S === "ACE" || S === "BDF" || S === "CEG" || S === "DFA" || S === "EGB" || S === "FAC" || S === "GBD") {
    ans = "Yes";
}
log(ans);
