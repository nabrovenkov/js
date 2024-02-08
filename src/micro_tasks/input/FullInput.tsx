import { ChangeEvent, useState } from 'react'

type FullInputType = {
	addMessage: (title: string) => void
}

export function FullInput(props: FullInputType) {
	let [title, setTitle] = useState('')

	const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setTitle(event.currentTarget.value)
	}

	const onClickButtonHandler = () => {
		props.addMessage(title)
		setTitle('')
	}

	return (
		<div>
			<input type='text' value={title} onChange={onChangeInputHandler} />
			<button onClick={onClickButtonHandler}>+</button>
		</div>
	)
}
