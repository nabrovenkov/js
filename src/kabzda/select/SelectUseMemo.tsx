import { any } from 'prop-types';
import style from './SelectIt.module.css';
import { KeyboardEventHandler, useEffect, useState } from 'react';
import { StateType } from '../stories/SelectMemo.stories';



type SelectPropsType = {
	value?: string;
	onChange: (value: string) => void;
	items: StateType[];
};
export const SelectUseMemo = (props: SelectPropsType) => {
	const [active, setActive] = useState(false);
	const [hoveredElementValue, setHoveredElementValue] = useState(props.value);
	const selectedItem = props.items.find((i) => i.value === props.value);
	const hoveredItem = props.items.find((i) => i.value === hoveredElementValue);
	useEffect(() => {
		setHoveredElementValue(props.value);
	}, [props.value]);

	const toggleItem = () => {
		setActive(!active);
	};
	const onItemClick = (value: any) => {
		props.onChange(value);
		toggleItem();
	};

	const onKeyUp = (event: any) => {
		if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
			for (let i = 0; i < props.items.length; i++) {
				if (props.items[i].value === hoveredElementValue) {
					const precedentElement =
						event.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1];
					if (precedentElement) {
						props.onChange(precedentElement.value);
						return;
					}
				}
			}
			if (!selectedItem) {
				props.onChange(props.items[0].value);
			}
		}
		if (event.key === 'Escape') {
			setActive(false);
		}
		if (event.key === 'Enter') {
			setActive(!active);
		}
		// console.log(event);
	};

	return (
		<div className={style.select} tabIndex={1} onKeyUp={onKeyUp}>
			<span className={style.main} onClick={toggleItem}>
				{selectedItem && selectedItem.title}
			</span>
			{active && (
				<div className={style.items}>
					{props.items.map((i) => (
						<div
							key={i.value}
							onMouseEnter={() => {
								setHoveredElementValue(i.value);
							}}
							onClick={() => onItemClick(i.value)}
							className={`${style.item} ${
								hoveredItem === i ? style.selected : ''
							}`}
						>
							{i.title}
						</div>
					))}
				</div>
			)}
		</div>
	);
};
