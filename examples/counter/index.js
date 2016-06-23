/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _vdomEngineShare = __webpack_require__(2);

	var _vdomEngineShare2 = _interopRequireDefault(_vdomEngineShare);

	var _vdomEngineClient = __webpack_require__(13);

	var _vdomEngineClient2 = _interopRequireDefault(_vdomEngineClient);

	var _CounterUI = __webpack_require__(1);

	var _CounterUI2 = _interopRequireDefault(_CounterUI);

	var _store = __webpack_require__(7);

	var _store2 = _interopRequireDefault(_store);

	var renderView = function renderView() {
		_vdomEngineClient2['default'].render(_vdomEngineShare2['default'].createElement(_CounterUI2['default'], _extends({}, _store2['default'].getState(), _store2['default'].actions)), document.getElementById('container'));
	};

	renderView();
	_store2['default'].subscribe(renderView);

	console.log('start');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports['default'] = CounterUI;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _vdomEngineShare = __webpack_require__(2);

	var _vdomEngineShare2 = _interopRequireDefault(_vdomEngineShare);

	function CounterUI(_ref) {
		var count = _ref.count;
		var INCREMENT = _ref.INCREMENT;
		var DECREMENT = _ref.DECREMENT;
		var INCREMENT_IF_ODD = _ref.INCREMENT_IF_ODD;
		var ASYNC_INCREMENT = _ref.ASYNC_INCREMENT;

		return _vdomEngineShare2['default'].createElement(
			'p',
			null,
			'Clicked: ',
			_vdomEngineShare2['default'].createElement(
				'span',
				null,
				count
			),
			' times',
			' ',
			_vdomEngineShare2['default'].createElement(
				'button',
				{ 'on-click': INCREMENT },
				'+'
			),
			' ',
			_vdomEngineShare2['default'].createElement(
				'button',
				{ 'on-click': DECREMENT },
				'-'
			),
			' ',
			_vdomEngineShare2['default'].createElement(
				'button',
				{ 'on-click': INCREMENT_IF_ODD },
				'Increment if odd'
			),
			' ',
			_vdomEngineShare2['default'].createElement(
				'button',
				{ 'on-click': ASYNC_INCREMENT },
				'Increment async'
			),
			' ',
			_vdomEngineShare2['default'].createElement(
				'button',
				{ 'on-dblclick': INCREMENT },
				'Increment by dblclick'
			),
			' ',
			_vdomEngineShare2['default'].createElement(
				'button',
				{ 'on-mousemove': DECREMENT },
				'Decrement by mousemove'
			)
		);
	}

	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createElement = __webpack_require__(3);

	var _directive = __webpack_require__(6);

	var Share = {
		h: _createElement.createElement,
		createElement: _createElement.createElement,
		createFactory: _createElement.createFactory,
		isValidElement: _createElement.isValidElement,
		addDirective: _directive.addDirective,
		removeDirective: _directive.removeDirective
	};

	exports['default'] = Share;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports.createElement = createElement;
	exports.isValidElement = isValidElement;
	exports.createFactory = createFactory;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _constant = __webpack_require__(4);

	var _util = __webpack_require__(5);

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

/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
	  key/value configs
	*/
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var SVGNamespaceURI = 'http://www.w3.org/2000/svg';
	exports.SVGNamespaceURI = SVGNamespaceURI;
	var COMPONENT_ID = 'liteid';
	exports.COMPONENT_ID = COMPONENT_ID;
	var VELEMENT = 1;
	exports.VELEMENT = VELEMENT;
	var VSTATELESS = 2;
	exports.VSTATELESS = VSTATELESS;
	var VCOMMENT = 3;
	exports.VCOMMENT = VCOMMENT;
	var HTML_KEY = 'prop-innerHTML';
	exports.HTML_KEY = HTML_KEY;
	var HOOK_WILL_MOUNT = 'hook-willMount';
	exports.HOOK_WILL_MOUNT = HOOK_WILL_MOUNT;
	var HOOK_DID_MOUNT = 'hook-didMount';
	exports.HOOK_DID_MOUNT = HOOK_DID_MOUNT;
	var HOOK_WILL_UPDATE = 'hook-willUpdate';
	exports.HOOK_WILL_UPDATE = HOOK_WILL_UPDATE;
	var HOOK_DID_UPDATE = 'hook-didUpdate';
	exports.HOOK_DID_UPDATE = HOOK_DID_UPDATE;
	var HOOK_WILL_UNMOUNT = 'hook-willUnmount';
	exports.HOOK_WILL_UNMOUNT = HOOK_WILL_UNMOUNT;

