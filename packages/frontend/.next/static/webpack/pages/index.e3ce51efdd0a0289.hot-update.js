"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/Layout */ \"./components/layout/Layout.tsx\");\n\n\nvar _this = undefined;\n\n\n\n\n/**\n * Constants & Helpers\n */ var localProvider = new ethers__WEBPACK_IMPORTED_MODULE_2__.providers.StaticJsonRpcProvider(\"http://localhost:8545\");\nvar GOERLI_CONTRACT_ADDRESS = \"0x3B73833638556f10ceB1b49A18a27154e3828303\";\n/**\n * Component\n */ var initialState = {\n    greeting: \"\",\n    inputValue: \"\"\n};\nfunction reducer(state, action) {\n    switch(action.type){\n        // Track the greeting from the blockchain\n        case \"SET_GREETING\":\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, state), {\n                greeting: action.greeting\n            });\n        case \"SET_INPUT_VALUE\":\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, state), {\n                inputValue: action.inputValue\n            });\n        default:\n            throw new Error();\n    }\n}\nvar Home = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__.Layout, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                children: \"First go List\"\n            }, void 0, false, {\n                fileName: \"/Users/takumi/Documents/Yuzurypto/Development/Arbitrum-xNFT-Market/packages/frontend/pages/index.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                children: \"Next buy NFTs\"\n            }, void 0, false, {\n                fileName: \"/Users/takumi/Documents/Yuzurypto/Development/Arbitrum-xNFT-Market/packages/frontend/pages/index.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                children: \"Last, claim your NFT\"\n            }, void 0, false, {\n                fileName: \"/Users/takumi/Documents/Yuzurypto/Development/Arbitrum-xNFT-Market/packages/frontend/pages/index.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/takumi/Documents/Yuzurypto/Development/Arbitrum-xNFT-Market/packages/frontend/pages/index.tsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, _this);\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQVd5QjtBQUNpQjtBQVlVO0FBSXBEOztDQUVDLEdBRUQsSUFBTUcsYUFBYSxHQUFHLElBQUlGLG1FQUErQixDQUN2RCx1QkFBdUIsQ0FDeEI7QUFFRCxJQUFNSSx1QkFBdUIsR0FBRyw0Q0FBNEM7QUFtQjVFOztDQUVDLEdBQ0QsSUFBTUMsWUFBWSxHQUFjO0lBQzlCQyxRQUFRLEVBQUUsRUFBRTtJQUNaQyxVQUFVLEVBQUUsRUFBRTtDQUNmO0FBRUQsU0FBU0MsT0FBTyxDQUFDQyxLQUFnQixFQUFFQyxNQUFrQixFQUFhO0lBQ2hFLE9BQVFBLE1BQU0sQ0FBQ0MsSUFBSTtRQUNqQix5Q0FBeUM7UUFDekMsS0FBSyxjQUFjO1lBQ2pCLE9BQU8sd0tBQ0ZGLEtBQUs7Z0JBQ1JILFFBQVEsRUFBRUksTUFBTSxDQUFDSixRQUFRO2NBQzFCO1FBQ0gsS0FBSyxpQkFBaUI7WUFDcEIsT0FBTyx3S0FDRkcsS0FBSztnQkFDUkYsVUFBVSxFQUFFRyxNQUFNLENBQUNILFVBQVU7Y0FDOUI7UUFDSDtZQUNFLE1BQU0sSUFBSUssS0FBSyxFQUFFO0tBQ3BCO0FBQ0gsQ0FBQztBQUVELElBQU1DLElBQUksR0FBYSxXQUFNO0lBRzNCLHFCQUNFLDhEQUFDWiw2REFBTTs7MEJBQ0wsOERBQUNGLGtEQUFJOzBCQUFDLGVBQWE7Ozs7O3FCQUFPOzBCQUMxQiw4REFBQ0Esa0RBQUk7MEJBQUMsZUFBYTs7Ozs7cUJBQU87MEJBQzFCLDhEQUFDQSxrREFBSTswQkFBQyxzQkFBb0I7Ozs7O3FCQUFPOzs7Ozs7YUFFMUIsQ0FDVjtBQUNILENBQUM7QUFYS2MsS0FBQUEsSUFBSTtBQWFWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBEaXZpZGVyLFxuICBIZWFkaW5nLFxuICBJbnB1dCxcbiAgTGluayxcbiAgTGlzdEl0ZW0sXG4gIFRleHQsXG4gIFVub3JkZXJlZExpc3QsXG4gIHVzZVRvYXN0LFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgZXRoZXJzLCBwcm92aWRlcnMgfSBmcm9tICdldGhlcnMnXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXG5pbXBvcnQgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICB1c2VDb250cmFjdFdyaXRlLFxuICB1c2VQcmVwYXJlQ29udHJhY3RXcml0ZSxcbiAgdXNlUHJvdmlkZXIsXG4gIHVzZVdhaXRGb3JUcmFuc2FjdGlvbixcbn0gZnJvbSAnd2FnbWknXG5pbXBvcnQgeyBZb3VyQ29udHJhY3QgYXMgTE9DQUxfQ09OVFJBQ1RfQUREUkVTUyB9IGZyb20gJy4uL2FydGlmYWN0cy9jb250cmFjdHMvY29udHJhY3RBZGRyZXNzJ1xuaW1wb3J0IFlvdXJDb250cmFjdCBmcm9tICcuLi9hcnRpZmFjdHMvY29udHJhY3RzL1lvdXJDb250cmFjdC5zb2wvWW91ckNvbnRyYWN0Lmpzb24nXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQnXG5pbXBvcnQgeyB1c2VDaGVja0xvY2FsQ2hhaW4gfSBmcm9tICcuLi9ob29rcy91c2VDaGVja0xvY2FsQ2hhaW4nXG5pbXBvcnQgeyBZb3VyQ29udHJhY3QgYXMgWW91ckNvbnRyYWN0VHlwZSB9IGZyb20gJy4uL3R5cGVzL3R5cGVjaGFpbidcblxuLyoqXG4gKiBDb25zdGFudHMgJiBIZWxwZXJzXG4gKi9cblxuY29uc3QgbG9jYWxQcm92aWRlciA9IG5ldyBwcm92aWRlcnMuU3RhdGljSnNvblJwY1Byb3ZpZGVyKFxuICAnaHR0cDovL2xvY2FsaG9zdDo4NTQ1J1xuKVxuXG5jb25zdCBHT0VSTElfQ09OVFJBQ1RfQUREUkVTUyA9ICcweDNCNzM4MzM2Mzg1NTZmMTBjZUIxYjQ5QTE4YTI3MTU0ZTM4MjgzMDMnXG5cbi8qKlxuICogUHJvcCBUeXBlc1xuICovXG50eXBlIFN0YXRlVHlwZSA9IHtcbiAgZ3JlZXRpbmc6IHN0cmluZ1xuICBpbnB1dFZhbHVlOiBzdHJpbmdcbn1cbnR5cGUgQWN0aW9uVHlwZSA9XG4gIHwge1xuICAgICAgdHlwZTogJ1NFVF9HUkVFVElORydcbiAgICAgIGdyZWV0aW5nOiBTdGF0ZVR5cGVbJ2dyZWV0aW5nJ11cbiAgICB9XG4gIHwge1xuICAgICAgdHlwZTogJ1NFVF9JTlBVVF9WQUxVRSdcbiAgICAgIGlucHV0VmFsdWU6IFN0YXRlVHlwZVsnaW5wdXRWYWx1ZSddXG4gICAgfVxuXG4vKipcbiAqIENvbXBvbmVudFxuICovXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlVHlwZSA9IHtcbiAgZ3JlZXRpbmc6ICcnLFxuICBpbnB1dFZhbHVlOiAnJyxcbn1cblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZTogU3RhdGVUeXBlLCBhY3Rpb246IEFjdGlvblR5cGUpOiBTdGF0ZVR5cGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgLy8gVHJhY2sgdGhlIGdyZWV0aW5nIGZyb20gdGhlIGJsb2NrY2hhaW5cbiAgICBjYXNlICdTRVRfR1JFRVRJTkcnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGdyZWV0aW5nOiBhY3Rpb24uZ3JlZXRpbmcsXG4gICAgICB9XG4gICAgY2FzZSAnU0VUX0lOUFVUX1ZBTFVFJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpbnB1dFZhbHVlOiBhY3Rpb24uaW5wdXRWYWx1ZSxcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKClcbiAgfVxufVxuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcblxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxUZXh0PkZpcnN0IGdvIExpc3Q8L1RleHQ+XG4gICAgICA8VGV4dD5OZXh0IGJ1eSBORlRzPC9UZXh0PlxuICAgICAgPFRleHQ+TGFzdCwgY2xhaW0geW91ciBORlQ8L1RleHQ+XG5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsiVGV4dCIsInByb3ZpZGVycyIsIkxheW91dCIsImxvY2FsUHJvdmlkZXIiLCJTdGF0aWNKc29uUnBjUHJvdmlkZXIiLCJHT0VSTElfQ09OVFJBQ1RfQUREUkVTUyIsImluaXRpYWxTdGF0ZSIsImdyZWV0aW5nIiwiaW5wdXRWYWx1ZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJFcnJvciIsIkhvbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});