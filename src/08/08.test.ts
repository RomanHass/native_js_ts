

type UsersType = {
  [key: string]: {id: number, name: string}
}

let users: UsersType;


beforeEach(() => {
  users = {
    '101': { id: 101, name: 'Roman' },
    '3232312': { id: 3232312, name: 'Daria' },
    '1212': { id: 1212, name: 'Tatiana' },
    '1': { id: 1, name: 'Lubov' },
  }
});

test.skip('should update corresponding user', () => {

  users['1'].name = 'Hleb'

  expect(users[1].name).toBe('Hleb')
});

test('should delete corresponding user', () => {

  delete users['101']

  expect(users['101']).toBeUndefined()
});