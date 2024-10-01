import { createGreetengMessage, ManType } from "./05";

let people: Array<ManType> = [];

beforeEach(() => {
  people = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18},
  ]
})

test('should get array of greeting messages', () => {
  const messages = createGreetengMessage(people);

  expect(messages.length).toBe(3);
  expect(messages[0]).toBe('Hello Andrew. Welcome!')
  expect(messages[1]).toBe('Hello Alexander. Welcome!')
  expect(messages[2]).toBe('Hello Dmitry. Welcome!')
});