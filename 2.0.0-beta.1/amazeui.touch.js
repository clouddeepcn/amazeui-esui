document.addEventListener("DOMContentLoaded", function(event) {
/** Amaze UI Touch v2.0.0-beta.1 | by Amaze UI Team
  * (c) 2017 AllMobilize, Inc., Licensed under MIT
  * 2017-09-19T14:54:42+0800
  */
  (function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["AMUI2"] = factory(require("react"), require("react-dom"));
	else
		root["AMUI2"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_12__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fallback = exports.ButtonAction = exports.View = exports.Tree = exports.Touchable = exports.TodoItemTypeTwo = exports.TodoItemTypeOne = exports.Title = exports.Tabs = exports.Table = exports.TabBar = exports.Switch = exports.Slider = exports.SelectableButton = exports.Select = exports.PopoverTrigger = exports.Popover = exports.Pair = exports.OffCanvasTrigger = exports.OffCanvas = exports.Notification = exports.NavBar = exports.Modal = exports.Loader = exports.List = exports.Icon = exports.Field = exports.FaIcon = exports.Divide = exports.Choose = exports.CollapseCard = exports.Card = exports.ButtonGroup = exports.ButtonContainer = exports.ButtonBubble = exports.Button = exports.Badge = exports.Accordion = exports.Group = exports.Col = exports.Grid = exports.Container = exports.VERSION = undefined;

	var _mixins = __webpack_require__(1);

	Object.keys(_mixins).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _mixins[key];
	    }
	  });
	});

	var _Container2 = __webpack_require__(14);

	var _Container3 = _interopRequireDefault(_Container2);

	var _Grid2 = __webpack_require__(15);

	var _Grid3 = _interopRequireDefault(_Grid2);

	var _Col2 = __webpack_require__(16);

	var _Col3 = _interopRequireDefault(_Col2);

	var _Group2 = __webpack_require__(18);

	var _Group3 = _interopRequireDefault(_Group2);

	var _Accordion2 = __webpack_require__(19);

	var _Accordion3 = _interopRequireDefault(_Accordion2);

	var _Badge2 = __webpack_require__(21);

	var _Badge3 = _interopRequireDefault(_Badge2);

	var _Button2 = __webpack_require__(22);

	var _Button3 = _interopRequireDefault(_Button2);

	var _ButtonBubble2 = __webpack_require__(23);

	var _ButtonBubble3 = _interopRequireDefault(_ButtonBubble2);

	var _ButtonContainer2 = __webpack_require__(24);

	var _ButtonContainer3 = _interopRequireDefault(_ButtonContainer2);

	var _ButtonGroup2 = __webpack_require__(25);

	var _ButtonGroup3 = _interopRequireDefault(_ButtonGroup2);

	var _Card2 = __webpack_require__(26);

	var _Card3 = _interopRequireDefault(_Card2);

	var _CollapseCard2 = __webpack_require__(27);

	var _CollapseCard3 = _interopRequireDefault(_CollapseCard2);

	var _Choose2 = __webpack_require__(28);

	var _Choose3 = _interopRequireDefault(_Choose2);

	var _Divide2 = __webpack_require__(30);

	var _Divide3 = _interopRequireDefault(_Divide2);

	var _FaIcon2 = __webpack_require__(32);

	var _FaIcon3 = _interopRequireDefault(_FaIcon2);

	var _Field2 = __webpack_require__(33);

	var _Field3 = _interopRequireDefault(_Field2);

	var _Icon2 = __webpack_require__(20);

	var _Icon3 = _interopRequireDefault(_Icon2);

	var _List2 = __webpack_require__(35);

	var _List3 = _interopRequireDefault(_List2);

	var _Loader2 = __webpack_require__(36);

	var _Loader3 = _interopRequireDefault(_Loader2);

	var _Modal2 = __webpack_require__(37);

	var _Modal3 = _interopRequireDefault(_Modal2);

	var _NavBar2 = __webpack_require__(42);

	var _NavBar3 = _interopRequireDefault(_NavBar2);

	var _Notification2 = __webpack_require__(43);

	var _Notification3 = _interopRequireDefault(_Notification2);

	var _OffCanvas2 = __webpack_require__(44);

	var _OffCanvas3 = _interopRequireDefault(_OffCanvas2);

	var _OffCanvasTrigger2 = __webpack_require__(45);

	var _OffCanvasTrigger3 = _interopRequireDefault(_OffCanvasTrigger2);

	var _Pair2 = __webpack_require__(47);

	var _Pair3 = _interopRequireDefault(_Pair2);

	var _Popover2 = __webpack_require__(48);

	var _Popover3 = _interopRequireDefault(_Popover2);

	var _PopoverTrigger2 = __webpack_require__(49);

	var _PopoverTrigger3 = _interopRequireDefault(_PopoverTrigger2);

	var _Select2 = __webpack_require__(51);

	var _Select3 = _interopRequireDefault(_Select2);

	var _SelectableButton2 = __webpack_require__(29);

	var _SelectableButton3 = _interopRequireDefault(_SelectableButton2);

	var _Slider2 = __webpack_require__(52);

	var _Slider3 = _interopRequireDefault(_Slider2);

	var _Switch2 = __webpack_require__(34);

	var _Switch3 = _interopRequireDefault(_Switch2);

	var _TabBar2 = __webpack_require__(56);

	var _TabBar3 = _interopRequireDefault(_TabBar2);

	var _Table2 = __webpack_require__(57);

	var _Table3 = _interopRequireDefault(_Table2);

	var _Tabs2 = __webpack_require__(58);

	var _Tabs3 = _interopRequireDefault(_Tabs2);

	var _Title2 = __webpack_require__(60);

	var _Title3 = _interopRequireDefault(_Title2);

	var _TodoItemTypeOne2 = __webpack_require__(61);

	var _TodoItemTypeOne3 = _interopRequireDefault(_TodoItemTypeOne2);

	var _TodoItemTypeTwo2 = __webpack_require__(62);

	var _TodoItemTypeTwo3 = _interopRequireDefault(_TodoItemTypeTwo2);

	var _Touchable2 = __webpack_require__(53);

	var _Touchable3 = _interopRequireDefault(_Touchable2);

	var _Tree2 = __webpack_require__(63);

	var _Tree3 = _interopRequireDefault(_Tree2);

	var _View2 = __webpack_require__(41);

	var _View3 = _interopRequireDefault(_View2);

	var _ButtonAction2 = __webpack_require__(79);

	var _ButtonAction3 = _interopRequireDefault(_ButtonAction2);

	var _fallback2 = __webpack_require__(80);

	var _fallback3 = _interopRequireDefault(_fallback2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// @see http://jamesknelson.com/re-exporting-es6-modules/
	// @see http://exploringjs.com/es6/ch_modules.html#sec_all-exporting-styles

	var VERSION = exports.VERSION = '2.0.0-beta.1';

	// Layout
	exports.Container = _Container3.default;
	exports.Grid = _Grid3.default;
	exports.Col = _Col3.default;
	exports.Group = _Group3.default;

	// Components

	exports.Accordion = _Accordion3.default;
	exports.Badge = _Badge3.default;
	exports.Button = _Button3.default;
	exports.ButtonBubble = _ButtonBubble3.default;
	exports.ButtonContainer = _ButtonContainer3.default;
	exports.ButtonGroup = _ButtonGroup3.default;
	exports.Card = _Card3.default;
	exports.CollapseCard = _CollapseCard3.default;
	exports.Choose = _Choose3.default;
	exports.Divide = _Divide3.default;
	exports.FaIcon = _FaIcon3.default;
	exports.Field = _Field3.default;
	exports.Icon = _Icon3.default;
	exports.List = _List3.default;
	exports.Loader = _Loader3.default;
	exports.Modal = _Modal3.default;
	exports.NavBar = _NavBar3.default;
	exports.Notification = _Notification3.default;
	exports.OffCanvas = _OffCanvas3.default;
	exports.OffCanvasTrigger = _OffCanvasTrigger3.default;
	exports.Pair = _Pair3.default;
	exports.Popover = _Popover3.default;
	exports.PopoverTrigger = _PopoverTrigger3.default;
	exports.Select = _Select3.default;
	exports.SelectableButton = _SelectableButton3.default;
	exports.Slider = _Slider3.default;
	exports.Switch = _Switch3.default;
	exports.TabBar = _TabBar3.default;
	exports.Table = _Table3.default;
	exports.Tabs = _Tabs3.default;
	exports.Title = _Title3.default;
	exports.TodoItemTypeOne = _TodoItemTypeOne3.default;
	exports.TodoItemTypeTwo = _TodoItemTypeTwo3.default;
	exports.Touchable = _Touchable3.default;
	exports.Tree = _Tree3.default;
	exports.View = _View3.default;
	exports.ButtonAction = _ButtonAction3.default;
	// export InputBox from './InputBox';
	// export Info from './Info';
	// export InputGroup from './InputGroup';
	// export CheckBoxGroup from './CheckBoxGroup';
	// export CheckBox from './CheckBox';
	// export RadioGroup from './RadioGroup';
	// export Radio from './Radio';


	// Mixins


	// Compatibility fallback

	exports.fallback = _fallback3.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TouchableMixin = exports.OverlayMixin = exports.CollapseMixin = exports.ClassNameMixin = exports.BackdropMixin = undefined;

	var _BackdropMixin2 = __webpack_require__(2);

	var _BackdropMixin3 = _interopRequireDefault(_BackdropMixin2);

	var _ClassNameMixin2 = __webpack_require__(5);

	var _ClassNameMixin3 = _interopRequireDefault(_ClassNameMixin2);

	var _CollapseMixin2 = __webpack_require__(7);

	var _CollapseMixin3 = _interopRequireDefault(_CollapseMixin2);

	var _OverlayMixin2 = __webpack_require__(11);

	var _OverlayMixin3 = _interopRequireDefault(_OverlayMixin2);

	var _TouchableMixin2 = __webpack_require__(13);

	var _TouchableMixin3 = _interopRequireDefault(_TouchableMixin2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.BackdropMixin = _BackdropMixin3.default;
	exports.ClassNameMixin = _ClassNameMixin3.default;
	exports.CollapseMixin = _CollapseMixin3.default;
	exports.OverlayMixin = _OverlayMixin3.default;
	exports.TouchableMixin = _TouchableMixin3.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	exports.default = {
	  renderBackdrop: function renderBackdrop(children) {
	    var _classSet;

	    var onClick = this.handleBackdropClick || null;
	    var classSet = (_classSet = {}, _defineProperty(_classSet, this.setClassNS('modal-backdrop'), true), _defineProperty(_classSet, this.setClassNS('modal-backdrop-out'), this.props.isClosing), _classSet);

	    return _react2.default.createElement(
	      'span',
	      null,
	      children,
	      _react2.default.createElement('div', {
	        onClick: onClick,
	        ref: 'backdrop',
	        className: (0, _classnames2.default)(classSet)
	      })
	    );
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _config = __webpack_require__(6);

	var namespace = _config.NAMESPACE ? _config.NAMESPACE + '-' : '';

	var ClassNameMixin = {
	  setClassNS: function setClassNS(classPrefix) {
	    var prefix = classPrefix || this.props.classPrefix || '';

	    return namespace + prefix;
	  },
	  getClassSet: function getClassSet(ignorePrefix) {
	    var classNames = {};
	    var _props = this.props,
	        amSize = _props.amSize,
	        amStyle = _props.amStyle,
	        hollow = _props.hollow,
	        radius = _props.radius,
	        square = _props.square,
	        rounded = _props.rounded,
	        active = _props.active,
	        selected = _props.selected,
	        disabled = _props.disabled,
	        inset = _props.inset,
	        right = _props.right;

	    // uses `.am-` as prefix if `classPrefix` is not defined

	    var prefix = namespace;

	    if (this.props.classPrefix) {
	      var classPrefix = this.setClassNS();

	      prefix = classPrefix + '-';

	      // don't return prefix if ignore flag set
	      !ignorePrefix && (classNames[classPrefix] = true);
	    }

	    if (amSize) {
	      classNames[prefix + amSize] = true;
	    }

	    if (amStyle) {
	      classNames[prefix + amStyle] = true;
	    }

	    if (hollow) {
	      classNames[prefix + 'hollow'] = true;
	    }

	    classNames[this.prefixClass('square')] = square;
	    classNames[this.prefixClass('radius')] = radius;
	    classNames[this.prefixClass('rounded')] = rounded;
	    classNames[this.prefixClass('align-right')] = right;

	    classNames[this.prefixClass('inset')] = inset;

	    // state className
	    // `selected` is an alias of active
	    classNames[_config.CLASSNAMES['active']] = active || selected;
	    classNames[_config.CLASSNAMES['disabled']] = disabled;

	    // shape
	    // classNames[constants.CLASSES.radius] = this.props.radius;
	    // classNames[constants.CLASSES.round] = this.props.round;

	    return classNames;
	  },
	  prefixClass: function prefixClass(subClass) {
	    return this.setClassNS() + '-' + subClass;
	  }
	};

	exports.default = ClassNameMixin;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var NAMESPACE = exports.NAMESPACE = 'am2'; // 'am'
	var CLASSNAMES = exports.CLASSNAMES = {
	  disabled: 'am2-disabled',
	  active: 'am2-active'
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _TransitionEvents = __webpack_require__(8);

	var _TransitionEvents2 = _interopRequireDefault(_TransitionEvents);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * modified version of:
	 * https://github.com/react-bootstrap/react-bootstrap/blob/master/src/CollapsibleMixin.js
	 */

	var CollapseMixin = {
	  propTypes: {
	    defaultExpanded: _react2.default.PropTypes.bool,
	    expanded: _react2.default.PropTypes.bool
	  },

	  getInitialState: function getInitialState() {
	    var defaultExpanded = this.props.defaultExpanded != null ? this.props.defaultExpanded : this.props.expanded != null ? this.props.expanded : false;

	    return {
	      expanded: defaultExpanded,
	      collapsing: false
	    };
	  },
	  componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
	    var willExpanded = nextProps.expanded != null ? nextProps.expanded : nextState.expanded;

	    if (willExpanded === this.isExpanded()) {
	      return;
	    }

	    // if the expanded state is being toggled, ensure node has a dimension value
	    // this is needed for the animation to work and needs to be set before
	    // the collapsing class is applied (after collapsing is applied the in class
	    // is removed and the node's dimension will be wrong)

	    var node = this.getCollapsibleDOMNode();
	    var dimension = this.dimension();
	    var value = '0';

	    if (!willExpanded) {
	      // get height
	      value = this.getCollapsibleDimensionValue();
	    }

	    node.style[dimension] = value + 'px';

	    this._afterWillUpdate();
	  },
	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    // check if expanded is being toggled; if so, set collapsing
	    this._checkToggleCollapsing(prevProps, prevState);

	    // check if collapsing was turned on; if so, start animation
	    this._checkStartAnimation();
	  },


	  // helps enable test stubs
	  _afterWillUpdate: function _afterWillUpdate() {},
	  _checkStartAnimation: function _checkStartAnimation() {
	    if (!this.state.collapsing) {
	      return;
	    }

	    var node = this.getCollapsibleDOMNode();
	    var dimension = this.dimension();
	    var value = this.getCollapsibleDimensionValue();

	    // setting the dimension here starts the transition animation
	    var result;

	    if (this.isExpanded()) {
	      result = value + 'px';
	    } else {
	      result = '0px';
	    }
	    node.style[dimension] = result;
	  },
	  _checkToggleCollapsing: function _checkToggleCollapsing(prevProps, prevState) {
	    var wasExpanded = prevProps.expanded != null ? prevProps.expanded : prevState.expanded;
	    var isExpanded = this.isExpanded();

	    if (wasExpanded !== isExpanded) {
	      if (wasExpanded) {
	        this._handleCollapse();
	      } else {
	        this._handleExpand();
	      }
	    }
	  },
	  _handleExpand: function _handleExpand() {
	    var node = this.getCollapsibleDOMNode();
	    var dimension = this.dimension();

	    var complete = function () {
	      this._removeEndEventListener(node, complete);
	      // remove dimension value - this ensures the collapsible item can grow
	      // in dimension after initial display (such as an image loading)
	      node.style[dimension] = '';
	      this.setState({
	        collapsing: false
	      });
	    }.bind(this);

	    this._addEndEventListener(node, complete);

	    this.setState({
	      collapsing: true
	    });
	  },
	  _handleCollapse: function _handleCollapse() {
	    var node = this.getCollapsibleDOMNode();
	    var _this = this;
	    var complete = function complete() {
	      _this._removeEndEventListener(node, complete);
	      _this.setState({
	        collapsing: false
	      });
	    };

	    this._addEndEventListener(node, complete);

	    this.setState({
	      collapsing: true
	    });
	  },


	  // helps enable test stubs
	  _addEndEventListener: function _addEndEventListener(node, complete) {
	    _TransitionEvents2.default.on(node, complete);
	  },


	  // helps enable test stubs
	  _removeEndEventListener: function _removeEndEventListener(node, complete) {
	    _TransitionEvents2.default.off(node, complete);
	  },
	  dimension: function dimension() {
	    return typeof this.getCollapsibleDimension === 'function' ? this.getCollapsibleDimension() : 'height';
	  },
	  isExpanded: function isExpanded() {
	    return this.props.expanded != null ? this.props.expanded : this.state.expanded;
	  },
	  getCollapsibleClassSet: function getCollapsibleClassSet(className) {
	    var classSet = {};

	    if (typeof className === 'string') {
	      className.split(' ').forEach(function (subClass) {
	        if (subClass) {
	          classSet[subClass] = true;
	        }
	      });
	    }

	    classSet[this.setClassNS('collapsing')] = this.state.collapsing;
	    classSet[this.setClassNS('collapse')] = !this.state.collapsing;
	    classSet[this.setClassNS('in')] = this.isExpanded() && !this.state.collapsing;

	    return classSet;
	  }
	};

	exports.default = CollapseMixin;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _CSSCore = __webpack_require__(9);

	var _CSSCore2 = _interopRequireDefault(_CSSCore);

	var _exenv = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * EVENT_NAME_MAP is used to determine which event fired when a
	 * transition/animation ends, based on the style property used to
	 * define that event.
	 */
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * modified version of:
	 * https://github.com/facebook/react/blob/0.13-stable/src/addons/transitions/ReactTransitionEvents.js
	 */

	var EVENT_NAME_MAP = {
	  transitionend: {
	    'transition': 'transitionend',
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'mozTransitionEnd',
	    'OTransition': 'oTransitionEnd',
	    'msTransition': 'MSTransitionEnd'
	  },

	  animationend: {
	    'animation': 'animationend',
	    'WebkitAnimation': 'webkitAnimationEnd',
	    'MozAnimation': 'mozAnimationEnd',
	    'OAnimation': 'oAnimationEnd',
	    'msAnimation': 'MSAnimationEnd'
	  }
	};

	var endEvents = [];
	var support = {};

	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;

	  // On some platforms, in particular some releases of Android 4.x,
	  // the un-prefixed "animation" and "transition" properties are defined on the
	  // style object but the events that fire will still be prefixed, so we need
	  // to check if the un-prefixed events are useable, and if not remove them
	  // from the map
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }

	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }

	  for (var baseEventName in EVENT_NAME_MAP) {
	    var baseEvents = EVENT_NAME_MAP[baseEventName];
	    support[baseEventName] = false;

	    for (var styleName in baseEvents) {
	      if (styleName in style) {
	        support[baseEventName] = baseEvents[styleName];
	        endEvents.push(baseEvents[styleName]);
	        break;
	      }
	    }
	  }
	}

	if (_exenv.canUseDOM) {
	  detectEvents();
	}

	if (support.animationend) {
	  _CSSCore2.default.addClass(document.documentElement, 'cssanimations');
	}

	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.

	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}

	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}

	var TransitionEvents = {
	  on: function on(node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	  off: function off(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  },


	  support: support
	};

	exports.default = TransitionEvents;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @via https://github.com/facebook/react/blob/master/src/vendor/core/CSSCore.js
	 */

	var CSSCore = {

	  /**
	   * Adds the class passed in to the element if it doesn't already have it.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   * @see http://caniuse.com/#feat=classlist
	   */
	  addClass: function addClass(element, className) {
	    if (className) {
	      if (element.classList) {
	        element.classList.add(className);
	      } else if (!CSSCore.hasClass(element, className)) {
	        element.className = element.className + ' ' + className;
	      }
	    }
	    return element;
	  },


	  /**
	   * Removes the class passed in from the element
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  removeClass: function removeClass(element, className) {
	    if (className) {
	      if (element.classList) {
	        element.classList.remove(className);
	      } else if (CSSCore.hasClass(element, className)) {
	        element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ') // multiple spaces to one
	        .replace(/^\s*|\s*$/g, ''); // trim the ends
	      }
	    }
	    return element;
	  },


	  /**
	   * Helper to add or remove a class from an element based on a condition.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @param {*} bool condition to whether to add or remove the class
	   * @return {DOMElement} the element passed in
	   */
	  conditionClass: function conditionClass(element, className, bool) {
	    return (bool ? CSSCore.addClass : CSSCore.removeClass)(element, className);
	  },


	  /**
	   * Tests whether the element has the class specified.
	   *
	   * @param {DOMNode|DOMWindow} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {boolean} true if the element has the class, false if not
	   */
	  hasClass: function hasClass(element, className) {
	    if (element.classList) {
	      return !!className && element.classList.contains(className);
	    }
	    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
	  },
	  toggleClass: function toggleClass(element, className) {
	    return CSSCore.hasClass(element, className) ? CSSCore.removeClass(element, className) : CSSCore.addClass(element, className);
	  }
	};

	exports.default = CSSCore;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @licence https://github.com/JedWatson/exenv
	 */

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	var ExecutionEnvironment = {
	  canUseDOM: canUseDOM,
	  canUseWorkers: typeof Worker !== 'undefined',
	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
	  canUseViewport: canUseDOM && !!window.screen
	};

	exports.default = ExecutionEnvironment;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Overlay Mixin
	 *
	 * @desc `overlay` is something like Popover, OffCavans, etc.
	 */

	exports.default = {
	  propTypes: {
	    container: _react2.default.PropTypes.node
	  },

	  componentDidMount: function componentDidMount() {
	    this._renderOverlay();
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    this._renderOverlay();
	  },


	  // Remove Overlay related DOM node
	  componentWillUnmount: function componentWillUnmount() {
	    this._unmountOverlay();

	    if (this._node) {
	      this.getContainerDOMNode().removeChild(this._node);
	      this._node = null;
	    }
	  },


	  // Create Overlay wrapper
	  _createPortal: function _createPortal() {
	    this._node = document.createElement('div');
	    this._node.className = '__overlay-portal';
	    this.getContainerDOMNode().appendChild(this._node);
	  },


	  // Render Overlay to wrapper
	  _renderOverlay: function _renderOverlay() {
	    if (!this._node) {
	      this._createPortal();
	    }

	    var overlay = this.renderOverlay();

	    if (overlay !== null) {
	      this._overlayInstance = (0, _reactDom.unstable_renderSubtreeIntoContainer)(this, overlay, this._node);
	    } else {
	      // Unmount if the component is null for transitions to null
	      this._unmountOverlay();
	    }
	  },


	  // Remove a mounted Overlay from wrapper
	  _unmountOverlay: function _unmountOverlay() {
	    (0, _reactDom.unmountComponentAtNode)(this._node);
	    this._overlayInstance = null;
	  },
	  getOverlayDOMNode: function getOverlayDOMNode() {
	    if (!this.isMounted()) {
	      throw new Error('getOverlayDOMNode(): A component must be mounted to\n        have a DOM node.');
	    }

	    if (this._overlayInstance) {
	      // 包含 backdrop 时通过 refer 返回 overlay DOM 节点
	      return (0, _reactDom.findDOMNode)(this._overlayInstance.refs && this._overlayInstance.refs.overlay || this._overlayInstance);
	    }

	    return null;
	  },
	  getContainerDOMNode: function getContainerDOMNode() {
	    return (0, _reactDom.findDOMNode)(this.props.container) || document.body;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TouchableMixin = {
	  propTypes: {
	    moveThreshold: _react.PropTypes.number,
	    tapDelay: _react.PropTypes.number,
	    pressDelay: _react.PropTypes.number,
	    preventDefault: _react.PropTypes.bool,
	    stopPropagation: _react.PropTypes.bool,

	    onSwipe: _react.PropTypes.func,
	    onSwipeLeft: _react.PropTypes.func,
	    onSwipeUp: _react.PropTypes.func,
	    onSwipeRight: _react.PropTypes.func,
	    onSwipeDown: _react.PropTypes.func,
	    onTap: _react.PropTypes.func,
	    onSingleTap: _react.PropTypes.func,
	    onDoubleTap: _react.PropTypes.func,
	    onPress: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      moveThreshold: 30,
	      tapDelay: 250,
	      pressDelay: 750,
	      preventDefault: true
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      startTouch: null,
	      endTouch: null,
	      touch: {},
	      deltaX: 0,
	      deltaY: 0
	    };
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this._cancelAll();
	  },
	  handleTouchStart: function handleTouchStart(e) {
	    // console.log('handle touchstart');
	    this.processEvent(e);

	    if (!e.touches) {
	      return;
	    }

	    var touch = this.state.touch;
	    var startTouch = e.touches[0];

	    if (e.touches.length === 1 && touch.x2) {
	      // Clear out touch movement data if we have it sticking around
	      // This can occur if touchcancel doesn't fire due to preventDefault, etc.
	      touch.x2 = undefined;
	      touch.y2 = undefined;
	    }

	    var now = Date.now();
	    var delta = now - (touch.last || now);

	    this._touchTimeout && clearTimeout(this._touchTimeout);

	    touch.x1 = startTouch.pageX;
	    touch.y1 = startTouch.pageY;

	    // if touchstart interval less than 250, handle as doubleTap
	    if (delta > 0 && delta <= this.props.tapDelay) {
	      touch.isDoubleTap = true;
	    }

	    // record last touch start time
	    touch.last = now;

	    // handle as `press` after 750ms
	    this._pressTimeout = setTimeout(this._handlePress, this.props.pressDelay);

	    this.setState({
	      startTouch: startTouch,
	      touch: touch
	    });
	  },
	  handleTouchMove: function handleTouchMove(e) {
	    // console.log('touch move');
	    this.processEvent(e);

	    var endTouch = e.touches[0];
	    var _state = this.state,
	        touch = _state.touch,
	        deltaX = _state.deltaX,
	        deltaY = _state.deltaY;


	    this._cancelPress();

	    touch.x2 = endTouch.pageX;
	    touch.y2 = endTouch.pageY;

	    // finger moving distance
	    deltaX += Math.abs(touch.x1 - touch.x2);
	    deltaY += Math.abs(touch.y1 - touch.y2);

	    this.setState({
	      deltaX: deltaX,
	      deltaY: deltaY,
	      touch: touch,
	      endTouch: endTouch
	    });
	  },
	  handleTouchEnd: function handleTouchEnd(e) {
	    var _this = this;

	    // console.log('touch end..');
	    this.processEvent(e);

	    this._cancelPress();

	    var _props = this.props,
	        tapDelay = _props.tapDelay,
	        moveThreshold = _props.moveThreshold;
	    var _state2 = this.state,
	        touch = _state2.touch,
	        startTouch = _state2.startTouch,
	        endTouch = _state2.endTouch,
	        deltaX = _state2.deltaX,
	        deltaY = _state2.deltaY;

	    var event = {
	      touch: touch,
	      startTouch: startTouch,
	      endTouch: endTouch,
	      preventDefault: function preventDefault() {}
	    };

	    // handle as swipe event
	    if (touch.x2 && Math.abs(touch.x1 - touch.x2) > moveThreshold || touch.y2 && Math.abs(touch.y1 - touch.y2) > moveThreshold) {

	      event.type = 'swipe';

	      this._swipeTimeout = setTimeout(function () {
	        _this._handleEvent(event);

	        event.type += _this._getSwipeDirection();
	        _this._handleEvent(event);
	        _this._resetTouch();
	      }, 0);
	    }
	    // normal tap
	    else if ('last' in touch) {
	        // don't fire tap when delta position changed by more than 30 pixels,
	        // for instance when moving to a point and back to origin
	        if (deltaX < moveThreshold && deltaY < moveThreshold) {
	          // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
	          // ('tap' fires before 'scroll')
	          this._tapTimeout = setTimeout(function () {
	            // trigger universal 'tap' with the option to cancelTouch()
	            // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
	            event.type = 'tap';
	            // event.cancelTouch = cancelAll;
	            _this._handleEvent(event);

	            // trigger double tap immediately
	            if (touch.isDoubleTap) {
	              event.type = 'doubleTap';
	              _this._handleEvent(event);
	              _this._resetTouch();
	            }
	            // trigger single tap after 250ms of inactivity
	            else {
	                _this._touchTimeout = setTimeout(function () {
	                  _this._touchTimeout = null;
	                  event.type = 'singleTap';
	                  _this._handleEvent(event);
	                  _this._resetTouch();
	                }, tapDelay);
	              }
	          }, 0);
	        } else {
	          this._resetTouch();
	        }
	      }
	  },
	  handleTouchCancel: function handleTouchCancel() {
	    this._cancelAll();
	  },
	  processEvent: function processEvent(e) {
	    this.props.preventDefault && e.preventDefault();
	    this.props.stopPropagation && e.stopPropagation();
	  },
	  _handlePress: function _handlePress() {
	    this._pressTimeout = null;
	    if (this.state.touch.last) {
	      this.props.onPress && this.props.onPress();
	      this._resetTouch();
	    }
	  },
	  _cancelPress: function _cancelPress() {
	    if (this._pressTimeout) {
	      clearTimeout(this._pressTimeout);
	    }

	    this._pressTimeout = null;
	  },
	  _cancelAll: function _cancelAll() {
	    if (this._touchTimeout) {
	      clearTimeout(this._touchTimeout);
	    }

	    if (this._tapTimeout) {
	      clearTimeout(this._tapTimeout);
	    }

	    if (this._swipeTimeout) {
	      clearTimeout(this._swipeTimeout);
	    }

	    if (this._pressTimeout) {
	      clearTimeout(this._pressTimeout);
	    }

	    this._touchTimeout = this._tapTimeout = this._swipeTimeout = this._pressTimeout = null;
	    this._resetTouch();
	  },
	  _getSwipeDirection: function _getSwipeDirection() {
	    var _state$touch = this.state.touch,
	        x1 = _state$touch.x1,
	        x2 = _state$touch.x2,
	        y1 = _state$touch.y1,
	        y2 = _state$touch.y2;

	    // 水平方向：水平距离大于等于垂直距离
	    // 垂直方向：

	    return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? 'Left' : 'Right' : y1 - y2 > 0 ? 'Up' : 'Down';
	  },
	  _resetTouch: function _resetTouch() {
	    this.setState(this.getInitialState());
	  },
	  _getEventMethodName: function _getEventMethodName(type) {
	    return 'on' + type.charAt(0).toUpperCase() + type.slice(1);
	  },
	  _handleEvent: function _handleEvent(event) {
	    var method = this._getEventMethodName(event.type);
	    this.props[method] && this.props[method](event);
	  },
	  getTouchHandlers: function getTouchHandlers() {
	    return {
	      onTouchStart: this.handleTouchStart,
	      onTouchEnd: this.handleTouchEnd,
	      onTouchCancel: this.handleTouchCancel,
	      onTouchMove: this.handleTouchMove
	    };
	  }
	};

	exports.default = TouchableMixin;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // @see https://github.com/JedWatson/react-container
	// @license MIT Copyright (c) 2015 Jed Watson

	function hasChildrenWithVerticalFill(children) {
	  var result = false;

	  _react2.default.Children.forEach(children, function (child) {
	    if (result) {
	      return; // early-exit
	    }

	    if (!child) {
	      return;
	    }

	    if (!child.type) {
	      return;
	    }

	    result = !!child.type.shouldFillVerticalSpace;
	  });

	  return result;
	}

	function initScrollable(defaultPos) {
	  if (!defaultPos) {
	    defaultPos = {};
	  }

	  var pos = void 0;
	  var scrollable = {
	    reset: function reset() {
	      pos = { left: defaultPos.left || 0, top: defaultPos.top || 0 };
	    },
	    getPos: function getPos() {
	      return { left: pos.left, top: pos.top };
	    },
	    mount: function mount(element) {
	      var node = _react2.default.findDOMNode(element);
	      node.scrollLeft = pos.left;
	      node.scrollTop = pos.top;
	    },
	    unmount: function unmount(element) {
	      var node = _react2.default.findDOMNode(element);
	      pos.left = node.scrollLeft;
	      pos.top = node.scrollTop;
	    }
	  };

	  scrollable.reset();

	  return scrollable;
	}

	var TRANSITION_TIMEOUT = 500;

	var Container = _react2.default.createClass({
	  displayName: 'Container',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string,
	    component: _react.PropTypes.node,
	    align: _react.PropTypes.oneOf(['end', 'center', 'start']),
	    direction: _react.PropTypes.oneOf(['column', 'row']),
	    fill: _react.PropTypes.bool,
	    grow: _react.PropTypes.bool,
	    justify: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(['end', 'center', 'start'])]),
	    scrollable: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
	    transition: _react.PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'container',
	      component: 'div'
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    if (this.props.scrollable && this.props.scrollable.mount) {
	      this.props.scrollable.mount(this);
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this.props.scrollable && this.props.scrollable.unmount) {
	      this.props.scrollable.unmount(this);
	    }
	  },
	  render: function render() {
	    var _cx;

	    var _props = this.props,
	        className = _props.className,
	        Component = _props.component,
	        children = _props.children,
	        direction = _props.direction,
	        fill = _props.fill,
	        align = _props.align,
	        justify = _props.justify,
	        scrollable = _props.scrollable,
	        transition = _props.transition,
	        props = _objectWithoutProperties(_props, ['className', 'component', 'children', 'direction', 'fill', 'align', 'justify', 'scrollable', 'transition']);

	    var classSet = this.getClassSet();

	    delete props.classPrefix;

	    // As view transition container
	    if (transition) {
	      return _react2.default.createElement(
	        'div',
	        props,
	        children
	      );
	    }

	    if (!direction) {
	      if (hasChildrenWithVerticalFill(children)) {
	        direction = 'column';
	      }
	    }

	    if (direction === 'column' || scrollable) {
	      fill = true;
	    }

	    if (direction === 'column' && align === 'top') {
	      align = 'start';
	    }

	    if (direction === 'column' && align === 'bottom') {
	      align = 'end';
	    }

	    if (direction === 'row' && align === 'left') {
	      align = 'start';
	    }

	    if (direction === 'row' && align === 'right') {
	      align = 'end';
	    }

	    var classes = (0, _classnames2.default)(classSet, className, (_cx = {}, _defineProperty(_cx, this.prefixClass('fill'), fill), _defineProperty(_cx, this.prefixClass('column'), direction === 'column'), _defineProperty(_cx, this.prefixClass('row'), direction === 'row'), _defineProperty(_cx, this.prefixClass('align-center'), align === 'center'), _defineProperty(_cx, this.prefixClass('align-start'), align === 'start'), _defineProperty(_cx, this.prefixClass('align-end'), align === 'end'), _defineProperty(_cx, this.prefixClass('justify-center'), justify === 'center'), _defineProperty(_cx, this.prefixClass('justify-start'), justify === 'start'), _defineProperty(_cx, this.prefixClass('justify-end'), justify === 'end'), _defineProperty(_cx, this.prefixClass('justified'), justify === true), _defineProperty(_cx, this.prefixClass('scrollable'), scrollable), _cx));

	    return _react2.default.createElement(
	      Component,
	      _extends({
	        className: classes
	      }, props),
	      children
	    );
	  }
	});

	Container.initScrollable = initScrollable;

	exports.default = Container;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Grid = _react2.default.createClass({
	  displayName: 'Grid',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    component: _react.PropTypes.node.isRequired,
	    collapse: _react.PropTypes.bool,
	    avg: _react.PropTypes.number,
	    align: _react.PropTypes.oneOf(['right', 'center', 'between', 'around']),
	    wrap: _react.PropTypes.oneOf(['wrap', 'wrap-reverse']),
	    bordered: _react.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'g',
	      component: 'div'
	    };
	  },


	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        Component = _props.component,
	        className = _props.className,
	        collapse = _props.collapse,
	        bordered = _props.bordered,
	        avg = _props.avg,
	        align = _props.align,
	        wrap = _props.wrap,
	        props = _objectWithoutProperties(_props, ['component', 'className', 'collapse', 'bordered', 'avg', 'align', 'wrap']);

	    delete props.classPrefix;

	    // .g-collapse
	    classSet[this.prefixClass('collapse')] = collapse;

	    // .g-bordered
	    classSet[this.prefixClass('bordered')] = bordered;

	    // .g-wrap
	    classSet[this.prefixClass(wrap)] = wrap;

	    if (avg) {
	      classSet[this.prefixClass('avg-' + avg)] = true;
	    }

	    if (align) {
	      classSet[this.prefixClass(align)] = true;
	    }

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        className: (0, _classnames2.default)(className, classSet)
	      }),
	      this.props.children
	    );
	  }
	});

	exports.default = Grid;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _InternalPropTypes = __webpack_require__(17);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Col = _react2.default.createClass({
	  displayName: 'Col',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    component: _InternalPropTypes.component.isRequired,
	    cols: _react.PropTypes.number,
	    offset: _react.PropTypes.number,
	    shrink: _react.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'col',
	      component: 'div'
	    };
	  },
	  render: function render() {
	    var _props = this.props,
	        Component = _props.component,
	        cols = _props.cols,
	        offset = _props.offset,
	        shrink = _props.shrink,
	        className = _props.className,
	        props = _objectWithoutProperties(_props, ['component', 'cols', 'offset', 'shrink', 'className']);

	    var classSet = this.getClassSet();

	    delete props.classPrefix;

	    if (cols) {
	      classSet[this.prefixClass(cols)] = true;
	    }

	    if (offset) {
	      classSet[this.prefixClass('offset-' + offset)] = true;
	    }

	    classSet[this.prefixClass('shrink')] = shrink;

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        className: (0, _classnames2.default)(className, classSet)
	      }),
	      this.props.children
	    );
	  }
	});

	exports.default = Col;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.component = undefined;

	var _react = __webpack_require__(3);

	var func = _react.PropTypes.func,
	    oneOfType = _react.PropTypes.oneOfType,
	    string = _react.PropTypes.string;
	var component = exports.component = oneOfType([func, string]);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Group = _react2.default.createClass({
	  displayName: 'Group',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    component: _react.PropTypes.node.isRequired,
	    header: _react.PropTypes.node,
	    footer: _react.PropTypes.node,
	    noPadded: _react.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'group',
	      component: 'div'
	    };
	  },
	  renderAddon: function renderAddon(role) {
	    role = role || 'header';
	    return this.props[role] ? _react2.default.createElement(role, {
	      className: this.prefixClass(role)
	    }, this.props[role]) : null;
	  },
	  render: function render() {
	    var _props = this.props,
	        Component = _props.component,
	        className = _props.className,
	        noPadded = _props.noPadded,
	        props = _objectWithoutProperties(_props, ['component', 'className', 'noPadded']);

	    var classSet = this.getClassSet();

	    delete props.classPrefix;
	    delete props.header;
	    delete props.footer;

	    classSet[this.prefixClass('no-padded')] = noPadded;

	    var bodyClasses = _defineProperty({}, this.prefixClass('body'), true);

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        className: (0, _classnames2.default)(className, classSet)
	      }),
	      this.renderAddon('header'),
	      _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)(bodyClasses) },
	        this.props.children
	      ),
	      this.renderAddon('footer')
	    );
	  }
	});

	exports.default = Group;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _CollapseMixin = __webpack_require__(7);

	var _CollapseMixin2 = _interopRequireDefault(_CollapseMixin);

	var _Icon = __webpack_require__(20);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Accordion = _react2.default.createClass({
	  displayName: 'Accordion',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string,
	    activeKey: _react.PropTypes.any,
	    defaultActiveKey: _react.PropTypes.any,
	    inset: _react.PropTypes.bool,
	    onAction: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'accordion'
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      activeKey: this.props.defaultActiveKey || null
	    };
	  },


	  shouldComponentUpdate: function shouldComponentUpdate() {
	    // Defer any updates to this component during the `onAction` handler.
	    return !this._isChanging;
	  },

	  handleSelect: function handleSelect(e, key) {
	    e.preventDefault();

	    if (this.props.onAction) {
	      this._isChanging = true;
	      this.props.onAction(key);
	      this._isChanging = false;
	    }

	    if (this.state.activeKey === key) {
	      key = null;
	    }

	    this.setState({
	      activeKey: key
	    });
	  },
	  renderItems: function renderItems() {
	    var _this = this;

	    var activeKey = this.props.activeKey != null ? this.props.activeKey : this.state.activeKey;

	    return _react2.default.Children.map(this.props.children, function (child, index) {
	      var eventKey = child.props.eventKey;

	      var props = {
	        key: index,
	        onAction: _this.handleSelect
	      };

	      if (eventKey === undefined) {
	        props.eventKey = eventKey = index;
	      }

	      props.expanded = eventKey === activeKey;

	      return _react2.default.cloneElement(child, props);
	    });
	  },
	  render: function render() {
	    var _props = this.props,
	        className = _props.className,
	        inset = _props.inset,
	        props = _objectWithoutProperties(_props, ['className', 'inset']);

	    var classSet = this.getClassSet();

	    delete props.classPrefix;
	    delete props.activeKey;
	    delete props.defaultActiveKey;
	    delete props.onAction;

	    classSet[this.prefixClass('inset')] = inset;

	    return _react2.default.createElement(
	      'section',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      this.renderItems()
	    );
	  }
	});

	var AccordionItem = _react2.default.createClass({
	  displayName: 'AccordionItem',

	  mixins: [_ClassNameMixin2.default, _CollapseMixin2.default],

	  propTypes: {
	    title: _react2.default.PropTypes.node,
	    eventKey: _react2.default.PropTypes.any
	  },

	  handleClick: function handleClick(e) {
	    // @see https://facebook.github.io/react/docs/events.html#event-pooling
	    e.persist();
	    e.selected = true;

	    if (this.props.onAction) {
	      this.props.onAction(e, this.props.eventKey);
	    } else {
	      e.preventDefault();
	    }

	    if (e.selected) {
	      this.handleToggle();
	    }
	  },

	  handleToggle: function handleToggle() {
	    this.setState({ expanded: !this.state.expanded });
	  },
	  getCollapsibleDimensionValue: function getCollapsibleDimensionValue() {
	    return this.refs.panel.scrollHeight;
	  },
	  getCollapsibleDOMNode: function getCollapsibleDOMNode() {
	    if (!this.isMounted() || !this.refs || !this.refs.panel) {
	      return null;
	    }

	    return this.refs.panel;
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'dl',
	      {
	        className: (0, _classnames2.default)(this.setClassNS('accordion-item'), this.isExpanded() ? this.setClassNS('active') : null)
	      },
	      _react2.default.createElement(
	        'dt',
	        {
	          onClick: this.handleClick,
	          className: this.setClassNS('accordion-title')
	        },
	        this.props.title,
	        _react2.default.createElement(_Icon2.default, {
	          className: this.setClassNS('accordion-icon'),
	          name: 'down-nav'
	        })
	      ),
	      _react2.default.createElement(
	        'dd',
	        {
	          className: (0, _classnames2.default)(this.setClassNS('accordion-body'), this.getCollapsibleClassSet()),
	          ref: 'panel'
	        },
	        _react2.default.createElement(
	          'div',
	          {
	            className: this.setClassNS('accordion-content'),
	            'data-ysp': 'component',
	            draggable: 'true'
	          },
	          this.props.children
	        )
	      )
	    );
	  }
	});

	Accordion.Item = AccordionItem;

	exports.default = Accordion;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _InternalPropTypes = __webpack_require__(17);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Icon = _react2.default.createClass({
	  displayName: 'Icon',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    component: _InternalPropTypes.component,
	    name: _react.PropTypes.string.isRequired,
	    href: _react.PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'icon',
	      component: 'span'
	    };
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        Component = _props.component,
	        className = _props.className,
	        name = _props.name,
	        props = _objectWithoutProperties(_props, ['component', 'className', 'name']);

	    delete props.classPrefix;

	    Component = props.href ? 'a' : Component;

	    // icon-[iconName]
	    classSet[this.prefixClass(name)] = true;

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      this.props.children
	    );
	  }
	});

	exports.default = Icon;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _InternalPropTypes = __webpack_require__(17);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Badge = _react2.default.createClass({
	  displayName: 'Badge',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    component: _InternalPropTypes.component,
	    href: _react.PropTypes.string,
	    amStyle: _react.PropTypes.string,
	    // radius: PropTypes.bool,
	    rounded: _react.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'badge',
	      component: 'span'
	    };
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        Component = _props.component,
	        className = _props.className,
	        href = _props.href,
	        props = _objectWithoutProperties(_props, ['component', 'className', 'href']);

	    delete props.classPrefix;
	    delete props.amStyle;
	    delete props.rounded;

	    Component = href ? 'a' : Component;

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      this.props.children
	    );
	  }
	});

	exports.default = Badge;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _InternalPropTypes = __webpack_require__(17);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Button = _react2.default.createClass({
	  displayName: 'Button',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    component: _InternalPropTypes.component,
	    href: _react.PropTypes.string,
	    target: _react.PropTypes.string,
	    amStyle: _react.PropTypes.string,
	    amSize: _react.PropTypes.string,
	    hollow: _react.PropTypes.bool,
	    rounded: _react.PropTypes.bool,
	    square: _react.PropTypes.bool,
	    block: _react.PropTypes.bool,
	    active: _react.PropTypes.bool,
	    disabled: _react.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'btn'
	    };
	  },
	  removeUnknownProp: function removeUnknownProp(props) {
	    delete props.classPrefix;
	    delete props.amStyle;
	    delete props.amSize;
	    delete props.square;
	    delete props.rounded;
	    delete props.hollow;
	    delete props.block;
	    delete props.active;

	    return props;
	  },
	  renderAnchor: function renderAnchor(classes) {
	    var _props = this.props,
	        href = _props.href,
	        Component = _props.component,
	        children = _props.children,
	        props = _objectWithoutProperties(_props, ['href', 'component', 'children']);

	    Component = Component || 'a';

	    href = href || '#';

	    return _react2.default.createElement(
	      Component,
	      _extends({}, this.removeUnknownProp(props), {
	        href: href,
	        className: classes,
	        role: 'button'
	      }),
	      children
	    );
	  },
	  renderButton: function renderButton(classes) {
	    var _props2 = this.props,
	        Component = _props2.component,
	        children = _props2.children,
	        props = _objectWithoutProperties(_props2, ['component', 'children']);

	    Component = Component || 'button';

	    return _react2.default.createElement(
	      Component,
	      _extends({}, this.removeUnknownProp(props), {
	        className: classes
	      }),
	      children
	    );
	  },
	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props3 = this.props,
	        href = _props3.href,
	        target = _props3.target,
	        block = _props3.block,
	        className = _props3.className;


	    var renderType = href || target ? 'renderAnchor' : 'renderButton';

	    // block button
	    classSet[this.prefixClass('block')] = block;

	    return this[renderType]((0, _classnames2.default)(classSet, className));
	  }
	});

	exports.default = Button;
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var ButtonBubble = _react2.default.createClass({
	  displayName: 'ButtonBubble',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'btn-bubble'
	    };
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        className = _props.className,
	        props = _objectWithoutProperties(_props, ['className']);

	    delete props.classPrefix;

	    return _react2.default.createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(className, classSet)
	      }),
	      _react2.default.createElement(
	        'div',
	        null,
	        this.props.children
	      ),
	      _react2.default.createElement('div', { className: (0, _classnames2.default)(classSet) + '-triangle' })
	    );
	  }
	});

	exports.default = ButtonBubble;
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var ButtonContainer = _react2.default.createClass({
	  displayName: 'ButtonContainer',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    more: _react.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'btn-container'
	    };
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        className = _props.className,
	        more = _props.more,
	        props = _objectWithoutProperties(_props, ['className', 'more']);

	    delete props.classPrefix;

	    classSet[this.prefixClass('more')] = more;

	    return _react2.default.createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(className, classSet)
	      }),
	      this.props.children
	    );
	  }
	});

	exports.default = ButtonContainer;
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var ButtonGroup = _react2.default.createClass({
	  displayName: 'ButtonGroup',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    amStyle: _react.PropTypes.string,
	    amSize: _react.PropTypes.string,
	    hollow: _react.PropTypes.bool,
	    gapped: _react.PropTypes.bool,
	    justify: _react.PropTypes.bool,
	    stacked: _react.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'btn-group'
	    };
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        className = _props.className,
	        amStyle = _props.amStyle,
	        amSize = _props.amSize,
	        hollow = _props.hollow,
	        gapped = _props.gapped,
	        stacked = _props.stacked,
	        justify = _props.justify,
	        props = _objectWithoutProperties(_props, ['className', 'amStyle', 'amSize', 'hollow', 'gapped', 'stacked', 'justify']);

	    delete props.classPrefix;

	    classSet[this.prefixClass('gapped')] = gapped;
	    classSet[this.prefixClass('stacked')] = stacked;
	    classSet[this.prefixClass('justify')] = justify;

	    return _react2.default.createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(className, classSet)
	      }),
	      _react2.default.Children.map(this.props.children, function (child, i) {
	        return (0, _react.cloneElement)(child, _extends({
	          amStyle: amStyle,
	          amSize: amSize,
	          hollow: hollow
	        }, child.props));
	      })
	    );
	  }
	});

	exports.default = ButtonGroup;
	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Card = _react2.default.createClass({
	  displayName: 'Card',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    title: _react.PropTypes.string,
	    header: _react.PropTypes.node,
	    footer: _react.PropTypes.node,
	    layout: _react.PropTypes.bool,
	    external: _react.PropTypes.bool,
	    noline: _react.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'card',
	      layout: false,
	      external: false,
	      noline: false
	    };
	  },
	  renderItem: function renderItem(element, role) {
	    if (!element) {
	      return null;
	    }

	    return element.type && element.type === Card.Child ? element : _react2.default.createElement(
	      Card.Child,
	      { role: role },
	      element
	    );
	  },
	  renderHeader: function renderHeader(header) {
	    return this.renderItem(header, 'header');
	  },
	  renderFooter: function renderFooter(footer) {
	    return this.renderItem(footer, 'footer');
	  },
	  renderTitle: function renderTitle(title, layout, external) {
	    return this.renderItem(_react2.default.createElement(
	      'h2',
	      { className: (0, _classnames2.default)(this.prefixClass('title'), layout && this.prefixClass('title-layout'), external && this.prefixClass('title-external')) },
	      title
	    ));
	  },
	  renderTitleOrHeader: function renderTitleOrHeader(title, header, layout, external) {
	    return title ? this.renderTitle(title, layout, external) : this.renderHeader(header);
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        children = _props.children,
	        className = _props.className,
	        title = _props.title,
	        header = _props.header,
	        footer = _props.footer,
	        layout = _props.layout,
	        external = _props.external,
	        noline = _props.noline,
	        props = _objectWithoutProperties(_props, ['children', 'className', 'title', 'header', 'footer', 'layout', 'external', 'noline']);

	    delete props.classPrefix;

	    return _react2.default.createElement(
	      'div',
	      _extends({}, props, { className: (0, _classnames2.default)(classSet, className, external && this.prefixClass('external'), layout && this.prefixClass('layout'), noline && this.prefixClass('noline')) }),
	      this.renderTitleOrHeader(title, header, layout, external),
	      _react2.default.createElement(
	        'div',
	        { className: this.prefixClass('body') },
	        children
	      ),
	      this.renderFooter(footer)
	    );
	  }
	});

	var CardChild = _react2.default.createClass({
	  displayName: 'CardChild',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    role: _react.PropTypes.oneOf(['header', 'footer']),
	    cover: _react.PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'card',
	      role: 'header'
	    };
	  },
	  render: function render() {
	    var _classSet;

	    var _props2 = this.props,
	        role = _props2.role,
	        className = _props2.className,
	        cover = _props2.cover,
	        props = _objectWithoutProperties(_props2, ['role', 'className', 'cover']);

	    var classSet = (_classSet = {}, _defineProperty(_classSet, this.prefixClass(role), true), _defineProperty(_classSet, this.prefixClass('cover'), cover), _classSet);

	    var style = null;

	    if (cover) {
	      style = {
	        backgroundImage: 'url(' + cover + ')'
	      };
	    }

	    delete props.classPrefix;

	    return _react2.default.createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(className, classSet),
	        role: 'card-' + role,
	        style: style
	      }),
	      this.props.children
	    );
	  }
	});

	Card.Child = CardChild;

	exports.default = Card;
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Icon = __webpack_require__(20);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Card = __webpack_require__(26);

	var _Card2 = _interopRequireDefault(_Card);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var CollapseCard = _react2.default.createClass({
	  displayName: 'CollapseCard',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    title: _react.PropTypes.string,
	    header: _react.PropTypes.node,
	    layout: _react.PropTypes.bool,
	    noline: _react.PropTypes.bool,
	    collapseHeight: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	    defaultCollapsed: _react.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'card',
	      layout: false,
	      defaultCollapsed: true,
	      collapseHeight: 100
	    };
	  },


	  getInitialState: function getInitialState() {
	    return {
	      collapsed: this.props.defaultCollapsed
	    };
	  },

	  toggleCollapsed: function toggleCollapsed() {
	    this.setState({
	      collapsed: !this.state.collapsed
	    });
	  },

	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        classPrefix = _props.classPrefix,
	        children = _props.children,
	        collapseHeight = _props.collapseHeight,
	        defaultCollapsed = _props.defaultCollapsed,
	        footer = _props.footer,
	        external = _props.external,
	        props = _objectWithoutProperties(_props, ['classPrefix', 'children', 'collapseHeight', 'defaultCollapsed', 'footer', 'external']);

	    var wrapStyle = {
	      overflow: 'hidden',
	      transition: 'height 0.2s ease-in-out'
	    };

	    var footer_more = _react2.default.createElement(
	      'div',
	      {
	        className: this.prefixClass('footer-more'),
	        onClick: this.toggleCollapsed
	      },
	      _react2.default.createElement(_Icon2.default, { name: 'down-nav' }),
	      '\xA0\u663E\u793A\u66F4\u591A\u5185\u5BB9'
	    );

	    var footer_less = _react2.default.createElement(
	      'div',
	      {
	        className: this.prefixClass('footer-more'),
	        onClick: this.toggleCollapsed
	      },
	      _react2.default.createElement(_Icon2.default, { name: 'up-nav' }),
	      '\xA0\u6536\u8D77\u5168\u90E8\u5185\u5BB9'
	    );

	    return _react2.default.createElement(
	      _Card2.default,
	      _extends({}, props, {
	        footer: this.state.collapsed ? footer_more : footer_less
	      }),
	      _react2.default.createElement(
	        'div',
	        { style: _extends({}, wrapStyle, { height: this.state.collapsed ? collapseHeight : 'auto' }) },
	        children
	      )
	    );
	  }
	});

	exports.default = CollapseCard;
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Button = __webpack_require__(22);

	var _Button2 = _interopRequireDefault(_Button);

	var _SelectableButton = __webpack_require__(29);

	var _SelectableButton2 = _interopRequireDefault(_SelectableButton);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Choose = _react2.default.createClass({
	  displayName: 'Choose',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    amStyle: _react.PropTypes.string,
	    amSize: _react.PropTypes.string,
	    multiple: _react.PropTypes.bool,
	    onValueChange: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'choose',
	      multiple: true,
	      amStyle: 'warning',
	      amSize: 'sm'
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    var _props = this.props,
	        children = _props.children,
	        multiple = _props.multiple,
	        defaultValue = _props.defaultValue;

	    if (!multiple) {
	      var itemSelectedRecord = {};
	      var filteredChildren = this.getFilteredChildren(children);
	      _react2.default.Children.forEach(filteredChildren, function (child, index) {
	        if (child.props.defaultSelected || defaultValue === child.props.value) {
	          itemSelectedRecord.index = index;
	          itemSelectedRecord.value = child.props.value;
	        }
	      });
	      this.setState({
	        itemSelectedRecord: itemSelectedRecord
	      });
	    }
	  },
	  record: function record(index, value) {
	    if (!Array.isArray(this.itemSelectedRecord)) {
	      this.itemSelectedRecord = [];
	    }
	    this.itemSelectedRecord[index] = value;
	  },
	  recordOne: function recordOne(index, value) {
	    this.setState({
	      itemSelectedRecord: {
	        index: index,
	        value: value
	      }
	    });
	  },
	  getFilteredChildren: function getFilteredChildren(children) {
	    var filteredChildren = [];
	    _react2.default.Children.forEach(children, function (child) {
	      if (child.type.displayName === 'ChooseItem') {
	        filteredChildren.push(child);
	      }
	    });
	    return filteredChildren;
	  },
	  handleItemValueChange: function handleItemValueChange(index, value, filteredChildren) {
	    var _this = this;

	    var multiple = this.props.multiple;

	    if (multiple) {
	      this.record(index, value);
	      if (this.props.onValueChange) {
	        var currentValue = [];
	        _react2.default.Children.forEach(filteredChildren, function (child, index) {
	          if (_this.itemSelectedRecord[index]) {
	            currentValue.push(child.props.value);
	          }
	        });
	        this.props.onValueChange(currentValue);
	      }
	    } else {
	      this.recordOne(index, value);
	      this.props.onValueChange(value);
	    }
	  },
	  render: function render() {
	    var _this2 = this;

	    var classSet = this.getClassSet();

	    var _props2 = this.props,
	        classPrefix = _props2.classPrefix,
	        className = _props2.className,
	        children = _props2.children,
	        amStyle = _props2.amStyle,
	        amSize = _props2.amSize,
	        multiple = _props2.multiple,
	        defaultValue = _props2.defaultValue,
	        others = _objectWithoutProperties(_props2, ['classPrefix', 'className', 'children', 'amStyle', 'amSize', 'multiple', 'defaultValue']);

	    var filteredChildren = this.getFilteredChildren(children);

	    var newChildren = _react2.default.Children.map(filteredChildren, function (child, index) {
	      if (multiple) {
	        var defaultSelected = void 0;
	        if (!Array.isArray(defaultValue)) {
	          defaultValue = [defaultValue];
	        }
	        if (typeof child.props.defaultSelected === 'boolean') {
	          defaultSelected = child.props.defaultSelected;
	        } else if (defaultValue.includes(child.props.value)) {
	          defaultSelected = true;
	        }
	        _this2.record(index, defaultSelected);
	        return _react2.default.cloneElement(child, _extends({}, child.props, {
	          amStyle: amStyle,
	          amSize: amSize,
	          defaultSelected: defaultSelected,
	          onValueChange: function onValueChange(value) {
	            return _this2.handleItemValueChange(index, value, filteredChildren);
	          }
	        }));
	      } else {
	        var _className = child.props.className;

	        return _react2.default.createElement(
	          'li',
	          { className: (0, _classnames2.default)(_this2.prefixClass('item'), _className) },
	          _react2.default.createElement(
	            _Button2.default,
	            {
	              amStyle: _this2.state && _this2.state.itemSelectedRecord && _this2.state.itemSelectedRecord.index === index ? amStyle : '',
	              amSize: amSize,
	              disabled: child.props.disabled,
	              'data-value': child.props.value,
	              onClick: function onClick() {
	                _this2.handleItemValueChange(index, child.props.value);
	              }
	            },
	            child.props.children
	          )
	        );
	      }
	    });

	    return _react2.default.createElement(
	      'div',
	      { className: (0, _classnames2.default)(classSet, className) },
	      _react2.default.createElement(
	        'ul',
	        { className: this.prefixClass('list') },
	        newChildren
	      )
	    );
	  }
	});

	var ChooseItem = _react2.default.createClass({
	  displayName: 'ChooseItem',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    multiple: _react.PropTypes.bool,
	    amStyle: _react.PropTypes.string,
	    amSize: _react.PropTypes.string,
	    disabled: _react.PropTypes.bool,
	    selected: _react.PropTypes.bool,
	    defaultSelected: _react.PropTypes.bool,
	    onClick: _react.PropTypes.func,
	    onValueChange: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'choose'
	    };
	  },
	  render: function render() {
	    var _props3 = this.props,
	        classPrefix = _props3.classPrefix,
	        className = _props3.className,
	        children = _props3.children,
	        others = _objectWithoutProperties(_props3, ['classPrefix', 'className', 'children']);

	    return _react2.default.createElement(
	      'li',
	      { className: (0, _classnames2.default)(this.prefixClass('item'), className) },
	      _react2.default.createElement(
	        _SelectableButton2.default,
	        others,
	        children
	      )
	    );
	  }
	});

	Choose.Item = ChooseItem;

	exports.default = Choose;
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Button = __webpack_require__(22);

	var _Button2 = _interopRequireDefault(_Button);

	var _Icon = __webpack_require__(20);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var SelectableButton = _react2.default.createClass({
	  displayName: 'SelectableButton',

	  mixins: [_ClassNameMixin2.default],

	  getInitialState: function getInitialState() {
	    var _props = this.props,
	        selected = _props.selected,
	        defaultSelected = _props.defaultSelected;

	    return {
	      selected: typeof selected === 'boolean' ? selected : defaultSelected
	    };
	  },

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    amStyle: _react.PropTypes.string,
	    amSize: _react.PropTypes.string,
	    disabled: _react.PropTypes.bool,
	    selected: _react.PropTypes.bool,
	    defaultSelected: _react.PropTypes.bool.isRequired,
	    onClick: _react.PropTypes.func,
	    onValueChange: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'btn',
	      defaultSelected: false,
	      amStyle: 'warning'
	    };
	  },
	  render: function render() {
	    var _this = this;

	    var _props2 = this.props,
	        classPrefix = _props2.classPrefix,
	        children = _props2.children,
	        className = _props2.className,
	        selected = _props2.selected,
	        defaultSelected = _props2.defaultSelected,
	        amStyle = _props2.amStyle,
	        disabled = _props2.disabled,
	        _onClick = _props2.onClick,
	        onValueChange = _props2.onValueChange,
	        href = _props2.href,
	        target = _props2.target,
	        square = _props2.square,
	        rounded = _props2.rounded,
	        hollow = _props2.hollow,
	        active = _props2.active,
	        others = _objectWithoutProperties(_props2, ['classPrefix', 'children', 'className', 'selected', 'defaultSelected', 'amStyle', 'disabled', 'onClick', 'onValueChange', 'href', 'target', 'square', 'rounded', 'hollow', 'active']);

	    selected = typeof selected === 'boolean' ? selected : this.state.selected;

	    return _react2.default.createElement(
	      _Button2.default,
	      _extends({
	        className: (0, _classnames2.default)(this.prefixClass('selectable'), className),
	        hollow: true,
	        disabled: disabled,
	        amStyle: disabled ? '' : amStyle,
	        'data-selected': this.state.selected
	      }, others, {
	        onClick: function onClick() {
	          _this.setState({
	            selected: !_this.state.selected
	          }, function () {
	            _onClick && _onClick();
	            onValueChange && onValueChange(_this.state.selected);
	          });
	        }
	      }),
	      children,
	      _react2.default.createElement(
	        'span',
	        { className: this.prefixClass('selectable-helper') },
	        selected && _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement('i', { className: this.prefixClass('selectable-helper-traingle') }),
	          _react2.default.createElement(
	            'small',
	            { className: this.prefixClass('selectable-helper-check') },
	            _react2.default.createElement(_Icon2.default, { name: 'check' })
	          )
	        )
	      )
	    );
	  }
	});

	exports.default = SelectableButton;
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _className = __webpack_require__(31);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Divide = function (_React$Component) {
	  _inherits(Divide, _React$Component);

	  function Divide(props) {
	    _classCallCheck(this, Divide);

	    return _possibleConstructorReturn(this, (Divide.__proto__ || Object.getPrototypeOf(Divide)).call(this, props));
	  }

	  _createClass(Divide, [{
	    key: 'render',
	    value: function render() {
	      var _cx;

	      var _props = this.props,
	          className = _props.className,
	          classPrefix = _props.classPrefix,
	          dashed = _props.dashed,
	          dotted = _props.dotted,
	          light = _props.light,
	          large = _props.large,
	          props = _objectWithoutProperties(_props, ['className', 'classPrefix', 'dashed', 'dotted', 'light', 'large']);

	      var nsPrefix = (0, _className.setClassNS)(classPrefix);

	      var classes = (0, _classnames2.default)(nsPrefix, (_cx = {}, _defineProperty(_cx, nsPrefix + '-dashed', dashed), _defineProperty(_cx, nsPrefix + '-dotted', dotted), _defineProperty(_cx, nsPrefix + '-light', light), _defineProperty(_cx, nsPrefix + '-large', large), _cx), className);

	      return _react2.default.createElement('div', _extends({}, props, { className: classes }));
	    }
	  }]);

	  return Divide;
	}(_react2.default.Component);

	Divide.propTypes = {
	  classPrefix: _react2.default.PropTypes.string.isRequired,
	  dashed: _react2.default.PropTypes.bool,
	  dotted: _react2.default.PropTypes.bool,
	  light: _react2.default.PropTypes.bool,
	  large: _react2.default.PropTypes.bool
	};
	Divide.defaultProps = {
	  classPrefix: 'divide'
	};
	exports.default = Divide;
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.prefixClass = exports.getClassSet = exports.setClassNS = undefined;

	var _config = __webpack_require__(6);

	var namespace = _config.NAMESPACE ? _config.NAMESPACE + '-' : '';

	var setClassNS = exports.setClassNS = function setClassNS(classPrefix) {
	  var prefix = classPrefix || '';

	  return namespace + prefix;
	};

	var getClassSet = exports.getClassSet = function getClassSet(ignorePrefix) {
	  var classNames = {};
	  var _props = undefined.props,
	      amSize = _props.amSize,
	      amStyle = _props.amStyle,
	      hollow = _props.hollow,
	      radius = _props.radius,
	      square = _props.square,
	      rounded = _props.rounded,
	      active = _props.active,
	      selected = _props.selected,
	      disabled = _props.disabled,
	      inset = _props.inset;
	  // uses `.am-` as prefix if `classPrefix` is not defined

	  var prefix = namespace;
	  if (undefined.props.classPrefix) {
	    var classPrefix = undefined.setClassNS();
	    prefix = classPrefix + '-';
	    // don't return prefix if ignore flag set
	    !ignorePrefix && (classNames[classPrefix] = true);
	  }
	  if (amSize) {
	    classNames[prefix + amSize] = true;
	  }
	  if (amStyle) {
	    classNames[prefix + amStyle] = true;
	  }
	  if (hollow) {
	    classNames[prefix + 'hollow'] = true;
	  }
	  classNames[undefined.prefixClass('square')] = square;
	  classNames[undefined.prefixClass('radius')] = radius;
	  classNames[undefined.prefixClass('rounded')] = rounded;
	  classNames[undefined.prefixClass('inset')] = inset;
	  // state className
	  // `selected` is an alias of active
	  classNames[_config.CLASSNAMES['active']] = active || selected;
	  classNames[_config.CLASSNAMES['disabled']] = disabled;
	  // shape
	  // classNames[constants.CLASSES.radius] = this.props.radius;
	  // classNames[constants.CLASSES.round] = this.props.round;
	  return classNames;
	};

	var prefixClass = exports.prefixClass = function prefixClass(subClass) {
	  return setClassNS() + '-' + subClass;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _InternalPropTypes = __webpack_require__(17);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var availableSizeArray = ['2x', '3x', '4x', '5x'];

	var FaIcon = _react2.default.createClass({
	  displayName: 'FaIcon',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    component: _InternalPropTypes.component,
	    name: _react.PropTypes.string.isRequired,
	    href: _react.PropTypes.string,
	    size: _react.PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'fa-icon',
	      component: 'span'
	    };
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        Component = _props.component,
	        className = _props.className,
	        name = _props.name,
	        size = _props.size,
	        props = _objectWithoutProperties(_props, ['component', 'className', 'name', 'size']);

	    delete props.classPrefix;

	    Component = props.href ? 'a' : Component;

	    // icon-[iconName]
	    // classSet[this.prefixClass(name)] = true;

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet)
	      }),
	      _react2.default.createElement('i', { className: 'fa fa-' + name + ' ' + (availableSizeArray.includes(size) ? 'fa-' + size : '') })
	    );
	  }
	});

	exports.default = FaIcon;
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _Button = __webpack_require__(22);

	var _Button2 = _interopRequireDefault(_Button);

	var _Icon = __webpack_require__(20);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Switch = __webpack_require__(34);

	var _Switch2 = _interopRequireDefault(_Switch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Field = _react2.default.createClass({
	  displayName: 'Field',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    type: _react.PropTypes.string,
	    right: _react.PropTypes.bool,
	    label: _react.PropTypes.node,
	    btnBefore: _react.PropTypes.node,
	    btnAfter: _react.PropTypes.node,
	    labelBefore: _react.PropTypes.node,
	    labelAfter: _react.PropTypes.node,
	    containerClassName: _react.PropTypes.string,
	    single: _react.PropTypes.bool,
	    tip: _react.PropTypes.string,
	    labelWidth: _react.PropTypes.string,
	    underline: _react.PropTypes.string,
	    labelStyle: _react.PropTypes.string,
	    labelClassName: _react.PropTypes.string,
	    disabled: _react.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'field',
	      type: 'text',
	      underline: 'full'
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    // Reference: https://stackoverflow.com/questions/23757345/android-does-not-correctly-scroll-on-input-focus-if-not-body-element
	    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
	    if (/Android/.test(navigator.appVersion)) {
	      window.addEventListener('resize', function () {
	        if (/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
	          window.setTimeout(function () {
	            document.activeElement.scrollIntoViewIfNeeded();
	          }, 0);
	        }
	      });
	    }
	  },
	  getFieldDOMNode: function getFieldDOMNode() {
	    return this.refs.field;
	  },
	  getValue: function getValue() {
	    if (this.props.type === 'select' && this.props.multiple) {
	      return this.getSelectedOptions();
	    } else {
	      return this.getFieldDOMNode().value;
	    }
	  },
	  getChecked: function getChecked() {
	    return this.getFieldDOMNode().checked;
	  },
	  getSelectedOptions: function getSelectedOptions() {
	    var values = [];
	    // see http://www.w3schools.com/jsref/coll_select_options.asp
	    var options = this.getFieldDOMNode().options;

	    Array.from(options).forEach(function (option) {
	      if (option.selected) {
	        var value = option.getAttribute('value') || option.innerHtml;

	        values.push(value);
	      }
	    });

	    return values;
	  },
	  isCheckboxOrRadio: function isCheckboxOrRadio() {
	    return this.props.type === 'radio' || this.props.type === 'checkbox';
	  },
	  isFile: function isFile() {
	    return this.props.type === 'file';
	  },


	  // convert `value`/`defaultValue` to `checked`/`defaultChecked` when `type` is `radio`/checkbox``
	  convertValueToChecked: function convertValueToChecked() {
	    var _this = this;

	    var checkedProps = {};

	    if (this.isCheckboxOrRadio()) {
	      var propsMap = {
	        checked: 'value',
	        defaultChecked: 'defaultValue'
	      };

	      Object.keys(propsMap).forEach(function (checked) {
	        var value = propsMap[checked];

	        if (!_this.props[checked] && _this.props[value]) {
	          checkedProps[checked] = value;
	        }
	      });
	    }

	    return checkedProps;
	  },
	  renderField: function renderField() {
	    var field = null;
	    var fieldClassName = this.isCheckboxOrRadio() || this.isFile() ? '' : this.getClassSet();
	    var classes = (0, _classnames2.default)(this.props.className, fieldClassName);
	    var commonProps = {
	      ref: 'field',
	      key: 'formField',
	      className: classes
	    };
	    var assignedProps = _extends({}, this.props, commonProps);

	    delete assignedProps.classPrefix;
	    delete assignedProps.containerClassName;
	    delete assignedProps.label;
	    delete assignedProps.right;
	    delete assignedProps.btnBefore;
	    delete assignedProps.btnAfter;
	    delete assignedProps.labelBefore;
	    delete assignedProps.labelAfter;
	    delete assignedProps.single;
	    delete assignedProps.labelWidth;
	    delete assignedProps.tip;
	    delete assignedProps.underline;

	    switch (this.props.type) {
	      case 'select':
	        field = _react2.default.createElement(
	          'select',
	          assignedProps,
	          this.props.children
	        );
	        break;
	      case 'textarea':
	        field = _react2.default.createElement('textarea', assignedProps);
	        break;
	      case 'submit':
	      case 'reset':
	        var _props = this.props,
	            classPrefix = _props.classPrefix,
	            underline = _props.underline,
	            others = _objectWithoutProperties(_props, ['classPrefix', 'underline']);

	        field = _react2.default.createElement(_Button2.default, _extends({}, commonProps, {
	          className: null
	        }, others, {
	          component: 'input'
	        }));
	        break;
	      case 'file':
	        var className = assignedProps.className,
	            otherss = _objectWithoutProperties(assignedProps, ['className']);

	        field = _react2.default.createElement(
	          'label',
	          { className: this.prefixClass('file') },
	          _react2.default.createElement(
	            'span',
	            { className: this.prefixClass('file-title') },
	            '\u4E0A\u4F20'
	          ),
	          _react2.default.createElement('input', _extends({}, otherss, this.convertValueToChecked(), {
	            className: this.prefixClass('file-input')
	          }))
	        );
	        break;
	      case 'switch':
	        field = _react2.default.createElement(_Switch2.default, assignedProps);
	        break;
	      case 'custom':
	        field = this.props.children;
	        break;
	      default:
	        field = _react2.default.createElement('input', _extends({}, assignedProps, this.convertValueToChecked()));
	    }

	    return field;
	  },
	  renderContainer: function renderContainer(children) {
	    var _props2 = this.props,
	        id = _props2.id,
	        label = _props2.label,
	        labelWidth = _props2.labelWidth,
	        labelStyle = _props2.labelStyle,
	        labelClassName = _props2.labelClassName,
	        containerClassName = _props2.containerClassName,
	        single = _props2.single,
	        tip = _props2.tip,
	        underline = _props2.underline,
	        disabled = _props2.disabled;


	    var containerClass = (0, _classnames2.default)(_defineProperty({}, this.prefixClass('container'), !single), _defineProperty({}, this.prefixClass('single'), single), _defineProperty({}, this.prefixClass('disabled'), disabled), _defineProperty({}, this.prefixClass('underline-' + underline), underline === 'part'), containerClassName);

	    var labelClass = (0, _classnames2.default)(this.prefixClass('label'), labelClassName);

	    var labelStyles = _extends({}, {
	      width: labelWidth
	    }, labelStyle);

	    var wrapClass = (0, _classnames2.default)(this.prefixClass('wrap'), _defineProperty({}, this.prefixClass('wrap-custom'), this.props.type === 'custom'));

	    return label ? _react2.default.createElement(
	      'div',
	      {
	        className: containerClass,
	        key: 'label'
	      },
	      _react2.default.createElement(
	        'div',
	        {
	          className: labelClass,
	          style: labelStyles
	        },
	        _react2.default.createElement(
	          'div',
	          null,
	          label
	        ),
	        tip ? _react2.default.createElement(
	          'span',
	          { className: this.prefixClass('tip') },
	          tip
	        ) : null
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: wrapClass },
	        children
	      ),
	      this.isCheckboxOrRadio() ? _react2.default.createElement(_Icon2.default, {
	        className: this.prefixClass('icon'),
	        name: 'check'
	      }) : null
	    ) : children;
	  },
	  renderFieldGroup: function renderFieldGroup(children) {
	    var _this2 = this;

	    var groupPrefix = this.setClassNS('field-group');
	    var labelClassName = groupPrefix + '-label';
	    var _props3 = this.props,
	        labelBefore = _props3.labelBefore,
	        labelAfter = _props3.labelAfter,
	        btnBefore = _props3.btnBefore,
	        btnAfter = _props3.btnAfter,
	        containerClassName = _props3.containerClassName;

	    var renderFiledLabel = function renderFiledLabel(type) {
	      return _this2.props[type] ? _react2.default.createElement(
	        'span',
	        {
	          className: labelClassName,
	          key: type
	        },
	        _this2.props[type]
	      ) : null;
	    };

	    return labelBefore || labelAfter || btnBefore || btnAfter ? _react2.default.createElement(
	      'div',
	      {
	        className: (0, _classnames2.default)(groupPrefix, containerClassName),
	        key: 'fieldGroup'
	      },
	      renderFiledLabel('labelBefore'),
	      btnBefore,
	      children,
	      renderFiledLabel('labelAfter'),
	      btnAfter
	    ) : children;
	  },
	  render: function render() {
	    var field = this.renderField();

	    if (this.props.label) {
	      return this.renderContainer(field);
	    }

	    return this.renderFieldGroup(field);
	  }
	});

	exports.default = Field;
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Switch = _react2.default.createClass({
	  displayName: 'Switch',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    name: _react.PropTypes.string,
	    shape: _react.PropTypes.string,
	    amStyle: _react.PropTypes.string,
	    disabled: _react.PropTypes.bool,
	    checked: _react.PropTypes.bool,
	    defaultChecked: _react.PropTypes.bool,
	    onValueChange: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'switch',
	      onValueChange: function onValueChange() {}
	    };
	  },
	  getValue: function getValue() {
	    return this.field.checked;
	  },
	  render: function render() {
	    var _this = this;

	    var classSet = this.getClassSet();

	    var _props = this.props,
	        name = _props.name,
	        shape = _props.shape,
	        className = _props.className,
	        onValueChange = _props.onValueChange,
	        checked = _props.checked,
	        defaultChecked = _props.defaultChecked,
	        disabled = _props.disabled,
	        props = _objectWithoutProperties(_props, ['name', 'shape', 'className', 'onValueChange', 'checked', 'defaultChecked', 'disabled']);

	    delete props.classPrefix;

	    return _react2.default.createElement(
	      'label',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      _react2.default.createElement('input', {
	        onChange: onValueChange.bind(this),
	        name: name,
	        type: 'checkbox',
	        ref: function ref(input) {
	          _this.field = input;
	        },
	        checked: checked,
	        defaultChecked: defaultChecked,
	        disabled: disabled
	      }),
	      _react2.default.createElement('span', { className: this.prefixClass(shape ? shape : 'label') })
	    );
	  }
	});

	exports.default = Switch;
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _Icon = __webpack_require__(20);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var List = _react2.default.createClass({
	  displayName: 'List',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    inset: _react.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'list'
	    };
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        className = _props.className,
	        inset = _props.inset,
	        props = _objectWithoutProperties(_props, ['className', 'inset']);

	    delete props.classPrefix;

	    classSet[this.prefixClass('inset')] = inset;

	    // TODO: 使用 ul 可能不是太好的选择，在一些需要定义 component 的场合缺乏灵活性
	    return _react2.default.createElement('ul', _extends({}, props, {
	      className: (0, _classnames2.default)(classSet, className)
	    }));
	  }
	});

	var ListItem = _react2.default.createClass({
	  displayName: 'ListItem',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    role: _react.PropTypes.oneOf(['header', 'item']),
	    title: _react.PropTypes.node,
	    subTitle: _react.PropTypes.node,
	    href: _react.PropTypes.string,
	    linked: _react.PropTypes.bool, // linked flag for custom href like route Link
	    linkComponent: _react.PropTypes.any,
	    linkProps: _react.PropTypes.object,
	    media: _react.PropTypes.node,
	    after: _react.PropTypes.node,
	    desc: _react.PropTypes.node,
	    nested: _react.PropTypes.oneOf(['input', 'radio', 'checkbox']) },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'item',
	      role: 'item'
	    };
	  },
	  renderTitleRow: function renderTitleRow() {
	    var _props2 = this.props,
	        title = _props2.title,
	        subTitle = _props2.subTitle,
	        href = _props2.href,
	        linkComponent = _props2.linkComponent;


	    var itemTitle = title ? _react2.default.createElement(
	      'h3',
	      {
	        key: 'itemTitle',
	        className: this.prefixClass('title')
	      },
	      title
	    ) : null;

	    var titleChildren = [itemTitle, this.renderAddon('after'), href || linkComponent ? _react2.default.createElement(_Icon2.default, {
	      className: this.prefixClass('icon'),
	      name: 'right-nav',
	      key: 'itemChevron'
	    }) : null];

	    return subTitle ? _react2.default.createElement(
	      'div',
	      {
	        className: this.prefixClass('title-row'),
	        key: 'itemTitleRow'
	      },
	      titleChildren
	    ) : titleChildren;
	  },
	  renderMain: function renderMain() {
	    var _props3 = this.props,
	        media = _props3.media,
	        subTitle = _props3.subTitle,
	        desc = _props3.desc,
	        children = _props3.children;

	    var titleRow = this.renderTitleRow();
	    var notJustTitle = media || subTitle || desc || children;

	    // remove wrapper if without media/subTitle/children
	    return notJustTitle ? _react2.default.createElement(
	      'div',
	      {
	        key: 'itemMain',
	        className: this.prefixClass('main')
	      },
	      titleRow,
	      this.renderAddon('subTitle'),
	      this.renderAddon('desc'),
	      children
	    ) : titleRow;
	  },
	  wrapLink: function wrapLink(children) {
	    var _props4 = this.props,
	        linkComponent = _props4.linkComponent,
	        linkProps = _props4.linkProps,
	        href = _props4.href,
	        target = _props4.target;


	    return linkComponent ? _react2.default.createElement(linkComponent, linkProps, children) : _react2.default.createElement(
	      'a',
	      {
	        href: href,
	        target: target
	      },
	      children
	    );
	  },
	  renderAddon: function renderAddon(type) {
	    return this.props[type] ? _react2.default.createElement(
	      'div',
	      {
	        key: 'item-' + type,
	        className: this.prefixClass(type.toLowerCase())
	      },
	      this.props[type]
	    ) : null;
	  },
	  render: function render() {
	    var _props5 = this.props,
	        className = _props5.className,
	        role = _props5.role,
	        subTitle = _props5.subTitle,
	        href = _props5.href,
	        media = _props5.media,
	        children = _props5.children,
	        linkComponent = _props5.linkComponent,
	        linked = _props5.linked,
	        nested = _props5.nested,
	        props = _objectWithoutProperties(_props5, ['className', 'role', 'subTitle', 'href', 'media', 'children', 'linkComponent', 'linked', 'nested']);

	    delete props.classPrefix;
	    delete props.title;
	    delete props.after;
	    delete props.linkProps;
	    delete props.desc;

	    var itemChildren = [this.renderAddon('media'), this.renderMain()];
	    var classSet = this.getClassSet();

	    classSet[this.prefixClass(nested)] = nested;
	    classSet[this.prefixClass('header')] = role === 'header';
	    classSet[this.prefixClass('linked')] = href || linkComponent || linked;
	    subTitle && (classSet[this.prefixClass('content')] = true);

	    return _react2.default.createElement(
	      'li',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      role === 'header' ? children : href || linkComponent ? this.wrapLink(itemChildren) : itemChildren
	    );
	  }
	});

	List.Item = ListItem;

	exports.default = List;

	/**
	 * TODO:
	 * - 可选择列表（嵌套 radio/checkbox）图文混排的列表，
	 *   考虑的创建可选择列表时根据 nested 属性自动生产 input，而不用再去嵌套 Field，
	 *   以便图文混排选择实现。
	 * - UE：用户如何知道这个列表是可以选择的（增加相应的提示文字？）
	 * - 易用性：链接如何以更好的方式传入类似 react-router Link 这样的组件？
	 */

	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Loader = _react2.default.createClass({
	  displayName: 'Loader',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string,
	    component: _react.PropTypes.node,
	    amStyle: _react.PropTypes.string,
	    rounded: _react.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'loader',
	      component: 'div'
	    };
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        className = _props.className,
	        Component = _props.component,
	        props = _objectWithoutProperties(_props, ['className', 'component']);

	    delete props.classPrefix;
	    delete props.amStyle;
	    delete props.rounded;

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      _react2.default.createElement('div', { className: this.prefixClass('bounce1') }),
	      _react2.default.createElement('div', { className: this.prefixClass('bounce2') }),
	      _react2.default.createElement('div', { className: this.prefixClass('bounce3') })
	    );
	  }
	});

	exports.default = Loader;
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _ModalPortal = __webpack_require__(38);

	var _ModalPortal2 = _interopRequireDefault(_ModalPortal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ModalPortal2.default; // import '../../scss/components/_modal.scss';

	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(12);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _CSSCore = __webpack_require__(9);

	var _CSSCore2 = _interopRequireDefault(_CSSCore);

	var _bodyElement = __webpack_require__(39);

	var _bodyElement2 = _interopRequireDefault(_bodyElement);

	var _Modal = __webpack_require__(40);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var bodyClassName = 'has-modal-open';

	var ModalPortal = (0, _react.createClass)({
	  propTypes: {
	    isOpen: _react.PropTypes.bool.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      isOpen: false
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this.node = document.createElement('div');
	    this.node.className = '__modal-portal';
	    _bodyElement2.default.appendChild(this.node);
	    this.renderModal(this.props);
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.renderModal(nextProps);
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    (0, _reactDom.unmountComponentAtNode)(this.node);
	    _bodyElement2.default.removeChild(this.node);
	    _CSSCore2.default.removeClass(_bodyElement2.default, bodyClassName);
	  },
	  renderModal: function renderModal(props) {
	    _CSSCore2.default[(props.isOpen ? 'add' : 'remove') + 'Class'](_bodyElement2.default, bodyClassName);
	    this.portal = (0, _reactDom.unstable_renderSubtreeIntoContainer)(this, _react2.default.createElement(_Modal2.default, props), this.node);
	  },
	  render: function render() {
	    return null;
	  }
	});

	exports.default = ModalPortal;
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _exenv = __webpack_require__(10);

	var bodyElement = _exenv.canUseDOM ? document.body : {
	  appendChild: function appendChild() {}
	};

	exports.default = bodyElement;
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(12);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _TransitionEvents = __webpack_require__(8);

	var _TransitionEvents2 = _interopRequireDefault(_TransitionEvents);

	var _Button = __webpack_require__(22);

	var _Button2 = _interopRequireDefault(_Button);

	var _Icon = __webpack_require__(20);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Loader = __webpack_require__(36);

	var _Loader2 = _interopRequireDefault(_Loader);

	var _View = __webpack_require__(41);

	var _View2 = _interopRequireDefault(_View);

	var _Container = __webpack_require__(14);

	var _Container2 = _interopRequireDefault(_Container);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
	                                                                                                                                                                                                                              * @see https://github.com/yuanyan/boron
	                                                                                                                                                                                                                              */

	// MUST be equal to $modal-duration in _modal.scss
	var TRANSITION_TIMEOUT = 300;

	function noop() {}

	var Modal = (0, _react.createClass)({
	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string,
	    role: _react.PropTypes.oneOf(['alert', 'confirm', 'prompt', 'loading', 'actions', 'popup', 'page']),
	    title: _react.PropTypes.node,
	    confirmText: _react.PropTypes.string,
	    cancelText: _react.PropTypes.string,
	    closeBtn: _react.PropTypes.bool,
	    closeViaBackdrop: _react.PropTypes.bool,
	    onAction: _react.PropTypes.func,
	    onOpen: _react.PropTypes.func,
	    onClosed: _react.PropTypes.func,
	    onDismiss: _react.PropTypes.func,
	    header: _react.PropTypes.node,
	    footer: _react.PropTypes.node
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'modal',
	      confirmText: '确定',
	      cancelText: '取消',
	      closeBtn: true,
	      closeViaBackdrop: true,
	      onAction: noop,
	      onOpen: noop,
	      onClosed: noop,
	      onDismiss: noop
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      closed: true,
	      isClosing: false
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    if (this.props.isOpen) {
	      this.open();
	    }
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var isOpen = this.props.isOpen;

	    if (!isOpen && nextProps.isOpen) {
	      this.open();
	    } else if (isOpen && !nextProps.isOpen) {
	      this.close();
	    }
	  },
	  isClosed: function isClosed() {
	    return this.state.closed;
	  },
	  isPopup: function isPopup() {
	    return this.props.role === 'popup';
	  },
	  isActions: function isActions() {
	    return this.props.role === 'actions';
	  },
	  isPage: function isPage() {
	    return this.props.role === 'page';
	  },


	  // Get input data for prompt modal
	  getFieldData: function getFieldData() {
	    var data = [];
	    var inputs = _reactDom2.default.findDOMNode(this).querySelectorAll('input[type=text]');

	    if (inputs) {
	      for (var i = 0; i < inputs.length; i++) {
	        data.push(inputs[i].value);
	      }
	    }

	    return data.length === 0 ? null : data.length === 1 ? data[0] : data;
	  },


	  // data === null: prompt -> canceled
	  // data === true: confirm -> confirmed
	  // data === false: confirm -> canceled
	  handleAction: function handleAction(data, e) {
	    var _props = this.props,
	        role = _props.role,
	        onAction = _props.onAction;

	    var willClose = true;

	    if (role === 'prompt' && data) {
	      data = this.getFieldData();

	      willClose = onAction.call(this, data, e);
	    } else {
	      onAction.call(this, data, e);
	    }

	    willClose && this.requestClose(e);
	  },
	  handleBackdropClick: function handleBackdropClick(e) {
	    if (e.target !== e.currentTarget || !this.props.closeViaBackdrop) {
	      return;
	    }

	    this.requestClose(e);
	  },
	  open: function open() {
	    if (this.isClosed()) {
	      this.setState({
	        isClosing: false,
	        closed: false
	      });

	      this.props.onOpen();
	    }
	  },


	  // Only for instance self calling
	  close: function close() {
	    if (this.isClosed() || this.state.isClosing) {
	      return;
	    }

	    this.setState({
	      isClosing: true
	    });
	  },


	  // for user actions
	  requestClose: function requestClose(e) {
	    this.props.onDismiss(e);
	  },
	  handleClosed: function handleClosed() {
	    this.setState({
	      closed: true,
	      isClosing: false
	    });
	    this.props.onClosed();
	  },
	  removeUnknownProp: function removeUnknownProp(props) {
	    delete props.isOpen;
	    delete props.onDismiss;
	    delete props.onOpen;
	    delete props.onClosed;
	    delete props.onAction;
	    delete props.classPrefix;
	    delete props.confirmText;
	    delete props.cancelText;
	    delete props.closeBtn;
	    delete props.closeViaBackdrop;
	    delete props.page;

	    return props;
	  },
	  renderActions: function renderActions(classSet) {
	    var _this = this;

	    classSet[this.props.classPrefix] = false;

	    return _react2.default.createElement(
	      'div',
	      {
	        className: (0, _classnames2.default)(this.props.className, classSet),
	        key: 'modalActions',
	        ref: function ref(modal) {
	          _this.modal = modal;
	        }
	      },
	      this.props.children,
	      _react2.default.createElement(
	        'div',
	        { className: this.prefixClass('actions-group') },
	        _react2.default.createElement(
	          _Button2.default,
	          {
	            onClick: this.requestClose,
	            block: true,
	            className: this.props.btnClassName,
	            amStyle: this.props.btnStyle || 'secondary'
	          },
	          this.props.cancelText
	        )
	      )
	    );
	  },
	  renderPopup: function renderPopup(classSet) {
	    var _this2 = this;

	    classSet[this.props.classPrefix] = false;

	    var _props2 = this.props,
	        className = _props2.className,
	        title = _props2.title,
	        children = _props2.children,
	        props = _objectWithoutProperties(_props2, ['className', 'title', 'children']);

	    return _react2.default.createElement(
	      'div',
	      _extends({}, this.removeUnknownProp(props), {
	        className: (0, _classnames2.default)(className, classSet, this.setClassNS('popup')),
	        key: 'modalPopup',
	        ref: function ref(modal) {
	          _this2.modal = modal;
	        }
	      }),
	      _react2.default.createElement(
	        'div',
	        { className: this.setClassNS('popup-inner') },
	        _react2.default.createElement(
	          'div',
	          { className: this.setClassNS('popup-header') },
	          title ? _react2.default.createElement(
	            'h4',
	            { className: this.setClassNS('popup-title') },
	            title
	          ) : null,
	          _react2.default.createElement(_Icon2.default, {
	            name: 'close',
	            className: this.setClassNS('popup-icon'),
	            onClick: this.requestClose
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: this.setClassNS('popup-body') },
	          children
	        )
	      )
	    );
	  },
	  renderHeader: function renderHeader() {
	    var _props3 = this.props,
	        title = _props3.title,
	        closeBtn = _props3.closeBtn,
	        role = _props3.role;

	    var closeIcon = closeBtn && !role ? _react2.default.createElement(_Icon2.default, {
	      name: 'close',
	      className: this.prefixClass('icon'),
	      onClick: this.requestClose
	    }) : null;

	    return title || closeIcon ? _react2.default.createElement(
	      'div',
	      {
	        className: this.prefixClass('header'),
	        key: 'modalHeader'
	      },
	      title ? _react2.default.createElement(
	        'h4',
	        {
	          className: this.prefixClass('title')
	        },
	        title
	      ) : null,
	      closeIcon
	    ) : null;
	  },


	  // Render alert/confirm/prompt buttons
	  renderFooter: function renderFooter() {
	    var _this3 = this;

	    var buttons = void 0;
	    var btnClass = this.prefixClass('btn');
	    var _props4 = this.props,
	        role = _props4.role,
	        confirmText = _props4.confirmText,
	        cancelText = _props4.cancelText;


	    switch (role) {
	      case 'alert':
	        buttons = _react2.default.createElement(
	          'span',
	          {
	            key: 'modalBtn',
	            onClick: this.handleAction.bind(this, null),
	            className: btnClass
	          },
	          confirmText
	        );
	        break;
	      case 'confirm':
	      case 'prompt':
	        var cancel = role === 'prompt' ? null : false;
	        buttons = [cancelText, confirmText].map(function (text, i) {
	          return _react2.default.createElement(
	            'span',
	            {
	              key: 'modalBtn' + i,
	              onClick: _this3.handleAction.bind(_this3, i === 0 ? cancel : true),
	              className: btnClass
	            },
	            text
	          );
	        });
	        break;
	      default:
	        buttons = null;
	    }

	    return buttons ? _react2.default.createElement(
	      'div',
	      { className: this.prefixClass('footer') },
	      buttons
	    ) : null;
	  },
	  renderPage: function renderPage(classSet) {
	    var _this4 = this;

	    var _props5 = this.props,
	        header = _props5.header,
	        footer = _props5.footer,
	        children = _props5.children,
	        className = _props5.className,
	        props = _objectWithoutProperties(_props5, ['header', 'footer', 'children', 'className']);

	    return _react2.default.createElement(
	      'div',
	      {
	        ref: function ref(modal) {
	          _this4.modal = modal;
	        },
	        className: (0, _classnames2.default)(className, classSet)
	      },
	      header,
	      _react2.default.createElement(
	        'div',
	        { className: this.prefixClass('page') + '-main' },
	        children
	      ),
	      footer
	    );
	  },


	  // Using transition appear to fix animation issue on iOS Safari
	  // @see https://github.com/amazeui/amazeui-touch/issues/11
	  renderTransition: function renderTransition(children) {
	    return _react2.default.createElement(
	      'span',
	      null,
	      children
	    );
	  },
	  renderBackdrop: function renderBackdrop(children) {
	    var _this5 = this;

	    var onClick = this.handleBackdropClick || null;
	    var preventDefault = function preventDefault(e) {
	      // prevent window scroll when touch backdrop
	      e.preventDefault();
	    };

	    var classSet = {};

	    classSet[this.prefixClass('backdrop')] = true;
	    classSet[this.setClassNS('active')] = true;
	    classSet[this.prefixClass('backdrop-out')] = this.state.isClosing;

	    return _react2.default.createElement(
	      'span',
	      null,
	      children,
	      _react2.default.createElement('div', {
	        className: (0, _classnames2.default)(classSet),
	        style: { height: window.innerHeight },
	        ref: function ref(backdrop) {
	          _this5.backdrop = backdrop;
	        },
	        onClick: onClick,
	        onTouchMove: preventDefault
	      })
	    );
	  },
	  render: function render() {
	    var _this6 = this;

	    var _state = this.state,
	        closed = _state.closed,
	        isClosing = _state.isClosing;


	    if (closed) {
	      return null;
	    }

	    // listen out animation end envent
	    if (isClosing) {
	      var node = this.modal;

	      if (node) {
	        var closedHandler = function closedHandler(e) {
	          if (e && e.target !== node) {
	            return;
	          }

	          _TransitionEvents2.default.off(node, closedHandler);
	          _this6.handleClosed();
	        };

	        _TransitionEvents2.default.on(node, closedHandler);
	      }
	    }

	    var classSet = this.getClassSet();

	    var _props6 = this.props,
	        role = _props6.role,
	        className = _props6.className,
	        title = _props6.title,
	        children = _props6.children,
	        modalWidth = _props6.modalWidth,
	        modalHeight = _props6.modalHeight,
	        props = _objectWithoutProperties(_props6, ['role', 'className', 'title', 'children', 'modalWidth', 'modalHeight']);

	    var modal = void 0;

	    classSet[this.prefixClass('out')] = isClosing;
	    role && (classSet[this.prefixClass(role)] = true);

	    if (this.isActions()) {
	      modal = this.renderTransition(this.renderActions(classSet));
	    } else if (this.isPopup()) {
	      modal = this.renderTransition(this.renderPopup(classSet));
	    } else if (this.isPage()) {
	      modal = this.renderPage(classSet);
	    } else {
	      var style = {
	        width: modalWidth,
	        height: modalHeight
	      };

	      modal = _react2.default.createElement(
	        'div',
	        _extends({}, this.removeUnknownProp(props), {
	          style: style,
	          ref: function ref(modalContainer) {
	            _this6.modalContainer = modalContainer;
	          },
	          className: (0, _classnames2.default)(classSet, className)
	        }),
	        _react2.default.createElement(
	          'div',
	          {
	            className: this.prefixClass('inner'),
	            ref: function ref(modal) {
	              _this6.modal = modal;
	            }
	          },
	          _react2.default.createElement(
	            'div',
	            {
	              className: this.prefixClass('dialog')
	            },
	            this.renderHeader(),
	            _react2.default.createElement(
	              'div',
	              {
	                className: this.prefixClass('body'),
	                ref: function ref(modalBody) {
	                  _this6.modalBody = modalBody;
	                }
	              },
	              role === 'loading' ? children ? children : _react2.default.createElement(_Loader2.default, null) : children
	            ),
	            this.renderFooter()
	          )
	        )
	      );
	    }

	    return this.renderBackdrop(modal);
	  }
	});

	exports.default = Modal;
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var View = _react2.default.createClass({
	  displayName: 'View',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    component: _react.PropTypes.node.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'view',
	      component: 'div'
	    };
	  },
	  render: function render() {
	    var _props = this.props,
	        component = _props.component,
	        className = _props.className,
	        props = _objectWithoutProperties(_props, ['component', 'className']);

	    delete props.classPrefix;

	    return _react2.default.createElement(component, _extends({}, props, {
	      className: (0, _classnames2.default)(className, this.getClassSet())
	    }));
	  }
	});

	exports.default = View;
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _Icon = __webpack_require__(20);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var NavBar = _react2.default.createClass({
	  displayName: 'NavBar',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string,
	    amStyle: _react.PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'alert', 'dark']),
	    title: _react.PropTypes.node,
	    leftNav: _react.PropTypes.array,
	    rightNav: _react.PropTypes.array,
	    titleOnLeft: _react.PropTypes.bool,
	    onAction: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'navbar',
	      onAction: function onAction() {}
	    };
	  },
	  renderTitle: function renderTitle() {
	    var _props = this.props,
	        titleOnLeft = _props.titleOnLeft,
	        title = _props.title;

	    var titlePosition = this.prefixClass(titleOnLeft ? 'left' : 'center');

	    return title ? _react2.default.createElement(
	      'h2',
	      {
	        className: (0, _classnames2.default)(this.prefixClass('title'), titlePosition)
	      },
	      title
	    ) : this.props.children;
	  },
	  renderNav: function renderNav(position) {
	    var nav = this.props[position + 'Nav'];
	    this._navPosition = position;

	    return nav && Array.isArray(nav) ? _react2.default.createElement(
	      'div',
	      {
	        className: (0, _classnames2.default)(this.prefixClass('nav'), this.prefixClass(position))
	      },
	      nav.map(this.renderNavItem)
	    ) : null;
	  },
	  renderNavItem: function renderNavItem(item, index) {
	    var _iconClassName;

	    var Component = item.component,
	        title = item.title,
	        customIcon = item.customIcon,
	        icon = item.icon,
	        isClone = item.isClone,
	        className = item.className,
	        otherProps = _objectWithoutProperties(item, ['component', 'title', 'customIcon', 'icon', 'isClone', 'className']);

	    var children = [];
	    var itemClassName = (0, _classnames2.default)(this.prefixClass('nav-item'), className);
	    var itemProps = _extends({
	      key: 'navbarNavItem' + index,
	      onClick: this.props.onAction.bind(this, item)
	    }, otherProps, {
	      className: itemClassName
	    });

	    Component = Component || 'a';

	    title && children.push(_react2.default.createElement(
	      'span',
	      {
	        className: this.prefixClass('nav-title'),
	        key: 'title'
	      },
	      title
	    ));

	    var navIconKey = 'icon';
	    var iconClassName = (_iconClassName = {}, _defineProperty(_iconClassName, this.prefixClass('icon'), true), _defineProperty(_iconClassName, this.prefixClass('icon-sibling-of-title'), !!title), _iconClassName);
	    var navIcon = customIcon ? _react2.default.createElement('img', {
	      src: customIcon,
	      className: (0, _classnames2.default)(iconClassName),
	      alt: title || null,
	      key: navIconKey
	    }) : icon ? _react2.default.createElement(_Icon2.default, {
	      className: (0, _classnames2.default)(iconClassName),
	      name: icon,
	      key: navIconKey
	    }) : null;

	    // adjust title and icon order for Android UC
	    // @see ../scss/helper/_mixins.scss `navbar-item-android-uc-fallback` mixin
	    if (navIcon) {
	      var action = this._navPosition === 'left' ? 'unshift' : 'push';
	      Array.prototype[action].call(children, navIcon);
	    }
	    // navIcon && children.push(navIcon);

	    var renderChildren = function renderChildren() {
	      // #40
	      // if `Component` is a clone type like OffCanvasTrigger,
	      // this should return a element with the className.
	      // TBC: should other props be transferred to the span element?
	      return isClone ? _react2.default.createElement(
	        'span',
	        {
	          className: itemClassName
	        },
	        children
	      ) : children;
	    };

	    return _react2.default.createElement(
	      Component,
	      itemProps,
	      renderChildren()
	    );
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props2 = this.props,
	        className = _props2.className,
	        props = _objectWithoutProperties(_props2, ['className']);

	    delete props.title;
	    delete props.classPrefix;
	    delete props.leftNav;
	    delete props.rightNav;
	    delete props.amStyle;
	    delete props.onAction;
	    delete props.titleOnLeft;

	    return _react2.default.createElement(
	      'header',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      this.renderTitle(),
	      this.renderNav('left'),
	      this.renderNav('right')
	    );
	  }
	});

	exports.default = NavBar;
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(12);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _exenv = __webpack_require__(10);

	var _bodyElement = __webpack_require__(39);

	var _bodyElement2 = _interopRequireDefault(_bodyElement);

	var _Icon = __webpack_require__(20);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	// @see https://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html
	// To improve reliability, CSSTransitionGroup will no longer listen to
	// transition events. Instead, you should specify transition durations
	// manually using props such as `transitionEnterTimeout={500}`.
	// NOTE: It should less than CSS animation duration, if not, the animation
	// be not smooth. It maybe a bug of React.
	var TRANSITION_TIMEOUT = 250;

	var Notification = _react2.default.createClass({
	  displayName: 'Notification',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    title: _react.PropTypes.string,
	    amStyle: _react.PropTypes.string,
	    closeBtn: _react.PropTypes.bool,
	    animated: _react.PropTypes.bool,
	    visible: _react.PropTypes.bool,
	    onDismiss: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'notification',
	      closeBtn: true,
	      onDismiss: function onDismiss() {}
	    };
	  },
	  renderCloseBtn: function renderCloseBtn() {
	    return this.props.closeBtn ? _react2.default.createElement(_Icon2.default, {
	      className: this.prefixClass('icon'),
	      name: 'close',
	      onClick: this.props.onDismiss
	    }) : null;
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        title = _props.title,
	        className = _props.className,
	        animated = _props.animated,
	        visible = _props.visible,
	        props = _objectWithoutProperties(_props, ['title', 'className', 'animated', 'visible']);

	    delete props.classPrefix;
	    delete props.amStyle;
	    delete props.static;
	    delete props.closeBtn;
	    delete props.onDismiss;

	    classSet[this.prefixClass('animated')] = animated;

	    var notificationBar = visible ? _react2.default.createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className),
	        key: 'notification'
	      }),
	      _react2.default.createElement(
	        'div',
	        { className: this.prefixClass('content') },
	        title ? _react2.default.createElement(
	          'h3',
	          { className: this.prefixClass('title') },
	          title
	        ) : null,
	        this.props.children
	      ),
	      this.renderCloseBtn()
	    ) : null;

	    return animated ? _react2.default.createElement(
	      'div',
	      null,
	      notificationBar
	    ) : notificationBar;
	  }
	});

	var NotificationPortal = _react2.default.createClass({
	  displayName: 'NotificationPortal',

	  propTypes: {
	    visible: _react.PropTypes.bool.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      visible: false
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    if (!this.isStatic()) {
	      this.node = document.createElement('div');
	      this.node.className = '__notification-portal';
	      _bodyElement2.default.appendChild(this.node);
	      this.renderNotification(this.props);
	    }
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (!this.isStatic()) {
	      this.renderNotification(nextProps);
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (!this.isStatic()) {
	      (0, _reactDom.unmountComponentAtNode)(this.node);
	      _bodyElement2.default.removeChild(this.node);
	    }
	  },
	  isStatic: function isStatic() {
	    return this.props.static;
	  },
	  renderNotification: function renderNotification(props) {
	    this.portal = (0, _reactDom.unstable_renderSubtreeIntoContainer)(this, _react2.default.createElement(Notification, props), this.node);
	  },
	  render: function render() {
	    return this.isStatic() ? _react2.default.createElement(Notification, this.props) : null;
	  }
	});

	exports.default = NotificationPortal;
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _BackdropMixin = __webpack_require__(2);

	var _BackdropMixin2 = _interopRequireDefault(_BackdropMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
	                                                                                                                                                                                                                              * @see https://github.com/negomi/react-burger-menu
	                                                                                                                                                                                                                              */

	var OffCanvas = _react2.default.createClass({
	  displayName: 'OffCanvas',

	  mixins: [_ClassNameMixin2.default, _BackdropMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string,
	    placement: _react.PropTypes.oneOf(['left', 'right']),
	    onDismiss: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'offcanvas',
	      placement: 'left'
	    };
	  },
	  handleBackdropClick: function handleBackdropClick(e) {
	    if (e && e.target === this.refs.backdrop) {
	      var onDismiss = this.props.onDismiss;


	      onDismiss && onDismiss();
	    }
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        placement = _props.placement,
	        animation = _props.animation,
	        className = _props.className,
	        children = _props.children,
	        isClosing = _props.isClosing,
	        props = _objectWithoutProperties(_props, ['placement', 'animation', 'className', 'children', 'isClosing']);

	    delete props.classPrefix;
	    delete props.onDismiss;

	    classSet[this.prefixClass('out')] = isClosing;
	    classSet[this.prefixClass(placement)] = !!placement;
	    classSet[this.prefixClass(animation)] = !!animation;

	    var offCanvas = _react2.default.createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className),
	        ref: 'overlay'
	      }),
	      children
	    );

	    return this.renderBackdrop(offCanvas);
	  }
	});

	exports.default = OffCanvas;
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(12);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _OverlayMixin = __webpack_require__(11);

	var _OverlayMixin2 = _interopRequireDefault(_OverlayMixin);

	var _CSSCore = __webpack_require__(9);

	var _CSSCore2 = _interopRequireDefault(_CSSCore);

	var _TransitionEvents = __webpack_require__(8);

	var _TransitionEvents2 = _interopRequireDefault(_TransitionEvents);

	var _createChainedFunction = __webpack_require__(46);

	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var OffCanvasTrigger = _react2.default.createClass({
	  displayName: 'OffCanvasTrigger',

	  mixins: [_OverlayMixin2.default, _ClassNameMixin2.default],

	  propTypes: {
	    defaultOffCanvasActive: _react.PropTypes.bool,
	    placement: _react.PropTypes.oneOf(['left', 'right']),
	    animation: _react.PropTypes.oneOf(['slide', 'push']),
	    offCanvas: _react.PropTypes.node.isRequired,
	    pageContainer: _react.PropTypes.node,
	    onOpen: _react.PropTypes.func,
	    onClosed: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      placement: 'left',
	      animation: 'slide',
	      onOpen: function onOpen() {},
	      onClosed: function onClosed() {}
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      offCanvasActive: this.props.defaultOffCanvasActive == null ? false : this.props.defaultOffCanvasActive,
	      isClosing: false
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this.setPageContainer();
	  },
	  open: function open() {
	    if (this.state.offCanvasActive) {
	      return;
	    }

	    this.setState({
	      offCanvasActive: true,
	      isClosing: false
	    }, function () {
	      this.props.onOpen();
	    });

	    if (this.isPush()) {
	      _CSSCore2.default.addClass(this.getContainerDOMNode(), this.getWithClassName());
	    }
	  },
	  close: function close() {
	    if (!this.state.offCanvasActive || this.state.isClosing) {
	      return;
	    }

	    this.setState({
	      isClosing: true
	    });

	    if (this.isPush()) {
	      var container = this.getContainerDOMNode();
	      _CSSCore2.default.removeClass(container, this.getWithClassName());
	      _CSSCore2.default.addClass(container, this.getClosingClassName());
	    }
	  },
	  handleClosed: function handleClosed() {
	    this.setState({
	      offCanvasActive: false,
	      isClosing: false
	    });

	    this.props.onClosed();

	    if (this.isPush()) {
	      _CSSCore2.default.removeClass(this.getContainerDOMNode(), this.getClosingClassName());
	    }
	  },
	  toggle: function toggle() {
	    this.state.offCanvasActive ? this.close() : this.open();
	  },
	  isPush: function isPush() {
	    return this.props.animation === 'push';
	  },
	  getPageContainer: function getPageContainer() {
	    var pageContainer = this.props.pageContainer;


	    return typeof pageContainer === 'string' ? document.querySelector(pageContainer) : (0, _reactDom.findDOMNode)(pageContainer);
	  },
	  setPageContainer: function setPageContainer() {
	    var pageContainer = this.getPageContainer();

	    if (pageContainer && this.isPush()) {
	      _CSSCore2.default.addClass(pageContainer, this.setClassNS('offcanvas-push-target'));
	    }
	  },
	  getWithClassName: function getWithClassName() {
	    return 'with-offcanvas-' + this.props.placement;
	  },
	  getClosingClassName: function getClosingClassName() {
	    return 'with-offcanvas-closing';
	  },


	  // used by Mixin
	  renderOverlay: function renderOverlay() {
	    var _this = this;

	    if (!this.state.offCanvasActive) {
	      return _react2.default.createElement('span', null);
	    }

	    var offCanvas = this.props.offCanvas;
	    var isClosing = this.state.isClosing;


	    if (isClosing) {
	      var node = this.getOverlayDOMNode();
	      if (node) {
	        var closedHandler = function closedHandler(e) {
	          if (e && e.target !== node) {
	            return;
	          }

	          _TransitionEvents2.default.off(node, closedHandler);
	          _this.handleClosed();
	        };

	        _TransitionEvents2.default.on(node, closedHandler);
	      } else {
	        this.handleClosed();
	      }
	    }

	    return (0, _react.cloneElement)(offCanvas, {
	      placement: this.props.placement,
	      animation: this.props.animation,
	      isClosing: isClosing,
	      onDismiss: this.close
	    });
	  },
	  render: function render() {
	    var child = _react2.default.Children.only(this.props.children);
	    var props = {
	      onClick: (0, _createChainedFunction2.default)(child.props.onClick, this.props.onClick)
	    };

	    props.onClick = (0, _createChainedFunction2.default)(this.toggle, props.onClick);

	    return (0, _react.cloneElement)(child, props);
	  }
	});

	exports.default = OffCanvasTrigger;
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * modified version of:
	 * https://github.com/react-bootstrap/react-bootstrap/blob/master/src/utils/createChainedFunction.js
	 */

	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @param {function} one
	 * @param {function} two
	 * @returns {function|null}
	 */

	function createChainedFunction(one, two) {
	  var hasOne = typeof one === 'function';
	  var hasTwo = typeof two === 'function';

	  if (!hasOne && !hasTwo) {
	    return null;
	  }

	  if (!hasOne) {
	    return two;
	  }

	  if (!hasTwo) {
	    return one;
	  }

	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}

	exports.default = createChainedFunction;
	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Pair = _react2.default.createClass({
	  displayName: 'Pair',


	  propTypes: {
	    name: _react.PropTypes.string.isRequired,
	    value: _react.PropTypes.string.isRequired
	  },

	  render: function render() {

	    var style = {
	      dl: {
	        fontSize: 14,
	        marginTop: 0,
	        marginBottom: 0,
	        lineHeight: 2
	      },
	      dt: {
	        display: 'inline-block',
	        marginRight: '.8em',
	        marginBottom: 0,
	        color: '#666666',
	        fontWeight: 'normal'
	      },
	      dd: {
	        display: 'inline-block',
	        marginBottom: 0,
	        color: '#414e79'
	      }
	    };

	    var _props = this.props,
	        name = _props.name,
	        value = _props.value;


	    return _react2.default.createElement(
	      'dl',
	      { style: style.dl },
	      _react2.default.createElement(
	        'dt',
	        { style: style.dt },
	        name
	      ),
	      _react2.default.createElement(
	        'dd',
	        { style: style.dd },
	        value
	      )
	    );
	  }
	});

	exports.default = Pair;
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _BackdropMixin = __webpack_require__(2);

	var _BackdropMixin2 = _interopRequireDefault(_BackdropMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Popover = _react2.default.createClass({
	  displayName: 'Popover',

	  mixins: [_ClassNameMixin2.default, _BackdropMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string,
	    placement: _react.PropTypes.oneOf(['top', 'bottom', 'horizontal']),
	    positionLeft: _react.PropTypes.number,
	    positionTop: _react.PropTypes.number,
	    angleLeft: _react.PropTypes.number,
	    angleTop: _react.PropTypes.number,
	    anglePosition: _react.PropTypes.string,
	    onDismiss: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'popover'
	    };
	  },
	  handleBackdropClick: function handleBackdropClick(e) {
	    if (e && e.target === this.refs.backdrop) {
	      var onDismiss = this.props.onDismiss;


	      onDismiss && onDismiss();
	    }
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        className = _props.className,
	        children = _props.children,
	        positionLeft = _props.positionLeft,
	        positionTop = _props.positionTop,
	        angleLeft = _props.angleLeft,
	        angleTop = _props.angleTop,
	        anglePosition = _props.anglePosition,
	        isClosing = _props.isClosing,
	        placement = _props.placement,
	        props = _objectWithoutProperties(_props, ['className', 'children', 'positionLeft', 'positionTop', 'angleLeft', 'angleTop', 'anglePosition', 'isClosing', 'placement']);

	    var style = {
	      left: positionLeft,
	      top: positionTop
	    };
	    var angleStyle = {
	      left: angleLeft,
	      top: angleTop
	    };

	    delete props.classPrefix;
	    delete props.onDismiss;

	    classSet[this.prefixClass('out')] = isClosing;
	    classSet[this.prefixClass(placement)] = placement;

	    var popover = _react2.default.createElement(
	      'div',
	      _extends({}, props, {
	        style: style,
	        ref: 'overlay',
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      _react2.default.createElement(
	        'div',
	        { className: this.prefixClass('inner') },
	        children
	      ),
	      _react2.default.createElement('div', {
	        style: angleStyle,
	        className: (0, _classnames2.default)(this.prefixClass('angle'), anglePosition ? this.prefixClass('angle-' + anglePosition) : null)
	      })
	    );

	    return this.renderBackdrop(popover);
	  }
	});

	exports.default = Popover;
	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(12);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _TransitionEvents = __webpack_require__(8);

	var _TransitionEvents2 = _interopRequireDefault(_TransitionEvents);

	var _OverlayMixin = __webpack_require__(11);

	var _OverlayMixin2 = _interopRequireDefault(_OverlayMixin);

	var _domUtils = __webpack_require__(50);

	var _domUtils2 = _interopRequireDefault(_domUtils);

	var _createChainedFunction = __webpack_require__(46);

	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PopoverTrigger = _react2.default.createClass({
	  displayName: 'PopoverTrigger',

	  mixins: [_OverlayMixin2.default],

	  propTypes: {
	    defaultPopoverActive: _react.PropTypes.bool,
	    popover: _react.PropTypes.node.isRequired,
	    onOpen: _react.PropTypes.func,
	    onClosed: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onOpen: function onOpen() {},
	      onClosed: function onClosed() {}
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      popoverActive: this.props.defaultPopoverActive == null ? false : this.props.defaultPopoverActive,
	      isClosing: false,
	      popoverLeft: null,
	      popoverTop: null,
	      placement: null
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    if (this.props.defaultPopoverActive) {
	      this.updatePopoverPosition();
	    }
	  },
	  open: function open() {
	    if (this.state.popoverActive) {
	      return;
	    }

	    this.setState({
	      popoverActive: true,
	      isClosing: false
	    }, function () {
	      this.updatePopoverPosition();
	      this.props.onOpen();
	    });
	  },
	  close: function close() {
	    if (!this.state.popoverActive) {
	      return;
	    }

	    this.setState({
	      isClosing: true
	    });
	  },
	  handleClosed: function handleClosed() {
	    this.setState({
	      popoverActive: false,
	      isClosing: false
	    });

	    this.props.onClosed();
	  },
	  toggle: function toggle() {
	    this.state.popoverActive ? this.close() : this.open();
	  },
	  updatePopoverPosition: function updatePopoverPosition() {
	    if (!this.isMounted()) {
	      return;
	    }

	    var position = this.calcPopoverPosition() || {};

	    this.setState({
	      popoverLeft: position.left,
	      popoverTop: position.top,
	      angleLeft: position.angleLeft,
	      angleTop: position.angleTop,
	      anglePosition: position.anglePosition,
	      placement: position.placement
	    });
	  },
	  calcPopoverPosition: function calcPopoverPosition() {
	    var targetOffset = this.getTriggerOffset();
	    var popoverNode = this.getOverlayDOMNode();

	    if (!popoverNode) {
	      return;
	    }

	    var popoverHeight = popoverNode.offsetHeight;
	    var popoverWidth = popoverNode.offsetWidth;
	    var targetHeight = targetOffset.height,
	        targetWidth = targetOffset.width;

	    var windowHeight = window.innerHeight;
	    var windowWidth = window.innerWidth;
	    var anglePosition = void 0,
	        angleLeft = void 0,
	        angleTop = void 0;
	    var popoverAngleSize = 8;
	    var popoverTop = 0;
	    var popoverLeft = 0;
	    var diff = 0;
	    var popoverPosition = 'top';
	    var popoverTotalHeight = popoverHeight + popoverAngleSize;

	    // Popover Horizontal position
	    // Popover 高度小于 trigger 顶部偏移
	    if (popoverTotalHeight < targetOffset.top) {
	      // On top: trigger 顶部偏移 - Popover 高度
	      popoverTop = targetOffset.top - popoverHeight - popoverAngleSize;
	    } else if (popoverTotalHeight < windowHeight - targetOffset.top - targetHeight) {
	      // On bottom: Popover 高度小于 trigger 下方空白位置
	      popoverPosition = 'bottom';
	      popoverTop = targetOffset.top + targetHeight + popoverAngleSize;
	    } else {
	      // On middle: Popover 位于 trigger 的水平位置
	      popoverPosition = 'horizontal';
	      popoverTop = targetHeight / 2 + targetOffset.top - popoverHeight / 2;
	      diff = popoverTop;

	      if (popoverTop <= 0) {
	        popoverTop = 5;
	      } else if (popoverTop + popoverHeight >= windowHeight) {
	        popoverTop = windowHeight - popoverHeight - 5;
	      }

	      diff = diff - popoverTop;
	    }

	    // Popover Horizontal Position
	    if (popoverPosition === 'top' || popoverPosition === 'bottom') {
	      popoverLeft = targetWidth / 2 + targetOffset.left - popoverWidth / 2;
	      diff = popoverLeft;

	      if (popoverLeft < 5) {
	        popoverLeft = 5;
	      }

	      if (popoverLeft + popoverWidth > windowWidth) {
	        popoverLeft = windowWidth - popoverWidth - 5;
	      }

	      diff = diff - popoverLeft;
	      angleLeft = popoverWidth / 2 - popoverAngleSize + diff;
	      angleLeft = Math.max(Math.min(angleLeft, popoverWidth - popoverAngleSize * 2 - 6), 6);
	      anglePosition = popoverPosition === 'top' ? 'bottom' : 'top';
	    } else if (popoverPosition === 'horizontal') {
	      popoverLeft = targetOffset.left - popoverWidth - popoverAngleSize;
	      anglePosition = 'right';

	      if (popoverLeft < 5 || popoverLeft + popoverWidth > windowWidth) {
	        if (popoverLeft < 5) {
	          popoverLeft = targetOffset.left + targetWidth + popoverAngleSize;
	        }

	        if (popoverLeft + popoverWidth > windowWidth) {
	          popoverLeft = windowWidth - popoverWidth - 5;
	        }

	        anglePosition = 'left';
	      }
	      angleTop = popoverHeight / 2 - popoverAngleSize + diff;
	      angleTop = Math.max(Math.min(angleTop, popoverHeight - popoverAngleSize * 2 - 6), 6);
	    }

	    return {
	      top: popoverTop,
	      left: popoverLeft,
	      placement: popoverPosition,
	      angleLeft: angleLeft,
	      angleTop: angleTop,
	      anglePosition: anglePosition
	    };
	  },
	  getTriggerOffset: function getTriggerOffset() {
	    var node = _reactDom2.default.findDOMNode(this);
	    var container = this.getContainerDOMNode();
	    var offset = container.tagName === 'BODY' ? _domUtils2.default.offset(node) : _domUtils2.default.position(node, container);

	    return _extends({}, offset, {
	      height: node.offsetHeight,
	      width: node.offsetWidth
	    });
	  },


	  // used by Mixin
	  renderOverlay: function renderOverlay() {
	    var _this = this;

	    if (!this.state.popoverActive) {
	      return _react2.default.createElement('span', null);
	    }

	    var popover = this.props.popover;
	    var _state = this.state,
	        isClosing = _state.isClosing,
	        positionLeft = _state.popoverLeft,
	        positionTop = _state.popoverTop,
	        anglePosition = _state.anglePosition,
	        angleLeft = _state.angleLeft,
	        angleTop = _state.angleTop,
	        placement = _state.placement;


	    if (isClosing) {
	      var node = this.getOverlayDOMNode();
	      if (node) {
	        var closedHandler = function closedHandler(e) {
	          if (e && e.target !== node) {
	            return;
	          }

	          _TransitionEvents2.default.off(node, closedHandler);
	          _this.handleClosed();
	        };

	        _TransitionEvents2.default.on(node, closedHandler);
	      }
	    }

	    return (0, _react.cloneElement)(popover, {
	      positionLeft: positionLeft,
	      positionTop: positionTop,
	      angleLeft: angleLeft,
	      angleTop: angleTop,
	      anglePosition: anglePosition,
	      placement: placement,
	      isClosing: isClosing,
	      onDismiss: this.close
	    });
	  },
	  render: function render() {
	    var child = _react2.default.Children.only(this.props.children);
	    var props = {
	      onClick: (0, _createChainedFunction2.default)(child.props.onClick, this.props.onClick)
	    };

	    props.onClick = (0, _createChainedFunction2.default)(this.toggle, props.onClick);

	    return (0, _react.cloneElement)(child, props);
	  }
	});

	exports.default = PopoverTrigger;
	module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactDom = __webpack_require__(12);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Get ownerDocument
	 * @param {ReactComponent|HTMLElement} componentOrElement
	 * @returns {HTMLDocument}
	 */
	function ownerDocument(componentOrElement) {
	  var element = _reactDom2.default.findDOMNode(componentOrElement);

	  return element && element.ownerDocument || document;
	}

	/**
	 * Get ownerWindow
	 * @param {HTMLElement} element
	 * @returns {DocumentView|Window}
	 * @see https://github.com/jquery/jquery/blob/6df669f0fb87cd9975a18bf6bbe3c3548afa4fee/src/event.js#L294-L297
	 */
	function ownerWindow(element) {
	  var doc = ownerDocument(element);

	  return doc.defaultView || doc.parentWindow || window;
	}

	exports.default = {
	  ownerDocument: ownerDocument,

	  ownerWindow: ownerWindow,

	  scrollTop: function scrollTop(element, value) {
	    if (!element) {
	      return;
	    }

	    var hasScrollTop = 'scrollTop' in element;

	    if (value === undefined) {
	      return hasScrollTop ? element.scrollTop : element.pageYOffset;
	    }

	    hasScrollTop ? element.scrollTop = value : element.scrollTo(element.scrollX, value);
	  },
	  offset: function offset(element) {
	    if (element) {
	      var rect = element.getBoundingClientRect();
	      var body = document.body;
	      var clientTop = element.clientTop || body.clientTop || 0;
	      var clientLeft = element.clientLeft || body.clientLeft || 0;
	      var scrollTop = window.pageYOffset || element.scrollTop;
	      var scrollLeft = window.pageXOffset || element.scrollLeft;

	      return {
	        top: rect.top + scrollTop - clientTop,
	        left: rect.left + scrollLeft - clientLeft
	      };
	    }

	    return null;
	  },
	  position: function position(element) {
	    return {
	      left: element.offsetLeft,
	      top: element.offsetTop
	    };
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(12);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _List = __webpack_require__(35);

	var _List2 = _interopRequireDefault(_List);

	var _Modal = __webpack_require__(37);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _NavBar = __webpack_require__(42);

	var _NavBar2 = _interopRequireDefault(_NavBar);

	var _Switch = __webpack_require__(34);

	var _Switch2 = _interopRequireDefault(_Switch);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var Select = _react2.default.createClass({
	  displayName: 'Select',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    multiple: _react.PropTypes.bool,
	    onValueChange: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'select',
	      multiple: true
	    };
	  },


	  getInitialState: function getInitialState() {
	    return {
	      isModalOpen: false
	    };
	  },

	  componentWillMount: function componentWillMount() {
	    var _props = this.props,
	        children = _props.children,
	        multiple = _props.multiple,
	        defaultValue = _props.defaultValue;


	    this.filteredChildren = this.getFilteredChildren(children);

	    if (multiple) {
	      var itemSelectedRecord = [];
	      var childrenList = [];
	      _react2.default.Children.forEach(this.filteredChildren, function (child, index) {
	        var defaultSelected = false;
	        if (!Array.isArray(defaultValue)) {
	          defaultValue = [defaultValue];
	        }
	        if (typeof child.props.defaultSelected === 'boolean') {
	          defaultSelected = child.props.defaultSelected;
	        } else if (defaultValue.includes(child.props.value)) {
	          defaultSelected = true;
	        }
	        itemSelectedRecord[index] = defaultSelected;
	        if (defaultSelected) {
	          childrenList.push(child.props.children);
	        }
	      });
	      this.initShowCaseArgs = [childrenList, multiple];
	      this.setState({
	        itemSelectedRecord: itemSelectedRecord
	      });
	    } else {
	      var itemSelectedRecordOne = {};
	      var _children = void 0;
	      var allDisabled = false;
	      _react2.default.Children.forEach(this.filteredChildren, function (child, index) {
	        if (child.props.defaultSelected || defaultValue === child.props.value) {
	          itemSelectedRecordOne.index = index;
	          itemSelectedRecordOne.value = child.props.value;
	          _children = child.props.children;
	          allDisabled = Boolean(child.props.disabled);
	        }
	      });
	      this.initShowCaseArgs = [_children, multiple];
	      this.setState({
	        allDisabled: allDisabled,
	        itemSelectedRecordOne: itemSelectedRecordOne
	      });
	    }
	  },
	  componentDidMount: function componentDidMount() {
	    this.changeShowCase.apply(this, _toConsumableArray(this.initShowCaseArgs));
	  },
	  record: function record(index, value, callback) {
	    // console.log('record', index, value);
	    var itemSelectedRecord = _extends([], this.state.itemSelectedRecord);
	    itemSelectedRecord[index] = value;
	    this.setState({
	      itemSelectedRecord: itemSelectedRecord
	    }, function () {
	      callback && callback();
	    });
	  },
	  recordOne: function recordOne(index, value, callback) {
	    // console.log('recordOne', index, value);
	    this.setState({
	      itemSelectedRecordOne: {
	        index: index,
	        value: value
	      }
	    }, function () {
	      callback && callback();
	    });
	  },
	  getFilteredChildren: function getFilteredChildren(children) {
	    var filteredChildren = [];
	    _react2.default.Children.forEach(children, function (child) {
	      if (child.type.displayName === 'SelectItem') {
	        filteredChildren.push(child);
	      }
	    });
	    return filteredChildren;
	  },
	  handleItemValueChange: function handleItemValueChange(index, value, children) {
	    var _this = this;

	    var multiple = this.props.multiple;

	    if (multiple) {
	      this.record(index, !value, function () {
	        if (_this.props.onValueChange) {
	          var valueList = [];
	          var childrenList = [];
	          _react2.default.Children.forEach(_this.filteredChildren, function (child, index) {
	            if (_this.state.itemSelectedRecord[index]) {
	              valueList.push(child.props.value);
	              childrenList.push(child.props.children);
	            }
	          });
	          _this.props.onValueChange(valueList);
	          _this.changeShowCase(childrenList, multiple);
	        }
	      });
	    } else {
	      this.recordOne(index, value, function () {
	        _this.props.onValueChange && _this.props.onValueChange(value);
	        _this.changeShowCase(children, multiple);
	      });
	    }
	  },
	  changeShowCase: function changeShowCase(children, multiple) {
	    var li = _reactDom2.default.findDOMNode(this.showCase);
	    if (li && li.tagName === 'LI') {
	      var a = li.children[0];
	      if (a && a.tagName === 'A') {
	        var div = a.children[0];
	        if (div && div.tagName === 'DIV') {
	          div.innerText = (multiple ? children.join(', ') : children) || "请选择";
	        }
	      }
	    }
	  },
	  render: function render() {
	    var _this2 = this;

	    var _props2 = this.props,
	        classPrefix = _props2.classPrefix,
	        children = _props2.children,
	        className = _props2.className,
	        multiple = _props2.multiple,
	        defaultValue = _props2.defaultValue,
	        onValueChange = _props2.onValueChange,
	        others = _objectWithoutProperties(_props2, ['classPrefix', 'children', 'className', 'multiple', 'defaultValue', 'onValueChange']);

	    var navbarProps = {
	      title: multiple ? '已选择 ' + this.state.itemSelectedRecord.reduce(function (pre, cur) {
	        return pre + cur;
	      }) + ' 项' : '请选择',
	      leftNav: [{
	        title: '',
	        onClick: function onClick() {
	          return _this2.setState({ isModalOpen: false });
	        },
	        icon: 'left-nav'
	      }]
	    };

	    var newChildren = _react2.default.Children.map(this.filteredChildren, function (child, index) {
	      if (multiple) {
	        return _react2.default.cloneElement(child, _extends({}, child.props, {
	          shape: 'checkbox',
	          checked: _this2.state.itemSelectedRecord[index],
	          onClick: function onClick(e, checked) {
	            return _this2.handleItemValueChange(index, checked);
	          }
	        }));
	      } else {
	        return _react2.default.cloneElement(child, _extends({}, child.props, {
	          shape: 'radio',
	          disabled: _this2.state.allDisabled || child.props.disabled,
	          checked: _this2.state && _this2.state.itemSelectedRecordOne && _this2.state.itemSelectedRecordOne.index === index,
	          onClick: function onClick(e) {
	            return _this2.handleItemValueChange(index, child.props.value, child.props.children);
	          }
	        }));
	      }
	    });

	    return _react2.default.createElement(
	      'div',
	      _extends({
	        className: (0, _classnames2.default)(className, this.setClassNS())
	      }, others),
	      _react2.default.createElement(
	        _List2.default,
	        null,
	        _react2.default.createElement(_List2.default.Item, {
	          ref: function ref(elem) {
	            return _this2.showCase = elem;
	          },
	          href: 'javascript:void(0);',
	          after: '\u8BF7\u9009\u62E9',
	          onClick: function onClick() {
	            return _this2.setState({ isModalOpen: true });
	          }
	        })
	      ),
	      _react2.default.createElement(
	        _Modal2.default,
	        {
	          ref: function ref(modal) {
	            _this2.modal = modal;
	          },
	          role: 'page',
	          header: _react2.default.createElement(_NavBar2.default, _extends({}, navbarProps, { amStyle: 'primary' })),
	          isOpen: this.state.isModalOpen
	        },
	        _react2.default.createElement(
	          'div',
	          { className: this.prefixClass('list') },
	          _react2.default.createElement(
	            _List2.default,
	            null,
	            newChildren
	          )
	        )
	      )
	    );
	  }
	});

	var SelectItem = _react2.default.createClass({
	  displayName: 'SelectItem',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    shape: _react.PropTypes.string,
	    checked: _react.PropTypes.bool,
	    defaultChecked: _react.PropTypes.bool,
	    disabled: _react.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'select-item'
	    };
	  },

	  getInitialState: function getInitialState() {
	    var _props3 = this.props,
	        selected = _props3.selected,
	        defaultSelected = _props3.defaultSelected;

	    return {
	      selected: typeof selected === 'boolean' ? selected : defaultSelected
	    };
	  },

	  render: function render() {
	    var _props4 = this.props,
	        classPrefix = _props4.classPrefix,
	        children = _props4.children,
	        shape = _props4.shape,
	        checked = _props4.checked,
	        disabled = _props4.disabled,
	        _onClick = _props4.onClick,
	        others = _objectWithoutProperties(_props4, ['classPrefix', 'children', 'shape', 'checked', 'disabled', 'onClick']);

	    var after = _react2.default.createElement(_Switch2.default, {
	      className: this.prefixClass('switch'),
	      shape: shape,
	      checked: checked,
	      disabled: disabled
	    });

	    return _react2.default.createElement(_List2.default.Item, {
	      className: (0, _classnames2.default)(this.setClassNS(), disabled && this.prefixClass('disabled')),
	      href: 'javascript:void(0);',
	      title: children,
	      after: after,
	      onClick: function onClick(e) {
	        return !disabled && _onClick(e, checked);
	      }
	    });
	  }
	});

	Select.Item = SelectItem;

	exports.default = Select;
	module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(12);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _TransitionEvents = __webpack_require__(8);

	var _TransitionEvents2 = _interopRequireDefault(_TransitionEvents);

	var _Icon = __webpack_require__(20);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Touchable = __webpack_require__(53);

	var _Touchable2 = _interopRequireDefault(_Touchable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
	                                                                                                                                                                                                                              * @see https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Carousel.js
	                                                                                                                                                                                                                              */

	var Slider = _react2.default.createClass({
	  displayName: 'Slider',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string,

	    controls: _react.PropTypes.bool, // prev/next icon
	    pager: _react.PropTypes.bool, // indicators or thumbs

	    slide: _react.PropTypes.bool, // what is this?
	    interval: _react.PropTypes.number, // interval
	    autoPlay: _react.PropTypes.bool,
	    loop: _react.PropTypes.bool, // loop slide

	    pauseOnHover: _react.PropTypes.bool,
	    // touch: PropTypes.bool,

	    onAction: _react.PropTypes.func,
	    onSlideEnd: _react.PropTypes.func,
	    activeIndex: _react.PropTypes.number,
	    defaultActiveIndex: _react.PropTypes.number,
	    direction: _react.PropTypes.oneOf(['prev', 'next']),
	    prevIcon: _react.PropTypes.node,
	    nextIcon: _react.PropTypes.node
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'slider',
	      controls: true,
	      pager: true,
	      slide: true,
	      interval: 5000,
	      autoPlay: true,
	      loop: true,
	      pauseOnHover: true,
	      prevIcon: _react2.default.createElement(_Icon2.default, { name: 'left-nav' }),
	      nextIcon: _react2.default.createElement(_Icon2.default, { name: 'right-nav' })
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      activeIndex: this.props.defaultActiveIndex == null ? 0 : this.props.defaultActiveIndex,
	      previousActiveIndex: null,
	      direction: null
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var activeIndex = this.getActiveIndex();

	    if (nextProps.activeIndex != null && nextProps.activeIndex !== activeIndex) {
	      clearTimeout(this.timeout);
	      this.setState({
	        previousActiveIndex: activeIndex,
	        direction: nextProps.direction != null ? nextProps.direction : this.getDirection(activeIndex, nextProps.activeIndex)
	      });
	    }
	  },
	  componentDidMount: function componentDidMount() {
	    this.props.autoPlay && this.waitForNext();
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    clearTimeout(this.timeout);
	  },
	  getDirection: function getDirection(prevIndex, index) {
	    if (prevIndex === index) {
	      return null;
	    }

	    return prevIndex > index ? 'prev' : 'next';
	  },
	  next: function next(e) {
	    e && e.preventDefault();

	    var index = this.getActiveIndex() + 1;
	    var count = _react2.default.Children.count(this.props.children);

	    if (index > count - 1) {
	      if (!this.props.loop) {
	        return;
	      }
	      index = 0;
	    }

	    this.handleSelect(index, 'next');
	  },
	  prev: function prev(e) {
	    e && e.preventDefault();

	    var index = this.getActiveIndex() - 1;

	    if (index < 0) {
	      if (!this.props.loop) {
	        return;
	      }
	      index = _react2.default.Children.count(this.props.children) - 1;
	    }

	    this.handleSelect(index, 'prev');
	  },
	  pause: function pause() {
	    this.isPaused = true;
	    clearTimeout(this.timeout);
	  },
	  play: function play() {
	    this.isPaused = false;
	    this.waitForNext();
	  },
	  waitForNext: function waitForNext() {
	    if (!this.isPaused && this.props.slide && this.props.interval && this.props.activeIndex == null) {
	      this.timeout = setTimeout(this.next, this.props.interval);
	    }
	  },
	  handleMouseOver: function handleMouseOver() {
	    if (this.props.pauseOnHover) {
	      this.pause();
	    }
	  },
	  handleMouseOut: function handleMouseOut() {
	    if (this.isPaused) {
	      this.play();
	    }
	  },
	  handleSwipeLeft: function handleSwipeLeft(e) {
	    // console.log('swipe left');
	    this.next();
	  },
	  handleSwipeRight: function handleSwipeRight(e) {
	    // console.log('swipe right....');
	    this.prev();
	  },
	  getActiveIndex: function getActiveIndex() {
	    return this.props.activeIndex != null ? this.props.activeIndex : this.state.activeIndex;
	  },
	  handleItemAnimateOutEnd: function handleItemAnimateOutEnd() {
	    this.setState({
	      previousActiveIndex: null,
	      direction: null
	    }, function () {
	      this.waitForNext();

	      if (this.props.onSlideEnd) {
	        this.props.onSlideEnd();
	      }
	    });
	  },
	  handleSelect: function handleSelect(index, direction, e) {
	    e && e.preventDefault();
	    clearTimeout(this.timeout);

	    var previousActiveIndex = this.getActiveIndex();

	    direction = direction || this.getDirection(previousActiveIndex, index);

	    if (this.props.onAction) {
	      this.props.onAction(index, direction);
	    }

	    if (this.props.activeIndex == null && index !== previousActiveIndex) {
	      if (this.state.previousActiveIndex != null) {
	        // If currently animating don't activate the new index.
	        // TODO: look into queuing this canceled call and
	        // animating after the current animation has ended.
	        return;
	      }

	      this.setState({
	        activeIndex: index,
	        previousActiveIndex: previousActiveIndex,
	        direction: direction
	      });
	    }
	  },
	  renderControls: function renderControls() {
	    return this.props.controls ? _react2.default.createElement(
	      'div',
	      { className: this.prefixClass('control') },
	      _react2.default.createElement(
	        _Touchable2.default,
	        {
	          className: this.prefixClass('control-prev'),
	          onTap: this.prev,
	          stopPropagation: true
	        },
	        this.props.prevIcon
	      ),
	      _react2.default.createElement(
	        _Touchable2.default,
	        {
	          className: this.prefixClass('control-next'),
	          onTap: this.next,
	          stopPropagation: true
	        },
	        this.props.nextIcon
	      )
	    ) : null;
	  },
	  renderPager: function renderPager() {
	    var _this = this;

	    if (this.props.pager) {
	      var isThumbnailNav = false;

	      var children = _react2.default.Children.map(this.props.children, function (child, i) {
	        var className = i === _this.getActiveIndex() ? _this.setClassNS('active') : null;
	        var thumb = child.props.thumbnail;

	        if (!isThumbnailNav) {
	          isThumbnailNav = !!thumb;
	        }

	        return _react2.default.createElement(
	          _Touchable2.default,
	          {
	            component: 'li',
	            className: className,
	            key: i,
	            onTap: _this.handleSelect.bind(_this, i, null)
	          },
	          thumb ? _react2.default.createElement('img', { src: thumb }) : null
	        );
	      });
	      var pagerClassName = this.prefixClass(isThumbnailNav ? 'thumbs' : 'indicators');

	      return _react2.default.createElement(
	        'ol',
	        {
	          className: (0, _classnames2.default)(this.prefixClass('pager'), pagerClassName)
	        },
	        children
	      );
	    }

	    return null;
	  },
	  renderItem: function renderItem(child, index) {
	    var activeIndex = this.getActiveIndex();
	    var isActive = index === activeIndex;
	    var isPreviousActive = this.state.previousActiveIndex != null && this.state.previousActiveIndex === index && this.props.slide;
	    var props = {
	      active: isActive,
	      ref: child.ref,
	      key: child.key ? child.key : index,
	      index: index,
	      animateOut: isPreviousActive,
	      animateIn: isActive && this.state.previousActiveIndex != null && this.props.slide,
	      direction: this.state.direction,
	      onAnimateOutEnd: isPreviousActive ? this.handleItemAnimateOutEnd : null
	    };

	    return _react2.default.cloneElement(child, props);
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        className = _props.className,
	        children = _props.children,
	        props = _objectWithoutProperties(_props, ['className', 'children']);

	    delete props.classPrefix;
	    delete props.onAction;
	    delete props.pager;
	    delete props.controls;
	    delete props.slide;
	    delete props.interval;
	    delete props.pauseOnHover;
	    delete props.prevIcon;
	    delete props.nextIcon;

	    // TODO: 优化 swipe，左右方向阻止默认事件，垂直方向不阻止
	    return _react2.default.createElement(
	      _Touchable2.default,
	      _extends({}, props, {
	        component: 'div',
	        className: (0, _classnames2.default)(classSet, className),
	        onMouseOver: this.handleMouseOver,
	        onMouseOut: this.handleMouseOut,
	        onSwipeLeft: this.handleSwipeLeft,
	        onSwipeRight: this.handleSwipeRight,
	        preventDefault: false,
	        stopPropagation: true
	      }),
	      _react2.default.createElement(
	        'ul',
	        { className: this.prefixClass('slides') },
	        _react2.default.Children.map(children, this.renderItem)
	      ),
	      this.renderControls(),
	      this.renderPager()
	    );
	  }
	});

	var SliderItem = _react2.default.createClass({
	  displayName: 'SliderItem',

	  propTypes: {
	    direction: _react.PropTypes.oneOf(['prev', 'next']),
	    onAnimateOutEnd: _react.PropTypes.func,
	    active: _react.PropTypes.bool,
	    animateIn: _react.PropTypes.bool,
	    animateOut: _react.PropTypes.bool,
	    caption: _react.PropTypes.node,
	    index: _react.PropTypes.number,
	    thumbnail: _react.PropTypes.string
	  },

	  getInitialState: function getInitialState() {
	    return {
	      direction: null
	    };
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      animation: true
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (this.props.active !== nextProps.active) {
	      this.setState({
	        direction: null
	      });
	    }
	  },
	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    if (!this.props.active && prevProps.active) {
	      _TransitionEvents2.default.on(_reactDom2.default.findDOMNode(this), this.handleAnimateOutEnd);
	    }

	    if (this.props.active !== prevProps.active) {
	      setTimeout(this.startAnimation, 20);
	    }
	  },
	  handleAnimateOutEnd: function handleAnimateOutEnd() {
	    if (this.props.onAnimateOutEnd && this.isMounted()) {
	      this.props.onAnimateOutEnd(this.props.index);
	    }
	  },
	  startAnimation: function startAnimation() {
	    if (!this.isMounted()) {
	      return;
	    }

	    this.setState({
	      direction: this.props.direction === 'prev' ? 'right' : 'left'
	    });
	  },
	  render: function render() {
	    var _props2 = this.props,
	        className = _props2.className,
	        active = _props2.active,
	        animateIn = _props2.animateIn,
	        animateOut = _props2.animateOut,
	        direction = _props2.direction;

	    var classSet = {
	      active: active && !animateIn || animateOut,
	      next: active && animateIn && direction === 'next',
	      prev: active && animateIn && direction === 'prev'
	    };

	    if (this.state.direction && (animateIn || animateOut)) {
	      classSet[this.state.direction] = true;
	    }

	    return _react2.default.createElement(
	      'li',
	      {
	        className: (0, _classnames2.default)(className, classSet)
	      },
	      this.props.children
	    );
	  }
	});

	Slider.Item = SliderItem;

	exports.default = Slider;
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Mixin = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _TouchableMixin = __webpack_require__(13);

	var _TouchableMixin2 = _interopRequireDefault(_TouchableMixin);

	var _createChainedFunction = __webpack_require__(46);

	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

	var _isTouchSupported = __webpack_require__(54);

	var _isTouchSupported2 = _interopRequireDefault(_isTouchSupported);

	__webpack_require__(55);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
	                                                                                                                                                                                                                              * React port of Zepto touch.
	                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                              * @see https://github.com/joakimbeng/react-swiper
	                                                                                                                                                                                                                              * @see https://github.com/dogfessional/react-swipeable
	                                                                                                                                                                                                                              * @see https://github.com/damusnet/react-swipe-views
	                                                                                                                                                                                                                              * @see http://www.javascriptkit.com/javatutors/touchevents3.shtml
	                                                                                                                                                                                                                              * @see https://github.com/JedWatson/react-tappable
	                                                                                                                                                                                                                              * @see https://github.com/madrobby/zepto/blob/master/src/touch.js
	                                                                                                                                                                                                                              */

	var Touchable = _react2.default.createClass({
	  displayName: 'Touchable',

	  mixins: [_TouchableMixin2.default],

	  propTypes: {
	    component: _react.PropTypes.any
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      component: 'span'
	    };
	  },
	  render: function render() {
	    var _props = this.props,
	        Component = _props.component,
	        onTap = _props.onTap,
	        props = _objectWithoutProperties(_props, ['component', 'onTap']);

	    if (_isTouchSupported2.default) {
	      _extends(props, this.getTouchHandlers());
	    } else {
	      // handle `tap` as `click` on non-touch devices
	      props.onClick = (0, _createChainedFunction2.default)(props.onClick, onTap);
	    }

	    delete props.moveThreshold;
	    delete props.tapDelay;
	    delete props.pressDelay;
	    delete props.preventDefault;
	    delete props.stopPropagation;
	    delete props.onSwipe;
	    delete props.onSwipeLeft;
	    delete props.onSwipeUp;
	    delete props.onSwipeRight;
	    delete props.onSwipeDown;
	    delete props.onTap;
	    delete props.onSingleTap;
	    delete props.onDoubleTap;
	    delete props.onPress;

	    return _react2.default.createElement(
	      Component,
	      props,
	      this.props.children
	    );
	  }
	});

	exports.default = Touchable;
	exports.Mixin = _TouchableMixin2.default;

	// TODO: Mixin 里似乎没必要使用 state 记录事件相关信息
	// TODO: 添加 touch active className

