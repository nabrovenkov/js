import { Fragment } from 'react'
import Gallery from './passing_props/Gallery'
import { Profile } from './passing_props/Profile'
import List from './rendering_list/List'
import Poem from './rendering_list/Poem'
import { Toolbar } from './responding_to_events/Button'
import { GalleryState } from './state/GalleryState'
import { FormInputStuck } from './state/FormInputStuck'

import { ButtonOnOff } from './state/ButtonOnOff'
import { TrafficLight } from './state_as_a_snapshot/TrafficLight'
import FeedbackForm from './choosing_the_state_structure/FeedbackForm'

export function ReactLearn() {
	return (
		<Fragment>
			{/* <Profile /> */}
			{/* <Gallery /> */}
			{/* <List/> */}
			{/* <Poem/> */}
			{/* <Toolbar/> */}
			{/* <GalleryState/> */}
			{/* <FormInputStuck/> */}
			{/* <FeedbackForm /> */}
			{/* <ButtonOnOff/> */}
			{/* <TrafficLight/> */}
			<FeedbackForm/>
		</Fragment>
	)
}
