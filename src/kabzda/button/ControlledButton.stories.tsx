import { action } from '@storybook/addon-actions';
import { ControlledButton } from './ControlledButton';
import { useState } from 'react';

export default {
	component: ControlledButton,
};

const callBack = action('setOnOff');

export const ModeOn = () => {
	return <ControlledButton onOff={true} setOnOff={callBack} />;
};

export const ModeOff = () => {
	return <ControlledButton onOff={false} setOnOff={callBack} />;
};

export const ModeChanging = () => {
	const [value, setValue] = useState<boolean>(false);
  console.log(value)
	return <ControlledButton onOff={value} setOnOff={setValue} />;
};
