/**
 * createApp at client
 */
import History from '../share/history'
import * as _ from '../share/util'
import createMatcher from '../share/createMatcher'

export default function createApp(appSettings) {
	let {
		routes,
		historySettings,
		viewEngine,
		loader,
		context,
		container,
	} = appSettings
	let history = createHistory(historySettings)
	let matcher = createMatcher(routes)
	let currentLocation = null
	let currentController = null
	let unlisten = null
	let currentCallback = () => {}

	let historyAPI = {
		goReplace: history.replace,
		goTo: history.push,
		goIndex: history.go,
		goBack: history.goBack,
		goForward: history.goForward,
	}

	function getContainer() {
		if (typeof container === 'string') {
			return document.querySelector(container)
		} else {
			return container
		}
	}

	function matchController(location) {
		// check whether equal to current location
		if (currentLocation) {
			if (currentLocation.pathname === location.pathname) {
				if (currentController && currentController.update) {
					currentController.update(location)
				}
				return
			}
		}

		let matches = matcher(location.pathname)
		if (!matches) {
			throw new Error(`Did not match any route with pathname:${location.pathname}`)
		}
		let { params, controller } = matches
		let controllerType = typeof controller
		let target = null

		location.params = params
		currentLocation = location

		if (controllerType === 'string') {
			loader(controller, initController)
			return
		}

		if (controllerType === 'function') {
			target = controller(location)
		}

		if (_.isThenable(target)) {
			target.then(initController)
		} else {
			initController(target)
		}
	}

	function initController(Controller) {
		if (currentController) {
			destroyController()
		}

		let controller = currentController = new Controller(context)
		let unlistenBeforeLeave = null
		let unlistenBeforeUnload = null

		if (controller.beforeLeave) {
			let beforeLeave = controller.beforeLeave.bind(controller)
			unlistenBeforeLeave = history.listenBefore(beforeLeave)
		}

		if (controller.beforeUnload) {
			let beforeUnload = controller.beforeUnload.bind(controller)
			unlistenBeforeUnload = history.listenBeforeUnload(beforeUnload)
		}

		controller.$unlisten = () => {
			if (unlistenBeforeLeave) {
				unlistenBeforeLeave()
				unlistenBeforeLeave = null
			}
			if (unlistenBeforeUnload) {
				unlistenBeforeUnload()
				unlistenBeforeUnload = null
			}
		}
		controller.refreshView = renderToContainer

		_.extend(controller, historyAPI)

		let component = controller.init(currentLocation)

		// if controller.init return false, do nothing
		if (component === false) {
			return
		} else if (_.isThenable(component)) {
			component.then(renderToContainer)
		} else {
			renderToContainer(component)
		}
	}

	function renderToContainer(component) {
		viewEngine.render(component, getContainer())
	}

	function clearContainer() {
		if (viewEngine.clear) {
			viewEngine.clear(getContainer())
		}
	}

	function destroyController() {
	    if (currentController) {
	        currentController.$unlisten()
	        if (currentController.destroy) {
	            currentController.destroy(currentLocation)
	        }
	        currentController = null
	    }
	}

	function start() {
		unlisten = history.listen(matchController)
		matchController(history.getCurrentLocation())
	}

	function stop() {
		currentLocation = null
		if (unlisten) {
			unlisten()
			unlisten = null
		}
		destroyController()
	}

	return  { start, stop }

}

function createHistory(settings) {
	let create = History[settings.type]
	create = History.useBeforeUnload(create)
	create = History.useQueries(create)
	create = History.useBasename(create)
	return create(settings)
}