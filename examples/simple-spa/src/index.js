import ReactDOM, { App } from 'vdom-engine/client'
import routes from './routes'
import config from './config'

const app = new App({
	...config,
	routes,
	viewEngine: ReactDOM
})

app.start()