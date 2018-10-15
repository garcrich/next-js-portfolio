module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./styles.scss
var styles = __webpack_require__(4);
var styles_default = /*#__PURE__*/__webpack_require__.n(styles);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./partials/Nav.js


/* harmony default export */ var Nav = (function (props) {
  return external__react__default.a.createElement("ul", {
    className: "medium-horizontal menu ".concat(props.navIsStatic === 'true' ? 'staticNav' : null)
  }, external__react__default.a.createElement("li", {
    id: "mobileNavIcon",
    className: "hamburger-icon",
    "data-toggle": "mobileNav mobileNavIcon",
    "data-toggler": ".toggle-mobile-icon"
  }, external__react__default.a.createElement("i", {
    className: "fas fa-bars"
  }), external__react__default.a.createElement("i", {
    className: "far fa-times-circle"
  })), external__react__default.a.createElement(link__default.a, {
    href: "/index"
  }, external__react__default.a.createElement("li", {
    className: "nav-menu__logo-container"
  }, external__react__default.a.createElement("a", null, external__react__default.a.createElement("i", {
    className: "fi-list"
  }), " ", external__react__default.a.createElement("span", {
    className: "nav-menu__logo"
  }, "RG")))), external__react__default.a.createElement("span", {
    className: "nav-menu__items"
  }, external__react__default.a.createElement(link__default.a, {
    href: "/skills"
  }, external__react__default.a.createElement("li", null, external__react__default.a.createElement("a", null, external__react__default.a.createElement("i", {
    className: "fi-list"
  }), " ", external__react__default.a.createElement("span", null, "Skills")))), external__react__default.a.createElement(link__default.a, {
    href: "/work-history"
  }, external__react__default.a.createElement("li", null, external__react__default.a.createElement("a", null, external__react__default.a.createElement("i", {
    className: "fi-list"
  }), " ", external__react__default.a.createElement("span", null, "Work History")))), external__react__default.a.createElement(link__default.a, {
    href: "/projects"
  }, external__react__default.a.createElement("li", null, external__react__default.a.createElement("a", null, external__react__default.a.createElement("i", {
    className: "fi-list"
  }), " ", external__react__default.a.createElement("span", null, "Projects")))), external__react__default.a.createElement(link__default.a, {
    href: "/contact"
  }, external__react__default.a.createElement("li", null, external__react__default.a.createElement("a", null, external__react__default.a.createElement("i", {
    className: "fi-list"
  }), " ", external__react__default.a.createElement("span", null, "Contact"))))));
});
// CONCATENATED MODULE: ./partials/MobileNav.js


/* harmony default export */ var MobileNav = (function (props) {
  return external__react__default.a.createElement("div", {
    className: "mobile-nav"
  }, external__react__default.a.createElement("ul", {
    id: "mobileNav",
    className: "vertical menu ".concat(props.navIsStatic === 'true' ? 'z-index-reset' : ""),
    "data-toggler": ".is-shown"
  }, external__react__default.a.createElement("li", {
    className: "menu-item"
  }, external__react__default.a.createElement(link__default.a, {
    href: "/index"
  }, external__react__default.a.createElement("a", null, "Home"))), external__react__default.a.createElement("li", {
    className: "menu-item"
  }, external__react__default.a.createElement(link__default.a, {
    href: "/skills"
  }, external__react__default.a.createElement("a", null, "Skills"))), external__react__default.a.createElement("li", {
    className: "menu-item"
  }, external__react__default.a.createElement(link__default.a, {
    href: "/work-history"
  }, external__react__default.a.createElement("a", null, "Work History"))), external__react__default.a.createElement("li", {
    className: "menu-item"
  }, external__react__default.a.createElement(link__default.a, {
    href: "/projects"
  }, external__react__default.a.createElement("a", null, "Projects"))), external__react__default.a.createElement("li", {
    className: "menu-item"
  }, external__react__default.a.createElement(link__default.a, {
    href: "/contact"
  }, external__react__default.a.createElement("a", null, "Contact")))));
});
// CONCATENATED MODULE: ./partials/Footer.js



var Footer_FooterLink = function FooterLink(props) {
  return external__react__default.a.createElement("li", {
    className: "footer-link"
  }, external__react__default.a.createElement(link__default.a, {
    href: props.href
  }, external__react__default.a.createElement("a", null, props.title)));
};

