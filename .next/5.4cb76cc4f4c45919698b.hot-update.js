webpackHotUpdate(5,{

/***/ "./layouts/StandardLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss__ = __webpack_require__("./styles.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partials_Nav__ = __webpack_require__("./partials/Nav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__partials_MobileNav__ = __webpack_require__("./partials/MobileNav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__partials_Footer__ = __webpack_require__("./partials/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
var _jsxFileName = "C:\\Users\\Ricky\\Downloads\\nextJSportfolio\\layouts\\StandardLayout.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

 //import Meta from '../partials/Meta'







var Layout =
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

      var foundation = __webpack_require__("./node_modules/foundation-sites/dist/js/foundation.js");

      __WEBPACK_IMPORTED_MODULE_5_jquery___default()(document).foundation();
      window.addEventListener('resize', function () {
        if (window.innerWidth > 352 && document.getElementById("mobileNav").classList.contains("is-shown") == true) {
          _this2.resetMobileNav();
        }
      });
    }
  }, {
    key: "render",
    value: function render(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: this.props.fullPageExtend === "true" ? "full-page-extend" : "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__partials_Nav__["a" /* default */], {
        navIsStatic: this.props.navIsStatic,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__partials_MobileNav__["a" /* default */], {
        navIsStatic: this.props.navIsStatic,
        navMobile: this.state.isMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), this.props.children, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__partials_Footer__["a" /* default */], {
        removeCTApadding: this.props.removeCTApadding,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }));
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=5.4cb76cc4f4c45919698b.hot-update.js.map