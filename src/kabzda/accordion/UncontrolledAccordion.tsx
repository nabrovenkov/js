import { useState } from 'react';

type AccordionPropsType = {
	titleValue: string;
};

export function UncontrolledAccordion({ titleValue }: AccordionPropsType) {
	const [collapsed, setCollapsed] = useState(true);

	return (
		<div>
			<AccordionTitle title={titleValue} set={() => setCollapsed(!collapsed)} />
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
