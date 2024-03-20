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
  books: Array<string>
}

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



function upgradeLaptop (user: PersonType, name: string, model: string) {
  return {
    ...user,
    laptop: {
      ...user.laptop,
      name: name,
      model: model,
    }
  }
}

export function addBooks (user: BooksPersonType, newBooks: Array<string>) {
  return {
    ...user,
    books: [...user.books.concat(newBooks)],

      
    }
  }

export function changeBook (user: BooksPersonType, lastBook: string, newBook: string) {
  const updatedBooks = {...user}
  updatedBooks.books.map(book => book === 'js' ? book = 'ts' : book)
  return {
		...user,
		books: [user.books.map((book) => (book === lastBook ? book = newBook : book))],
	};
}
export const userUpgradeLaptop = upgradeLaptop(user, 'macbook', 'm1')