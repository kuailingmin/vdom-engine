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