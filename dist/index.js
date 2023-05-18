import express from "express";
import * as util from './utils.js';
import Secret from "./Secret.js";
import getLast from "./LinkedNode.js";
import MoviePart from "./models/MoviePart.js";
const app = express();
const PORT = 3000;
const secretCodeLol = new Secret("abcd", 1234);
console.log(secretCodeLol.getValue("abcd"));
// Generics examples
util.logWrapper(input => {
    console.log(input.length);
});
console.log(util.makePair("abc", 123));
let stringyBox = {
    inside: "abc"
};
let numberBox = {
    inside: 42
};
console.log(`Stringy Box contains: ${stringyBox.inside}`);
console.log(`Number Box contains: ${numberBox.inside}`);
let lastDate = getLast({
    value: new Date("05-15-2023")
}); // Value type: Date
let lastFruit = getLast({
    next: {
        value: "banana"
    },
    value: "apple"
}); // Value type: string
console.log(lastDate.toLocaleDateString());
console.log(lastFruit);
let curriedCallback = new util.CurriedCallback(input => {
    console.log(input.length);
});
const part = new MoviePart("Frodo Baggins", true);
console.log(part.role);
let creator;
creator = text => text.length;
let cIn = "salad bar";
console.log(creator(cIn));
const character = {
    catchphrase: "Yee-haw!",
    name: "Sandy Cheeks"
};
console.log(`${character.name} says ${character.catchphrase}\n`);
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