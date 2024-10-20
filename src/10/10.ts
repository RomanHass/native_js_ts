export type UserType = {
  name: string
  hair: number
  address: {
    city: string
    house?: 12
  }
}

export type LaptopType = {
  title: string
}

export type UsesrWithLaptopType = UserType & {
  laptop: LaptopType
}

export type UsesrWithBooksType = UserType & {
  books: Array<string>
}

export type CompaniesType = {
  id: number,
  title: string
}

export type WithCompaniesType = {
  companies: Array<CompaniesType>
}


export function makeHairstyle(u: UserType, power: number) {
  const copy = {
    ...u,
    hair: u.hair / power,
  }

  // copy.hair = u.hair / p ower
  return copy
}

export function moveUserToOtherHouse(u: UsesrWithLaptopType & UsesrWithBooksType, house: number) {
  return {
    ...u,
    address: {
      ...u.address,
      house: house
    }
  }
}

export function moveUser(u: UsesrWithLaptopType, city: string) {
  return {
    ...u,
    address: {
      ...u.address,
      city: city
    }
  }
}

export function getUpgradingUserLaptop(u: UsesrWithLaptopType, macbook: string) {
  return {
    ...u,
    laptop: {
      ...u.laptop,
      title: macbook
    }
  }
}

export function addNewBookToUser(u: UsesrWithLaptopType & UsesrWithBooksType, newBook: string) {
  return {
    ...u,
    books: [...u.books, newBook]
  }

  // const copy = {
    // ...u,
    // books: [...u.books]
  // }

  // copy.books.push(newBook)

  // copy.books = [...u.books, newBook]
  // return copy

}

export function updateBook(u: UsesrWithLaptopType & UsesrWithBooksType, oldBook:string, newBook:string) {
  return {
    ...u,
    books: u.books.map(b =>  b === oldBook ? newBook : b)
  }
}

export function removeBook(u: UsesrWithLaptopType & UsesrWithBooksType, delBook: string) {
  return {
    ...u,
    books: u.books.filter(b => b !== delBook)
  }
}

export function addCompany(u: UsesrWithLaptopType & WithCompaniesType, newCompany: CompaniesType) {
  return {
    ...u,
    companies: [...u.companies, newCompany]
  }
}

export function changeNameCompany(u: WithCompaniesType, companyId: number, newNameCompany: string) {
  return {
    ...u,
    companies: u.companies.map(c => c.id === companyId ? {...c, title: newNameCompany} : c)
  }
}

export function updateCompany(companies: {[key: string]: Array<CompaniesType>}, userName: string, companyId: number, newTitle: string) {
  let companyCopy = {...companies}

  companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)

  return companyCopy
}