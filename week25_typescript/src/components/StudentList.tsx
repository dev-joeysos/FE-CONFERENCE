// StudentList.tsx
import React from "react";
import { Student } from "../models/Student";
import styled from "styled-components";

interface StudentListProps {
  students: Student[];
}

const StudentList: React.FC<StudentListProps> = ({ students }) => {
  return (
    <Table>
      <Title>학생 목록</Title>
      <TableList border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>성별</th>
            <th>학생 ID</th>
            <th>수강 과목</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.studentId}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.gender}</td>
              <td>{student.studentId}</td>
              <td>
                {student.listCourses() !== undefined &&
                student.listCourses()?.length
                  ? student.listCourses()?.join(", ")
                  : "없음"}
              </td>
            </tr>
          ))}
        </tbody>
      </TableList>
    </Table>
  );
};

export default StudentList;

const Table = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Title = styled.h3`
  background-color: #e6ebf2;
  width: 100%;
  text-align: center;
  height: 100%;
  padding: 0.5rem 0;
  margin-bottom: 0%;
  border-top: 0.1rem solid black;
`;

const TableList = styled.table`
  border: 0.1rem solid #f5f5f5;
`;
