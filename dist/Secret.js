export default class Secret {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    getValue(key) {
        return this.key === key
            ? this.value
            : undefined;
    }
}
//# sourceMappingURL=Secret.js.map