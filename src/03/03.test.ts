import { StudentType } from "../02/02";
import { addSkill, doesStudentLiveInACity, makeStudentActive } from "./03";

let student: StudentType;

beforeEach(() => {
  student = {
    id: 1,
    name: "Roman",
    age: 28,
    isActive: true,
    address: {
      country: "Belarus",
      city: {
        cityTitle: "Vitebsk",
        streetTitle: "Leningradskaya"
      },
    },
    technologies: [
      { 
        id: 1,
        title: "HTML"
      },
      { 
        id: 2,
        title: "CSS"
      },
      { 
        id: 3,
        title: "React"
      },
    ],
  }
});

test("new tech skill should be added to student", () => {
  expect(student.technologies.length).toBe(3);
  addSkill(student, "JS");
  expect(student.technologies.length).toBe(4);
  expect(student.technologies[3].title).toBe("JS");
  expect(student.technologies[3].id).toBeDefined();
});

test("student should be inactive", () => {
  expect(student.isActive).toBe(true);

  makeStudentActive(student);

  expect(student.isActive).toBe(false);
});

test("does student live in a city?", () => {
  let result1 = doesStudentLiveInACity(student, "Moscow");
  let result2 = doesStudentLiveInACity(student, "Vitebsk");
  expect(result1).toBe(false);
  expect(result2).toBe(true);
});