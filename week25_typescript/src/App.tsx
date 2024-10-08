import { useState } from "react";
import { Student } from "./models/Student";
import AddStudentForm from "./components/AddStudentForm";
import StudentList from "./components/StudentList";
import SelectType from "./components/SelectType";
import { Professor } from "./models/Professor";
import AddProfessorForm from "./components/AddProfessorForm";
import ProfessorList from "./components/ProfessorList";
import styled from "styled-components";

const App: React.FC = () => {
  const [option, setOption] = useState<string>("student");
  const [students, setStudents] = useState<Student[]>([]); // 빈 배열로 초기화
  const [professors, setProfessors] = useState<Professor[]>([]);

  // 학생 추가 후, 학생 목록 업데이트
  const handleAddStudent = (student: Student) => {
    setStudents([...students, student]); // 새로운 학생을 목록에 추가
  };

  const handleAddProfessor = (professor: Professor) => {
    setProfessors([...professors, professor]); // 새로운 교수를 목록에 추가
  };

  return (
    <MainColumn>
      <Title>🦁 통합 관리 시스템 🦁</Title>
      <Column>
        <SelectType userType={option} setUserType={setOption} />

        {option === "student" && (
          <>
            <AddStudentForm onAddStudent={handleAddStudent} />
            <StudentList students={students} />
          </>
        )}
        {option === "professor" && (
          <>
            <AddProfessorForm onAddProfessor={handleAddProfessor} />
            <ProfessorList professors={professors} />
          </>
        )}
      </Column>
    </MainColumn>
  );
};

export default App;

const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  background-color: white;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 1rem;
  background-color: #dae1eb;
  color: #198bcc;
  font-size: 1.5rem;
`;
