'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _shareUtil = require('../share/util');

var _ = _interopRequireWildcard(_shareUtil);

var DOMAttrStringify = {
    attach: renderDOMAttr
};

exports.DOMAttrStringify = DOMAttrStringify;
var StyleStringify = {
    attach: renderDOMStyle
};

exports.StyleStringify = StyleStringify;
function renderDOMAttr(elem, attrKey, attrValue) {
    _.addItem(elem.attrs, attrKey + '="' + attrValue + '"');
}

function renderDOMStyle(elem, styleKey, styleValue) {
    if (!_.isUnitlessNumber[styleName] && _.RE_NUMBER.test(styleValue)) {
        styleValue += 'px';
    } else if (styleValue == null || typeof styleValue === 'boolean') {
        styleValue = '';
    }
    if (styleValue) {
        _.addItem(elem.style, styleKey + ':' + styleValue + ';');
    }
}