import { StudentType } from "../02/02";

export const addSkill = (student: StudentType, skill: string) => {
  student.technologies.push({
    id: new Date().getTime(), 
    title: skill
  });
};


export const makeStudentActive = (student: StudentType) => {
  student.isActive = false;
};


export const doesStudentLiveInACity = (student: StudentType, city: string) => {
  return student.address.city.cityTitle === city;
};