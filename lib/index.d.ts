import aFind from "./find.js";
import Node from "./Node.js";
declare type NodeMap = Node[][];
export declare const find: typeof aFind;
export declare class Map {
    static notInRange(x: number, y: number): RangeError;
    map: NodeMap;
    constructor(json: number[][]);
    private initMap;
    setNode(y: number, x: number, data: Partial<Pick<Node, "cost" | "diagonal">>): void;
    isInMap(x: number, y: number): boolean;
}
export {};
