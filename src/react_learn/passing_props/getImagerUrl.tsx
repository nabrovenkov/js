import { PersonType } from './Avatar'
import { Profile2PropsType } from './Profile2'

// export function getImageUrl({ imageId }: PersonType, size = 's') {
// 	return 'https://i.imgur.com/' + imageId + size + '.jpg'
// }

export function getImageUrl({ imageId }:{imageId: string}, size = 's') {
	console.log(imageId)
	return 'https://i.imgur.com/' + imageId + size + '.jpg'
}

// export function getImageUrl(
// 	{ imageId }: Pick<Profile2PropsType, 'imageId'>,
// 	size = 's'
// ) {
// 	console.log(imageId)
// 	return 'https://i.imgur.com/' + imageId + size + '.jpg'
// }
