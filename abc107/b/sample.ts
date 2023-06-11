import * as fs from "fs";

class Reader {
    readonly input: string[];
    private index: number = 0;

    constructor() {
        this.input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
    }

    rl(): string {
        return this.input[this.index++];
    }

    rn(): number {
        return Number(this.input[this.index++]);
    }

    rln(): number[] {
        const line = this.input[this.index++].split(" ");
        return line.map(Number);
    }

    rlb(): BigInt[] {
        const line = this.input[this.index++].split(" ");
        return line.map(BigInt);
    }

    rls(): string[] {
        return this.input[this.index++].split(" ");
    }
}

const main = () => {
    const reader: Reader = new Reader();
    const [H, W] = reader.rln();
    const aij = Array(H)
        .fill(0)
        .map(() => reader.rl());
    const row = Array(H)
        .fill(false)
        .map((v) => v);
    const col = Array(H)
        .fill(false)
        .map((v) => v);
    for (let r = 0; r < H; r++) {
        for (let c = 0; c < W; c++) {
            if (aij[r][c] === "#") {
                row[r] = true;
                col[c] = true;
            }
        }
    }
    for (let r = 0; r < H; r++) {
        if (row[r]) {
            let row = "";
            for (let c = 0; c < W; c++) {
                if (col[c]) {
                    row += aij[r][c];
                }
            }
            console.log(row);
        }
    }
    // console.log(ans);
};

main();
