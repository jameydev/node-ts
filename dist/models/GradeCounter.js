class GradeCounter {
    countGrades(grades, letter) {
        return grades.filter(grade => grade === letter).length;
    }
}
class FailureCounter extends GradeCounter {
    countGrades(grades) {
        return super.countGrades(grades, "F");
    }
}
export { GradeCounter, FailureCounter };
//# sourceMappingURL=GradeCounter.js.map