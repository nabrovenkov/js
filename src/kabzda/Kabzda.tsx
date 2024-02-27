import { useState } from 'react';
import { UncontrolledAccordion } from './UncontrolledAccordion';
import { ControlledRating, RatingValueType } from './ControlledRating';
import { UncontrolledRating } from './UncontrolledRating';
import { ControlledAccordion } from './ControlledAccordion';
import { UncontrolledButton } from './UncontrolledButton';

export function KabzdaApp() {
	const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
	const [collapsed, setCollapsed] = useState<boolean>(true);

	return (
		<div>
			<UncontrolledRating />
			<UncontrolledAccordion titleValue='Menu' />
			<UncontrolledButton/>
			<ControlledRating value={ratingValue} setRatingValue={setRatingValue} />
			<ControlledAccordion
				titleValue='Menu'
				collapsed={collapsed}
				setCollapsed={setCollapsed}
			/>
		</div>
	);
}
