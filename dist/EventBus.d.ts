declare type TypeHandler = (...args: any[]) => void;
export default class EventBus {
    private eList;
    on(name: string, fn: TypeHandler): void;
    un(name: string, fn: TypeHandler): void;
    emit(name: string, data: any): void;
}
export {};
