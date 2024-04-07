import { StateType, TOGGLE_CONSTANT, reducer } from "./reducer"

test('state should be true', () => {
	const state: StateType = {
		collapsed: false
	} 
	const newState = reducer(state, {type: TOGGLE_CONSTANT})

	expect(state.collapsed).toBe(true)
})

test('state should be false', () => {
	const state: StateType = {
		collapsed: true,
	};
	const newState = reducer(state, { type: TOGGLE_CONSTANT });

	expect(state.collapsed).toBe(false);
});

test('state should be error', () => {
	const state: StateType = {
		collapsed: false,
	};

	expect(() => {
		reducer(state, {type: 'ERROR'})
	}).toThrowError();
});