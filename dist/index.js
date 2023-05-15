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