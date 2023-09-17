const binarySearch = (l: number[], target: number): number => {
    // lの中央値がtargetよりも大きいかどうか判断して絞り込む
    let leftIndex = 0,
        rightIndex = l.length - 1;
    while (leftIndex <= rightIndex) {
        const midIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (l[midIndex] < target) {
            // 探索するインデックスを中央よりも右のグループに変更
            leftIndex = midIndex + 1;
        } else if (l[midIndex] > target) {
            rightIndex = midIndex - 1;
        } else {
            // 一致すればindexを返す
            return midIndex;
        }
    }
    return -1; // targetがない場合は-1を返す
};
