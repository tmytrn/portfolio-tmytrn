webpackHotUpdate("static/development/pages/portfolio/AirbnbJournals.js",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: siteTitle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteTitle", function() { return siteTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.module.css */ "./components/layout.module.css");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/tmytrn/portfolio-tmytrn/components/layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var name = 'Tommy Tran';
var siteTitle = 'Tommy Tran';
function Layout(_ref) {
  var children = _ref.children,
      home = _ref.home,
      portfolioHome = _ref.portfolioHome,
      portfolioProject = _ref.portfolioProject;
  return __jsx("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, siteTitle), __jsx("link", {
    rel: "icon",
    href: "/favicon.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:title",
    content: "Tommy Tran",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "description",
    content: "Tommy Tran is a digital designer and developer based in Los Angeles. He holds a B.S. in Computer Science from SFSU. He believes that great design tells a story, and should feel effortless.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:url",
    content: "https://tmytrn.com",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "https://tmytrn.com/images/tommy-tran-@tmytrn-website-portrait-2020-by-benjamin-siordia.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:description",
    content: "Tommy Tran is a digital designer and developer based in Los Angeles. He holds a B.S. in Computer Science from SFSU. He believes that great design tells a story, and should feel effortless.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:title",
    content: "Tommy Tran",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:site",
    content: "@tmytrn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:image",
    content: "https://tmytrn.com/images/tommy-tran-@tmytrn-website-portrait-2020-by-benjamin-siordia.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx("script", {
    async: true,
    src: "https://www.google-analytics.com/analytics.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx("script", {
    dangerouslySetInnerHTML: {
      __html: "\n            window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;\n            ga('create', 'UA-165303040-1', 'auto');\n            ga('send', 'pageview');\n              "
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })), __jsx("header", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, home ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3976329729",
    __self: this
  }, "body{background-color:rgb(190,191,210);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90bXl0cm4vcG9ydGZvbGlvLXRteXRybi9jb21wb25lbnRzL2xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ2UsQUFFc0Qsa0NBQ3ZDIiwiZmlsZSI6Ii9Vc2Vycy90bXl0cm4vcG9ydGZvbGlvLXRteXRybi9jb21wb25lbnRzL2xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9sYXlvdXQubW9kdWxlLmNzcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgbmFtZSA9ICdUb21teSBUcmFuJ1xuZXhwb3J0IGNvbnN0IHNpdGVUaXRsZSA9ICdUb21teSBUcmFuJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiwgaG9tZSwgcG9ydGZvbGlvSG9tZSwgcG9ydGZvbGlvUHJvamVjdCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57c2l0ZVRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJUb21teSBUcmFuXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRvbW15IFRyYW4gaXMgYSBkaWdpdGFsIGRlc2lnbmVyIGFuZCBkZXZlbG9wZXIgYmFzZWQgaW4gTG9zIEFuZ2VsZXMuXG4gICAgSGUgaG9sZHMgYSBCLlMuIGluIENvbXB1dGVyIFNjaWVuY2UgZnJvbSBTRlNVLiBIZSBiZWxpZXZlcyB0aGF0IGdyZWF0XG4gICAgZGVzaWduIHRlbGxzIGEgc3RvcnksIGFuZCBzaG91bGQgZmVlbCBlZmZvcnRsZXNzLlwiLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly90bXl0cm4uY29tXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL3RteXRybi5jb20vaW1hZ2VzL3RvbW15LXRyYW4tQHRteXRybi13ZWJzaXRlLXBvcnRyYWl0LTIwMjAtYnktYmVuamFtaW4tc2lvcmRpYS5qcGdcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRvbW15IFRyYW4gaXMgYSBkaWdpdGFsIGRlc2lnbmVyIGFuZCBkZXZlbG9wZXIgYmFzZWQgaW4gTG9zIEFuZ2VsZXMuXG4gICAgSGUgaG9sZHMgYSBCLlMuIGluIENvbXB1dGVyIFNjaWVuY2UgZnJvbSBTRlNVLiBIZSBiZWxpZXZlcyB0aGF0IGdyZWF0XG4gICAgZGVzaWduIHRlbGxzIGEgc3RvcnksIGFuZCBzaG91bGQgZmVlbCBlZmZvcnRsZXNzLlwiLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9XCJUb21teSBUcmFuXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6c2l0ZVwiIGNvbnRlbnQ9XCJAdG15dHJuXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly90bXl0cm4uY29tL2ltYWdlcy90b21teS10cmFuLUB0bXl0cm4td2Vic2l0ZS1wb3J0cmFpdC0yMDIwLWJ5LWJlbmphbWluLXNpb3JkaWEuanBnXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS90YWNoeW9uc0A0LjEyLjAvY3NzL3RhY2h5b25zLm1pbi5jc3NcIiAvPlxuICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz0naHR0cHM6Ly93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vYW5hbHl0aWNzLmpzJz48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICBfX2h0bWw6IGBcbiAgICAgICAgICAgIHdpbmRvdy5nYT13aW5kb3cuZ2F8fGZ1bmN0aW9uKCl7KGdhLnE9Z2EucXx8W10pLnB1c2goYXJndW1lbnRzKX07Z2EubD0rbmV3IERhdGU7XG4gICAgICAgICAgICBnYSgnY3JlYXRlJywgJ1VBLTE2NTMwMzA0MC0xJywgJ2F1dG8nKTtcbiAgICAgICAgICAgIGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XG4gICAgICAgICAgICAgIGAsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgeyhob21lKSA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAgICAgIHtgYm9keSB7XG4gICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDE5MSwgMjEwKTtcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICAgICAgfTwvc3R5bGU+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgeyhwb3J0Zm9saW9Ib21lKSA/IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdzkgY2VudGVyIHBoMyBwaDUtbnNcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImY1IGY0LW5zIHRsXCI+dG15dHJuX3BvcnRmb2xpbzwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgICAgICB7YGJvZHkge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmVmYTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8PjwvPlxuICAgICAgICAgICl9XG4gICAgICAgIHsocG9ydGZvbGlvUHJvamVjdCkgPyAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXc5IGNlbnRlciBwaDIgcGg0LW5zIGFic29sdXRlXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9ydGZvbGlvXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGluayB1bmRlcmxpbmUgY29sb3JcIj5cbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmNSBmNC1ucyB0bFwiPlRvbW15IFRyYW7igJRQb3J0Zm9saW88L2gxPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICAgICAge2Bib2R5IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9YFxuICAgICAgICAgICAgICB9PC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApIDogKFxuICAgICAgICAgICAgPD48Lz5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cbiAgICA8L2RpdiA+XG4gIClcbn0iXX0= */\n/*@ sourceURL=/Users/tmytrn/portfolio-tmytrn/components/layout.js */")) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null), portfolioHome ? __jsx("div", {
    className: "jsx-417279114",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-417279114" + " " + "mw9 center ph3 ph5-ns",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "jsx-417279114" + " " + "f5 f4-ns tl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, "tmytrn_portfolio")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "417279114",
    __self: this
  }, "body{background-color:#fffefa;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90bXl0cm4vcG9ydGZvbGlvLXRteXRybi9jb21wb25lbnRzL2xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RGUsQUFFNEMseUJBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy90bXl0cm4vcG9ydGZvbGlvLXRteXRybi9jb21wb25lbnRzL2xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9sYXlvdXQubW9kdWxlLmNzcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgbmFtZSA9ICdUb21teSBUcmFuJ1xuZXhwb3J0IGNvbnN0IHNpdGVUaXRsZSA9ICdUb21teSBUcmFuJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiwgaG9tZSwgcG9ydGZvbGlvSG9tZSwgcG9ydGZvbGlvUHJvamVjdCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57c2l0ZVRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJUb21teSBUcmFuXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRvbW15IFRyYW4gaXMgYSBkaWdpdGFsIGRlc2lnbmVyIGFuZCBkZXZlbG9wZXIgYmFzZWQgaW4gTG9zIEFuZ2VsZXMuXG4gICAgSGUgaG9sZHMgYSBCLlMuIGluIENvbXB1dGVyIFNjaWVuY2UgZnJvbSBTRlNVLiBIZSBiZWxpZXZlcyB0aGF0IGdyZWF0XG4gICAgZGVzaWduIHRlbGxzIGEgc3RvcnksIGFuZCBzaG91bGQgZmVlbCBlZmZvcnRsZXNzLlwiLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly90bXl0cm4uY29tXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL3RteXRybi5jb20vaW1hZ2VzL3RvbW15LXRyYW4tQHRteXRybi13ZWJzaXRlLXBvcnRyYWl0LTIwMjAtYnktYmVuamFtaW4tc2lvcmRpYS5qcGdcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRvbW15IFRyYW4gaXMgYSBkaWdpdGFsIGRlc2lnbmVyIGFuZCBkZXZlbG9wZXIgYmFzZWQgaW4gTG9zIEFuZ2VsZXMuXG4gICAgSGUgaG9sZHMgYSBCLlMuIGluIENvbXB1dGVyIFNjaWVuY2UgZnJvbSBTRlNVLiBIZSBiZWxpZXZlcyB0aGF0IGdyZWF0XG4gICAgZGVzaWduIHRlbGxzIGEgc3RvcnksIGFuZCBzaG91bGQgZmVlbCBlZmZvcnRsZXNzLlwiLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9XCJUb21teSBUcmFuXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6c2l0ZVwiIGNvbnRlbnQ9XCJAdG15dHJuXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly90bXl0cm4uY29tL2ltYWdlcy90b21teS10cmFuLUB0bXl0cm4td2Vic2l0ZS1wb3J0cmFpdC0yMDIwLWJ5LWJlbmphbWluLXNpb3JkaWEuanBnXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS90YWNoeW9uc0A0LjEyLjAvY3NzL3RhY2h5b25zLm1pbi5jc3NcIiAvPlxuICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz0naHR0cHM6Ly93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vYW5hbHl0aWNzLmpzJz48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICBfX2h0bWw6IGBcbiAgICAgICAgICAgIHdpbmRvdy5nYT13aW5kb3cuZ2F8fGZ1bmN0aW9uKCl7KGdhLnE9Z2EucXx8W10pLnB1c2goYXJndW1lbnRzKX07Z2EubD0rbmV3IERhdGU7XG4gICAgICAgICAgICBnYSgnY3JlYXRlJywgJ1VBLTE2NTMwMzA0MC0xJywgJ2F1dG8nKTtcbiAgICAgICAgICAgIGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XG4gICAgICAgICAgICAgIGAsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgeyhob21lKSA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAgICAgIHtgYm9keSB7XG4gICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDE5MSwgMjEwKTtcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICAgICAgfTwvc3R5bGU+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgeyhwb3J0Zm9saW9Ib21lKSA/IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdzkgY2VudGVyIHBoMyBwaDUtbnNcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImY1IGY0LW5zIHRsXCI+dG15dHJuX3BvcnRmb2xpbzwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgICAgICB7YGJvZHkge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmVmYTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8PjwvPlxuICAgICAgICAgICl9XG4gICAgICAgIHsocG9ydGZvbGlvUHJvamVjdCkgPyAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXc5IGNlbnRlciBwaDIgcGg0LW5zIGFic29sdXRlXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9ydGZvbGlvXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGluayB1bmRlcmxpbmUgY29sb3JcIj5cbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmNSBmNC1ucyB0bFwiPlRvbW15IFRyYW7igJRQb3J0Zm9saW88L2gxPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICAgICAge2Bib2R5IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9YFxuICAgICAgICAgICAgICB9PC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApIDogKFxuICAgICAgICAgICAgPD48Lz5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cbiAgICA8L2RpdiA+XG4gIClcbn0iXX0= */\n/*@ sourceURL=/Users/tmytrn/portfolio-tmytrn/components/layout.js */")) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null), portfolioProject ? __jsx("div", {
    className: "jsx-2722639253",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-2722639253" + " " + "mw9 center ph2 ph4-ns absolute",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/portfolio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "jsx-2722639253" + " " + "link underline color",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "jsx-2722639253" + " " + "f5 f4-ns tl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 19
    }
  }, "Tommy Tran\u2014Portfolio")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2722639253",
    __self: this
  }, "body{background-color:#f4f4f4;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90bXl0cm4vcG9ydGZvbGlvLXRteXRybi9jb21wb25lbnRzL2xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RWUsQUFFd0MseUJBRTNCIiwiZmlsZSI6Ii9Vc2Vycy90bXl0cm4vcG9ydGZvbGlvLXRteXRybi9jb21wb25lbnRzL2xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9sYXlvdXQubW9kdWxlLmNzcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgbmFtZSA9ICdUb21teSBUcmFuJ1xuZXhwb3J0IGNvbnN0IHNpdGVUaXRsZSA9ICdUb21teSBUcmFuJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiwgaG9tZSwgcG9ydGZvbGlvSG9tZSwgcG9ydGZvbGlvUHJvamVjdCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57c2l0ZVRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJUb21teSBUcmFuXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRvbW15IFRyYW4gaXMgYSBkaWdpdGFsIGRlc2lnbmVyIGFuZCBkZXZlbG9wZXIgYmFzZWQgaW4gTG9zIEFuZ2VsZXMuXG4gICAgSGUgaG9sZHMgYSBCLlMuIGluIENvbXB1dGVyIFNjaWVuY2UgZnJvbSBTRlNVLiBIZSBiZWxpZXZlcyB0aGF0IGdyZWF0XG4gICAgZGVzaWduIHRlbGxzIGEgc3RvcnksIGFuZCBzaG91bGQgZmVlbCBlZmZvcnRsZXNzLlwiLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly90bXl0cm4uY29tXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL3RteXRybi5jb20vaW1hZ2VzL3RvbW15LXRyYW4tQHRteXRybi13ZWJzaXRlLXBvcnRyYWl0LTIwMjAtYnktYmVuamFtaW4tc2lvcmRpYS5qcGdcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRvbW15IFRyYW4gaXMgYSBkaWdpdGFsIGRlc2lnbmVyIGFuZCBkZXZlbG9wZXIgYmFzZWQgaW4gTG9zIEFuZ2VsZXMuXG4gICAgSGUgaG9sZHMgYSBCLlMuIGluIENvbXB1dGVyIFNjaWVuY2UgZnJvbSBTRlNVLiBIZSBiZWxpZXZlcyB0aGF0IGdyZWF0XG4gICAgZGVzaWduIHRlbGxzIGEgc3RvcnksIGFuZCBzaG91bGQgZmVlbCBlZmZvcnRsZXNzLlwiLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9XCJUb21teSBUcmFuXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6c2l0ZVwiIGNvbnRlbnQ9XCJAdG15dHJuXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly90bXl0cm4uY29tL2ltYWdlcy90b21teS10cmFuLUB0bXl0cm4td2Vic2l0ZS1wb3J0cmFpdC0yMDIwLWJ5LWJlbmphbWluLXNpb3JkaWEuanBnXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS90YWNoeW9uc0A0LjEyLjAvY3NzL3RhY2h5b25zLm1pbi5jc3NcIiAvPlxuICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz0naHR0cHM6Ly93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vYW5hbHl0aWNzLmpzJz48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICBfX2h0bWw6IGBcbiAgICAgICAgICAgIHdpbmRvdy5nYT13aW5kb3cuZ2F8fGZ1bmN0aW9uKCl7KGdhLnE9Z2EucXx8W10pLnB1c2goYXJndW1lbnRzKX07Z2EubD0rbmV3IERhdGU7XG4gICAgICAgICAgICBnYSgnY3JlYXRlJywgJ1VBLTE2NTMwMzA0MC0xJywgJ2F1dG8nKTtcbiAgICAgICAgICAgIGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XG4gICAgICAgICAgICAgIGAsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgeyhob21lKSA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAgICAgIHtgYm9keSB7XG4gICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDE5MSwgMjEwKTtcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICAgICAgfTwvc3R5bGU+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgeyhwb3J0Zm9saW9Ib21lKSA/IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdzkgY2VudGVyIHBoMyBwaDUtbnNcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImY1IGY0LW5zIHRsXCI+dG15dHJuX3BvcnRmb2xpbzwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgICAgICB7YGJvZHkge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmVmYTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8PjwvPlxuICAgICAgICAgICl9XG4gICAgICAgIHsocG9ydGZvbGlvUHJvamVjdCkgPyAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXc5IGNlbnRlciBwaDIgcGg0LW5zIGFic29sdXRlXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9ydGZvbGlvXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGluayB1bmRlcmxpbmUgY29sb3JcIj5cbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmNSBmNC1ucyB0bFwiPlRvbW15IFRyYW7igJRQb3J0Zm9saW88L2gxPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICAgICAge2Bib2R5IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9YFxuICAgICAgICAgICAgICB9PC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApIDogKFxuICAgICAgICAgICAgPD48Lz5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cbiAgICA8L2RpdiA+XG4gIClcbn0iXX0= */\n/*@ sourceURL=/Users/tmytrn/portfolio-tmytrn/components/layout.js */")) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null)), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, children));
}

/***/ })

})
//# sourceMappingURL=AirbnbJournals.js.2a2deb6ac36e2e324eff.hot-update.js.map