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
	getItem: (item: { title: string; value: string }) => void;
	select: string;
};

export function Select({ items, getItem, select }: SelectPropsType) {
	const [collapsed, setCollapsed] = useState(false);
	// const [select, setSelect] = useState('Menu');

	const setCollapsedHandler = () => {
		setCollapsed(!collapsed);
	};

	const getValueHandler = (item: ItemType) => {
		// setSelect(item.title);
		getItem(item)
		setCollapsed(false);
	};

	const handleBlur = (event: any) => {
		setCollapsed(false);
	};
	return (
		<SelectWrapper tabIndex={1} onBlur={handleBlur}>
			<Arrow src={arrow} alt='arrow' collapsed={collapsed} />
			<div onClick={setCollapsedHandler}>{select}</div>
			<div>
				{collapsed &&
					items.map((item) => (
						<div key={item.value} onClick={() => getValueHandler(item)}>
							{item.title}
						</div>
					))}
			</div>
		</SelectWrapper>
	);
}

const SelectWrapper = styled.div`
	cursor: pointer;
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
		collapsed ? 'rotateZ(180deg)' : 'rotateZ(0)'};
	pointer-events: none;
`;

const EmptyLine = styled.div`
	height: 20px;
	background-color: black;
	border: 1px solid grey;
`;
