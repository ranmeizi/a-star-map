declare type argList = [string, [number, number]];
declare type Emiter = (eventName: string, coord: [number, number]) => void;
export default class Bridge {
    list: argList[];
    timeout: number;
    emit: Emiter;
    constructor(timeout: number, emit: Emiter);
    append(args: argList): void;
    run(): Promise<void>;
}
export {};
