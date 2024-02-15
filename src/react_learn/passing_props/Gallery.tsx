import { Profile2 } from './Profile2'

export default function Gallery() {
	return (
		<div>
			<h1>Notable Scientists</h1>
			<Profile2
				name='Maria Skłodowska-Curie'
				profession='physicist and chemist'
				awards='Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal'
				discovered='polonium (chemical element)'
				imageId='szV5sdG'
			/>
			<Profile2
				name='Katsuko Saruhashi'
				profession='geochemist'
				awards='Miyake Prize for geochemistry, Tanaka Prize'
				discovered='a method for measuring carbon dioxide in seawater'
				imageId='YfeOqp2'
			/>
		</div>
	)
}
