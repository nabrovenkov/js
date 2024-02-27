import { useState } from "react";
import { UncontrolledAccordion } from "./UncontrolledAccordion";
import { ControlledRating, RatingValueType } from "./ControlledRating";
import { UncontrolledRating } from "./UncontrolledRating";

export function KabzdaApp () {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);

  return (
		<div>
			<UncontrolledRating />
			<ControlledRating value={ratingValue} setRatingValue={setRatingValue} />
			<UncontrolledAccordion titleValue='Menu' />
		</div>
	);
}
