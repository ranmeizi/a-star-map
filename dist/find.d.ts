import RouteNode from "./Node";
declare type coord = [number, number];
export default function (bridge: any): (map: RouteNode[][], [startY, startX]: coord, [endY, endX]: coord) => coord[];
export {};
