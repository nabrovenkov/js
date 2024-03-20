import { Fragment, useState } from 'react';
import CSS from 'csstype';

type ControlledButtonType = {
	onOff: boolean
	setOnOff: (onOff: boolean) => void
}

export function ControlledButton({onOff, setOnOff}: ControlledButtonType) {
	const wrapperStyle: CSS.Properties = {
		display: 'flex',
		justifyContent: 'center',
		gap: '5px',
	};

	return (
		<Fragment>
			<div style={wrapperStyle}>
				<OnButton changeOnOff={setOnOff} onOff={onOff} />
				<OffButton changeOnOff={setOnOff} onOff={onOff} />
				<Lamp onOff={onOff} />
			</div>
		</Fragment>
	);
}

type ButtonType = {
	changeOnOff: (onOff: boolean) => void;
	onOff: boolean;
};

function OnButton({ changeOnOff, onOff }: ButtonType) {
	const onButtonStyle: CSS.Properties = {
		width: '100px',
		height: '50px',
		border: '1px solid black',
		backgroundColor: onOff ? 'green' : 'white',
	};

	return (
		<div style={onButtonStyle} onClick={() => changeOnOff(true)}>
			On
		</div>
	);
}

function OffButton({ changeOnOff, onOff }: ButtonType) {
	const offButtonStyle: CSS.Properties = {
		width: '100px',
		height: '50px',
		border: '1px solid black',
		backgroundColor: onOff ? 'white' : 'red',
	};

	return (
		<div style={offButtonStyle} onClick={() => changeOnOff(false)}>
			Off
		</div>
	);
}

type LampType = {
	onOff: boolean;
};

function Lamp({ onOff }: LampType) {
	const lampStyle: CSS.Properties = {
		width: '50px',
		height: '50px',
		borderRadius: '50%',
		border: '1px solid black',
		backgroundColor: onOff ? 'green' : 'red',
	};

	return <div style={lampStyle}></div>;
}
