/**
 * CSS Property Operations
 */

export let styleDirective = {
    test: 'style',
    attach: attachStyle,
    detach: detachStyle,
    patch: patchStyle
}

function attachStyle(elemStyle, styles) {
    for (let styleName in styles) {
        setStyleValue(elemStyle, styleName, styles[styleName])
    }
}

function detachStyle(elemStyle, styles) {
    for (let styleName in styles) {
        elemStyle[styleName] = ''
    }
}

function patchStyle(elemStyle, style, newStyle) {
    if (style === newStyle) {
        return
    }
    if (!newStyle && style) {
        detachStyle(elemStyle, style)
        return
    } else if (newStyle && !style) {
        attachStyle(elemStyle, newStyle)
        return
    }

    let keyMap = {}
    for (let key in style) {
        keyMap[key] = true
        if (style[key] !== newStyle[key]) {
            setStyleValue(elemStyle, key, newStyle[key])
        }
    }
    for (let key in newStyle) {
        if (keyMap[key] !== true) {
            if (style[key] !== newStyle[key]) {
                setStyleValue(elemStyle, key, newStyle[key])
            }
        }
    }
}


/**
 * CSS properties which accept numbers but are not in units of "px".
 */
const isUnitlessNumber = {
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

let RE_NUMBER = /^-?\d+(\.\d+)?$/
function setStyleValue(elemStyle, styleName, styleValue) {

    if (!isUnitlessNumber[styleName] && RE_NUMBER.test(styleValue)) {
        elemStyle[styleName] = styleValue + 'px'
        return
    }

    if (styleName === 'float') {
        styleName = 'cssFloat'
    }

    if (styleValue == null || typeof styleValue === 'boolean') {
        styleValue = ''
    }

    elemStyle[styleName] = styleValue
}