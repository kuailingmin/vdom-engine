'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.renderToString = renderToString;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _shareUtil = require('../share/util');

var _ = _interopRequireWildcard(_shareUtil);

var _shareDirective = require('../share/directive');

var _MarkupOperations = require('./MarkupOperations');

var _shareConstant = require('../share/constant');

function renderToString(vnode, context) {
    (0, _shareDirective.addDirective)('attr', _MarkupOperations.DOMAttrStringify);
    (0, _shareDirective.addDirective)('css', _MarkupOperations.StyleStringify);
    return renderVnodeToString(vnode, context);
}

function renderVnodeToString(vnode, context) {
    var vtype = vnode.vtype;

    var node = '';
    if (!vtype) {
        node = vnode;
    } else if (vtype === _shareConstant.VELEMENT) {
        node = renderVelemToString(vnode, context);
    } else if (vtype === _shareConstant.VSTATELESS) {
        node = renderVstatelessToString(vnode, context);
    }
    return node;
}

var selfClosingTags = {
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
    wbr: 1
};

function renderVelemToString(velem, context) {
    var elem = {
        tagName: velem.type,
        children: velem.props.children,
        attrs: [],
        style: []
    };
    (0, _shareDirective.attachProps)(elem, velem.props);
    return renderElem(elem);
}

function renderElem(elem, context) {
    var tagName = elem.tagName;
    var attrs = elem.attrs;
    var style = elem.style;
    var children = elem.children;

    var domAttrString = getDOMAttrString(elem);
    var isSelfClosingTag = selfClosingTags[tagName];
    return isSelfClosingTag ? '<' + tagName + domAttrString + ' />' : '<' + tagName + domAttrString + '>' + renderVchildrenToString(children, context) + '</' + tagName + '>';
}

function renderVchildrenToString(vchildren, context) {
    var children = [];
    for (var i = 0, len = vchildren.length; i < len; i++) {
        _.addItem(children, renderVnodeToString(vchildren[i], context));
    }
    return children.join('');
}

function renderVstatelessToString(vstateless, context) {
    var vnode = _.renderVstateless(vstateless, context);
    var node = renderVnodeToString(vnode, context);
    return node;
}

function getDOMAttrString(elem) {
    var attrs = elem.attrs;
    var style = elem.style;

    if (style.length) {
        _.addItem(attrs, 'style="' + style.join('') + '"');
    }
    if (attrs.length) {
        return ' ' + attrs.join(' ');
    }
    return '';
}