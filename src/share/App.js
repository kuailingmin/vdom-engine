import * as _ from './util'
import createMatcher from './createMatcher'


export default class App {
	constructor(options) {
		_.extend(this, options)
		let { routes } = this
		this.matcher = createMatcher(routes)
	}
}