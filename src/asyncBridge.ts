type argList = [string, [number, number]];

export default class Bridge {
  list: argList[] = [];
  timeout: number = 25;

  constructor(timeout: number) {
    this.timeout = timeout;
  }

  append(args: argList) {
    this.list.push(args);
  }

  async run() {
    for (let args of this.list) {
      await sleep(this.timeout);
      (<any>window).emit(...args);
    }
  }
}

async function sleep(timeout: number) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}

(<any>window).emit = function (eventName: string, coord: [number, number]) {
  (<any>window).PubSub.publish(eventName, coord);
};
