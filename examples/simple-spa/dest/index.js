/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		1:0
/******/ 	};

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

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + ({"2":"./simple-spa/dest/detail","3":"./simple-spa/dest/home","4":"./simple-spa/dest/list"}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/examples/";

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

	var _srcClient = __webpack_require__(11);

	var _srcClient2 = _interopRequireDefault(_srcClient);

	var _routes = __webpack_require__(45);

	var _routes2 = _interopRequireDefault(_routes);

	var _config = __webpack_require__(46);

	var _config2 = _interopRequireDefault(_config);

	var webpackLoader = function webpackLoader(url, initController) {
	    var load = __webpack_require__(47)(url);
	    load(function (module) {
	        var Controller = module['default'] || module;
	        initController(Controller);
	    });
	};

	var viewEngine = {
	    render: function render(component, container) {
	        _srcClient2['default'].render(component, container);
	    }
	};

	var app = (0, _srcClient.createApp)(_extends({}, _config2['default'], {
	    routes: _routes2['default'],
	    loader: webpackLoader,
	    viewEngine: viewEngine
	}));

	app.start();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createElement = __webpack_require__(2);

	var _directive = __webpack_require__(5);

	var _createMatcher = __webpack_require__(6);

	var _createMatcher2 = _interopRequireDefault(_createMatcher);

	var _createStore = __webpack_require__(9);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _constant = __webpack_require__(3);

	var Share = {
		isClient: _constant.isClient,
		isServer: _constant.isServer,
		h: _createElement.createElement,
		createElement: _createElement.createElement,
		createFactory: _createElement.createFactory,
		isValidElement: _createElement.isValidElement,
		addDirective: _directive.addDirective,
		removeDirective: _directive.removeDirective,
		createMatcher: _createMatcher2['default'],
		createStore: _createStore2['default']
	};

	exports['default'] = Share;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports.createElement = createElement;
	exports.isValidElement = isValidElement;
	exports.createFactory = createFactory;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _constant = __webpack_require__(3);

	var _util = __webpack_require__(4);

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
/* 3 */
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
	var isClient = typeof window !== 'undefined';
	exports.isClient = isClient;
	var isServer = !isClient;
	exports.isServer = isServer;
	var locationDefaults = {
	    useHash: true,
	    parseQuery: true,
	    rootPath: '',
	    hashPrefix: '!'
	};
	exports.locationDefaults = locationDefaults;

/***/ },
/* 4 */
/***/ function(module, exports) {

	// util

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.isFn = isFn;
	exports.isThenable = isThenable;
	exports.invoke = invoke;
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
/* 5 */
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = createMatcher;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _pathToRegexp = __webpack_require__(7);

	var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

	var _util = __webpack_require__(4);

	var _ = _interopRequireWildcard(_util);

	function createMatcher($routes) {
	    var routes = $routes.map(createRoute);
	    return function matcher($pathname) {
	        var pathname = cleanPath($pathname);
	        for (var i = 0, len = routes.length; i < len; i++) {
	            var route = routes[i];
	            var matches = route.regexp.exec(pathname);
	            if (matches) {
	                var params = getParams(matches, route.keys);
	                var controller = route.controller;
	                return {
	                    path: route.path,
	                    params: params,
	                    controller: controller
	                };
	            }
	        }
	    };
	}

	function createRoute($route) {
	    var route = _.extend({}, $route);
	    var keys = route.keys = [];
	    route.regexp = (0, _pathToRegexp2['default'])(route.path, keys);
	    return route;
	}

	function getParams(matches, keys) {
	    var params = {};
	    for (var i = 1, len = matches.length; i < len; i++) {
	        var key = keys[i - 1];
	        if (key) {
	            if (typeof matches[i] === 'string') {
	                params[key.name] = decodeURIComponent(matches[i]);
	            } else {
	                params[key.name] = matches[i];
	            }
	        }
	    }
	    return params;
	}

	function cleanPath(path) {
	    return path.replace(/\/\//g, '/');
	}
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var isarray = __webpack_require__(8)

	/**
	 * Expose `pathToRegexp`.
	 */
	module.exports = pathToRegexp
	module.exports.parse = parse
	module.exports.compile = compile
	module.exports.tokensToFunction = tokensToFunction
	module.exports.tokensToRegExp = tokensToRegExp

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g')

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string} str
	 * @return {!Array}
	 */
	function parse (str) {
	  var tokens = []
	  var key = 0
	  var index = 0
	  var path = ''
	  var res

	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0]
	    var escaped = res[1]
	    var offset = res.index
	    path += str.slice(index, offset)
	    index = offset + m.length

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1]
	      continue
	    }

	    var next = str[index]
	    var prefix = res[2]
	    var name = res[3]
	    var capture = res[4]
	    var group = res[5]
	    var modifier = res[6]
	    var asterisk = res[7]

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path)
	      path = ''
	    }

	    var partial = prefix != null && next != null && next !== prefix
	    var repeat = modifier === '+' || modifier === '*'
	    var optional = modifier === '?' || modifier === '*'
	    var delimiter = res[2] || '/'
	    var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?')

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: escapeGroup(pattern)
	    })
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index)
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path)
	  }

	  return tokens
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @return {!function(Object=, Object=)}
	 */
	function compile (str) {
	  return tokensToFunction(parse(str))
	}

	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length)

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
	    }
	  }

	  return function (obj, opts) {
	    var path = ''
	    var data = obj || {}
	    var options = opts || {}
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i]

	      if (typeof token === 'string') {
	        path += token

	        continue
	      }

	      var value = data[token.name]
	      var segment

	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix
	          }

	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }

	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j])

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment
	        }

	        continue
	      }

	      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }

	      path += token.prefix + segment
	    }

	    return path
	  }
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys
	  return re
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g)

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      })
	    }
	  }

	  return attachKeys(path, keys)
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = []

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source)
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

	  return attachKeys(regexp, keys)
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  var tokens = parse(path)
	  var re = tokensToRegExp(tokens, options)

	  // Attach keys back to the regexp.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] !== 'string') {
	      keys.push(tokens[i])
	    }
	  }

	  return attachKeys(re, keys)
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}  tokens
	 * @param  {Object=} options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, options) {
	  options = options || {}

	  var strict = options.strict
	  var end = options.end !== false
	  var route = ''
	  var lastToken = tokens[tokens.length - 1]
	  var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken)

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i]

	    if (typeof token === 'string') {
	      route += escapeString(token)
	    } else {
	      var prefix = escapeString(token.prefix)
	      var capture = '(?:' + token.pattern + ')'

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*'
	      }

	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?'
	        } else {
	          capture = prefix + '(' + capture + ')?'
	        }
	      } else {
	        capture = prefix + '(' + capture + ')'
	      }

	      route += capture
	    }
	  }

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?'
	  }

	  if (end) {
	    route += '$'
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithSlash ? '' : '(?=\\/|$)'
	  }

	  return new RegExp('^' + route, flags(options))
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  keys = keys || []

	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys)
	    keys = []
	  } else if (!options) {
	    options = {}
	  }

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }

	  if (isarray(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }

	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


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

	var _util = __webpack_require__(4);

	var _ = _interopRequireWildcard(_util);

	var _createLogger = __webpack_require__(10);

	var _createLogger2 = _interopRequireDefault(_createLogger);

	function createStore(settings) {
		var getter = settings.getter;
		var setter = settings.setter;
		var name = settings.name;
		var debug = settings.debug;
		var initialState = settings.initialState;

		var logger = null;

		if (debug !== false) {
			logger = (0, _createLogger2['default'])(name);
		}

		var currentState = initialState;
		var listeners = [];

		var store = {
			getState: getState,
			replaceState: replaceState,
			search: search,
			dispatch: dispatch,
			subscribe: subscribe
		};

		if (setter) {
			store.actions = Object.keys(setter).reduce(function (actions, key) {
				var count = 0;
				actions[key] = function (data) {
					var finalKey = key + '*' + count++;
					var prevState = currentState;
					var nextState = currentState;
					var logEnd = function logEnd(nextState) {
						logger && logger.end(finalKey, data, prevState, nextState);
					};
					logger && logger.start(finalKey);
					try {
						nextState = dispatch(key, data);
					} catch (error) {
						logEnd(error);
						return nextState;
					}
					if (_.isThenable(nextState)) {
						return nextState.then(logEnd, logEnd);
					}
					logEnd(nextState);
					return nextState;
				};
				return actions;
			}, {});
		}

		if (getter) {
			store.selectors = Object.keys(getter).reduce(function (selectors, key) {
				selectors[key] = search.bind(null, key);
				return selectors;
			});
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
			var currentGetter = getter[type];
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
/***/ function(module, exports) {

	// createLogger
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = createLogger;
	var attr = 'info' in console ? 'info' : "log";
	var pad = function pad(num) {
	    return ('0' + num).slice(-2);
	};
	var getTime = typeof performance !== 'undefined' && performance.now ? function () {
	    return performance.now();
	} : function () {
	    return new Date().getTime();
	};

	function createLogger(options) {
	    var _options$name = options.name;
	    var name = _options$name === undefined ? 'store' : _options$name;

	    var timeStore = {};

	    return {
	        start: start,
	        end: end
	    };

	    function start(key) {
	        timeStore[key] = getTime();
	    }

	    function end(key, data, prevState, nextState) {
	        var time = new Date();
	        var formattedTime = time.getHours() + ':' + pad(time.getMinutes()) + ':' + pad(time.getSeconds());
	        var takeTime = (getTime() - timeStore[key]).toFixed(2);
	        var message = name + '-' + (prevState === nextState ? 'equal' : 'diff') + ': action [' + key + '] end at ' + formattedTime + ', take ' + takeTime + 'ms';

	        try {
	            console.groupCollapsed(message);
	        } catch (e) {
	            try {
	                console.group(message);
	            } catch (e) {
	                console.log(message);
	            }
	        }

	        if (attr === 'log') {
	            console[attr](data);
	            console[attr](prevState);
	            console[attr](nextState);
	        } else {
	            var isError = nextState instanceof Error;
	            console[attr]('%c data', 'color: #03A9F4; font-weight: bold', data);
	            console[attr]('%c prev state', 'color: #9E9E9E; font-weight: bold', prevState);
	            console[attr]('%c ' + (isError ? 'error' : 'next state'), 'color: #4CAF50; font-weight: bold', nextState);
	        }

	        try {
	            console.groupEnd();
	        } catch (e) {
	            console.log('-- log end --');
	        }
	    }
	}

	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// placeholder
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _render = __webpack_require__(12);

	var _createApp = __webpack_require__(17);

	var _createApp2 = _interopRequireDefault(_createApp);

	var Client = {
		createApp: _createApp2['default'],
		render: _render.render,
		destroy: _render.destroy
	};

	exports['default'] = Client;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports.render = render;
	exports.destroy = destroy;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _shareUtil = __webpack_require__(4);

	var _ = _interopRequireWildcard(_shareUtil);

	var _shareConstant = __webpack_require__(3);

	var _shareDirective = __webpack_require__(5);

	var _DOMPropertyOperations = __webpack_require__(13);

	var _CSSPropertyOperations = __webpack_require__(14);

	var _eventSystem = __webpack_require__(15);

	var _virtualDom = __webpack_require__(16);

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
/* 13 */
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
/* 14 */
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports.detachEvents = detachEvents;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _shareUtil = __webpack_require__(4);

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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.initVnode = initVnode;
	exports.destroyVnode = destroyVnode;
	exports.compareTwoVnodes = compareTwoVnodes;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _eventSystem = __webpack_require__(15);

	var _shareUtil = __webpack_require__(4);

	var _ = _interopRequireWildcard(_shareUtil);

	var _shareDirective = __webpack_require__(5);

	var _shareConstant = __webpack_require__(3);

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

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * createApp at client
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports['default'] = createApp;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _shareHistory = __webpack_require__(18);

	var _shareHistory2 = _interopRequireDefault(_shareHistory);

	var _shareUtil = __webpack_require__(4);

	var _ = _interopRequireWildcard(_shareUtil);

	var _shareCreateMatcher = __webpack_require__(6);

	var _shareCreateMatcher2 = _interopRequireDefault(_shareCreateMatcher);

	function createApp(appSettings) {
		var routes = appSettings.routes;
		var historySettings = appSettings.historySettings;
		var viewEngine = appSettings.viewEngine;
		var loader = appSettings.loader;
		var context = appSettings.context;
		var container = appSettings.container;

		var history = createHistory(historySettings);
		var matcher = (0, _shareCreateMatcher2['default'])(routes);
		var currentLocation = null;
		var currentController = null;
		var unlisten = null;
		var currentCallback = function currentCallback() {};

		var historyAPI = {
			goReplace: history.replace,
			goTo: history.push,
			goIndex: history.go,
			goBack: history.goBack,
			goForward: history.goForward
		};

		function getContainer() {
			if (typeof container === 'string') {
				return document.querySelector(container);
			} else {
				return container;
			}
		}

		function matchController(location) {
			// check whether equal to current location
			if (currentLocation) {
				if (currentLocation.pathname === location.pathname) {
					if (currentController && currentController.update) {
						currentController.update(location);
					}
					return;
				}
			}

			var matches = matcher(location.pathname);
			if (!matches) {
				throw new Error('Did not match any route with pathname:' + location.pathname);
			}
			var params = matches.params;
			var controller = matches.controller;

			var controllerType = typeof controller;
			var target = null;

			location.params = params;
			currentLocation = location;

			if (controllerType === 'string') {
				loader(controller, initController);
				return;
			}

			if (controllerType === 'function') {
				target = controller(location);
			}

			if (_.isThenable(target)) {
				target.then(initController);
			} else {
				initController(target);
			}
		}

		function initController(Controller) {
			if (currentController) {
				destroyController();
			}

			var controller = currentController = new Controller(context);
			var unlistenBeforeLeave = null;
			var unlistenBeforeUnload = null;

			if (controller.beforeLeave) {
				var beforeLeave = controller.beforeLeave.bind(controller);
				unlistenBeforeLeave = history.listenBefore(beforeLeave);
			}

			if (controller.beforeUnload) {
				var beforeUnload = controller.beforeUnload.bind(controller);
				unlistenBeforeUnload = history.listenBeforeUnload(beforeUnload);
			}

			controller.$unlisten = function () {
				if (unlistenBeforeLeave) {
					unlistenBeforeLeave();
					unlistenBeforeLeave = null;
				}
				if (unlistenBeforeUnload) {
					unlistenBeforeUnload();
					unlistenBeforeUnload = null;
				}
			};
			controller.refreshView = renderToContainer;

			_.extend(controller, historyAPI);

			var component = controller.init(currentLocation);

			// if controller.init return false, do nothing
			if (component === false) {
				return;
			} else if (_.isThenable(component)) {
				component.then(renderToContainer);
			} else {
				renderToContainer(component);
			}
		}

		function renderToContainer(component) {
			viewEngine.render(component, getContainer());
		}

		function clearContainer() {
			if (viewEngine.clear) {
				viewEngine.clear(getContainer());
			}
		}

		function destroyController() {
			if (currentController) {
				currentController.$unlisten();
				if (currentController.destroy) {
					currentController.destroy(currentLocation);
				}
				currentController = null;
			}
		}

		function start() {
			unlisten = history.listen(matchController);
			matchController(history.getCurrentLocation());
		}

		function stop() {
			currentLocation = null;
			if (unlisten) {
				unlisten();
				unlisten = null;
			}
			destroyController();
		}

		return { start: start, stop: stop };
	}

	function createHistory(settings) {
		var create = _shareHistory2['default'][settings.type];
		create = _shareHistory2['default'].useBeforeUnload(create);
		create = _shareHistory2['default'].useQueries(create);
		create = _shareHistory2['default'].useBasename(create);
		return create(settings);
	}
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * custom history import
	 */

	// HTML5 history
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _historyLibCreateBrowserHistory = __webpack_require__(19);

	var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

	// Hash history

	var _historyLibCreateHashHistory = __webpack_require__(34);

	var _historyLibCreateHashHistory2 = _interopRequireDefault(_historyLibCreateHashHistory);

	// query support

	var _historyLibUseQueries = __webpack_require__(36);

	var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

	// beforeunload support

	var _historyLibUseBeforeUnload = __webpack_require__(40);

	var _historyLibUseBeforeUnload2 = _interopRequireDefault(_historyLibUseBeforeUnload);

	// basename support

	var _historyLibUseBasename = __webpack_require__(41);

	var _historyLibUseBasename2 = _interopRequireDefault(_historyLibUseBasename);

	exports['default'] = {
		createHistory: _historyLibCreateBrowserHistory2['default'],
		createHashHistory: _historyLibCreateHashHistory2['default'],
		useQueries: _historyLibUseQueries2['default'],
		useBeforeUnload: _historyLibUseBeforeUnload2['default'],
		useBasename: _historyLibUseBasename2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(21);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(22);

	var _BrowserProtocol = __webpack_require__(23);

	var BrowserProtocol = _interopRequireWildcard(_BrowserProtocol);

	var _RefreshProtocol = __webpack_require__(30);

	var RefreshProtocol = _interopRequireWildcard(_RefreshProtocol);

	var _DOMUtils = __webpack_require__(28);

	var _createHistory = __webpack_require__(31);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Creates and returns a history object that uses HTML5's history API
	 * (pushState, replaceState, and the popstate event) to manage history.
	 * This is the recommended method of managing history in browsers because
	 * it provides the cleanest URLs.
	 *
	 * Note: In browsers that do not support the HTML5 history API full
	 * page reloads will be used to preserve clean URLs. You can force this
	 * behavior using { forceRefresh: true } in options.
	 */
	var createBrowserHistory = function createBrowserHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Browser history needs a DOM') : (0, _invariant2.default)(false) : void 0;

	  var useRefresh = options.forceRefresh || !(0, _DOMUtils.supportsHistory)();
	  var Protocol = useRefresh ? RefreshProtocol : BrowserProtocol;

	  var getUserConfirmation = Protocol.getUserConfirmation;
	  var getCurrentLocation = Protocol.getCurrentLocation;
	  var pushLocation = Protocol.pushLocation;
	  var replaceLocation = Protocol.replaceLocation;
	  var go = Protocol.go;


	  var history = (0, _createHistory2.default)(_extends({
	    getUserConfirmation: getUserConfirmation }, options, {
	    getCurrentLocation: getCurrentLocation,
	    pushLocation: pushLocation,
	    replaceLocation: replaceLocation,
	    go: go
	  }));

	  var listenerCount = 0,
	      stopListener = void 0;

	  var startListener = function startListener(listener, before) {
	    if (++listenerCount === 1) stopListener = BrowserProtocol.startListener(history.transitionTo);

	    var unlisten = before ? history.listenBefore(listener) : history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopListener();
	    };
	  };

	  var listenBefore = function listenBefore(listener) {
	    return startListener(listener, true);
	  };

	  var listen = function listen(listener) {
	    return startListener(listener, false);
	  };

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen
	  });
	};

	exports.default = createBrowserHistory;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 20 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	  try {
	    cachedSetTimeout = setTimeout;
	  } catch (e) {
	    cachedSetTimeout = function () {
	      throw new Error('setTimeout is not defined');
	    }
	  }
	  try {
	    cachedClearTimeout = clearTimeout;
	  } catch (e) {
	    cachedClearTimeout = function () {
	      throw new Error('clearTimeout is not defined');
	    }
	  }
	} ())
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.go = exports.replaceLocation = exports.pushLocation = exports.startListener = exports.getUserConfirmation = exports.getCurrentLocation = undefined;

	var _LocationUtils = __webpack_require__(24);

	var _DOMUtils = __webpack_require__(28);

	var _DOMStateStorage = __webpack_require__(29);

	var _PathUtils = __webpack_require__(25);

	/* eslint-disable no-alert */


	var PopStateEvent = 'popstate';

	var _createLocation = function _createLocation(historyState) {
	  var key = historyState && historyState.key;

	  return (0, _LocationUtils.createLocation)({
	    pathname: window.location.pathname,
	    search: window.location.search,
	    hash: window.location.hash,
	    state: key ? (0, _DOMStateStorage.readState)(key) : undefined
	  }, undefined, key);
	};

	var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation() {
	  var historyState = void 0;
	  try {
	    historyState = window.history.state || {};
	  } catch (error) {
	    // IE 11 sometimes throws when accessing window.history.state
	    // See https://github.com/mjackson/history/pull/289
	    historyState = {};
	  }

	  return _createLocation(historyState);
	};

	var getUserConfirmation = exports.getUserConfirmation = function getUserConfirmation(message, callback) {
	  return callback(window.confirm(message));
	};

	var startListener = exports.startListener = function startListener(listener) {
	  var handlePopState = function handlePopState(event) {
	    if (event.state !== undefined) // Ignore extraneous popstate events in WebKit
	      listener(_createLocation(event.state));
	  };

	  (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

	  return function () {
	    return (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);
	  };
	};

	var updateLocation = function updateLocation(location, updateState) {
	  var state = location.state;
	  var key = location.key;


	  if (state !== undefined) (0, _DOMStateStorage.saveState)(key, state);

	  updateState({ key: key }, (0, _PathUtils.createPath)(location));
	};

	var pushLocation = exports.pushLocation = function pushLocation(location) {
	  return updateLocation(location, function (state, path) {
	    return window.history.pushState(state, null, path);
	  });
	};

	var replaceLocation = exports.replaceLocation = function replaceLocation(location) {
	  return updateLocation(location, function (state, path) {
	    return window.history.replaceState(state, null, path);
	  });
	};

	var go = exports.go = function go(n) {
	  if (n) window.history.go(n);
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.locationsAreEqual = exports.statesAreEqual = exports.createLocation = exports.createQuery = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(21);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _PathUtils = __webpack_require__(25);

	var _Actions = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createQuery = exports.createQuery = function createQuery(props) {
	  return _extends(Object.create(null), props);
	};

	var createLocation = exports.createLocation = function createLocation() {
	  var input = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
	  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	  var object = typeof input === 'string' ? (0, _PathUtils.parsePath)(input) : input;

	  var pathname = object.pathname || '/';
	  var search = object.search || '';
	  var hash = object.hash || '';
	  var state = object.state;

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash,
	    state: state,
	    action: action,
	    key: key
	  };
	};

	var isDate = function isDate(object) {
	  return Object.prototype.toString.call(object) === '[object Date]';
	};

	var statesAreEqual = exports.statesAreEqual = function statesAreEqual(a, b) {
	  if (a === b) return true;

	  var typeofA = typeof a === 'undefined' ? 'undefined' : _typeof(a);
	  var typeofB = typeof b === 'undefined' ? 'undefined' : _typeof(b);

	  if (typeofA !== typeofB) return false;

	  !(typeofA !== 'function') ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You must not store functions in location state') : (0, _invariant2.default)(false) : void 0;

	  // Not the same object, but same type.
	  if (typeofA === 'object') {
	    !!(isDate(a) && isDate(b)) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You must not store Date objects in location state') : (0, _invariant2.default)(false) : void 0;

	    if (!Array.isArray(a)) return Object.keys(a).every(function (key) {
	      return statesAreEqual(a[key], b[key]);
	    });

	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return statesAreEqual(item, b[index]);
	    });
	  }

	  // All other serializable types (string, number, boolean)
	  // should be strict equal.
	  return false;
	};

	var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
	  return a.key === b.key &&
	  // a.action === b.action && // Different action !== location change.
	  a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && statesAreEqual(a.state, b.state);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createPath = exports.parsePath = exports.getQueryStringValueFromPath = exports.stripQueryStringValueFromPath = exports.addQueryStringValueToPath = exports.isAbsolutePath = undefined;

	var _warning = __webpack_require__(26);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isAbsolutePath = exports.isAbsolutePath = function isAbsolutePath(path) {
	  return typeof path === 'string' && path.charAt(0) === '/';
	};

	var addQueryStringValueToPath = exports.addQueryStringValueToPath = function addQueryStringValueToPath(path, key, value) {
	  var _parsePath = parsePath(path);

	  var pathname = _parsePath.pathname;
	  var search = _parsePath.search;
	  var hash = _parsePath.hash;


	  return createPath({
	    pathname: pathname,
	    search: search + (search.indexOf('?') === -1 ? '?' : '&') + key + '=' + value,
	    hash: hash
	  });
	};

	var stripQueryStringValueFromPath = exports.stripQueryStringValueFromPath = function stripQueryStringValueFromPath(path, key) {
	  var _parsePath2 = parsePath(path);

	  var pathname = _parsePath2.pathname;
	  var search = _parsePath2.search;
	  var hash = _parsePath2.hash;


	  return createPath({
	    pathname: pathname,
	    search: search.replace(new RegExp('([?&])' + key + '=[a-zA-Z0-9]+(&?)'), function (match, prefix, suffix) {
	      return prefix === '?' ? prefix : suffix;
	    }),
	    hash: hash
	  });
	};

	var getQueryStringValueFromPath = exports.getQueryStringValueFromPath = function getQueryStringValueFromPath(path, key) {
	  var _parsePath3 = parsePath(path);

	  var search = _parsePath3.search;

	  var match = search.match(new RegExp('[?&]' + key + '=([a-zA-Z0-9]+)'));
	  return match && match[1];
	};

	var extractPath = function extractPath(string) {
	  var match = string.match(/^(https?:)?\/\/[^\/]*/);
	  return match == null ? string : string.substring(match[0].length);
	};

	var parsePath = exports.parsePath = function parsePath(path) {
	  var pathname = extractPath(path);
	  var search = '';
	  var hash = '';

	  process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(path === pathname, 'A path must be pathname + search + hash only, not a full URL like "%s"', path) : void 0;

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substring(hashIndex);
	    pathname = pathname.substring(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substring(searchIndex);
	    pathname = pathname.substring(0, searchIndex);
	  }

	  if (pathname === '') pathname = '/';

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash
	  };
	};

	var createPath = exports.createPath = function createPath(location) {
	  if (location == null || typeof location === 'string') return location;

	  var basename = location.basename;
	  var pathname = location.pathname;
	  var search = location.search;
	  var hash = location.hash;

	  var path = (basename || '') + pathname;

	  if (search && search !== '?') path += search;

	  if (hash) path += hash;

	  return path;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Indicates that navigation was caused by a call to history.push.
	 */
	var PUSH = exports.PUSH = 'PUSH';

	/**
	 * Indicates that navigation was caused by a call to history.replace.
	 */
	var REPLACE = exports.REPLACE = 'REPLACE';

	/**
	 * Indicates that navigation was caused by some other action such
	 * as using a browser's back/forward buttons and/or manually manipulating
	 * the URL in a browser's location bar. This is the default.
	 *
	 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	 * for more information.
	 */
	var POP = exports.POP = 'POP';

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
	  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
	};

	var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
	  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
	};

	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
	 */
	var supportsHistory = exports.supportsHistory = function supportsHistory() {
	  var ua = window.navigator.userAgent;

	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

	  return window.history && 'pushState' in window.history;
	};

	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */
	var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
	  return window.navigator.userAgent.indexOf('Firefox') === -1;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.readState = exports.saveState = undefined;

	var _warning = __webpack_require__(26);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var QuotaExceededErrors = ['QuotaExceededError', 'QUOTA_EXCEEDED_ERR']; /* eslint-disable no-empty */


	var SecurityError = 'SecurityError';
	var KeyPrefix = '@@History/';

	var createKey = function createKey(key) {
	  return KeyPrefix + key;
	};

	var saveState = exports.saveState = function saveState(key, state) {
	  if (!window.sessionStorage) {
	    // Session storage is not available or hidden.
	    // sessionStorage is undefined in Internet Explorer when served via file protocol.
	    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available') : void 0;
	    return;
	  }

	  try {
	    if (state == null) {
	      window.sessionStorage.removeItem(createKey(key));
	    } else {
	      window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
	    }
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available due to security settings') : void 0;

	      return;
	    }

	    if (QuotaExceededErrors.indexOf(error.name) >= 0 && window.sessionStorage.length === 0) {
	      // Safari "private mode" throws QuotaExceededError.
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : void 0;

	      return;
	    }

	    throw error;
	  }
	};

	var readState = exports.readState = function readState(key) {
	  var json = void 0;
	  try {
	    json = window.sessionStorage.getItem(createKey(key));
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to read state; sessionStorage is not available due to security settings') : void 0;

	      return undefined;
	    }
	  }

	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {
	      // Ignore invalid JSON.
	    }
	  }

	  return undefined;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.replaceLocation = exports.pushLocation = exports.getCurrentLocation = exports.go = exports.getUserConfirmation = undefined;

	var _BrowserProtocol = __webpack_require__(23);

	Object.defineProperty(exports, 'getUserConfirmation', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.getUserConfirmation;
	  }
	});
	Object.defineProperty(exports, 'go', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.go;
	  }
	});

	var _LocationUtils = __webpack_require__(24);

	var _PathUtils = __webpack_require__(25);

	var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation() {
	  return (0, _LocationUtils.createLocation)(window.location);
	};

	var pushLocation = exports.pushLocation = function pushLocation(location) {
	  window.location.href = (0, _PathUtils.createPath)(location);
	  return false; // Don't update location
	};

	var replaceLocation = exports.replaceLocation = function replaceLocation(location) {
	  window.location.replace((0, _PathUtils.createPath)(location));
	  return false; // Don't update location
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _AsyncUtils = __webpack_require__(32);

	var _PathUtils = __webpack_require__(25);

	var _runTransitionHook = __webpack_require__(33);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _Actions = __webpack_require__(27);

	var _LocationUtils = __webpack_require__(24);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var createHistory = function createHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var getCurrentLocation = options.getCurrentLocation;
	  var getUserConfirmation = options.getUserConfirmation;
	  var pushLocation = options.pushLocation;
	  var replaceLocation = options.replaceLocation;
	  var go = options.go;
	  var keyLength = options.keyLength;


	  var currentLocation = void 0;
	  var pendingLocation = void 0;
	  var beforeListeners = [];
	  var listeners = [];
	  var allKeys = [];

	  var getCurrentIndex = function getCurrentIndex() {
	    if (pendingLocation && pendingLocation.action === _Actions.POP) return allKeys.indexOf(pendingLocation.key);

	    if (currentLocation) return allKeys.indexOf(currentLocation.key);

	    return -1;
	  };

	  var updateLocation = function updateLocation(nextLocation) {
	    currentLocation = nextLocation;

	    var currentIndex = getCurrentIndex();

	    if (currentLocation.action === _Actions.PUSH) {
	      allKeys = [].concat(_toConsumableArray(allKeys.slice(0, currentIndex + 1)), [currentLocation.key]);
	    } else if (currentLocation.action === _Actions.REPLACE) {
	      allKeys[currentIndex] = currentLocation.key;
	    }

	    listeners.forEach(function (listener) {
	      return listener(currentLocation);
	    });
	  };

	  var listenBefore = function listenBefore(listener) {
	    beforeListeners.push(listener);

	    return function () {
	      return beforeListeners = beforeListeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  };

	  var listen = function listen(listener) {
	    listeners.push(listener);

	    return function () {
	      return listeners = listeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  };

	  var confirmTransitionTo = function confirmTransitionTo(location, callback) {
	    (0, _AsyncUtils.loopAsync)(beforeListeners.length, function (index, next, done) {
	      (0, _runTransitionHook2.default)(beforeListeners[index], location, function (result) {
	        return result != null ? done(result) : next();
	      });
	    }, function (message) {
	      if (getUserConfirmation && typeof message === 'string') {
	        getUserConfirmation(message, function (ok) {
	          return callback(ok !== false);
	        });
	      } else {
	        callback(message !== false);
	      }
	    });
	  };

	  var transitionTo = function transitionTo(nextLocation) {
	    if (currentLocation && (0, _LocationUtils.locationsAreEqual)(currentLocation, nextLocation) || pendingLocation && (0, _LocationUtils.locationsAreEqual)(pendingLocation, nextLocation)) return; // Nothing to do

	    pendingLocation = nextLocation;

	    confirmTransitionTo(nextLocation, function (ok) {
	      if (pendingLocation !== nextLocation) return; // Transition was interrupted during confirmation

	      pendingLocation = null;

	      if (ok) {
	        // Treat PUSH to same path like REPLACE to be consistent with browsers
	        if (nextLocation.action === _Actions.PUSH) {
	          var prevPath = (0, _PathUtils.createPath)(currentLocation);
	          var nextPath = (0, _PathUtils.createPath)(nextLocation);

	          if (nextPath === prevPath && (0, _LocationUtils.statesAreEqual)(currentLocation.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
	        }

	        if (nextLocation.action === _Actions.POP) {
	          updateLocation(nextLocation);
	        } else if (nextLocation.action === _Actions.PUSH) {
	          if (pushLocation(nextLocation) !== false) updateLocation(nextLocation);
	        } else if (nextLocation.action === _Actions.REPLACE) {
	          if (replaceLocation(nextLocation) !== false) updateLocation(nextLocation);
	        }
	      } else if (currentLocation && nextLocation.action === _Actions.POP) {
	        var prevIndex = allKeys.indexOf(currentLocation.key);
	        var nextIndex = allKeys.indexOf(nextLocation.key);

	        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL
	      }
	    });
	  };

	  var push = function push(input) {
	    return transitionTo(createLocation(input, _Actions.PUSH));
	  };

	  var replace = function replace(input) {
	    return transitionTo(createLocation(input, _Actions.REPLACE));
	  };

	  var goBack = function goBack() {
	    return go(-1);
	  };

	  var goForward = function goForward() {
	    return go(1);
	  };

	  var createKey = function createKey() {
	    return Math.random().toString(36).substr(2, keyLength || 6);
	  };

	  var createHref = function createHref(location) {
	    return (0, _PathUtils.createPath)(location);
	  };

	  var createLocation = function createLocation(location, action) {
	    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];
	    return (0, _LocationUtils.createLocation)(location, action, key);
	  };

	  return {
	    getCurrentLocation: getCurrentLocation,
	    listenBefore: listenBefore,
	    listen: listen,
	    transitionTo: transitionTo,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    createKey: createKey,
	    createPath: _PathUtils.createPath,
	    createHref: createHref,
	    createLocation: createLocation
	  };
	};

	exports.default = createHistory;

/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var loopAsync = exports.loopAsync = function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var isSync = false,
	      hasNext = false,
	      doneArgs = void 0;

	  var done = function done() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    isDone = true;

	    if (isSync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = args;
	      return;
	    }

	    callback.apply(undefined, args);
	  };

	  var next = function next() {
	    if (isDone) return;

	    hasNext = true;

	    if (isSync) return; // Iterate instead of recursing if possible.

	    isSync = true;

	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work(currentTurn++, next, done);
	    }

	    isSync = false;

	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(undefined, _toConsumableArray(doneArgs));
	      return;
	    }

	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  };

	  next();
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _warning = __webpack_require__(26);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var runTransitionHook = function runTransitionHook(hook, location, callback) {
	  var result = hook(location, callback);

	  if (hook.length < 2) {
	    // Assume the hook runs synchronously and automatically
	    // call the callback with the return value.
	    callback(result);
	  } else {
	    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(result === undefined, 'You should not "return" in a transition hook with a callback argument; ' + 'call the callback instead') : void 0;
	  }
	};

	exports.default = runTransitionHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _warning = __webpack_require__(26);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(21);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(22);

	var _DOMUtils = __webpack_require__(28);

	var _HashProtocol = __webpack_require__(35);

	var HashProtocol = _interopRequireWildcard(_HashProtocol);

	var _createHistory = __webpack_require__(31);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DefaultQueryKey = '_k';

	var createHashHistory = function createHashHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Hash history needs a DOM') : (0, _invariant2.default)(false) : void 0;

	  var queryKey = options.queryKey;


	  process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(queryKey !== false, 'Using { queryKey: false } no longer works. Instead, just don\'t ' + 'use location state if you don\'t want a key in your URL query string') : void 0;

	  if (typeof queryKey !== 'string') queryKey = DefaultQueryKey;

	  var getUserConfirmation = HashProtocol.getUserConfirmation;


	  var getCurrentLocation = function getCurrentLocation() {
	    return HashProtocol.getCurrentLocation(queryKey);
	  };

	  var pushLocation = function pushLocation(location) {
	    return HashProtocol.pushLocation(location, queryKey);
	  };

	  var replaceLocation = function replaceLocation(location) {
	    return HashProtocol.replaceLocation(location, queryKey);
	  };

	  var history = (0, _createHistory2.default)(_extends({
	    getUserConfirmation: getUserConfirmation }, options, {
	    getCurrentLocation: getCurrentLocation,
	    pushLocation: pushLocation,
	    replaceLocation: replaceLocation,
	    go: HashProtocol.go
	  }));

	  var listenerCount = 0,
	      stopListener = void 0;

	  var startListener = function startListener(listener, before) {
	    if (++listenerCount === 1) stopListener = HashProtocol.startListener(history.transitionTo, queryKey);

	    var unlisten = before ? history.listenBefore(listener) : history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopListener();
	    };
	  };

	  var listenBefore = function listenBefore(listener) {
	    return startListener(listener, true);
	  };

	  var listen = function listen(listener) {
	    return startListener(listener, false);
	  };

	  var goIsSupportedWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

	  var go = function go(n) {
	    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : void 0;

	    history.go(n);
	  };

	  var createHref = function createHref(path) {
	    return '#' + history.createHref(path);
	  };

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    go: go,
	    createHref: createHref
	  });
	};

	exports.default = createHashHistory;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.replaceLocation = exports.pushLocation = exports.startListener = exports.getCurrentLocation = exports.go = exports.getUserConfirmation = undefined;

	var _BrowserProtocol = __webpack_require__(23);

	Object.defineProperty(exports, 'getUserConfirmation', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.getUserConfirmation;
	  }
	});
	Object.defineProperty(exports, 'go', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.go;
	  }
	});

	var _warning = __webpack_require__(26);

	var _warning2 = _interopRequireDefault(_warning);

	var _LocationUtils = __webpack_require__(24);

	var _DOMUtils = __webpack_require__(28);

	var _DOMStateStorage = __webpack_require__(29);

	var _PathUtils = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HashChangeEvent = 'hashchange';

	var getHashPath = function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var index = href.indexOf('#');
	  return index === -1 ? '' : href.substring(index + 1);
	};

	var pushHashPath = function pushHashPath(path) {
	  return window.location.hash = path;
	};

	var replaceHashPath = function replaceHashPath(path) {
	  var i = window.location.href.indexOf('#');

	  window.location.replace(window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path);
	};

	var ensureSlash = function ensureSlash() {
	  var path = getHashPath();

	  if ((0, _PathUtils.isAbsolutePath)(path)) return true;

	  replaceHashPath('/' + path);

	  return false;
	};

	var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation(queryKey) {
	  var path = getHashPath();
	  var key = (0, _PathUtils.getQueryStringValueFromPath)(path, queryKey);

	  var state = void 0;
	  if (key) {
	    path = (0, _PathUtils.stripQueryStringValueFromPath)(path, queryKey);
	    state = (0, _DOMStateStorage.readState)(key);
	  }

	  var init = (0, _PathUtils.parsePath)(path);
	  init.state = state;

	  return (0, _LocationUtils.createLocation)(init, undefined, key);
	};

	var prevLocation = void 0;

	var startListener = exports.startListener = function startListener(listener, queryKey) {
	  var handleHashChange = function handleHashChange() {
	    if (!ensureSlash()) return; // Hash path must always begin with a /

	    var currentLocation = getCurrentLocation(queryKey);

	    if (prevLocation && currentLocation.key && prevLocation.key === currentLocation.key) return; // Ignore extraneous hashchange events

	    prevLocation = currentLocation;

	    listener(currentLocation);
	  };

	  ensureSlash();
	  (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);

	  return function () {
	    return (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
	  };
	};

	var updateLocation = function updateLocation(location, queryKey, updateHash) {
	  var state = location.state;
	  var key = location.key;

	  var path = (0, _PathUtils.createPath)(location);

	  if (state !== undefined) {
	    path = (0, _PathUtils.addQueryStringValueToPath)(path, queryKey, key);
	    (0, _DOMStateStorage.saveState)(key, state);
	  }

	  prevLocation = location;

	  updateHash(path);
	};

	var pushLocation = exports.pushLocation = function pushLocation(location, queryKey) {
	  return updateLocation(location, queryKey, function (path) {
	    if (getHashPath() !== path) {
	      pushHashPath(path);
	    } else {
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'You cannot PUSH the same path using hash history') : void 0;
	    }
	  });
	};

	var replaceLocation = exports.replaceLocation = function replaceLocation(location, queryKey) {
	  return updateLocation(location, queryKey, function (path) {
	    if (getHashPath() !== path) replaceHashPath(path);
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _queryString = __webpack_require__(37);

	var _runTransitionHook = __webpack_require__(33);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _LocationUtils = __webpack_require__(24);

	var _PathUtils = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultStringifyQuery = function defaultStringifyQuery(query) {
	  return (0, _queryString.stringify)(query).replace(/%20/g, '+');
	};

	var defaultParseQueryString = _queryString.parse;

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know how to handle URL queries.
	 */
	var useQueries = function useQueries(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var history = createHistory(options);
	    var stringifyQuery = options.stringifyQuery;
	    var parseQueryString = options.parseQueryString;


	    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

	    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

	    var decodeQuery = function decodeQuery(location) {
	      if (!location) return location;

	      if (location.query == null) location.query = parseQueryString(location.search.substring(1));

	      return location;
	    };

	    var encodeQuery = function encodeQuery(location, query) {
	      if (query == null) return location;

	      var object = typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : location;
	      var queryString = stringifyQuery(query);
	      var search = queryString ? '?' + queryString : '';

	      return _extends({}, object, {
	        search: search
	      });
	    };

	    // Override all read methods with query-aware versions.
	    var getCurrentLocation = function getCurrentLocation() {
	      return decodeQuery(history.getCurrentLocation());
	    };

	    var listenBefore = function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        return (0, _runTransitionHook2.default)(hook, decodeQuery(location), callback);
	      });
	    };

	    var listen = function listen(listener) {
	      return history.listen(function (location) {
	        return listener(decodeQuery(location));
	      });
	    };

	    // Override all write methods with query-aware versions.
	    var push = function push(location) {
	      return history.push(encodeQuery(location, location.query));
	    };

	    var replace = function replace(location) {
	      return history.replace(encodeQuery(location, location.query));
	    };

	    var createPath = function createPath(location) {
	      return history.createPath(encodeQuery(location, location.query));
	    };

	    var createHref = function createHref(location) {
	      return history.createHref(encodeQuery(location, location.query));
	    };

	    var createLocation = function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var newLocation = history.createLocation.apply(history, [encodeQuery(location, location.query)].concat(args));

	      if (location.query) newLocation.query = (0, _LocationUtils.createQuery)(location.query);

	      return decodeQuery(newLocation);
	    };

	    return _extends({}, history, {
	      getCurrentLocation: getCurrentLocation,
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation
	    });
	  };
	};

	exports.default = useQueries;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(38);
	var objectAssign = __webpack_require__(39);

	function encode(value, opts) {
		if (opts.encode) {
			return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
		}

		return value;
	}

	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};

	exports.parse = function (str) {
		// Create an object with no prototype
		// https://github.com/sindresorhus/query-string/issues/47
		var ret = Object.create(null);

		if (typeof str !== 'string') {
			return ret;
		}

		str = str.trim().replace(/^(\?|#|&)/, '');

		if (!str) {
			return ret;
		}

		str.split('&').forEach(function (param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;

			key = decodeURIComponent(key);

			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);

			if (ret[key] === undefined) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}
		});

		return ret;
	};

	exports.stringify = function (obj, opts) {
		var defaults = {
			encode: true,
			strict: true
		};

		opts = objectAssign(defaults, opts);

		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];

			if (val === undefined) {
				return '';
			}

			if (val === null) {
				return encode(key, opts);
			}

			if (Array.isArray(val)) {
				var result = [];

				val.slice().forEach(function (val2) {
					if (val2 === undefined) {
						return;
					}

					if (val2 === null) {
						result.push(encode(key, opts));
					} else {
						result.push(encode(key, opts) + '=' + encode(val2, opts));
					}
				});

				return result.join('&');
			}

			return encode(key, opts) + '=' + encode(val, opts);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(21);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _DOMUtils = __webpack_require__(28);

	var _ExecutionEnvironment = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var startListener = function startListener(getPromptMessage) {
	  var handleBeforeUnload = function handleBeforeUnload(event) {
	    var message = getPromptMessage();

	    if (typeof message === 'string') {
	      (event || window.event).returnValue = message;
	      return message;
	    }

	    return undefined;
	  };

	  (0, _DOMUtils.addEventListener)(window, 'beforeunload', handleBeforeUnload);

	  return function () {
	    return (0, _DOMUtils.removeEventListener)(window, 'beforeunload', handleBeforeUnload);
	  };
	};

	/**
	 * Returns a new createHistory function that can be used to create
	 * history objects that know how to use the beforeunload event in web
	 * browsers to cancel navigation.
	 */
	var useBeforeUnload = function useBeforeUnload(createHistory) {
	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'useBeforeUnload only works in DOM environments') : (0, _invariant2.default)(false) : void 0;

	  return function (options) {
	    var history = createHistory(options);

	    var listeners = [];
	    var stopListener = void 0;

	    var getPromptMessage = function getPromptMessage() {
	      var message = void 0;
	      for (var i = 0, len = listeners.length; message == null && i < len; ++i) {
	        message = listeners[i].call();
	      }return message;
	    };

	    var listenBeforeUnload = function listenBeforeUnload(listener) {
	      if (listeners.push(listener) === 1) stopListener = startListener(getPromptMessage);

	      return function () {
	        listeners = listeners.filter(function (item) {
	          return item !== listener;
	        });

	        if (listeners.length === 0 && stopListener) {
	          stopListener();
	          stopListener = null;
	        }
	      };
	    };

	    return _extends({}, history, {
	      listenBeforeUnload: listenBeforeUnload
	    });
	  };
	};

	exports.default = useBeforeUnload;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _runTransitionHook = __webpack_require__(33);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _PathUtils = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var useBasename = function useBasename(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var history = createHistory(options);
	    var basename = options.basename;


	    var addBasename = function addBasename(location) {
	      if (!location) return location;

	      if (basename && location.basename == null) {
	        if (location.pathname.indexOf(basename) === 0) {
	          location.pathname = location.pathname.substring(basename.length);
	          location.basename = basename;

	          if (location.pathname === '') location.pathname = '/';
	        } else {
	          location.basename = '';
	        }
	      }

	      return location;
	    };

	    var prependBasename = function prependBasename(location) {
	      if (!basename) return location;

	      var object = typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : location;
	      var pname = object.pathname;
	      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
	      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
	      var pathname = normalizedBasename + normalizedPathname;

	      return _extends({}, location, {
	        pathname: pathname
	      });
	    };

	    // Override all read methods with basename-aware versions.
	    var getCurrentLocation = function getCurrentLocation() {
	      return addBasename(history.getCurrentLocation());
	    };

	    var listenBefore = function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        return (0, _runTransitionHook2.default)(hook, addBasename(location), callback);
	      });
	    };

	    var listen = function listen(listener) {
	      return history.listen(function (location) {
	        return listener(addBasename(location));
	      });
	    };

	    // Override all write methods with basename-aware versions.
	    var push = function push(location) {
	      return history.push(prependBasename(location));
	    };

	    var replace = function replace(location) {
	      return history.replace(prependBasename(location));
	    };

	    var createPath = function createPath(location) {
	      return history.createPath(prependBasename(location));
	    };

	    var createHref = function createHref(location) {
	      return history.createHref(prependBasename(location));
	    };

	    var createLocation = function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
	    };

	    return _extends({}, history, {
	      getCurrentLocation: getCurrentLocation,
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation
	    });
	  };
	};

	exports.default = useBasename;

