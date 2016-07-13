/**
 * routes
 */
import home from './home'
import list from './list'
import detail from './detail'

export default [
	{
		path: '/',
		controller: () => home,
	}, {
		path: '/home',
		controller: () => home,
	}, {
		path: '/list',
		controller: () => list,
	}, {
		path: '/detail',
		controller: () => detail
	},  {
		path: '*',
		controller: () => home
	}
]