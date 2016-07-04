import pathToRegexp from 'path-to-regexp'
import querystring from 'querystring'
import * as _ from './util'

let createMatcher = routes => (location, state) => {
    _.extend(state, location)
    let pathname = cleanPath(state.pathname)
    let query = querystring.parse(cleanSearch(state.search))
    let matchResult = null
    state.query = query
    for (let pattern in routes) {
        let result = matchPath(pattern, pathname)
        if (result) {
            matchResult = result
            matchResult.pattern = pattern
            break
        }
    }
    if (matchResult) {
        let Controller = routes[matchResult.pattern]
        let params = getParams(matchResult)
        state.params = params
        return Controller
    }
}

export default createMatcher

function matchPath(pathPattern, pathname) {
    let keys = []
    let regexp = pathToRegexp(pathPattern, keys)
    let matches = regexp.exec(pathname)
    if (matches) {
        return { matches, keys }
    }
}

function getParams({ matches, keys }) {
    let params = {}
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
    return params
}

function cleanSearch(search) {
    return search[0] === '?' ? search.substr(1) : search
}

function cleanPath(path) {
    return path.replace(/\/\//g, '/')
}
