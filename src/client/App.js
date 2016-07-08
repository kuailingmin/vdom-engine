import * as _ from '../share/util'
import { isClient, isServer } from '../share/constant'
import createMatcher from '../share/createMatcher'

export default class App {
	constructor(options) {
		_.extend(this, options)
		this.state = {
			pathname: '/',
			search: '',
		}
		this.controller = null
		this.matcher = createMatcher(this.routes)
		this.goTo = this.goTo.bind(this)
		this.handleEvent = this.handleEvent.bind(this)
		this.createController = this.createController.bind(this)
		this.actions = {
			goTo: this.goTo.bind(this),
			go: this.go.bind(this),
			back: this.back.bind(this),
			forward: this.forward.bind(this),
		}
	}
	renderToDOM() {}
	unmountComponentAtNode() {}
	init() {
		this.bindEvent()
		this.handleEvent()
	}
	destroy() {
		this.unbindEvent()
	}
	getContainer() {
		let { container } = this
		if (typeof container === 'string') {
			return document.querySelector(container)
		} else {
			return container
		}
	}
	renderToContainer(component) {
		let container = this.getContainer()
		this.renderToDOM(component, container)
	}
	createController(Controller) {
		let controller = new Controller()
		this.initController(controller, this.state)
	}
	initController(controller, state) {
		let component = controller.render(state, this.actions)
		this.controller = controller
		this.renderToContainer(component)
	},
	updateController(controller, state) {
		let component = controller.render(state)
		this.renderToContainer(component)
	},
	destroyController(controller, state) {
		let container = this.getContainer()
		this.unmountComponentAtNode(container)
	}
	handleEvent() {
		let prevState = this.state
		let curState = this.getState()

		if (prevState.pathname === curState.pathname) {
			this.updateController(this.controller, curState)
			return
		}

		if (this.controller) {
			this.destroyController(this.controller, curState)
			this.controller = null
		}

		let { loader, matcher, createController } = this
		let Controller = matcher(state)

		// handle module url and load Controller
		if (typeof Controller === 'string') {
			loader(Controller, createController)
			return
		}

		// handle factory function which return a Controller
		if (_.isFn(Controller) && (!Controller.prototype || !Controller.prototype.init)) {
            Controller = Controller(state)
        }

        // handle thenable object which will resolve a Controller
		if (_.isThenable(Controller)) {
			Controller.then(createController)
			return
		}

		createController(Controller)
	}
	getState() {
		let state = this.state = {}
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
	goTo(url, isReplace) {
		let { pushState } = this
		if (pushState) {
			if (isReplace) {
				history.replaceState(null, '', url)
			} else {
				history.pushState(null, '', url)
			}
		}
	}
	back() {
		history.back()
	}
	forward() {
		history.forward()
	}
	go() {
		history.go()
	}
	bindEvent() {
		let { pushState, handleEvent } = this
		if (pushState === false) {
			window.addEventListener('hashchange', handleEvent)
		} else {
			window.addEventListener('popstate', handleEvent)
		}
	}
	unbindEvent() {
		let { pushState, handleEvent } = this
		if (pushState === false) {
			window.removeEventListener('hashchange', handleEvent)
		} else {
			window.removeEventListener('popstate', handleEvent)
		}
	}
}