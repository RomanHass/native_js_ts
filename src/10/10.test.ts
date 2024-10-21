import { addCompany, addNewBookToUser, changeNameCompany, getUpgradingUserLaptop, makeHairstyle, moveUser, moveUserToOtherHouse, removeBook, updateBook, updateCompany, UserType, UsesrWithBooksType, UsesrWithLaptopType, WithCompaniesType } from "./10"

test.skip('copy user', () => {
  let user: UserType = {
    name: 'Roman',
    hair: 32,
    address: {
      city: 'Vitebsk',
    }
  }

  const awesomeUser = makeHairstyle(user, 2)

  expect(user.hair).toBe(32)
  expect(awesomeUser.hair).toBe(16)
  expect(awesomeUser.address).toBe(user.address)
})

test.skip('change address', () => {
  let user: UsesrWithLaptopType = {
    name: 'Roman',
    hair: 32,
    address: {
      city: 'Vitebsk',
      house: 12
    },
    laptop: {
      title: 'Zenbook'
    }
  }

  const movedUser = moveUser(user, 'Kiev')

  expect(user).not.toBe(movedUser)
  expect(user.address).not.toBe(movedUser.address)
  expect(movedUser.address.city).toBe('Kiev')
  expect(user.laptop).toBe(movedUser.laptop)

})

test.skip('upgrade laptop to macbook', () => {
  let user: UsesrWithLaptopType = {
    name: 'Roman',
    hair: 32,
    address: {
      city: 'Vitebsk',
      house: 12
    },
    laptop: {
      title: 'Zenbook'
    }
  }

  const userCopy = getUpgradingUserLaptop(user, 'Macbook')

  expect(user).not.toBe(userCopy)
  expect(user.address).toBe(userCopy.address)
  expect(userCopy.address.city).toBe('Vitebsk')

  expect(user.laptop).not.toBe(userCopy.laptop)
  expect(user.laptop.title).toBe('Zenbook')
  expect(userCopy.laptop.title).toBe('Macbook')

})

test.skip('books', () => {
  let user: UsesrWithLaptopType & UsesrWithBooksType = {
    name: 'Roman',
    hair: 32,
    address: {
      city: 'Vitebsk',
      house: 12
    },
    laptop: {
      title: 'Zenbook'
    },
    books: ['html', 'css', 'js', 'react'],
  }

  const userCopy = moveUserToOtherHouse(user, 99)

  expect(user).not.toBe(userCopy)
  expect(user.books).toBe(userCopy.books)
  expect(user.laptop).toBe(userCopy.laptop)
  expect(user.address).not.toBe(userCopy.address)
  expect(user.address.house).toBe(12)
  expect(userCopy.address.house).toBe(99)
})

test.skip('add new books to user', () => {
  let user: UsesrWithLaptopType & UsesrWithBooksType = {
    name: 'Roman',
    hair: 32,
    address: {
      city: 'Vitebsk',
      house: 12
    },
    laptop: {
      title: 'Zenbook'
    },
    books: ['html', 'css', 'js', 'react'],
  }

  const userCopy = addNewBookToUser(user, 'ts')

  expect(user).not.toBe(userCopy)
  expect(user.books).not.toBe(userCopy.books)
  expect(user.books).toEqual(['html', 'css', 'js', 'react'])
  expect(userCopy.books).toEqual(['html', 'css', 'js', 'react', 'ts'])
  expect(userCopy.books.length).toBe(5)
  expect(userCopy.books[4]).toBe('ts')
})

test.skip('update books - js to ts', () => {
  let user: UsesrWithLaptopType & UsesrWithBooksType = {
    name: 'Roman',
    hair: 32,
    address: {
      city: 'Vitebsk',
      house: 12
    },
    laptop: {
      title: 'Zenbook'
    },
    books: ['html', 'css', 'js', 'react'],
  }

  const userCopy = updateBook(user, 'js', 'ts')

  expect(user).not.toBe(userCopy)
  expect(user.books).not.toBe(userCopy.books)
  expect(userCopy.books[2]).toBe('ts')
})

test.skip('remove js book', () => {
  let user: UsesrWithLaptopType & UsesrWithBooksType = {
    name: 'Roman',
    hair: 32,
    address: {
      city: 'Vitebsk',
      house: 12
    },
    laptop: {
      title: 'Zenbook'
    },
    books: ['html', 'css', 'js', 'react'],
  }

  const userCopy = removeBook(user, 'js')

  expect(user).not.toBe(userCopy)
  expect(user.books).not.toBe(userCopy.books)
  expect(userCopy.books[2]).toBe('react')
  expect(userCopy.books).toEqual(['html', 'css', 'react'])
})

test('companies', () => {
  let user: UsesrWithLaptopType & WithCompaniesType = {
    name: 'Roman',
    hair: 32,
    address: {
      city: 'Vitebsk',
      house: 12
    },
    laptop: {
      title: 'Zenbook'
    },
    companies: [
      { id: 1, title: 'Epam' },
      { id: 2, title: 'Artezio' },
    ]
  }

  const myCompanies = addCompany(user, {id: 3, title: 'Lofty'})

  expect(myCompanies.companies.length).toBe(3)
  expect(myCompanies.companies[2].title).toBe('Lofty')
  expect(myCompanies.companies).toEqual(
    [
      { id: 1, title: 'Epam' },
      { id: 2, title: 'Artezio' },
      { id: 3, title: 'Lofty' }
    ]
  )

})

test.skip('companies update', () => {
  let user: UsesrWithLaptopType & WithCompaniesType = {
    name: 'Roman',
    hair: 32,
    address: {
      city: 'Vitebsk',
      house: 12
    },
    laptop: {
      title: 'Zenbook'
    },
    companies: [
      { id: 1, title: 'Епам' },
      { id: 2, title: 'Artezio' },
    ]
  }

  const myCompanies = changeNameCompany(user, 1, 'EPAM')

  expect(user).not.toBe(myCompanies)
  expect(user.companies).not.toBe(myCompanies.companies)
  expect(myCompanies.companies.length).toBe(2)
  expect(myCompanies.companies[0].title).toBe('EPAM')

})

test('update company', () => {

  let companies = {
    'Roman': [{ id: 1, title: 'Епам' }, { id: 2, title: 'Artezio' }],
    'Artem': [{ id: 2, title: 'Artezio' }],
  }

  const copyCompany = updateCompany(companies, 'Roman', 1, 'EPAM')  

  expect(copyCompany['Roman']).not.toBe(companies['Roman']);
  expect(copyCompany['Artem']).toBe(companies['Artem']);
  expect(copyCompany['Roman'][0].title).toBe('EPAM');
})