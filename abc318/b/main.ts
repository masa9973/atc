import * as fs from "fs";
const log = console.log;
const i = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

// 四つの座標を入力して、全体の座標に色を塗っていく

function create2DArray(rows: number, cols: number) {
    const array = new Array(rows);
    for (let i = 0; i < rows; i++) {
        array[i] = new Array(cols).fill(0);
    }
    return array;
}

const F: number[][] = create2DArray(100, 100);
const draw = (a: number, b: number, c: number, d: number, F: number[][]) => {
    // const x = b - a;
    // const y = d - c;
    for (let i = a; i < b; i++) {
        for (let j = c; j < d; j++) {
            F[i][j] = 1;
        }
    }
};
function countZerosIn2DArray(array: number[][]) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === 1) {
                count++;
            }
        }
    }
    return count;
}

const N = parseInt(i[0]);
for (let num = 1; num < N + 1; num++) {
    const [a, b, c, d] = i[num].split(" ").map(Number);
    draw(a, b, c, d, F);
    // log(a, b, c, d);
}
// log(F);
log(countZerosIn2DArray(F));
