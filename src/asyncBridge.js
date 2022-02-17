var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class Bridge {
    constructor(timeout) {
        this.list = [];
        this.timeout = 25;
        this.timeout = timeout;
    }
    append(args) {
        this.list.push(args);
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            for (let args of this.list) {
                yield sleep(this.timeout);
                window.emit(...args);
            }
        });
    }
}
function sleep(timeout) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => setTimeout(resolve, timeout));
    });
}
window.emit = function (eventName, coord) {
    window.PubSub.publish(eventName, coord);
};
