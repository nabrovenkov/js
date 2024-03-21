import { useState } from 'react';
import { styled } from 'styled-components';
import arrow from './arrow.svg';

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
	const [select, setSelect] = useState('Menu');

	const setCollapsedHandler = () => {
		setCollapsed(!collapsed);
	};

	const getValueHandler = (item: ItemType) => {
		console.log(item);
		setSelect(item.title);
		setCollapsed(false);
	};

	const handleBlur = (event: any) => {
		setCollapsed(false);
	};
	return (
		<SelectWrapper tabIndex={1} onBlur={handleBlur}>
			<Arrow src={arrow} alt='arrow' collapsed />
			<div onClick={setCollapsedHandler}>{select}</div>
			{collapsed &&
				items.map((item) => {
					return (
						<div key={item.value} onClick={() => getValueHandler(item)}>
							{item.title}
						</div>
					);
				})}
		</SelectWrapper>
	);
}

const SelectWrapper = styled.div`
	position: relative;
	border: 1px solid grey;
	width: 100px;
	font-size: 20px;
	padding-left: 10px;
`;
interface CollapsedProps {
	collapsed: boolean;
}
const Arrow = styled.img<CollapsedProps>`
	width: 20px;
	position: absolute;
	right: 10px;
	top: 2px;
	transform: ${({ collapsed }) =>
		!collapsed ? 'rotateZ(180deg)' : 'rotateZ(0)'};
`;
