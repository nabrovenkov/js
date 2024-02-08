import { ChangeEvent, useState } from 'react'

type FullInputType = {
	addMessage: (title: string) => void
}

export function FullInput(props: FullInputType) {
	


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
