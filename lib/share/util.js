// util

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.isFn = isFn;
exports.noop = noop;
exports.identity = identity;
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

var isArr = Array.isArray;

exports.isArr = isArr;

function noop() {}

function identity(obj) {
    return obj;
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