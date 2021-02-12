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
    //porém as imagem só são mostradas com javascript do browser
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3RzLmpzeCJdLCJuYW1lcyI6WyJQcm9kdWN0cyIsInByb2R1Y3RzIiwiZXN0aWxvIiwid2lkdGgiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJub21lX2ltYWdlbSIsIm5vbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxPQUFnQztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUM1QixNQUFNQyxNQUFNLEdBQUc7QUFDWEMsU0FBSyxFQUFFLE1BREk7QUFFWEMsVUFBTSxFQUFFLE1BRkc7QUFHWEMsYUFBUyxFQUFFO0FBSEEsR0FBZjtBQUtBO0FBQUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUFBLDhCQUNJLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUdJO0FBQU0saUJBQVMsRUFBQyxrQ0FBaEI7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsdUNBQWY7QUFBQSxvQkFDQ0osUUFBUSxDQUFDSyxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQzNCLGdDQUNBO0FBQWlCLG1CQUFLLEVBQUVOLE1BQXhCO0FBQWdDLHVCQUFTLEVBQUMsbUNBQTFDO0FBQUEscUNBQ0k7QUFBSyx5QkFBUyxFQUFDLGVBQWY7QUFBQSx3Q0FDSTtBQUFRLDJCQUFTLEVBQUMsY0FBbEI7QUFBQSx5Q0FDSSxxRUFBQyxpREFBRDtBQUFPLHVCQUFHLDZCQUFzQkssSUFBSSxDQUFDRSxXQUEzQixDQUFWO0FBQ0ksdUJBQUcsRUFBRUYsSUFBSSxDQUFDRyxJQURkO0FBRUkseUJBQUssRUFBRSxHQUZYO0FBRWdCLDBCQUFNLEVBQUU7QUFGeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFNSTtBQUFZLDJCQUFTLEVBQUMseUJBQXRCO0FBQUEsNEJBQWlESCxJQUFJLENBQUNHO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosZUFBVUYsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURBO0FBV0gsV0FaQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUpKO0FBMEJIOztLQWhDUVIsUTs7QUEyQ01BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RzLjc2NWM2M2MwMjg5NDM0ODEyMjQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnO1xyXG5pbXBvcnQgSEVBRCBmcm9tICcuLi9jb21wb25lbnRzL0hlYWQnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0cyh7IHByb2R1Y3RzIH0pIHtcclxuICAgIGNvbnN0IGVzdGlsbyA9IHtcclxuICAgICAgICB3aWR0aDogXCIyMHZ3XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjQwdmhcIixcclxuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIEVzc2EgcMOhZ2luYSBlc3TDoSBzZW5kbyByZW5kZXJpemFkYSBlbSBzaWRlLXNlcnZlci4uLiBcclxuICAgICAgICAvL3BvcsOpbSBhcyBpbWFnZW0gc8OzIHPDo28gbW9zdHJhZGFzIGNvbSBqYXZhc2NyaXB0IGRvIGJyb3dzZXJcclxuICAgICAgICAvLyBoYWJpbGl0YWRvIG5vIG1vbWVudG8hXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhFQUQgLz5cclxuICAgICAgICAgICAgPE1lbnUgLz5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgZC1mbGV4IG0tOFwiPlxyXG4gICAgICAgICAgICAgICAge3Byb2R1Y3RzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gc3R5bGU9e2VzdGlsb30gY2xhc3NOYW1lPVwiY2FyZCByb3cgdGV4dC13aGl0ZSBiZy1saWdodCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtgL2ltYWdlbnMvUHJvZHV0b3Mke2l0ZW0ubm9tZV9pbWFnZW19YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLm5vbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9IGhlaWdodD17MTIwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIHRleHQtcHJpbWFyeVwiPntpdGVtLm5vbWV9PC9maWdjYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAyL1Byb2R1dG9zXCI7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczogeyBwcm9kdWN0czogZGF0YSB9LFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0czsiXSwic291cmNlUm9vdCI6IiJ9