import express from "express";
import * as exphbs from "express-handlebars";

// My random stuff from the oreilly typescript book
import ErrMsg from "./models/ErrMsg.js";
import Book from "./models/Book.js";
import ReportCard from "./models/ReportCard.js";
import * as grade from "./models/GradeCounter.js";
import * as util from './utils.js';
import Secret from "./Secret.js";
import getLast from "./LinkedNode.js";

const app = express();
const PORT = 3000;

const secretCodeLol = new Secret("abcd", 1234);

console.log(secretCodeLol.getValue("abcd"));

// Generics examples
function logWrapper<Input>(callback: (input: Input) => void) {
    return (input: Input) => {
        console.log("Input:", input);
        callback(input);
    }
}

logWrapper<string>(input => {
    console.log(input.length);
});


console.log(util.makePair("abc", 123));

interface Box<T> {
    inside: T;
}

let stringyBox: Box<string> = {
    inside: "abc"
};

let numberBox: Box<number> = {
    inside: 42
};

let lastDate = getLast({
    value: new Date("05-15-2023")
}); // Value type: Date

let lastFruit = getLast({
    next: {
        value: "banana"
    },
    value: "apple"
}); // Value type: string

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



interface ActingCredit<Role> {
    role: Role;
}

class MoviePart implements ActingCredit<string> {
    role: string;
    speaking: boolean;

    constructor(role: string, speaking: boolean) {
        this.role = role;
        this.speaking = speaking;
    }
}

const part = new MoviePart("Frodo Baggins", true);

type CreatesValue<Input, Output> = (input: Input) => Output;

let creator: CreatesValue<string, number>;

creator = text => text.length;

function get<T, Key extends keyof T>(container: T, key: Key) {
    return container[key];
}

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