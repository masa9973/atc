import * as fs from "fs";

// const input = fs.readFileSync("/dev/stdin", "utf8");

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
    const reader = new Reader();
    console.log("rl", reader.rl());
    console.log("rn", reader.rn());
    console.log("rln", reader.rln());
    // console.log("rlb", reader.rlb());
    console.log("rls", reader.rls());
};

main();
