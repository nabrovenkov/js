import { useMemo, useState } from 'react';
import { SelectId } from '../select/SelectIt';
import { number, string } from 'prop-types';
import { SelectUseMemo } from '../select/SelectUseMemo';

export default {
	title: 'SelectMemo',
};

export type StateType = {
	population: number;
	country: string;
	countryId: number;
	title: string;
	value: string;
};

const state = [
	{
		population: 199234,
		country: 'Russia',
		countryId: 1,
		title: 'Moscow',
		value: '1',
	},
	{
		population: 1555554,
		country: 'Russia',
		countryId: 1,
		title: 'Tombov',
		value: '2',
	},
	{
		population: 5194,
		country: 'Russia',
		countryId: 1,
		title: 'Samara',
		value: '3',
	},
	{
		population: 799234,
		country: 'England',
		countryId: 2,
		title: 'London',
		value: '4',
	},
	{
		population: 57399234,
		country: 'England',
		countryId: 2,
		title: 'Bedford',
		value: '5',
	},
	{
		population: 19111114,
		country: 'England',
		countryId: 2,
		title: 'Prescot',
		value: '6',
	},
	{
		population: 89199234,
		country: 'USA',
		countryId: 3,
		title: 'New-York',
		value: '7',
	},
	{
		population: 234,
		country: 'USA',
		countryId: 3,
		title: 'Chicago',
		value: '8',
	},
	{
		population: 9988888234,
		country: 'USA',
		countryId: 3,
		title: 'Phoenix',
		value: '9',
	},
];
export const WithValue = () => {
  const searchByLetter = useMemo(() => {
    console.log('letter')
      return state.filter((l) => l.title.toLowerCase().indexOf('e') > -1);
    }, [state]);
  
    const searchByCity = useMemo(() => {
      console.log('city')
      return state.filter((c) => c.country === 'USA');
    }, [state]);
  
    const searchByPopulation = useMemo(() => {
      console.log('population')
      return state.filter((p) => p.population > 1000000);
    }, [state]);
	const [value, setValue] = useState('1');
	const [valueCity, setValueCity] = useState(searchByCity[0].value);
	const [valueLetter, setValueLetter] = useState(searchByLetter[0].value);
	const [valuePopulation, setValuePopulation] = useState(
		searchByPopulation[0].value
	);
  const [counter, setCounter] = useState(1)
	const count = () => {
    setCounter(counter + 1)
  }
	return (
		<div style={{ display: 'flex', gap: '10px' }}>
			<SelectUseMemo onChange={setValueCity} value={valueCity} items={state} />
			<SelectUseMemo
				onChange={setValueLetter}
				value={valueLetter}
				items={searchByLetter}
			/>
			<SelectUseMemo
				onChange={setValuePopulation}
				value={valuePopulation}
				items={searchByCity}
			/>
			<SelectUseMemo
				onChange={setValue}
				value={value}
				items={searchByPopulation}
			/>
			<button onClick={count}>+</button>
      <div>{counter}</div>
		</div>
	);
};
