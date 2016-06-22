'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.render = render;
exports.destroy = destroy;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _shareUtil = require('../share/util');

var _ = _interopRequireWildcard(_shareUtil);

var _shareConstant = require('../share/constant');

var _shareDirective = require('../share/directive');

var _DOMPropertyOperations = require('./DOMPropertyOperations');

var _CSSPropertyOperations = require('./CSSPropertyOperations');

var _eventSystem = require('./event-system');

var _virtualDom = require('./virtual-dom');

var pendingRendering = {};
var vnodeStore = {};

function render(vnode, container, context, callback) {
	if (!vnode.vtype) {
		throw new Error('cannot render ' + vnode + ' to container');
	}

	(0, _shareDirective.addDirective)('attr', _DOMPropertyOperations.DOMAttrDirective);
	(0, _shareDirective.addDirective)('prop', _DOMPropertyOperations.DOMPropDirective);
	(0, _shareDirective.addDirective)('on', _eventSystem.eventDirective);
	(0, _shareDirective.addDirective)('css', _CSSPropertyOperations.styleDirective);

	var id = container[_shareConstant.COMPONENT_ID] || (container[_shareConstant.COMPONENT_ID] = _.getUid());
	var argsCache = pendingRendering[id];

	if (_.isFn(context)) {
		callback = context;
		context = undefined;
	}

	// component lify cycle method maybe call root rendering
	// should bundle them and render by only one time
	if (argsCache) {
		if (argsCache === true) {
			pendingRendering[id] = {
				vnode: vnode,
				context: context,
				callback: callback
			};
		} else {
			argsCache.vnode = vnode;
			argsCache.context = context;
			if (callback) {
				argsCache.callback = argsCache.callback ? _.pipe(argsCache.callback, callback) : callback;
			}
		}
		return;
	}

	pendingRendering[id] = true;
	if (vnodeStore.hasOwnProperty(id)) {
		(0, _virtualDom.compareTwoVnodes)(vnodeStore[id], vnode, container.firstChild, context);
	} else {
		var rootNode = (0, _virtualDom.initVnode)(vnode, context, container.namespaceURI);
		var childNode = null;
		while (childNode = container.lastChild) {
			container.removeChild(childNode);
		}
		container.appendChild(rootNode);
	}
	vnodeStore[id] = vnode;
	(0, _virtualDom.clearPendingMount)();

	argsCache = pendingRendering[id];
	pendingRendering[id] = null;

	if (typeof argsCache === 'object') {
		render(argsCache.vnode, container, argsCache.context, argsCache.callback);
	}

	if (callback) {
		callback();
	}
}

function destroy(container) {
	if (!container.nodeName) {
		throw new Error('expect node');
	}
	var id = container[_shareConstant.COMPONENT_ID];
	var vnode = null;
	if (vnode = vnodeStore[id]) {
		(0, _virtualDom.destroyVnode)(vnode, container.firstChild);
		container.removeChild(container.firstChild);
		delete vnodeStore[id];
		delete pendingRendering[id];
		return true;
	}
	return false;
}