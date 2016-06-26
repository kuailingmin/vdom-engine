import { createElement, createFactory, isValidElement } from './createElement'
import { addDirective, removeDirective } from './directive'
import createMatcher from './createMatcher'
import createStore from './createStore'

const Share = {
	h: createElement,
	createElement,
	createFactory,
	isValidElement,
	addDirective,
	removeDirective,
	createMatcher,
	createStore,
}

export default Share
