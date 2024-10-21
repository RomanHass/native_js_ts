// const students = [
//   { id: 'id100', title: 'Andrew' },
//   { id: 'id2', title: 'Anna' },
//   { id: 'id4', title: 'Sasha' },
//   // ...
//   { id: 'id1000000', title: 'Marina' },
// ];

// const marina = students.find(s => s.id === 'id1000000');
// console.log(marina);//{ id: 'id1000000', title: 'Marina' }

// const studentsObj = {
//   id100: { id: 'id100', title: 'Andrew' },
//   id2: { id: 'id2', title: 'Anna' },
//   id4: { id: 'id4', title: 'Sasha' },
//   // ...
//   id1000000 : {id: 'id1000000', title: 'Marina' },
// }

// const marinaObj = studentsObj['id1000000']
// console.log(marinaObj);//{ id: 'id1000000', title: 'Marina' }

// // add lastname
// marinaObj.title += ' Sun'
// // or
// studentsObj['id1000000'].title += ' Sun'
// console.log(marinaObj);//{ id: 'id1000000', title: 'Marina Sun' }


// examples


const students = [
  { id: 'id100', title: 'Andrew' },
  { id: 'id2', title: 'Anna' },
  { id: 'id4', title: 'Sasha' },
  // ...
  { 
    id: 'id1000000', 
    title: 'Marina',
    technologies: [
      { id: 1, title: 'CSS' },
      { id: 2, title: 'HTML' },
      { id: 3, title: 'JS' },
      { id: 4, title: 'REAC' },
    ]
  },
];

// const marina = students.find(s => s.id === 'id1000000');
// const tech = marina.technologies.find(t => t.id === 4);
// tech.title = 'React';

students
  .find(s => s.id === 'id1000000')
  .technologies.find(t => t.id === 4)
  .title = 'React';


const studentsObj = {
  id100: { id: 'id100', title: 'Andrew' },
  id2: { id: 'id2', title: 'Anna' },
  id4: { id: 'id4', title: 'Sasha' },
  // ...
  id1000000 : {
    id: 'id1000000', 
    title: 'Marina', 
    technologies: {
      1: { id: 1, title: 'CSS' },
      2: { id: 2, title: 'HTML' },
      3: { id: 3, title: 'JS' },
      4: { id: 4, title: 'REAC' },
    }
  },
}

// const marina = studentsObj['id1000000'];
// const tech2 = marina.technologies['4'];
// tech2.title = 'React';

studentsObj['id1000000'].technologies['4'].title = 'React';