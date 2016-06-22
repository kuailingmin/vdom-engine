'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.initVnode = initVnode;
exports.destroyVnode = destroyVnode;
exports.compareTwoVnodes = compareTwoVnodes;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _eventSystem = require('./event-system');

var _shareUtil = require('../share/util');

var _ = _interopRequireWildcard(_shareUtil);

var _shareDirective = require('../share/directive');

var _shareConstant = require('../share/constant');

function initVnode(vnode, context, namespaceURI) {
    var vtype = vnode.vtype;

    var node = null;
    if (!vtype) {
        // init text
        node = document.createTextNode(vnode);
    } else if (vtype === _shareConstant.VELEMENT) {
        // init element
        node = initVelem(vnode, context, namespaceURI);
    } else if (vtype === _shareConstant.VSTATELESS) {
        // init stateless component
        node = initVstateless(vnode, context, namespaceURI);
    } else if (vtype === _shareConstant.VCOMMENT) {
        // init comment
        node = document.createComment('react-empty: ' + vnode.uid);
    }
    return node;
}

function updateVnode(vnode, newVnode, node, context) {
    var vtype = vnode.vtype;

    if (vtype === _shareConstant.VSTATELESS) {
        return updateVstateless(vnode, newVnode, node, context);
    }

    // ignore VCOMMENT and other vtypes
    if (vtype !== _shareConstant.VELEMENT) {
        return node;
    }

    if (vnode.props[_shareConstant.HTML_KEY] != null) {
        updateVelem(vnode, newVnode, node, context);
        initVchildren(newVnode, node, context);
    } else {
        updateVChildren(vnode, newVnode, node, context);
        updateVelem(vnode, newVnode, node, context);
    }
    return node;
}

function updateVChildren(vnode, newVnode, node, context) {
    var patches = {
        removes: [],
        updates: [],
        creates: []
    };
    // console.time('time')
    diffVchildren(patches, vnode, newVnode, node, context);

    _.flatEach(patches.removes, applyDestroy);

    _.flatEach(patches.updates, applyUpdate);

    _.flatEach(patches.creates, applyCreate);
    // console.timeEnd('time')
}

function applyUpdate(data) {
    if (!data) {
        return;
    }
    var node = data.node;

    // update
    if (data.shouldUpdate) {
        var vnode = data.vnode;
        var newVnode = data.newVnode;
        var context = data.context;

        if (!vnode.vtype) {
            node.nodeValue = newVnode;
        } else if (vnode.vtype === _shareConstant.VELEMENT) {
            updateVelem(vnode, newVnode, node, context);
        } else if (vnode.vtype === _shareConstant.VSTATELESS) {
            node = updateVstateless(vnode, newVnode, node, context);
        }
    }

    // re-order
    if (data.index !== data.fromIndex) {
        var existNode = node.parentNode.childNodes[index];
        if (existNode !== node) {
            node.parentNode.insertBefore(node, existNode);
        }
    }
}

function applyDestroy(data) {
    destroyVnode(data.vnode, data.node);
    data.node.parentNode.removeChild(data.node);
}

function applyCreate(data) {
    var parentNode = data.parentNode;
    var existNode = parentNode.childNodes[data.index];
    var node = initVnode(data.vnode, data.context, parentNode.namespaceURI);
    parentNode.insertBefore(node, existNode);
}

/**
 * Only vnode which has props.children need to call destroy function
 * to check whether subTree has component that need to call lify-cycle method and release cache.
 */

function destroyVnode(vnode, node) {
    var vtype = vnode.vtype;

    if (vtype === _shareConstant.VELEMENT) {
        // destroy element
        destroyVelem(vnode, node);
    } else if (vtype === _shareConstant.VSTATELESS) {
        // destroy stateless component
        destroyVstateless(vnode, node);
    }
}

function initVelem(velem, context, namespaceURI) {
    var type = velem.type;
    var props = velem.props;

    var node = null;

    if (type === 'svg' || namespaceURI === _shareConstant.SVGNamespaceURI) {
        node = document.createElementNS(_shareConstant.SVGNamespaceURI, type);
        namespaceURI = _shareConstant.SVGNamespaceURI;
    } else {
        node = document.createElement(type);
    }

    initVchildren(node, props.children, context);
    (0, _shareDirective.attachProps)(node, props);

    if (props[_shareConstant.HOOK_WILL_MOUNT]) {
        props[_shareConstant.HOOK_WILL_MOUNT].call(null, node, props);
    }

    if (props[_shareConstant.HOOK_DID_MOUNT]) {
        _.addItem(pendingHooks, {
            type: _shareConstant.HOOK_DID_MOUNT,
            node: node,
            props: props
        });
    }

    return node;
}

function initVchildren(node, vchildren, context) {
    var namespaceURI = node.namespaceURI;

    for (var i = 0, len = vchildren.length; i < len; i++) {
        node.appendChild(initVnode(vchildren[i], context, namespaceURI));
    }
}

