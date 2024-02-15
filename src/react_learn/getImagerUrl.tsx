import { AvatarPropsType, PersonType } from "./ReactLearn"


export function getImageUrl(props: PersonType, size='s'): string {
	return (
      'https://i.imgur.com/' + props.imageId + size + '.jpg'
    )
}
