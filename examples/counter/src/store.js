import { createStore } from 'vdom-engine/store'
import * as setter from './setter'

let initialState = {
	count: 10
}
let settings = {
	name: 'counter',
	setter,
}
let store = createStore(settings, initialState)

export default store