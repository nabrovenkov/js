import { getImageUrl } from "./getImagerUrl"

export type PersonType = {
  name: string
  imageId: string
}

export type AvatarPropsType = {
  person: PersonType
  size?: number 
}
// default value?
function Avatar ({person, size = 300}: AvatarPropsType) {

	return (
		<img
			className='avatar'
			src={getImageUrl(person)}
			alt={person.name}
			width={size}
			height={size}
		/>
	)
}

function Profile() {
	return (
		<div>
			<Avatar
				size={undefined}
				person={{
					name: 'Katsuko Saruhashi',
					imageId: 'YfeOqp2',
				}}
			/>
			<Avatar
				size={80}
				person={{
					name: 'Aklilu Lemma',
					imageId: 'OKS67lh',
				}}
			/>
			<Avatar
				size={50}
				person={{
					name: 'Lin Lanying',
					imageId: '1bX5QH6',
				}}
			/>
		</div>
	)
}

export function ReactLearn() {
  return <Profile />
};