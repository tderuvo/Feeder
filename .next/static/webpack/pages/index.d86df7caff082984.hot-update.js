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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert */ \"./node_modules/sweetalert/dist/sweetalert.min.js\");\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), inputValue = ref[0], setInputValue = ref[1];\n    var submitHandler = function(e) {\n        e.preventDefault();\n        if (inputValue === \"Either you run the day or the day runs you\") {\n            window.open(\"https://magnificent-paprenjak-ebf081.netlify.app\", \"_blank\");\n        } else if (inputValue === \"Either you run the day or the day runs you\") {\n            window.open(\"https://nbc.com\", \"_blank\");\n        } else {\n            sweetalert__WEBPACK_IMPORTED_MODULE_3___default()(\"Thank\tyou\tfor\tsubmitting\", inputValue, \"success\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Saeed Feeder\"\n                    }, void 0, false, {\n                        fileName: \"/Users/antonioderuvo/WebDev/production/feeder/pages/index.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/antonioderuvo/WebDev/production/feeder/pages/index.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/antonioderuvo/WebDev/production/feeder/pages/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/antonioderuvo/WebDev/production/feeder/pages/index.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Join our newsletter\"\n                    }, void 0, false, {\n                        fileName: \"/Users/antonioderuvo/WebDev/production/feeder/pages/index.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Enter your email for weekly updates\"\n                    }, void 0, false, {\n                        fileName: \"/Users/antonioderuvo/WebDev/production/feeder/pages/index.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: submitHandler,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"input-container\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    placeholder: \"Enter your choice\",\n                                    maxLength: 80,\n                                    onChange: function(e) {\n                                        return setInputValue(e.target.value);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/antonioderuvo/WebDev/production/feeder/pages/index.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/antonioderuvo/WebDev/production/feeder/pages/index.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/antonioderuvo/WebDev/production/feeder/pages/index.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/antonioderuvo/WebDev/production/feeder/pages/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/antonioderuvo/WebDev/production/feeder/pages/index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/antonioderuvo/WebDev/production/feeder/pages/index.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDSTtBQUNIO0FBRWYsU0FBU0csSUFBSSxHQUFHOztJQUM3QixJQUFvQ0YsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUF6Q0csVUFBVSxHQUFtQkgsR0FBWSxHQUEvQixFQUFFSSxhQUFhLEdBQUlKLEdBQVksR0FBaEI7SUFFaEMsSUFBTUssYUFBYSxHQUFHLFNBQUNDLENBQUMsRUFBSztRQUMzQkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixJQUFJSixVQUFVLEtBQUssNENBQTRDLEVBQUU7WUFDL0RLLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLGtEQUFrRCxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzVFLE9BQU8sSUFBSU4sVUFBVSxLQUFLLDRDQUE0QyxFQUFFO1lBQ3RFSyxNQUFNLENBQUNDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMzQyxPQUFPO1lBQ0xSLGlEQUFJLENBQUMsMEJBQTBCLEVBQUVFLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMxRCxDQUFDO0lBQ0gsQ0FBQztJQUVELHFCQUNFLDhEQUFDTyxLQUFHOzswQkFDRiw4REFBQ1gsa0RBQUk7O2tDQUNILDhEQUFDWSxPQUFLO2tDQUFDLGNBQVk7Ozs7OzRCQUFRO2tDQUMzQiw4REFBQ0MsTUFBSTt3QkFBQ0MsSUFBSSxFQUFDLGFBQWE7d0JBQUNDLE9BQU8sRUFBQyw4QkFBOEI7Ozs7OzRCQUFHO2tDQUNsRSw4REFBQ0MsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLE1BQU07d0JBQUNDLElBQUksRUFBQyxjQUFjOzs7Ozs0QkFBRzs7Ozs7O29CQUNsQzswQkFFUCw4REFBQ0MsTUFBSTs7a0NBQ0gsOERBQUNDLElBQUU7a0NBQUMscUJBQW1COzs7Ozs0QkFBSztrQ0FDNUIsOERBQUNDLEdBQUM7a0NBQUMscUNBQW1DOzs7Ozs0QkFBSTtrQ0FDMUMsOERBQUNDLE1BQUk7d0JBQUNDLFFBQVEsRUFBRWpCLGFBQWE7a0NBQzNCLDRFQUFDSyxLQUFHOzRCQUFDYSxTQUFTLEVBQUMsaUJBQWlCOzs4Q0FDOUIsOERBQUNDLE9BQUs7b0NBQ0pDLFdBQVcsRUFBQyxtQkFBbUI7b0NBQy9CQyxTQUFTLEVBQUUsRUFBRTtvQ0FDYkMsUUFBUSxFQUFFLFNBQUNyQixDQUFDOytDQUFLRixhQUFhLENBQUNFLENBQUMsQ0FBQ3NCLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO3FDQUFBOzs7Ozt3Q0FDOUM7OENBQ0YsOERBQUNDLFFBQU07b0NBQUNDLElBQUksRUFBQyxRQUFROzhDQUFDLFFBQU07Ozs7O3dDQUFTOzs7Ozs7Z0NBQ2pDOzs7Ozs0QkFDRDs7Ozs7O29CQUNGOzs7Ozs7WUFDSCxDQUNOO0FBQ0osQ0FBQztHQXRDdUI3QixJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN3YWwgZnJvbSBcInN3ZWV0YWxlcnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChpbnB1dFZhbHVlID09PSBcIkVpdGhlciB5b3UgcnVuIHRoZSBkYXkgb3IgdGhlIGRheSBydW5zIHlvdVwiKSB7XG4gICAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vbWFnbmlmaWNlbnQtcGFwcmVuamFrLWViZjA4MS5uZXRsaWZ5LmFwcFwiLCBcIl9ibGFua1wiKTtcbiAgICB9IGVsc2UgaWYgKGlucHV0VmFsdWUgPT09IFwiRWl0aGVyIHlvdSBydW4gdGhlIGRheSBvciB0aGUgZGF5IHJ1bnMgeW91XCIpIHtcbiAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9uYmMuY29tXCIsIFwiX2JsYW5rXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2FsKFwiVGhhbmtcdHlvdVx0Zm9yXHRzdWJtaXR0aW5nXCIsIGlucHV0VmFsdWUsIFwic3VjY2Vzc1wiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5TYWVlZCBGZWVkZXI8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxoMT5Kb2luIG91ciBuZXdzbGV0dGVyPC9oMT5cbiAgICAgICAgPHA+RW50ZXIgeW91ciBlbWFpbCBmb3Igd2Vla2x5IHVwZGF0ZXM8L3A+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBjaG9pY2VcIlxuICAgICAgICAgICAgICBtYXhMZW5ndGg9ezgwfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVN0YXRlIiwic3dhbCIsIkhvbWUiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsInN1Ym1pdEhhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ3aW5kb3ciLCJvcGVuIiwiZGl2IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJoMSIsInAiLCJmb3JtIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwibWF4TGVuZ3RoIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});