import { useState } from 'react';

export type RatingValueType =  0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
	value: RatingValueType;
	setRatingValue: (value: RatingValueType) => void; //почему value а не функция
};

export function ControlledRating({value, setRatingValue}: RatingPropsType) {

	return (
		<div>
			<Star selected={value > 0} set={setRatingValue} numStar={1} />
			<Star selected={value > 1} set={setRatingValue} numStar={2} />
			<Star selected={value > 2} set={setRatingValue} numStar={3} />
			<Star selected={value > 3} set={setRatingValue} numStar={4} />
			<Star selected={value > 4} set={setRatingValue} numStar={5} />
		</div>
	);
}

type StarPropsType = {
	selected: boolean;
	numStar: RatingValueType
	set: (numStar: RatingValueType) => void
};

function Star({ selected, set, numStar }: StarPropsType) {

	return <span onClick={() => set(numStar)}>{selected ? <b>star </b> : 'star '}</span>;
}