var Footer_FooterSocialIcon = function FooterSocialIcon(props) {
  return external__react__default.a.createElement("a", {
    href: "".concat(props.href),
    target: "_blank",
    className: "cell medium-1 small-2 text-center"
  }, external__react__default.a.createElement("i", {
    className: "fab ".concat(props.icon, " footer-social-icon")
  }));
};

/* harmony default export */ var Footer = (function (props) {
  return external__react__default.a.createElement("div", null, external__react__default.a.createElement("footer", {
    className: "".concat(props.removeCTApadding === "true" ? "removedCTA" : "")
  }, external__react__default.a.createElement("ul", {
    className: "social-icons"
  }, external__react__default.a.createElement(Footer_FooterSocialIcon, {
    href: "https://www.youtube.com/channel/UCul78U9NKBYHyqnhQfqUXmg",
    icon: "fa-youtube"
  }), external__react__default.a.createElement(Footer_FooterSocialIcon, {
    href: "https://twitter.com/RickyGarciaDev",
    icon: "fa-twitter"
  }), external__react__default.a.createElement(Footer_FooterSocialIcon, {
    href: "https://github.com/garcrich",
    icon: "fa-github"
  }), external__react__default.a.createElement(Footer_FooterSocialIcon, {
    href: "https://www.linkedin.com/in/rickygarciawebdev",
    icon: "fa-linkedin-in"
  })), external__react__default.a.createElement("ul", {
    className: "grid-x align-center no-bullet"
  }, external__react__default.a.createElement(Footer_FooterLink, {
    href: "/skills",
    title: "skills"
  }), external__react__default.a.createElement(Footer_FooterLink, {
    href: "/work-history",
    title: "work history"
  }), external__react__default.a.createElement(Footer_FooterLink, {
    href: "/projects",
    title: "projects"
  }), external__react__default.a.createElement(Footer_FooterLink, {
    href: "/contact",
    title: "contact"
  }))));
});
// EXTERNAL MODULE: external "jquery"
var external__jquery_ = __webpack_require__(5);
var external__jquery__default = /*#__PURE__*/__webpack_require__.n(external__jquery_);

// CONCATENATED MODULE: ./layouts/StandardLayout.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StandardLayout_Layout; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

 //import Meta from '../partials/Meta'







var StandardLayout_Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Layout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Layout.__proto__ || Object.getPrototypeOf(Layout)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        isNotMobile: true
      }
    }), _temp));
  }

  _createClass(Layout, [{
    key: "resetMobileNav",
    value: function resetMobileNav() {
      document.getElementById("mobileNav").classList.remove("is-shown");
      document.getElementById("mobileNavIcon").classList.remove("toggle-mobile-icon");
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var foundation = __webpack_require__(6);

      external__jquery__default()(document).foundation();
      window.addEventListener('resize', function () {
        if (window.innerWidth > 400 && document.getElementById("mobileNav").classList.contains("is-shown") == true) {
          _this2.resetMobileNav();
        }
      });
    }
  }, {
    key: "render",
    value: function render(props) {
      return external__react__default.a.createElement("div", {
        className: this.props.fullPageExtend === "true" ? "full-page-extend" : ""
      }, external__react__default.a.createElement(Nav, {
        navIsStatic: this.props.navIsStatic
      }), external__react__default.a.createElement(MobileNav, {
        navIsStatic: this.props.navIsStatic,
        navMobile: this.state.isMobile
      }), this.props.children, external__react__default.a.createElement(Footer, {
        removeCTApadding: this.props.removeCTApadding
      }));
    }
  }]);

  return Layout;
}(external__react__default.a.Component);



/***/ }),
/* 4 */
/***/ (function(module, exports) {



/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("foundation-sites");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);


/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "grid-container cta-body text-center"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "grid-x grid-margin-x align-middle"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "cell large-offset-1 large-3"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    className: "upper-case"
  }, props.title)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "cell large-offset-1 large-3"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, props.paragraph)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "cell large-offset-1 large-3"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    prefetch: true,
    href: "/contact"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "button button--main"
  }, props.button)))));
});

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);


/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "general-hero__container ".concat(props.BgClass)
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "general-hero__content"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", null, props.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", null, props.subtitle), props.cta && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/contact"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "cta"
  }, props.cta))));
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);


