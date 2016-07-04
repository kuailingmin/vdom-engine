import { createElement, createFactory, isValidElement } from './createElement'
import { addDirective, removeDirective } from './directive'
import createMatcher from './createMatcher'
import createStore from './createStore'
import { isClient, isServer } from './constant'

const Share = {
	isClient,
	isServer,
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
