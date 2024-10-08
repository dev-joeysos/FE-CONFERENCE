import { Student } from "../models/Student";

const students: Student[] = [];

// 학생들을 추가하는 함수
export function addStudent(student: Student): void {
    students.push(student);
}

// 모든 학생을 가져오는 함수
export function getStudents(): Student[] {
    return students;
}