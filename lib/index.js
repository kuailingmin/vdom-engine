'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _shareUtil = require('./share/util');

var _ = _interopRequireWildcard(_shareUtil);

var _shareIndex = require('./share/index');

var _shareIndex2 = _interopRequireDefault(_shareIndex);

var _clientIndex = require('./client/index');

var _clientIndex2 = _interopRequireDefault(_clientIndex);

var _serverIndex = require('./server/index');

var _serverIndex2 = _interopRequireDefault(_serverIndex);

var VdomEngine = {};
_.extend(VdomEngine, _shareIndex2['default']);
_.extend(VdomEngine, _clientIndex2['default']);
_.extend(VdomEngine, _serverIndex2['default']);

exports['default'] = VdomEngine;
module.exports = exports['default'];