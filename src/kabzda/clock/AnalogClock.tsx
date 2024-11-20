import { styled } from 'styled-components';

export const AnalogClock = ({ date }: any) => {
	return (
		<>
			<Clock>
				<Hours date={date} />
				<Minutes date={date} />
				<Seconds date={date} />
			</Clock>
		</>
	);
};

const Clock = styled.div`
	width: 100px;
	height: 100px;

	margin-bottom: 0.5rem;
	position: relative;

	background-color: white;
	border-radius: 50%;
	border: 1px solid black;
`;

const Hours = styled.div<{ date: Date }>`
	background-color: black;
	border-radius: 2.5px;
	height: 30px;
	width: 5px;
	position: absolute;
	top: 25px;
	left: calc(50% - 2.5px);

	transform-origin: center calc(100% - 5px);
	transform: rotateZ(
		${({ date }) => ((date.getHours() % 12) * 60 + date.getMinutes()) * 0.5}deg
	);
`;

const Minutes = styled(Hours)<{ date: Date }>`
	height: 45px;
	top: 10px;
	transform: rotateZ(
		${({ date }) => (date.getMinutes() * 60 + date.getSeconds()) * 0.1}deg
	);
`;
const Seconds = styled(Hours)<{ date: Date }>`
	height: 50px;
	top: 5px;
	width: 1px;
	background-color: red;
	left: calc(50% - 0.5px);
	transform: rotateZ(${({ date }) => date.getSeconds() * 6}deg);
`;
