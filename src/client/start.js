import * as _ from '../share/util'
import createMatcher from '../share/createMatcher'
import Controller as BaseController from './Controller'

export default class App {
	constructor(options) {
		_.extend(this, options)
		let { routes } = this
		this.matcher = createMatcher(routes)
		this.initController = this.initController.bind(this)
		this.goTo = this.goTo.bind(this)
		this.handleEvent = this.handleEvent.bind(this)
	}
	handleEvent() {
		let { loader, matcher, initController } = this
		let state = this.getState()
		let Controller = matcher(state)

		// handle module url
		if (typeof Controller === 'string') {
			loader(Controller).then(initController)
			return
		}

		// handle factory function
		if (_.isFn(Controller) && !(BaseController isPrototypeOf Controller)) {
            Controller = Controller(locationState)
        }

        // handle thenable object
		if (_.isThenable(Controller)) {
			Controller.then(initController)
			return
		}
		initController(Controller)
	}
	initController(Controller) {
		let { root, state } = this
		let state = this.getState()
		let container = document.createElement('div')
		let controller = new Controller({
			container
		})
	}
	getState() {
		let state = this.state = {
			location: _.extend({}, location)
		}
		if (this.pushState) {
			state.pathname = location.pathname
			state.search = location.search
		} else {
			let { hashPrefix } = this
			let hash = location.hash.substr(hashPrefix ? hashPrefix.length + 1 : 1)
			let index = hash.indexOf('?')
			if (index === -1) {
				state.pathname = hash
				state.search = ''
			} else {
				state.pathname = hash.substr(0, index)
				state.search = hash.substr(index)
			}
		}
		return state
	}
	addEvent() {
		let { pushState } = this
		if (pushState === false) {
			window.addEventListener('hashchange')
		}
	}
}