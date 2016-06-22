'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createElement = require('./createElement');

var _directive = require('./directive');

var Share = {
	h: _createElement.createElement,
	createElement: _createElement.createElement,
	createFactory: _createElement.createFactory,
	isValidElement: _createElement.isValidElement,
	addDirective: _directive.addDirective,
	removeDirective: _directive.removeDirective
};

exports['default'] = Share;
module.exports = exports['default'];