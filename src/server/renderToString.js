import * as _ from '../share/util'
import { attachProps, addDirective } from '../share/directive'
import { DOMAttrStringify, StyleStringify } from './MarkupOperations'
import {
    VELEMENT,
    VSTATELESS,
} from '../share/constant'

export default function renderToString(vnode, context) {
    addDirective('attr', DOMAttrStringify)
    addDirective('css', StyleStringify)
    return renderVnodeToString(vnode, context)
}

function renderVnodeToString(vnode, context) {
    let { vtype } = vnode
    let node = ''
    if (!vtype) {
        node = vnode
    } else if (vtype === VELEMENT) {
        node = renderVelemToString(vnode, context)
    } else if (vtype === VSTATELESS) {
        node = renderVstatelessToString(vnode, context)
    }
    return node
}

const selfClosingTags = {
    area: 1,
    base: 1,
    br: 1,
    col: 1,
    command: 1,
    embed: 1,
    hr: 1,
    img: 1,
    input: 1,
    keygen: 1,
    link: 1,
    meta: 1,
    param: 1,
    source: 1,
    track: 1,
    wbr: 1,
}

function renderVelemToString(velem, context) {
    let elem = {
        tagName: velem.type,
        children: velem.props.children,
        attrs: [],
        style: [],
    }
    attachProps(elem, velem.props)
    return renderElem(elem)
}

function renderElem(elem, context) {
    let { tagName, attrs, style, children } = elem
    let domAttrString = getDOMAttrString(elem)
    let isSelfClosingTag = selfClosingTags[tagName]
    return isSelfClosingTag ?
    `<${tagName}${domAttrString} />` :
    `<${tagName}${domAttrString}>${renderVchildrenToString(children, context)}</${tagName}>`
}

function renderVchildrenToString(vchildren, context) {
    let children = []
    for (let i = 0, len = vchildren.length; i < len; i++) {
        _.addItem(children, renderVnodeToString(vchildren[i], context))
    }
    return children.join('')
}

function renderVstatelessToString(vstateless, context) {
    let vnode = _.renderVstateless(vstateless, context)
    let node = renderVnodeToString(vnode, context)
    return node
}

function getDOMAttrString(elem) {
    let { attrs, style } = elem
    if (style.length) {
        _.addItem(attrs, `style="${style.join('')}"`)
    }
    if (attrs.length) {
        return ` ${attrs.join(' ')}`
    }
    return ''
}