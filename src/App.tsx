import React from 'react'
import './App.css'
import { MapTest } from './micro_tasks/map/MapLesson'
import { Button } from './micro_tasks/button/Button'
import { test2 } from './micro_tasks/button/ButtonTest'
import { UseStateTest } from './micro_tasks/useState/UseStateTest'
import { FilterTest } from './micro_tasks/filter/FilterTest'
import { Input } from './micro_tasks/input/Input.1'

function App() {
	return (
		<div className='App'>
			{/* <MapTest />
			<Button name='Alex' callBack={()=>test2('nabrovenkov')}/>
			<UseStateTest /> */}
			{/* <FilterTest /> */}
			<Input />
		</div>
	)
}

export default App