/***/ },
/* 54 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var supportTouch = !!('ontouchstart' in global || global.DocumentTouch && document instanceof DocumentTouch);

	exports.default = supportTouch;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 55 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// UC browser UI controller

	var controller = global.navigator && global.navigator.control || {};

	/**
	 * ucUIControl
	 * @param {string} feature - 'gesture' or 'longpressMenu'
	 * @param {boolean} state
	 * @returns {boolean}
	 */
	function ucUIControl(feature, state) {
	  return controller[feature] && controller[feature](state);
	}

	// disable gesture
	ucUIControl('gesture', false);

	exports.default = ucUIControl;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _Icon = __webpack_require__(20);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Badge = __webpack_require__(21);

	var _Badge2 = _interopRequireDefault(_Badge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	// TODO: 默认的选中处理
	var TabBar = _react2.default.createClass({
	  displayName: 'TabBar',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string,
	    component: _react.PropTypes.node,
	    amStyle: _react.PropTypes.string,
	    onAction: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'tabbar',
	      component: 'nav',
	      onAction: function onAction() {}
	    };
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        Component = _props.component,
	        className = _props.className,
	        children = _props.children,
	        onAction = _props.onAction,
	        props = _objectWithoutProperties(_props, ['component', 'className', 'children', 'onAction']);

	    delete props.classPrefix;
	    delete props.amStyle;

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      _react2.default.Children.map(children, function (child, index) {
	        var _child$props = child.props,
	            eventKey = _child$props.eventKey,
	            onClick = _child$props.onClick,
	            props = _objectWithoutProperties(_child$props, ['eventKey', 'onClick']);

	        var clickHandler = onClick || onAction;
	        var key = eventKey || index;
	        eventKey = eventKey || key;

	        return _react2.default.createElement(TabBar.Item, _extends({}, props, {
	          onClick: clickHandler.bind(null, eventKey),
	          key: key,
	          eventKey: eventKey
	        }));
	      })
	    );
	  }
	});

	// TODO:
	//   Icon 应该支持用户自定义：
	//   React-native 采用 require('path/to/icon') 的形式，
	//   这里可能需要再添加一个属性
	var TabBarItem = _react2.default.createClass({
	  displayName: 'TabBarItem',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string,
	    component: _react.PropTypes.any,
	    icon: _react.PropTypes.string, // icon name
	    title: _react.PropTypes.string,
	    href: _react.PropTypes.string,
	    eventKey: _react.PropTypes.any,
	    badge: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	    badgeStyle: _react.PropTypes.string,
	    selected: _react.PropTypes.bool, // alias of `active`
	    selectedIcon: _react.PropTypes.node, // not supported now
	    onAction: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'tabbar',
	      component: 'span',
	      onAction: function onAction() {}
	    };
	  },
	  renderBadge: function renderBadge() {
	    var _props2 = this.props,
	        badge = _props2.badge,
	        badgeStyle = _props2.badgeStyle;


	    return badge ? _react2.default.createElement(
	      _Badge2.default,
	      {
	        amStyle: badgeStyle || 'alert',
	        rounded: true
	      },
	      badge
	    ) : null;
	  },
	  renderIcon: function renderIcon() {
	    var icon = this.props.icon;


	    return icon ? _react2.default.createElement(
	      _Icon2.default,
	      { name: icon, key: 'tabbarIcon' },
	      this.renderBadge()
	    ) : null;
	  },
	  renderTitle: function renderTitle() {
	    var labelClassName = this.prefixClass('label');
	    var title = this.props.title;


	    return title ? _react2.default.createElement(
	      'span',
	      {
	        className: labelClassName,
	        key: 'tabbarTitle'
	      },
	      title
	    ) : null;
	  },
	  render: function render() {
	    var classSet = this.getClassSet(true);

	    var _props3 = this.props,
	        Component = _props3.component,
	        className = _props3.className,
	        props = _objectWithoutProperties(_props3, ['component', 'className']);

	    delete props.classPrefix;
	    delete props.badge;
	    delete props.badgeStyle;
	    delete props.eventKey;
	    delete props.onAction;

	    Component = this.props.href ? 'a' : Component;

	    // TODO: how to display badge when icon not set?

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className, this.prefixClass('item'))
	      }),
	      [this.renderIcon(), this.renderTitle()]
	    );
	  }
	});

	TabBar.Item = TabBarItem;

	exports.default = TabBar;
	module.exports = exports['default'];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _Icon = __webpack_require__(20);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Table = _react2.default.createClass({
	  displayName: 'Table',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    data: _react.PropTypes.array.isRequired,
	    maxHeight: _react.PropTypes.string,
	    minWidth: _react.PropTypes.array,
	    type: _react.PropTypes.number
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'table',
	      maxHeight: 'auto',
	      minWidth: [],
	      type: 0
	    };
	  },

	  getHeadBorderStyle: function getHeadBorderStyle(type) {
	    return type ? { border: '1px solid #ccc' } : { borderBottom: '2px solid #ccc' };
	  },

	  getBodyBorderStyle: function getBodyBorderStyle(type) {
	    return type ? { border: '1px solid #ccc', borderTop: 'none' } : { borderBottom: '1px solid #ccc' };
	  },

	  render: function render() {
	    var _this = this;

	    var _props = this.props,
	        data = _props.data,
	        maxHeight = _props.maxHeight,
	        minWidth = _props.minWidth,
	        classPrefix = _props.classPrefix,
	        type = _props.type;

	    if (!minWidth || !minWidth.length && data[0]) {
	      data[0].forEach(function () {
	        minWidth.push('100px');
	      });
	    }

	    return _react2.default.createElement(
	      'div',
	      { className: (0, _classnames2.default)(this.getClassSet()) },
	      _react2.default.createElement(
	        'table',
	        null,
	        _react2.default.createElement(
	          'thead',
	          null,
	          _react2.default.createElement(
	            'tr',
	            null,
	            data[0].map(function (title, index) {
	              return _react2.default.createElement(
	                'td',
	                { style: _extends({ backgroundColor: type === 2 && '#EEE' }, _this.getHeadBorderStyle(type), { minWidth: minWidth[index] }), key: index },
	                title
	              );
	            })
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'table',
	        null,
	        _react2.default.createElement(
	          'tbody',
	          { style: { maxHeight: maxHeight } },
	          data.map(function (items, index) {
	            return index ? _react2.default.createElement(
	              'tr',
	              { className: type === 2 ? (0, _classnames2.default)(_this.prefixClass('type-3')) : undefined, key: index },
	              items.map(function (item, i) {
	                return _react2.default.createElement(
	                  'td',
	                  { style: _extends({}, _this.getBodyBorderStyle(type), { minWidth: minWidth[i] }), key: i },
	                  item
	                );
	              })
	            ) : undefined;
	          })
	        )
	      )
	    );
	  }

	});

	exports.default = Table;
	module.exports = exports['default'];

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _Button = __webpack_require__(22);

	var _Button2 = _interopRequireDefault(_Button);

	var _ButtonGroup = __webpack_require__(25);

	var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

	var _Icon = __webpack_require__(20);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _tool = __webpack_require__(59);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Tabs = _react2.default.createClass({
	  displayName: 'Tabs',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string,
	    activeKey: _react.PropTypes.any,
	    defaultActiveKey: _react.PropTypes.any,
	    onAction: _react.PropTypes.func,
	    inset: _react.PropTypes.bool,
	    navStyle: _react.PropTypes.object,
	    navClassName: _react.PropTypes.string,
	    secondTab: _react.PropTypes.bool,
	    counter: _react.PropTypes.number,
	    animation: _react.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'tabs',
	      animation: true
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      activeKey: this.getDefaultActiveKey(),
	      previousActiveKey: null
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var nextActiveKey = nextProps.activeKey;

	    // update controlled Tabs' state
	    if (nextActiveKey != null && nextActiveKey !== this.props.activeKey) {
	      this.setState({
	        activeKey: nextActiveKey,
	        previousActiveKey: this.props.activeKey
	      });
	    }
	  },
	  getDefaultActiveKey: function getDefaultActiveKey(children) {
	    var defaultActiveKey = this.props.defaultActiveKey;

	    if (defaultActiveKey != null) {
	      return defaultActiveKey;
	    }

	    _react2.default.Children.forEach(children, function (child) {
	      if (defaultActiveKey == null) {
	        defaultActiveKey = child.props.eventKey;
	      }
	    });

	    return defaultActiveKey != null ? defaultActiveKey : 0;
	  },
	  getActiveKey: function getActiveKey() {
	    return this.props.activeKey != null ? this.props.activeKey : this.state.activeKey;
	  },
	  handleClick: function handleClick(key, disabled, href, e) {
	    e.preventDefault();
	    var activeKey = this.state.activeKey;

	    if (disabled) {
	      return;
	    }

	    if (this.props.onAction) {
	      this.props.onAction(key);
	    }

	    if (href) {
	      window.location = (0, _tool.getAbsoluteUrl)(href);
	      return;
	    }

	    // uncontrolled
	    if (this.props.activeKey == null && activeKey !== key) {
	      this.setState({
	        activeKey: key,
	        previousActiveKey: activeKey
	      });
	    }
	  },
	  renderNav: function renderNav() {
	    var _this = this;

	    var activeKey = this.getActiveKey();
	    var navWrapStyle = this.props.navStyle;
	    var navWrapClassName = this.props.navClassName;
	    var secondTab = this.props.secondTab;
	    var basis = this.props.counter ? 1 / this.props.counter * 100 : null;
	    var navPrefix = secondTab ? 'subnav' : 'nav';

	    // something is wrong with react
	    var flexBasis = basis ? {
	      flexBasis: basis + '%'
	    } : {};

	    var navClassNames = (0, _classnames2.default)(this.prefixClass('' + navPrefix), navWrapClassName);

	    var navs = _react2.default.Children.map(this.props.children, function (child, index) {
	      var _child$props = child.props,
	          href = _child$props.href,
	          eventKey = _child$props.eventKey,
	          disabled = _child$props.disabled,
	          classPrefix = _child$props.classPrefix,
	          navStyle = _child$props.navStyle,
	          navClassName = _child$props.navClassName;

	      var key = index;

	      eventKey = eventKey !== undefined ? eventKey : index;
	      var active = eventKey === activeKey;
	      var prefixClass = _this.prefixClass(navPrefix + '-item');
	      var itemWrapClass = _this.prefixClass(navPrefix + '-item-wrap');
	      var itemFixSkewClass = _this.prefixClass(navPrefix + '-item-fix-skew');

	      var itemCls = (0, _classnames2.default)(prefixClass, {
	        active: active,
	        disabled: disabled
	      }, navClassName);

	      var itemStyle = _extends(navStyle || {}, flexBasis);

	      return !secondTab ? _react2.default.createElement(
	        'span',
	        {
	          ref: 'tabNav' + key,
	          key: key,
	          onClick: _this.handleClick.bind(_this, key, disabled, href),
	          className: itemCls,
	          style: flexBasis
	        },
	        child.props.title
	      ) : _react2.default.createElement(
	        'span',
	        { className: itemWrapClass },
	        _react2.default.createElement(
	          'span',
	          {
	            ref: 'tabNav' + key,
	            key: key,
	            onClick: _this.handleClick.bind(_this, key, disabled, href),
	            className: itemCls,
	            style: navStyle
	          },
	          _react2.default.createElement(
	            'span',
	            { className: itemFixSkewClass },
	            child.props.title
	          )
	        )
	      );
	    });

	    return _react2.default.createElement(
	      'div',
	      {
	        className: navClassNames,
	        style: navWrapStyle
	      },
	      navs
	    );
	  },
	  renderTabPanels: function renderTabPanels() {
	    var _this2 = this;

	    var activeKey = this.getActiveKey();
	    var animation = this.props.animation;

	    var panels = _react2.default.Children.map(this.props.children, function (child, index) {
	      var _child$props2 = child.props,
	          eventKey = _child$props2.eventKey,
	          children = _child$props2.children,
	          props = _objectWithoutProperties(_child$props2, ['eventKey', 'children']);

	      if (eventKey === undefined) {
	        eventKey = index;
	      }

	      var isActive = eventKey === activeKey;

	      var Item = _react2.default.createElement(
	        Tabs.Item,
	        _extends({
	          active: isActive,
	          eventKey: eventKey,
	          key: 'tabPanel' + index,
	          animation: animation
	        }, props),
	        children
	      );

	      if (_this2.props.render === 'current') {
	        return isActive ? Item : null;
	      } else {
	        return Item;
	      }
	    });

	    return _react2.default.createElement(
	      'div',
	      {
	        className: this.prefixClass('body')
	      },
	      panels
	    );
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        className = _props.className,
	        props = _objectWithoutProperties(_props, ['className']);

	    delete props.classPrefix;
	    delete props.activeKey;
	    delete props.defaultActiveKey;
	    delete props.inset;
	    delete props.onAction;
	    delete props.secondTab;
	    delete props.counter;
	    delete props.animation;
	    delete props.render;

	    return _react2.default.createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      this.renderNav(),
	      this.renderTabPanels()
	    );
	  }
	});

	var TabsItem = _react2.default.createClass({
	  displayName: 'TabsItem',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string,
	    title: _react.PropTypes.node,
	    eventKey: _react.PropTypes.any,
	    disabled: _react.PropTypes.bool,
	    active: _react.PropTypes.bool,
	    noPadded: _react.PropTypes.bool,
	    navStyle: _react.PropTypes.object
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'tab'
	    };
	  },
	  render: function render() {
	    var classSet = this.getClassSet(true);

	    var _props2 = this.props,
	        className = _props2.className,
	        children = _props2.children,
	        noPadded = _props2.noPadded,
	        active = _props2.active,
	        animation = _props2.animation,
	        props = _objectWithoutProperties(_props2, ['className', 'children', 'noPadded', 'active', 'animation']);

	    var elementName = 'panel';

	    delete props.classPrefix;
	    delete props.eventKey;
	    delete props.active;
	    delete props.noPadded;
	    delete props.navStyle;
	    delete props.counter;
	    delete props.animation;

	    classSet[this.prefixClass(elementName)] = true;
	    classSet[this.prefixClass(elementName + '-no-padded')] = noPadded;
	    classSet[this.prefixClass(elementName + '-no-animation')] = !animation;

	    return _react2.default.createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      children
	    );
	  }
	});

	Tabs.Item = TabsItem;

	exports.default = Tabs;

	// TODO: Nav 的可定制性，如允许传入 Router 的 Link 组件

	module.exports = exports['default'];

