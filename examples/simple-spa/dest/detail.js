webpackJsonp([2],{

/***/ 49:
/***/ function(module, exports, __webpack_require__) {

	// controller
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _srcShare = __webpack_require__(1);

	var _srcShare2 = _interopRequireDefault(_srcShare);

	var Controller = (function () {
		function Controller(context) {
			_classCallCheck(this, Controller);

			console.log('receive context', context);
			this.willMount = this.willMount.bind(this);
			this.didMount = this.didMount.bind(this);
			this.willUpdate = this.willUpdate.bind(this);
			this.didUpdate = this.didUpdate.bind(this);
			this.willUnmount = this.willUnmount.bind(this);
			this.jump = this.jump.bind(this);
		}

		_createClass(Controller, [{
			key: 'init',
			value: function init($location) {
				this.$location = $location;
				console.log('init', $location);
				return this.render();
			}
		}, {
			key: 'update',
			value: function update($location) {
				console.log('update', $location);
			}
		}, {
			key: 'destroy',
			value: function destroy($location) {
				console.log('destroy', $location);
			}
		}, {
			key: 'render',
			value: function render() {
				return _srcShare2['default'].createElement(
					'div',
					{
						'hook-willMount': this.willMount,
						'hook-didMount': this.didMount,
						'hook-willUpdate': this.willUpdate,
						'hook-didUpdate': this.didUpdate,
						'hook-willUnmount': this.willUnmount
					},
					_srcShare2['default'].createElement(
						'h1',
						null,
						'list: ',
						JSON.stringify(this.$location, null, 2)
					),
					_srcShare2['default'].createElement(
						'ul',
						null,
						_srcShare2['default'].createElement(
							'li',
							null,
							_srcShare2['default'].createElement(
								'a',
								{ 'attr-href': '/home', 'on-click': this.jump },
								'home page'
							)
						),
						_srcShare2['default'].createElement(
							'li',
							null,
							_srcShare2['default'].createElement(
								'a',
								{ 'attr-href': '/list', 'on-click': this.jump },
								'list page'
							)
						),
						_srcShare2['default'].createElement(
							'li',
							null,
							_srcShare2['default'].createElement(
								'a',
								{ 'attr-href': '/detail', 'on-click': this.jump },
								'detail page'
							)
						)
					)
				);
			}
		}, {
			key: 'jump',
			value: function jump(event) {
				event.preventDefault();
				var _event$currentTarget = event.currentTarget;
				var pathname = _event$currentTarget.pathname;
				var search = _event$currentTarget.search;

				console.log('jump');
				this.goTo({
					pathname: pathname,
					search: search,
					state: {
						name: 'detail'
					}
				});
			}
		}, {
			key: 'willMount',
			value: function willMount() {
				console.log('willMount');
			}
		}, {
			key: 'didMount',
			value: function didMount() {
				console.log('didMount');
			}
		}, {
			key: 'willUpdate',
			value: function willUpdate() {
				console.log('willUpdate');
			}
		}, {
			key: 'didUpdate',
			value: function didUpdate() {
				console.log('didUpdate');
			}
		}, {
			key: 'willUnmount',
			value: function willUnmount() {
				console.log('willUnmount');
			}
		}]);

		return Controller;
	})();

	exports['default'] = Controller;
	module.exports = exports['default'];

/***/ }

});