type TypeHandler = (...args: any[]) => void;

export default class EventBus {
  private eList: Record<string, TypeHandler[]> = {};

  public on(name: string, fn: TypeHandler) {
    if (this.eList[name]) {
      this.eList[name].push(fn);
    } else {
      this.eList[name] = [fn];
    }
  }

  public un(name: string, fn: TypeHandler) {
    if (this.eList[name]) {
      this.eList[name] = this.eList[name].filter((item) => item !== fn);
    }
  }

  public emit(name: string, data: any) {
    this.eList[name] &&
      this.eList[name].forEach((fn) => {
        fn(data);
      });
  }
}
