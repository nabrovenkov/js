import { MouseEventHandler, useState } from 'react';

type ItemType = {
	title: string;
	value: any;
};

type SelectPropsType = {
	// value: any;
	// onChange: (value: any) => void;
	items: ItemType[];
};

export function Select({ items }: SelectPropsType) {
	const [collapsed, setCollapsed] = useState(false);
	const setCollapsedHandler = () => {
		setCollapsed(!collapsed);
	};
	return (
		<div>
			<div onClick={setCollapsedHandler}>Menu</div>
			{collapsed &&
				items.map((item) => {
					return <div>{item.title}</div>;
				})}
		</div>
	);
}
