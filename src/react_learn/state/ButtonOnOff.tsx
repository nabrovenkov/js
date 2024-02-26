import { Fragment, useState } from 'react';
import styled from 'styled-components';

type ButtonPropsType = {
	on: boolean;
};

export function ButtonOnOff() {
	const [on, setOn] = useState(false);

	// function handleClick() {
	//   setOn(!on)
	// };

	return (
		<ButtonsWrapper>
			<On onClick={() => setOn(true)} on={on}>
				On
			</On>
			<Off onClick={() => setOn(false)} on={on}>
				Off
			</Off>
			<Lamp on={on} />
		</ButtonsWrapper>
	);
}

const ButtonsWrapper = styled.div`
	display: flex;
	justify-content: center;
`;
const On = styled.div<ButtonPropsType>`
	display: inline-block;
	border: 2px solid black;
	text-align: center;
	line-height: 50px;
	width: 100px;
	height: 50px;
	background-color: ${(props) => (props.on ? 'green' : 'white')};
`;
const Off = styled.div<ButtonPropsType>`
	display: inline-block;
	border: 2px solid black;
	line-height: 50px;
	width: 100px;
	height: 50px;
	background-color: ${(props) => (props.on ? 'white' : 'red')};
`;
const Lamp = styled.div<ButtonPropsType>`
	display: inline-block;
	border: 2px solid black;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: ${(props) => (props.on ? 'green' : 'red')};
`;