/***/ },
/* 5 */
/***/ function(module, exports) {

	// util

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.isFn = isFn;
	exports.isThenable = isThenable;
	exports.invoke = invoke;
	exports.createCollection = createCollection;
	exports.noop = noop;
	exports.identity = identity;
	exports.compose = compose;
	exports.pipe = pipe;
	exports.flatEach = flatEach;
	exports.addItem = addItem;
	exports.extend = extend;
	exports.getUid = getUid;
	exports.renderVstateless = renderVstateless;
	var emptyList = [];

	exports.emptyList = emptyList;

	function isFn(obj) {
	    return typeof obj === 'function';
	}

	function isThenable(obj) {
	    return obj != null && isFn(obj.then);
	}

	function invoke(fn) {
	    return fn();
	}

	function createCollection(accessor, handler) {
	    return Object.keys(accessor).reduce(function (collection, key) {
	        collection[key] = handler.bind(null, key);
	        return collection;
	    }, {});
	}

	var isArr = Array.isArray;

	exports.isArr = isArr;

	function noop() {}

	function identity(obj) {
	    return obj;
	}

	function compose() {
	    for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	        funcs[_key] = arguments[_key];
	    }

	    if (funcs.length === 0) {
	        return function (arg) {
	            return arg;
	        };
	    }

	    if (funcs.length === 1) {
	        return funcs[0];
	    }

	    var last = funcs[funcs.length - 1];
	    var rest = funcs.slice(0, -1);
	    return function () {
	        return rest.reduceRight(function (composed, f) {
	            return f(composed);
	        }, last.apply(undefined, arguments));
	    };
	}

	function pipe(fn1, fn2) {
	    return function () {
	        fn1.apply(this, arguments);
	        return fn2.apply(this, arguments);
	    };
	}

	function flatEach(list, iteratee, a) {
	    var len = list.length;
	    var i = -1;

	    while (len--) {
	        var item = list[++i];
	        if (isArr(item)) {
	            flatEach(item, iteratee, a);
	        } else {
	            iteratee(item, a);
	        }
	    }
	}

	function addItem(list, item) {
	    list[list.length] = item;
	}

	function extend(to, from) {
	    if (!from) {
	        return to;
	    }
	    var keys = Object.keys(from);
	    var i = keys.length;
	    while (i--) {
	        to[keys[i]] = from[keys[i]];
	    }
	    return to;
	}

	var uid = 0;

	function getUid() {
	    return ++uid;
	}

	/**
	 * CSS properties which accept numbers but are not in units of "px".
	 */
	var isUnitlessNumber = {
	    animationIterationCount: 1,
	    borderImageOutset: 1,
	    borderImageSlice: 1,
	    borderImageWidth: 1,
	    boxFlex: 1,
	    boxFlexGroup: 1,
	    boxOrdinalGroup: 1,
	    columnCount: 1,
	    flex: 1,
	    flexGrow: 1,
	    flexPositive: 1,
	    flexShrink: 1,
	    flexNegative: 1,
	    flexOrder: 1,
	    gridRow: 1,
	    gridColumn: 1,
	    fontWeight: 1,
	    lineClamp: 1,
	    lineHeight: 1,
	    opacity: 1,
	    order: 1,
	    orphans: 1,
	    tabSize: 1,
	    widows: 1,
	    zIndex: 1,
	    zoom: 1,

	    // SVG-related properties
	    fillOpacity: 1,
	    floodOpacity: 1,
	    stopOpacity: 1,
	    strokeDasharray: 1,
	    strokeDashoffset: 1,
	    strokeMiterlimit: 1,
	    strokeOpacity: 1,
	    strokeWidth: 1
	};

	exports.isUnitlessNumber = isUnitlessNumber;
	function prefixKey(prefix, key) {
	    return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	}

	var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

	Object.keys(isUnitlessNumber).forEach(function (prop) {
	    prefixes.forEach(function (prefix) {
	        isUnitlessNumber[prefixKey(prefix, prop)] = 1;
	    });
	});

	var RE_NUMBER = /^-?\d+(\.\d+)?$/;

	exports.RE_NUMBER = RE_NUMBER;

	function renderVstateless(vstateless, context) {
	    var factory = vstateless.type;
	    var props = vstateless.props;

	    var vnode = factory(props, context);
	    if (vnode && vnode.render) {
	        vnode = vnode.render();
	    }
	    if (vnode === null || vnode === false) {
	        vnode = {
	            vtype: VCOMMENT,
	            uid: _.getUid()
	        };
	    } else if (!vnode || !vnode.vtype) {
	        throw new Error('@' + factory.name + '#render:You may have returned undefined, an array or some other invalid object');
	    }
	    return vnode;
	}

	if (!Object.freeze) {
	    Object.freeze = identity;
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	// directive store
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.addDirective = addDirective;
	exports.removeDirective = removeDirective;
	exports.matchDirective = matchDirective;
	exports.attachProp = attachProp;
	exports.detachProp = detachProp;
	exports.attachProps = attachProps;
	exports.patchProps = patchProps;
	var directives = {};
	var DIRECTIVE_SPEC = /^([^-]+)-(.+)$/;

	function addDirective(name, configs) {
	    directives[name] = configs;
	}

	function removeDirective(name) {
	    delete directives[name];
	}

	var currentName = null;

	function matchDirective(propKey) {
	    var matches = propKey.match(DIRECTIVE_SPEC);
	    if (matches) {
	        currentName = matches[2];
	        return directives[matches[1]];
	    }
	}

	function attachProp(elem, propKey, propValue) {
	    var directive = matchDirective(propKey);
	    if (directive) {
	        directive.attach(elem, currentName, propValue);
	    }
	}

	function detachProp(elem, propKey) {
	    var directive = matchDirective(propKey);
	    if (directive) {
	        directive.detach(elem, currentName);
	    }
	}

	function attachProps(elem, props) {
	    for (var propKey in props) {
	        if (propKey !== 'children' && props[propKey] != null) {
	            attachProp(elem, propKey, props[propKey]);
	        }
	    }
	}

	function patchProps(elem, props, newProps) {
	    for (var propKey in props) {
	        if (propKey === 'children') {
	            continue;
	        }
	        var newValue = newProps[propKey];
	        if (newValue !== props[propKey]) {
	            if (newValue == null) {
	                detachProp(elem, propKey);
	            } else {
	                attachProp(elem, propKey, newValue);
	            }
	        }
	    }
	    for (var propKey in newProps) {
	        if (propKey === 'children') {
	            continue;
	        }
	        if (!(propKey in props)) {
	            attachProp(elem, propKey, newProps[propKey]);
	        }
	    }
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _vdomEngineStore = __webpack_require__(8);

	var _reduxLogger = __webpack_require__(11);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _setter = __webpack_require__(12);

	var setter = _interopRequireWildcard(_setter);

	var logger = (0, _reduxLogger2['default'])({
		duration: true
	});
	var initialState = {
		count: 10
	};
	var accessor = {
		setter: setter,
		middlewares: [logger]
	};
	var store = (0, _vdomEngineStore.createStore)(accessor, initialState);

	exports['default'] = store;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// store
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createStore = __webpack_require__(9);

	var _createStore2 = _interopRequireDefault(_createStore);

	var Store = {
		createStore: _createStore2['default']
	};

	exports['default'] = Store;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports['default'] = createStore;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	var _shareUtil = __webpack_require__(5);

	var _ = _interopRequireWildcard(_shareUtil);

	var _composeMiddlewares = __webpack_require__(10);

	var _composeMiddlewares2 = _interopRequireDefault(_composeMiddlewares);

	function createStore(accessor, initialState) {
		var getter = accessor.getter;
		var setter = accessor.setter;
		var middlewares = accessor.middlewares;

		if (_.isArr(middlewares)) {
			return _composeMiddlewares2['default'].apply(undefined, _toConsumableArray(middlewares))(createStore)({ getter: getter, setter: setter }, initialState);
		}

		var currentState = initialState;
		var listeners = [];

		var store = {
			setter: setter,
			getter: getter,
			getState: getState,
			replaceState: replaceState,
			search: search,
			dispatch: dispatch,
			subscribe: subscribe
		};

		if (setter) {
			store.actions = _.createCollection(setter, dispatch);
		}

		if (getter) {
			store.selectors = _.createCollection(getter, search);
		}

		return store;

		function subscribe(listener) {
			var index = listeners.indexOf(listener);
			if (index === -1) {
				listeners.push(listener);
			}
			return function () {
				var index = listeners.indexOf(listener);
				if (index !== -1) {
					listeners.splice(i, 1);
				}
			};
		}

		function getState() {
			return currentState;
		}

		function replaceState(nextState, silent) {
			currentState = nextState;
			if (!silent) {
				listeners.forEach(_.invoke);
			}
			return currentState;
		}

		function dispatch(type, data) {
			var currentSetter = setter[type];
			if (!_.isFn(currentSetter)) {
				throw new Error('Expected a function which is ' + currentSetter);
			}
			var nextState = currentSetter(currentState, data);
			if (_.isThenable(nextState)) {
				return nextState.then(replaceState);
			}
			if (currentState !== nextState) {
				replaceState(nextState);
			}
			return currentState;
		}

		function search(type, query) {
			var currentGetter = getter(type);
			if (!_.isFn(currentGetter)) {
				throw new Error('Expected a function which is ' + currentGetter);
			}
			var result = currentGetter(currentState, query);
			return result;
		}
	}

	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = composeMiddlewares;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	var _shareUtil = __webpack_require__(5);

	var _ = _interopRequireWildcard(_shareUtil);

	function composeMiddlewares() {
	    for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	        middlewares[_key] = arguments[_key];
	    }

	    return function (createStore) {
	        return function (accessor, initialState) {
	            var store = createStore(accessor, initialState);
	            var middlewareAPI = {
	                getState: store.getState,
	                dispatch: store.dispatch
	            };
	            var chain = middlewares.map(function (middleware) {
	                return middleware(middlewareAPI);
	            });
	            var dispatch = _.compose.apply(_, _toConsumableArray(chain))(store.dispatch);
	            var actions = _.createCollection(store.setter, dispatch);
	            return _extends({}, store, {
	                actions: actions,
	                dispatch: dispatch
	            });
	        };
	    };
	}

	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

	var repeat = function repeat(str, times) {
	  return new Array(times + 1).join(str);
	};
	var pad = function pad(num, maxLength) {
	  return repeat("0", maxLength - num.toString().length) + num;
	};
	var formatTime = function formatTime(time) {
	  return "@ " + pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
	};

	// Use the new performance api to get better precision if available
	var timer = typeof performance !== "undefined" && typeof performance.now === "function" ? performance : Date;

	/**
	 * parse the level option of createLogger
	 *
	 * @property {string | function | object} level - console[level]
	 * @property {object} action
	 * @property {array} payload
	 * @property {string} type
	 */

	function getLogLevel(level, action, payload, type) {
	  switch (typeof level === "undefined" ? "undefined" : _typeof(level)) {
	    case "object":
	      return typeof level[type] === "function" ? level[type].apply(level, _toConsumableArray(payload)) : level[type];
	    case "function":
	      return level(action);
	    default:
	      return level;
	  }
	}

	/**
	 * Creates logger with followed options
	 *
	 * @namespace
	 * @property {object} options - options for logger
	 * @property {string | function | object} options.level - console[level]
	 * @property {boolean} options.duration - print duration of each action?
	 * @property {boolean} options.timestamp - print timestamp with each action?
	 * @property {object} options.colors - custom colors
	 * @property {object} options.logger - implementation of the `console` API
	 * @property {boolean} options.logErrors - should errors in action execution be caught, logged, and re-thrown?
	 * @property {boolean} options.collapsed - is group collapsed?
	 * @property {boolean} options.predicate - condition which resolves logger behavior
	 * @property {function} options.stateTransformer - transform state before print
	 * @property {function} options.actionTransformer - transform action before print
	 * @property {function} options.errorTransformer - transform error before print
	 */

	function createLogger() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var _options$level = options.level;
	  var level = _options$level === undefined ? "log" : _options$level;
	  var _options$logger = options.logger;
	  var logger = _options$logger === undefined ? console : _options$logger;
	  var _options$logErrors = options.logErrors;
	  var logErrors = _options$logErrors === undefined ? true : _options$logErrors;
	  var collapsed = options.collapsed;
	  var predicate = options.predicate;
	  var _options$duration = options.duration;
	  var duration = _options$duration === undefined ? false : _options$duration;
	  var _options$timestamp = options.timestamp;
	  var timestamp = _options$timestamp === undefined ? true : _options$timestamp;
	  var transformer = options.transformer;
	  var _options$stateTransfo = options.stateTransformer;
	  var // deprecated
	  stateTransformer = _options$stateTransfo === undefined ? function (state) {
	    return state;
	  } : _options$stateTransfo;
	  var _options$actionTransf = options.actionTransformer;
	  var actionTransformer = _options$actionTransf === undefined ? function (actn) {
	    return actn;
	  } : _options$actionTransf;
	  var _options$errorTransfo = options.errorTransformer;
	  var errorTransformer = _options$errorTransfo === undefined ? function (error) {
	    return error;
	  } : _options$errorTransfo;
	  var _options$colors = options.colors;
	  var colors = _options$colors === undefined ? {
	    title: function title() {
	      return "#000000";
	    },
	    prevState: function prevState() {
	      return "#9E9E9E";
	    },
	    action: function action() {
	      return "#03A9F4";
	    },
	    nextState: function nextState() {
	      return "#4CAF50";
	    },
	    error: function error() {
	      return "#F20404";
	    }
	  } : _options$colors;

	  // exit if console undefined

	  if (typeof logger === "undefined") {
	    return function () {
	      return function (next) {
	        return function (action) {
	          return next(action);
	        };
	      };
	    };
	  }

	  if (transformer) {
	    console.error("Option 'transformer' is deprecated, use stateTransformer instead");
	  }

	  var logBuffer = [];
	  function printBuffer() {
	    logBuffer.forEach(function (logEntry, key) {
	      var started = logEntry.started;
	      var startedTime = logEntry.startedTime;
	      var action = logEntry.action;
	      var prevState = logEntry.prevState;
	      var error = logEntry.error;
	      var took = logEntry.took;
	      var nextState = logEntry.nextState;

	      var nextEntry = logBuffer[key + 1];
	      if (nextEntry) {
	        nextState = nextEntry.prevState;
	        took = nextEntry.started - started;
	      }
	      // message
	      var formattedAction = actionTransformer(action);
	      var isCollapsed = typeof collapsed === "function" ? collapsed(function () {
	        return nextState;
	      }, action) : collapsed;

	      var formattedTime = formatTime(startedTime);
	      var titleCSS = colors.title ? "color: " + colors.title(formattedAction) + ";" : null;
	      var title = "action " + (timestamp ? formattedTime : "") + " " + formattedAction.type + " " + (duration ? "(in " + took.toFixed(2) + " ms)" : "");

	      // render
	      try {
	        if (isCollapsed) {
	          if (colors.title) logger.groupCollapsed("%c " + title, titleCSS);else logger.groupCollapsed(title);
	        } else {
	          if (colors.title) logger.group("%c " + title, titleCSS);else logger.group(title);
	        }
	      } catch (e) {
	        logger.log(title);
	      }

	      var prevStateLevel = getLogLevel(level, formattedAction, [prevState], "prevState");
	      var actionLevel = getLogLevel(level, formattedAction, [formattedAction], "action");
	      var errorLevel = getLogLevel(level, formattedAction, [error, prevState], "error");
	      var nextStateLevel = getLogLevel(level, formattedAction, [nextState], "nextState");

	      if (prevStateLevel) {
	        if (colors.prevState) logger[prevStateLevel]("%c prev state", "color: " + colors.prevState(prevState) + "; font-weight: bold", prevState);else logger[prevStateLevel]("prev state", prevState);
	      }

	      if (actionLevel) {
	        if (colors.action) logger[actionLevel]("%c action", "color: " + colors.action(formattedAction) + "; font-weight: bold", formattedAction);else logger[actionLevel]("action", formattedAction);
	      }

	      if (error && errorLevel) {
	        if (colors.error) logger[errorLevel]("%c error", "color: " + colors.error(error, prevState) + "; font-weight: bold", error);else logger[errorLevel]("error", error);
	      }

	      if (nextStateLevel) {
	        if (colors.nextState) logger[nextStateLevel]("%c next state", "color: " + colors.nextState(nextState) + "; font-weight: bold", nextState);else logger[nextStateLevel]("next state", nextState);
	      }

	      try {
	        logger.groupEnd();
	      } catch (e) {
	        logger.log("—— log end ——");
	      }
	    });
	    logBuffer.length = 0;
	  }

	  return function (_ref) {
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        // exit early if predicate function returns false
	        if (typeof predicate === "function" && !predicate(getState, action)) {
	          return next(action);
	        }

	        var logEntry = {};
	        logBuffer.push(logEntry);

	        logEntry.started = timer.now();
	        logEntry.startedTime = new Date();
	        logEntry.prevState = stateTransformer(getState());
	        logEntry.action = action;

	        var returnedValue = undefined;
	        if (logErrors) {
	          try {
	            returnedValue = next(action);
	          } catch (e) {
	            logEntry.error = errorTransformer(e);
	          }
	        } else {
	          returnedValue = next(action);
	        }

	        logEntry.took = timer.now() - logEntry.started;
	        logEntry.nextState = stateTransformer(getState());

	        printBuffer();

	        if (logEntry.error) throw logEntry.error;
	        return returnedValue;
	      };
	    };
	  };
	}

	module.exports = createLogger;

