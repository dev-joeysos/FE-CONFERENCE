import { Gender, Person } from "./Person";

// Student 클래스 정의
export class Student implements Person {
    name: String;
    age: number;
    gender: Gender;
    studentId: number;
    courses?: string[]; // 선택적 매개변수로 수강 과목 정의

    constructor(name: string, age: number, gender: Gender, studentId: number, courses?: string[]) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.studentId = studentId;
        this.courses = courses; // 수강과목은 undefined일 수 있음
    }

    // 수강 과목 리스트 반환
    listCourses(): string[] | undefined {
        return this.courses;
    }

}