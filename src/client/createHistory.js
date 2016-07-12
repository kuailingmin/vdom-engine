import * as _ from '../share/util'
import { locationDefaults } from '../share/constant'
import createLocationParser from '../share/createLocationParser'

export default function createHistory(options) {
	let settings = _.extend(_.extend({}, locationDefaults), options)
	let parse = createLocationParser(settings)
	let { useHash, rootPath, hashPrefix, parseQuery } = settings

	function addListener(listener) {
		if (useHash) {
			window.addEventListener('hashchange', listener)
		} else {
			window.addEventListener('popstate', listener)
		}
	}

	function removeListener(listener) {
		if (useHash) {
			window.removeEventListener('hashchange', listener)
		} else {
			window.removeEventListener('popstate', listener)
		}
	}

	function goTo(targetPath) {
		if (useHash) {
			window.location.hash = `${hashPrefix}${targetPath}`
		} else {
			window.history.pushState(null, '', `${rootPath}${targetPath}`)
		}
	}

	function goIndex(index) {
		window.history.go(index)
	}

	function goBack() {
		window.history.goBack()
	}

	function goForward() {
		window.history.forward()
	}

	return {
		parse,
		goTo,
		goIndex,
		goBack,
		goForward,
	}
}