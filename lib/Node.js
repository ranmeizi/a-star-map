/**
 * 方向枚举值
 */
export var Direction;
(function (Direction) {
    Direction[Direction["TOP"] = 1] = "TOP";
    Direction[Direction["TOP_RIGHT"] = 2] = "TOP_RIGHT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
    Direction[Direction["BOTTOM_RIGHT"] = 4] = "BOTTOM_RIGHT";
    Direction[Direction["BOTTOM"] = 5] = "BOTTOM";
    Direction[Direction["BOTTOM_LEFT"] = 6] = "BOTTOM_LEFT";
    Direction[Direction["LEFT"] = 7] = "LEFT";
    Direction[Direction["TOP_LEFT"] = 8] = "TOP_LEFT";
})(Direction || (Direction = {}));
class Node {
    constructor(coord, cost, diagonal) {
        // 斜边通行
        this.diagonal = false;
        this.coord = coord;
        this.cost = cost;
        if (diagonal !== undefined) {
            this.diagonal = diagonal;
        }
    }
    setData(data) {
        if (data.cost !== undefined) {
            this.cost = data.cost;
        }
        if (data.diagonal !== undefined) {
            this.diagonal = data.diagonal;
        }
    }
}
Direction.TOP, Direction.TOP_RIGHT, Direction.RIGHT, Direction.BOTTOM_RIGHT, Direction.BOTTOM, Direction.BOTTOM_LEFT, Direction.LEFT, Direction.TOP_LEFT;
export default class RouteNode extends Node {
    constructor() {
        super(...arguments);
        // G值 记录从起点移动到本节点所需要的花费
        this.G = 0;
        // H值 记录从节点到终点的预估值
        this.H = Infinity;
    }
}
