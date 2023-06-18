import * as fs from "fs";
const log = console.log;
const i = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const N = parseInt(i[0]);
// 真ん中の順番の順に並べる
const fsi = (arr: number[]) => {
    // mapに一回保存する、で次に探したときに見つければインデックスと数値のオブジェクトを返す
    const set = new Set<number>();
    let ans: { index: number; value: number }[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i])) {
            ans.push({
                index: i,
                value: arr[i],
            });
            set.delete(arr[i]);
        } else {
            set.add(arr[i]);
        }
    }
    return ans;
};

const A = i[1].split(" ").map(Number);
const ans = fsi(A)
    .map((i) => i.value)
    .join(" ");
log(ans);
