// AddStudentForm.tsx
import React, { useState } from "react";
import { Gender } from "../models/Person";
import { Student } from "../models/Student";
import styled from "styled-components";

interface AddStudentFormProps {
  onAddStudent: (student: Student) => void;
}

const AddStudentForm: React.FC<AddStudentFormProps> = ({ onAddStudent }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | undefined>(undefined);
  const [gender, setGender] = useState<Gender>("Male");
  const [studentId, setStudentId] = useState<number | undefined>(undefined);
  const [courses, setCourses] = useState<string>(""); // 수강 과목 입력 필드

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (age === undefined || studentId === undefined) {
      alert("나이와 학생 ID를 입력하세요.");
      return;
    }

    const courseList = courses
      ? courses.split(",").map((course) => course.trim())
      : []; // 입력된 과목이 있으면 처리
    const newStudent = new Student(name, age, gender, studentId, courseList); // 수강 과목 리스트 추가
    onAddStudent(newStudent);

    // 입력 필드 초기화
    setName("");
    setAge(undefined);
    setStudentId(undefined);
    setCourses(""); // 수강 과목 입력 필드 초기화
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormContainer>
        <div>
          <label>이름 </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>나이 </label>
          <input
            type="number"
            value={age === undefined ? "" : age} // 값이 없을 경우 빈 문자열로 처리
            onChange={(e) =>
              setAge(e.target.value ? parseInt(e.target.value) : undefined)
            }
          />
        </div>
        <div>
          <label>성별 </label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value as Gender)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label>학생 ID </label>
          <input
            type="number"
            value={studentId === undefined ? "" : studentId} // 값이 없을 경우 빈 문자열로 처리
            onChange={(e) =>
              setStudentId(
                e.target.value ? parseInt(e.target.value) : undefined
              )
            }
          />
        </div>
        <div>
          <label>수강 과목 </label>
          <input
            type="text"
            placeholder="쉼표로 구분하세요"
            value={courses}
            onChange={(e) => setCourses(e.target.value)}
          />
        </div>
        <Button type="submit">학생 추가</Button>
      </FormContainer>
    </Form>
  );
};

export default AddStudentForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  border: 0.1rem solid #e8e8e8;
  background-color: white;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 25rem;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  align-items: center;
`;

const Button = styled.button<{ type: string }>`
  width: 6rem;
  height: 2rem;
  background-color: #1f294e;
  color: white;
  :hover {
    font-weight: bold;
  }
`;
