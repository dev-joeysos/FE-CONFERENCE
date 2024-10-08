// AddStudentForm.tsx
import React, { useState } from "react";
import { Gender } from "../models/Person";
import { Professor } from "../models/Professor";
import styled from "styled-components";

interface AddProfessorFormProps {
  onAddProfessor: (professor: Professor) => void;
}

const AddProfessorForm: React.FC<AddProfessorFormProps> = ({
  onAddProfessor,
}) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | undefined>(undefined);
  const [gender, setGender] = useState<Gender>("Male");
  const [professorId, setProfessorId] = useState<number | undefined>(undefined);
  const [openCourses, setOpenCourses] = useState<string>(""); // 개설 과목 입력 필드

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (age === undefined || professorId === undefined) {
      alert("나이와 학생 ID를 입력하세요.");
      return;
    }

    const courseList = openCourses
      ? openCourses.split(",").map((openCourses) => openCourses.trim())
      : []; // 입력된 과목이 있으면 처리
    const newProfessor = new Professor(
      name,
      age,
      gender,
      professorId,
      courseList
    ); // 수강 과목 리스트 추가
    onAddProfessor(newProfessor);

    // 입력 필드 초기화
    setName("");
    setAge(undefined);
    setProfessorId(undefined);
    setOpenCourses(""); // 개설 과목 입력 필드 초기화
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
          <label>교수 ID </label>
          <input
            type="number"
            value={professorId === undefined ? "" : professorId} // 값이 없을 경우 빈 문자열로 처리
            onChange={(e) =>
              setProfessorId(
                e.target.value ? parseInt(e.target.value) : undefined
              )
            }
          />
        </div>
        <div>
          <label>개설 과목 </label>
          <input
            type="text"
            placeholder="쉼표로 구분하세요"
            value={openCourses}
            onChange={(e) => setOpenCourses(e.target.value)}
          />
        </div>
        <Button type="submit">교수 추가</Button>
      </FormContainer>
    </Form>
  );
};

export default AddProfessorForm;

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
