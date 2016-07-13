/**
 * createApp at server
 */
import * as _ from '../share/util'

export default function createApp(appSettings) {
	let {
		routes,
		viewEngine,
		loader,
		context,
	} = appSettings
	let matcher = createMatcher(routes)

	function matchController(location) {
		let matches = matcher(location.pathname)
		if (!matches) {
			throw new Error(`Did not match any route with pathname:${location.pathname}`)
		}
		let { params, controller } = matches
		let controllerType = typeof controller
		let target = null

		location.params = params

		if (controllerType === 'string') {
			return loader(controller, handler)
		}

		if (controllerType === 'function') {
			target = controller(location)
		}

		if (_.isThenable(target)) {
			return target.then(handler)
		} else {
			return handler(target)
		}
	}

	function handler(Controller) {
		let controller = currentController = new Controller(context)
		let component = controller.init(currentLocation)

		if (_.isThenable(component)) {
			return component.then(renderToString)
		} else {
			return renderToString(component)
		}
	}

	function renderToString(component) {
		return viewEngine.render(component)
	}

	return { matchController }
}