function createDate(monthOrTimestamp, day, year) {
    return day === undefined || year === undefined
        ? new Date(monthOrTimestamp)
        : new Date(year, monthOrTimestamp, day);
}
function firstCharAndSize(input) {
    return [input[0], input.length]; // type: (string | number)[]
}
function makePair(key, value) {
    return { key, value };
}
export { createDate, firstCharAndSize, makePair };
//# sourceMappingURL=utils.js.map