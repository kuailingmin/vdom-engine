// Controller
import * as _ from './util'
import createStore from './createStore'

export default class Controller {
	constructor(options) {
		this.isClient = false
		this.isServer = false
		_.extend(this, options)
		let { getter, setter, name, debug, initialState } = this
		let store = this.store = createStore({
			name,
			debug,
			getter,
			setter,
		}, initialState)
		_.extend(this, store)
	}
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