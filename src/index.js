import aFind from "./find";
import Node, { Direction } from "./Node";
export const find = aFind;
export class Map {
    constructor(json) {
        // 地图
        this.map = [];
        // 从0，0创建四叉树网络
        this.initMap(json);
        if (window) {
            window.PubSub.publish("newmap", json);
        }
    }
    static notInRange(x, y) {
        return new RangeError(`x:${x},y:${y},not in range`);
    }
    initMap(json) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        for (let y = 0; y < json.length; y++) {
            this.map[y] = [];
            for (let x = 0; x < json[y].length; x++) {
                this.map[y][x] = new Node([y, x], json[y][x], true);
            }
        }
        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[y].length; x++) {
                const node = this.map[y][x];
                node[Direction.TOP] = (_b = (_a = this.map) === null || _a === void 0 ? void 0 : _a[y - 1]) === null || _b === void 0 ? void 0 : _b[x];
                node[Direction.TOP_RIGHT] = (_d = (_c = this.map) === null || _c === void 0 ? void 0 : _c[y - 1]) === null || _d === void 0 ? void 0 : _d[x + 1];
                node[Direction.RIGHT] = (_f = (_e = this.map) === null || _e === void 0 ? void 0 : _e[y]) === null || _f === void 0 ? void 0 : _f[x + 1];
                node[Direction.BOTTOM_RIGHT] = (_h = (_g = this.map) === null || _g === void 0 ? void 0 : _g[y + 1]) === null || _h === void 0 ? void 0 : _h[x + 1];
                node[Direction.BOTTOM] = (_k = (_j = this.map) === null || _j === void 0 ? void 0 : _j[y + 1]) === null || _k === void 0 ? void 0 : _k[x];
                node[Direction.BOTTOM_LEFT] = (_m = (_l = this.map) === null || _l === void 0 ? void 0 : _l[y + 1]) === null || _m === void 0 ? void 0 : _m[x - 1];
                node[Direction.LEFT] = (_p = (_o = this.map) === null || _o === void 0 ? void 0 : _o[y]) === null || _p === void 0 ? void 0 : _p[x - 1];
                node[Direction.TOP_LEFT] = (_r = (_q = this.map) === null || _q === void 0 ? void 0 : _q[y + 1]) === null || _r === void 0 ? void 0 : _r[x - 1];
            }
        }
    }
    setNode(y, x, data) {
        const node = this.map[y][x];
        node.setData(data);
    }
    // 判断点是否在地图内
    isInMap(x, y) {
        if (y in this.map) {
            if (x in this.map[0]) {
                return true;
            }
        }
        return false;
    }
}
