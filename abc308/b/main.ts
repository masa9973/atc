import * as fs from "fs";
const log = console.log;
const i = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const [S, M] = i[0].split(" ").map(Number);
const C = i[1].split(" ");
const D = i[2].split(" ");
const P = i[3].split(" ").map(Number);

const prices = P.map((item, index) => {
    if (index === 0) {
        return {
            color: "default",
            price: item,
        };
    } else {
        return {
            color: D[index - 1],
            price: item,
        };
    }
});

let ans = 0;
C.forEach((i) => {
    // const addPrice = prices.filter((item) => {
    //     return item.color === i || item.color === "default";
    // })[0].price;
    const addItemIdx = prices.findIndex((item) => item.color === i);
    const addPrice = () => {
        if (addItemIdx === -1) {
            return prices[0].price;
        } else {
            return prices[addItemIdx].price;
        }
    };
    ans += addPrice();
});

console.log(ans);
