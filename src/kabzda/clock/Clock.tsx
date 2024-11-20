import { useEffect, useState } from 'react';
import { SimpleClock } from './SimpleClock';
import { AnalogClock } from './AnalogClock';
import { AnalogClock2 } from './AnalogClock2';

const twoDigitNumber = (num: number) => {
	return num < 10 ? `0${num}` : num;
};

export const Clock = () => {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setDate(new Date());
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	const hours = twoDigitNumber(date.getHours());
	const minutes = twoDigitNumber(date.getMinutes());
	const seconds = twoDigitNumber(date.getSeconds());

	return (
		<>
			<SimpleClock hours={hours} minutes={minutes} seconds={seconds} />
			<AnalogClock date={date} />
			<AnalogClock2 />
		</>
	);
};
