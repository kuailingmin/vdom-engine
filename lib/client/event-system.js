'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.detachEvents = detachEvents;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _shareUtil = require('../share/util');

var _ = _interopRequireWildcard(_shareUtil);

// event config
var notBubbleEvents = {
	onmouseleave: 1,
	onmouseenter: 1,
	onload: 1,
	onunload: 1,
	onscroll: 1,
	onfocus: 1,
	onblur: 1,
	onrowexit: 1,
	onbeforeunload: 1,
	onstop: 1,
	ondragdrop: 1,
	ondragenter: 1,
	ondragexit: 1,
	ondraggesture: 1,
	ondragover: 1,
	oncontextmenu: 1
};

function detachEvents(node, props) {
	node.eventStore = null;
	for (var key in props) {
		// key start with 'on-'
		if (key.indexOf('on-') === 0) {
			key = getEventName(key);
			if (notBubbleEvents[key]) {
				node[key] = null;
			}
		}
	}
}

var eventDirective = {
	attach: attachEvent,
	detach: detachEvent
};

exports.eventDirective = eventDirective;
// Mobile Safari does not fire properly bubble click events on
// non-interactive elements, which means delegated click listeners do not
// fire. The workaround for this bug involves attaching an empty click
// listener on the target node.
var inMobile = ('ontouchstart' in document);
var emptyFunction = function emptyFunction() {};
var ON_CLICK_KEY = 'onclick';

function getEventName(key) {
	return key.replace(/^on-/, 'on').toLowerCase();
}

var eventTypes = {};
function attachEvent(elem, eventType, listener) {
	eventType = 'on' + eventType;

	if (notBubbleEvents[eventType] === 1) {
		elem[eventType] = listener;
		return;
	}

	var eventStore = elem.eventStore || (elem.eventStore = {});
	eventStore[eventType] = listener;

	if (!eventTypes[eventType]) {
		// onclick -> click
		document.addEventListener(eventType.substr(2), dispatchEvent, false);
		eventTypes[eventType] = true;
	}

	if (inMobile && eventType === ON_CLICK_KEY) {
		elem.addEventListener('click', emptyFunction, false);
	}

	var nodeName = elem.nodeName;

	if (eventType === 'onchange' && (nodeName === 'INPUT' || nodeName === 'TEXTAREA')) {
		attachEvent(elem, 'oninput', listener);
	}
}

function detachEvent(elem, eventType) {
	eventType = 'on' + eventType;
	if (notBubbleEvents[eventType] === 1) {
		elem[eventType] = null;
		return;
	}

	var eventStore = elem.eventStore || (elem.eventStore = {});
	delete eventStore[eventType];

	if (inMobile && eventType === ON_CLICK_KEY) {
		elem.removeEventListener('click', emptyFunction, false);
	}

	var nodeName = elem.nodeName;

	if (eventType === 'onchange' && (nodeName === 'INPUT' || nodeName === 'TEXTAREA')) {
		delete eventStore['oninput'];
	}
}

function dispatchEvent(event) {
	var target = event.target;
	var type = event.type;

	var eventType = 'on' + type;
	var syntheticEvent = null;
	while (target) {
		var _target = target;
		var eventStore = _target.eventStore;

		var listener = eventStore && eventStore[eventType];
		if (!listener) {
			target = target.parentNode;
			continue;
		}
		if (!syntheticEvent) {
			syntheticEvent = createSyntheticEvent(event);
		}
		syntheticEvent.currentTarget = target;
		listener.call(target, syntheticEvent);
		if (syntheticEvent.$cancalBubble) {
			break;
		}
		target = target.parentNode;
	}
}

function createSyntheticEvent(nativeEvent) {
	var syntheticEvent = {};
	var cancalBubble = function cancalBubble() {
		return syntheticEvent.$cancalBubble = true;
	};
	syntheticEvent.nativeEvent = nativeEvent;
	syntheticEvent.persist = _.noop;
	for (var key in nativeEvent) {
		if (typeof nativeEvent[key] !== 'function') {
			syntheticEvent[key] = nativeEvent[key];
		} else if (key === 'stopPropagation' || key === 'stopImmediatePropagation') {
			syntheticEvent[key] = cancalBubble;
		} else {
			syntheticEvent[key] = nativeEvent[key].bind(nativeEvent);
		}
	}
	return syntheticEvent;
}