function diffVchildren(patches, vnode, newVnode, node, context) {
    var childNodes = node.childNodes;

    var vchildren = vnode.props.children;
    var newVchildren = newVnode.props.children;
    var vchildrenLen = vchildren.length;
    var newVchildrenLen = newVchildren.length;

    if (vchildrenLen === 0) {
        if (newVchildrenLen === 0) {
            return;
        }
        for (var i = 0; i < newVchildrenLen; i++) {
            _.addItem(patches.creates, {
                vnode: newVchildren[i],
                parentNode: node,
                context: context,
                index: i
            });
        }
        return;
    } else if (newVchildrenLen === 0) {
        for (var i = 0; i < vchildrenLen; i++) {
            _.addItem(patches.removes, {
                vnode: vchildren[i],
                node: childNodes[i]
            });
        }
        return;
    }

    var matches = {};
    var updates = Array(newVchildrenLen);
    var removes = null;
    var creates = null;

    // isEqual
    for (var i = 0; i < vchildrenLen; i++) {
        var _vnode = vchildren[i];
        for (var j = 0; j < newVchildrenLen; j++) {
            if (updates[j]) {
                continue;
            }
            var _newVnode = newVchildren[j];
            if (_vnode === _newVnode) {
                var shouldUpdate = false;
                if (context) {
                    if (_vnode.vtype === _shareConstant.VSTATELESS) {
                        /**
                         * stateless component: (props, context) => <div />
                         * if context argument is specified and context is exist, should re-render
                         */
                        if (_vnode.type.length > 1) {
                            shouldUpdate = true;
                        }
                    }
                }
                updates[j] = {
                    shouldUpdate: shouldUpdate,
                    vnode: _vnode,
                    newVnode: _newVnode,
                    node: childNodes[i],
                    context: context,
                    index: j,
                    fromIndex: i
                };
                matches[i] = true;
                break;
            }
        }
    }

    // isSimilar
    for (var i = 0; i < vchildrenLen; i++) {
        if (matches[i]) {
            continue;
        }
        var _vnode2 = vchildren[i];
        var shouldRemove = true;
        for (var j = 0; j < newVchildrenLen; j++) {
            if (updates[j]) {
                continue;
            }
            var _newVnode2 = newVchildren[j];
            if (_newVnode2.type === _vnode2.type && _newVnode2.key === _vnode2.key) {
                updates[j] = {
                    shouldUpdate: true,
                    vnode: _vnode2,
                    newVnode: _newVnode2,
                    node: childNodes[i],
                    context: context,
                    index: j,
                    fromIndex: i
                };
                shouldRemove = false;
                break;
            }
        }
        if (shouldRemove) {
            if (!removes) {
                removes = [];
            }
            _.addItem(removes, {
                vnode: _vnode2,
                node: childNodes[i]
            });
        }
    }

    for (var i = 0; i < newVchildrenLen; i++) {
        var item = updates[i];
        if (!item) {
            if (!creates) {
                creates = [];
            }
            _.addItem(creates, {
                vnode: newVchildren[i],
                parentNode: node,
                context: context,
                index: i
            });
        } else if (item.vnode.vtype === _shareConstant.VELEMENT) {
            diffVchildren(patches, item.vnode, item.newVnode, item.node, item.context);
        }
    }

    if (removes) {
        _.addItem(patches.removes, removes);
    }
    if (creates) {
        _.addItem(patches.creates, creates);
    }
    _.addItem(patches.updates, updates);
}

function updateVelem(velem, newVelem, node) {
    var newProps = newVelem.props;
    if (newProps[_shareConstant.HOOK_WILL_UPDATE]) {
        newProps[_shareConstant.HOOK_WILL_UPDATE].call(null, node, newProps);
    }
    (0, _shareDirective.patchProps)(node, velem.props, newProps);
    if (newProps[_shareConstant.HOOK_DID_UPDATE]) {
        newProps[_shareConstant.HOOK_DID_UPDATE].call(null, node, newProps);
    }
    return node;
}

function destroyVelem(velem, node) {
    var props = velem.props;

    var vchildren = props.children;
    var childNodes = node.childNodes;

    for (var i = 0, len = vchildren.length; i < len; i++) {
        destroyVnode(vchildren[i], childNodes[i]);
    }

    if (_.isFn(props[_shareConstant.HOOK_WILL_UNMOUNT])) {
        props[_shareConstant.HOOK_WILL_UNMOUNT].call(null, node, props);
    }

    (0, _eventSystem.detachEvents)(node, props);
}

function initVstateless(vstateless, context, namespaceURI) {
    var vnode = _.renderVstateless(vstateless, context);
    var node = initVnode(vnode, context, namespaceURI);
    node.cache = node.cache || {};
    node.cache[vstateless.uid] = vnode;
    return node;
}

function updateVstateless(vstateless, newVstateless, node, context) {
    var uid = vstateless.uid;
    var vnode = node.cache[uid];
    delete node.cache[uid];
    var newVnode = _.renderVstateless(newVstateless, context);
    var newNode = compareTwoVnodes(vnode, newVnode, node, context);
    newNode.cache = newNode.cache || {};
    newNode.cache[newVstateless.uid] = newVnode;
    if (newNode !== node) {
        _.extend(newNode.cache, node.cache);
    }
    return newNode;
}

function destroyVstateless(vstateless, node) {
    var uid = vstateless.uid;
    var vnode = node.cache[uid];
    delete node.cache[uid];
    destroyVnode(vnode, node);
}

var pendingHooks = [];
var clearPendingMount = function clearPendingMount() {
    var len = pendingHooks.length;
    if (!len) {
        return;
    }
    var list = pendingHooks;
    var i = -1;
    while (len--) {
        var item = list[++i];
        item.props[item.type].call(null, item.node, item.props);
    }
    pendingHooks.length = 0;
};

exports.clearPendingMount = clearPendingMount;

function compareTwoVnodes(vnode, newVnode, node, context) {
    var newNode = node;
    if (newVnode == null) {
        // remove
        destroyVnode(vnode, node);
        node.parentNode.removeChild(node);
    } else if (vnode.type !== newVnode.type || vnode.key !== newVnode.key) {
        // replace
        destroyVnode(vnode, node);
        newNode = initVnode(newVnode, context, node.namespaceURI);
        node.parentNode.replaceChild(newNode, node);
    } else if (vnode !== newVnode || context) {
        // same type and same key -> update
        newNode = updateVnode(vnode, newVnode, node, context);
    }
    return newNode;
}