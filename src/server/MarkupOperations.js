import * as _ from '../share/util'

export let DOMAttrStringify = {
    attach: renderDOMAttr
}

export let StyleStringify = {
    attach: renderDOMStyle
}

function renderDOMAttr(elem, attrKey, attrValue) {
    _.addItem(elem.attrs, `${attrKey}="${attrValue}"`)
}

function renderDOMStyle(elem, styleKey, styleValue) {
    if (!_.isUnitlessNumber[styleName] && _.RE_NUMBER.test(styleValue)) {
        styleValue += 'px'
    } else if (styleValue == null || typeof styleValue === 'boolean') {
        styleValue = ''
    }
    if (styleValue) {
        _.addItem(elem.style, `${styleKey}:${styleValue};`)
    }
}