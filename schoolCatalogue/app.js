class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get numberOfStudents() {
        return this._numberOfStudents;
    }
    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
    }
    static pickSubstituteTeacher(substituteTeachers) {
        let randomIndex = Math.floor(Math.random() * (substituteTeachers.length - 1))
        return substituteTeachers[randomIndex];
    }
    set numberOfStudents(newNumberOfStudents) {
        if (typeof newNumberOfStudents === Number) {
            this._numberOfStudents = newNumberOfStudents
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.')
        }
    }
}