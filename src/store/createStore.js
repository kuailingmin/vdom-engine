import * as _ from '../share/util'
import composeMiddlewares from './composeMiddlewares'

export default function createStore(accessor, initialState) {
	let { getter, setter, middlewares } = accessor

	if (_.isArr(middlewares)) {
		return composeMiddlewares(...middlewares)(createStore)({ getter, setter }, initialState)
	}

	let currentState = initialState
	let listeners = []

	let store = {
		setter,
		getter,
		getState,
		replaceState,
		search,
		dispatch,
		subscribe,
	}

	if (setter) {
		store.actions = _.createCollection(setter, dispatch)
	}

	if (getter) {
		store.selectors = _.createCollection(getter, search)
	}

	return store

	function subscribe(listener) {
		let index = listeners.indexOf(listener)
		if (index === -1) {
			listeners.push(listener)
		}
		return function() {
			let index = listeners.indexOf(listener)
			if (index !== -1) {
				listeners.splice(i, 1)
			}
		}
	}

	function getState() {
		return currentState
	}

	function replaceState(nextState, silent) {
		currentState = nextState
		if (!silent) {
			listeners.forEach(_.invoke)
		}
		return currentState
	}

	function dispatch(type, data) {
		let currentSetter = setter[type]
		if (!_.isFn(currentSetter)) {
			throw new Error(`Expected a function which is ${currentSetter}`)
		}
		let nextState = currentSetter(currentState, data)
		if (_.isThenable(nextState)) {
			return nextState.then(replaceState)
		}
		if (currentState !== nextState) {
			replaceState(nextState)
		}
		return currentState
	}

	function search(type, query) {
		let currentGetter = getter(type)
		if (!_.isFn(currentGetter)) {
			throw new Error(`Expected a function which is ${currentGetter}`)
		}
		let result = currentGetter(currentState, query)
		return result
	}
}