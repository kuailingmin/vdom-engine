import * as _ from './util'
import querystring from 'querystring'

export default function createLocationParser(settings) {
    let { useHash, rootPath, hashPrefix, parseQuery } = settings
    let ROOT_PATH_RE = new RegExp(`^${rootPath}`)
    let HASH_PREFIX_RE = new RegExp(`^#${hashPrefix}`)

    return function locationParser($location) {
    	let state = {}
    	state.location = _.extend({}, $location)
        if (!useHash) {
            state.pathname = $location.pathname.replace(ROOT_PATH_RE, '')
            state.search = $location.search
        } else {
            let hash = $location.hash.replace(HASH_PREFIX_RE, '') || '/'
            let index = hash.indexOf('?')
            if (index === -1) {
                state.pathname = hash
                state.search = ''
            } else {
                state.pathname = hash.substr(0, index)
                state.search = hash.substr(index)
            }
        }
        if (parseQuery && state.search) {
            state.query = querystring.parse(cleanSearch(state.search))
        }
        return state
    }
}

function cleanSearch(search) {
    return search[0] === '?' ? search.substr(1) : search
}