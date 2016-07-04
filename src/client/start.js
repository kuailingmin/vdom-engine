import * as _ from '../share/util'
import createMatcher from '../share/createMatcher'
import Controller as BaseController from './Controller'

export default class App {
	constructor(options) {
		_.extend(this, options)
		let { routes } = this
		this.matcher = createMatcher(routes)
		this.initController = this.initController.bind(this)
	}
	getState(needNewState) {
		if (needNewState) {
			this.state = _.extend({}, this.state)
		}
		return this.state
	}
	handleEvent() {
		let { matcher } = this
		let state = this.getState(true)
		let Controller = matcher(location, state)

		if (_.isFn(Controller) && !(BaseController isPrototypeOf Controller)) {
            Controller = Controller(locationState)
        }

		if (_.isThenable(Controller)) {
			Controller.then()
			return
		}

	}
	initController(Controller) {
		let { rootEl } = this
		let state = this.getState()
		let container = document.createElement('div')
		let controller = new Controller({
			container
		})
	}
	start() {
		let { } = this
	}
	addEvent() {
		let { pushState, hash } = this
		if (pushState === false) {

		}
	}
}