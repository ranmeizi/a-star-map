/**
 * 方向枚举值
 */
export declare enum Direction {
    TOP = 1,
    TOP_RIGHT = 2,
    RIGHT = 3,
    BOTTOM_RIGHT = 4,
    BOTTOM = 5,
    BOTTOM_LEFT = 6,
    LEFT = 7,
    TOP_LEFT = 8
}
declare class Node {
    [Direction.TOP]?: RouteNode;
    [Direction.TOP_RIGHT]?: RouteNode;
    [Direction.RIGHT]?: RouteNode;
    [Direction.BOTTOM_RIGHT]?: RouteNode;
    [Direction.BOTTOM]?: RouteNode;
    [Direction.BOTTOM_LEFT]?: RouteNode;
    [Direction.LEFT]?: RouteNode;
    [Direction.TOP_LEFT]?: RouteNode;
    coord: [number, number];
    cost: number;
    diagonal: boolean;
    constructor(coord: [number, number], cost: number, diagonal?: boolean);
    setData(data: Partial<Pick<RouteNode, "cost" | "diagonal">>): void;
}
export default class RouteNode extends Node {
    parent?: RouteNode;
    G: number;
    H: number;
}
export {};
