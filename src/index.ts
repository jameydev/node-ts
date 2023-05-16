import express from "express";
import * as exphbs from "express-handlebars";

// My random stuff from the oreilly typescript book
import ErrMsg from "./models/ErrMsg.js";
import Book from "./models/Book.js";
import ReportCard from "./models/ReportCard.js";
import * as grade from "./models/GradeCounter.js";
import * as util from './utils.js';

const app = express();
const PORT = 3000;

// Generics example
function logWrapper<Input>(callback: (input: Input) => void) {
    return (input: Input) => {
        console.log("Input:", input);
        callback(input);
    }
}

logWrapper<string>(input => {
    console.log(input.length);
});

function makePair<Key, Value>(key: Key, value: Value) {
    return { key, value };
}

console.log(makePair("abc", 123));

interface Box<T> {
    inside: T;
}

let stringyBox: Box<string> = {
    inside: "abc"
};

let numberBox: Box<number> = {
    inside: 42
};

interface LinkedNode<Value> {
    next?: LinkedNode<Value>;
    value: Value;
}

function getLast<Value>(node: LinkedNode<Value>): Value {
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

class Secret<Key, Value> {
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

let curriedCallback = new CurriedCallback<string>(input => {
    console.log(input.length);
});

// const server = app.listen(PORT, () => {
//     console.log(`Server running on port: ${PORT}`);
// });

// basic stuff - better to use interfaces/classes IRL
type Poet = {
    born: number;
    name: string;
};

const virgil: Poet = { 
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
function singTwoSongs(song1: string, song2: string) {
    console.log("Singing Song #1: " + song1);
    console.log("Singing Song #2: " + song2);
}

singTwoSongs("Bullet with Butterfly Wings", "Breathe Into Me");

let name = "Jamey";
const [firstChar, size] = util.firstCharAndSize(name);

console.log(`'${name}': First character: ${firstChar} ; String length: ${size}`);

let error1: ErrMsg = {
    code: 1,
    msg: 'Runtime error encountered!'
};

const validBook: Book = {
    author: "JRR Tolkien",
    title: "Lord of the Rings",
    pages: 1000
};

const alsoValidBook: Book = {
    title: "Harry Potter",
    pages: 5000
};