webpackHotUpdate(7,{

/***/ "./components/NavTop.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_react_fontawesome__ = __webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_waypoint__ = __webpack_require__("./node_modules/react-waypoint/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_config__ = __webpack_require__("./node_modules/next/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_config__);
var _jsxFileName = "/Users/ewagstaff01/git/future-test/components/NavTop.js";

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



var _getConfig = __WEBPACK_IMPORTED_MODULE_3_next_config___default()(),
    serverRuntimeConfig = _getConfig.serverRuntimeConfig,
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var NavTop =
/*#__PURE__*/
function (_Component) {
  _inherits(NavTop, _Component);

  function NavTop(props) {
    var _this;

    _classCallCheck(this, NavTop);

    _this = _possibleConstructorReturn(this, (NavTop.__proto__ || Object.getPrototypeOf(NavTop)).call(this, props));
    _this.state = {
      fixed: ""
    };
    return _this;
  }

  _createClass(NavTop, [{
    key: "componentDidMount",
    value: function componentDidMount() {// Initial events
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {// Destroy events
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // Handy var to hold config 
      var project = publicRuntimeConfig.PROJECT; // Handle waypoint crossings

      this.handleWaypointLeave = function (_ref) {
        var previousPosition = _ref.previousPosition,
            currentPosition = _ref.currentPosition,
            event = _ref.event;

        // Stick the nav
        if (currentPosition == "above") {
          _this2.setState({
            fixed: "fixed"
          });
        }
      };

      this.handleWaypointEnter = function (_ref2) {
        var previousPosition = _ref2.previousPosition,
            currentPosition = _ref2.currentPosition,
            event = _ref2.event;

        // Unstick the nav	
        if (currentPosition == "inside") {
          _this2.setState({
            fixed: ""
          });
        }
      }; // Enable the social popup


      this.handleFacebookClick = function (e) {
        e.preventDefault();
        window.open("https://www.facebook.com/sharer/sharer.php?u=".concat(project.URL, "%2F").concat(project.YEAR, "%2F").concat(project.SLUG), 'facebook-share-dialog', 'width=626,height=436');
        return false;
      };

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, this.props.enableStick && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_waypoint__["a" /* default */], {
        onEnter: this.handleWaypointEnter,
        onLeave: this.handleWaypointLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
        className: this.state.fixed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://www.sfchronicle.com",
        target: "_blank",
        rel: "noopener",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "logo-link link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "desk-logo",
        src: "https://projects.sfchronicle.com/shared/logos/sfc_logo_black.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mobile-logo",
        src: "https://projects.sfchronicle.com/shared/logos/sfletter_c_black.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "specialhead-top",
        href: "https://www.sfchronicle.com/special-reports/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, "Special Report")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "link social email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        id: "mail-icon",
        title: "Share via email",
        href: "mailto:?subject=".concat(project.TITLE, "&body=").concat(project.DESCRIPTION, "%0A%0A").concat(project.URL, "%2F").concat(project.YEAR, "%2F").concat(project.SLUG),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__fortawesome_react_fontawesome__["a" /* default */], {
        icon: "envelope",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "link social facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        id: "facebook-icon",
        title: "Share on Facebook",
        href: "#",
        target: "_blank",
        rel: "noopener",
        onClick: this.handleFacebookClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__fortawesome_react_fontawesome__["a" /* default */], {
        icon: ["fab", "facebook"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "link social twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        id: "twitter-icon",
        title: "Share on Twitter",
        href: "https://twitter.com/intent/tweet?url=".concat(project.URL, "%2F").concat(project.YEAR, "%2F").concat(project.SLUG, "&text=").concat(project.TWITTER_TEXT, "&hashtags=").concat(project.TWITTER_HASHTAGS),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__fortawesome_react_fontawesome__["a" /* default */], {
        icon: ["fab", "twitter"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return NavTop;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]); // Disable the sticky nav by default


NavTop.defaultProps = {
  enableStick: false
};
var _default = NavTop;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(serverRuntimeConfig, "serverRuntimeConfig", "/Users/ewagstaff01/git/future-test/components/NavTop.js");
  reactHotLoader.register(publicRuntimeConfig, "publicRuntimeConfig", "/Users/ewagstaff01/git/future-test/components/NavTop.js");
  reactHotLoader.register(NavTop, "NavTop", "/Users/ewagstaff01/git/future-test/components/NavTop.js");
  reactHotLoader.register(_default, "default", "/Users/ewagstaff01/git/future-test/components/NavTop.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.4a415520aecd970bf06f.hot-update.js.map