type PersonType = {
	name: string;
	age: number;
	address: {
		city: string;
		house: number;
	};
	laptop: {
		name: string;
		model: string;
	};
};

export type BooksPersonType = PersonType & {
	books: Array<string>;
};

export type CompanyType = PersonType & {
	company: Array<{ id: number, title: string }>;
};

export const user: PersonType = {
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
};

function upgradeLaptop(user: PersonType, name: string, model: string) {
	return {
		...user,
		laptop: {
			...user.laptop,
			name: name,
			model: model,
		},
	};
}

export function addBooks(user: BooksPersonType, newBooks: Array<string>) {
	return {
		...user,
		books: [...user.books.concat(newBooks)],
	};
}

export function changeBook(
	user: BooksPersonType,
	lastBook: string,
	newBook: string
) {
	const updatedBooks = user.books.map((book) =>
		book === lastBook ? newBook : book
	);
	return {
		...user,
		books: user.books.map((book) => (book === lastBook ? newBook : book)),
	};
}

export const removeBook = (user: BooksPersonType, removeBook: string) => ({
	...user,
	books: user.books.filter((book) => book !== removeBook),
});

export const userUpgradeLaptop = upgradeLaptop(user, 'macbook', 'm1');

export const addNewCompany = (user: CompanyType, newCompany: {id: number, title: string}) => ({
	...user,
	company: [...user.company, newCompany]
})

export const updateCompany = (user: CompanyType, id: number, newTitle: string) => ({
	...user,
	company: user.company.map(com => com.id === id ? {...com, title:newTitle} : com)
})

export const update = (
	company: { [key: string]: Array<{ id: number; title: string }> },
	personName: string,
	id: number,
	newCompanyTitle: string
) => ({
	...company,
	[personName]: company[personName].map(c => c.id === id ? {...c, title: newCompanyTitle} : c)
})