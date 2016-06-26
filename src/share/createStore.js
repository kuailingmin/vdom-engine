import * as _ from './util'
import createLogger from './createLogger'

export default function createStore(settings) {
	let { getter, setter, name, debug, initialState } = settings
	let logger = null

	if (debug !== false) {
		logger = createLogger(name)
	}

	let currentState = initialState
	let listeners = []

	let store = {
		getState,
		replaceState,
		search,
		dispatch,
		subscribe,
	}

	if (setter) {
		store.actions = Object.keys(setter).reduce((actions, key) => {
			let count = 0
			actions[key] = data => {
				let finalKey = `${key}*${count++}`
				let prevState = currentState
				let nextState = currentState
				let logEnd = nextState => {
					logger && logger.end(finalKey, data, prevState, nextState)
				}
				logger && logger.start(finalKey)
				try {
					nextState = dispatch(key, data)
				} catch (error) {
					logEnd(error)
					return nextState
				}
				if (_.isThenable(nextState)) {
					return nextState.then(logEnd, logEnd)
				}
				logEnd(nextState)
				return nextState
			}
			return actions
		}, {})
	}

	if (getter) {
		store.selectors = Object.keys(getter).reduce((selectors, key) => {
			selectors[key] = search.bind(null, key)
			return selectors
		})
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
		let currentGetter = getter[type]
		if (!_.isFn(currentGetter)) {
			throw new Error(`Expected a function which is ${currentGetter}`)
		}
		let result = currentGetter(currentState, query)
		return result
	}
}