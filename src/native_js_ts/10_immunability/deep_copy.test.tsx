export {};
test('copy 1', () => {
	let man = {
		name: 'John',
		age: 28,
	};

	let manFullCopy; //  your code

	manFullCopy = { ...man };

	expect(manFullCopy).not.toBe(man);
});

test('copy 2', () => {
	let numbers = [1, 2, 3];

	let numbersFullCopy = [...numbers];

	expect(numbersFullCopy).not.toBe(numbers);
});

test('copy 3', () => {
	let man1 = {
		name: 'John',
		age: 28,
		mother: {
			name: 'Kate',
			age: 50,
		},
	};

	let man1FullCopy = { ...man1, mother: { ...man1.mother } };
	man1FullCopy.mother.name = 'Olga';

	expect(man1FullCopy).not.toBe(man1);
	expect(man1FullCopy.mother).not.toBe(man1.mother);
	expect(man1FullCopy.mother.name).toBe('Olga');
});

test('copy 4', () => {
	let man2 = {
		name: 'John',
		age: 28,
		friends: ['Peter', 'Steven', 'William'],
	};

	let man2FullCopy = { ...man2, friends: [...man2.friends] };
	man2FullCopy.friends[0] = 'Olga';

	expect(man2FullCopy).not.toBe(man2);
	expect(man2FullCopy.friends).not.toBe(man2.friends);
	expect(man2FullCopy.friends[0]).toBe('Olga');
});

test('copy 4', () => {
	let people = [
		{ name: 'Peter', age: 30 },
		{ name: 'Steven', age: 32 },
		{ name: 'William', age: 28 },
	];

	let peopleFullCopy = people.map((p) =>
		p.name === 'Steven' ? { ...p, name: 'Olga' } : p
	);
	expect(peopleFullCopy).not.toBe(people);
	expect(peopleFullCopy[1]).not.toBe(people[1]);
	expect(peopleFullCopy[1].name).toBe('Olga');
	expect(peopleFullCopy[2].name).not.toBe(people[2]);
});

test('copy 5', () => {
	let man3 = {
		name: 'John',
		age: 28,
		friends: [
			{ name: 'Peter', age: 30 },
			{ name: 'Steven', age: 32 },
			{ name: 'William', age: 28 },
		],
	};

	let man3FullCopy = {
		...man3,
		// friends: [...man3.friends],
		friends: man3.friends.map((f) => {
			return { ...f };
		}),
	};

	man3FullCopy.friends[1].name = 'Olga';
	expect(man3).not.toBe(man3FullCopy);
	expect(man3.friends).not.toBe(man3FullCopy.friends);
	expect(man3.friends[2]).not.toBe(man3FullCopy.friends[2]);
	expect(man3FullCopy.friends[1].name).toBe('Olga');
});

test('copy 6', () => {
	let man4 = {
		name: 'John',
		age: 28,
		mother: {
			name: 'Kate',
			age: 50,
			work: {
				position: 'doctor',
				experience: 15,
			},
		},
	};

	let man4FullCopy = {
		...man4,
		mother: {
			...man4.mother,
			work: { ...man4.mother.work },
		},
	};

	man4FullCopy.mother.work.experience = 50;

	expect(man4).not.toBe(man4FullCopy);
	expect(man4.mother).not.toBe(man4FullCopy.mother);
	expect(man4.mother.work).not.toBe(man4FullCopy.mother.work);
	expect(man4FullCopy.mother.work.experience).toBe(50);
	expect(man4.mother.work.experience).toBe(15);
});

test('copy 7', () => {
	let man5 = {
		name: 'John',
		age: 28,
		mother: {
			name: 'Kate',
			age: 50,
			work: {
				position: 'doctor',
				experience: 15,
			},
			parents: [
				{ name: 'Kevin', age: 80 },
				{ name: 'Jennifer', age: 78 },
			],
		},
	};

	let man5FullCopy = {
		...man5,
		mother: {
			...man5.mother,
			work: { ...man5.mother.work },
			parents: man5.mother.parents.map((p) => {
				return { ...p };
			}),
		},
	};

	man5FullCopy.mother.work.experience = 50;
	man5FullCopy.mother.parents[0].age = 6;
	// console.log(JSON.stringify(man5, null, 2));
	// console.log(JSON.stringify(man5FullCopy, null, 2));
	expect(man5).not.toBe(man5FullCopy);
	expect(man5.mother).not.toBe(man5FullCopy.mother);
	expect(man5.mother.work).not.toBe(man5FullCopy.mother.work);
	expect(man5.mother.parents).not.toBe(man5FullCopy.mother.parents);
	expect(man5.mother.parents[1]).not.toBe(man5FullCopy.mother.parents[1]);
	expect(man5FullCopy.mother.work.experience).toBe(50);
	expect(man5.mother.work.experience).toBe(15);
	expect(man5FullCopy.mother.parents[0].age).toBe(6);
	expect(man5.mother.parents[0].age).toBe(80);
});

