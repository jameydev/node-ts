function createDate(timestamp: number): Date;
function createDate(month: number, day: number, year: number): Date;
function createDate(monthOrTimestamp: number, day?: number, year?: number): Date {
    return day === undefined || year === undefined
            ? new Date(monthOrTimestamp)
            : new Date(year, monthOrTimestamp, day);
}

function firstCharAndSize(input: string) {
    return [input[0], input.length]; // type: (string | number)[]
}

function makePair<Key, Value>(key: Key, value: Value) {
    return { key, value };
}

class CurriedCallback<Input> {
    #callback: (input: Input) => void;

    constructor(callback: (input: Input) => void) {
        this.#callback = (input: Input) => {
            console.log("Input:", input);
            callback(input);
        };
    }

    call(input: Input) {
        this.#callback(input);
    }
}

function logWrapper<Input>(callback: (input: Input) => void) {
    return (input: Input) => {
        console.log("Input:", input);
        callback(input);
    }
}

function get<T, Key extends keyof T>(container: T, key: Key) {
    return container[key];
}

export { 
    createDate, 
    firstCharAndSize, 
    makePair,
    CurriedCallback,
    logWrapper,
    get
};