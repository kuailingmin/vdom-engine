import { createStore } from 'vdom-engine/share'
import * as setter from './setter'

let initialState = {
	count: 10
}
let settings = {
	name: 'counter',
	setter,
	initialState,
}
let store = createStore(settings)

export default store