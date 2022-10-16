"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/buy",{

/***/ "./pages/buy.tsx":
/*!***********************!*\
  !*** ./pages/buy.tsx ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/Layout */ \"./components/layout/Layout.tsx\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar GOERLI_CONTRACT_ADDRESS = \"0x982659f8ce3988096A735044aD42445D6514ba7e\";\nvar UNSPLASH_ACCESS_KEY = \"# Get an access key https://unsplash.com/developers\";\nvar IPFS_BASE_URL = \"https://ipfs.io/ipfs\";\nvar projectId = \"2DDHiA47zFkJXtnxzl2jFkyuaoq\";\nvar projectSecret = \"96a91eeafc0a390ab66e6a87f61152aa\";\nvar projectIdAndSecret = \"\".concat(projectId, \":\").concat(projectSecret);\nvar Buy = function() {\n    _s();\n    var ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useSigner)(), signer = ref.data;\n    var ref1 = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useNetwork)(), chain = ref1.chain, chains = ref1.chains;\n    var address = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount)().address;\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), nftContractAddress = ref2[0], setNFTContractAddress = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), tokenId = ref3[0], setTokenId = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), price = ref4[0], setPrice = ref4[1];\n    var goerliContractAddress = \"\";\n    var goerliArbitrumContract = \"\";\n    var ArbXNFTL1ABI = \"\";\n    var ArbXNFTL2ABI = \"\";\n    var handleChangeNFTContractAddress = function(e) {\n        var inputValue = e.target.value;\n        setNFTContractAddress(inputValue);\n    };\n    var handleChangeTokenId = function(e) {\n        var inputValue = e.target.value;\n        setTokenId(inputValue);\n    };\n    var searchL1 = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var contract, price;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        if (!signer) return [\n                            2\n                        ];\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(goerliContractAddress, ArbXNFTL1ABI, signer);\n                        return [\n                            4,\n                            contract.getNFTPrice(nftContractAddress, tokenId)\n                        ];\n                    case 1:\n                        price = _state.sent();\n                        setPrice(price);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function searchL1() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var searchL2 = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var contract, price;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        if (!signer) return [\n                            2\n                        ];\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(goerliArbitrumContract, ArbXNFTL2ABI, signer);\n                        return [\n                            4,\n                            contract.getNFTPrice(nftContractAddress, tokenId)\n                        ];\n                    case 1:\n                        price = _state.sent();\n                        setPrice(price);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function searchL2() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var buyNFTFromL1ToL2 = function() {\n        if (!signer) return;\n        var contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(goerliContractAddress, ArbXNFTL1ABI, signer);\n    };\n    var buyNFTFromL2ToL1 = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                return [\n                    2\n                ];\n            });\n        });\n        return function buyNFTFromL2ToL1() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n            justifyContent: \"center\",\n            mb: \"2\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                mt: \"10\",\n                w: \"50%\",\n                justifyContent: \"center\",\n                textAlign: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {\n                        as: \"h1\",\n                        mb: \"8\",\n                        children: \"Buy NFT\"\n                    }, void 0, false, {\n                        fileName: \"/Users/takumi/Documents/Yuzurypto/Development/Arbitrum-xNFT-Market/packages/frontend/pages/buy.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                        placeholder: \"NFT Contract Address\",\n                        onChange: handleChangeNFTContractAddress\n                    }, void 0, false, {\n                        fileName: \"/Users/takumi/Documents/Yuzurypto/Development/Arbitrum-xNFT-Market/packages/frontend/pages/buy.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                        mt: \"4\",\n                        placeholder: \"Token ID\",\n                        onChange: handleChangeTokenId\n                    }, void 0, false, {\n                        fileName: \"/Users/takumi/Documents/Yuzurypto/Development/Arbitrum-xNFT-Market/packages/frontend/pages/buy.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, _this),\n                    (chain === null || chain === void 0 ? void 0 : chain.id) == 5 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                        mt: \"4\",\n                        colorScheme: \"teal\",\n                        onClick: searchL1,\n                        children: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"/Users/takumi/Documents/Yuzurypto/Development/Arbitrum-xNFT-Market/packages/frontend/pages/buy.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 13\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                        mt: \"4\",\n                        colorScheme: \"teal\",\n                        onClick: searchL2,\n                        children: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"/Users/takumi/Documents/Yuzurypto/Development/Arbitrum-xNFT-Market/packages/frontend/pages/buy.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 13\n                    }, _this),\n                    price && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                children: price\n                            }, void 0, false, {\n                                fileName: \"/Users/takumi/Documents/Yuzurypto/Development/Arbitrum-xNFT-Market/packages/frontend/pages/buy.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                mt: \"4\",\n                                colorScheme: \"teal\",\n                                onClick: (chain === null || chain === void 0 ? void 0 : chain.id) == 5 ? buyNFTFromL1ToL2 : buyNFTFromL2ToL1,\n                                children: (chain === null || chain === void 0 ? void 0 : chain.id) == 5 ? \"Buy Arbitrum NFT\" : \"Buy Ethereum NFT\"\n                            }, void 0, false, {\n                                fileName: \"/Users/takumi/Documents/Yuzurypto/Development/Arbitrum-xNFT-Market/packages/frontend/pages/buy.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/takumi/Documents/Yuzurypto/Development/Arbitrum-xNFT-Market/packages/frontend/pages/buy.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/takumi/Documents/Yuzurypto/Development/Arbitrum-xNFT-Market/packages/frontend/pages/buy.tsx\",\n                lineNumber: 88,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/takumi/Documents/Yuzurypto/Development/Arbitrum-xNFT-Market/packages/frontend/pages/buy.tsx\",\n            lineNumber: 87,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/takumi/Documents/Yuzurypto/Development/Arbitrum-xNFT-Market/packages/frontend/pages/buy.tsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, _this);\n};\n_s(Buy, \"rMPLtghruc96X/EL+y/TGaaHB4c=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useSigner,\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useNetwork,\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount\n    ];\n});\n_c = Buy;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Buy);\nvar _c;\n$RefreshReg$(_c, \"Buy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2IsOERBQUN6RCxvREFBTTt3QkFBQ21ELEVBQUUsRUFBQyxHQUFHO3dCQUFDTyxXQUFXLEVBQUMsTUFBTTt3QkFBQ0MsT0FBTyxFQUFFakIsUUFBUTtrQ0FBRSxRQUVyRDs7Ozs7NkJBQVMsaUJBRVQsOERBQUMxQyxvREFBTTt3QkFBQ21ELEVBQUUsRUFBQyxHQUFHO3dCQUFDTyxXQUFXLEVBQUMsTUFBTTt3QkFBQ0MsT0FBTyxFQUFFYixRQUFRO2tDQUFFLFFBRXJEOzs7Ozs2QkFBUztvQkFFVmhCLEtBQUssa0JBQ0osOERBQUMvQixpREFBRzs7MENBQ0YsOERBQUNLLGtEQUFJOzBDQUFFMEIsS0FBSzs7Ozs7cUNBQVE7MENBQ3BCLDhEQUFDOUIsb0RBQU07Z0NBQ0xtRCxFQUFFLEVBQUMsR0FBRztnQ0FDTk8sV0FBVyxFQUFDLE1BQU07Z0NBQ2xCQyxPQUFPLEVBQUVwQyxDQUFBQSxLQUFLLGFBQUxBLEtBQUssV0FBSSxHQUFUQSxLQUFBQSxDQUFTLEdBQVRBLEtBQUssQ0FBRWtDLEVBQUUsS0FBSSxDQUFDLEdBQUdWLGdCQUFnQixHQUFHQyxnQkFBZ0I7MENBRTVEekIsQ0FBQUEsS0FBSyxhQUFMQSxLQUFLLFdBQUksR0FBVEEsS0FBQUEsQ0FBUyxHQUFUQSxLQUFLLENBQUVrQyxFQUFFLEtBQUksQ0FBQyxHQUFHLGtCQUFrQixHQUFHLGtCQUFrQjs7Ozs7cUNBQ2xEOzs7Ozs7NkJBQ0w7Ozs7OztxQkFFSjs7Ozs7aUJBQ0Q7Ozs7O2FBQ0EsQ0FDVjtBQUNILENBQUM7R0EvRktyQyxHQUFHOztRQUNrQmQsNENBQVM7UUFDUkMsNkNBQVU7UUFDaEJDLDZDQUFVOzs7QUFIMUJZLEtBQUFBLEdBQUc7QUFpR1QsK0RBQWVBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYnV5LnRzeD8wM2VlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBEaXZpZGVyLFxuICBGbGV4LFxuICBIZWFkaW5nLFxuICBJbnB1dCxcbiAgTGluayxcbiAgVGV4dCxcbiAgdXNlVG9hc3QsXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTaWduZXIsIHVzZU5ldHdvcmssIHVzZUFjY291bnQgfSBmcm9tICd3YWdtaSdcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCdcbmltcG9ydCB7IGV0aGVycywgcHJvdmlkZXJzIH0gZnJvbSAnZXRoZXJzJ1xuaW1wb3J0IHsgdG9rZW4gfSBmcm9tICcuLi90eXBlcy90eXBlY2hhaW4vQG9wZW56ZXBwZWxpbi9jb250cmFjdHMnXG5pbXBvcnQgeyBBcmJYTkZUTDFBQkkgfSBmcm9tICcuLi9saWIvQXJiWE5GVEwxJ1xuaW1wb3J0IHsgQXJiWE5GVEwyQUJJIH0gZnJvbSAnLi4vbGliL0FyYlhORlRMMidcblxuY29uc3QgR09FUkxJX0NPTlRSQUNUX0FERFJFU1MgPSAnMHg5ODI2NTlmOGNlMzk4ODA5NkE3MzUwNDRhRDQyNDQ1RDY1MTRiYTdlJ1xuXG5jb25zdCBVTlNQTEFTSF9BQ0NFU1NfS0VZID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVU5TUExBU0hfQUNDRVNTX0tFWVxuXG5jb25zdCBJUEZTX0JBU0VfVVJMID0gJ2h0dHBzOi8vaXBmcy5pby9pcGZzJ1xuXG5jb25zdCBwcm9qZWN0SWQgPSAnMkRESGlBNDd6RmtKWHRueHpsMmpGa3l1YW9xJ1xuY29uc3QgcHJvamVjdFNlY3JldCA9ICc5NmE5MWVlYWZjMGEzOTBhYjY2ZTZhODdmNjExNTJhYSdcbmNvbnN0IHByb2plY3RJZEFuZFNlY3JldCA9IGAke3Byb2plY3RJZH06JHtwcm9qZWN0U2VjcmV0fWBcblxuY29uc3QgQnV5OiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhOiBzaWduZXIgfSA9IHVzZVNpZ25lcigpXG4gIGNvbnN0IHsgY2hhaW4sIGNoYWlucyB9ID0gdXNlTmV0d29yaygpXG4gIGNvbnN0IHsgYWRkcmVzcyB9ID0gdXNlQWNjb3VudCgpXG4gIGNvbnN0IFtuZnRDb250cmFjdEFkZHJlc3MsIHNldE5GVENvbnRyYWN0QWRkcmVzc10gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3Rva2VuSWQsIHNldFRva2VuSWRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IGdvZXJsaUNvbnRyYWN0QWRkcmVzcyA9ICcnXG4gIGNvbnN0IGdvZXJsaUFyYml0cnVtQ29udHJhY3QgPSAnJ1xuICBjb25zdCBBcmJYTkZUTDFBQkkgPSAnJ1xuICBjb25zdCBBcmJYTkZUTDJBQkkgPSAnJ1xuICBjb25zdCBoYW5kbGVDaGFuZ2VORlRDb250cmFjdEFkZHJlc3MgPSAoZTogYW55KSA9PiB7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgc2V0TkZUQ29udHJhY3RBZGRyZXNzKGlucHV0VmFsdWUpXG4gIH1cbiAgY29uc3QgaGFuZGxlQ2hhbmdlVG9rZW5JZCA9IChlOiBhbnkpID0+IHtcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gZS50YXJnZXQudmFsdWVcbiAgICBzZXRUb2tlbklkKGlucHV0VmFsdWUpXG4gIH1cblxuICBjb25zdCBzZWFyY2hMMSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXNpZ25lcikgcmV0dXJuXG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgICAgZ29lcmxpQ29udHJhY3RBZGRyZXNzLFxuICAgICAgQXJiWE5GVEwxQUJJLFxuICAgICAgc2lnbmVyXG4gICAgKVxuICAgIGNvbnN0IHByaWNlID0gYXdhaXQgY29udHJhY3QuZ2V0TkZUUHJpY2UobmZ0Q29udHJhY3RBZGRyZXNzLCB0b2tlbklkKVxuICAgIHNldFByaWNlKHByaWNlKVxuICB9XG4gIGNvbnN0IHNlYXJjaEwyID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghc2lnbmVyKSByZXR1cm5cbiAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICBnb2VybGlBcmJpdHJ1bUNvbnRyYWN0LFxuICAgICAgQXJiWE5GVEwyQUJJLFxuICAgICAgc2lnbmVyXG4gICAgKVxuICAgIGNvbnN0IHByaWNlID0gYXdhaXQgY29udHJhY3QuZ2V0TkZUUHJpY2UobmZ0Q29udHJhY3RBZGRyZXNzLCB0b2tlbklkKVxuICAgIHNldFByaWNlKHByaWNlKVxuICB9XG5cbiAgY29uc3QgYnV5TkZURnJvbUwxVG9MMiA9ICgpID0+IHtcbiAgICBpZiAoIXNpZ25lcikgcmV0dXJuXG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgICAgZ29lcmxpQ29udHJhY3RBZGRyZXNzLFxuICAgICAgQXJiWE5GVEwxQUJJLFxuICAgICAgc2lnbmVyXG4gICAgKVxuICB9XG5cbiAgY29uc3QgYnV5TkZURnJvbUwyVG9MMSA9IGFzeW5jICgpID0+IHtcbiAgICBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgbWI9XCIyXCI+XG4gICAgICAgIDxCb3ggbXQ9XCIxMFwiIHc9XCI1MCVcIiBqdXN0aWZ5Q29udGVudD17J2NlbnRlcid9IHRleHRBbGlnbj17J2NlbnRlcid9PlxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiBtYj1cIjhcIj5cbiAgICAgICAgICAgIEJ1eSBORlRcbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5GVCBDb250cmFjdCBBZGRyZXNzXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VORlRDb250cmFjdEFkZHJlc3N9XG4gICAgICAgICAgPjwvSW5wdXQ+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBtdD1cIjRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUb2tlbiBJRFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlVG9rZW5JZH1cbiAgICAgICAgICA+PC9JbnB1dD5cbiAgICAgICAgICB7Y2hhaW4/LmlkID09IDUgPyAoXG4gICAgICAgICAgICA8QnV0dG9uIG10PVwiNFwiIGNvbG9yU2NoZW1lPVwidGVhbFwiIG9uQ2xpY2s9e3NlYXJjaEwxfT5cbiAgICAgICAgICAgICAgU2VhcmNoXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEJ1dHRvbiBtdD1cIjRcIiBjb2xvclNjaGVtZT1cInRlYWxcIiBvbkNsaWNrPXtzZWFyY2hMMn0+XG4gICAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7cHJpY2UgJiYgKFxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPFRleHQ+e3ByaWNlfTwvVGV4dD5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIG10PVwiNFwiXG4gICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJ0ZWFsXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtjaGFpbj8uaWQgPT0gNSA/IGJ1eU5GVEZyb21MMVRvTDIgOiBidXlORlRGcm9tTDJUb0wxfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NoYWluPy5pZCA9PSA1ID8gXCJCdXkgQXJiaXRydW0gTkZUXCIgOiBcIkJ1eSBFdGhlcmV1bSBORlRcIn1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvRmxleD5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXlcbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJGbGV4IiwiSGVhZGluZyIsIklucHV0IiwiVGV4dCIsInVzZVN0YXRlIiwidXNlU2lnbmVyIiwidXNlTmV0d29yayIsInVzZUFjY291bnQiLCJMYXlvdXQiLCJldGhlcnMiLCJHT0VSTElfQ09OVFJBQ1RfQUREUkVTUyIsIlVOU1BMQVNIX0FDQ0VTU19LRVkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfVU5TUExBU0hfQUNDRVNTX0tFWSIsIklQRlNfQkFTRV9VUkwiLCJwcm9qZWN0SWQiLCJwcm9qZWN0U2VjcmV0IiwicHJvamVjdElkQW5kU2VjcmV0IiwiQnV5IiwiZGF0YSIsInNpZ25lciIsImNoYWluIiwiY2hhaW5zIiwiYWRkcmVzcyIsIm5mdENvbnRyYWN0QWRkcmVzcyIsInNldE5GVENvbnRyYWN0QWRkcmVzcyIsInRva2VuSWQiLCJzZXRUb2tlbklkIiwicHJpY2UiLCJzZXRQcmljZSIsImdvZXJsaUNvbnRyYWN0QWRkcmVzcyIsImdvZXJsaUFyYml0cnVtQ29udHJhY3QiLCJBcmJYTkZUTDFBQkkiLCJBcmJYTkZUTDJBQkkiLCJoYW5kbGVDaGFuZ2VORlRDb250cmFjdEFkZHJlc3MiLCJlIiwiaW5wdXRWYWx1ZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlVG9rZW5JZCIsInNlYXJjaEwxIiwiY29udHJhY3QiLCJDb250cmFjdCIsImdldE5GVFByaWNlIiwic2VhcmNoTDIiLCJidXlORlRGcm9tTDFUb0wyIiwiYnV5TkZURnJvbUwyVG9MMSIsImp1c3RpZnlDb250ZW50IiwibWIiLCJtdCIsInciLCJ0ZXh0QWxpZ24iLCJhcyIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJpZCIsImNvbG9yU2NoZW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/buy.tsx\n"));

/***/ })

});