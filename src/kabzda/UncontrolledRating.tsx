import { useState } from 'react';

type RatingPropsType = {};

export function UncontrolledRating() {
	console.log('Rating rendering');

	let [value, setValue] = useState(0);

		return (
		<div>
			<Star selected={value > 0} setValue={() => setValue(1)} />
			<Star selected={value > 1} setValue={() => setValue(2)} />
			<Star selected={value > 2} setValue={() => setValue(3)} />
			<Star selected={value > 3} setValue={() => setValue(4)} />
			<Star selected={value > 4} setValue={() => setValue(5)} />
		</div>
	);
}

type StarPropsType = {
	selected: boolean;
	setValue: () => void;
};

function Star({ selected, setValue }: StarPropsType) {
	console.log('Star rendering');

	return (
		<span onClick={() => setValue}>
			{selected ? <b>star </b> : 'star '}
		</span>
	);

// 	return (
// 		<div>
// 			<Star selected={value > 0} setValue={setValue} value={1} />
// 			<Star selected={value > 1} setValue={setValue} value={2} />
// 			<Star selected={value > 2} setValue={setValue} value={3} />
// 			<Star selected={value > 3} setValue={setValue} value={4} />
// 			<Star selected={value > 4} setValue={setValue} value={5} />
// 		</div>
// 	);
// }

// type StarPropsType = {
// 	selected: boolean;
// 	value: 1 | 2 | 3 | 4 | 5;
// 	setValue: (number: 1 | 2 | 3 | 4 | 5) => void;
// };

// function Star({ selected, setValue, value }: StarPropsType) {
// 	console.log('Star rendering');

// 	return (
// 		<span onClick={() => setValue(value)}>
// 			{selected ? <b>star </b> : 'star '}
// 		</span>
// 	);
}
