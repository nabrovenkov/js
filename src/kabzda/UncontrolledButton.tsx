import { Fragment, useState } from 'react';
import CSS from 'csstype';
type UncontrolledButtonType = {
	onChange: (onOff: boolean) => void
}
export function UncontrolledButton({onChange}: UncontrolledButtonType) {
	const wrapperStyle: CSS.Properties = {
		display: 'flex',
		justifyContent: 'center',
		gap: '5px',
	};

	const [onOff, setOnOff] = useState(false);

	return (
		<Fragment>
			<div style={wrapperStyle}>
				<OnButton changeOnOff={setOnOff} onOff={onOff} onChange={onChange} />
				<OffButton changeOnOff={setOnOff} onOff={onOff} onChange={onChange} />
				<Lamp onOff={onOff} />
			</div>
		</Fragment>
	);
}

type ButtonType = {
	changeOnOff: (onOff: boolean) => void;
	onChange: (onOff: boolean) => void
	onOff: boolean;
};

function OnButton({ changeOnOff, onOff, onChange }: ButtonType) {
	const onButtonStyle: CSS.Properties = {
		width: '100px',
		height: '50px',
		border: '1px solid black',
		backgroundColor: onOff ? 'green' : 'white',
	};

	const onClicked = () => {
		changeOnOff(true);
		onChange(true);
	};
	
	return (
		<div style={onButtonStyle} onClick={onClicked}>
			On
		</div>
	);
}

function OffButton({ changeOnOff, onOff, onChange }: ButtonType) {
	const offButtonStyle: CSS.Properties = {
		width: '100px',
		height: '50px',
		border: '1px solid black',
		backgroundColor: onOff ? 'white' : 'red',
	};

	const onClicked = () => {
		changeOnOff(false);
		onChange(false);
	}
	
	return (
		<div style={offButtonStyle} onClick={onClicked}>
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
