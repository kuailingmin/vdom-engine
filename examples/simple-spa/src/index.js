import ReactDOM, { createApp } from 'vdom-engine/client'
import routes from './routes'
import config from './config'

const app = createApp({
	...config,
	routes,
	viewEngine: {
		render: (component, container) => {
			ReactDOM.render(component, container)
		},
	},
})

app.start()