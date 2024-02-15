import {ManType} from './map'

let people: Array<ManType> = [];

beforeEach(() => {
  people = [
	{ name: 'Andrew Ivanoc', age: 33 },
	{ name: 'Alexander Petrov', age: 24 },
	{ name: 'Dmitry Sidorov', age: 18 },
];
})

test('should get array of greeting messages', () => {
  const messages = people.map (man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-INCUBATOR`)
  
  expect(messages.length).toBe(3);
  console.log(messages)

})
