import { BooksPersonType, addBooks, changeBook, user, userUpgradeLaptop } from "./Immutability"

test('upgrade laptop', () => {
  expect(user).not.toBe(userUpgradeLaptop)
  expect(user.laptop.name).toBe('redmi')
  expect(userUpgradeLaptop.laptop.name).toBe('macbook');
});

export const userBooks: BooksPersonType = {
	name: 'Alex',
	age: 36,
	address: {
		city: 'Moscow',
		house: 18,
	},
	laptop: {
		name: 'redmi',
		model: 'z32',
	},
  books: ['Css', 'js', 'HTML', 'React'],
};

const userBooksCopy = addBooks(userBooks, ['ts', 'rest api']);
const userBookChange = changeBook(userBooks, 'js', 'ts')


test('add new books', () => {
  expect(userBooks).not.toBe(userBooksCopy);
  expect(userBooks.books).not.toBe(userBooksCopy.books);
  expect(userBooksCopy.books[4]).toBe('ts');
  expect(userBooksCopy.books[5]).toBe('rest api');

  expect(userBookChange.books[1]).toBe('ts')
})