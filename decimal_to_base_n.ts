const decimalToBaseN = (num: number, base: number): string => {
    if (base < 2 || base > 36) {
        throw new Error("Base must be between 2 and 36.");
    }

    if (num === 0) return "0";

    let baseNStr = "";
    let tempNum = Math.abs(num);

    while (tempNum !== 0) {
        const digit = tempNum % base;
        if (digit < 10) {
            baseNStr = digit.toString() + baseNStr;
        } else {
            baseNStr = String.fromCharCode("A".charCodeAt(0) + digit - 10) + baseNStr;
        }
        tempNum = Math.floor(tempNum / base);
    }

    if (num < 0) {
        baseNStr = "-" + baseNStr;
    }

    return baseNStr;
};
