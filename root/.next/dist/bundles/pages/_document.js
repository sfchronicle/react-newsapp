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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/ewagstaff01/git/future-test/components/Footer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Footer =
/*#__PURE__*/
function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("footer", {
        className: "nav-bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "footer-content clearfix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "logo",
        w: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "//www.sfchronicle.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "//www.sfchronicle.com/img/modules/sitefooter/footer_logo.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "hcsf_links clearfix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "hcsf_about top-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, "About"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "hcsf_linklist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "//www.hearst.com/newspapers/san-francisco-chronicle.php",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, "Our Company")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "ad-choice",
        href: "//www.aboutads.info/choices/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "ad-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), " Ad Choices ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "//www.sfchronicle.com/hr/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, "Careers")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "//www.sfchronicle.com/terms_of_use/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, "Terms of Use")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "//marketing.sfgate.com",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, "Advertising")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "//www.sfchronicle.com/privacy_policy",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "Privacy Policy")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "//www.sfchronicle.com/privacy_policy#your_rights",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "Your Privacy Rights")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "//www.sfchronicle.com/privacy_policy/#caprivacyrights",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, "Your California Privacy Rights"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "hcsf_links clearfix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "hcsf_contact top-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "Contact"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "hcsf_linklist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "//www.sfchronicle.com/customer_service",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "Customer Service")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "//www.sfchronicle.com/faq",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "Frequently Asked Questions")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "//www.sfchronicle.com/newsroom_contacts",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "Newsroom Contacts"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "hcsf_links clearfix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "hcsf_connect  top-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "Connect"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "hcsf_linklist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "fb-link",
        href: "https://www.facebook.com/sanfranciscochronicle",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-facebook",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "twtr-link",
        href: "https://twitter.com/sfchronicle",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-twitter",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "li-link",
        href: "https://www.linkedin.com/company/san-francisco-chronicle",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-linkedin",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "insta-link",
        href: "https://www.instagram.com/sfchronicle/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-instagram",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "hcsf_links clearfix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "hcsf_contact top-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "Services"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "hcsf_linklist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "//www.sfchronicle.com/profile",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "Profile")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "//www.sfchronicle.com/account",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "Subscriber Services")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "//www.sfchronicle.com/e-edition",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "e-edition")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "//www.sfchronicle.com/appdownload",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, "App")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "//www.sfchronicle.com/archive",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, "Archives")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "//www.sfchronicle.com/membership",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, "Membership")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "//www.sfchronicle.com/store",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "Store")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "//www.sfchronicle.com/subscribe",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "Subscription Offers"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "copyright-wrap clearfix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "hearst-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "//www.sfchronicle.com/img/modules/sitefooter/hst_copy_logo.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "copyright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "\xA9 ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "document.write(new Date().getFullYear());"), " Hearst Corporation")))));
    }
  }]);

  return Footer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./pages/_document.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyDocument; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document__ = __webpack_require__("next/document");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_document__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_seed_less__ = __webpack_require__("./styles/seed.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_seed_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_seed_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Footer__ = __webpack_require__("./components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_config__ = __webpack_require__("next/config");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_config__);
var _jsxFileName = "/Users/ewagstaff01/git/future-test/pages/_document.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ./pages/_document.js
// Custom master doc that overrides the default
// Next.js Boilerplate

 // Import styles -- this file imports everything

 // Components

 // Holds serverRuntimeConfig and publicRuntimeConfig from next.config.js, nothing else



var _getConfig = __WEBPACK_IMPORTED_MODULE_4_next_config___default()(),
    serverRuntimeConfig = _getConfig.serverRuntimeConfig,
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var MyDocument =
/*#__PURE__*/
function (_Document) {
  _inherits(MyDocument, _Document);

  function MyDocument() {
    _classCallCheck(this, MyDocument);

    return _possibleConstructorReturn(this, (MyDocument.__proto__ || Object.getPrototypeOf(MyDocument)).apply(this, arguments));
  }

  _createClass(MyDocument, [{
    key: "render",
    value: function render() {
      var isResponsiveBody = publicRuntimeConfig.EMBEDDED ? "responsive-body" : "";
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("html", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["Head"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "".concat(publicRuntimeConfig.ASSET_PATH, "/_next/static/style.css"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), publicRuntimeConfig.EMBEDDED ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
        src: "https://projects.sfchronicle.com/shared/js/responsive-child.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
        type: "text/javascript",
        src: "https://treg.hearstnp.com/treg.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
        dangerouslySetInnerHTML: {
          __html: "\n                (function(e) {\n                  var t = '//nexus.ensighten.com/hearst/news/Bootstrap.js';\n                  if (e.cookie.indexOf(\"nsghtn\") > -1) {\n                    if(e.cookie.indexOf(\"nsghtn=test-dev\") > -1) {\n                    console.log(\"Ensighten :: Test-Dev\"); t = \"//nexus-test.ensighten.com/hearst/news-dev/Bootstrap.js\";\n                    } else if(e.cookie.indexOf(\"nsghtn=test\") > -1) {\n                    console.log(\"Ensighten :: Test\"); t = \"//nexus-test.ensighten.com/hearst/news/Bootstrap.js\";\n                    } else if(e.cookie.indexOf(\"nsghtn=dev\") > -1) {\n                    console.log(\"Ensighten :: Dev\"); t = \"//nexus.ensighten.com/hearst/news-dev/Bootstrap.js\";\n                    }\n                  }\n                  console.log(e.cookie.indexOf(\"nsghtn=dev\"));\n                  e.write(\"<scr\"+\"ipt src='\"+e.location.protocol+t+\"'></scr\"+\"ipt>\");\n                })(document);\n             "
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("body", {
        is: isResponsiveBody,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["Main"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["NextScript"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      })));
    }
  }]);

  return MyDocument;
}(__WEBPACK_IMPORTED_MODULE_1_next_document___default.a);



/***/ }),

/***/ "./styles/seed.less":
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_document.js");


/***/ }),

/***/ "next/config":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/document":
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=_document.js.map