import { useReducer, useState } from 'react';
import { reducer } from './reducer';

type AccordionPropsType = {
	titleValue: string;
	onClick: () => void;
};
export function UncontrolledAccordion({
	titleValue,
	onClick,
}: AccordionPropsType) {
	// const [collapsed, setCollapsed] = useState(true);
	let [state, dispatch] = useReducer(reducer, {collapsed: false});

	return (
		<div>
			{/* <AccordionTitle title={titleValue} set={() => setCollapsed(!collapsed)} /> */}
			<AccordionTitle
				title={titleValue}
				onClick={() => {
					dispatch({ type: 'TOGGLE-COLLAPSED' });
				}}
			/>
			{!state.collapsed && <AccordionBody />}
		</div>
	);
}

type AccordionTitlePropsType = {
	title: string;
	onClick: () => void;
};

function AccordionTitle({ title, onClick }: AccordionTitlePropsType) {
	return <h3 onClick={() => onClick()}>{title}</h3>; // Узнать про onClick={set}
}

function AccordionBody() {
	return (
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</ul>
	);
}
