'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.createElement = createElement;
exports.isValidElement = isValidElement;
exports.createFactory = createFactory;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _constant = require('./constant');

var _util = require('./util');

var _ = _interopRequireWildcard(_util);

function createElement(type, props) /* ...children */{
	var finalProps = {};
	var key = null;
	if (props != null) {
		for (var propKey in props) {
			if (propKey === 'key') {
				if (props.key !== undefined) {
					key = '' + props.key;
				}
			} else {
				finalProps[propKey] = props[propKey];
			}
		}
	}

	var defaultProps = type.defaultProps;
	if (defaultProps) {
		for (var propKey in defaultProps) {
			if (finalProps[propKey] === undefined) {
				finalProps[propKey] = defaultProps[propKey];
			}
		}
	}

	var argsLen = arguments.length;
	var finalChildren = _.emptyList;

	if (argsLen > 2) {
		finalChildren = [];
		for (var i = 2; i < argsLen; i++) {
			var child = arguments[i];
			if (_.isArr(child)) {
				_.flatEach(child, collectChild, finalChildren);
			} else {
				collectChild(child, finalChildren);
			}
		}
	}

	finalProps.children = finalChildren;

	var vtype = null;
	if (typeof type === 'string') {
		vtype = _constant.VELEMENT;
	} else if (typeof type === 'function') {
		vtype = _constant.VSTATELESS;
	} else {
		throw new Error('unexpect type [ ' + type + ' ]');
	}

	var vnode = {
		vtype: vtype,
		type: type,
		props: finalProps,
		key: key
	};
	if (vtype === _constant.VSTATELESS) {
		vnode.uid = _.getUid();
	}

	return vnode;
}

function isValidElement(obj) {
	return obj != null && !!obj.vtype;
}

function createFactory(type) {
	var factory = function factory() {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return createElement.apply(undefined, [type].concat(args));
	};
	factory.type = type;
	return factory;
}

function collectChild(child, children) {
	if (child != null && typeof child !== 'boolean') {
		children[children.length] = child.vtype ? child : '' + child;
	}
}