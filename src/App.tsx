import React from 'react'
import './App.css'
import { ReactLearn } from './react_learn/ReactLearn'
import { KabzdaApp } from './kabzda/Kabzda'
import { NativeJsTs } from './native_js_ts/NativeJsTs'

function App() {
	return (
		<div className='App'>
			{/* <ReactLearn/> */}
			{/* <KabzdaApp /> */}
			<NativeJsTs/>
		</div>
	)
}

export default App
