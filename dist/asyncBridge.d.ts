declare type argList = [string, [number, number]];
export default class Bridge {
    list: argList[];
    timeout: number;
    constructor(timeout: number);
    append(args: argList): void;
    run(): Promise<void>;
}
export {};
