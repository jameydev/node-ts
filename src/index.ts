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

const server = app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});

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