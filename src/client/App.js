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
		this.hashPrefix = this.hashPrefix || ''
		this.rootPath = this.rootPath || ''
	}
	renderToDOM() {}
	unmountComponentAtNode() {}
	start() {
		this.bindEvent()
		this.handleEvent()
	}
	stop() {
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
		this.viewEngine.render(component, container)
	}
	createController(Controller) {
		let controller = new Controller(this.state, this.actions)
		this.initController(controller)
	}
	initController(controller) {
		controller.init && controller.init(this.state, this.actions)
		let component = controller.render()
		this.controller = controller
		this.renderToContainer(component)
	}
	updateController(controller) {
		controller.update && controller.update(this.state, this.actions)
		let component = controller.render()
		this.renderToContainer(component)
	}
	destroyController(controller) {
		controller.destroy && controller.destroy(this.state, this.actions)
		let container = this.getContainer()
		this.viewEngine.destroy(container)
	}
	handleEvent() {
		let prevState = this.state
		let curState = this.getState()

		if (this.controller) {
			if (prevState.pathname === curState.pathname) {
				this.updateController(this.controller)
			} else {
				this.destroyController(this.controller)
				this.controller = null
			}
		}

		let { loader, matcher, createController } = this
		let Controller = matcher(curState)

		// handle module url and load Controller
		if (typeof Controller === 'string') {
			loader(Controller, createController)
			return
		}

		// handle factory function which return a Controller
		if (_.isFn(Controller) && (!Controller.prototype || !Controller.prototype.init)) {
            Controller = Controller(curState)
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
			let { rootPath } = this
			state.pathname = location.pathname.substr(rootPath.length)
			state.search = location.search
		} else {
			let { hashPrefix } = this
			let hash = location.hash.substr(hashPrefix ? hashPrefix.length + 1 : 1)
			if (!hash) {
				hash = '/'
				location.hash = `${hashPrefix}${hash}`
			}
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
		let { pushState, state } = this
		if (state.pathname === url) {
			return
		}
		if (pushState) {
			let { rootPath } = this
			if (isReplace) {
				history.replaceState(null, '', `${rootPath}${url}`)
			} else {
				history.pushState(null, '', `${rootPath}${url}`)
			}
			this.handleEvent()
			return
		}
		let { hashPrefix } = this
		location.hash = hashPrefix + url
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