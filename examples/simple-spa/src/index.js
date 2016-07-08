import ReactDOM, { App } from 'vdom-engine/client'
import home from './home/controller'
import list from './list/controller'
import detail from './detail/controller'

const routes = {
	'/': home,
	'/home': home,
	'/list': list,
	'/detail': detail
}

const container = '#container'
const viewEngine = ReactDOM
const hashPrefix = '!'
const rootPath = '/examples/simple-spa'
const pushState = false

const app = new App({
	pushState,
	rootPath,
	hashPrefix,
	container,
	routes,
	viewEngine,
})

app.start()