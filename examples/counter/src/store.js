import { createStore } from 'vdom-engine/store'
import createLogger from 'redux-logger'
import * as setter from './setter'


let logger = createLogger({
	duration: true
})
let initialState = {
	count: 10
}
let accessor = {
	setter,
	middlewares: [logger]
}
let store = createStore(accessor, initialState)

export default store