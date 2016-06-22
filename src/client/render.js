import * as _ from '../share/util'
import { COMPONENT_ID } from '../share/constant'
import { addDirective } from '../share/directive'
import { DOMAttrDirective, DOMPropDirective } from './DOMPropertyOperations'
import { styleDirective } from './CSSPropertyOperations'
import { eventDirective } from './event-system'
import {
	initVnode,
	destroyVnode,
	compareTwoVnodes,
	clearPendingMount
} from './virtual-dom'

let pendingRendering = {}
let vnodeStore = {}
export function render(vnode, container, context, callback) {
	if (!vnode.vtype) {
		throw new Error(`cannot render ${ vnode } to container`)
	}

	addDirective('attr', DOMAttrDirective)
	addDirective('prop', DOMPropDirective)
	addDirective('on', eventDirective)
	addDirective('css', styleDirective)

	let id = container[COMPONENT_ID] || (container[COMPONENT_ID] = _.getUid())
	let argsCache = pendingRendering[id]

	if (_.isFn(context)) {
		callback = context
		context = undefined
	}

	// component lify cycle method maybe call root rendering
	// should bundle them and render by only one time
	if (argsCache) {
		if (argsCache === true) {
			pendingRendering[id] = {
				vnode: vnode,
				context: context,
				callback: callback
			}
		} else {
			argsCache.vnode = vnode
			argsCache.context = context
			if (callback) {
				argsCache.callback = argsCache.callback ? _.pipe(argsCache.callback, callback) : callback
			}
		}
		return
	}

	pendingRendering[id] = true
	if (vnodeStore.hasOwnProperty(id)) {
		compareTwoVnodes(vnodeStore[id], vnode, container.firstChild, context)
	} else {
		var rootNode = initVnode(vnode, context, container.namespaceURI)
		var childNode = null
		while (childNode = container.lastChild) {
			container.removeChild(childNode)
		}
		container.appendChild(rootNode)
	}
	vnodeStore[id] = vnode
    clearPendingMount()

	argsCache = pendingRendering[id]
	pendingRendering[id] = null

	if (typeof argsCache === 'object') {
		render(argsCache.vnode, container, argsCache.context, argsCache.callback)
	}

	if (callback) {
		callback()
	}

}

export function destroy(container) {
	if (!container.nodeName) {
		throw new Error('expect node')
	}
	let id = container[COMPONENT_ID]
	let vnode = null
	if (vnode = vnodeStore[id]) {
		destroyVnode(vnode, container.firstChild)
		container.removeChild(container.firstChild)
		delete vnodeStore[id]
		delete pendingRendering[id]
		return true
	}
	return false
}