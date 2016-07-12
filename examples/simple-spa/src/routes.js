/**
 * routes
 */
import home from './home/controller'
import list from './list/controller'
import detail from './detail/controller'

export default {
    '/': home,
    '/home': home,
    '/list': list,
    '/detail': detail,
}