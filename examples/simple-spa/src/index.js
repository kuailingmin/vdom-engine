import ReactDOM, { createApp } from '../../../src/client'
import routes from './routes'
import config from './config'

const webpackLoader = (url, initController) => {
    var load = require(url)
    load(module => {
        let Controller = module.default || module
        initController(Controller)
    })
}

const viewEngine = {
    render: (component, container) => {
        ReactDOM.render(component, container)
    },
}

const app = createApp({
    ...config,
    routes: routes,
    loader: webpackLoader,
    viewEngine: viewEngine,
})

app.start()
