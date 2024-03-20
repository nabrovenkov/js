import type { Meta, StoryObj } from '@storybook/react';
import {action} from '@storybook/addon-actions';
import { ControlledAccordion } from './ControlledAccordion';
import { useState } from 'react';

// const meta: Meta<typeof ControlledAccordion> = {
// 	component: ControlledAccordion,
// };

// export default meta;
// type Story = StoryObj<typeof ControlledAccordion>;

// export const FirstStory: Story = {
// 	args: {
// 		titleValue: 'hello',
// 		collapsed: true,
// 		setCollapsed: () => {},
// 	},
// };

export default {
	component: ControlledAccordion
}

const onChangeCallback = action('onChange')
const onClickCallback = action('Some item was clicked')

export const CollapsedAccordion = () => {
	return (
		<ControlledAccordion
			titleValue='Menu'
			collapsed={true}
			setCollapsed={onChangeCallback}
			items={[]}
			onClick={onClickCallback}
		/>
	);
}

export const OpenedAccordion = () => {
	return (
		<ControlledAccordion
			titleValue='Menu'
			collapsed={false}
			setCollapsed={() => {}}
			items={[
				{ title: 'Oleg', value: 1 },
				{ title: 'Alex', value: 2 },
				{ title: 'Vlad', value: 3 },
				{ title: 'Sveta', value: 4 },
			]}
			onClick={onClickCallback}
		/>
	);
};

export const Accordion = () => {
	const [collapsed, setCollapsed] = useState(false)
	return (
		<ControlledAccordion
			titleValue='Menu'
			collapsed={collapsed}
			setCollapsed={() => {
				setCollapsed(!collapsed);
			}}
			items={[
				{ title: 'Oleg', value: 1 },
				{ title: 'Alex', value: 2 },
				{ title: 'Vlad', value: 3 },
				{ title: 'Sveta', value: 4 },
			]}
			onClick={onClickCallback}
		/>
	);
}
