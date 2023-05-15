export default abstract class School {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract getStudentTypes(): string[];
}