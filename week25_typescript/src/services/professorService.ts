import { Professor } from '../models/Professor';

const professors: Professor[] = [];

// 교수를 추가하는 함수
export function addProfessor(professor: Professor): void {
  professors.push(professor);
}

// 모든 교수를 가져오는 함수
export function getProfessors(): Professor[] {
  return professors;
}
