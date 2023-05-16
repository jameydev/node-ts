var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CurriedCallback_callback;
import express from "express";
import * as util from './utils.js';
const app = express();
const PORT = 3000;
// Generics example
function logWrapper(callback) {
    return (input) => {
        console.log("Input:", input);
        callback(input);
    };
}
logWrapper(input => {
    console.log(input.length);
});
function makePair(key, value) {
    return { key, value };
}
console.log(makePair("abc", 123));
let stringyBox = {
    inside: "abc"
};
let numberBox = {
    inside: 42
};
function getLast(node) {
    return node.next ? getLast(node.next) : node.value;
}
let lastDate = getLast({
    value: new Date("05-15-2023")
}); // Value type: Date
let lastFruit = getLast({
    next: {
        value: "banana"
    },
    value: "apple"
}); // Value type: string
class Secret {
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
class CurriedCallback {
    constructor(callback) {
        _CurriedCallback_callback.set(this, void 0);
        __classPrivateFieldSet(this, _CurriedCallback_callback, (input) => {
            console.log("Input:", input);
            callback(input);
        }, "f");
    }
    call(input) {
        __classPrivateFieldGet(this, _CurriedCallback_callback, "f").call(this, input);
    }
}
_CurriedCallback_callback = new WeakMap();
let curriedCallback = new CurriedCallback(input => {
    console.log(input.length);
});
class Quote {
    constructor(lines) {
        this.lines = lines;
    }
}
const virgil = {
    born: 1994,
    name: 'Virgil Mk. 2'
};
console.log(`Poet: ${virgil.name}. Born in ${virgil.born}`);
// type Artwork = {
//     genre: string;
//     name: string;
// };
// type Writing = {
//     pages: number;
//     name: string;
// };
// why would I do this?
// type WrittenArt = Artwork & Writing;
// Explicit param types to prevent evolving any
function singTwoSongs(song1, song2) {
    console.log("Singing Song #1: " + song1);
    console.log("Singing Song #2: " + song2);
}
singTwoSongs("Bullet with Butterfly Wings", "Breathe Into Me");
let name = "Jamey";
const [firstChar, size] = util.firstCharAndSize(name);
console.log(`'${name}': First character: ${firstChar} ; String length: ${size}`);
let error1 = {
    code: 1,
    msg: 'Runtime error encountered!'
};
const validBook = {
    author: "JRR Tolkien",
    title: "Lord of the Rings",
    pages: 1000
};
const alsoValidBook = {
    title: "Harry Potter",
    pages: 5000
};
//# sourceMappingURL=index.js.map