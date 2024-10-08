import { ManType } from "./HW_07"

export type StreetType = {
  title: string
}

export type AddressType = {
  street: StreetType
}

export type LessonType = {
  title: string
}


let props: ManType;

beforeEach(() => {
  props = {
    name: 'Roman',
    age: 28,
    lessons: [{title: '1'}, {title: '2'}, {title: '3'}],
    address: {
      street: {
        title: 'Leningradskaya'
      }
    }
  }
})

test('get object', () => {

  //const age = props.age;
  //const lessons = props.lessons;

  const {age, lessons} = props;
  // const {age: a, lessons: l} = props;

  // const title = props.address.street.title
  const {title} = props.address.street

  const a = props.age;
  const l = props.lessons;

  
  expect(age).toBe(28);
  expect(lessons.length).toBe(3);

  expect(a).toBe(28);
  expect(l.length).toBe(3);

  expect(title).toBe('Leningradskaya')

})

test('get function', () => {
  const l1 = props.lessons[0];
  const l2 = props.lessons[1];

  const [ls1] = props.lessons;
  // const [ls1, ls2] = props.lessons;
  const [,,ls3] = props.lessons

  expect(l1.title).toBe('1');
  expect(l2.title).toBe('2');

  expect(ls1.title).toBe('1');
  // expect(ls2.title).toBe('2');
  expect(ls3.title).toBe('3');

})