/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "grid-container container-padding"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: "pri-color text-center four-col-header"
  }, props.header), props.para && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "pri-color char-max-width char-max-width--center text-center"
  }, props.para), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "grid-x grid-padding-y text-center four-col"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "cell small-6 medium-3"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "".concat(props.icon1)
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", null, props.icon1Text)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "cell small-6 medium-3"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "".concat(props.icon2)
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", null, props.icon2Text)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "cell small-6 medium-3"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "".concat(props.icon3)
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", null, props.icon3Text)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "cell small-6 medium-3"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "".concat(props.icon4)
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", null, props.icon4Text))), props.button && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "button-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "".concat(props.href)
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "button button--main"
  }, props.button))));
});

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return standardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_StandardLayout__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__partials_FourColIcon__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__partials_ContactCta__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__partials_GeneralHero__ = __webpack_require__(9);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var standardPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(standardPage, _React$Component);

  function standardPage() {
    _classCallCheck(this, standardPage);

    return _possibleConstructorReturn(this, (standardPage.__proto__ || Object.getPrototypeOf(standardPage)).apply(this, arguments));
  }

  _createClass(standardPage, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", null, "Ricky Garcia | Skills"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "description",
        content: "Ricky Garcia is versed in HTML5, CSS, JavaScript, Web Design, React.js, and more."
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__layouts_StandardLayout__["a" /* default */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__partials_GeneralHero__["a" /* default */], {
        title: "I get things online",
        subtitle: "Skills to get your idea off the ground",
        BgClass: "hero__skills",
        cta: "ready to start?"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "grid-container container-padding"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "grid-x"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cell medium-12 text-center"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "pri-color text-center"
      }, "Web Development"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "pri-color char-max-width char-max-width--center"
      }, "Getting things on the web can be hard. Marking them to look great is harder. I use a combination of design and development to get the job done right. I\u2019ve honed my skills to deliver the best experience, where it be on a desktop computer or a smartphone.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cell small-12 medium-12"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "grid-x grid-padding-y text-center four-col "
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cell small-4"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fab fa-html5"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", null, "HTML5")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cell small-4"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fab fa-css3-alt"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", null, "CSS")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cell small-4"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fab fa-sass"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", null, "SCSS")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cell small-4"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fab fa-js"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", null, "JavaScript")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cell small-4"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fab fa-react"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", null, "React")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cell small-4"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "four-col",
        src: "../static/skills/jQuery-white.png",
        alt: ""
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", null, "jQuery")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cell small-4"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fas fa-database"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", null, "mongoDB")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cell small-4"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fab fa-node-js"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", null, "node.js")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cell small-4"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "four-col",
        src: "../static/skills/express.png",
        alt: ""
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", null, "express.js"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "button-wrapper"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "",
        className: "button button--main skills-btn"
      }, "See Projects"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "skills-div-bg"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__partials_FourColIcon__["a" /* default */], {
        header: "Marketing",
        para: "Developing is only half the story. Crafting the right message for your audience, optimizing your content for SEO, careful interpretation of your results, and acting on those results requires a completely different set of tools.",
        icon1: "far fa-file-alt",
        icon1Text: "Copywriting",
        icon2: "far fa-thumbs-up",
        icon2Text: "Social Media",
        icon3: "fas fa-chart-area",
        icon3Text: "Analytics",
        icon4: "fab fa-searchengin",
        icon4Text: "SEO"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "grid-container container-padding"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "grid-x"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cell medium-12 text-center"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "pri-color"
      }, "Content Creation"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "pri-color char-max-width char-max-width--center"
      }, "I\u2019ve taken the time to learn the tools give you the ability to share your message with the world and had a blast doing it. But it doesn\u2019t\u2019 come easy, content creation requires a multitude of skills. Here\u2019s my tool set.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cell medium-12"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "grid-x grid-padding-y text-center four-col"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cell small-4"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "far fa-file-video"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", null, "Video")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cell small-4"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fas fa-camera-retro"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", null, "Photography")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cell small-4"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fas fa-pen-fancy"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", null, "Design"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "button-wrapper"
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__partials_ContactCta__["a" /* default */], {
        title: "Need my expertise?",
        paragraph: "I'm ready to dig my toolbox to help you achieve your goals. Send me a line to get the ball rolling.",
        button: "reach out"
      })));
    }
  }]);

  return standardPage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ })
/******/ ]);