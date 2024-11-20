export type PropsType = {
	hours: string | number;
	minutes: string | number;
	seconds: string | number;
};

export const SimpleClock = ({ hours, minutes, seconds }: PropsType) => {
	return (
		<>
			<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
		</>
	);
};
