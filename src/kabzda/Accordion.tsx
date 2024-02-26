import { useState } from 'react';

type AccordionPropsType = {
	titleValue: string;
};

export function UncontrolledAccordion({ titleValue }: AccordionPropsType) {
	const [collapsed, setCollapsed] = useState(true);

	return (
		<div>
			<AccordionTitle title={titleValue} />
			<button onClick={() => setCollapsed(!collapsed)}>toggle</button>
			{!collapsed && <AccordionBody />}
		</div>
	);
}

type AccordionTitlePropsType = {
	title: string;
};

function AccordionTitle({ title }: AccordionTitlePropsType) {
	return <h3>{title}</h3>;
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
