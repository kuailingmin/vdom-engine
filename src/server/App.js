import createMatcher from '../share/createMatcher'
import * as _ from '../share/util'

export default function createResponse(routes, config) {
    let matcher = createMatcher(routes)
    let { rootPath, loader, viewEngine } = config
    let ROOT_PATH_RE = new RegExp(`^${rootPath}`)
    let curState = null
    let renderToString = Controller => {
    	let component = new Controller(curState).render()
    	return viewEngine.render(component)
    }

    return function response(locationState, callback) {
    	curState = _.extend({}, locationState)
    	curState.pathname = curState.pathname.replace(ROOT_PATH_RE, '')
        let Controller = matcher(curState)

        // handle module url and load Controller
        if (typeof Controller === 'string') {
            return loader(Controller, renderToString)
        }

        // handle factory function which return a Controller
        if (_.isFn(Controller) && (!Controller.prototype || !Controller.prototype.init)) {
            Controller = Controller(curState)
        }

        // handle thenable object which will resolve a Controller
        if (_.isThenable(Controller)) {
            return Controller.then(renderToString)
        }
        return renderToString(Controller)
    }
}
