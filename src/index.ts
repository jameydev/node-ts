type Poet = {
    born: number;
    name: string;
};

const virgil: Poet = { 
    born: 1994, 
    name: 'Virgil Mk. 2'
};

console.log(`Poet: ${virgil.name}. Born in ${virgil.born}`);

type Artwork = {
    genre: string;
    name: string;
};

type Writing = {
    pages: number;
    name: string;
};

type WrittenArt = Artwork & Writing;

function singTwoSongs(song1: string, song2: string) {
    console.log("Singing Song #1: " + song1);
    console.log("Singing Song #2: " + song2);
}

singTwoSongs("Bullet with Butterfly Wings", "Breathe Into Me");

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

let name = "Katruya Lilian"
const [firstChar, size] = firstCharAndSize(name);

console.log(`'${name}': First character: ${firstChar} ; String length: ${size}`);

interface ErrMsg {
    code: number;
    msg: string;
    action?: string;
}

let error1: ErrMsg = {
    code: 1,
    msg: 'Runtime error encountered!'
};

interface Book {
    author?: string,
    title: string,
    pages: number
}

const validBook: Book = {
    author: "JRR Tolkien",
    title: "Lord of the Rings",
    pages: 1000
};

const alsoValidBook: Book = {
    title: "Harry Potter",
    pages: 5000
};