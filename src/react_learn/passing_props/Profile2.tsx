import { getImageUrl } from "./getImagerUrl";

export type Profile2PropsType = {
  name: string
  profession: string
  awards: string
  discovered: string
  imageId: string
}

export function Profile2 ({name, profession, awards, discovered, imageId}: Profile2PropsType) {
  return (
		<section className='profile'>
			<h2>{name}</h2>
			<img
				className='avatar'
				src={getImageUrl({imageId})}
				alt='Maria Skłodowska-Curie'
				width={70}
				height={70}
			/>
			<ul>
				<li>
					<b>Profession: </b>
					{profession}
				</li>
				<li>
					<b>Awards: {awards.split(', ').length} </b>
          ({awards})
				</li>
				<li>
					<b>Discovered: </b>
					{discovered}
				</li>
			</ul>
		</section>
	)
}