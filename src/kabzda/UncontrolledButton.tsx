import { Fragment, useState } from 'react';
import CSS from 'csstype';

const button: CSS.Properties = {
	width: '100px',
	height: '50px',
	border: '1px solid black',
};
const lamp: CSS.Properties = {
	width: '50px',
	height: '50px',
	borderRadius: '50%',
	border: '1px solid black',
};
const wrapper: CSS.Properties = {
	display: 'flex',
	justifyContent: 'center',
	gap: '5px',
};
export function UncontrolledButton() {
	const [onOff, setOnOff] = useState<boolean>(false);
	console.log(onOff);
	// function onClickHandler (button : CSS.Properties) {
	//   onOff
	// 		? (button = { backgroundColor: 'green' })
	// 		: (button = { backgroundColor: 'green' });
	// }

	return (
		<Fragment>
			<div style={wrapper}>
				<OnButton changeOnOff={() => setOnOff(!onOff)} />
				<OffButton />
				<Lamp />
			</div>
		</Fragment>
	);
}

type ButtonType = {
	changeOnOff: () => void;
};

function OnButton({ changeOnOff }: ButtonType) {
	return (
		<div style={button} onClick={() => console.log('test')}>
			On
		</div>
	);
}

function OffButton() {
	return <div style={button}>Off</div>;
}

function Lamp() {
	return <div style={lamp}></div>;
}
