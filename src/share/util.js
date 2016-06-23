// util

export let emptyList = []

export function isFn(obj) {
    return typeof obj === 'function'
}

export function isThenable(obj) {
    return obj != null && isFn(obj.then)
}

export function invoke(fn) {
    return fn()
}

export function createCollection(accessor, handler) {
    return Object.keys(accessor).reduce((collection, key) => {
        collection[key] = handler.bind(null, key)
        return collection
    }, {})
}

export let isArr = Array.isArray

export function noop() {}
export function identity(obj) {
    return obj
}

export function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  const last = funcs[funcs.length - 1]
  const rest = funcs.slice(0, -1)
  return (...args) => rest.reduceRight((composed, f) => f(composed), last(...args))
}

export function pipe(fn1, fn2) {
    return function() {
        fn1.apply(this, arguments)
        return fn2.apply(this, arguments)
    }
}

export function flatEach(list, iteratee, a) {
    let len = list.length
    let i = -1

    while (len--) {
        let item = list[++i]
        if (isArr(item)) {
            flatEach(item, iteratee, a)
        } else {
            iteratee(item, a)
        }
    }
}

export function addItem(list, item) {
    list[list.length] = item
}


export function extend(to, from) {
    if (!from) {
        return to
    }
    var keys = Object.keys(from)
    var i = keys.length
    while (i--) {
        to[keys[i]] = from[keys[i]]
    }
    return to
}


let uid = 0
export function getUid() {
    return ++uid
}


/**
 * CSS properties which accept numbers but are not in units of "px".
 */
export const isUnitlessNumber = {
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
    strokeWidth: 1,
}

function prefixKey(prefix, key) {
    return prefix + key.charAt(0).toUpperCase() + key.substring(1)
}

let prefixes = ['Webkit', 'ms', 'Moz', 'O']

Object.keys(isUnitlessNumber).forEach(function(prop) {
    prefixes.forEach(function(prefix) {
        isUnitlessNumber[prefixKey(prefix, prop)] = 1
    })
})

export let RE_NUMBER = /^-?\d+(\.\d+)?$/

export function renderVstateless(vstateless, context) {
    let { type: factory, props } = vstateless
    let vnode = factory(props, context)
    if (vnode && vnode.render) {
        vnode = vnode.render()
    }
    if (vnode === null || vnode === false) {
        vnode = {
            vtype: VCOMMENT,
            uid: _.getUid(),
        }
    } else if (!vnode || !vnode.vtype) {
        throw new Error(`@${factory.name}#render:You may have returned undefined, an array or some other invalid object`)
    }
    return vnode
}

if (!Object.freeze) {
    Object.freeze = identity
}