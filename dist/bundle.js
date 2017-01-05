/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _ViewPageLayout = __webpack_require__(1);
	
	var _ViewPageLayout2 = _interopRequireDefault(_ViewPageLayout);
	
	var _AdaptiveController = __webpack_require__(22);
	
	var _AdaptiveController2 = _interopRequireDefault(_AdaptiveController);
	
	var _PaginationController = __webpack_require__(24);
	
	var _PaginationController2 = _interopRequireDefault(_PaginationController);
	
	var _SliderController = __webpack_require__(26);
	
	var _SliderController2 = _interopRequireDefault(_SliderController);
	
	var _SwipeController = __webpack_require__(28);
	
	var _SwipeController2 = _interopRequireDefault(_SwipeController);
	
	var _DataLoader = __webpack_require__(29);
	
	var _DataLoader2 = _interopRequireDefault(_DataLoader);
	
	var _SearchController = __webpack_require__(30);
	
	var _SearchController2 = _interopRequireDefault(_SearchController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var layout = new _ViewPageLayout2.default();
	layout.createLayout();
	
	var paginationController = new _PaginationController2.default();
	var sliderController = new _SliderController2.default();
	
	var adaptiveControler = new _AdaptiveController2.default();
	adaptiveControler.addListener([paginationController, sliderController]);
	adaptiveControler.observePageSize();
	
	var dataLoader = new _DataLoader2.default();
	dataLoader.addListener([paginationController, sliderController]);
	
	paginationController.addLoader(dataLoader);
	paginationController.addSliderController(sliderController);
	
	var swipeController = new _SwipeController2.default();
	swipeController.addSliderController(sliderController);
	swipeController.addPaginationController(paginationController);
	
	var searchController = new _SearchController2.default(dataLoader);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ViewPageLayout = function () {
	    function ViewPageLayout() {
	        (0, _classCallCheck3.default)(this, ViewPageLayout);
	
	        this.header = document.createElement('header');
	        this.header.classList.add('pageHeader');
	        this.header.innerHTML = '<div class="searchWrapper"><input type="search" placeholder="youtube" id="inputSearch"><div class="searchIcon"></div></div>';
	
	        this.main = document.createElement('main');
	        this.main.innerHTML = '<div class="videoSliderWrapper"><ul class="videoSlider clearfix"></ul></div>';
	
	        this.footer = document.createElement('footer');
	        this.footer.innerHTML = '<div class="pagerWrapper"><ul class="pager clearfix"></div></ul>';
	    }
	
	    (0, _createClass3.default)(ViewPageLayout, [{
	        key: 'createLayout',
	        value: function createLayout() {
	            var body = document.querySelector('body');
	            body.appendChild(this.header);
	            body.appendChild(this.main);
	            body.appendChild(this.footer);
	        }
	    }]);
	    return ViewPageLayout;
	}();
	
	// export default class {ViewPageLayout}
	
	
	exports.default = ViewPageLayout;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(4);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(5), __esModule: true };

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6);
	var $Object = __webpack_require__(9).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(7);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(17), 'Object', {defineProperty: __webpack_require__(13).f});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(8)
	  , core      = __webpack_require__(9)
	  , ctx       = __webpack_require__(10)
	  , hide      = __webpack_require__(12)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 8 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 9 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(11);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(13)
	  , createDesc = __webpack_require__(21);
	module.exports = __webpack_require__(17) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(14)
	  , IE8_DOM_DEFINE = __webpack_require__(16)
	  , toPrimitive    = __webpack_require__(20)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(17) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(17) && !__webpack_require__(18)(function(){
	  return Object.defineProperty(__webpack_require__(19)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(18)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15)
	  , document = __webpack_require__(8).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(15);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _constants = __webpack_require__(23);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var AdaptiveController = function () {
	    function AdaptiveController() {
	        (0, _classCallCheck3.default)(this, AdaptiveController);
	
	        this.pageWidth = window.innerWidth;
	        this.slidesOnScreen = AdaptiveController.maxSlidesOnScreen();
	        this.listeners = [];
	    }
	
	    (0, _createClass3.default)(AdaptiveController, [{
	        key: 'addListener',
	        value: function addListener(listener) {
	            if (listener instanceof Array) {
	                this.listeners = this.listeners.concat(listener);
	            } else {
	                this.listeners.push(listener);
	            }
	        }
	    }, {
	        key: 'observePageSize',
	        value: function observePageSize() {
	            var that = this;
	            window.addEventListener('resize', function () {
	                that.pageWidth = this.innerWidth;
	                var maxSlidesOnScreen = AdaptiveController.maxSlidesOnScreen();
	
	                if (that.slidesOnScreen !== maxSlidesOnScreen) {
	                    that.slidesOnScreen = maxSlidesOnScreen;
	                    that.listeners.forEach(function (listener) {
	                        return listener.pageSizeChanged(maxSlidesOnScreen);
	                    });
	                }
	            });
	        }
	    }], [{
	        key: 'maxSlidesOnScreen',
	        value: function maxSlidesOnScreen() {
	            return Math.floor(window.innerWidth / (_constants.SliderConstants.SLIDE_WIDTH + _constants.SliderConstants.SLIDE_MARGIN)) || 1;
	        }
	    }]);
	    return AdaptiveController;
	}();
	
	exports.default = AdaptiveController;

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var SliderConstants = {
	    SLIDE_WIDTH: 280,
	    SLIDE_MARGIN: 20
	};
	
	var PaginationConstants = {
	    CONTROL_WIDTH: 30,
	    CONTROL_MARGIN: 10,
	    MAX_CONTROLS_ON_SCREEN: 5,
	    PAGE_DOWNGRADER_FOR_LOADING_NEW_DATA: 3
	};
	
	var DataLoaderConstants = {
	    DATA_URL: 'https://www.googleapis.com/youtube/v3/search?type=video&part=snippet',
	    SLIDES_AMOUNT_TO_LOAD_PER_REQUEST: 15,
	    API_KEY: 'AIzaSyC6qu045NomjZurNpfqr2aUMnuAPQ0_utI'
	};
	
	exports.SliderConstants = SliderConstants;
	exports.PaginationConstants = PaginationConstants;
	exports.DataLoaderConstants = DataLoaderConstants;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _ViewPager = __webpack_require__(25);
	
	var _ViewPager2 = _interopRequireDefault(_ViewPager);
	
	var _AdaptiveController = __webpack_require__(22);
	
	var _AdaptiveController2 = _interopRequireDefault(_AdaptiveController);
	
	var _constants = __webpack_require__(23);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PaginationController = function () {
	    function PaginationController() {
	        (0, _classCallCheck3.default)(this, PaginationController);
	
	        this.viewPager = new _ViewPager2.default();
	        this.dataLoader = null;
	        this.sliderController = null;
	        this.currentPage = 1;
	        this.slidesLoaded = 0;
	        this.slidesOnScreen = 0;
	        this.pagesAdded = 0;
	        this.pager = document.querySelector('.pager');
	        this.pager.addEventListener('click', this.handleClick.bind(this));
	        this.visiblePages = { 'firstVisible': 1, 'lastVisible': _constants.PaginationConstants.MAX_CONTROLS_ON_SCREEN };
	        this.currentTranslateX = 0;
	    }
	
	    (0, _createClass3.default)(PaginationController, [{
	        key: 'addSliderController',
	        value: function addSliderController(sliderController) {
	            this.sliderController = sliderController;
	        }
	    }, {
	        key: 'addLoader',
	        value: function addLoader(dataLoader) {
	            this.dataLoader = dataLoader;
	        }
	    }, {
	        key: 'slideLoaded',
	        value: function slideLoaded(slide) {
	            this.slidesLoaded++;
	            this.addControlIfNeeded();
	        }
	    }, {
	        key: 'addControlIfNeeded',
	        value: function addControlIfNeeded() {
	            if (this.pagesAdded === 0 && this.slidesLoaded > 0) {
	                this.pagesAdded++;
	                this.viewPager.addPage(this.pagesAdded, true);
	            }
	
	            var maxSlidesOnScreen = _AdaptiveController2.default.maxSlidesOnScreen();
	            this.slidesOnScreen = maxSlidesOnScreen;
	            if (this.slidesLoaded > maxSlidesOnScreen && this.pagesAdded < Math.ceil(this.slidesLoaded / maxSlidesOnScreen) && this.currentPage === this.pagesAdded) {
	                this.pagesAdded++;
	                this.viewPager.addPage(this.pagesAdded, false);
	                if (this.pagesAdded === this.currentPage + 1) {
	                    this.checkPagerPosition(this.currentPage);
	                }
	            }
	        }
	    }, {
	        key: 'checkForLoadingNewData',
	        value: function checkForLoadingNewData() {
	            var maxSlidesOnScreen = _AdaptiveController2.default.maxSlidesOnScreen();
	            var mustLoadNewContent = Math.floor(this.slidesLoaded / maxSlidesOnScreen) <= this.currentPage + _constants.PaginationConstants.PAGE_DOWNGRADER_FOR_LOADING_NEW_DATA;
	            this.currentPage++;
	            if (mustLoadNewContent) {
	                this.dataLoader.loadNewData();
	            }
	        }
	    }, {
	        key: 'checkPagerPosition',
	        value: function checkPagerPosition(currentPage) {
	            if (this.pagesAdded > _constants.PaginationConstants.MAX_CONTROLS_ON_SCREEN && this.pagesAdded != currentPage) {
	                var updateTransform = false;
	                if (currentPage >= this.visiblePages.lastVisible && currentPage <= this.pagesAdded) {
	                    this.visiblePages.lastVisible = currentPage + 1;
	                    this.visiblePages.firstVisible = this.visiblePages.lastVisible - (_constants.PaginationConstants.MAX_CONTROLS_ON_SCREEN - 1);
	                    this.currentTranslateX = (this.visiblePages.lastVisible - _constants.PaginationConstants.MAX_CONTROLS_ON_SCREEN) * (_constants.PaginationConstants.CONTROL_WIDTH + _constants.PaginationConstants.CONTROL_MARGIN);
	                    updateTransform = true;
	                }
	                if (currentPage == this.visiblePages.firstVisible && currentPage > 1) {
	                    this.visiblePages.firstVisible = currentPage - 1;
	                    this.visiblePages.lastVisible = this.visiblePages.firstVisible + (_constants.PaginationConstants.MAX_CONTROLS_ON_SCREEN - 1);
	                    this.currentTranslateX = this.currentTranslateX - _constants.PaginationConstants.CONTROL_WIDTH - _constants.PaginationConstants.CONTROL_MARGIN;
	                    updateTransform = true;
	                }
	                if (updateTransform) {
	                    this.viewPager.updateTransform(this.currentTranslateX);
	                }
	            }
	        }
	
	        /* pages clicks */
	
	    }, {
	        key: 'handleClick',
	        value: function handleClick(e) {
	            var liArray = document.querySelectorAll('.pager .page');
	            for (var i = 0; i < liArray.length; i++) {
	                if (e.target === liArray[i]) {
	                    var li = e.target;
	                    this.activateCurrentPage(li);
	                    break;
	                }
	            }
	        }
	    }, {
	        key: 'simulateClickToPage',
	        value: function simulateClickToPage() {
	            var target = document.querySelector('[data-page=\'' + this.currentPage + '\']');
	            this.activateCurrentPage(target);
	        }
	    }, {
	        key: 'clickToNextPage',
	        value: function clickToNextPage(toNext) {
	            if (toNext) {
	                if (this.currentPage < this.pagesAdded) {
	                    this.checkForLoadingNewData();
	                    this.simulateClickToPage();
	                }
	            } else {
	                if (this.currentPage > 1) {
	                    this.currentPage--;
	                    this.simulateClickToPage();
	                }
	            }
	        }
	    }, {
	        key: 'activateCurrentPage',
	        value: function activateCurrentPage(target) {
	            var activeSlide = document.querySelector('.pager .active');
	            if (activeSlide) {
	                activeSlide.className = 'page';
	            }
	
	            target.classList.add('active');
	            var currentPage = Number(target.getAttribute('data-page'));
	            if (currentPage > this.currentPage) {
	                this.checkForLoadingNewData();
	            } else {
	                this.currentPage = currentPage;
	            }
	            this.sliderController.pageChanged(currentPage);
	            this.addControlIfNeeded();
	            this.checkPagerPosition(currentPage);
	        }
	
	        /*reset pagination*/
	
	    }, {
	        key: 'recreatePages',
	        value: function recreatePages() {
	            this.currentPage = 1;
	            this.pagesAdded = 0;
	            this.visiblePages = { 'firstVisible': 1, 'lastVisible': _constants.PaginationConstants.MAX_CONTROLS_ON_SCREEN };
	            this.currentTranslateX = 0;
	            this.viewPager.clearContent();
	            this.viewPager.updateTransform(this.currentTranslateX);
	        }
	    }, {
	        key: 'resetContent',
	        value: function resetContent() {
	            this.slidesLoaded = 0;
	            this.recreatePages();
	        }
	
	        /*notifications*/
	
	    }, {
	        key: 'pageSizeChanged',
	        value: function pageSizeChanged(maxSlidesOnScreen) {
	            if (!this.slidesLoaded) {
	                return;
	            }
	
	            var currentSlide = this.slidesOnScreen * (this.currentPage - 1) + 1;
	            if (currentSlide > this.slidesLoaded) {
	                currentSlide--;
	            }
	            var pageForCurrentSlide = Math.ceil(currentSlide / maxSlidesOnScreen);
	            if (pageForCurrentSlide === 0) {
	                pageForCurrentSlide = 1;
	            }
	            this.recreatePages();
	            var target = document.querySelector('[data-page=\'' + pageForCurrentSlide + '\']');
	            if (!target) {
	                while (!target) {
	                    this.addControlIfNeeded();
	                    target = document.querySelector('[data-page=\'' + pageForCurrentSlide + '\']');
	                    this.checkPagerPosition(this.currentPage);
	                    this.checkForLoadingNewData(); // means that page have never been exists
	                }
	            }
	            this.activateCurrentPage(target);
	        }
	    }]);
	    return PaginationController;
	}();
	
	exports.default = PaginationController;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _constants = __webpack_require__(23);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ViewPager = function () {
	    function ViewPager() {
	        (0, _classCallCheck3.default)(this, ViewPager);
	
	        this.pager = document.querySelector('.pager');
	        this.pagerWrapper = document.querySelector('.pagerWrapper');
	        this.pagerWrapper.style.width = _constants.PaginationConstants.MAX_CONTROLS_ON_SCREEN * (_constants.PaginationConstants.CONTROL_WIDTH + _constants.PaginationConstants.CONTROL_MARGIN) - _constants.PaginationConstants.CONTROL_MARGIN + 'px';
	        this.pagerWrapper.style.height = _constants.PaginationConstants.CONTROL_WIDTH + 'px';
	    }
	
	    (0, _createClass3.default)(ViewPager, [{
	        key: 'addPage',
	        value: function addPage(pageNum, isActive) {
	            var li = document.createElement('li');
	
	            if (isActive) {
	                li.classList.add('page', 'active');
	            } else {
	                li.classList.add('page');
	            }
	
	            li.innerHTML = pageNum;
	            li.setAttribute('data-page', pageNum);
	            this.pager.appendChild(li);
	            this.pager.style.width = pageNum * (_constants.PaginationConstants.CONTROL_WIDTH + _constants.PaginationConstants.CONTROL_MARGIN) + 'px';
	        }
	    }, {
	        key: 'clearContent',
	        value: function clearContent() {
	            this.pager.innerHTML = '';
	        }
	    }, {
	        key: 'updateTransform',
	        value: function updateTransform(transformValue) {
	            this.pager.style.transform = 'translate3d(-' + transformValue + 'px, 0px, 0px)';
	        }
	    }]);
	    return ViewPager;
	}();
	
	exports.default = ViewPager;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _ViewSlider = __webpack_require__(27);
	
	var _ViewSlider2 = _interopRequireDefault(_ViewSlider);
	
	var _AdaptiveController = __webpack_require__(22);
	
	var _AdaptiveController2 = _interopRequireDefault(_AdaptiveController);
	
	var _constants = __webpack_require__(23);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SliderController = function () {
	    function SliderController() {
	        (0, _classCallCheck3.default)(this, SliderController);
	
	        this.viewSlider = new _ViewSlider2.default();
	        this.slidesAmount = 0;
	        this.slidesAmountOnScreen = 0;
	        this.currentTranslateX = 0;
	        this.currentTranslateXWithOffset = 0;
	    }
	
	    (0, _createClass3.default)(SliderController, [{
	        key: 'resetContent',
	        value: function resetContent() {
	            this.slidesAmount = 0;
	            this.slidesAmountOnScreen = 0;
	            this.currentTranslateX = 0;
	            this.currentTranslateXWithOffset = 0;
	            this.viewSlider.resetSlider();
	        }
	    }, {
	        key: 'slideLoaded',
	        value: function slideLoaded(slide) {
	            this.slidesAmount++;
	            this.viewSlider.addSlideToSlider(slide, this.slidesAmount);
	            this.centerContent(_AdaptiveController2.default.maxSlidesOnScreen());
	        }
	    }, {
	        key: 'pageSizeChanged',
	        value: function pageSizeChanged(maxSlidesOnScreen) {
	            this.centerContent(maxSlidesOnScreen);
	        }
	    }, {
	        key: 'centerContent',
	        value: function centerContent(maxSlidesOnScreen) {
	            if (!this.slidesAmount) {
	                return;
	            }
	
	            if (maxSlidesOnScreen !== this.slidesAmountOnScreen) {
	                this.slidesAmountOnScreen = maxSlidesOnScreen;
	
	                if (this.slidesAmountOnScreen < maxSlidesOnScreen) {
	                    this.currentTranslateX = this.currentTranslateX - _constants.SliderConstants.SLIDE_WIDTH - _constants.SliderConstants.SLIDE_MARGIN;
	                } else if (this.slidesAmountOnScreen > maxSlidesOnScreen) {
	                    this.currentTranslateX = this.currentTranslateX + _constants.SliderConstants.SLIDE_WIDTH + _constants.SliderConstants.SLIDE_MARGIN;
	                }
	
	                var width = maxSlidesOnScreen * (_constants.SliderConstants.SLIDE_WIDTH + _constants.SliderConstants.SLIDE_MARGIN) - _constants.SliderConstants.SLIDE_MARGIN;
	                this.viewSlider.updatePosition(this.currentTranslateX);
	                this.viewSlider.updateWrapper(width);
	            }
	        }
	    }, {
	        key: 'pageChanged',
	        value: function pageChanged(page) {
	            var maxSlidesOnScreen = _AdaptiveController2.default.maxSlidesOnScreen();
	            this.currentTranslateX = -(maxSlidesOnScreen * (page - 1) * (_constants.SliderConstants.SLIDE_WIDTH + _constants.SliderConstants.SLIDE_MARGIN));
	            this.viewSlider.updatePosition(this.currentTranslateX);
	        }
	    }, {
	        key: 'sliderPositionChangedWithOffset',
	        value: function sliderPositionChangedWithOffset(offset) {
	            this.currentTranslateXWithOffset = this.currentTranslateX + offset;
	            this.viewSlider.updatePosition(this.currentTranslateX + offset);
	        }
	    }, {
	        key: 'fixSliderPosition',
	        value: function fixSliderPosition(resultOffset) {
	            if (resultOffset > 0) {
	                this.currentTranslateX = 0;
	                this.viewSlider.updatePosition(this.currentTranslateX);
	            } else {
	                var maxSliderTransformX = -(this.slidesAmount * (_constants.SliderConstants.SLIDE_WIDTH + _constants.SliderConstants.SLIDE_MARGIN) - (_constants.SliderConstants.SLIDE_WIDTH + _constants.SliderConstants.SLIDE_MARGIN) * this.slidesAmountOnScreen);
	                if (this.currentTranslateXWithOffset < maxSliderTransformX) {
	                    this.currentTranslateX = maxSliderTransformX;
	                    this.viewSlider.updatePosition(this.currentTranslateX);
	                }
	            }
	        }
	    }]);
	    return SliderController;
	}();
	
	exports.default = SliderController;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _constants = __webpack_require__(23);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ViewSlider = function () {
	    function ViewSlider() {
	        (0, _classCallCheck3.default)(this, ViewSlider);
	
	        this.slider = document.querySelector('.videoSlider');
	        this.sliderWrapper = document.querySelector('.videoSliderWrapper');
	    }
	
	    (0, _createClass3.default)(ViewSlider, [{
	        key: 'addSlideToSlider',
	        value: function addSlideToSlider(slideData, slidesAmount) {
	            var slideList = document.createElement('li');
	            slideList.classList.add('slide');
	            slideList.setAttribute('data-slide', slidesAmount);
	            var slideInfo = ' <div class="imageWrapper">\n                                <img class="slidePreview" src="' + slideData.previewSrc + '" alt="preview">\n                                <h2 class="slideTitle"><a class="slideLink" href="' + slideData.link + '" target="_blank">' + slideData.title + '</a></h2>\n                            </div>\n                            <div class="slideAuthor">' + slideData.author + '</div>\n                            <div class="slideInfo">\n                                <div class="infoWrapper clearfix">\n                                    <div class="left_StatisticsInfo slideDatePublication">' + slideData.publicationDate.slice(0, 10) + '</div>\n                                    <div class="right_StatisticsInfo slideViewsAmount">' + slideData.viewsAmount + '</div>\n                                </div>\n                                <div class="slideDescription">' + slideData.descriptrion + '</div>\n                                <div class="infoWrapper likesWrapper clearfix">\n                                    <div class="left_StatisticsInfo likesAmount">' + slideData.likesAmount + '</div>\n                                    <div class="right_StatisticsInfo dislikesAmount">' + slideData.dislikesAmount + '</div>\n                                </div>\n                            </div>\n                        ';
	            slideList.innerHTML = slideInfo;
	
	            this.slider.style.width = (_constants.SliderConstants.SLIDE_WIDTH + _constants.SliderConstants.SLIDE_MARGIN) * slidesAmount + 'px';
	            this.slider.appendChild(slideList);
	        }
	    }, {
	        key: 'updatePosition',
	        value: function updatePosition(translate) {
	            this.slider.style.transform = 'translate3d(' + translate + 'px, 0px, 0px)';
	        }
	    }, {
	        key: 'updateWrapper',
	        value: function updateWrapper(width) {
	            this.sliderWrapper.style.width = width + 'px';
	        }
	    }, {
	        key: 'resetSlider',
	        value: function resetSlider() {
	            this.slider.style.transform = 'translate3d(0px, 0px, 0px)';
	            this.slider.innerHTML = '';
	        }
	    }]);
	    return ViewSlider;
	}();
	
	exports.default = ViewSlider;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SwipeController = function () {
	    function SwipeController() {
	        (0, _classCallCheck3.default)(this, SwipeController);
	
	        this.slider = document.querySelector('.videoSlider');
	        this.slider.addEventListener('touchstart', this.handleStart.bind(this), { passive: true });
	        document.addEventListener('touchmove', this.handleMove.bind(this));
	        document.addEventListener('touchend', this.handleEnd.bind(this));
	        this.slider.addEventListener('mousedown', this.handleStart.bind(this));
	        document.addEventListener('mousemove', this.handleMove.bind(this));
	        document.addEventListener('mouseup', this.handleEnd.bind(this));
	        this.startClickPos = 0;
	        this.endClickPos = 0;
	        this.clickDetected = false;
	        this.sliderController = null;
	        this.paginationController = null;
	    }
	
	    (0, _createClass3.default)(SwipeController, [{
	        key: 'addSliderController',
	        value: function addSliderController(sliderController) {
	            this.sliderController = sliderController;
	        }
	    }, {
	        key: 'addPaginationController',
	        value: function addPaginationController(paginationController) {
	            this.paginationController = paginationController;
	        }
	    }, {
	        key: 'handleStart',
	        value: function handleStart(e) {
	            this.startClickPos = e.pageX >= 0 ? e.pageX : e.changedTouches[0].pageX;
	            this.clickDetected = true;
	            this.slider.style.transition = 'none';
	        }
	    }, {
	        key: 'handleMove',
	        value: function handleMove(e) {
	            if (this.clickDetected) {
	                e.preventDefault();
	                var currentMousePos = e.pageX >= 0 ? e.pageX : e.changedTouches[0].pageX;
	
	                var offset = currentMousePos - this.startClickPos;
	                this.sliderController.sliderPositionChangedWithOffset(offset);
	            }
	        }
	    }, {
	        key: 'handleEnd',
	        value: function handleEnd(e) {
	            if (this.clickDetected) {
	                this.endClickPos = e.pageX >= 0 ? e.pageX : e.changedTouches[0].pageX;
	                this.clickDetected = false;
	                this.slider.style.transition = 'transform .3s';
	                this.sliderController.fixSliderPosition(this.endClickPos - this.startClickPos);
	                if (Math.abs(this.startClickPos - this.endClickPos) > 5) {
	                    this.paginationController.clickToNextPage(this.startClickPos > this.endClickPos);
	                }
	            }
	        }
	    }]);
	    return SwipeController;
	}();
	
	exports.default = SwipeController;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _constants = __webpack_require__(23);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DataLoader = function () {
	    function DataLoader() {
	        (0, _classCallCheck3.default)(this, DataLoader);
	
	        this.queryString = null;
	        this.nextPageToken = null;
	        this.listeners = [];
	    }
	
	    (0, _createClass3.default)(DataLoader, [{
	        key: 'addListener',
	        value: function addListener(listener) {
	            if (listener instanceof Array) {
	                this.listeners = this.listeners.concat(listener);
	            } else {
	                this.listeners.push(listener);
	            }
	        }
	    }, {
	        key: 'loadData',
	        value: function loadData(queryString) {
	            if (!queryString) {
	                return;
	            }
	
	            var url = '';
	            var mustNotifyToClearSearchResults = false;
	            if (queryString === this.queryString) {
	                if (!this.nextPageToken) {
	                    return;
	                }
	
	                url = _constants.DataLoaderConstants.DATA_URL + '&maxResults=' + _constants.DataLoaderConstants.SLIDES_AMOUNT_TO_LOAD_PER_REQUEST + '&q=' + queryString + '&pageToken=' + this.nextPageToken + '&key=' + _constants.DataLoaderConstants.API_KEY;
	            } else {
	                mustNotifyToClearSearchResults = true;
	                this.queryString = queryString;
	                url = _constants.DataLoaderConstants.DATA_URL + '&maxResults=' + _constants.DataLoaderConstants.SLIDES_AMOUNT_TO_LOAD_PER_REQUEST + '&q=' + queryString + '&key=' + _constants.DataLoaderConstants.API_KEY;
	            }
	
	            var nextPageToken = null;
	            var slidesArray = [];
	            var that = this;
	
	            fetch(url).then(function (response) {
	                return response.json();
	            }).then(function (parsedJSON) {
	                that.nextPageToken = parsedJSON.nextPageToken;
	                var videoIdsArray = [];
	                var responseTextArray = parsedJSON['items'];
	                responseTextArray.forEach(function (item, index) {
	                    videoIdsArray.push(item.id.videoId);
	
	                    var slideData = {
	                        link: 'https://www.youtube.com/watch?v=' + responseTextArray[index].id.videoId,
	                        title: responseTextArray[index].snippet.title,
	                        previewSrc: responseTextArray[index].snippet.thumbnails.medium.url,
	                        descriptrion: responseTextArray[index].snippet.description,
	                        author: responseTextArray[index].snippet.channelTitle,
	                        publicationDate: responseTextArray[index].snippet.publishedAt,
	                        viewsAmount: 0
	                    };
	                    slidesArray.push(slideData);
	                });
	                return 'https://www.googleapis.com/youtube/v3/videos?key=' + _constants.DataLoaderConstants.API_KEY + '&id=' + videoIdsArray.join(',') + '&part=statistics';
	            }).then(function (statisticsUrl) {
	                return fetch(statisticsUrl);
	            }).then(function (response) {
	                return response.json();
	            }).then(function (parsedJSON) {
	                slidesArray.forEach(function (slide, index) {
	                    var statistic = parsedJSON['items'][index];
	                    slide.viewsAmount = statistic.statistics.viewCount;
	                    slide.likesAmount = statistic.statistics.likeCount;
	                    slide.dislikesAmount = statistic.statistics.dislikeCount;
	
	                    if (mustNotifyToClearSearchResults) {
	                        that.listeners.forEach(function (listener) {
	                            return listener.resetContent();
	                        });
	                        mustNotifyToClearSearchResults = false;
	                    }
	                    that.listeners.forEach(function (listener) {
	                        return listener.slideLoaded(slide);
	                    });
	                });
	            }).catch(function () {
	                console.log('Smth go wrong');
	            });
	        }
	    }, {
	        key: 'loadNewData',
	        value: function loadNewData() {
	            if (this.queryString) {
	                this.loadData(this.queryString);
	            }
	        }
	    }]);
	    return DataLoader;
	}();
	
	exports.default = DataLoader;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SearchController = function () {
	    function SearchController(dataLoader) {
	        (0, _classCallCheck3.default)(this, SearchController);
	
	        this.currentSearchValue = null;
	        this.searchInput = document.querySelector('#inputSearch');
	        this.searchInput.addEventListener('keyup', this.observeInput.bind(this));
	        this.searchIcon = document.querySelector('.searchIcon');
	        this.searchIcon.addEventListener('click', this.observeClick.bind(this));
	        this.dataLoader = dataLoader;
	    }
	
	    (0, _createClass3.default)(SearchController, [{
	        key: 'processInput',
	        value: function processInput() {
	            var searchInput = document.querySelector('#inputSearch');
	            var searchInputValue = searchInput.value;
	            if (searchInputValue && searchInputValue !== this.currentSearchValue) {
	                this.dataLoader.loadData(searchInputValue);
	                this.currentSearchValue = searchInputValue;
	            }
	        }
	    }, {
	        key: 'observeInput',
	        value: function observeInput(event) {
	            if (event.which === 13) {
	                this.processInput();
	            }
	        }
	    }, {
	        key: 'observeClick',
	        value: function observeClick(event) {
	            this.processInput();
	        }
	    }]);
	    return SearchController;
	}();
	
	exports.default = SearchController;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map