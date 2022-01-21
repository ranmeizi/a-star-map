/**
 * 方向枚举值
 */
export enum Direction {
  TOP = 1,
  TOP_RIGHT = 2,
  RIGHT = 3,
  BOTTOM_RIGHT = 4,
  BOTTOM = 5,
  BOTTOM_LEFT = 6,
  LEFT = 7,
  TOP_LEFT = 8,
}

class Node {
  // 8方向
  [Direction.TOP]?: RouteNode;
  [Direction.TOP_RIGHT]?: RouteNode;
  [Direction.RIGHT]?: RouteNode;
  [Direction.BOTTOM_RIGHT]?: RouteNode;
  [Direction.BOTTOM]?: RouteNode;
  [Direction.BOTTOM_LEFT]?: RouteNode;
  [Direction.LEFT]?: RouteNode;
  [Direction.TOP_LEFT]?: RouteNode;

  // 坐标
  coord: [number, number];

  // 花费
  cost: number;
  // 斜边通行
  diagonal: boolean = false;

  constructor(coord: [number, number], cost: number, diagonal?: boolean) {
    this.coord = coord;
    this.cost = cost;
    if (diagonal !== undefined) {
      this.diagonal = diagonal;
    }
  }

  setData(data: Partial<Pick<RouteNode, "cost" | "diagonal">>) {
    if (data.cost !== undefined) {
      this.cost = data.cost as number;
    }
    if (data.diagonal !== undefined) {
      this.diagonal = data.diagonal as boolean;
    }
  }
}

export default class RouteNode extends Node {
  // 父节点
  parent?: RouteNode;
  // G值 记录从起点移动到本节点所需要的花费
  G = 0;

  // H值 记录从节点到终点的预估值
  H = Infinity;
}
