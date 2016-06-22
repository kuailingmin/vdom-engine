// directive store
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.addDirective = addDirective;
exports.removeDirective = removeDirective;
exports.matchDirective = matchDirective;
exports.attachProp = attachProp;
exports.detachProp = detachProp;
exports.attachProps = attachProps;
exports.patchProps = patchProps;
var directives = {};
var DIRECTIVE_SPEC = /^([^-]+)-(.+)$/;

function addDirective(name, configs) {
    directives[name] = configs;
}

function removeDirective(name) {
    delete directives[name];
}

var currentName = null;

function matchDirective(propKey) {
    var matches = propKey.match(DIRECTIVE_SPEC);
    if (matches) {
        currentName = matches[2];
        return directives[matches[1]];
    }
}

function attachProp(elem, propKey, propValue) {
    var directive = matchDirective(propKey);
    if (directive) {
        directive.attach(elem, currentName, propValue);
    }
}

function detachProp(elem, propKey) {
    var directive = matchDirective(propKey);
    if (directive) {
        directive.detach(elem, currentName);
    }
}

function attachProps(elem, props) {
    for (var propKey in props) {
        if (propKey !== 'children' && props[propKey] != null) {
            attachProp(elem, propKey, props[propKey]);
        }
    }
}

function patchProps(elem, props, newProps) {
    for (var propKey in props) {
        if (propKey === 'children') {
            continue;
        }
        var newValue = newProps[propKey];
        if (newValue !== props[propKey]) {
            if (newValue == null) {
                detachProp(elem, propKey);
            } else {
                attachProp(elem, propKey, newValue);
            }
        }
    }
    for (var propKey in newProps) {
        if (propKey === 'children') {
            continue;
        }
        if (!(propKey in props)) {
            attachProp(elem, propKey, newProps[propKey]);
        }
    }
}