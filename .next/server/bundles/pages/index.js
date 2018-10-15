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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);


/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: props.background
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "grid-container container-padding"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "grid-x grid-padding-x grid-margin-x"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "cell mobile-center ".concat(!props.textOrder && "large-offset-1", " large-5 ").concat(props.textOrder)
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    className: "pri-color"
  }, props.header), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "pri-color char-max-width char-max-width--center"
  }, props.para), props.accomplishments && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "pri-color"
  }, "Accomplishments:"), props.accomplishments && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "pri-color char-max-width"
  }, props.accomplishments), props.buttonText === null ? null : props.externalSite === "true" ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "".concat(props.href)
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "button button--main",
    target: "_blank"
  }, props.buttonText)) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "button button--main",
    href: "".concat(props.href)
  }, props.buttonText)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "cell  mobile-center ".concat(props.textOrder && "large-offset-1", " large-6")
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: "img-shadow",
    src: "".concat(props.image),
    alt: "".concat(props.altText)
  })))));
});

/***/ }),
/* 9 */,
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(2);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./layouts/StandardLayout.js + 3 modules
var StandardLayout = __webpack_require__(3);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./partials/HeroHome.js


/* harmony default export */ var HeroHome = (function () {
  return external__react__default.a.createElement("div", {
    className: "index-bg"
  }, external__react__default.a.createElement("div", {
    className: "hero-content"
  }, external__react__default.a.createElement("h1", null, "Ricky Garcia"), external__react__default.a.createElement("span", {
    className: "header-highlight"
  }), external__react__default.a.createElement("h2", null, "Web Developer. Lifelong learner."), external__react__default.a.createElement("a", {
    className: "cta",
    href: "/contact"
  }, "Get In Touch")));
});
// EXTERNAL MODULE: ./partials/FourColIcon.js
var FourColIcon = __webpack_require__(10);

// EXTERNAL MODULE: ./partials/TwoColRow.js
var TwoColRow = __webpack_require__(8);

// EXTERNAL MODULE: ./partials/ContactCta.js
var ContactCta = __webpack_require__(7);

// CONCATENATED MODULE: ./pages/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pages_standardPage; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var pages_standardPage =
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
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", null, "Ricky Garcia Web Developer"), external__react__default.a.createElement("meta", {
        name: "description",
        content: "Ricky Garcia is a web developer and designer living in Boise, Idaho. He's worked on multiple sites for small, medium, and large businesses."
      })), external__react__default.a.createElement(StandardLayout["a" /* default */], null, external__react__default.a.createElement(HeroHome, null), external__react__default.a.createElement(FourColIcon["a" /* default */], {
        header: "My Skillset",
        icon1: "fas fa-code",
        icon1Text: "Web Dev",
        icon2: "fas fa-pencil-alt",
        icon2Text: "Design",
        icon3: "fab fa-adversal",
        icon3Text: "Marketing",
        icon4: "fab fa-youtube",
        icon4Text: "Video",
        button: "See Skills",
        btnWidth: "125px",
        href: "/skills"
      }), external__react__default.a.createElement("div", {
        className: "full-bg-div"
      }, external__react__default.a.createElement("div", {
        className: "grid-container container-padding"
      }, external__react__default.a.createElement("div", {
        className: "text-center"
      }, external__react__default.a.createElement("h2", null, "Work History"), external__react__default.a.createElement("p", {
        className: "char-max-width char-max-width--center"
      }, "I've been working in web development for years. Positions I\u2019ve held include eServices specialist, social media manager, and frontend web developer. By joining these experiences together, I\u2019m able to produce a stronger, more cohesive product.")), external__react__default.a.createElement("div", {
        className: "button-wrapper"
      }, external__react__default.a.createElement(link__default.a, {
        href: "/work-history"
      }, external__react__default.a.createElement("a", {
        className: "button button--main"
      }, "View Work History"))))), external__react__default.a.createElement(TwoColRow["a" /* default */], {
        header: "Things I've Built",
        para: "Here you\u2019ll find real world examples of social media marketing, video production, and web development.",
        href: "/projects",
        buttonText: "See Projects",
        image: "../static/index/Things_Ive_built.jpg",
        altText: "PhotoShop mockup"
      }), external__react__default.a.createElement(ContactCta["a" /* default */], {
        title: "Get in touch",
        paragraph: "Have a project in mind? Want me to speak at your event? Require consulting on a current development?",
        button: "send message"
      })));
    }
  }]);

  return standardPage;
}(external__react__default.a.Component);



/***/ })
/******/ ]);