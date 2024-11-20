import React from 'react';
import { useMemo, useState } from 'react';

export default {
	title: 'useMemo',
};

export const DifficultCountingExample = () => {
	//useMemo помогает сложным вычислениям, сохраняя последнее значение и не давая каждый раз его пересчитывать если в нем ничего не поменялось
	const [a, setA] = useState<number>(3);
	const [b, setB] = useState<number>(3);

	let resultA = 1;
	let resultB = 1;

	resultA = useMemo(() => {
		let tempResult = 1;
		for (let i = 1; i <= a; i++) {
			let fake = 0;
			while (fake < 10000000) {
				fake++;
				const fakeValue = Math.random();
			}
			tempResult = tempResult * a;
		}
		return tempResult;
	}, [a]);

	for (let i = 1; i <= b; i++) {
		resultB *= i;
	}

	return (
		<>
			<input value={a} onChange={(e) => setA(+e.currentTarget.value)} />
			<input value={b} onChange={(e) => setB(Number(e.currentTarget.value))} />
			<hr />
			<div>Result for a: {resultA}</div>
			<div>Result for b: {resultB}</div>
		</>
	);
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

export const HelpsToReactMemo = () => {
	//newArray создает новый массив из за этого React.memo не срабатывает. В этом случае можно использовать useMemo как в данном случае. Фильтр не меняется, соответственно и перерисовка не будет происходить.
	console.log('HelpsToReactMemo');
	const [counter, setCounter] = useState(0);
	const [users, setUsers] = useState(['Alex', 'Maria', 'Prohor']);
	const increaseCounter = () => {
		setCounter(counter + 1);
	};
	const newArray = useMemo(() => {
		const newArray = users.filter((u) => u.toLowerCase().indexOf('a') > -1);
		return newArray;
	}, [users]);
	const addUser = () => {
		const newUsers = [...users, 'Sveta' + new Date().getTime()];
		setUsers(newUsers)
	}
	return (
		<>
			<button onClick={increaseCounter}>+</button>
			<button onClick={addUser}>add user</button>
			{counter}
			<Users users={newArray} />
		</>
	);
};
