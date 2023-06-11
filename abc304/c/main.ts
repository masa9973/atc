import * as fs from "fs";

class UnionFind {
    private parents: number[];

    public constructor(private n: number) {
        this.parents = new Array<number>(this.n);
        for (let i = 0; i < n; i++) this.parents[i] = -1;
    }

    public root(a: number): number {
        if (this.parents[a] < 0) {
            return a;
        }
        return (this.parents[a] = this.root(this.parents[a]));
    }

    public size(a: number): number {
        return -this.parents[this.root(a)];
    }

    public connect(a: number, b: number): boolean {
        let ra = this.root(a);
        let rb = this.root(b);
        if (ra === rb) {
            return false;
        }

        if (this.size(ra) < this.size(rb)) {
            const tmp = ra;
            ra = rb;
            rb = tmp;
        }
        this.parents[ra] += this.parents[rb];
        this.parents[rb] = ra;
        return true;
    }

    public isUnion(a: number, b: number): boolean {
        const ra = this.root(a);
        const rb = this.root(b);
        return ra === rb;
    }
}

const i = fs.readFileSync("/dev/stdin", "utf8").split("\n");

const [nd, ...l] = i;
const [n, d] = nd.split(" ").map((i) => parseInt(i));
const x = l.map((i) => i.split(" ")[0]).map((i) => parseInt(i));
const y = l.map((i) => i.split(" ")[1]).map((i) => parseInt(i));

const uf = new UnionFind(n);
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        const dd = (x[i] - x[j]) ** 2 + (y[i] - y[j]) ** 2;
        if (dd <= d ** 2) {
            uf.connect(i, j);
        }
    }
}

for (let i = 0; i < n; i++) {
    if (uf.isUnion(0, i)) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}
