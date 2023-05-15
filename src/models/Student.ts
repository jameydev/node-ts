import Learner from "./Learner.js";

export default class Student implements Learner {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    study(hours: number) {
        for (let i = 0; i < hours; i++) {
            console.log("Studying...");
        }
    }
}