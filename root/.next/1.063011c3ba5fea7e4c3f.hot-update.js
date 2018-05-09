webpackHotUpdate(1,{

/***/ "./env-vars.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

// Set all vars that need to be accessed based on environment here
var envConfig = {
  production: {
    STATIC_URL: "/static/"
  },
  testing: {
    STATIC_URL: "/static/"
  },
  development: {
    STATIC_URL: "/static/"
  }
};
module.exports = envConfig["development"];
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(envConfig, "envConfig", "/Users/ewagstaff01/git/future-test/env-vars.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=1.063011c3ba5fea7e4c3f.hot-update.js.map