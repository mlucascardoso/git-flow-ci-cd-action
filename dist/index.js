module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 109:
/***/ (function() {


// import { getInput, info } from '@actions/core';
// import { context, getOctokit } from '@actions/github';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// const token = getInput('github_token');
// const client = getOctokit(token);
// interface Branches {
//     current: string;
//     main: string;
//     development: string;
// }
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    // const branches = getBranches();
    // const gitFlowPrefixes = getPrefixes();
    // if (branches.current.includes(gitFlowPrefixes.feature)) {
    //     await handleFeatureFinish(branches);
    // }
});
// const getBranches = (): Branches => {
//     return {
//         current: getInput('current_branch'),
//         main: getInput('master_branch'),
//         development: getInput('development_branch'),
//     };
// };
// const handleFeatureFinish = async (branches: Branches) => {
//     await merge(branches.current, branches.development);
//     await deleteBranch(branches.current);
// };
// const getPrefixes = () => {
//     return {
//         bugfix: getInput('bugfix_branch_prefix'),
//         feature: getInput('feature_branch_prefix'),
//         hotfix: getInput('hotfix_branch_prefix'),
//         release: getInput('release_branch_prefix'),
//         support: getInput('support_branch_prefix'),
//         tag: getInput('tag_prefix'),
//     };
// };
// const merge = async (currentBranch: string, toBranch: string):
//  Promise<any> => {
//     info(`merge branch "${currentBranch}" to branch "${toBranch}"`);
//     const response = await client.repos.merge({
//         ...context.repo,
//         base: toBranch,
//         head: currentBranch,
//     });
//     const sha = response.data.sha;
//     info(`sha ${sha}`);
//     return sha;
// };
// const deleteBranch = async (currentBranch: string): Promise<void> => {
//     await client.git.deleteRef({
//         owner: context.actor,
//         repo: context.repo.repo,
//         ref: `heads/${currentBranch}`,
//     });
// };
main()
    .catch((err) => {
    console.error(err);
    console.error(err.stack);
    process.exit(err.code || -1);
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(109);
/******/ })()
;