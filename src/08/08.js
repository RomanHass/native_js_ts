// const user = {
// name: 'Roman',
// age: 28,
// address: {
//   city: {
//     title: 'Vitebsk'
//   }
// },
//   'name': 'Roman',
//   'age': 28,
//   'address': {
//     'city': {
//       'title': 'Vitebsk'
//     }
//   }
// }

// console.log(user);

// console.log(user.address.city.title);//Vitebsk
// console.log(user['address']['city']['title']);//Vitebsk

////

// const city = {}
// console.log(city);
// city.title = 'Minsk'
// console.log(city);//{ title: 'Minsk' }
// city['citizensCount'] = 100;
// console.log(city);//{ title: 'Minsk', citizensCount: 100 }

////

// const users = ['Roman', 'Daria', 'Tatiana', 'Lubov'];
// console.log(users[0]);//Roman
// console.log(users['0']);//Roman

//console.log(users.map(u => u.toUpperCase()));//[ 'ROMAN', 'DARIA', 'TATIANA', 'LUBOV' ]
// console.log(users['map'](u => u.toUpperCase()));//[ 'ROMAN', 'DARIA', 'TATIANA', 'LUBOV' ]

////
// const usersObj = {
//   '0': "Roman",
//   '1': "Daria",
//   '2': "Tatiana",
//   '3': "Lubov",
// };

// console.log(usersObj['0']);//Roman
// console.log(usersObj[3]);//Lubov

// usersObj['table'] = 'brown';

// console.log(usersObj);
/*
{
  '0': 'Roman',
  '1': 'Daria',
  '2': 'Tatiana',
  '3': 'Lubov',
  table: 'brown'
}
*/

// usersObj['привет как дела'] = 'Отлично!';
// console.log(usersObj['привет как дела']);// Отлично!


////
// const usersObj = {
//   '0': "Roman",
//   '1': "Daria",
//   '2': "Tatiana",
//   '3': "Lubov",
// };

//console.log(Object.keys(usersObj));//[ '0', '1', '2', '3' ]
//console.log(Object.values(usersObj));//[ 'Roman', 'Daria', 'Tatiana', 'Lubov' ]
//console.log(Object.entries(usersObj));
/*
[
  [ '0', 'Roman' ],
  [ '1', 'Daria' ],
  [ '2', 'Tatiana' ],
  [ '3', 'Lubov' ]
]

*/

// usbj[[]] = 'hello'
// console.log(usersObj);
/*
{
  '0': 'Roman',
  '1': 'Daria',
  '2': 'Tatiana',
  '3': 'Lubov',
  '': 'hello'
}
*/

/////

const usersObj = {
  '0': "Roman",
  '1': "Daria",
  '2': "Tatiana",
  '3': "Lubov",
};


const user = {id: 100500, name: 'Igor'};

usersObj[user.id] = user;
// usersObj[user.id] = user;

// console.log(usersObj);
/*
  {
  '0': 'Roman',
  '1': 'Daria',
  '2': 'Tatiana',
  '3': 'Lubov',
  '100500': { id: 100500, name: 'Igor' }
}
*/

delete usersObj[user.id]
// console.log(usersObj);//{ '0': 'Roman', '1': 'Daria', '2': 'Tatiana', '3': 'Lubov' }
usersObj[user.id] = 'Vitya';
console.log(usersObj);
/*
  {
    '0': 'Roman',
    '1': 'Daria',
    '2': 'Tatiana',
    '3': 'Lubov',
    '100500': 'Vitya'
  }
*/


const usersArray = [
  { id: 101, name: 'Roman' },
  { id: 3232312, name: 'Daria' },
  { id: 1212, name: 'Tatiana' },
  { id: 1, name: 'Lubov' }
];

usersArray.push(user);
// console.log(usersArray);
/*
  [
    { id: 101, name: 'Roman' },
    { id: 3232312, name: 'Daria' },
    { id: 1212, name: 'Tatiana' },
    { id: 1, name: 'Lubov' },
    { id: 100500, name: 'Igor' }
  ]
*/

usersArray.push(user);
// console.log(usersArray);
/*
  [
    { id: 101, name: 'Roman' },
    { id: 3232312, name: 'Daria' },
    { id: 1212, name: 'Tatiana' },
    { id: 1, name: 'Lubov' },
    { id: 100500, name: 'Igor' },
    { id: 100500, name: 'Igor' }
  ]
*/