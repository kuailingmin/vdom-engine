import * as _ from './util'
import pathToRegexp from 'path-to-regexp'
import querystring from 'querystring'

let createMatcher = routes => (location, data) => {
    let state = _.extend({}, location)
    let pathname = cleanPath(state.pathname)
    let search = cleanSearch(state.search)
    let params = state.params = {}
    state.query = querystring.parse(search)
    for (let pattern in routes) {
        let isMatched = matchPath(pattern, pathname, params)
        let handler = routes[pattern]
        if (isMatched && _.isFn(handler)) {
            handler(params, data)
            break
        }
    }
    return state
}

export default createMatcher

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

function cleanSearch(search) {
    return search[0] === '?' ? search.substr(1) : search
}

function cleanPath(path) {
  return path.replace(/\/\//g, '/')
}