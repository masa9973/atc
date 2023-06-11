import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");

const strigns = ["dream", "dreamer", "erase", "eraser"];

const revStr = (str: string) => {
    return str.split("").reverse().join("");
};

const reverseStrings = strigns.map((item) => revStr(item));
const reverseInputString: string = revStr(input[0]);

let answer: string = "YES";
for (let i = 0; i < reverseInputString.length; ) {
    let canD = false;
    for (let j = 0; j < 4; j++) {
        const d = reverseStrings[j];
        if (reverseInputString.substring(i, i + d.length) === d) {
            canD = true;
            i += d.length;
        }
    }
    if (!canD) {
        answer = "NO";
        break;
    }
}
console.log(answer);
