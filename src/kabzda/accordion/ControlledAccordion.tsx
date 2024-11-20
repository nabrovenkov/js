import React from 'react';
import { useState } from 'react';

type ItemType = {
	title: string;
	value: any;
};

type AccordionPropsType = {
	titleValue: string;
	collapsed: boolean;
	setCollapsed: (collapsed: boolean) => void;
	items: ItemType[];
	onClick: (value: any) => void
};

export function ControlledAccordion({
	titleValue,
	collapsed,
	setCollapsed,
	items,
	onClick,
}: AccordionPropsType) {
	return (
		<div>
			<AccordingTitleMemo
				title={titleValue}
				setCollapsed={() => setCollapsed(!collapsed)}
			/>
			{!collapsed && <AccordionBodyMemo items={items} onClick={onClick} />}
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
const AccordingTitleMemo = React.memo(AccordionTitle)
type AccordingBodyPropsType = {
	items: ItemType[];
	onClick: (value: any) => void
};
const AccordionBodyMemo = React.memo(AccordionBody)
function AccordionBody({ items, onClick }: AccordingBodyPropsType) {
	return (
		<ul>
			{items.map((item) => {
				return <li key={item.value} onClick={()=> {onClick(item.value)}}>{item.title}</li>;
			})}
		</ul>
	);
}
