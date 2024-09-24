type TechType = {
  id: number
  title: string
};

type LocalCityType = {
  cityTitle: string
  streetTitle: string
};

type AddressType = {
  country: string
  city: LocalCityType
};

type StudentType = {
  id: number
  name: string
  age: number
  isActive: boolean
  address: AddressType
  technologies: Array<TechType>
};

const student: StudentType = {
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
};

console.log(student.age); // 28
console.log(student.name); // Roman
console.log(student.address.country); // Belarus

console.log(student.technologies[2].title); // React