test('copy 8', () => {
	let man6 = {
		name: 'John',
		age: 28,
		mother: {
			name: 'Kate',
			age: 50,
			work: {
				position: 'doctor',
				experience: 15,
			},
			parents: [
				{
					name: 'Kevin',
					age: 80,
					favoriteDish: {
						title: 'borscht',
					},
				},
				{
					name: 'Jennifer',
					age: 78,
					favoriteDish: {
						title: 'sushi',
					},
				},
			],
		},
	};

	let man6FullCopy = {
		...man6,
		mother: {
			...man6.mother,
			work: { ...man6.mother.work },
			parents: man6.mother.parents.map((p) => {
				return { ...p, favoriteDish: { ...p.favoriteDish } };
			}),
		},
	};

	man6FullCopy.mother.parents[1].favoriteDish.title = 'pizza';
	// man6FullCopy.mother.parents[0].age = 6;
	// console.log(JSON.stringify(man6, null, 2));
	// console.log(JSON.stringify(man6FullCopy, null, 2));
	expect(man6).not.toBe(man6FullCopy);
	expect(man6.mother).not.toBe(man6FullCopy.mother);
	expect(man6.mother.work).not.toBe(man6FullCopy.mother.work);
	expect(man6.mother.parents).not.toBe(man6FullCopy.mother.parents);
	expect(man6.mother.parents[0].favoriteDish).not.toBe(
		man6FullCopy.mother.parents[0].favoriteDish
	);
	expect(man6.mother.parents[1].favoriteDish.title).toBe('sushi');
	expect(man6FullCopy.mother.parents[1].favoriteDish.title).toBe('pizza');
});

test('copy 9', () => {
	let man7 = {
		name: 'John',
		age: 28,
		mother: {
			name: 'Kate',
			age: 50,
			work: {
				position: 'doctor',
				experience: 15,
			},
			parents: [
				{
					name: 'Kevin',
					age: 80,
					favoriteDish: {
						title: 'borscht',
						ingredients: [
							{ title: 'beet', amount: 3 },
							{ title: 'potatoes', amount: 5 },
							{ title: 'carrot', amount: 1 },
						],
					},
				},
				{
					name: 'Jennifer',
					age: 78,
					favoriteDish: {
						title: 'sushi',
						ingredients: [
							{ title: 'fish', amount: 1 },
							{ title: 'rise', amount: 0.5 },
						],
					},
				},
			],
		},
	};

	let man7FullCopy = {
		...man7,
		mother: {
			...man7.mother,
			work: { ...man7.mother.work },
			parents: man7.mother.parents.map((p) => {
				return {
					...p,
					favoriteDish: {
						...p.favoriteDish,
						ingredients: p.favoriteDish.ingredients.map((i) => {
							return { ...i };
						}),
					},
				};
			}),
		},
	};

	man7FullCopy.mother.parents[1].favoriteDish.ingredients[0].amount = 33;

	console.log(JSON.stringify(man7, null, 2));
	console.log(JSON.stringify(man7FullCopy, null, 2));

	expect(man7).not.toBe(man7FullCopy);
	expect(man7.mother).not.toBe(man7FullCopy.mother);
	expect(man7.mother.work).not.toBe(man7FullCopy.mother.work);
	expect(man7.mother.parents).not.toBe(man7FullCopy.mother.parents);
	expect(man7.mother.parents[0].favoriteDish).not.toBe(
		man7FullCopy.mother.parents[0].favoriteDish
	);
	expect(man7.mother.parents[1].favoriteDish.ingredients).not.toBe(
		man7FullCopy.mother.parents[1].favoriteDish.ingredients
	);
	expect(man7.mother.parents[1].favoriteDish.ingredients[0].amount).toBe(1);
	expect(
		man7FullCopy.mother.parents[1].favoriteDish.ingredients[0].amount
	).toBe(33);
});
