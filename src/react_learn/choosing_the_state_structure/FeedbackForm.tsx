import { FormEventHandler, useState } from 'react';

export default function FeedbackForm() {
	const [text, setText] = useState('');
	const [isSending, setIsSending] = useState(false);
	const [isSent, setIsSent] = useState(false);

	async function handleSubmit(e: any) {
		e.preventDefault();
		setIsSending(true);
		await sendMessage(text);
		setIsSending(false);
		setIsSent(true);
	}

	if (isSent) {
		return <h1>Thanks for feedback!</h1>;
	}

	return (
		<form onSubmit={handleSubmit}>
			<p>How was your stay at The Prancing Pony?</p>
			<textarea
				disabled={isSending}
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<br />
			<button disabled={isSending} type='submit'>
				Send
			</button>
			{isSending && <p>Sending...</p>}
		</form>
	);
}

// Pretend to send a message.
function sendMessage(text: any) {
	return new Promise((resolve) => {
		setTimeout(resolve, 2000);
	});
}
