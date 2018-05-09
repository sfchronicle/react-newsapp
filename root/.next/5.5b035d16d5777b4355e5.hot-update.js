webpackHotUpdate(5,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__env_vars__ = __webpack_require__("./env-vars.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__env_vars___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__env_vars__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Credits__ = __webpack_require__("./components/Credits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_CreditLine__ = __webpack_require__("./components/CreditLine.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_NavTop__ = __webpack_require__("./components/NavTop.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_SocialTop__ = __webpack_require__("./components/SocialTop.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Post__ = __webpack_require__("./components/Post.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__fortawesome_fontawesome__ = __webpack_require__("./node_modules/@fortawesome/fontawesome/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__fortawesome_react_fontawesome__ = __webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__fortawesome_fontawesome_free_solid__ = __webpack_require__("./node_modules/@fortawesome/fontawesome-free-solid/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_next_config__ = __webpack_require__("./node_modules/next/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_next_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_next_config__);

var _jsxFileName = "/Users/ewagstaff01/git/future-test/pages/index.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Pull in env vars
 // Allow Nextjs linking and dynamic pagination


 // Components






 // Enable Font Awesome! 
// The code below should enable use of anything from this list: https://fontawesome.com/icons?d=gallery&s=solid
// Using this syntax: <FontAwesomeIcon icon="close"/>
// If this is needed in  _document.js or its non-Main children, it will need to be copied there



 // For optimization we should really import the individual solids we use into the library 

/* e.g. 
 * import faClose from '@fortawesome/fontawesome-free-solid/faClose'; 
 * fontawesome.library.add(faClose);
 */
// But for development flexibility, we'll import all solids

__WEBPACK_IMPORTED_MODULE_10__fortawesome_fontawesome__["a" /* default */].library.add(__WEBPACK_IMPORTED_MODULE_12__fortawesome_fontawesome_free_solid__["a" /* default */]); //const fileExists = require('file-exists');
// Holds serverRuntimeConfig and publicRuntimeConfig from next.config.js, nothing else



var _getConfig = __WEBPACK_IMPORTED_MODULE_13_next_config___default()(),
    serverRuntimeConfig = _getConfig.serverRuntimeConfig,
    publicRuntimeConfig = _getConfig.publicRuntimeConfig; // Import example data 


var json;

try {
  json = __webpack_require__("./data/example_data.json");
} catch (err) {} // Silently fail if there's no data to load

/* EVENTS */
// Example event


this.handleClick = function (e) {
  alert("Logging a button press on ".concat(e.currentTarget.id, "!"));
};
/* END EVENTS */
// Export the Main HTML


var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("main", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_SocialTop__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("script", {
        dangerouslySetInnerHTML: {
          __html: "\n          \twindow.HDN=".concat(publicRuntimeConfig.ANALYTICS, ";\n            HDN.dataLayer.href.pageUrlPath = window.location.pathname;\n            HDN.dataLayer.href.pageUrlPathFolders = window.location.pathname.replace(/[A-Za-z0-9-_.]+$/, '');\n            HDN.dataLayer.href.pageUrlHash = window.location.hash;\n            if (window.location.search){\n              HDN.dataLayer.href.pageUrlQueryParams = window.location.search.replace(/^?/, '');\n            }\n          ")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "project-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "topper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "img-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "starter-img",
        src: "".concat(publicRuntimeConfig.ASSET_PATH).concat(__WEBPACK_IMPORTED_MODULE_2__env_vars___default.a.STATIC_URL, "react.gif"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_NavTop__["a" /* default */], {
        enableStick: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "intro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "A brave new template"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, "Words can be like X-rays if you use them properly \u2014 they'll go through anything."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "byline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, "By ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "https://www.sfchronicle.com/2018/in-depth-projects/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, "the Interactive Team")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "dateline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, "January 1, 1970"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "article",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, "The Savage nodded, frowning. \"You got rid of them. Yes, that's just like you. Getting rid of everything unpleasant instead of learning to put up with it. Whether 'tis better in the mind to suffer the slings and arrows or outrageous fortune, or to take arms against a sea of troubles and by opposing end them... But you don't do either. Neither suffer nor oppose. You just abolish the slings and arrows. It's too easy."), "true" === "true" && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, "This text was rendered based on a condition!"),  true ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, "This text will render if the condition is true!") : React.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, "This text will render if the condition is false!"), [{
        fruit: "apple"
      }, {
        fruit: "orange"
      }].map(function (item) {
        console.log("Logging item!", item);
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
          key: item.fruit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          }
        }, item.fruit);
      }), json && json.records.map(function (data) {
        console.log("Logging data!", data);
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
          key: data.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          }
        }, data.fields.Name);
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        id: "example-button",
        onClick: function onClick(e) {
          return _this.handleClick(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, "Press me!")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
        prefetch: true,
        href: "".concat(publicRuntimeConfig.ASSET_PATH, "/about"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, "About this project")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, this.props.posts.length > 0 && this.props.posts.map(function (post) {
        console.log(post);
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Post__["a" /* default */], _extends({}, post, {
          key: post.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          }
        }));
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "credits",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, "Credits"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Credits__["a" /* default */], {
        type: "Development",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_CreditLine__["a" /* default */], {
        name: "Lucio Villa",
        email: "LVilla@sfchronicle.com",
        twitter: "luciovilla",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_CreditLine__["a" /* default */], {
        name: "Emma O'Neill",
        email: "EONeill@sfchronicle.com",
        twitter: "emmaruthoneill",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_CreditLine__["a" /* default */], {
        name: "Evan Wagstaff",
        email: "Evan.Wagstaff@sfchronicle.com",
        twitter: "evanwagstaff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      })))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var posts;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Fetch list of posts to create links to pages 
                posts = []; // You can safely erase the 2 lines below if not linking to dynamic pages

                posts = __webpack_require__("./data/example_data.json");
                posts = posts.records;
                console.log(posts);
                return _context.abrupt("return", {
                  posts: posts
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(serverRuntimeConfig, "serverRuntimeConfig", "/Users/ewagstaff01/git/future-test/pages/index.js");
  reactHotLoader.register(publicRuntimeConfig, "publicRuntimeConfig", "/Users/ewagstaff01/git/future-test/pages/index.js");
  reactHotLoader.register(json, "json", "/Users/ewagstaff01/git/future-test/pages/index.js");
  reactHotLoader.register(_default, "default", "/Users/ewagstaff01/git/future-test/pages/index.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.5b035d16d5777b4355e5.hot-update.js.map