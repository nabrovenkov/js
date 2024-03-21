import { PersonType } from '../../react_learn/passing_props/Avatar';
import {
	BooksPersonType,
	CompanyType,
	addBooks,
	addNewCompany,
	changeBook,
	removeBook,
	update,
	updateCompany,
	user,
	userUpgradeLaptop,
} from './Immutability';

test('upgrade laptop', () => {
	expect(user).not.toBe(userUpgradeLaptop);
	expect(user.laptop.name).toBe('redmi');
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
const userBookChange = changeBook(userBooks, 'js', 'ts');

test('add new books', () => {
	expect(userBooks).not.toBe(userBooksCopy);
	expect(userBooks.books).not.toBe(userBooksCopy.books);
	expect(userBooksCopy.books[4]).toBe('ts');
	expect(userBooksCopy.books[5]).toBe('rest api');
});

test('change book', () => {
	expect(userBooks).not.toBe(userBookChange);
	expect(userBooks.laptop).toBe(userBookChange.laptop);
	expect(userBooks.address).toBe(userBookChange.address);
	expect(userBooks.books).not.toBe(userBookChange.books);
	expect(userBookChange.books[1]).toBe('ts');
});

test('remove book', () => {
	const userRemoveBook = removeBook(userBooks, 'Css');


	expect(userBooks).not.toBe(userRemoveBook);
	expect(userBooks.laptop).toBe(userRemoveBook.laptop);
	expect(userBooks.address).toBe(userRemoveBook.address);
	expect(userBooks.books).not.toBe(userRemoveBook.books);
	expect(userRemoveBook.books.length).toBe(3);
});

test('remove book', () => {
	const userCompany: CompanyType = {
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
		company: [
			{id: 1, title: 'Bingo'},
			{id: 2, title: 'o2tv'},
		]
	};
	const userNewCompany = addNewCompany(userCompany, { id: 3, title: 'Google' });

	const userUpdateCompany = updateCompany(userNewCompany, 1, 'Bet-Boom') 

	expect(userNewCompany).not.toBe(userUpdateCompany)
	expect(userNewCompany.address).toBe(userUpdateCompany.address)
	expect(userNewCompany.company).not.toBe(userUpdateCompany.company)
	expect(userNewCompany.company[0].title).toBe('Bingo');
	expect(userUpdateCompany.company[0].title).toBe('Bet-Boom');
});

test('update Company', () => {
	const company = {
		['Alex']: [
			{id: 1, title: 'Bingo'},
			{id: 2, title: 'o2tv'},
		],
		['Vasiliy']: [
			{id: 1, title: 'Russia.ru'},
			{id: 2, title: 'Yandex'},
		]
	};

	const updatedCompany = update(company, 'Vasiliy', 1, 'Russia')


	
	expect(updatedCompany['Vasiliy']).not.toBe(company['Vasiliy']);
	expect(updatedCompany['Vasiliy'][0].title).toBe('Russia')
	
})

