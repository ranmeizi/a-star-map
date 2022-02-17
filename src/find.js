import Bridge from "./asyncBridge";
const b = new Bridge(10);
const DIRE = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
];
export default function find(map, [startY, startX], [endY, endX]) {
    function neighbor(node) {
        for (let dir of DIRE) {
            const isDiagonal = Number(dir) % 2 === 0;
            if (
            // 没有node
            !node[dir] ||
                // 不走斜边
                (!node[dir].diagonal && isDiagonal) ||
                // node已经在closelist中了
                closeList.has(node[dir]) ||
                // 不能走
                !isWalkalbe(node[dir].cost)) {
                continue;
            }
            const n = node[dir];
            if (openList.has(n)) {
                const pNode = n.parent;
                if (node.G >= pNode.G) {
                    continue;
                }
            }
            n.G = isDiagonal ? getG2(node, n) : getG1(node, n);
            n.H = getH1(n, end);
            const F = n.G + n.H;
            openList.set(n, F);
            n.parent = node;
            // 可视化
            window && b.append(["putopen", n.coord]);
        }
        openList.delete(node);
        closeList.set(node, "");
        // 可视化
        window && b.append(["putclose", node.coord]);
    }
    const start = map[startY][startX];
    let end = map[endY][endX];
    const openList = new Map();
    openList.set(start, 0);
    const closeList = new Map();
    neighbor(start);
    // 找路径
    while (!closeList.has(end)) {
        // 选openlist F值最小的node进行neighbor判断
        neighbor(getMinF(openList));
    }
    // console.log(end.parent);
    while (end.parent) {
        // 可视化
        window && b.append(["route", end.coord]);
        end = end.parent;
    }
    // 可视化
    window && b.append(["route", end.coord]);
    b.run();
}
// 计算G值
function getG1(from, to) {
    return from.G + to.cost;
}
// 计算斜边G值
function getG2(from, to) {
    return from.G + to.cost * 1.4;
}
// 计算h值
function getH1(from, to) {
    const [fx, fy] = from.coord;
    const [tx, ty] = to.coord;
    return Math.abs(fx - tx) + Math.abs(fy - ty);
}
// 计算斜边h值
function getH2(from, to) {
    const [fx, fy] = from.coord;
    const [tx, ty] = to.coord;
    return Math.sqrt(Math.pow(fx - tx, 2) + Math.pow(fy - ty, 2));
}
/**
 * isWalkalbe 判断是否可行走
 * @param {number} cost 花费
 * @returns {boolean} 是否可行走
 */
function isWalkalbe(cost) {
    return cost !== Infinity;
}
// 在openlist中寻找F最小的
function getMinF(map) {
    let minNode = undefined;
    let minF = Infinity;
    for (let [n, F] of map.entries()) {
        if (!minNode || F < minF) {
            minF = F;
            minNode = n;
        }
    }
    return minNode;
}
