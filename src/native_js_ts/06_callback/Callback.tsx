import { MouseEventHandler, MouseEvent, ChangeEvent } from 'react'

export const User = () => {
	const search = (event: MouseEvent<HTMLButtonElement>) => {
		alert(event.currentTarget.value)
		// alert('user have been deleted')
	}

	const onNameChanged = () => {
		alert('name changed')
	}

	const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
		console.log('age changed: ' + event.currentTarget.value);
	}

	const focusLostHandler = () => {
		console.log('focus lost')
	}

	return (
		<div>
			Dimych
			<textarea onChange={onNameChanged} onBlur={focusLostHandler}></textarea>
			<input onChange={onAgeChanged} type='number'/>
			<button name='search' onClick={search}>
				search
			</button>
			{/* <button name='save' onClick={deleteUser}>
				x
			</button> */}
		</div>
	)
}
