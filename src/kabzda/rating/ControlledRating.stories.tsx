import {action} from '@storybook/addon-actions';
import {ControlledRating, RatingValueType} from './ControlledRating' 
import { useState } from 'react';

export default {
	// title: 'Rating stories',
	component: ControlledRating,
}


export const EmptyControlledRating = () => <ControlledRating value={0} setRatingValue={x => x} />
export const ControlledRating1 = () => <ControlledRating value={1} setRatingValue={x => x} />
export const ControlledRating2 = () => <ControlledRating value={2} setRatingValue={x => x} />
export const ControlledRating3 = () => <ControlledRating value={3} setRatingValue={x => x} />
export const ControlledRating4 = () => <ControlledRating value={4} setRatingValue={x => x} />
export const ControlledRating5 = () => <ControlledRating value={5} setRatingValue={x => x} />
export const RatingChanging = () => {
	const [rating, setRating] = useState<RatingValueType>(3);
	return <ControlledRating value={rating} setRatingValue={setRating}/>
};