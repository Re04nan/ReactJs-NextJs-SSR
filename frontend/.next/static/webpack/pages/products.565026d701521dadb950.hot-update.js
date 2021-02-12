webpackHotUpdate_N_E("pages/products",{

/***/ "./src/pages/products.jsx":
/*!********************************!*\
  !*** ./src/pages/products.jsx ***!
  \********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Menu */ "./src/components/Menu/index.jsx");
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Head */ "./src/components/Head/index.jsx");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\renan\\OneDrive\\\xC1rea de Trabalho\\SSR-NextJS\\frontend\\src\\pages\\products.jsx";





function Products(_ref) {
  var _this = this;

  var products = _ref.products;
  var estilo = {
    width: "20vw",
    height: "40vh",
    textAlign: "center"
  };
  return (
    /*#__PURE__*/
    // Essa página está sendo renderizada em side-server... 
    // porém as imagem só são mostradas com javascript do browser
    // habilitado no momento!
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Head__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        className: "container justify-content-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row justify-content-center d-flex m-8",
          children: products.map(function (item, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: estilo,
              className: "card row text-white bg-light mb-3",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "card-body col",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figure", {
                  className: "card-img-top",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
                    src: "/imagens/Produtos".concat(item.nome_imagem),
                    alt: item.nome,
                    width: 100,
                    height: 120
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 26,
                    columnNumber: 33
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 25,
                  columnNumber: 29
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figcaption", {
                  className: "card-title text-primary",
                  children: item.nome
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 29
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 25
              }, _this)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 21
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, this)]
    }, void 0, true)
  );
}

_c = Products;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Products);

var _c;

$RefreshReg$(_c, "Products");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3RzLmpzeCJdLCJuYW1lcyI6WyJQcm9kdWN0cyIsInByb2R1Y3RzIiwiZXN0aWxvIiwid2lkdGgiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJub21lX2ltYWdlbSIsIm5vbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxPQUFnQztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUM1QixNQUFNQyxNQUFNLEdBQUc7QUFDWEMsU0FBSyxFQUFFLE1BREk7QUFFWEMsVUFBTSxFQUFFLE1BRkc7QUFHWEMsYUFBUyxFQUFFO0FBSEEsR0FBZjtBQUtBO0FBQUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUFBLDhCQUNJLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUdJO0FBQU0saUJBQVMsRUFBQyxrQ0FBaEI7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsdUNBQWY7QUFBQSxvQkFDQ0osUUFBUSxDQUFDSyxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQzNCLGdDQUNBO0FBQWlCLG1CQUFLLEVBQUVOLE1BQXhCO0FBQWdDLHVCQUFTLEVBQUMsbUNBQTFDO0FBQUEscUNBQ0k7QUFBSyx5QkFBUyxFQUFDLGVBQWY7QUFBQSx3Q0FDSTtBQUFRLDJCQUFTLEVBQUMsY0FBbEI7QUFBQSx5Q0FDSSxxRUFBQyxpREFBRDtBQUFPLHVCQUFHLDZCQUFzQkssSUFBSSxDQUFDRSxXQUEzQixDQUFWO0FBQ0ksdUJBQUcsRUFBRUYsSUFBSSxDQUFDRyxJQURkO0FBRUkseUJBQUssRUFBRSxHQUZYO0FBRWdCLDBCQUFNLEVBQUU7QUFGeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFNSTtBQUFZLDJCQUFTLEVBQUMseUJBQXRCO0FBQUEsNEJBQWlESCxJQUFJLENBQUNHO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosZUFBVUYsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURBO0FBV0gsV0FaQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUpKO0FBMEJIOztLQWhDUVIsUTs7QUEyQ01BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RzLjU2NTAyNmQ3MDE1MjFkYWRiOTUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnO1xyXG5pbXBvcnQgSEVBRCBmcm9tICcuLi9jb21wb25lbnRzL0hlYWQnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0cyh7IHByb2R1Y3RzIH0pIHtcclxuICAgIGNvbnN0IGVzdGlsbyA9IHtcclxuICAgICAgICB3aWR0aDogXCIyMHZ3XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjQwdmhcIixcclxuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIEVzc2EgcMOhZ2luYSBlc3TDoSBzZW5kbyByZW5kZXJpemFkYSBlbSBzaWRlLXNlcnZlci4uLiBcclxuICAgICAgICAvLyBwb3LDqW0gYXMgaW1hZ2VtIHPDsyBzw6NvIG1vc3RyYWRhcyBjb20gamF2YXNjcmlwdCBkbyBicm93c2VyXHJcbiAgICAgICAgLy8gaGFiaWxpdGFkbyBubyBtb21lbnRvIVxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIRUFEIC8+XHJcbiAgICAgICAgICAgIDxNZW51IC8+XHJcbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGQtZmxleCBtLThcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IHN0eWxlPXtlc3RpbG99IGNsYXNzTmFtZT1cImNhcmQgcm93IHRleHQtd2hpdGUgYmctbGlnaHQgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17YC9pbWFnZW5zL1Byb2R1dG9zJHtpdGVtLm5vbWVfaW1hZ2VtfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS5ub21lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfSBoZWlnaHQ9ezEyMH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24gY2xhc3NOYW1lPVwiY2FyZC10aXRsZSB0ZXh0LXByaW1hcnlcIj57aXRlbS5ub21lfTwvZmlnY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9Qcm9kdXRvc1wiO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHsgcHJvZHVjdHM6IGRhdGEgfSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==