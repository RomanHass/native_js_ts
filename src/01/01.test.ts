import { mult, splitIntoWords, sum } from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
  a = 1;
  b = 2;
  c = 3;
});

test("sum should be correct", () => {
  

  // action
  const result1 = sum(a, b);
  const result2 = sum(b, c);

  // expect result
  expect(result1).toBe(3);
  expect(result2).toBe(5);

});

test("multiply should be correct", () => {

  // action
  const result1 = mult(a, b);
  const result2 = mult(b, c);

  // expect result
  expect(result1).toBe(2);
  expect(result2).toBe(6);

});

test("splitting into words should be correct", () => {
  // data
  const sentence1 = 'Hello my friend!';
  const sentence2 = 'JS - the best programming language.';

  // action
  const result1 = splitIntoWords(sentence1);
  const result2 = splitIntoWords(sentence2);

  // expect result
  expect(result1.length).toBe(3);
  expect(result1[0]).toBe('hello');
  expect(result1[1]).toBe('my');
  expect(result1[2]).toBe('friend');

  expect(result2.length).toBe(6);  
  expect(result2[0]).toBe('js');
  expect(result2[1]).toBe('-');
  expect(result2[2]).toBe('the');
  expect(result2[3]).toBe('best');
  expect(result2[4]).toBe('programming');
  expect(result2[5]).toBe('language.');

});