/***/ },
/* 59 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * some tool functions
	 */

	var getAbsoluteUrl = function () {
	  var a = void 0;

	  return function (url) {
	    if (!a) a = document.createElement('a');
	    a.href = url;
	    return a.href;
	  };
	}();

	exports.getAbsoluteUrl = getAbsoluteUrl;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Title = _react2.default.createClass({
	  displayName: 'Title',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string,
	    amStyle: _react.PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'alert', 'dark']),
	    level: _react.PropTypes.number,
	    displayLevel: _react.PropTypes.string,
	    text: _react.PropTypes.node,
	    icon: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]),
	    more: _react.PropTypes.node
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'title',
	      level: 1
	    };
	  },
	  renderIcon: function renderIcon(icon) {
	    if (typeof icon === 'string') {
	      return _react2.default.createElement(
	        'span',
	        { className: this.prefixClass('left-icon') },
	        _react2.default.createElement('img', { src: icon })
	      );
	    } else if (_react2.default.isValidElement(icon)) {
	      return _react2.default.createElement(
	        'span',
	        { className: (0, _classnames2.default)(this.prefixClass('left-icon'), this.prefixClass('left-icon-custom')) },
	        icon
	      );
	    } else {
	      return _react2.default.createElement('span', { className: this.prefixClass('left-icon') });
	    }
	  },
	  renderText: function renderText(text, children, level, displayLevel) {
	    var ComponentClass = 'h' + level;
	    return _react2.default.createElement(
	      ComponentClass,
	      { className: (0, _classnames2.default)(this.prefixClass('left-text'), displayLevel === 'big' && this.prefixClass('left-text-big'), displayLevel === 'small' && this.prefixClass('left-text-small')) },
	      text ? text : children
	    );
	  },
	  renderRight: function renderRight(more) {
	    var _this = this;

	    if (Array.isArray(more)) {
	      return _react2.default.createElement(
	        'nav',
	        { className: (0, _classnames2.default)(this.prefixClass('right')) },
	        more.map(function (item, index) {
	          return _react2.default.createElement(
	            'span',
	            { key: index, className: _this.prefixClass('right-item') },
	            item
	          );
	        })
	      );
	    } else if (_react2.default.isValidElement(more)) {
	      return _react2.default.createElement(
	        'nav',
	        { className: (0, _classnames2.default)(this.prefixClass('right')) },
	        _react2.default.createElement(
	          'span',
	          { className: this.prefixClass('right-item') },
	          more
	        )
	      );
	    } else {
	      return null;
	    }
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        children = _props.children,
	        className = _props.className,
	        amStyle = _props.amStyle,
	        text = _props.text,
	        level = _props.level,
	        icon = _props.icon,
	        more = _props.more,
	        displayLevel = _props.displayLevel,
	        props = _objectWithoutProperties(_props, ['children', 'className', 'amStyle', 'text', 'level', 'icon', 'more', 'displayLevel']);

	    delete props.classPrefix;

	    return _react2.default.createElement(
	      'header',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)(this.prefixClass('left')) },
	        this.renderIcon(icon),
	        this.renderText(text, children, level, displayLevel)
	      ),
	      this.renderRight(more)
	    );
	  }
	});

	exports.default = Title;
	module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Card = __webpack_require__(26);

	var _Card2 = _interopRequireDefault(_Card);

	var _Grid = __webpack_require__(15);

	var _Grid2 = _interopRequireDefault(_Grid);

	var _Col = __webpack_require__(16);

	var _Col2 = _interopRequireDefault(_Col);

	var _Icon = __webpack_require__(20);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TodoItemTypeOneTop = _react2.default.createClass({
	  displayName: 'TodoItemTypeOneTop',
	  render: function render() {
	    var _props = this.props,
	        onCollapse = _props.onCollapse,
	        title = _props.title,
	        subtitle = _props.subtitle,
	        isCollapsed = _props.isCollapsed;


	    var style = {
	      wrap: {
	        borderBottom: isCollapsed ? '' : '1px solid #d8d8d8',
	        position: 'relative'
	      },
	      left: {
	        marginRight: 12
	      },
	      right: {
	        display: 'flex',
	        position: 'absolute',
	        top: 0,
	        right: 0,
	        width: 12,
	        fontSize: 12,
	        height: '100%',
	        color: '#d8d8d8',
	        justifyContent: 'center',
	        alignItems: 'center'
	      },
	      title: {
	        fontSize: 16,
	        paddingTop: 16,
	        marginBottom: 2
	      },
	      subtitle: {
	        paddingBottom: 8
	      },
	      icon: {}
	    };

	    return _react2.default.createElement(
	      'div',
	      { style: style.wrap },
	      _react2.default.createElement(
	        'div',
	        { style: style.left },
	        _react2.default.createElement(
	          'h1',
	          { style: style.title },
	          title
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: style.subtitle },
	          subtitle
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: style.right, onClick: onCollapse },
	        _react2.default.createElement(_Icon2.default, { name: isCollapsed ? 'down-nav' : 'up-nav' })
	      )
	    );
	  }
	});

	var TodoItemTypeOneBottom = _react2.default.createClass({
	  displayName: 'TodoItemTypeOneBottom',
	  render: function render() {
	    var _props2 = this.props,
	        onEdit = _props2.onEdit,
	        onDelete = _props2.onDelete,
	        show = _props2.show;


	    var style = {
	      wrap: {
	        display: show ? '' : 'none',
	        margin: '0 -0.9375rem -0.9375rem',
	        borderTop: '1px solid #d8d8d8'
	      },
	      col: {
	        position: 'relative'
	      },
	      a: {
	        display: 'block',
	        width: 60,
	        margin: '0 auto',
	        color: '#000000',
	        textAlign: 'center',
	        padding: '6px 6px 8px'
	      },
	      text: {
	        fontSize: 12,
	        lineHeight: 1,
	        color: '#999999'
	      },
	      s: {
	        width: 1,
	        height: '60%',
	        position: 'absolute',
	        top: '20%',
	        right: 0,
	        backgroundColor: '#d8d8d8'
	      }
	    };

	    return _react2.default.createElement(
	      'div',
	      { style: style.wrap },
	      _react2.default.createElement(
	        _Grid2.default,
	        null,
	        _react2.default.createElement(
	          _Col2.default,
	          { style: style.col },
	          _react2.default.createElement(
	            'a',
	            { style: style.a, href: 'javascript:void(0);', onClick: onEdit },
	            _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement(_Icon2.default, { name: 'compose' })
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: style.text },
	              '\u7F16\u8F91'
	            )
	          ),
	          _react2.default.createElement('div', { style: style.s })
	        ),
	        _react2.default.createElement(
	          _Col2.default,
	          null,
	          _react2.default.createElement(
	            'a',
	            { style: style.a, href: 'javascript:void(0);', onClick: onDelete },
	            _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement(_Icon2.default, { name: 'trash' })
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: style.text },
	              '\u5220\u9664'
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var TodoItemTypeOne = _react2.default.createClass({
	  displayName: 'TodoItemTypeOne',


	  propTypes: {
	    title: _react.PropTypes.string.isRequired,
	    subtitle: _react.PropTypes.node,
	    defaultCollapsed: _react.PropTypes.bool,
	    withBottom: _react.PropTypes.bool,
	    onEdit: _react.PropTypes.func,
	    onDelete: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      defaultCollapsed: true
	    };
	  },


	  getInitialState: function getInitialState() {
	    var defaultCollapsed = this.props.defaultCollapsed;

	    return {
	      isCollapsed: defaultCollapsed
	    };
	  },

	  render: function render() {
	    var _this = this;

	    var _props3 = this.props,
	        children = _props3.children,
	        title = _props3.title,
	        subtitle = _props3.subtitle,
	        defaultCollapsed = _props3.defaultCollapsed,
	        withBottom = _props3.withBottom,
	        onEdit = _props3.onEdit,
	        onDelete = _props3.onDelete,
	        layout = _props3.layout,
	        noline = _props3.noline,
	        others = _props3.others;


	    var style = {
	      body: {
	        marginTop: '-0.9375rem',
	        marginBottom: '-0.9375rem'
	      },
	      detail: {
	        margin: '8px 0'
	      }
	    };

	    return _react2.default.createElement(
	      _Card2.default,
	      _extends({ layout: true, noline: true }, others),
	      _react2.default.createElement(
	        'div',
	        { style: style.body },
	        _react2.default.createElement(TodoItemTypeOneTop, {
	          isCollapsed: this.state.isCollapsed,
	          title: title,
	          subtitle: subtitle,
	          onCollapse: function onCollapse() {
	            _this.setState({ isCollapsed: !_this.state.isCollapsed });
	          }
	        }),
	        _react2.default.createElement(
	          'div',
	          { style: _extends(style.detail, this.state.isCollapsed && { display: 'none' }) },
	          children
	        ),
	        withBottom && _react2.default.createElement(TodoItemTypeOneBottom, {
	          show: !this.state.isCollapsed,
	          onEdit: onEdit,
	          onDelete: onDelete
	        })
	      )
	    );
	  }
	});

	exports.default = TodoItemTypeOne;
	module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Card = __webpack_require__(26);

	var _Card2 = _interopRequireDefault(_Card);

	var _Icon = __webpack_require__(20);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TodoItemTypeTwoCollapser = _react2.default.createClass({
	  displayName: 'TodoItemTypeTwoCollapser',
	  render: function render() {
	    var _props = this.props,
	        onCollapse = _props.onCollapse,
	        isCollapsed = _props.isCollapsed;


	    var style = {
	      wrap: {
	        position: 'absolute',
	        bottom: 15,
	        right: 15,
	        width: 12,
	        height: 12,
	        fontSize: 12,
	        color: '#d8d8d8'
	      }
	    };

	    return _react2.default.createElement(
	      'div',
	      { style: style.wrap, onClick: onCollapse },
	      _react2.default.createElement(_Icon2.default, { name: isCollapsed ? 'down-nav' : 'up-nav' })
	    );
	  }
	});

	var TodoItemTypeTwoTop = _react2.default.createClass({
	  displayName: 'TodoItemTypeTwoTop',
	  render: function render() {
	    var _props2 = this.props,
	        isCollapsed = _props2.isCollapsed,
	        title = _props2.title,
	        subtitle = _props2.subtitle,
	        after = _props2.after;


	    var style = {
	      wrap: {
	        position: 'relative'
	      },
	      left: {
	        marginRight: 60
	      },
	      after: {
	        position: 'absolute',
	        top: 16,
	        right: 0,
	        width: 60,
	        fontSize: 12,
	        textAlign: 'right'
	      },
	      title: {
	        fontSize: 16,
	        paddingTop: 16,
	        marginBottom: 2
	      },
	      subtitle: {
	        paddingBottom: isCollapsed ? 8 : ''
	      }
	    };

	    return _react2.default.createElement(
	      'div',
	      { style: style.wrap },
	      _react2.default.createElement(
	        'div',
	        { style: style.left },
	        _react2.default.createElement(
	          'h1',
	          { style: style.title },
	          title
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: style.subtitle },
	          subtitle
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: style.after },
	        after
	      )
	    );
	  }
	});

	var TodoItemTypeTwo = _react2.default.createClass({
	  displayName: 'TodoItemTypeTwo',


	  propTypes: {
	    title: _react.PropTypes.string.isRequired,
	    subtitle: _react.PropTypes.node,
	    after: _react.PropTypes.node,
	    defaultCollapsed: _react.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      defaultCollapsed: true
	    };
	  },


	  getInitialState: function getInitialState() {
	    var defaultCollapsed = this.props.defaultCollapsed;

	    return {
	      isCollapsed: defaultCollapsed
	    };
	  },

	  render: function render() {
	    var _this = this;

	    var _props3 = this.props,
	        children = _props3.children,
	        title = _props3.title,
	        subtitle = _props3.subtitle,
	        after = _props3.after,
	        defaultCollapsed = _props3.defaultCollapsed,
	        layout = _props3.layout,
	        noline = _props3.noline,
	        others = _props3.others;


	    var style = {
	      body: {
	        marginTop: '-0.9375rem',
	        marginBottom: '-0.9375rem'
	      },
	      detail: {
	        marginBottom: 8
	      }
	    };

	    return _react2.default.createElement(
	      _Card2.default,
	      _extends({ layout: true, noline: true, style: { position: 'relative' } }, others),
	      _react2.default.createElement(
	        'div',
	        { style: style.body },
	        _react2.default.createElement(TodoItemTypeTwoTop, {
	          isCollapsed: this.state.isCollapsed,
	          title: title,
	          subtitle: subtitle,
	          after: after
	        }),
	        _react2.default.createElement(
	          'div',
	          { style: _extends(style.detail, this.state.isCollapsed && { display: 'none' }) },
	          children
	        ),
	        _react2.default.createElement(TodoItemTypeTwoCollapser, {
	          isCollapsed: this.state.isCollapsed,
	          onCollapse: function onCollapse() {
	            _this.setState({ isCollapsed: !_this.state.isCollapsed });
	          }
	        })
	      )
	    );
	  }
	});

	exports.default = TodoItemTypeTwo;
	module.exports = exports['default'];

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _className = __webpack_require__(31);

	var _Modal = __webpack_require__(37);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _NavBar = __webpack_require__(42);

	var _NavBar2 = _interopRequireDefault(_NavBar);

	var _View = __webpack_require__(41);

	var _View2 = _interopRequireDefault(_View);

	var _Container = __webpack_require__(14);

	var _Container2 = _interopRequireDefault(_Container);

	var _Tree = __webpack_require__(64);

	var _Tree2 = _interopRequireDefault(_Tree);

	var _TreeNode = __webpack_require__(68);

	var _TreeNode2 = _interopRequireDefault(_TreeNode);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Tree = function (_React$Component) {
	  _inherits(Tree, _React$Component);

	  function Tree(props) {
	    _classCallCheck(this, Tree);

	    var _this = _possibleConstructorReturn(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).call(this, props));

	    _this.triggerModal = function (status) {
	      _this.setState({
	        isModalOpen: status
	      });
	    };

	    _this.handleCancelClick = function () {
	      _this.triggerModal(false);
	    };

	    _this.handleConfirmClick = function () {
	      var value = _this.state.checkingValue;
	      value ? _this.setState({
	        value: value,
	        isChecked: true
	      }) : null;
	      _this.triggerModal(false);
	    };

	    _this.onCheck = function (currentTreeNode, checkedKeys, filteredValues, info) {

	      var value = filteredValues.map(function (filteredValue) {
	        return filteredValue.value;
	      });
	      _this.setState({
	        checkingValue: value.join(', ')
	      });

	      if (_this.props.onCheck) {
	        _this.props.onCheck(currentTreeNode, checkedKeys, filteredValues, info);
	      }
	    };

	    var iptDefault = _this.props.inputDefault;
	    _this.state = {
	      isModalOpen: false,
	      value: iptDefault,
	      checkingValue: '',
	      isChecked: false
	    };
	    return _this;
	  }

	  _createClass(Tree, [{
	    key: 'render',
	    value: function render() {
	      var _cx4,
	          _this2 = this;

	      var _props = this.props,
	          title = _props.title,
	          label = _props.label,
	          classPrefix = _props.classPrefix,
	          onCheck = _props.onCheck,
	          props = _objectWithoutProperties(_props, ['title', 'label', 'classPrefix', 'onCheck']);

	      var itemLeft = {
	        title: '',
	        onClick: this.handleCancelClick
	      };

	      var itemRight = {
	        title: '确定',
	        onClick: this.handleConfirmClick
	      };

	      var dataAll = {
	        title: title,
	        leftNav: [_extends({}, itemLeft, { icon: 'left-nav' })],
	        rightNav: [_extends({}, itemRight)]
	      };

	      var prefixCls = (0, _className.setClassNS)(classPrefix);
	      var modalCls = (0, _classnames2.default)(_defineProperty({}, prefixCls + '-modal', true));
	      var treeWrapCls = (0, _classnames2.default)(_defineProperty({}, prefixCls + '-wrap', true));
	      var labelCls = (0, _classnames2.default)(_defineProperty({}, prefixCls + '-wrap-label', true));
	      var inputCls = (0, _classnames2.default)((_cx4 = {}, _defineProperty(_cx4, prefixCls + '-wrap-input', true), _defineProperty(_cx4, prefixCls + '-never-checked', !this.state.isChecked), _cx4));

	      return _react2.default.createElement(
	        'div',
	        { className: treeWrapCls },
	        _react2.default.createElement(
	          'span',
	          { className: labelCls },
	          label
	        ),
	        _react2.default.createElement(
	          'span',
	          {
	            className: inputCls,
	            onClick: function onClick() {
	              return _this2.triggerModal(true);
	            }
	          },
	          this.state.value
	        ),
	        _react2.default.createElement(
	          _Modal2.default,
	          {
	            ref: 'modal',
	            role: 'page',
	            header: _react2.default.createElement(_NavBar2.default, _extends({}, dataAll, { amStyle: 'primary' })),
	            isOpen: this.state.isModalOpen
	          },
	          _react2.default.createElement(
	            _Tree2.default,
	            _extends({}, props, {
	              prefixCls: prefixCls,
	              onCheck: this.onCheck
	            }),
	            this.props.children
	          )
	        )
	      );
	    }
	  }]);

	  return Tree;
	}(_react2.default.Component);

	Tree.propTypes = {
	  classPrefix: _react.PropTypes.string.isRequired,
	  inputDefault: _react.PropTypes.string,
	  onCheck: _react.PropTypes.func,
	  label: _react.PropTypes.string,
	  title: _react.PropTypes.string
	};
	Tree.defaultProps = {
	  classPrefix: 'tree',
	  inputDefault: '请选择 >'
	};
	exports.default = Tree;


	Tree.TreeNode = _TreeNode2.default;

	// TODO: Bug： 禁用 check 时，选择父节点，check 也是可有选择的。
	// TODO: 保存已选择后的树的状态
	// TODO: 默认checked 更新 selectedItem

	module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _objectAssign = __webpack_require__(65);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _util = __webpack_require__(66);

	var _SelectedItem = __webpack_require__(67);

	var _SelectedItem2 = _interopRequireDefault(_SelectedItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // based on https://github.com/react-component/tree-select
	/* eslint no-console:0 */


	function noop() {}

	var Tree = function (_React$Component) {
	  _inherits(Tree, _React$Component);

	  function Tree(props) {
	    _classCallCheck(this, Tree);

	    var _this = _possibleConstructorReturn(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).call(this, props));

	    _this.triggerOnCheck = function (key) {

	      var cur = _this.treeNodesStates[key];
	      var checkThis = {
	        props: {
	          checked: cur.checked,
	          halfChecked: cur.halfChecked,
	          pos: cur.key
	        }
	      };
	      _this.onCheck(checkThis);
	    };

	    ['onKeyDown', 'onCheck'].forEach(function (m) {
	      _this[m] = _this[m].bind(_this);
	    });
	    _this.contextmenuKeys = [];
	    _this.checkedKeysChange = true;

	    _this.state = {
	      expandedKeys: _this.getDefaultExpandedKeys(props),
	      checkedKeys: _this.getDefaultCheckedKeys(props),
	      filterCheckedKeys: [],
	      filteredCheckedValues: [],
	      selectedKeys: _this.getDefaultSelectedKeys(props)
	    };
	    return _this;
	  }

	  _createClass(Tree, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var expandedKeys = this.getDefaultExpandedKeys(nextProps, true);
	      var checkedKeys = this.getDefaultCheckedKeys(nextProps, true);
	      var selectedKeys = this.getDefaultSelectedKeys(nextProps, true);
	      var st = {};
	      if (expandedKeys) {
	        st.expandedKeys = expandedKeys;
	      }
	      if (checkedKeys) {
	        if (nextProps.checkedKeys === this.props.checkedKeys) {
	          this.checkedKeysChange = false;
	        } else {
	          this.checkedKeysChange = true;
	        }
	        st.checkedKeys = checkedKeys;
	      }
	      if (selectedKeys) {
	        st.selectedKeys = selectedKeys;
	      }
	      this.setState(st);
	    }
	  }, {
	    key: 'onExpand',
	    value: function onExpand(treeNode) {
	      var _this2 = this;

	      var expanded = !treeNode.props.expanded;
	      var controlled = 'expandedKeys' in this.props;
	      var expandedKeys = [].concat(_toConsumableArray(this.state.expandedKeys));
	      var index = expandedKeys.indexOf(treeNode.props.eventKey);
	      if (expanded && index === -1) {
	        expandedKeys.push(treeNode.props.eventKey);
	      } else if (!expanded && index > -1) {
	        expandedKeys.splice(index, 1);
	      }
	      if (!controlled) {
	        this.setState({ expandedKeys: expandedKeys });
	      }
	      this.props.onExpand(expandedKeys, { node: treeNode, expanded: expanded });

	      // after data loaded, need set new expandedKeys
	      if (expanded && this.props.loadData) {
	        return this.props.loadData(treeNode).then(function () {
	          if (!controlled) {
	            _this2.setState({ expandedKeys: expandedKeys });
	          }
	        });
	      }
	    }
	  }, {
	    key: 'onCheck',
	    value: function onCheck(treeNode) {
	      var _this3 = this;

	      var checked = !treeNode.props.checked;
	      if (treeNode.props.halfChecked) {
	        checked = true;
	      }
	      var key = treeNode.props.eventKey;
	      var checkedKeys = [].concat(_toConsumableArray(this.state.checkedKeys));
	      var index = checkedKeys.indexOf(key);

	      var newSt = {
	        event: 'check',
	        node: treeNode,
	        checked: checked
	      };

	      if (this.props.checkStrictly) {
	        if (checked && index === -1) {
	          checkedKeys.push(key);
	        }
	        if (!checked && index > -1) {
	          checkedKeys.splice(index, 1);
	        }
	        newSt.checkedNodes = [];
	        (0, _util.loopAllChildren)(this.props.children, function (item, ind, pos, keyOrPos) {
	          if (checkedKeys.indexOf(keyOrPos) !== -1) {
	            newSt.checkedNodes.push(item);
	          }
	        });
	        if (!('checkedKeys' in this.props)) {
	          this.setState({
	            checkedKeys: checkedKeys
	          });
	        }
	        var halfChecked = this.props.checkedKeys ? this.props.checkedKeys.halfChecked : [];
	        this.props.onCheck((0, _util.getStrictlyValue)(checkedKeys, halfChecked), newSt);
	      } else {
	        if (checked && index === -1) {
	          this.treeNodesStates[treeNode.props.pos].checked = true;
	          var checkedPositions = [];
	          Object.keys(this.treeNodesStates).forEach(function (i) {
	            if (_this3.treeNodesStates[i].checked) {
	              checkedPositions.push(i);
	            }
	          });
	          (0, _util.handleCheckState)(this.treeNodesStates, (0, _util.filterParentPosition)(checkedPositions), true);
	        }
	        if (!checked) {
	          this.treeNodesStates[treeNode.props.pos].checked = false;
	          this.treeNodesStates[treeNode.props.pos].halfChecked = false;
	          (0, _util.handleCheckState)(this.treeNodesStates, [treeNode.props.pos], false);
	        }

	        var checkKeys = (0, _util.getCheck)(this.treeNodesStates);
	        newSt.checkedNodes = checkKeys.checkedNodes;
	        newSt.checkedNodesPositions = checkKeys.checkedNodesPositions;
	        newSt.halfCheckedKeys = checkKeys.halfCheckedKeys;
	        newSt.treeNodesStates = checkKeys.treeNodesStates;
	        this.checkKeys = checkKeys;

	        this._checkedKeys = checkedKeys = checkKeys.checkedKeys;
	        var filterCheckedKeys = (0, _util.getFilterChecked)(checkedKeys);

	        var filteredCheckedValues = filterCheckedKeys.map(function (checked) {
	          return {
	            value: checkKeys.treeNodesStates[checked].node.props.value,
	            key: checked
	          };
	        });

	        if (!('checkedKeys' in this.props)) {
	          this.setState({
	            checkedKeys: checkedKeys,
	            filteredCheckedValues: filteredCheckedValues
	          });
	        }

	        this.props.onCheck(treeNode, checkedKeys, filteredCheckedValues, newSt);
	      }
	    }
	  }, {
	    key: 'onSelect',
	    value: function onSelect(treeNode) {
	      var props = this.props;
	      var selectedKeys = [].concat(_toConsumableArray(this.state.selectedKeys));
	      var eventKey = treeNode.props.eventKey;
	      var index = selectedKeys.indexOf(eventKey);
	      var selected = void 0;
	      if (index !== -1) {
	        selected = false;
	        selectedKeys.splice(index, 1);
	      } else {
	        selected = true;
	        if (!props.multiple) {
	          selectedKeys.length = 0;
	        }
	        selectedKeys.push(eventKey);
	      }
	      var selectedNodes = [];
	      if (selectedKeys.length) {
	        (0, _util.loopAllChildren)(this.props.children, function (item) {
	          if (selectedKeys.indexOf(item.key) !== -1) {
	            selectedNodes.push(item);
	          }
	        });
	      }
	      var newSt = {
	        event: 'select',
	        node: treeNode,
	        selected: selected,
	        selectedNodes: selectedNodes
	      };
	      if (!('selectedKeys' in this.props)) {
	        this.setState({
	          selectedKeys: selectedKeys
	        });
	      }
	      props.onSelect(selectedKeys, newSt);
	    }
	  }, {
	    key: 'onMouseEnter',
	    value: function onMouseEnter(e, treeNode) {
	      this.props.onMouseEnter({ event: e, node: treeNode });
	    }
	  }, {
	    key: 'onMouseLeave',
	    value: function onMouseLeave(e, treeNode) {
	      this.props.onMouseLeave({ event: e, node: treeNode });
	    }
	  }, {
	    key: 'onContextMenu',
	    value: function onContextMenu(e, treeNode) {
	      var selectedKeys = [].concat(_toConsumableArray(this.state.selectedKeys));
	      var eventKey = treeNode.props.eventKey;
	      if (this.contextmenuKeys.indexOf(eventKey) === -1) {
	        this.contextmenuKeys.push(eventKey);
	      }
	      this.contextmenuKeys.forEach(function (key) {
	        var index = selectedKeys.indexOf(key);
	        if (index !== -1) {
	          selectedKeys.splice(index, 1);
	        }
	      });
	      if (selectedKeys.indexOf(eventKey) === -1) {
	        selectedKeys.push(eventKey);
	      }
	      this.setState({
	        selectedKeys: selectedKeys
	      });
	      this.props.onRightClick({ event: e, node: treeNode });
	    }

	    // all keyboard events callbacks run from here at first

	  }, {
	    key: 'onKeyDown',
	    value: function onKeyDown(e) {
	      e.preventDefault();
	    }
	  }, {
	    key: 'getFilterExpandedKeys',
	    value: function getFilterExpandedKeys(props, expandKeyProp, expandAll) {
	      var keys = props[expandKeyProp];
	      if (!expandAll && !props.autoExpandParent) {
	        return keys || [];
	      }
	      var expandedPositionArr = [];
	      if (props.autoExpandParent) {
	        (0, _util.loopAllChildren)(props.children, function (item, index, pos, newKey) {
	          if (keys.indexOf(newKey) > -1) {
	            expandedPositionArr.push(pos);
	          }
	        });
	      }
	      var filterExpandedKeys = [];
	      (0, _util.loopAllChildren)(props.children, function (item, index, pos, newKey) {
	        if (expandAll) {
	          filterExpandedKeys.push(newKey);
	        } else if (props.autoExpandParent) {
	          expandedPositionArr.forEach(function (p) {
	            if ((p.split('-').length > pos.split('-').length && (0, _util.isInclude)(pos.split('-'), p.split('-')) || pos === p) && filterExpandedKeys.indexOf(newKey) === -1) {
	              filterExpandedKeys.push(newKey);
	            }
	          });
	        }
	      });
	      return filterExpandedKeys.length ? filterExpandedKeys : keys;
	    }
	  }, {
	    key: 'getDefaultExpandedKeys',
	    value: function getDefaultExpandedKeys(props, willReceiveProps) {
	      var expandedKeys = willReceiveProps ? undefined : this.getFilterExpandedKeys(props, 'defaultExpandedKeys', props.defaultExpandedKeys.length ? false : props.defaultExpandAll);
	      if ('expandedKeys' in props) {
	        expandedKeys = (props.autoExpandParent ? this.getFilterExpandedKeys(props, 'expandedKeys', false) : props.expandedKeys) || [];
	      }
	      return expandedKeys;
	    }
	  }, {
	    key: 'getDefaultCheckedKeys',
	    value: function getDefaultCheckedKeys(props, willReceiveProps) {
	      var checkedKeys = willReceiveProps ? undefined : props.defaultCheckedKeys;
	      if ('checkedKeys' in props) {
	        checkedKeys = props.checkedKeys || [];
	        if (props.checkStrictly) {
	          if (props.checkedKeys.checked) {
	            checkedKeys = props.checkedKeys.checked;
	          } else if (!Array.isArray(props.checkedKeys)) {
	            checkedKeys = [];
	          }
	        }
	      }
	      return checkedKeys;
	    }
	  }, {
	    key: 'getDefaultSelectedKeys',
	    value: function getDefaultSelectedKeys(props, willReceiveProps) {
	      var getKeys = function getKeys(keys) {
	        if (props.multiple) {
	          return [].concat(_toConsumableArray(keys));
	        }
	        if (keys.length) {
	          return [keys[0]];
	        }
	        return keys;
	      };
	      var selectedKeys = willReceiveProps ? undefined : getKeys(props.defaultSelectedKeys);
	      if ('selectedKeys' in props) {
	        selectedKeys = getKeys(props.selectedKeys);
	      }
	      return selectedKeys;
	    }
	  }, {
	    key: 'getRawExpandedKeys',
	    value: function getRawExpandedKeys() {
	      if (!this._rawExpandedKeys && 'expandedKeys' in this.props) {
	        this._rawExpandedKeys = [].concat(_toConsumableArray(this.state.expandedKeys));
	      }
	    }
	  }, {
	    key: 'getOpenTransitionName',
	    value: function getOpenTransitionName() {
	      var props = this.props;
	      var transitionName = props.openTransitionName;
	      var animationName = props.openAnimation;
	      if (!transitionName && typeof animationName === 'string') {
	        transitionName = props.prefixCls + '-open-' + animationName;
	      }
	      return transitionName;
	    }
	  }, {
	    key: 'getExpandedKeys',
	    value: function getExpandedKeys(treeNode, expand) {
	      var key = treeNode.props.eventKey;
	      var expandedKeys = this.state.expandedKeys;
	      var expandedIndex = expandedKeys.indexOf(key);
	      var exKeys = void 0;
	      if (expandedIndex > -1 && !expand) {
	        exKeys = [].concat(_toConsumableArray(expandedKeys));
	        exKeys.splice(expandedIndex, 1);
	        return exKeys;
	      }
	      if (expand && expandedKeys.indexOf(key) === -1) {
	        return expandedKeys.concat([key]);
	      }
	    }
	  }, {
	    key: 'filterTreeNode',
	    value: function filterTreeNode(treeNode) {
	      var filterTreeNode = this.props.filterTreeNode;
	      if (typeof filterTreeNode !== 'function' || treeNode.props.disabled) {
	        return false;
	      }
	      return filterTreeNode.call(this, treeNode);
	    }
	  }, {
	    key: 'renderTreeNode',
	    value: function renderTreeNode(child, index) {
	      var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

	      var pos = level + '-' + index;
	      var key = child.key || pos;
	      var state = this.state;
	      var props = this.props;

	      // prefer to child's own selectable property if passed
	      var selectable = props.selectable;
	      if (child.props.hasOwnProperty('selectable')) {
	        selectable = child.props.selectable;
	      }

	      var cloneProps = {
	        ref: 'treeNode-' + key,
	        root: this,
	        eventKey: key,
	        pos: pos,
	        selectable: selectable,
	        loadData: props.loadData,
	        onMouseEnter: props.onMouseEnter,
	        onMouseLeave: props.onMouseLeave,
	        onRightClick: props.onRightClick,
	        prefixCls: props.prefixCls,
	        showLine: props.showLine,
	        showIcon: props.showIcon,
	        expanded: state.expandedKeys.indexOf(key) !== -1,
	        selected: state.selectedKeys.indexOf(key) !== -1,
	        openTransitionName: this.getOpenTransitionName(),
	        openAnimation: props.openAnimation,
	        filterTreeNode: this.filterTreeNode.bind(this)
	      };
	      if (props.checkable) {
	        cloneProps.checkable = props.checkable;
	        if (props.checkStrictly) {
	          if (state.checkedKeys) {
	            cloneProps.checked = state.checkedKeys.indexOf(key) !== -1 || false;
	          }
	          if (props.checkedKeys && props.checkedKeys.halfChecked) {
	            cloneProps.halfChecked = props.checkedKeys.halfChecked.indexOf(key) !== -1 || false;
	          } else {
	            cloneProps.halfChecked = false;
	          }
	        } else {
	          if (this.checkedKeys) {
	            cloneProps.checked = this.checkedKeys.indexOf(key) !== -1 || false;
	          }
	          cloneProps.halfChecked = this.halfCheckedKeys.indexOf(key) !== -1;
	        }
	      }
	      if (this.treeNodesStates && this.treeNodesStates[pos]) {
	        (0, _objectAssign2.default)(cloneProps, this.treeNodesStates[pos].siblingPosition);
	      }
	      return _react2.default.cloneElement(child, cloneProps);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;

	      var props = this.props;
	      var domProps = {
	        className: (0, _classnames2.default)(props.className, props.prefixCls),
	        role: 'tree-node'
	      };
	      if (props.focusable) {
	        domProps.tabIndex = '0';
	        domProps.onKeyDown = this.onKeyDown;
	      }
	      var getTreeNodesStates = function getTreeNodesStates() {
	        _this4.treeNodesStates = {};
	        (0, _util.loopAllChildren)(props.children, function (item, index, pos, keyOrPos, siblingPosition) {
	          _this4.treeNodesStates[pos] = {
	            siblingPosition: siblingPosition
	          };
	        });
	      };
	      if (props.showLine && !props.checkable) {
	        getTreeNodesStates();
	      }
	      if (props.checkable && (this.checkedKeysChange || props.loadData)) {
	        if (props.checkStrictly) {
	          getTreeNodesStates();
	        } else if (props._treeNodesStates) {
	          this.treeNodesStates = props._treeNodesStates.treeNodesStates;
	          this.halfCheckedKeys = props._treeNodesStates.halfCheckedKeys;
	          this.checkedKeys = props._treeNodesStates.checkedKeys;
	        } else {
	          var checkedKeys = this.state.checkedKeys;
	          var checkKeys = void 0;
	          if (!props.loadData && this.checkKeys && this._checkedKeys && (0, _util.arraysEqual)(this._checkedKeys, checkedKeys)) {
	            // if checkedKeys the same as _checkedKeys from onCheck, use _checkedKeys.
	            checkKeys = this.checkKeys;
	          } else {
	            var checkedPositions = [];
	            this.treeNodesStates = {};
	            (0, _util.loopAllChildren)(props.children, function (item, index, pos, keyOrPos, siblingPosition) {
	              _this4.treeNodesStates[pos] = {
	                node: item,
	                key: keyOrPos,
	                checked: false,
	                halfChecked: false,
	                siblingPosition: siblingPosition
	              };
	              if (checkedKeys.indexOf(keyOrPos) !== -1) {
	                _this4.treeNodesStates[pos].checked = true;
	                checkedPositions.push(pos);
	              }
	            });
	            // if the parent node's key exists, it all children node will be checked
	            (0, _util.handleCheckState)(this.treeNodesStates, (0, _util.filterParentPosition)(checkedPositions), true);
	            checkKeys = (0, _util.getCheck)(this.treeNodesStates);
	          }
	          this.halfCheckedKeys = checkKeys.halfCheckedKeys;
	          this.checkedKeys = checkKeys.checkedKeys;
	        }
	      }

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'ul',
	          _extends({}, domProps, { unselectable: true, ref: 'tree' }),
	          _react2.default.Children.map(props.children, this.renderTreeNode, this)
	        )
	      );
	    }
	  }]);

	  return Tree;
	}(_react2.default.Component);

	Tree.propTypes = {
	  prefixCls: _react.PropTypes.string,
	  children: _react.PropTypes.any,
	  showLine: _react.PropTypes.bool,
	  showIcon: _react.PropTypes.bool,
	  selectable: _react.PropTypes.bool,
	  multiple: _react.PropTypes.bool,
	  checkable: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.node]),
	  _treeNodesStates: _react.PropTypes.object,
	  checkStrictly: _react.PropTypes.bool,
	  autoExpandParent: _react.PropTypes.bool,
	  defaultExpandAll: _react.PropTypes.bool,
	  defaultExpandedKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	  expandedKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	  defaultCheckedKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	  checkedKeys: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.string), _react.PropTypes.object]),
	  defaultSelectedKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	  selectedKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	  onExpand: _react.PropTypes.func,
	  onCheck: _react.PropTypes.func,
	  onSelect: _react.PropTypes.func,
	  loadData: _react.PropTypes.func,
	  onMouseEnter: _react.PropTypes.func,
	  onMouseLeave: _react.PropTypes.func,
	  onRightClick: _react.PropTypes.func,
	  filterTreeNode: _react.PropTypes.func,
	  openTransitionName: _react.PropTypes.string,
	  openAnimation: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object])
	};

	Tree.defaultProps = {
	  prefixCls: 'rc-tree',
	  showLine: false,
	  showIcon: true,
	  selectable: true,
	  multiple: false,
	  checkable: true,
	  checkStrictly: false,
	  autoExpandParent: true,
	  defaultExpandAll: false,
	  defaultExpandedKeys: [],
	  defaultCheckedKeys: [],
	  defaultSelectedKeys: [],
	  onExpand: noop,
	  onCheck: noop,
	  onSelect: noop
	};

	exports.default = Tree;
	module.exports = exports['default'];

