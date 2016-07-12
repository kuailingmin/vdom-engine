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

	var _vdomEngineShare = __webpack_require__(1);

	var _vdomEngineShare2 = _interopRequireDefault(_vdomEngineShare);

	var _vdomEngineClient = __webpack_require__(14);

	var _vdomEngineClient2 = _interopRequireDefault(_vdomEngineClient);

	var _CounterUI = __webpack_require__(21);

	var _CounterUI2 = _interopRequireDefault(_CounterUI);

	var _store = __webpack_require__(22);

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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createElement = __webpack_require__(2);

	var _directive = __webpack_require__(5);

	var _createMatcher = __webpack_require__(6);

	var _createMatcher2 = _interopRequireDefault(_createMatcher);

	var _createStore = __webpack_require__(12);

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
	                var action = route.action;
	                return { params: params, action: action };
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
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
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

	var _createLogger = __webpack_require__(13);

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
/* 13 */
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// placeholder
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _render = __webpack_require__(15);

	var _App = __webpack_require__(20);

	var _App2 = _interopRequireDefault(_App);

	var Client = {
		App: _App2['default'],
		render: _render.render,
		destroy: _render.destroy
	};

	exports['default'] = Client;
	module.exports = exports['default'];

/***/ },
/* 15 */
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

	var _DOMPropertyOperations = __webpack_require__(16);

	var _CSSPropertyOperations = __webpack_require__(17);

	var _eventSystem = __webpack_require__(18);

	var _virtualDom = __webpack_require__(19);

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
/* 16 */
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
/* 17 */
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
/* 18 */
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.initVnode = initVnode;
	exports.destroyVnode = destroyVnode;
	exports.compareTwoVnodes = compareTwoVnodes;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _eventSystem = __webpack_require__(18);

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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _shareUtil = __webpack_require__(4);

	var _ = _interopRequireWildcard(_shareUtil);

	var _shareConstant = __webpack_require__(3);

	var _shareCreateMatcher = __webpack_require__(6);

	var _shareCreateMatcher2 = _interopRequireDefault(_shareCreateMatcher);

	var App = (function () {
		function App(options) {
			_classCallCheck(this, App);

			_.extend(this, options);
			this.state = {
				pathname: '/',
				search: ''
			};
			this.controller = null;
			this.matcher = (0, _shareCreateMatcher2['default'])(this.routes);
			this.goTo = this.goTo.bind(this);
			this.handleEvent = this.handleEvent.bind(this);
			this.createController = this.createController.bind(this);
			this.actions = {
				goTo: this.goTo.bind(this),
				go: this.go.bind(this),
				back: this.back.bind(this),
				forward: this.forward.bind(this)
			};
			this.hashPrefix = this.hashPrefix || '';
			this.rootPath = this.rootPath || '';
		}

		_createClass(App, [{
			key: 'renderToDOM',
			value: function renderToDOM() {}
		}, {
			key: 'unmountComponentAtNode',
			value: function unmountComponentAtNode() {}
		}, {
			key: 'start',
			value: function start() {
				this.bindEvent();
				this.handleEvent();
			}
		}, {
			key: 'stop',
			value: function stop() {
				this.unbindEvent();
			}
		}, {
			key: 'getContainer',
			value: function getContainer() {
				var container = this.container;

				if (typeof container === 'string') {
					return document.querySelector(container);
				} else {
					return container;
				}
			}
		}, {
			key: 'renderToContainer',
			value: function renderToContainer(component) {
				var container = this.getContainer();
				this.viewEngine.render(component, container);
			}
		}, {
			key: 'createController',
			value: function createController(Controller) {
				var controller = new Controller(this.state, this.actions);
				this.initController(controller);
			}
		}, {
			key: 'initController',
			value: function initController(controller) {
				controller.init && controller.init(this.state, this.actions);
				var component = controller.render();
				this.controller = controller;
				this.renderToContainer(component);
			}
		}, {
			key: 'updateController',
			value: function updateController(controller) {
				controller.update && controller.update(this.state, this.actions);
				var component = controller.render();
				this.renderToContainer(component);
			}
		}, {
			key: 'destroyController',
			value: function destroyController(controller) {
				controller.destroy && controller.destroy(this.state, this.actions);
				var container = this.getContainer();
				this.viewEngine.destroy(container);
			}
		}, {
			key: 'handleEvent',
			value: function handleEvent() {
				var prevState = this.state;
				var curState = this.getState();

				if (this.controller) {
					if (prevState.pathname === curState.pathname) {
						this.updateController(this.controller);
					} else {
						this.destroyController(this.controller);
						this.controller = null;
					}
				}

				var loader = this.loader;
				var matcher = this.matcher;
				var createController = this.createController;

				var Controller = matcher(curState);

				// handle module url and load Controller
				if (typeof Controller === 'string') {
					loader(Controller, createController);
					return;
				}

				// handle factory function which return a Controller
				if (_.isFn(Controller) && (!Controller.prototype || !Controller.prototype.init)) {
					Controller = Controller(curState);
				}

				// handle thenable object which will resolve a Controller
				if (_.isThenable(Controller)) {
					Controller.then(createController);
					return;
				}

				createController(Controller);
			}
		}, {
			key: 'getState',
			value: function getState() {
				var state = this.state = {};
				if (this.pushState) {
					var rootPath = this.rootPath;

					state.pathname = location.pathname.substr(rootPath.length);
					state.search = location.search;
				} else {
					var hashPrefix = this.hashPrefix;

					var hash = location.hash.substr(hashPrefix ? hashPrefix.length + 1 : 1);
					if (!hash) {
						hash = '/';
						location.hash = '' + hashPrefix + hash;
					}
					var index = hash.indexOf('?');
					if (index === -1) {
						state.pathname = hash;
						state.search = '';
					} else {
						state.pathname = hash.substr(0, index);
						state.search = hash.substr(index);
					}
				}
				return state;
			}
		}, {
			key: 'goTo',
			value: function goTo(url, isReplace) {
				var pushState = this.pushState;
				var state = this.state;

				if (state.pathname === url) {
					return;
				}
				if (pushState) {
					var rootPath = this.rootPath;

					if (isReplace) {
						history.replaceState(null, '', '' + rootPath + url);
					} else {
						history.pushState(null, '', '' + rootPath + url);
					}
					this.handleEvent();
					return;
				}
				var hashPrefix = this.hashPrefix;

				location.hash = hashPrefix + url;
			}
		}, {
			key: 'back',
			value: function back() {
				history.back();
			}
		}, {
			key: 'forward',
			value: function forward() {
				history.forward();
			}
		}, {
			key: 'go',
			value: function go() {
				history.go();
			}
		}, {
			key: 'bindEvent',
			value: function bindEvent() {
				var pushState = this.pushState;
				var handleEvent = this.handleEvent;

				if (pushState === false) {
					window.addEventListener('hashchange', handleEvent);
				} else {
					window.addEventListener('popstate', handleEvent);
				}
			}
		}, {
			key: 'unbindEvent',
			value: function unbindEvent() {
				var pushState = this.pushState;
				var handleEvent = this.handleEvent;

				if (pushState === false) {
					window.removeEventListener('hashchange', handleEvent);
				} else {
					window.removeEventListener('popstate', handleEvent);
				}
			}
		}]);

		return App;
	})();

	exports['default'] = App;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports['default'] = CounterUI;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _vdomEngineShare = __webpack_require__(1);

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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _vdomEngineShare = __webpack_require__(1);

	var _setter = __webpack_require__(23);

	var setter = _interopRequireWildcard(_setter);

	var initialState = {
		count: 10
	};
	var settings = {
		name: 'counter',
		setter: setter,
		initialState: initialState
	};
	var store = (0, _vdomEngineShare.createStore)(settings);

	exports['default'] = store;
	module.exports = exports['default'];

/***/ },
/* 23 */
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

/***/ }
/******/ ]);