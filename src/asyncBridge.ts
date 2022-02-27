type argList = [string, [number, number]];

type Emiter = (eventName: string, coord: [number, number]) => void;

export default class Bridge {
  list: argList[] = [];
  timeout: number = 25;
  emit: Emiter;

  constructor(timeout: number, emit: Emiter) {
    this.timeout = timeout;
    this.emit = emit;
  }

  append(args: argList) {
    this.list.push(args);
  }

  async run() {
    for (let args of this.list) {
      await sleep(this.timeout);
      this.emit(...args);
    }
  }
}

async function sleep(timeout: number) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
