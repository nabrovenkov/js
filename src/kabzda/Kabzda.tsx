import { useState } from 'react';
import { UncontrolledAccordion } from './UncontrolledAccordion';
import { ControlledRating, RatingValueType } from './ControlledRating';
import { UncontrolledRating } from './UncontrolledRating';
import { ControlledAccordion } from './ControlledAccordion';
import { UncontrolledButton } from './UncontrolledButton';
import { ControlledButton } from './ControlledButton';

export function KabzdaApp() {
	const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
	const [collapsed, setCollapsed] = useState<boolean>(true);
	const [onOff, setOnOff] = useState(false);

	return (
		<div>
			<UncontrolledRating />
			<UncontrolledAccordion titleValue='Menu' />
			<UncontrolledButton setOn={setOnOff}/> {onOff.toString()}
			<ControlledRating value={ratingValue} setRatingValue={setRatingValue} />
			<ControlledAccordion
				titleValue='Menu'
				collapsed={collapsed}
				setCollapsed={setCollapsed}
			/>
			{/* <ControlledButton onOff={onOff} setOnOff={setOnOff}/> */}
		</div>
	);
}
