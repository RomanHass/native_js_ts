
function increaseAge(u: UserType) {
  // u.age++
  u.age = u.age + 1
}

type UserType = {
  name: string
  age: number
  address: {title: string}
}

test.skip('big reference type test', () => {

  let user: UserType = {
    name: 'Roman',
    age: 28,
    address: {
      title: 'Vitebsk'
    }
  }

  increaseAge(user)
  
  expect(user.age).toBe(29)
  
  const superman = user
  superman.age = 1000
  expect(user.age).toBe(1000)

})


test.skip('array reference test', () => {

  let users: Array<UserType> = [
    {
      name: 'Roman',
      age: 28
    },
    {
      name: 'Dimych',
      age: 32
    },
  ]

  const admins = users;

  admins.push({name: 'Ivan', age: 10})

  expect(users[2]).toEqual({name: 'Ivan', age: 10})

})

test.skip('value type test', () => {

  let usersCount = 100

  let adminsCount = usersCount

  adminsCount = usersCount + 1

  expect(adminsCount).toBe(101)

})

test.skip('reference type test', () => {

  let user1: UserType = {
    name: 'Roman',
    age: 28,
    address: {
      title: 'Vitebsk'
    }
  }

  // let addr = user.address
  
  let user2: UserType = {
    name: 'Darya',
    age: 24,
    address: user1.address
  }

  user2.address.title = 'Kanary'


  expect(user2.address).toBe(user1.address)
  expect(user2.address.title).toBe('Kanary')
  expect(user1.address.title).toBe('Kanary')

})

test('reference type array test', () => {

  let user1: UserType = {
    name: 'Roman',
    age: 28,
    address: {
      title: 'Vitebsk'
    }
  }

  let user2: UserType = {
    name: 'Darya',
    age: 24,
    address: user1.address
  }


  const users = [user1, user2, { name: "Pete", age: 33, address: user1.address }]

  const admins = [user1, user2]


  admins[0].name = 'Roma'

  expect(user1.name).toBe('Roma')
  expect(users[0].name).toBe('Roma')
  

})