/***/ },
/* 12 */
/***/ function(module, exports) {

	// setter for changing state

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var INCREMENT = function INCREMENT(state, data) {
	    var count = state.count;

	    count += 1;
	    return _extends({}, state, {
	        count: count
	    });
	};

	exports.INCREMENT = INCREMENT;
	var DECREMENT = function DECREMENT(state, data) {
	    var count = state.count;

	    count -= 1;
	    return _extends({}, state, {
	        count: count
	    });
	};

	exports.DECREMENT = DECREMENT;
	var INCREMENT_IF_ODD = function INCREMENT_IF_ODD(state, data) {
	    var count = state.count;

	    if (count % 2 !== 0) {
	        count += 1;
	        return _extends({}, state, {
	            count: count
	        });
	    }
	    return state;
	};

	exports.INCREMENT_IF_ODD = INCREMENT_IF_ODD;
	var ASYNC_INCREMENT = function ASYNC_INCREMENT(state, data) {
	    return new Promise(function (resolve, reject) {
	        setTimeout(function () {
	            var count = state.count;

	            count += 1;
	            resolve(_extends({}, state, {
	                count: count
	            }));
	        }, 1000);
	    });
	};
	exports.ASYNC_INCREMENT = ASYNC_INCREMENT;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// placeholder
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _render = __webpack_require__(14);

	var Client = {
		render: _render.render,
		destroy: _render.destroy
	};

	exports['default'] = Client;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports.render = render;
	exports.destroy = destroy;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _shareUtil = __webpack_require__(5);

	var _ = _interopRequireWildcard(_shareUtil);

	var _shareConstant = __webpack_require__(4);

	var _shareDirective = __webpack_require__(6);

	var _DOMPropertyOperations = __webpack_require__(15);

	var _CSSPropertyOperations = __webpack_require__(16);

	var _eventSystem = __webpack_require__(17);

	var _virtualDom = __webpack_require__(18);

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

/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	 * DOM Property Operations
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	var DOMPropDirective = {
		attach: attachDOMProp,
		detach: detachDOMProp
	};

	exports.DOMPropDirective = DOMPropDirective;
	var DOMAttrDirective = {
		attach: attachDOMAttr,
		detach: detachDOMAttr
	};

	exports.DOMAttrDirective = DOMAttrDirective;
	function attachDOMProp(elem, propName, propValue) {
		elem[propName] = propValue;
	}

	function detachDOMProp(elem, propName) {
		elem[propName] = '';
	}

	function attachDOMAttr(elem, attrName, attrValue) {
		elem.setAttribute(attrName, attrValue + '');
	}

	function detachDOMAttr(elem, attrName) {
		elem.removeAttribute(attrName);
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * CSS Property Operations
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var styleDirective = {
	    attach: attachStyle,
	    detach: detachStyle
	};

	exports.styleDirective = styleDirective;
	function attachStyle(elem, styleName, styleValue) {
	    setStyleValue(elem.style, styleName, styleValue);
	}

	function detachStyle(elem, styleName) {
	    elem.style[styleName] = '';
	}

	function setStyleValue(elemStyle, styleName, styleValue) {

	    if (!_.isUnitlessNumber[styleName] && _.RE_NUMBER.test(styleValue)) {
	        styleValue += 'px';
	    } else if (styleValue == null || typeof styleValue === 'boolean') {
	        styleValue = '';
	    }

	    if (styleName === 'float') {
	        styleName = 'cssFloat';
	    }

	    elemStyle[styleName] = styleValue;
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports.detachEvents = detachEvents;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _shareUtil = __webpack_require__(5);

	var _ = _interopRequireWildcard(_shareUtil);

	// event config
	var notBubbleEvents = {
		onmouseleave: 1,
		onmouseenter: 1,
		onload: 1,
		onunload: 1,
		onscroll: 1,
		onfocus: 1,
		onblur: 1,
		onrowexit: 1,
		onbeforeunload: 1,
		onstop: 1,
		ondragdrop: 1,
		ondragenter: 1,
		ondragexit: 1,
		ondraggesture: 1,
		ondragover: 1,
		oncontextmenu: 1
	};

	function detachEvents(node, props) {
		node.eventStore = null;
		for (var key in props) {
			// key start with 'on-'
			if (key.indexOf('on-') === 0) {
				key = getEventName(key);
				if (notBubbleEvents[key]) {
					node[key] = null;
				}
			}
		}
	}

	var eventDirective = {
		attach: attachEvent,
		detach: detachEvent
	};

	exports.eventDirective = eventDirective;
	// Mobile Safari does not fire properly bubble click events on
	// non-interactive elements, which means delegated click listeners do not
	// fire. The workaround for this bug involves attaching an empty click
	// listener on the target node.
	var inMobile = ('ontouchstart' in document);
	var emptyFunction = function emptyFunction() {};
	var ON_CLICK_KEY = 'onclick';

	function getEventName(key) {
		return key.replace(/^on-/, 'on').toLowerCase();
	}

	var eventTypes = {};
	function attachEvent(elem, eventType, listener) {
		eventType = 'on' + eventType;

		if (notBubbleEvents[eventType] === 1) {
			elem[eventType] = listener;
			return;
		}

		var eventStore = elem.eventStore || (elem.eventStore = {});
		eventStore[eventType] = listener;

		if (!eventTypes[eventType]) {
			// onclick -> click
			document.addEventListener(eventType.substr(2), dispatchEvent, false);
			eventTypes[eventType] = true;
		}

		if (inMobile && eventType === ON_CLICK_KEY) {
			elem.addEventListener('click', emptyFunction, false);
		}

		var nodeName = elem.nodeName;

		if (eventType === 'onchange' && (nodeName === 'INPUT' || nodeName === 'TEXTAREA')) {
			attachEvent(elem, 'oninput', listener);
		}
	}

	function detachEvent(elem, eventType) {
		eventType = 'on' + eventType;
		if (notBubbleEvents[eventType] === 1) {
			elem[eventType] = null;
			return;
		}

		var eventStore = elem.eventStore || (elem.eventStore = {});
		delete eventStore[eventType];

		if (inMobile && eventType === ON_CLICK_KEY) {
			elem.removeEventListener('click', emptyFunction, false);
		}

		var nodeName = elem.nodeName;

		if (eventType === 'onchange' && (nodeName === 'INPUT' || nodeName === 'TEXTAREA')) {
			delete eventStore['oninput'];
		}
	}

	function dispatchEvent(event) {
		var target = event.target;
		var type = event.type;

		var eventType = 'on' + type;
		var syntheticEvent = null;
		while (target) {
			var _target = target;
			var eventStore = _target.eventStore;

			var listener = eventStore && eventStore[eventType];
			if (!listener) {
				target = target.parentNode;
				continue;
			}
			if (!syntheticEvent) {
				syntheticEvent = createSyntheticEvent(event);
			}
			syntheticEvent.currentTarget = target;
			listener.call(target, syntheticEvent);
			if (syntheticEvent.$cancalBubble) {
				break;
			}
			target = target.parentNode;
		}
	}

	function createSyntheticEvent(nativeEvent) {
		var syntheticEvent = {};
		var cancalBubble = function cancalBubble() {
			return syntheticEvent.$cancalBubble = true;
		};
		syntheticEvent.nativeEvent = nativeEvent;
		syntheticEvent.persist = _.noop;
		for (var key in nativeEvent) {
			if (typeof nativeEvent[key] !== 'function') {
				syntheticEvent[key] = nativeEvent[key];
			} else if (key === 'stopPropagation' || key === 'stopImmediatePropagation') {
				syntheticEvent[key] = cancalBubble;
			} else {
				syntheticEvent[key] = nativeEvent[key].bind(nativeEvent);
			}
		}
		return syntheticEvent;
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.initVnode = initVnode;
	exports.destroyVnode = destroyVnode;
	exports.compareTwoVnodes = compareTwoVnodes;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _eventSystem = __webpack_require__(17);

	var _shareUtil = __webpack_require__(5);

	var _ = _interopRequireWildcard(_shareUtil);

	var _shareDirective = __webpack_require__(6);

	var _shareConstant = __webpack_require__(4);

	function initVnode(vnode, context, namespaceURI) {
	    var vtype = vnode.vtype;

	    var node = null;
	    if (!vtype) {
	        // init text
	        node = document.createTextNode(vnode);
	    } else if (vtype === _shareConstant.VELEMENT) {
	        // init element
	        node = initVelem(vnode, context, namespaceURI);
	    } else if (vtype === _shareConstant.VSTATELESS) {
	        // init stateless component
	        node = initVstateless(vnode, context, namespaceURI);
	    } else if (vtype === _shareConstant.VCOMMENT) {
	        // init comment
	        node = document.createComment('react-empty: ' + vnode.uid);
	    }
	    return node;
	}

	function updateVnode(vnode, newVnode, node, context) {
	    var vtype = vnode.vtype;

	    if (vtype === _shareConstant.VSTATELESS) {
	        return updateVstateless(vnode, newVnode, node, context);
	    }

	    // ignore VCOMMENT and other vtypes
	    if (vtype !== _shareConstant.VELEMENT) {
	        return node;
	    }

	    if (vnode.props[_shareConstant.HTML_KEY] != null) {
	        updateVelem(vnode, newVnode, node, context);
	        initVchildren(newVnode, node, context);
	    } else {
	        updateVChildren(vnode, newVnode, node, context);
	        updateVelem(vnode, newVnode, node, context);
	    }
	    return node;
	}

	function updateVChildren(vnode, newVnode, node, context) {
	    var patches = {
	        removes: [],
	        updates: [],
	        creates: []
	    };
	    // console.time('time')
	    diffVchildren(patches, vnode, newVnode, node, context);

	    _.flatEach(patches.removes, applyDestroy);

	    _.flatEach(patches.updates, applyUpdate);

	    _.flatEach(patches.creates, applyCreate);
	    // console.timeEnd('time')
	}

	function applyUpdate(data) {
	    if (!data) {
	        return;
	    }
	    var node = data.node;

	    // update
	    if (data.shouldUpdate) {
	        var vnode = data.vnode;
	        var newVnode = data.newVnode;
	        var context = data.context;

	        if (!vnode.vtype) {
	            node.nodeValue = newVnode;
	        } else if (vnode.vtype === _shareConstant.VELEMENT) {
	            updateVelem(vnode, newVnode, node, context);
	        } else if (vnode.vtype === _shareConstant.VSTATELESS) {
	            node = updateVstateless(vnode, newVnode, node, context);
	        }
	    }

	    // re-order
	    if (data.index !== data.fromIndex) {
	        var existNode = node.parentNode.childNodes[index];
	        if (existNode !== node) {
	            node.parentNode.insertBefore(node, existNode);
	        }
	    }
	}

	function applyDestroy(data) {
	    destroyVnode(data.vnode, data.node);
	    data.node.parentNode.removeChild(data.node);
	}

	function applyCreate(data) {
	    var parentNode = data.parentNode;
	    var existNode = parentNode.childNodes[data.index];
	    var node = initVnode(data.vnode, data.context, parentNode.namespaceURI);
	    parentNode.insertBefore(node, existNode);
	}

	/**
	 * Only vnode which has props.children need to call destroy function
	 * to check whether subTree has component that need to call lify-cycle method and release cache.
	 */

	function destroyVnode(vnode, node) {
	    var vtype = vnode.vtype;

	    if (vtype === _shareConstant.VELEMENT) {
	        // destroy element
	        destroyVelem(vnode, node);
	    } else if (vtype === _shareConstant.VSTATELESS) {
	        // destroy stateless component
	        destroyVstateless(vnode, node);
	    }
	}

	function initVelem(velem, context, namespaceURI) {
	    var type = velem.type;
	    var props = velem.props;

	    var node = null;

	    if (type === 'svg' || namespaceURI === _shareConstant.SVGNamespaceURI) {
	        node = document.createElementNS(_shareConstant.SVGNamespaceURI, type);
	        namespaceURI = _shareConstant.SVGNamespaceURI;
	    } else {
	        node = document.createElement(type);
	    }

	    initVchildren(node, props.children, context);
	    (0, _shareDirective.attachProps)(node, props);

	    if (props[_shareConstant.HOOK_WILL_MOUNT]) {
	        props[_shareConstant.HOOK_WILL_MOUNT].call(null, node, props);
	    }

	    if (props[_shareConstant.HOOK_DID_MOUNT]) {
	        _.addItem(pendingHooks, {
	            type: _shareConstant.HOOK_DID_MOUNT,
	            node: node,
	            props: props
	        });
	    }

	    return node;
	}

	function initVchildren(node, vchildren, context) {
	    var namespaceURI = node.namespaceURI;

	    for (var i = 0, len = vchildren.length; i < len; i++) {
	        node.appendChild(initVnode(vchildren[i], context, namespaceURI));
	    }
	}

	function diffVchildren(patches, vnode, newVnode, node, context) {
	    var childNodes = node.childNodes;

	    var vchildren = vnode.props.children;
	    var newVchildren = newVnode.props.children;
	    var vchildrenLen = vchildren.length;
	    var newVchildrenLen = newVchildren.length;

	    if (vchildrenLen === 0) {
	        if (newVchildrenLen === 0) {
	            return;
	        }
	        for (var i = 0; i < newVchildrenLen; i++) {
	            _.addItem(patches.creates, {
	                vnode: newVchildren[i],
	                parentNode: node,
	                context: context,
	                index: i
	            });
	        }
	        return;
	    } else if (newVchildrenLen === 0) {
	        for (var i = 0; i < vchildrenLen; i++) {
	            _.addItem(patches.removes, {
	                vnode: vchildren[i],
	                node: childNodes[i]
	            });
	        }
	        return;
	    }

	    var matches = {};
	    var updates = Array(newVchildrenLen);
	    var removes = null;
	    var creates = null;

	    // isEqual
	    for (var i = 0; i < vchildrenLen; i++) {
	        var _vnode = vchildren[i];
	        for (var j = 0; j < newVchildrenLen; j++) {
	            if (updates[j]) {
	                continue;
	            }
	            var _newVnode = newVchildren[j];
	            if (_vnode === _newVnode) {
	                var shouldUpdate = false;
	                if (context) {
	                    if (_vnode.vtype === _shareConstant.VSTATELESS) {
	                        /**
	                         * stateless component: (props, context) => <div />
	                         * if context argument is specified and context is exist, should re-render
	                         */
	                        if (_vnode.type.length > 1) {
	                            shouldUpdate = true;
	                        }
	                    }
	                }
	                updates[j] = {
	                    shouldUpdate: shouldUpdate,
	                    vnode: _vnode,
	                    newVnode: _newVnode,
	                    node: childNodes[i],
	                    context: context,
	                    index: j,
	                    fromIndex: i
	                };
	                matches[i] = true;
	                break;
	            }
	        }
	    }

	    // isSimilar
	    for (var i = 0; i < vchildrenLen; i++) {
	        if (matches[i]) {
	            continue;
	        }
	        var _vnode2 = vchildren[i];
	        var shouldRemove = true;
	        for (var j = 0; j < newVchildrenLen; j++) {
	            if (updates[j]) {
	                continue;
	            }
	            var _newVnode2 = newVchildren[j];
	            if (_newVnode2.type === _vnode2.type && _newVnode2.key === _vnode2.key) {
	                updates[j] = {
	                    shouldUpdate: true,
	                    vnode: _vnode2,
	                    newVnode: _newVnode2,
	                    node: childNodes[i],
	                    context: context,
	                    index: j,
	                    fromIndex: i
	                };
	                shouldRemove = false;
	                break;
	            }
	        }
	        if (shouldRemove) {
	            if (!removes) {
	                removes = [];
	            }
	            _.addItem(removes, {
	                vnode: _vnode2,
	                node: childNodes[i]
	            });
	        }
	    }

	    for (var i = 0; i < newVchildrenLen; i++) {
	        var item = updates[i];
	        if (!item) {
	            if (!creates) {
	                creates = [];
	            }
	            _.addItem(creates, {
	                vnode: newVchildren[i],
	                parentNode: node,
	                context: context,
	                index: i
	            });
	        } else if (item.vnode.vtype === _shareConstant.VELEMENT) {
	            diffVchildren(patches, item.vnode, item.newVnode, item.node, item.context);
	        }
	    }

	    if (removes) {
	        _.addItem(patches.removes, removes);
	    }
	    if (creates) {
	        _.addItem(patches.creates, creates);
	    }
	    _.addItem(patches.updates, updates);
	}

	function updateVelem(velem, newVelem, node) {
	    var newProps = newVelem.props;
	    if (newProps[_shareConstant.HOOK_WILL_UPDATE]) {
	        newProps[_shareConstant.HOOK_WILL_UPDATE].call(null, node, newProps);
	    }
	    (0, _shareDirective.patchProps)(node, velem.props, newProps);
	    if (newProps[_shareConstant.HOOK_DID_UPDATE]) {
	        newProps[_shareConstant.HOOK_DID_UPDATE].call(null, node, newProps);
	    }
	    return node;
	}

	function destroyVelem(velem, node) {
	    var props = velem.props;

	    var vchildren = props.children;
	    var childNodes = node.childNodes;

	    for (var i = 0, len = vchildren.length; i < len; i++) {
	        destroyVnode(vchildren[i], childNodes[i]);
	    }

	    if (_.isFn(props[_shareConstant.HOOK_WILL_UNMOUNT])) {
	        props[_shareConstant.HOOK_WILL_UNMOUNT].call(null, node, props);
	    }

	    (0, _eventSystem.detachEvents)(node, props);
	}

	function initVstateless(vstateless, context, namespaceURI) {
	    var vnode = _.renderVstateless(vstateless, context);
	    var node = initVnode(vnode, context, namespaceURI);
	    node.cache = node.cache || {};
	    node.cache[vstateless.uid] = vnode;
	    return node;
	}

	function updateVstateless(vstateless, newVstateless, node, context) {
	    var uid = vstateless.uid;
	    var vnode = node.cache[uid];
	    delete node.cache[uid];
	    var newVnode = _.renderVstateless(newVstateless, context);
	    var newNode = compareTwoVnodes(vnode, newVnode, node, context);
	    newNode.cache = newNode.cache || {};
	    newNode.cache[newVstateless.uid] = newVnode;
	    if (newNode !== node) {
	        _.extend(newNode.cache, node.cache);
	    }
	    return newNode;
	}

	function destroyVstateless(vstateless, node) {
	    var uid = vstateless.uid;
	    var vnode = node.cache[uid];
	    delete node.cache[uid];
	    destroyVnode(vnode, node);
	}

	var pendingHooks = [];
	var clearPendingMount = function clearPendingMount() {
	    var len = pendingHooks.length;
	    if (!len) {
	        return;
	    }
	    var list = pendingHooks;
	    var i = -1;
	    while (len--) {
	        var item = list[++i];
	        item.props[item.type].call(null, item.node, item.props);
	    }
	    pendingHooks.length = 0;
	};

	exports.clearPendingMount = clearPendingMount;

	function compareTwoVnodes(vnode, newVnode, node, context) {
	    var newNode = node;
	    if (newVnode == null) {
	        // remove
	        destroyVnode(vnode, node);
	        node.parentNode.removeChild(node);
	    } else if (vnode.type !== newVnode.type || vnode.key !== newVnode.key) {
	        // replace
	        destroyVnode(vnode, node);
	        newNode = initVnode(newVnode, context, node.namespaceURI);
	        node.parentNode.replaceChild(newNode, node);
	    } else if (vnode !== newVnode || context) {
	        // same type and same key -> update
	        newNode = updateVnode(vnode, newVnode, node, context);
	    }
	    return newNode;
	}

/***/ }
/******/ ]);