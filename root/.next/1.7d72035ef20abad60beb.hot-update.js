webpackHotUpdate(1,{

/***/ "./pages/_document.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyDocument; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document__ = __webpack_require__("./node_modules/next/document.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_document__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_seed_less__ = __webpack_require__("./styles/seed.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_seed_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_seed_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Footer__ = __webpack_require__("./components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_config__ = __webpack_require__("./node_modules/next/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_config__);
var _jsxFileName = "/Users/ewagstaff01/git/future-test/pages/_document.js";

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
          __html: "\n                (function(e) {\n                  var t = '//nexus.ensighten.com/hearst/news/Bootstrap.js';\n                  if (e.cookie.indexOf(\"nsghtn\") > -1) {\n                    if(e.cookie.indexOf(\"nsghtn=test-dev\") > -1) {\n                    console.log(\"Ensighten :: Test-Dev\"); t = \"//nexus-test.ensighten.com/hearst/news-dev/Bootstrap.js\";\n                    } else if(e.cookie.indexOf(\"nsghtn=test\") > -1) {\n                    console.log(\"Ensighten :: Test\"); t = \"//nexus-test.ensighten.com/hearst/news/Bootstrap.js\";\n                    } else if(e.cookie.indexOf(\"nsghtn=dev\") > -1) {\n                    console.log(\"Ensighten :: Dev\"); t = \"//nexus.ensighten.com/hearst/news-dev/Bootstrap.js\";\n                    }\n                  }\n                  console.log(e.cookie);\n                  e.write(\"<scr\"+\"ipt src='\"+e.location.protocol+t+\"'></scr\"+\"ipt>\");\n                })(document);\n             "
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
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return MyDocument;
}(__WEBPACK_IMPORTED_MODULE_1_next_document___default.a);


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(serverRuntimeConfig, "serverRuntimeConfig", "/Users/ewagstaff01/git/future-test/pages/_document.js");
  reactHotLoader.register(publicRuntimeConfig, "publicRuntimeConfig", "/Users/ewagstaff01/git/future-test/pages/_document.js");
  reactHotLoader.register(MyDocument, "MyDocument", "/Users/ewagstaff01/git/future-test/pages/_document.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_document")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=1.7d72035ef20abad60beb.hot-update.js.map