/***/ },
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ function(module, exports) {

	/**
	 * routes
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports['default'] = [{
		path: '/',
		controller: './home/controller'
	}, {
		path: '/home',
		controller: './home/controller'
	}, {
		path: '/list',
		controller: './list/controller'
	}, {
		path: '/detail',
		controller: './detail/controller'
	}, {
		path: '*',
		controller: './home/controller'
	}];
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports) {

	/**
	 * configuration
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports['default'] = {
		container: '#container',
		historySettings: {
			type: 'createHistory',
			// type: 'createHashHistory',
			basename: '/examples/simple-spa'
		}
	};
	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./config": 46,
		"./config.js": 46,
		"./detail/controller": 48,
		"./detail/controller.js": 48,
		"./home/controller": 50,
		"./home/controller.js": 50,
		"./list/controller": 52,
		"./list/controller.js": 52,
		"./routes": 45,
		"./routes.js": 45
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 47;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(cb) {
		__webpack_require__.e/* nsure */(2, function(require) {
			cb(__webpack_require__(49));
		});
	}

/***/ },
/* 49 */,
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(cb) {
		__webpack_require__.e/* nsure */(3, function(require) {
			cb(__webpack_require__(51));
		});
	}

/***/ },
/* 51 */,
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(cb) {
		__webpack_require__.e/* nsure */(4, function(require) {
			cb(__webpack_require__(53));
		});
	}

/***/ }
/******/ ]);