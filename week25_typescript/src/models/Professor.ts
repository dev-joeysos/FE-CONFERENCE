import { Gender, Person } from "./Person";

export class Professor implements Person {
    name: String;
    age: number;
    gender: Gender;
    professorId: number;
    openCourses?: string[];

    constructor(name: String, age: number, gender: Gender, professorId: number, openCourses?: string[]) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.professorId = professorId;
        this.openCourses = openCourses;
    }

    // 개설 과목 리스트 반환
    listCourses(): string[] | undefined {
        return this.openCourses;
    }
}