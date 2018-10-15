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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
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
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return standardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_StandardLayout__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__partials_TwoColRow__ = __webpack_require__(8);
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", null, "Ricky Garcia | Work History"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "description",
        content: "Ricky Garcia has worked for Micron CPG, Idaho Central Credit Union, and more."
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__layouts_StandardLayout__["a" /* default */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__partials_GeneralHero__["a" /* default */], {
        title: "Work History",
        subtitle: "Learn about my professional background",
        BgClass: "hero__work",
        cta: "Work with me"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__partials_TwoColRow__["a" /* default */], {
        background: "bg-white",
        header: "Micron Consumer Products Group",
        para: "RS&I hired me to handle their frontend web development and web design needs.",
        accomplishments: "Produced and designed frontend assets for Micron Consumer Products Group domestic, regional, and international sites. Identify site(s) issues and address with workable solutions with strict time constraints. Communicated across multiple departments and time zones to produce desired solutions. Operated Content Management Systems and eCommerce tools for site(s) production. \r ",
        buttonText: "Visit Crucial",
        externalSite: "true",
        href: "https://www.crucial.com/",
        image: "../static/work-history/crucial.jpg",
        altText: "Crucial Homepage"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__partials_TwoColRow__["a" /* default */], {
        textOrder: "large-order-1",
        header: "RS&I",
        para: "RS&I hired me to handle their frontend web development and web design needs.",
        accomplishments: "Website redesign and architect restructure using HTML, SCSS, jQuery, and ASP.net\r Landing page creation and form data collection single page application using HTML, SCSS,\r jQuery, AJAX, and MongoDB\r Email template development for Mailchimp email campaigns created with HTML, CSS, and MailChimp\u2019s templating language.\r Maintained HubSpot Marketing portal.",
        buttonText: "Visit RS&I",
        externalSite: "true",
        href: "https://blog.rsiinc.com/get-to-know-rsi.-were-here-to-help-small-businesses-succeed",
        image: "../static/work-history/rsi_blog.jpg",
        altText: "RS&I Blog"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__partials_TwoColRow__["a" /* default */], {
        background: "bg-white",
        header: "Stuart's Media Group",
        para: "My role at Stuart\u2019s Media Group was to drive social awareness which would lead to an increase in business. Targeted ads, organic growth, photography, graphic design, and video production were all used to achieve this goal. I also provided WordPress Website Design for clients.",
        accomplishments: "Managed over 20 social media accounts\r Created two WordPress sites with custom HTML and CSS,\r Published over 1,500 social media posts.",
        buttonText: "Visit Stuart's",
        externalSite: "true",
        href: "https://www.stuartsmedia.com/",
        image: "../static/work-history/stuarts.jpg",
        altText: "Stuart's Media Group Homepage"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__partials_TwoColRow__["a" /* default */], {
        textOrder: "large-order-1",
        header: "Idaho Central Credit Union",
        para: "Provided Support for online services including, website navigation, online profile management, mobile banking, and electronic Bill Pay. Other responsibilities included email correspondence live chat assistance, and phone support.",
        accomplishments: "Provided webinar training on Microsoft Word, Microsoft Excel, Microsoft PowerPoint, Microsoft Outlook. Redesigned the internal Frequently Asked Questions manual. \r Created custom email templates that reduced responses times.\r ",
        buttonText: "Visit ICCU",
        externalSite: "true",
        href: "https://www.iccu.com/",
        image: "../static/work-history/iccu.jpg",
        altText: "Stuart's Media Group Homepage"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__partials_ContactCta__["a" /* default */], {
        title: "What Can I Build For Your Company?",
        paragraph: "Need a new website? How about sprucing up your current site? Need to get the word out on your amazing product? I can help you out.",
        button: "Chat With Me"
      })));
    }
  }]);

  return standardPage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ })
/******/ ]);