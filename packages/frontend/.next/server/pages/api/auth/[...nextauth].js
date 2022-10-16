"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "siwe":
/*!***********************!*\
  !*** external "siwe" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("siwe");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ auth),\n/* harmony export */   \"getAuthOptions\": () => (/* binding */ getAuthOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var siwe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! siwe */ \"siwe\");\n/* harmony import */ var siwe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(siwe__WEBPACK_IMPORTED_MODULE_3__);\n// Code in this file is based on https://docs.login.xyz/integrations/nextauth.js\n// with added process.env.VERCEL_URL detection to support preview deployments\n// and with auth option logic extracted into a 'getAuthOptions' function so it\n// can be used to get the session server-side with 'unstable_getServerSession'\n\n\n\n\nfunction getAuthOptions(req) {\n    const providers = [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            async authorize (credentials) {\n                try {\n                    const siwe = new siwe__WEBPACK_IMPORTED_MODULE_3__.SiweMessage(JSON.parse(credentials?.message || \"{}\"));\n                    const nextAuthUrl = process.env.NEXTAUTH_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null);\n                    if (!nextAuthUrl) {\n                        return null;\n                    }\n                    const nextAuthHost = new URL(nextAuthUrl).host;\n                    if (siwe.domain !== nextAuthHost) {\n                        return null;\n                    }\n                    if (siwe.nonce !== await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getCsrfToken)({\n                        req\n                    })) {\n                        return null;\n                    }\n                    await siwe.validate(credentials?.signature || \"\");\n                    return {\n                        id: siwe.address\n                    };\n                } catch (e) {\n                    return null;\n                }\n            },\n            credentials: {\n                message: {\n                    label: \"Message\",\n                    placeholder: \"0x0\",\n                    type: \"text\"\n                },\n                signature: {\n                    label: \"Signature\",\n                    placeholder: \"0x0\",\n                    type: \"text\"\n                }\n            },\n            name: \"Ethereum\"\n        }), \n    ];\n    return {\n        callbacks: {\n            async session ({ session , token  }) {\n                session.address = token.sub;\n                session.user = {\n                    name: token.sub\n                };\n                return session;\n            }\n        },\n        // https://next-auth.js.org/configuration/providers/oauth\n        providers,\n        secret: process.env.NEXTAUTH_SECRET,\n        session: {\n            strategy: \"jwt\"\n        }\n    };\n}\n// For more information on each option (and a full list of options) go to\n// https://next-auth.js.org/configuration/options\nasync function auth(req, res) {\n    const authOptions = getAuthOptions(req);\n    if (!Array.isArray(req.query.nextauth)) {\n        res.status(400).send(\"Bad request\");\n        return;\n    }\n    const isDefaultSigninPage = req.method === \"GET\" && req.query.nextauth.find((value)=>value === \"signin\");\n    // Hide Sign-In with Ethereum from default sign page\n    if (isDefaultSigninPage) {\n        authOptions.providers.pop();\n    }\n    return await next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, authOptions);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRkFBZ0Y7QUFDaEYsNkVBQTZFO0FBQzdFLDhFQUE4RTtBQUM5RSw4RUFBOEU7QUFHekI7QUFDWTtBQUNuQjtBQUNaO0FBRTNCLFNBQVNJLGNBQWMsQ0FBQ0MsR0FBb0IsRUFBbUI7SUFDcEUsTUFBTUMsU0FBUyxHQUFHO1FBQ2hCTCxzRUFBbUIsQ0FBQztZQUNsQixNQUFNTSxTQUFTLEVBQUNDLFdBQVcsRUFBRTtnQkFDM0IsSUFBSTtvQkFDRixNQUFNQyxJQUFJLEdBQUcsSUFBSU4sNkNBQVcsQ0FBQ08sSUFBSSxDQUFDQyxLQUFLLENBQUNILFdBQVcsRUFBRUksT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDO29CQUV0RSxNQUFNQyxXQUFXLEdBQ2ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxZQUFZLElBQ3ZCRixDQUFBQSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsVUFBVSxHQUNuQixDQUFDLFFBQVEsRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNFLFVBQVUsQ0FBQyxDQUFDLEdBQ25DLElBQUk7b0JBQ1YsSUFBSSxDQUFDSixXQUFXLEVBQUU7d0JBQ2hCLE9BQU8sSUFBSTtvQkFDYixDQUFDO29CQUVELE1BQU1LLFlBQVksR0FBRyxJQUFJQyxHQUFHLENBQUNOLFdBQVcsQ0FBQyxDQUFDTyxJQUFJO29CQUM5QyxJQUFJWCxJQUFJLENBQUNZLE1BQU0sS0FBS0gsWUFBWSxFQUFFO3dCQUNoQyxPQUFPLElBQUk7b0JBQ2IsQ0FBQztvQkFFRCxJQUFJVCxJQUFJLENBQUNhLEtBQUssS0FBTSxNQUFNcEIsNkRBQVksQ0FBQzt3QkFBRUcsR0FBRztxQkFBRSxDQUFDLEVBQUc7d0JBQ2hELE9BQU8sSUFBSTtvQkFDYixDQUFDO29CQUVELE1BQU1JLElBQUksQ0FBQ2MsUUFBUSxDQUFDZixXQUFXLEVBQUVnQixTQUFTLElBQUksRUFBRSxDQUFDO29CQUNqRCxPQUFPO3dCQUNMQyxFQUFFLEVBQUVoQixJQUFJLENBQUNpQixPQUFPO3FCQUNqQjtnQkFDSCxFQUFFLE9BQU9DLENBQUMsRUFBRTtvQkFDVixPQUFPLElBQUk7Z0JBQ2IsQ0FBQztZQUNILENBQUM7WUFDRG5CLFdBQVcsRUFBRTtnQkFDWEksT0FBTyxFQUFFO29CQUNQZ0IsS0FBSyxFQUFFLFNBQVM7b0JBQ2hCQyxXQUFXLEVBQUUsS0FBSztvQkFDbEJDLElBQUksRUFBRSxNQUFNO2lCQUNiO2dCQUNETixTQUFTLEVBQUU7b0JBQ1RJLEtBQUssRUFBRSxXQUFXO29CQUNsQkMsV0FBVyxFQUFFLEtBQUs7b0JBQ2xCQyxJQUFJLEVBQUUsTUFBTTtpQkFDYjthQUNGO1lBQ0RDLElBQUksRUFBRSxVQUFVO1NBQ2pCLENBQUM7S0FDSDtJQUVELE9BQU87UUFDTEMsU0FBUyxFQUFFO1lBQ1QsTUFBTUMsT0FBTyxFQUFDLEVBQUVBLE9BQU8sR0FBRUMsS0FBSyxHQUFFLEVBQUU7Z0JBQ2hDRCxPQUFPLENBQUNQLE9BQU8sR0FBR1EsS0FBSyxDQUFDQyxHQUFHO2dCQUMzQkYsT0FBTyxDQUFDRyxJQUFJLEdBQUc7b0JBQ2JMLElBQUksRUFBRUcsS0FBSyxDQUFDQyxHQUFHO2lCQUNoQjtnQkFDRCxPQUFPRixPQUFPO1lBQ2hCLENBQUM7U0FDRjtRQUNELHlEQUF5RDtRQUN6RDNCLFNBQVM7UUFDVCtCLE1BQU0sRUFBRXZCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDdUIsZUFBZTtRQUNuQ0wsT0FBTyxFQUFFO1lBQ1BNLFFBQVEsRUFBRSxLQUFLO1NBQ2hCO0tBQ0Y7QUFDSCxDQUFDO0FBRUQseUVBQXlFO0FBQ3pFLGlEQUFpRDtBQUNsQyxlQUFlQyxJQUFJLENBQUNuQyxHQUFtQixFQUFFb0MsR0FBb0IsRUFBRTtJQUM1RSxNQUFNQyxXQUFXLEdBQUd0QyxjQUFjLENBQUNDLEdBQUcsQ0FBQztJQUV2QyxJQUFJLENBQUNzQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ3ZDLEdBQUcsQ0FBQ3dDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDLEVBQUU7UUFDdENMLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ25DLE9BQU07SUFDUixDQUFDO0lBRUQsTUFBTUMsbUJBQW1CLEdBQ3ZCNUMsR0FBRyxDQUFDNkMsTUFBTSxLQUFLLEtBQUssSUFDcEI3QyxHQUFHLENBQUN3QyxLQUFLLENBQUNDLFFBQVEsQ0FBQ0ssSUFBSSxDQUFDLENBQUNDLEtBQUssR0FBS0EsS0FBSyxLQUFLLFFBQVEsQ0FBQztJQUV4RCxvREFBb0Q7SUFDcEQsSUFBSUgsbUJBQW1CLEVBQUU7UUFDdkJQLFdBQVcsQ0FBQ3BDLFNBQVMsQ0FBQytDLEdBQUcsRUFBRTtJQUM3QixDQUFDO0lBRUQsT0FBTyxNQUFNckQsZ0RBQVEsQ0FBQ0ssR0FBRyxFQUFFb0MsR0FBRyxFQUFFQyxXQUFXLENBQUM7QUFDOUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1ldGhlcmV1bS1zdGFydGVyLWZyb250ZW5kLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz8yZThiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvZGUgaW4gdGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZG9jcy5sb2dpbi54eXovaW50ZWdyYXRpb25zL25leHRhdXRoLmpzXG4vLyB3aXRoIGFkZGVkIHByb2Nlc3MuZW52LlZFUkNFTF9VUkwgZGV0ZWN0aW9uIHRvIHN1cHBvcnQgcHJldmlldyBkZXBsb3ltZW50c1xuLy8gYW5kIHdpdGggYXV0aCBvcHRpb24gbG9naWMgZXh0cmFjdGVkIGludG8gYSAnZ2V0QXV0aE9wdGlvbnMnIGZ1bmN0aW9uIHNvIGl0XG4vLyBjYW4gYmUgdXNlZCB0byBnZXQgdGhlIHNlc3Npb24gc2VydmVyLXNpZGUgd2l0aCAndW5zdGFibGVfZ2V0U2VydmVyU2Vzc2lvbidcbmltcG9ydCB7IEluY29taW5nTWVzc2FnZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBOZXh0QXV0aCwgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tICduZXh0LWF1dGgnXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJ1xuaW1wb3J0IHsgZ2V0Q3NyZlRva2VuIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuaW1wb3J0IHsgU2l3ZU1lc3NhZ2UgfSBmcm9tICdzaXdlJ1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXV0aE9wdGlvbnMocmVxOiBJbmNvbWluZ01lc3NhZ2UpOiBOZXh0QXV0aE9wdGlvbnMge1xuICBjb25zdCBwcm92aWRlcnMgPSBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBzaXdlID0gbmV3IFNpd2VNZXNzYWdlKEpTT04ucGFyc2UoY3JlZGVudGlhbHM/Lm1lc3NhZ2UgfHwgJ3t9JykpXG5cbiAgICAgICAgICBjb25zdCBuZXh0QXV0aFVybCA9XG4gICAgICAgICAgICBwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkwgfHxcbiAgICAgICAgICAgIChwcm9jZXNzLmVudi5WRVJDRUxfVVJMXG4gICAgICAgICAgICAgID8gYGh0dHBzOi8vJHtwcm9jZXNzLmVudi5WRVJDRUxfVVJMfWBcbiAgICAgICAgICAgICAgOiBudWxsKVxuICAgICAgICAgIGlmICghbmV4dEF1dGhVcmwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgbmV4dEF1dGhIb3N0ID0gbmV3IFVSTChuZXh0QXV0aFVybCkuaG9zdFxuICAgICAgICAgIGlmIChzaXdlLmRvbWFpbiAhPT0gbmV4dEF1dGhIb3N0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzaXdlLm5vbmNlICE9PSAoYXdhaXQgZ2V0Q3NyZlRva2VuKHsgcmVxIH0pKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhd2FpdCBzaXdlLnZhbGlkYXRlKGNyZWRlbnRpYWxzPy5zaWduYXR1cmUgfHwgJycpXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBzaXdlLmFkZHJlc3MsXG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICBsYWJlbDogJ01lc3NhZ2UnLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnMHgwJyxcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIH0sXG4gICAgICAgIHNpZ25hdHVyZToge1xuICAgICAgICAgIGxhYmVsOiAnU2lnbmF0dXJlJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJzB4MCcsXG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIG5hbWU6ICdFdGhlcmV1bScsXG4gICAgfSksXG4gIF1cblxuICByZXR1cm4ge1xuICAgIGNhbGxiYWNrczoge1xuICAgICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgICAgc2Vzc2lvbi5hZGRyZXNzID0gdG9rZW4uc3ViXG4gICAgICAgIHNlc3Npb24udXNlciA9IHtcbiAgICAgICAgICBuYW1lOiB0b2tlbi5zdWIsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlc3Npb25cbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBodHRwczovL25leHQtYXV0aC5qcy5vcmcvY29uZmlndXJhdGlvbi9wcm92aWRlcnMvb2F1dGhcbiAgICBwcm92aWRlcnMsXG4gICAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG4gICAgc2Vzc2lvbjoge1xuICAgICAgc3RyYXRlZ3k6ICdqd3QnLFxuICAgIH0sXG4gIH1cbn1cblxuLy8gRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gZWFjaCBvcHRpb24gKGFuZCBhIGZ1bGwgbGlzdCBvZiBvcHRpb25zKSBnbyB0b1xuLy8gaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2NvbmZpZ3VyYXRpb24vb3B0aW9uc1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYXV0aChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICBjb25zdCBhdXRoT3B0aW9ucyA9IGdldEF1dGhPcHRpb25zKHJlcSlcblxuICBpZiAoIUFycmF5LmlzQXJyYXkocmVxLnF1ZXJ5Lm5leHRhdXRoKSkge1xuICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdCYWQgcmVxdWVzdCcpXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBpc0RlZmF1bHRTaWduaW5QYWdlID1cbiAgICByZXEubWV0aG9kID09PSAnR0VUJyAmJlxuICAgIHJlcS5xdWVyeS5uZXh0YXV0aC5maW5kKCh2YWx1ZSkgPT4gdmFsdWUgPT09ICdzaWduaW4nKVxuXG4gIC8vIEhpZGUgU2lnbi1JbiB3aXRoIEV0aGVyZXVtIGZyb20gZGVmYXVsdCBzaWduIHBhZ2VcbiAgaWYgKGlzRGVmYXVsdFNpZ25pblBhZ2UpIHtcbiAgICBhdXRoT3B0aW9ucy5wcm92aWRlcnMucG9wKClcbiAgfVxuXG4gIHJldHVybiBhd2FpdCBOZXh0QXV0aChyZXEsIHJlcywgYXV0aE9wdGlvbnMpXG59XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiZ2V0Q3NyZlRva2VuIiwiU2l3ZU1lc3NhZ2UiLCJnZXRBdXRoT3B0aW9ucyIsInJlcSIsInByb3ZpZGVycyIsImF1dGhvcml6ZSIsImNyZWRlbnRpYWxzIiwic2l3ZSIsIkpTT04iLCJwYXJzZSIsIm1lc3NhZ2UiLCJuZXh0QXV0aFVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9VUkwiLCJWRVJDRUxfVVJMIiwibmV4dEF1dGhIb3N0IiwiVVJMIiwiaG9zdCIsImRvbWFpbiIsIm5vbmNlIiwidmFsaWRhdGUiLCJzaWduYXR1cmUiLCJpZCIsImFkZHJlc3MiLCJlIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJuYW1lIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInRva2VuIiwic3ViIiwidXNlciIsInNlY3JldCIsIk5FWFRBVVRIX1NFQ1JFVCIsInN0cmF0ZWd5IiwiYXV0aCIsInJlcyIsImF1dGhPcHRpb25zIiwiQXJyYXkiLCJpc0FycmF5IiwicXVlcnkiLCJuZXh0YXV0aCIsInN0YXR1cyIsInNlbmQiLCJpc0RlZmF1bHRTaWduaW5QYWdlIiwibWV0aG9kIiwiZmluZCIsInZhbHVlIiwicG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();