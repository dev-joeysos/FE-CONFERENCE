import React from "react";
import styled from "styled-components";

interface SelectTypeProps {
  userType: string;
  setUserType: (value: string) => void;
}

function SelectType({ userType, setUserType }: SelectTypeProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserType(e.target.value);
  };

  return (
    <SelectBox>
      <Label isSelected={userType === "professor"}>
        <input
          type="radio"
          value="professor"
          checked={userType === "professor"}
          onChange={handleChange}
        />
        교수
      </Label>
      <Label isSelected={userType === "student"}>
        <input
          type="radio"
          value="student"
          checked={userType === "student"}
          onChange={handleChange}
        />
        학생
      </Label>
    </SelectBox>
  );
}

export default SelectType;

const SelectBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 1rem;
  border-bottom: 0.1rem solid black;
  border: 0.1rem 0.1rem 0rem 0.1rem solid black;
`;

const Label = styled.label<{ isSelected: boolean }>`
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 2rem;
  width: 100%;
  height: 100%;
  text-align: center;
  border: 0.1rem 0rem 0.1rem 0.05rem solid black;
  background-color: ${(props) => (props.isSelected ? "#2155a4" : "#f9f9f9")};
  color: ${(props) => (props.isSelected ? "#f9f9f9" : "#9f9f9f")};
  cursor: pointer;

  input {
    margin-right: 0.5rem;
  }
`;
