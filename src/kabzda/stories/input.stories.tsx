import { ChangeEvent, useRef, useState } from 'react';

export default {
	title: 'input',
};

export const UncontrolledInput = () => <input/>;

export const TrackValueOfUncontrolledInput = () => {
	const [value, setValue] = useState('');
	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const actualValue = event.currentTarget.value;
		setValue(actualValue);
	};
	return (
		<>
		<input onChange={onChange}/> - {value}
		</>
	)
};

export const GetValueOfUncontrolledInputByButtonPress = () => {
	const [value, setValue] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);

	const save = () => {
		const el = inputRef.current as HTMLInputElement;
		setValue(el.value);
	}
	return (
		<>
		<input ref={inputRef}/>
		<button onClick={save}>save</button> - actual value: {value}
		</>
	)
};

export const ControlledInput = () => {
	const [parentValue, setParentValue] = useState('')
	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setParentValue(event.currentTarget.value)
	}
	return (
		<input value={parentValue} onChange={onChange}/>
	)
}
export const ControlledCheckbox = () => {
	const [parentValue, setParentValue] = useState(false);
	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setParentValue(event.currentTarget.checked);
	}
	return (
		<input type="checkbox" checked={parentValue} onChange={onChange} />
	)
}

export const ControlledSelect = () => {
	const [parentValue, setParentValue] = useState<string | undefined>('none')
	const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setParentValue(event.currentTarget.value)
	}
	return (
		<select value={parentValue} onChange={onChange}>
			<option value="1">Moscow</option>
			<option value="2">Kiev</option>
			<option value="3">Minsk</option>
		</select>
	)
}
