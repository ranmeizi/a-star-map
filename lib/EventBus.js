export default class EventBus {
    constructor() {
        this.eList = {};
    }
    on(name, fn) {
        if (this.eList[name]) {
            this.eList[name].push(fn);
        }
        else {
            this.eList[name] = [fn];
        }
    }
    un(name, fn) {
        if (this.eList[name]) {
            this.eList[name] = this.eList[name].filter((item) => item !== fn);
        }
    }
    emit(name, data) {
        this.eList[name] &&
            this.eList[name].forEach((fn) => {
                fn(data);
            });
    }
}
