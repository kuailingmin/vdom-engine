// Controller
import * as _ from './util'
import { isClient, isServer } from './constant'
import createStore from './createStore'

export default class Controller {
	constructor(options) {
		_.extend(this, options)
		let { getter, setter, name, debug, initialState } = this
		let store = this.store = createStore({
			name,
			debug,
			getter,
			setter,
		}, initialState)
		_.extend(this, store)
		this.isClient = isClient
		this.isServer = isServer
	}
	gotTo() {}
	renderToDOM() {}
	renderToString() {}
	render() {}
	onRequest() {}
	onWillShow() {}
	onDidShow() {}
	onWillHide() {}
	onDidHide() {}
	onWillMount() {}
	onDidMount() {},
}