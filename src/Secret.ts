export default class Secret<Key, Value> {
    key: Key;
    value: Value;

    constructor(key: Key, value: Value) {
        this.key = key;
        this.value = value;
    }

    getValue(key: Key) {
        return this.key === key 
               ? this.value
               : undefined;
    }
}