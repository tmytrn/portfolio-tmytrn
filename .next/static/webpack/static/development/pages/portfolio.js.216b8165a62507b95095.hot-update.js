webpackHotUpdate("static/development/pages/portfolio.js",{

/***/ "./pages/portfolio/index.js":
/*!**********************************!*\
  !*** ./pages/portfolio/index.js ***!
  \**********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Portfolio; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/date */ "./components/date.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
var _jsxFileName = "/Users/tmytrn/portfolio-tmytrn/pages/portfolio/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
};
var thumbnailVariants = {
  initial: {
    scale: 0.9,
    opacity: 0.5
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: transition
  }
};
var __N_SSG = true;
function Portfolio(_ref) {
  var _this = this;

  var allProjectData = _ref.allProjectData;
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
    exit: {
      opacity: 0
    },
    initial: "initial",
    animate: "animate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    portfolioHome: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "mw9 center ph3 ph5-ns",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    "class": "cf",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
    variants: thumbnailVariants,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, allProjectData.map(function (_ref2) {
    var id = _ref2.id,
        date = _ref2.date,
        title = _ref2.title,
        description = _ref2.description,
        role = _ref2.role,
        image = _ref2.image;
    return __jsx("div", {
      className: "fl w-100 w-50-ns pr3 project grow hide-child",
      key: id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/portfolio/[id]",
      as: "/portfolio/".concat(id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 19
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 72
      }
    }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].img, {
      className: "w-100",
      src: image,
      transition: transition,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }
    }))), __jsx("div", {
      className: "absolute left-1 bottom-1 bg-white outline color pa2 child",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 19
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/portfolio/[id]",
      as: "/portfolio/".concat(id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }
    }, __jsx("a", {
      className: "link color underline",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 23
      }
    }, __jsx("h1", {
      className: "f5 f4-ns  mv0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 25
      }
    }, title, __jsx(_components_date__WEBPACK_IMPORTED_MODULE_3__["default"], {
      dateString: date,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 27
      }
    })))), __jsx("h6", {
      className: "mv2 fw4 f6",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }
    }, role)));
  }))))));
}

/***/ })

})
//# sourceMappingURL=portfolio.js.216b8165a62507b95095.hot-update.js.map