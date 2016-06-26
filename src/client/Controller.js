// Controller for client
import * as _ from '../share/util'
import { render } from './render'

const clientMethods = {
    getContainer() {
        let { container } = this
        let containerType = typeof container
        if (containerType === 'object') {
            return container
        } else if (containerType === 'string') {
            return document.querySelector(container)
        }
        throw new Error('Expected Controller#container to be a string of selector or element of DOM')
    },
    renderToDOM() {
        let container = this.getContainer()
        let vtree = this.render()
        render(vtree, container)
    }
}

export default function initController(Controller, options) {
	let finalOptions = _.extend({}, options)
	_.extend(finalOptions, clientMethods)
    let controller = new Controller(finalOptions)
    return controller
}
