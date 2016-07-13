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
		goTo(path, isReplace) {
			isReplace ? history.replace(path) : history.push(path)
		},
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
		let matches = matcher(location.pathname)
		if (matches) {
			throw new Error(`Did not match any route with pathname:${location.pathname}`)
		}
		let { params, action } = matches.action
		let actionType = typeof action
		let target = null

		location.params = params
		currentLocation = location

		if (actionType === 'string') {
			loader(action, handler)
			return
		}

		if (actionType === 'function') {
			target = action(location)
		}

		if (_.isThenable(target)) {
			target.then(handler)
		} else {
			handler(target)
		}
	}

	function handler(Controller) {
		if (currentController) {
			currentController.$unlisten()
			currentController.destroy(currentLocation)
			clearContainer()
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
			unlistenBeforeLeave && unlistenBeforeLeave()
			unlistenBeforeUnload && unlistenBeforeUnload()
		}

		_.extend(controller, historyAPI)

		let component = controller.init(currentLocation)

		if (_.isThenable(component)) {
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

	function start() {
		unlisten = history.listen(matchController)
		listener(history.getCurrentLocation())
	}

	function stop() {
		currentLocation = null
		if (unlisten) {
			unlisten()
			unlisten = null
		}
		if (currentController) {
			currentController.$unlisten()
			currentController.destroy(currentLocation)
			currentController = null
		}
	}

	return  { start, stop }

}

function createHistory(settings) {
	let { type, basename, useQueries, useBeforeUnload } = settings
	let create = History[type]
	if (useQueries) {
		create = History.useQueries(create)
	}
	if (basename) {
		create = History.useBasename(create)
	}
	if (useBeforeUnload) {
		create = History.useBeforeUnload(create)
	}
	return create(settings)
}