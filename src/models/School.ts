abstract class School {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract getStudentTypes(): string[];
}

// example implementation
class College extends School {
    getStudentTypes(): string[] {
        return [
            "General Studies Majors", 
            "CS/IT Majors", 
            "Math Majors", 
            "Philosophy Majors",
            "English Majors",
            "Art Majors"
        ];
    }
}

export { School, College };