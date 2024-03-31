import { useState } from 'react';
import { UncontrolledAccordion } from './accordion/UncontrolledAccordion';
import { ControlledRating, RatingValueType } from './rating/ControlledRating';
import { UncontrolledRating } from './rating/UncontrolledRating';
import { ControlledAccordion } from './accordion/ControlledAccordion';
import { UncontrolledButton } from './button/UncontrolledButton';
import { ControlledButton } from './button/ControlledButton';
import { Select } from './select/Select';

export function KabzdaApp() {
	const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
	const [collapsed, setCollapsed] = useState<boolean>(true);
	const [onOff, setOnOff] = useState(false);

	return (
		<div>
			<UncontrolledRating />
			<UncontrolledAccordion titleValue='Menu' />
			<UncontrolledButton onChange={setOnOff} /> {onOff.toString()}
			<ControlledRating value={ratingValue} setRatingValue={setRatingValue} />
			{/* <ControlledAccordion
				titleValue='Menu'
				collapsed={collapsed}
				setCollapsed={() => {
					setCollapsed(!collapsed);
				}}
				items={[
					{ title: 'Oleg', value: 1 },
					{ title: 'Alex', value: 2 },
					{ title: 'Vlad', value: 3 },
					{ title: 'Sveta', value: 4 },
				]}
				onClick={}
			/> */}
			<ControlledButton onOff={onOff} setOnOff={setOnOff} />
			<Select/>
		</div>
	);
}
