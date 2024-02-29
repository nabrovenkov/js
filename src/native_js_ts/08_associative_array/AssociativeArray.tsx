
type UsersType = {
  [key: string]: {
    id: number
    name: string
    age: number
  } 
}

export function AssociativeArray() {
	const users: UsersType = {
		'333': {id: 333,
			name: 'Alex',
			age: 23,
		},
		'6': {
			id: 6,
			name: 'Vasya',
			age: 54,
		},
		'23453': {
			id: 23453,
			name: 'Bob',
			age: 24,
		},
	};

  const newUser = {
			id: 253,
			name: 'Sveta',
			age: 24,
		};
   
    users[newUser.id] = newUser
    delete users[newUser.id]  


	console.log(users);

	return <div>Users</div>;
}
