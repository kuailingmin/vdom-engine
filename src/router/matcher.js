import * as _ from '../share/util'
import pathToRegexp from 'path-to-regexp'

export let createMatcher = routes => (pathname, data) => {
    let params = {}
    for (let path in routes) {
        let isMatched = matchPath(path, pathname, params)
        let handler = routes[path]
        if (isMatched) {
            return _.isFn(handler) ? handler(params, data) : handler
        }
    }
}

function matchPath(path, pathname, params) {
    let keys = []
    let regexp = pathToRegexp(path, keys)
    let matches = regexp.exec(pathname)

    if (!matches) {
    	return false
    }

    for (let i = 1, len = matches.length; i < len; i++) {
        let key = keys[i - 1]
        if (key) {
        	if (typeof matches[i] === 'string') {
        		params[key.name] = decodeURIComponent(matches[i])
        	} else {
        		params[key.name] = matches[i]
        	}
        }
    }

    return true
}
