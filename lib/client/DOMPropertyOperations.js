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