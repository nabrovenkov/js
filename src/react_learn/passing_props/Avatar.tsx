import { getImageUrl } from "./getImagerUrl"


export type PersonType = {
	name: string
	imageId: string
}

export type AvatarPropsType = {
	person: PersonType
	size?: number | string
}

export function Avatar({ person, size = 300 }: AvatarPropsType) {
	return (
		<img
			className='avatar'
			// src={getImageUrl(person)}
			alt={person.name}
			width={size}
			height={size}
		/>
	)
}
