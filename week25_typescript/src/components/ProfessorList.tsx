// StudentList.tsx
import React from "react";
import { Professor } from "../models/Professor";
import styled from "styled-components";

interface ProfessorListProps {
  professors: Professor[];
}

const ProfessorList: React.FC<ProfessorListProps> = ({ professors }) => {
  return (
    <Table>
      <Title>교수 목록</Title>
      <TableList border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>성별</th>
            <th>교수 ID</th>
            <th>개설 과목</th>
          </tr>
        </thead>
        <tbody>
          {professors.map((professor) => (
            <tr key={professor.professorId}>
              <td>{professor.name}</td>
              <td>{professor.age}</td>
              <td>{professor.gender}</td>
              <td>{professor.professorId}</td>
              <td>
                {professor.listCourses() !== undefined &&
                professor.listCourses()?.length
                  ? professor.listCourses()?.join(", ")
                  : "없음"}
              </td>
            </tr>
          ))}
        </tbody>
      </TableList>
    </Table>
  );
};

export default ProfessorList;

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
