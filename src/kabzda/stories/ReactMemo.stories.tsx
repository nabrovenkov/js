import React from 'react';
import { useState } from 'react';

export default {
	title: 'React.memo demo',
};

const NewMessagesCounter = (props: { count: number }) => {
	return <div>{props.count}</div>;
};

const UsersSecret = (props: { users: Array<string> }) => {
	console.log('Users');
	return (
		<div>
			{props.users.map((u, i) => (
				<div key={i}>{u}</div>
			))}
		</div>
	);
};

const Users = React.memo(UsersSecret); //React.memo не дает обновляться UserSecret пока в него не придут новые пропсы. Тем самым не делает лишнюю перерисовку нагружая сервер

export const Example1 = () => {
	console.log('Example1');
	const [counter, setCounter] = useState(0);
	const [users, setUsers] = useState(['Alex', 'Maria', 'Prohor']);
	const increaseCounter = () => {
		setCounter(counter + 1);
	};
	const addUser = () => {
    const newUsers = [...users, 'Sveta' + new Date().getTime()];
		setUsers(newUsers);
	};
	return (
		<>
			<button onClick={increaseCounter}>+</button>
			<button onClick={addUser}>add user</button>
			<NewMessagesCounter count={counter} />
			<Users users={users} />
		</>
	);
};
