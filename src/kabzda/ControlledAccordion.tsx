import { useState } from 'react';

type AccordionPropsType = {
	titleValue: string;
	collapsed: boolean
	setCollapsed: (collapsed: boolean) => void 
};

export function ControlledAccordion({ titleValue, collapsed, setCollapsed }: AccordionPropsType) {

	return (
		<div>
			<AccordionTitle
				title={titleValue}
				setCollapsed={() => setCollapsed(!collapsed)}
			/>
			{!collapsed && <AccordionBody />}
		</div>
	);
}

type AccordionTitlePropsType = {
	title: string;
	setCollapsed: () => void;
};

function AccordionTitle({ title, setCollapsed }: AccordionTitlePropsType) {
	return <h3 onClick={setCollapsed}>{title}</h3>;
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
