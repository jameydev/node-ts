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

export { createDate, firstCharAndSize };