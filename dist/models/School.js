class School {
    constructor(name) {
        this.name = name;
    }
}
// example implementation
class College extends School {
    getStudentTypes() {
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
//# sourceMappingURL=School.js.map