export type ManType = {
  name: string
  age: number
}

const people: Array<ManType> = [
  {name: 'Andrew Ivanoc', age: 33},
  {name: 'Alexander Petrov', age: 24},
  {name: 'Dmitry Sidorov', age: 18}
];

const dimychTransformator = (man: ManType) => {
  return {
		stack: ['css', 'html', 'js', 'tdd', 'react'],
		firstName: man.name.split(' ')[0],
		lastName: man.name.split(' ')[1]
	};
};

const devs = [
  {
    stack: ['css', 'html', 'js', 'tdd', 'react'],
    firstName: 'Andrew', lastName: 'Ivanov'
  },
  {
    stack: ['css', 'html', 'js', 'tdd', 'react'],
    firstName: 'Alexander', lastName: 'Petrov'
  },
  {
    stack: ['css', 'html', 'js', 'tdd', 'react'],
    firstName: 'Dmitry', lastName: 'Sidorov'
  },
];

export const dev2 = people.map(dimychTransformator)
console.log(dev2)