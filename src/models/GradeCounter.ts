class GradeCounter {
    countGrades(grades: string[], letter: string) {
        return grades.filter(grade => grade === letter).length;
    }
}

class FailureCounter extends GradeCounter {
    countGrades(grades: string[]): number {
        return super.countGrades(grades, "F");
    }
}

export { GradeCounter, FailureCounter };