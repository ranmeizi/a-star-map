import Node from "./Node";
import EventBus from "./EventBus";
declare type NodeMap = Node[][];
export default class Map extends EventBus {
    static notInRange(x: number, y: number): RangeError;
    map: NodeMap;
    private bridge;
    constructor(json: number[][]);
    private _emit;
    find: (map: Node[][], [startY, startX]: [number, number], [endY, endX]: [number, number]) => void;
    private initMap;
    setNode(y: number, x: number, data: Partial<Pick<Node, "cost" | "diagonal">>): void;
    isInMap(x: number, y: number): boolean;
}
export { Map };
