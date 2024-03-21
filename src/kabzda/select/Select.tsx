import { useState } from 'react';

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
	const [select, setSelect] = useState('Menu')

	const setCollapsedHandler = () => {
		setCollapsed(!collapsed);
	};

	const getValueHandler = (item: ItemType) => {
		console.log(item);
		setSelect(item.title)
		setCollapsed(false)
	};

	const handleBlur = (event: any) => {
		setCollapsed(false);
	}
	return (
		<div tabIndex={1} onBlur={handleBlur}>
			<div onClick={setCollapsedHandler}>{select}</div>
			{collapsed &&
				items.map((item) => {
					return (
						<div key={item.value} onClick={() => getValueHandler(item)}>
							{item.title}
						</div>
					);
				})}
		</div>
	);
}