/***/ },
/* 65 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.browser = browser;
	exports.getOffset = getOffset;
	exports.loopAllChildren = loopAllChildren;
	exports.isInclude = isInclude;
	exports.filterParentPosition = filterParentPosition;
	exports.handleCheckState = handleCheckState;
	exports.getCheck = getCheck;
	exports.getStrictlyValue = getStrictlyValue;
	exports.arraysEqual = arraysEqual;
	exports.getFilterChecked = getFilterChecked;

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function browser(navigator) {
	  var tem = void 0;
	  var ua = navigator.userAgent;
	  var M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	  if (/trident/i.test(M[1])) {
	    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
	    return 'IE ' + (tem[1] || '');
	  }
	  if (M[1] === 'Chrome') {
	    tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
	    if (tem) return tem.slice(1).join(' ').replace('OPR', 'Opera');
	  }
	  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
	  tem = ua.match(/version\/(\d+)/i);
	  if (tem) {
	    M.splice(1, 1, tem[1]);
	  }
	  return M.join(' ');
	}

	// export function getOffset(el) {
	//   const obj = el.getBoundingClientRect();
	//   return {
	//     left: obj.left + document.body.scrollLeft,
	//     top: obj.top + document.body.scrollTop,
	//     width: obj.width,
	//     height: obj.height
	//   };
	// }

	// // iscroll offset
	// offset = function (el) {
	//   var left = -el.offsetLeft,
	//     top = -el.offsetTop;

	//   // jshint -W084
	//   while (el = el.offsetParent) {
	//     left -= el.offsetLeft;
	//     top -= el.offsetTop;
	//   }
	//   // jshint +W084

	//   return {
	//     left: left,
	//     top: top
	//   };
	// }

	/* eslint-disable */
	/* eslint no-loop-func: 0*/

	function getOffset(ele) {
	  var doc = void 0,
	      win = void 0,
	      docElem = void 0,
	      rect = void 0;

	  if (!ele.getClientRects().length) {
	    return { top: 0, left: 0 };
	  }

	  rect = ele.getBoundingClientRect();

	  if (rect.width || rect.height) {
	    doc = ele.ownerDocument;
	    win = doc.defaultView;
	    docElem = doc.documentElement;

	    return {
	      top: rect.top + win.pageYOffset - docElem.clientTop,
	      left: rect.left + win.pageXOffset - docElem.clientLeft
	    };
	  }

	  return rect;
	}
	/* eslint-enable */

	function getChildrenlength(children) {
	  var len = 1;
	  if (Array.isArray(children)) {
	    len = children.length;
	  }
	  return len;
	}

	function getSiblingPosition(index, len, siblingPosition) {
	  if (len === 1) {
	    siblingPosition.first = true;
	    siblingPosition.last = true;
	  } else {
	    siblingPosition.first = index === 0;
	    siblingPosition.last = index === len - 1;
	  }
	  return siblingPosition;
	}

	function loopAllChildren(childs, callback, parent) {
	  var loop = function loop(children, level, _parent) {
	    var len = getChildrenlength(children);
	    _react2.default.Children.forEach(children, function (item, index) {
	      var pos = level + '-' + index;
	      if (item.props.children && item.type && item.type.isTreeNode) {
	        loop(item.props.children, pos, { node: item, pos: pos });
	      }
	      callback(item, index, pos, item.key || pos, getSiblingPosition(index, len, {}), _parent);
	    });
	  };
	  loop(childs, 0, parent);
	}

	function isInclude(smallArray, bigArray) {
	  return smallArray.every(function (ii, i) {
	    return ii === bigArray[i];
	  });
	}
	// console.log(isInclude(['0', '1'], ['0', '10', '1']));


	// arr.length === 628, use time: ~20ms
	function filterParentPosition(arr) {
	  var levelObj = {};
	  arr.forEach(function (item) {
	    var posLen = item.split('-').length;
	    if (!levelObj[posLen]) {
	      levelObj[posLen] = [];
	    }
	    levelObj[posLen].push(item);
	  });
	  var levelArr = Object.keys(levelObj).sort(function (a, b) {
	    return Number(a) - Number(b);
	  });

	  var _loop = function _loop(i) {
	    if (levelArr[i + 1]) {
	      levelObj[levelArr[i]].forEach(function (ii) {
	        var _loop2 = function _loop2(j) {
	          levelObj[levelArr[j]].forEach(function (_i, index) {
	            if (isInclude(ii.split('-'), _i.split('-'))) {
	              levelObj[levelArr[j]][index] = null;
	            }
	          });
	          levelObj[levelArr[j]] = levelObj[levelArr[j]].filter(function (p) {
	            return p;
	          });
	        };

	        for (var j = i + 1; j < levelArr.length; j++) {
	          _loop2(j);
	        }
	      });
	    }
	  };

	  for (var i = 0; i < levelArr.length; i++) {
	    _loop(i);
	  }
	  var nArr = [];
	  levelArr.forEach(function (i) {
	    nArr = nArr.concat(levelObj[i]);
	  });
	  return nArr;
	}
	// console.log(filterParentPosition(
	//   ['0-2', '0-3-3', '0-10', '0-10-0', '0-0-1', '0-0', '0-1-1', '0-1']
	// ));


	function stripTail(str) {
	  var arr = str.match(/(.+)(-[^-]+)$/);
	  var st = '';
	  if (arr && arr.length === 3) {
	    st = arr[1];
	  }
	  return st;
	}
	function splitPosition(pos) {
	  return pos.split('-');
	}

	function handleCheckState(obj, checkedPositionArr, checkIt) {
	  // console.log(stripTail('0-101-000'));
	  var objKeys = Object.keys(obj);
	  // let s = Date.now();
	  objKeys.forEach(function (i, index) {
	    var iArr = splitPosition(i);
	    var saved = false;
	    checkedPositionArr.forEach(function (_pos) {
	      // 设置子节点，全选或全不选
	      var _posArr = splitPosition(_pos);
	      if (iArr.length > _posArr.length && isInclude(_posArr, iArr)) {
	        obj[i].halfChecked = false;
	        obj[i].checked = checkIt;
	        objKeys[index] = null;
	      }
	      if (iArr[0] === _posArr[0] && iArr[1] === _posArr[1]) {
	        // 如果
	        saved = true;
	      }
	    });
	    if (!saved) {
	      objKeys[index] = null;
	    }
	  });
	  // TODO: 循环 2470000 次耗时约 1400 ms。 性能瓶颈！
	  // console.log(Date.now()-s, checkedPositionArr.length * objKeys.length);
	  objKeys = objKeys.filter(function (i) {
	    return i;
	  }); // filter non null;

	  var _loop3 = function _loop3(_pIndex) {
	    // 循环设置父节点的 选中 或 半选状态
	    var loop = function loop(__pos) {
	      var _posLen = splitPosition(__pos).length;
	      if (_posLen <= 2) {
	        // e.g. '0-0', '0-1'
	        return;
	      }
	      var sibling = 0;
	      var siblingChecked = 0;
	      var parentPosition = stripTail(__pos);
	      objKeys.forEach(function (i /* , index*/) {
	        var iArr = splitPosition(i);
	        if (iArr.length === _posLen && isInclude(splitPosition(parentPosition), iArr)) {
	          sibling++;
	          if (obj[i].checked) {
	            siblingChecked++;
	            var _i = checkedPositionArr.indexOf(i);
	            if (_i > -1) {
	              checkedPositionArr.splice(_i, 1);
	              if (_i <= _pIndex) {
	                _pIndex--;
	              }
	            }
	          } else if (obj[i].halfChecked) {
	            siblingChecked += 0.5;
	          }
	          // objKeys[index] = null;
	        }
	      });
	      // objKeys = objKeys.filter(i => i); // filter non null;
	      var parent = obj[parentPosition];
	      // sibling 不会等于0
	      // 全不选 - 全选 - 半选
	      if (siblingChecked === 0) {
	        parent.checked = false;
	        parent.halfChecked = false;
	      } else if (siblingChecked === sibling) {
	        parent.checked = true;
	        parent.halfChecked = false;
	      } else {
	        parent.halfChecked = true;
	        parent.checked = false;
	      }
	      loop(parentPosition);
	    };
	    loop(checkedPositionArr[_pIndex], _pIndex);
	    pIndex = _pIndex;
	  };

	  for (var pIndex = 0; pIndex < checkedPositionArr.length; pIndex++) {
	    _loop3(pIndex);
	  }
	  // console.log(Date.now()-s, objKeys.length, checkIt);
	}

	function getCheck(treeNodesStates) {
	  var halfCheckedKeys = [];
	  var checkedKeys = [];
	  var checkedNodes = [];
	  var checkedNodesPositions = [];
	  Object.keys(treeNodesStates).forEach(function (item) {
	    var itemObj = treeNodesStates[item];
	    if (itemObj.checked) {
	      checkedKeys.push(itemObj.key);
	      checkedNodes.push(itemObj.node);
	      checkedNodesPositions.push({ node: itemObj.node, pos: item });
	    } else if (itemObj.halfChecked) {
	      halfCheckedKeys.push(itemObj.key);
	    }
	  });
	  return {
	    halfCheckedKeys: halfCheckedKeys, checkedKeys: checkedKeys, checkedNodes: checkedNodes, checkedNodesPositions: checkedNodesPositions, treeNodesStates: treeNodesStates
	  };
	}

	function getStrictlyValue(checkedKeys, halfChecked) {
	  if (halfChecked) {
	    return { checked: checkedKeys, halfChecked: halfChecked };
	  }
	  return checkedKeys;
	}

	function arraysEqual(a, b) {
	  if (a === b) return true;
	  if (a === null || typeof a === 'undefined' || b === null || typeof b === 'undefined') {
	    return false;
	  }
	  if (a.length !== b.length) return false;

	  // If you don't care about the order of the elements inside
	  // the array, you should sort both arrays here.

	  for (var i = 0; i < a.length; ++i) {
	    if (a[i] !== b[i]) return false;
	  }
	  return true;
	}

	/**
	 * 过滤相关联的父子数据
	 * @param {array} checkedKeys
	 */
	function getFilterChecked(checkedKeys) {
	  var newArr = [];
	  var arrs = checkedKeys.slice();
	  if (!arrs.length) {
	    return [];
	  }

	  function filter(arrs) {
	    var last = arrs.pop();
	    var blank = [];
	    newArr.push(last);

	    arrs.forEach(function (arr, i) {
	      if (last === arr.slice(0, last.length)) {
	        blank.push(i);
	      }
	    });

	    blank.forEach(function (b, i) {
	      arrs.splice(b - i, 1);
	    });

	    if (arrs.length > 0) {
	      filter(arrs);
	    }
	  }
	  filter(arrs);
	  return newArr;
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _className = __webpack_require__(31);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SelectedItem = function (_React$Component) {
	  _inherits(SelectedItem, _React$Component);

	  function SelectedItem(props) {
	    _classCallCheck(this, SelectedItem);

	    var _this = _possibleConstructorReturn(this, (SelectedItem.__proto__ || Object.getPrototypeOf(SelectedItem)).call(this, props));

	    _this.handleClick = function () {
	      _this.setState({
	        show: false
	      });
	      _this.props.triggerOnCheck(_this.props.checkedKey);
	    };

	    _this.state = {
	      show: true
	    };
	    return _this;
	  }

	  _createClass(SelectedItem, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          prefixCls = _props.prefixCls,
	          value = _props.value,
	          props = _objectWithoutProperties(_props, ['prefixCls', 'value']);

	      return this.state.show ? _react2.default.createElement(
	        'span',
	        {
	          onClick: this.handleClick,
	          className: prefixCls + '-selected-item'
	        },
	        value
	      ) : null;
	    }
	  }]);

	  return SelectedItem;
	}(_react2.default.Component);

	SelectedItem.propTypes = {
	  prefixCls: _react2.default.PropTypes.string,
	  value: _react2.default.PropTypes.string,
	  checkedKey: _react2.default.PropTypes.string.isRequired
	};
	exports.default = SelectedItem;
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _objectAssign = __webpack_require__(65);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _rcAnimate = __webpack_require__(69);

	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

	var _util = __webpack_require__(66);

	var _toArray = __webpack_require__(78);

	var _toArray2 = _interopRequireDefault(_toArray);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var browserUa = typeof window !== 'undefined' ? (0, _util.browser)(window.navigator) : '';
	var ieOrEdge = /.*(IE|Edge).+/.test(browserUa);
	// const uaArray = browserUa.split(' ');
	// const gtIE8 = uaArray.length !== 2 || uaArray[0].indexOf('IE') === -1 || Number(uaArray[1]) > 8;

	var defaultTitle = '---';

	var TreeNode = function (_React$Component) {
	  _inherits(TreeNode, _React$Component);

	  function TreeNode(props) {
	    _classCallCheck(this, TreeNode);

	    var _this = _possibleConstructorReturn(this, (TreeNode.__proto__ || Object.getPrototypeOf(TreeNode)).call(this, props));

	    ['onExpand', 'onCheck', 'onContextMenu', 'onMouseEnter', 'onMouseLeave'].forEach(function (m) {
	      _this[m] = _this[m].bind(_this);
	    });
	    _this.state = {
	      dataLoading: false
	    };
	    return _this;
	  }

	  _createClass(TreeNode, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (!this.props.root._treeNodeInstances) {
	        this.props.root._treeNodeInstances = [];
	      }
	      this.props.root._treeNodeInstances.push(this);
	    }
	    // shouldComponentUpdate(nextProps) {
	    //   if (!nextProps.expanded) {
	    //     return false;
	    //   }
	    //   return true;
	    // }

	  }, {
	    key: 'onCheck',
	    value: function onCheck() {
	      this.props.root.onCheck(this);
	    }
	  }, {
	    key: 'onSelect',
	    value: function onSelect() {
	      this.props.root.onSelect(this);
	    }
	  }, {
	    key: 'onMouseEnter',
	    value: function onMouseEnter(e) {
	      e.preventDefault();
	      this.props.root.onMouseEnter(e, this);
	    }
	  }, {
	    key: 'onMouseLeave',
	    value: function onMouseLeave(e) {
	      e.preventDefault();
	      this.props.root.onMouseLeave(e, this);
	    }
	  }, {
	    key: 'onContextMenu',
	    value: function onContextMenu(e) {
	      e.preventDefault();
	      this.props.root.onContextMenu(e, this);
	    }
	  }, {
	    key: 'onExpand',
	    value: function onExpand() {
	      var _this2 = this;

	      var callbackPromise = this.props.root.onExpand(this);
	      if (callbackPromise && (typeof callbackPromise === 'undefined' ? 'undefined' : _typeof(callbackPromise)) === 'object') {
	        var setLoading = function setLoading(dataLoading) {
	          _this2.setState({ dataLoading: dataLoading });
	        };
	        setLoading(true);
	        callbackPromise.then(function () {
	          setLoading(false);
	        }, function () {
	          setLoading(false);
	        });
	      }
	    }

	    // keyboard event support

	  }, {
	    key: 'onKeyDown',
	    value: function onKeyDown(e) {
	      e.preventDefault();
	    }
	  }, {
	    key: 'renderSwitcher',
	    value: function renderSwitcher(props, expandedState) {
	      var prefixCls = props.prefixCls;
	      var switcherCls = _defineProperty({}, prefixCls + '-switcher', true);
	      if (!props.showLine) {
	        switcherCls[prefixCls + '-noline_' + expandedState] = true;
	      } else if (props.pos === '0-0') {
	        switcherCls[prefixCls + '-roots_' + expandedState] = true;
	      } else {
	        switcherCls[prefixCls + '-center_' + expandedState] = !props.last;
	        switcherCls[prefixCls + '-bottom_' + expandedState] = props.last;
	      }
	      if (props.disabled) {
	        switcherCls[prefixCls + '-switcher-disabled'] = true;
	        return _react2.default.createElement('span', { className: (0, _classnames2.default)(switcherCls) });
	      }
	      return _react2.default.createElement('span', { className: (0, _classnames2.default)(switcherCls), onClick: this.onExpand });
	    }
	  }, {
	    key: 'renderCheckbox',
	    value: function renderCheckbox(props) {
	      var prefixCls = props.prefixCls;
	      var checkboxCls = _defineProperty({}, prefixCls + '-checkbox', true);
	      if (props.checked) {
	        checkboxCls[prefixCls + '-checkbox-checked'] = true;
	      } else if (props.halfChecked) {
	        checkboxCls[prefixCls + '-checkbox-indeterminate'] = true;
	      }
	      var customEle = null;
	      if (typeof props.checkable !== 'boolean') {
	        customEle = props.checkable;
	      }
	      if (props.disabled || props.disableCheckbox) {
	        checkboxCls[prefixCls + '-checkbox-disabled'] = true;
	        return _react2.default.createElement(
	          'span',
	          { ref: 'checkbox', className: (0, _classnames2.default)(checkboxCls) },
	          customEle
	        );
	      }
	      return _react2.default.createElement(
	        'span',
	        { ref: 'checkbox',
	          className: (0, _classnames2.default)(checkboxCls),
	          onClick: this.onCheck
	        },
	        customEle
	      );
	    }
	  }, {
	    key: 'renderChildren',
	    value: function renderChildren(props) {
	      var renderFirst = this.renderFirst;
	      this.renderFirst = 1;
	      var transitionAppear = true;
	      if (!renderFirst && props.expanded) {
	        transitionAppear = false;
	      }
	      var children = props.children ? (0, _toArray2.default)(props.children) : props.children;
	      var newChildren = children;
	      if (children && (Array.isArray(children) && children.every(function (item) {
	        return item.type && item.type.isTreeNode;
	      }) || children.type && children.type.isTreeNode)) {
	        var _cls;

	        var cls = (_cls = {}, _defineProperty(_cls, props.prefixCls + '-child-tree', true), _defineProperty(_cls, props.prefixCls + '-child-tree-open', props.expanded), _cls);
	        if (props.showLine) {
	          cls[props.prefixCls + '-line'] = !props.last;
	        }
	        var animProps = {};
	        if (props.openTransitionName) {
	          animProps.transitionName = props.openTransitionName;
	        } else if (_typeof(props.openAnimation) === 'object') {
	          animProps.animation = (0, _objectAssign2.default)({}, props.openAnimation);
	          if (!transitionAppear) {
	            delete animProps.animation.appear;
	          }
	        }
	        newChildren = _react2.default.createElement(
	          _rcAnimate2.default,
	          _extends({}, animProps, {
	            showProp: 'data-expanded',
	            transitionAppear: transitionAppear,
	            component: ''
	          }),
	          !props.expanded ? null : _react2.default.createElement(
	            'ul',
	            { className: (0, _classnames2.default)(cls), 'data-expanded': props.expanded },
	            _react2.default.Children.map(children, function (item, index) {
	              return props.root.renderTreeNode(item, index, props.pos);
	            }, props.root)
	          )
	        );
	      }
	      return newChildren;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _iconEleCls,
	          _this3 = this;

	      var props = this.props;
	      var prefixCls = props.prefixCls;
	      var expandedState = props.expanded ? 'open' : 'close';
	      var iconState = expandedState;

	      var canRenderSwitcher = true;
	      var content = props.title;
	      var newChildren = this.renderChildren(props);
	      if (!newChildren || newChildren === props.children) {
	        // content = newChildren;
	        newChildren = null;
	        if (!props.loadData || props.isLeaf) {
	          canRenderSwitcher = false;
	          iconState = 'docu';
	        }
	      }
	      // For performance, does't render children into dom when `!props.expanded` (move to Animate)
	      // if (!props.expanded) {
	      //   newChildren = null;
	      // }

	      var iconEleCls = (_iconEleCls = {}, _defineProperty(_iconEleCls, prefixCls + '-iconEle', true), _defineProperty(_iconEleCls, prefixCls + '-icon_loading', this.state.dataLoading), _defineProperty(_iconEleCls, prefixCls + '-icon__' + iconState, true), _iconEleCls);

	      var selectHandle = function selectHandle() {
	        var icon = props.showIcon || props.loadData && _this3.state.dataLoading ? _react2.default.createElement('span', { className: (0, _classnames2.default)(iconEleCls) }) : null;
	        var title = _react2.default.createElement(
	          'span',
	          { className: prefixCls + '-title' },
	          content
	        );
	        var wrap = prefixCls + '-node-content-wrapper';
	        var domProps = {
	          className: wrap + ' ' + wrap + '-' + (iconState === expandedState ? iconState : 'normal')
	        };
	        if (!props.disabled) {
	          if (props.selected) {
	            domProps.className += ' ' + prefixCls + '-node-selected';
	          }
	          domProps.onClick = function (e) {
	            e.preventDefault();

	            _this3.onExpand();
	            // if (props.selectable) {
	            //   this.onSelect();
	            // }
	            // not fire check event
	            // if (props.checkable) {
	            //   this.onCheck();
	            // }
	          };
	          if (props.onRightClick) {
	            domProps.onContextMenu = _this3.onContextMenu;
	          }
	          if (props.onMouseEnter) {
	            domProps.onMouseEnter = _this3.onMouseEnter;
	          }
	          if (props.onMouseLeave) {
	            domProps.onMouseLeave = _this3.onMouseLeave;
	          }
	        }
	        return _react2.default.createElement(
	          'a',
	          _extends({ ref: 'selectHandle', title: typeof content === 'string' ? content : '' }, domProps),
	          icon,
	          title
	        );
	      };

	      var liProps = {};

	      var disabledCls = '';

	      var filterCls = props.filterTreeNode(this) ? 'filter-node' : '';

	      var noopSwitcher = function noopSwitcher() {
	        var _cls2;

	        var cls = (_cls2 = {}, _defineProperty(_cls2, prefixCls + '-switcher', true), _defineProperty(_cls2, prefixCls + '-switcher-noop', true), _cls2);
	        if (props.showLine) {
	          cls[prefixCls + '-center_docu'] = !props.last;
	          cls[prefixCls + '-bottom_docu'] = props.last;
	        } else {
	          cls[prefixCls + '-noline_docu'] = true;
	        }
	        return _react2.default.createElement('span', { className: (0, _classnames2.default)(cls) });
	      };

	      return _react2.default.createElement(
	        'li',
	        _extends({}, liProps, { ref: 'li',
	          className: (0, _classnames2.default)(props.className, disabledCls, filterCls)
	        }),
	        _react2.default.createElement(
	          'div',
	          { className: prefixCls + '-item' },
	          canRenderSwitcher ? this.renderSwitcher(props, expandedState) : noopSwitcher(),
	          selectHandle(),
	          props.checkable ? this.renderCheckbox(props) : null
	        ),
	        newChildren
	      );
	    }
	  }]);

	  return TreeNode;
	}(_react2.default.Component);

	TreeNode.isTreeNode = 1;

	TreeNode.propTypes = {
	  prefixCls: _react.PropTypes.string,
	  disabled: _react.PropTypes.bool,
	  disableCheckbox: _react.PropTypes.bool,
	  expanded: _react.PropTypes.bool,
	  isLeaf: _react.PropTypes.bool,
	  root: _react.PropTypes.object,
	  onSelect: _react.PropTypes.func
	};

	TreeNode.defaultProps = {
	  title: defaultTitle
	};

	exports.default = TreeNode;
	module.exports = exports['default'];

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// export this package's api
	module.exports = __webpack_require__(70);

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _ChildrenUtils = __webpack_require__(71);

	var _AnimateChild = __webpack_require__(72);

	var _AnimateChild2 = _interopRequireDefault(_AnimateChild);

	var _util = __webpack_require__(77);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var defaultKey = 'rc_animate_' + Date.now();


	function getChildrenFromProps(props) {
	  var children = props.children;
	  if (_react2["default"].isValidElement(children)) {
	    if (!children.key) {
	      return _react2["default"].cloneElement(children, {
	        key: defaultKey
	      });
	    }
	  }
	  return children;
	}

	function noop() {}

	var Animate = _react2["default"].createClass({
	  displayName: 'Animate',

	  propTypes: {
	    component: _react2["default"].PropTypes.any,
	    componentProps: _react2["default"].PropTypes.object,
	    animation: _react2["default"].PropTypes.object,
	    transitionName: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.object]),
	    transitionEnter: _react2["default"].PropTypes.bool,
	    transitionAppear: _react2["default"].PropTypes.bool,
	    exclusive: _react2["default"].PropTypes.bool,
	    transitionLeave: _react2["default"].PropTypes.bool,
	    onEnd: _react2["default"].PropTypes.func,
	    onEnter: _react2["default"].PropTypes.func,
	    onLeave: _react2["default"].PropTypes.func,
	    onAppear: _react2["default"].PropTypes.func,
	    showProp: _react2["default"].PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      animation: {},
	      component: 'span',
	      componentProps: {},
	      transitionEnter: true,
	      transitionLeave: true,
	      transitionAppear: false,
	      onEnd: noop,
	      onEnter: noop,
	      onLeave: noop,
	      onAppear: noop
	    };
	  },
	  getInitialState: function getInitialState() {
	    this.currentlyAnimatingKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	    return {
	      children: (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(this.props))
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    var _this = this;

	    var showProp = this.props.showProp;
	    var children = this.state.children;
	    if (showProp) {
	      children = children.filter(function (child) {
	        return !!child.props[showProp];
	      });
	    }
	    children.forEach(function (child) {
	      if (child) {
	        _this.performAppear(child.key);
	      }
	    });
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var _this2 = this;

	    this.nextProps = nextProps;
	    var nextChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(nextProps));
	    var props = this.props;
	    // exclusive needs immediate response
	    if (props.exclusive) {
	      Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
	        _this2.stop(key);
	      });
	    }
	    var showProp = props.showProp;
	    var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
	    // last props children if exclusive
	    var currentChildren = props.exclusive ? (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props)) : this.state.children;
	    // in case destroy in showProp mode
	    var newChildren = [];
	    if (showProp) {
	      currentChildren.forEach(function (currentChild) {
	        var nextChild = currentChild && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, currentChild.key);
	        var newChild = void 0;
	        if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
	          newChild = _react2["default"].cloneElement(nextChild || currentChild, _defineProperty({}, showProp, true));
	        } else {
	          newChild = nextChild;
	        }
	        if (newChild) {
	          newChildren.push(newChild);
	        }
	      });
	      nextChildren.forEach(function (nextChild) {
	        if (!nextChild || !(0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, nextChild.key)) {
	          newChildren.push(nextChild);
	        }
	      });
	    } else {
	      newChildren = (0, _ChildrenUtils.mergeChildren)(currentChildren, nextChildren);
	    }

	    // need render to avoid update
	    this.setState({
	      children: newChildren
	    });

	    nextChildren.forEach(function (child) {
	      var key = child && child.key;
	      if (child && currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasPrev = child && (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	      if (showProp) {
	        var showInNext = child.props[showProp];
	        if (hasPrev) {
	          var showInNow = (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	          if (!showInNow && showInNext) {
	            _this2.keysToEnter.push(key);
	          }
	        } else if (showInNext) {
	          _this2.keysToEnter.push(key);
	        }
	      } else if (!hasPrev) {
	        _this2.keysToEnter.push(key);
	      }
	    });

	    currentChildren.forEach(function (child) {
	      var key = child && child.key;
	      if (child && currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasNext = child && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, key);
	      if (showProp) {
	        var showInNow = child.props[showProp];
	        if (hasNext) {
	          var showInNext = (0, _ChildrenUtils.findShownChildInChildrenByKey)(nextChildren, key, showProp);
	          if (!showInNext && showInNow) {
	            _this2.keysToLeave.push(key);
	          }
	        } else if (showInNow) {
	          _this2.keysToLeave.push(key);
	        }
	      } else if (!hasNext) {
	        _this2.keysToLeave.push(key);
	      }
	    });
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  },
	  performEnter: function performEnter(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillEnter(this.handleDoneAdding.bind(this, key, 'enter'));
	    }
	  },
	  performAppear: function performAppear(key) {
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillAppear(this.handleDoneAdding.bind(this, key, 'appear'));
	    }
	  },
	  handleDoneAdding: function handleDoneAdding(key, type) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    if (!this.isValidChildByKey(currentChildren, key)) {
	      // exclusive will not need this
	      this.performLeave(key);
	    } else {
	      if (type === 'appear') {
	        if (_util2["default"].allowAppearCallback(props)) {
	          props.onAppear(key);
	          props.onEnd(key, true);
	        }
	      } else {
	        if (_util2["default"].allowEnterCallback(props)) {
	          props.onEnter(key);
	          props.onEnd(key, true);
	        }
	      }
	    }
	  },
	  performLeave: function performLeave(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillLeave(this.handleDoneLeaving.bind(this, key));
	    }
	  },
	  handleDoneLeaving: function handleDoneLeaving(key) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    // in case state change is too fast
	    if (this.isValidChildByKey(currentChildren, key)) {
	      this.performEnter(key);
	    } else {
	      var end = function end() {
	        if (_util2["default"].allowLeaveCallback(props)) {
	          props.onLeave(key);
	          props.onEnd(key, false);
	        }
	      };
	      /* eslint react/no-is-mounted:0 */
	      if (this.isMounted() && !(0, _ChildrenUtils.isSameChildren)(this.state.children, currentChildren, props.showProp)) {
	        this.setState({
	          children: currentChildren
	        }, end);
	      } else {
	        end();
	      }
	    }
	  },
	  isValidChildByKey: function isValidChildByKey(currentChildren, key) {
	    var showProp = this.props.showProp;
	    if (showProp) {
	      return (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	    }
	    return (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	  },
	  stop: function stop(key) {
	    delete this.currentlyAnimatingKeys[key];
	    var component = this.refs[key];
	    if (component) {
	      component.stop();
	    }
	  },
	  render: function render() {
	    var props = this.props;
	    this.nextProps = props;
	    var stateChildren = this.state.children;
	    var children = null;
	    if (stateChildren) {
	      children = stateChildren.map(function (child) {
	        if (child === null || child === undefined) {
	          return child;
	        }
	        if (!child.key) {
	          throw new Error('must set key for <rc-animate> children');
	        }
	        return _react2["default"].createElement(
	          _AnimateChild2["default"],
	          {
	            key: child.key,
	            ref: child.key,
	            animation: props.animation,
	            transitionName: props.transitionName,
	            transitionEnter: props.transitionEnter,
	            transitionAppear: props.transitionAppear,
	            transitionLeave: props.transitionLeave
	          },
	          child
	        );
	      });
	    }
	    var Component = props.component;
	    if (Component) {
	      var passedProps = props;
	      if (typeof Component === 'string') {
	        passedProps = _extends({
	          className: props.className,
	          style: props.style
	        }, props.componentProps);
	      }
	      return _react2["default"].createElement(
	        Component,
	        passedProps,
	        children
	      );
	    }
	    return children[0] || null;
	  }
	});

	exports["default"] = Animate;
	module.exports = exports['default'];

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toArrayChildren = toArrayChildren;
	exports.findChildInChildrenByKey = findChildInChildrenByKey;
	exports.findShownChildInChildrenByKey = findShownChildInChildrenByKey;
	exports.findHiddenChildInChildrenByKey = findHiddenChildInChildrenByKey;
	exports.isSameChildren = isSameChildren;
	exports.mergeChildren = mergeChildren;

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function toArrayChildren(children) {
	  var ret = [];
	  _react2["default"].Children.forEach(children, function (child) {
	    ret.push(child);
	  });
	  return ret;
	}

	function findChildInChildrenByKey(children, key) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (ret) {
	        return;
	      }
	      if (child && child.key === key) {
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}

	function findShownChildInChildrenByKey(children, key, showProp) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (child && child.key === key && child.props[showProp]) {
	        if (ret) {
	          throw new Error('two child with same key for <rc-animate> children');
	        }
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}

	function findHiddenChildInChildrenByKey(children, key, showProp) {
	  var found = 0;
	  if (children) {
	    children.forEach(function (child) {
	      if (found) {
	        return;
	      }
	      found = child && child.key === key && !child.props[showProp];
	    });
	  }
	  return found;
	}

	function isSameChildren(c1, c2, showProp) {
	  var same = c1.length === c2.length;
	  if (same) {
	    c1.forEach(function (child, index) {
	      var child2 = c2[index];
	      if (child && child2) {
	        if (child && !child2 || !child && child2) {
	          same = false;
	        } else if (child.key !== child2.key) {
	          same = false;
	        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
	          same = false;
	        }
	      }
	    });
	  }
	  return same;
	}

	function mergeChildren(prev, next) {
	  var ret = [];

	  // For each key of `next`, the list of keys to insert before that key in
	  // the combined list
	  var nextChildrenPending = {};
	  var pendingChildren = [];
	  prev.forEach(function (child) {
	    if (child && findChildInChildrenByKey(next, child.key)) {
	      if (pendingChildren.length) {
	        nextChildrenPending[child.key] = pendingChildren;
	        pendingChildren = [];
	      }
	    } else {
	      pendingChildren.push(child);
	    }
	  });

	  next.forEach(function (child) {
	    if (child && nextChildrenPending.hasOwnProperty(child.key)) {
	      ret = ret.concat(nextChildrenPending[child.key]);
	    }
	    ret.push(child);
	  });

	  ret = ret.concat(pendingChildren);

	  return ret;
	}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(12);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _cssAnimation = __webpack_require__(73);

	var _cssAnimation2 = _interopRequireDefault(_cssAnimation);

	var _util = __webpack_require__(77);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var transitionMap = {
	  enter: 'transitionEnter',
	  appear: 'transitionAppear',
	  leave: 'transitionLeave'
	};

	var AnimateChild = _react2["default"].createClass({
	  displayName: 'AnimateChild',

	  propTypes: {
	    children: _react2["default"].PropTypes.any
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this.stop();
	  },
	  componentWillEnter: function componentWillEnter(done) {
	    if (_util2["default"].isEnterSupported(this.props)) {
	      this.transition('enter', done);
	    } else {
	      done();
	    }
	  },
	  componentWillAppear: function componentWillAppear(done) {
	    if (_util2["default"].isAppearSupported(this.props)) {
	      this.transition('appear', done);
	    } else {
	      done();
	    }
	  },
	  componentWillLeave: function componentWillLeave(done) {
	    if (_util2["default"].isLeaveSupported(this.props)) {
	      this.transition('leave', done);
	    } else {
	      // always sync, do not interupt with react component life cycle
	      // update hidden -> animate hidden ->
	      // didUpdate -> animate leave -> unmount (if animate is none)
	      done();
	    }
	  },
	  transition: function transition(animationType, finishCallback) {
	    var _this = this;

	    var node = _reactDom2["default"].findDOMNode(this);
	    var props = this.props;
	    var transitionName = props.transitionName;
	    var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
	    this.stop();
	    var end = function end() {
	      _this.stopper = null;
	      finishCallback();
	    };
	    if ((_cssAnimation.isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
	      var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
	      var activeName = name + '-active';
	      if (nameIsObj && transitionName[animationType + 'Active']) {
	        activeName = transitionName[animationType + 'Active'];
	      }
	      this.stopper = (0, _cssAnimation2["default"])(node, {
	        name: name,
	        active: activeName
	      }, end);
	    } else {
	      this.stopper = props.animation[animationType](node, end);
	    }
	  },
	  stop: function stop() {
	    var stopper = this.stopper;
	    if (stopper) {
	      this.stopper = null;
	      stopper.stop();
	    }
	  },
	  render: function render() {
	    return this.props.children;
	  }
	});

	exports["default"] = AnimateChild;
	module.exports = exports['default'];

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _Event = __webpack_require__(74);

	var _Event2 = _interopRequireDefault(_Event);

	var _componentClasses = __webpack_require__(75);

	var _componentClasses2 = _interopRequireDefault(_componentClasses);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var isCssAnimationSupported = _Event2["default"].endEvents.length !== 0;


	var capitalPrefixes = ['Webkit', 'Moz', 'O',
	// ms is special .... !
	'ms'];
	var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

	function getStyleProperty(node, name) {
	  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
	  var style = window.getComputedStyle(node, null);
	  var ret = '';
	  for (var i = 0; i < prefixes.length; i++) {
	    ret = style.getPropertyValue(prefixes[i] + name);
	    if (ret) {
	      break;
	    }
	  }
	  return ret;
	}

	function fixBrowserByTimeout(node) {
	  if (isCssAnimationSupported) {
	    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
	    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
	    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
	    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
	    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
	    // sometimes, browser bug
	    node.rcEndAnimTimeout = setTimeout(function () {
	      node.rcEndAnimTimeout = null;
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }, time * 1000 + 200);
	  }
	}

	function clearBrowserBugTimeout(node) {
	  if (node.rcEndAnimTimeout) {
	    clearTimeout(node.rcEndAnimTimeout);
	    node.rcEndAnimTimeout = null;
	  }
	}

	var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
	  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
	  var className = nameIsObj ? transitionName.name : transitionName;
	  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
	  var end = endCallback;
	  var start = void 0;
	  var active = void 0;
	  var nodeClasses = (0, _componentClasses2["default"])(node);

	  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
	    end = endCallback.end;
	    start = endCallback.start;
	    active = endCallback.active;
	  }

	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }

	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }

	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }

	    clearBrowserBugTimeout(node);

	    nodeClasses.remove(className);
	    nodeClasses.remove(activeClassName);

	    _Event2["default"].removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;

	    // Usually this optional end is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (end) {
	      end();
	    }
	  };

	  _Event2["default"].addEndEventListener(node, node.rcEndListener);

	  if (start) {
	    start();
	  }
	  nodeClasses.add(className);

	  node.rcAnimTimeout = setTimeout(function () {
	    node.rcAnimTimeout = null;
	    nodeClasses.add(activeClassName);
	    if (active) {
	      setTimeout(active, 0);
	    }
	    fixBrowserByTimeout(node);
	    // 30ms for firefox
	  }, 30);

	  return {
	    stop: function stop() {
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }
	  };
	};

	cssAnimation.style = function (node, style, callback) {
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }

	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }

	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }

	    clearBrowserBugTimeout(node);

	    _Event2["default"].removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;

	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };

	  _Event2["default"].addEndEventListener(node, node.rcEndListener);

	  node.rcAnimTimeout = setTimeout(function () {
	    for (var s in style) {
	      if (style.hasOwnProperty(s)) {
	        node.style[s] = style[s];
	      }
	    }
	    node.rcAnimTimeout = null;
	    fixBrowserByTimeout(node);
	  }, 0);
	};

	cssAnimation.setTransition = function (node, p, value) {
	  var property = p;
	  var v = value;
	  if (value === undefined) {
	    v = property;
	    property = '';
	  }
	  property = property || '';
	  capitalPrefixes.forEach(function (prefix) {
	    node.style[prefix + 'Transition' + property] = v;
	  });
	};

	cssAnimation.isCssAnimationSupported = isCssAnimationSupported;

	exports["default"] = cssAnimation;
	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var EVENT_NAME_MAP = {
	  transitionend: {
	    transition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'mozTransitionEnd',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd'
	  },

	  animationend: {
	    animation: 'animationend',
	    WebkitAnimation: 'webkitAnimationEnd',
	    MozAnimation: 'mozAnimationEnd',
	    OAnimation: 'oAnimationEnd',
	    msAnimation: 'MSAnimationEnd'
	  }
	};

	var endEvents = [];

	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;

	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }

	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }

	  for (var baseEventName in EVENT_NAME_MAP) {
	    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
	      var baseEvents = EVENT_NAME_MAP[baseEventName];
	      for (var styleName in baseEvents) {
	        if (styleName in style) {
	          endEvents.push(baseEvents[styleName]);
	          break;
	        }
	      }
	    }
	  }
	}

	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
	  detectEvents();
	}

	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}

	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}

	var TransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },


	  endEvents: endEvents,

	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};

	exports["default"] = TransitionEvents;
	module.exports = exports['default'];

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	try {
	  var index = __webpack_require__(76);
	} catch (err) {
	  var index = __webpack_require__(76);
	}

	/**
	 * Whitespace regexp.
	 */

	var re = /\s+/;

	/**
	 * toString reference.
	 */

	var toString = Object.prototype.toString;

	/**
	 * Wrap `el` in a `ClassList`.
	 *
	 * @param {Element} el
	 * @return {ClassList}
	 * @api public
	 */

	module.exports = function(el){
	  return new ClassList(el);
	};

	/**
	 * Initialize a new ClassList for `el`.
	 *
	 * @param {Element} el
	 * @api private
	 */

	function ClassList(el) {
	  if (!el || !el.nodeType) {
	    throw new Error('A DOM element reference is required');
	  }
	  this.el = el;
	  this.list = el.classList;
	}

	/**
	 * Add class `name` if not already present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.add = function(name){
	  // classList
	  if (this.list) {
	    this.list.add(name);
	    return this;
	  }

	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (!~i) arr.push(name);
	  this.el.className = arr.join(' ');
	  return this;
	};

	/**
	 * Remove class `name` when present, or
	 * pass a regular expression to remove
	 * any which match.
	 *
	 * @param {String|RegExp} name
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.remove = function(name){
	  if ('[object RegExp]' == toString.call(name)) {
	    return this.removeMatching(name);
	  }

	  // classList
	  if (this.list) {
	    this.list.remove(name);
	    return this;
	  }

	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (~i) arr.splice(i, 1);
	  this.el.className = arr.join(' ');
	  return this;
	};

	/**
	 * Remove all classes matching `re`.
	 *
	 * @param {RegExp} re
	 * @return {ClassList}
	 * @api private
	 */

	ClassList.prototype.removeMatching = function(re){
	  var arr = this.array();
	  for (var i = 0; i < arr.length; i++) {
	    if (re.test(arr[i])) {
	      this.remove(arr[i]);
	    }
	  }
	  return this;
	};

	/**
	 * Toggle class `name`, can force state via `force`.
	 *
	 * For browsers that support classList, but do not support `force` yet,
	 * the mistake will be detected and corrected.
	 *
	 * @param {String} name
	 * @param {Boolean} force
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.toggle = function(name, force){
	  // classList
	  if (this.list) {
	    if ("undefined" !== typeof force) {
	      if (force !== this.list.toggle(name, force)) {
	        this.list.toggle(name); // toggle again to correct
	      }
	    } else {
	      this.list.toggle(name);
	    }
	    return this;
	  }

	  // fallback
	  if ("undefined" !== typeof force) {
	    if (!force) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  } else {
	    if (this.has(name)) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  }

	  return this;
	};

	/**
	 * Return an array of classes.
	 *
	 * @return {Array}
	 * @api public
	 */

	ClassList.prototype.array = function(){
	  var className = this.el.getAttribute('class') || '';
	  var str = className.replace(/^\s+|\s+$/g, '');
	  var arr = str.split(re);
	  if ('' === arr[0]) arr.shift();
	  return arr;
	};

	/**
	 * Check if class `name` is present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.has =
	ClassList.prototype.contains = function(name){
	  return this.list
	    ? this.list.contains(name)
	    : !! ~index(this.array(), name);
	};


/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = function(arr, obj){
	  if (arr.indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ },
/* 77 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var util = {
	  isAppearSupported: function isAppearSupported(props) {
	    return props.transitionName && props.transitionAppear || props.animation.appear;
	  },
	  isEnterSupported: function isEnterSupported(props) {
	    return props.transitionName && props.transitionEnter || props.animation.enter;
	  },
	  isLeaveSupported: function isLeaveSupported(props) {
	    return props.transitionName && props.transitionLeave || props.animation.leave;
	  },
	  allowAppearCallback: function allowAppearCallback(props) {
	    return props.transitionAppear || props.animation.appear;
	  },
	  allowEnterCallback: function allowEnterCallback(props) {
	    return props.transitionEnter || props.animation.enter;
	  },
	  allowLeaveCallback: function allowLeaveCallback(props) {
	    return props.transitionLeave || props.animation.leave;
	  }
	};
	exports["default"] = util;
	module.exports = exports['default'];

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = toArray;

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function toArray(children) {
	  var ret = [];
	  _react2["default"].Children.forEach(children, function (c) {
	    ret.push(c);
	  });
	  return ret;
	}
	module.exports = exports['default'];

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _className = __webpack_require__(31);

	var _ButtonContainer = __webpack_require__(24);

	var _ButtonContainer2 = _interopRequireDefault(_ButtonContainer);

	var _ButtonGroup = __webpack_require__(25);

	var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

	var _Button = __webpack_require__(22);

	var _Button2 = _interopRequireDefault(_Button);

	var _Icon = __webpack_require__(20);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Modal = __webpack_require__(37);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ButtonAction = function (_React$Component) {
	  _inherits(ButtonAction, _React$Component);

	  function ButtonAction(props) {
	    _classCallCheck(this, ButtonAction);

	    var _this = _possibleConstructorReturn(this, (ButtonAction.__proto__ || Object.getPrototypeOf(ButtonAction)).call(this, props));

	    _this.openModal = function () {
	      _this.setState({
	        isModalOpen: true
	      });
	    };

	    _this.closeModal = function () {
	      _this.setState({
	        isModalOpen: false
	      });
	    };

	    _this.state = {
	      showAction: false,
	      isModalOpen: false
	    };
	    return _this;
	  }

	  _createClass(ButtonAction, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props,
	          children = _props.children,
	          className = _props.className,
	          classPrefix = _props.classPrefix,
	          props = _objectWithoutProperties(_props, ['children', 'className', 'classPrefix']);

	      var more = false;
	      if (children) {
	        more = true;
	      }

	      var nsPrefix = (0, _className.setClassNS)(classPrefix);
	      var btnPrefix = (0, _className.setClassNS)('btn-more');
	      var wrapCls = (0, _classnames2.default)(nsPrefix, className);

	      return _react2.default.createElement(
	        'div',
	        { className: wrapCls },
	        _react2.default.createElement(
	          _ButtonContainer2.default,
	          { more: more },
	          _react2.default.createElement(
	            _ButtonGroup2.default,
	            { amStyle: 'primary', gapped: true, justify: true },
	            this.props.actions.map(function (item, i) {
	              var title = item.title,
	                  others = _objectWithoutProperties(item, ['title']);

	              return _react2.default.createElement(
	                _Button2.default,
	                _extends({}, others, { key: i }),
	                title
	              );
	            })
	          ),
	          more ? _react2.default.createElement(
	            _Button2.default,
	            { className: btnPrefix, onClick: this.openModal },
	            _react2.default.createElement(_Icon2.default, { name: 'more-vertical' })
	          ) : null
	        ),
	        _react2.default.createElement(
	          _Modal2.default,
	          {
	            ref: function ref(_ref) {
	              return _this2.modal = _ref;
	            },
	            isOpen: this.state.isModalOpen,
	            onDismiss: this.closeModal,
	            btnClassName: nsPrefix + '-action-btn',
	            role: 'actions'
	          },
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return ButtonAction;
	}(_react2.default.Component);

	ButtonAction.propTypes = {
	  classPrefix: _react2.default.PropTypes.string.isRequired,
	  actions: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    title: _react.PropTypes.string.required
	  }))
	};
	ButtonAction.defaultProps = {
	  classPrefix: 'btn-action'
	};
	exports.default = ButtonAction;
	module.exports = exports['default'];

/***/ },
/* 80 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var fallback = {
	  detectionRegex: {
	    uc: /ucbrowser/i,
	    zuoku: /zuoku build/i,
	    coolpad: /coolpad/i
	  },

	  addHook: function addHook() {
	    // Android browsers legacy flexbox fallback
	    try {
	      var ua = navigator.userAgent.toLowerCase();
	      var fbNeeded = false;

	      // TODO: - add version detecting when UC supports flexbox
	      if (/android/i.test(ua)) {
	        Object.keys(fallback.detectionRegex).forEach(function (key) {
	          !fbNeeded && (fbNeeded = fallback.detectionRegex[key].test(ua));
	        });

	        fbNeeded && (document.documentElement.className += ' fb-legacy-flexbox');
	      }
	    } catch (e) {}
	  }
	};

	fallback.addHook();

	exports.default = fallback;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
});