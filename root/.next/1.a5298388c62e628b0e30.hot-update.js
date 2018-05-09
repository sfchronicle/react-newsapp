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

/***/ }),

/***/ "./styles/seed.less":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1525889945492");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=1.a5298388c62e628b0e30.hot-update.js.map