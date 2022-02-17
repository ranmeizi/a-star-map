import aFind from "./find";
import Node, { Direction } from "./Node";

type NodeMap = Node[][];

export const find = aFind;

export class Map {
  static notInRange(x: number, y: number) {
    return new RangeError(`x:${x},y:${y},not in range`);
  }

  // 地图
  public map: NodeMap = [];

  constructor(json: number[][]) {
    // 从0，0创建四叉树网络
    this.initMap(json);

    if (window) {
      (<any>window).PubSub.publish("newmap", json);
    }
  }

  private initMap(json: number[][]) {
    for (let y = 0; y < json.length; y++) {
      this.map[y] = [];
      for (let x = 0; x < json[y].length; x++) {
        this.map[y][x] = new Node([y, x], json[y][x], true);
      }
    }

    for (let y = 0; y < this.map.length; y++) {
      for (let x = 0; x < this.map[y].length; x++) {
        const node = this.map[y][x];
        node[Direction.TOP] = this.map?.[y - 1]?.[x];
        node[Direction.TOP_RIGHT] = this.map?.[y - 1]?.[x + 1];
        node[Direction.RIGHT] = this.map?.[y]?.[x + 1];
        node[Direction.BOTTOM_RIGHT] = this.map?.[y + 1]?.[x + 1];
        node[Direction.BOTTOM] = this.map?.[y + 1]?.[x];
        node[Direction.BOTTOM_LEFT] = this.map?.[y + 1]?.[x - 1];
        node[Direction.LEFT] = this.map?.[y]?.[x - 1];
        node[Direction.TOP_LEFT] = this.map?.[y + 1]?.[x - 1];
      }
    }
  }

  public setNode(
    y: number,
    x: number,
    data: Partial<Pick<Node, "cost" | "diagonal">>
  ) {
    const node = this.map[y][x];
    node.setData(data);
  }

  // 判断点是否在地图内
  public isInMap(x: number, y: number) {
    if (y in this.map) {
      if (x in this.map[0]) {
        return true;
      }
    }
    return false;
  }
}
