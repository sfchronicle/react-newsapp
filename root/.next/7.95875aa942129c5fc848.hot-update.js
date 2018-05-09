webpackHotUpdate(7,{

/***/ "./components/SocialTop.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_config__ = __webpack_require__("./node_modules/next/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome__ = __webpack_require__("./node_modules/@fortawesome/fontawesome/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fortawesome_react_fontawesome__ = __webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fortawesome_fontawesome_free_brands_faFacebook__ = __webpack_require__("./node_modules/@fortawesome/fontawesome-free-brands/faFacebook.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fortawesome_fontawesome_free_brands_faFacebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__fortawesome_fontawesome_free_brands_faFacebook__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fortawesome_fontawesome_free_brands_faTwitter__ = __webpack_require__("./node_modules/@fortawesome/fontawesome-free-brands/faTwitter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fortawesome_fontawesome_free_brands_faTwitter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__fortawesome_fontawesome_free_brands_faTwitter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fortawesome_fontawesome_free_solid_faEnvelope__ = __webpack_require__("./node_modules/@fortawesome/fontawesome-free-solid/faEnvelope.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fortawesome_fontawesome_free_solid_faEnvelope___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__fortawesome_fontawesome_free_solid_faEnvelope__);
var _jsxFileName = "/Users/ewagstaff01/git/future-test/components/SocialTop.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

 // Holds serverRuntimeConfig and publicRuntimeConfig from next.config.js, nothing else



var _getConfig = __WEBPACK_IMPORTED_MODULE_1_next_config___default()(),
    serverRuntimeConfig = _getConfig.serverRuntimeConfig,
    publicRuntimeConfig = _getConfig.publicRuntimeConfig; // Enable Font Awesome! 
// Just add the three icons here







__WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome__["a" /* default */].library.add(__WEBPACK_IMPORTED_MODULE_4__fortawesome_fontawesome_free_brands_faFacebook___default.a, __WEBPACK_IMPORTED_MODULE_5__fortawesome_fontawesome_free_brands_faTwitter___default.a, __WEBPACK_IMPORTED_MODULE_6__fortawesome_fontawesome_free_solid_faEnvelope___default.a);

var SocialTop =
/*#__PURE__*/
function (_Component) {
  _inherits(SocialTop, _Component);

  function SocialTop() {
    _classCallCheck(this, SocialTop);

    return _possibleConstructorReturn(this, (SocialTop.__proto__ || Object.getPrototypeOf(SocialTop)).apply(this, arguments));
  }

  _createClass(SocialTop, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, this.props.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "__sync_contentCategory",
        content: this.props.paywall,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "shortcut icon",
        href: "https://www.sfchronicle.com/favicon.ico",
        type: "image/x-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "twitter:card",
        content: "summary_large_image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "twitter:title",
        content: this.props.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "twitter:site",
        content: "@sfchronicle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "twitter:url",
        content: this.props.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "twitter:image",
        content: this.props.image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "twitter:description",
        content: this.props.description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:type",
        content: "article",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:title",
        content: this.props.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:site_name",
        content: "The San Francisco Chronicle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:url",
        content: this.props.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:image",
        content: this.props.image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:description",
        content: this.props.description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return SocialTop;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]); // These are the defaults from next.config.js unless they are overidden using props


SocialTop.defaultProps = {
  title: publicRuntimeConfig.PROJECT.TITLE,
  description: publicRuntimeConfig.PROJECT.DESCRIPTION,
  paywall: publicRuntimeConfig.PAYWALL,
  image: "".concat(publicRuntimeConfig.PROJECT.URL).concat(publicRuntimeConfig.PROJECT.SLUG).concat(publicRuntimeConfig.PROJECT.IMAGE),
  url: "".concat(publicRuntimeConfig.PROJECT.URL).concat(publicRuntimeConfig.PROJECT.SLUG)
};
var _default = SocialTop;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(serverRuntimeConfig, "serverRuntimeConfig", "/Users/ewagstaff01/git/future-test/components/SocialTop.js");
  reactHotLoader.register(publicRuntimeConfig, "publicRuntimeConfig", "/Users/ewagstaff01/git/future-test/components/SocialTop.js");
  reactHotLoader.register(SocialTop, "SocialTop", "/Users/ewagstaff01/git/future-test/components/SocialTop.js");
  reactHotLoader.register(_default, "default", "/Users/ewagstaff01/git/future-test/components/SocialTop.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.95875aa942129c5fc848.hot-update.js.map