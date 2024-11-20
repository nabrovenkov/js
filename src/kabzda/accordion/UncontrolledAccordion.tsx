import { useReducer, useState } from 'react';

type AccordionPropsType = {
	titleValue: string;
};
type ActionType = {
	type: string;
};
const reducer = (state: boolean, action: ActionType) => {
	if (action.type === 'TOGGLE-COLLAPSED') {
		return !state;
	}
	return state;
};
export function UncontrolledAccordion({ titleValue }: AccordionPropsType) {
	// const [collapsed, setCollapsed] = useState(true);
	let [collapsed, dispatch] = useReducer(reducer, false);

	return (
		<div>
			{/* <AccordionTitle title={titleValue} set={() => setCollapsed(!collapsed)} /> */}
			<AccordionTitle
				title={titleValue}
				onClick={() => {
					dispatch({ type: 'TOGGLE-COLLAPSED' });
				}}
			/>
			{!collapsed && <AccordionBody />}
		</div>
	);
}

type AccordionTitlePropsType = {
	title: string;
	set: () => void;
};

function AccordionTitle({ title, set }: AccordionTitlePropsType) {
	return <h3 onClick={() => set()}>{title}</h3>; // Узнать про onClick={set}
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
