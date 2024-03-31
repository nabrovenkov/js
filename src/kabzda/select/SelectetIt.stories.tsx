import { useState } from 'react';
import { SelectId } from './SelectIt';
import {action} from '@storybook/addon-actions'

export default {
	title: 'SelectIt',
	component: SelectId,
};

export const WithValue = () => {
  const [value, setValue] = useState('1')

  return (
		<SelectId
			onChange={setValue}
			value={value}
			items={[
				{ value: '1', title: 'Minsk' },
				{ value: '2', title: 'Moscow' },
				{ value: '3', title: 'Kiev' },
			]}
		/>
	);
};


export const WithoutValue = () => (
	<SelectId
		onChange={action('Value changes')}
		items={[
			{ value: '1', title: 'Minsk' },
			{ value: '2', title: 'Moscow' },
			{ value: '3', title: 'Kiev' },
		]}
	/>
);



