import { useState } from 'react'
import { FullInput } from './FullInput'
import { JustInput } from './JustInput'

export function Input() {
	let [message, setMessage] = useState([
		{ message: 'message1' },
		{ message: 'message2' },
		{ message: 'message3' },
	])

	function addMessage(title: string) {
		let newMessage = { message: title }
		setMessage([newMessage, ...message])
	}

	return (
		<div className={'Input'}>
			<JustInput></JustInput>
			<JustButton></JustButton>
			<FullInput addMessage={addMessage}></FullInput>
			{message.map((el, index) => {
				return <div key={index}>{el.message}</div>
			})}
		</div>
	)
}
