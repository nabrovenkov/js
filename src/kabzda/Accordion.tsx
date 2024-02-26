import { useState } from 'react';

type AccordionPropsType = {
	titleValue: string;
};

export function UncontrolledAccordion({ titleValue }: AccordionPropsType) {
	const [collapsed, setCollapsed] = useState(true);

	return (
		<div>
			<AccordionTitle
				title={titleValue}
				onClick={() => setCollapsed(!collapsed)}
			/>
			{!collapsed && <AccordionBody />}
		</div>
	);
}

type AccordionTitlePropsType = {
	title: string;
	onClick: () => void;
};

function AccordionTitle({ title, onClick }: AccordionTitlePropsType) {
	return <h3 onClick={() => onClick()}>{title}</h3>;
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
