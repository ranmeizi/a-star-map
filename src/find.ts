import RouteNode from "./Node.js";
import Bridge from "./asyncBridge.js";

const b = new Bridge(10);

type coord = [number, number];

const DIRE: ["1", "2", "3", "4", "5", "6", "7", "8"] = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
];

export default function find(
  map: RouteNode[][],
  [startY, startX]: coord,
  [endY, endX]: coord
) {
  function neighbor(node: RouteNode) {
    for (let dir of DIRE) {
      const isDiagonal = Number(dir) % 2 === 0;
      if (
        // 没有node
        !node[dir] ||
        // 不走斜边
        (!node[dir]!.diagonal && isDiagonal) ||
        // node已经在closelist中了
        closeList.has(node[dir]) ||
        // 不能走
        !isWalkalbe((node[dir] as RouteNode).cost)
      ) {
        continue;
      }
      const n = node[dir] as RouteNode;

      if (openList.has(n)) {
        const pNode = n.parent;
        if (node.G >= pNode!.G) {
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
function getG1(from: RouteNode, to: RouteNode) {
  return from.G + to.cost;
}

// 计算斜边G值
function getG2(from: RouteNode, to: RouteNode) {
  return from.G + to.cost * 1.4;
}

// 计算h值
function getH1(from: RouteNode, to: RouteNode) {
  const [fx, fy] = from.coord;
  const [tx, ty] = to.coord;
  return Math.abs(fx - tx) + Math.abs(fy - ty);
}

// 计算斜边h值
function getH2(from: RouteNode, to: RouteNode) {
  const [fx, fy] = from.coord;
  const [tx, ty] = to.coord;
  return Math.sqrt(Math.pow(fx - tx, 2) + Math.pow(fy - ty, 2));
}

/**
 * isWalkalbe 判断是否可行走
 * @param {number} cost 花费
 * @returns {boolean} 是否可行走
 */
function isWalkalbe(cost: number): boolean {
  return cost !== Infinity;
}

// 在openlist中寻找F最小的
function getMinF(map: Map<RouteNode, number>): RouteNode {
  let minNode: RouteNode | undefined = undefined;
  let minF: number = Infinity;
  for (let [n, F] of map.entries()) {
    if (!minNode || F < minF) {
      minF = F;
      minNode = n;
    }
  }
  return minNode as RouteNode;
}
