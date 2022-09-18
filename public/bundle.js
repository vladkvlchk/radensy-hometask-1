/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/item/actions/archive.js":
/*!************************************************!*\
  !*** ./src/components/item/actions/archive.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../.. */ \"./src/index.js\");\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/data */ \"./src/data/data.js\");\n\n\n\nconst addArchives = () => {\n    [...document.getElementsByClassName('btnArchive')].forEach(elem => {\n        elem.addEventListener('click', () => onClickArchive(Number(elem.id)));\n    });\n    [...document.getElementsByClassName('btnUnarchive')].forEach(elem => {\n        elem.addEventListener('click', () => onClickUnarchive(Number(elem.id)));\n    });\n};\n\nconst onClickArchive = (id) => {\n    (0,_data_data__WEBPACK_IMPORTED_MODULE_1__.archiveItem)(id);\n    (0,___WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\nconst onClickUnarchive = (id) => {\n    ;(0,_data_data__WEBPACK_IMPORTED_MODULE_1__.unarchiveItem)(id);\n    (0,___WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addArchives);\n\n//# sourceURL=webpack://radency-hometask-1/./src/components/item/actions/archive.js?");

/***/ }),

/***/ "./src/components/item/actions/delete.js":
/*!***********************************************!*\
  !*** ./src/components/item/actions/delete.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../.. */ \"./src/index.js\");\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/data */ \"./src/data/data.js\");\n\n\n\nconst addDeletes = () => {\n    [...document.getElementsByClassName('btnDelete')].forEach(elem => {\n        elem.addEventListener('click', () => onClickDelete(Number(elem.id)));\n    });\n}\n\nconst onClickDelete = (id) => {\n    ;(0,_data_data__WEBPACK_IMPORTED_MODULE_1__.deleteItem)(id);\n    (0,___WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDeletes);\n\n//# sourceURL=webpack://radency-hometask-1/./src/components/item/actions/delete.js?");

/***/ }),

/***/ "./src/components/item/actions/edit.js":
/*!*********************************************!*\
  !*** ./src/components/item/actions/edit.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/data */ \"./src/data/data.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modal */ \"./src/components/modal.js\");\n\n\n\nconst addEdits = () => {\n    [...document.getElementsByClassName('btnEdit')].forEach(elem => {\n        elem.addEventListener('click', () => onClickBtnEditItem(Number(elem.id)));\n    });\n}\n\nconst onClickBtnEditItem = (id) => {\n    ;(0,_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)();\n    \n    const {name, category, content} = _data_data__WEBPACK_IMPORTED_MODULE_0__.items.find(obj => obj.id === id);\n    \n    const nameInForm = document.getElementById('nameInForm');\n    const categoryInForm = document.getElementById('categoryInForm');\n    const contentInForm = document.getElementById('contentInForm');\n    \n    nameInForm.value = name;\n    categoryInForm.value = category;\n    contentInForm.value = content;\n\n    (0,_data_data__WEBPACK_IMPORTED_MODULE_0__.deleteItem)(id);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addEdits);\n\n\n//# sourceURL=webpack://radency-hometask-1/./src/components/item/actions/edit.js?");

/***/ }),

/***/ "./src/components/item/actions/index.js":
/*!**********************************************!*\
  !*** ./src/components/item/actions/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ \"./src/components/item/actions/edit.js\");\n/* harmony import */ var _archive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./archive */ \"./src/components/item/actions/archive.js\");\n/* harmony import */ var _delete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete */ \"./src/components/item/actions/delete.js\");\n\n\n\n\nconst addListeners = () => {\n    (0,_edit__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_archive__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,_delete__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addListeners);\n\n//# sourceURL=webpack://radency-hometask-1/./src/components/item/actions/index.js?");

/***/ }),

/***/ "./src/components/item/archiveTemplate.js":
/*!************************************************!*\
  !*** ./src/components/item/archiveTemplate.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst taskUrl = './media/icons/task.svg';\nconst ideaUrl = './media/icons/idea.svg';\nconst randomThoughtUrl = './media/icons/randomThought.svg';\nconst quoteUrl = './media/icons/quote.svg';\n\nconst archiveTemplate = ({id, name, created, category, content, dates}) => {\n    const imageUrl = category === \"Task\" ? taskUrl :\n                    category === \"Idea\" ? ideaUrl :\n                    category === \"Random Thought\" ? randomThoughtUrl :\n                    category === \"Quote\" ? quoteUrl : false;\n\n    return `\n    <div class=\"item itemArchive\">\n        <div class=\"titleSmall\">\n            <div class=\"itemImage\">\n                ${imageUrl ? `<img src=\"${imageUrl}\">` : ''}\n            </div>\n        </div>\n        <div class=\"titleBig\">${name ? name : '[no name]'}</div>\n        <div class=\"titleMiddle\">${created}</div>\n        <div class=\"titleMiddle\">${category}</div>\n        <div class=\"titleMiddle\">${content ? content : '[no content]'}</div>\n        <div class=\"titleBig\">${dates.join(', ')}</div>\n        <div class=\"titleMiddle\">\n            <div class=\"actions\">\n                <button class=\"action btnUnarchive\" id=\"${id}\">\n                    <img src=\"./media/icons/unarchive.svg\" />\n                </button>\n            </div>\n        </div>\n    </div>`\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (archiveTemplate);\n\n//# sourceURL=webpack://radency-hometask-1/./src/components/item/archiveTemplate.js?");

/***/ }),

/***/ "./src/components/item/index.js":
/*!**************************************!*\
  !*** ./src/components/item/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"archiveTemplate\": () => (/* reexport safe */ _archiveTemplate__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"itemTemplate\": () => (/* reexport safe */ _itemTemplate__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"summaryTemplate\": () => (/* reexport safe */ _summaryTemplate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _itemTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itemTemplate */ \"./src/components/item/itemTemplate.js\");\n/* harmony import */ var _archiveTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./archiveTemplate */ \"./src/components/item/archiveTemplate.js\");\n/* harmony import */ var _summaryTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./summaryTemplate */ \"./src/components/item/summaryTemplate.js\");\n\n\n\n\n//# sourceURL=webpack://radency-hometask-1/./src/components/item/index.js?");

/***/ }),

/***/ "./src/components/item/itemTemplate.js":
/*!*********************************************!*\
  !*** ./src/components/item/itemTemplate.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst taskUrl = './media/icons/task.svg';\nconst ideaUrl = './media/icons/idea.svg';\nconst randomThoughtUrl = './media/icons/randomThought.svg';\nconst quoteUrl = './media/icons/quote.svg';\n\nconst itemTemplate = ({id, name, created, category, content, dates}) => {\n    const imageUrl = category === \"Task\" ? taskUrl :\n                    category === \"Idea\" ? ideaUrl :\n                    category === \"Random Thought\" ? randomThoughtUrl :\n                    category === \"Quote\" ? quoteUrl : false;\n\n    return `\n    <div class=\"item\">\n        <div class=\"titleSmall\">\n            <div class=\"itemImage\">\n                ${imageUrl ? `<img src=\"${imageUrl}\">` : ''}            \n            </div>\n        </div>\n        <div class=\"titleBig\">${name ? name : '[no name]'}</div>\n        <div class=\"titleMiddle\">${created}</div>\n        <div class=\"titleMiddle\">${category}</div>\n        <div class=\"titleMiddle\">${content ? content : '[no content]'}</div>\n        <div class=\"titleBig\">${dates.join(', ')}</div>\n        <div class=\"titleMiddle\">\n            <div class=\"actions\">\n                <button class=\"action btnEdit\" id=\"${id}\">\n                    <img src=\"./media/icons/edit.svg\" />\n                </button>\n                <button class=\"action btnArchive\" id=\"${id}\">\n                    <img src=\"./media/icons/archive.svg\" />\n                </button>\n                <button class=\"action btnDelete\" id=\"${id}\">\n                    <img src=\"./media/icons/delete.svg\" />\n                </button>\n            </div>\n        </div>\n    </div>`\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemTemplate);\n\n//# sourceURL=webpack://radency-hometask-1/./src/components/item/itemTemplate.js?");

/***/ }),

/***/ "./src/components/item/summaryTemplate.js":
/*!************************************************!*\
  !*** ./src/components/item/summaryTemplate.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst taskUrl = './media/icons/task.svg';\nconst ideaUrl = './media/icons/idea.svg';\nconst randomThoughtUrl = './media/icons/randomThought.svg';\nconst quoteUrl = './media/icons/quote.svg';\n\nconst summaryTemplate = ({category, active, archived}) => {\n    const imageUrl = category === \"Task\" ? taskUrl :\n                    category === \"Idea\" ? ideaUrl :\n                    category === \"Random Thought\" ? randomThoughtUrl :\n                    category === \"Quote\" ? quoteUrl : false;\n\n    return `\n    <div class=\"item\">\n        <div class=\"titleSmall\">\n            <div class=\"itemImage\">\n                ${imageUrl ? `<img src=\"${imageUrl}\">` : ''}\n            </div>\n        </div>\n        <div class=\"titleBig\">${category}</div>\n        <div class=\"titleBig\"></div>\n        <div class=\"titleMiddle\">${active}</div>\n        <div class=\"titleMiddle\">${archived}</div>\n    </div>`\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (summaryTemplate);\n\n//# sourceURL=webpack://radency-hometask-1/./src/components/item/summaryTemplate.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"onClickBtnSaveItem\": () => (/* binding */ onClickBtnSaveItem),\n/* harmony export */   \"openModal\": () => (/* binding */ openModal)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/data.js */ \"./src/data/data.js\");\n\n\n\nconst modal = document.querySelector('.modal');\nconst overlay = document.getElementById('overlay');\nconst btnSaveItem = document.getElementById('btnSaveItem');\n\nconst openModal = () => {\n    overlay.classList.add('active');\n    modal.classList.add('active');\n}\n\nconst closeModal = () => {\n    document.getElementById('nameInForm').value = '';\n    document.getElementById('contentInForm').value = '';\n\n    modal.classList.remove('active');\n    overlay.classList.remove('active');\n}\n\nbtnSaveItem.addEventListener('click', () => onClickBtnSaveItem());\n\nconst onClickBtnSaveItem = () => {\n    try{\n        const name = document.getElementById('nameInForm').value;\n        const category = document.getElementById('categoryInForm').value;\n        const content = document.getElementById('contentInForm').value;\n        const date = new Date();\n        const created = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;\n        const id = Math.floor(Math.random() * 1000000);\n        const dates = [];\n        \n        for(let i = 0; i < content.length; i++){// looking for dates\n            const match = content.slice(i).match(/([0-3]?[0-9][\\/\\.][0-3]?[0-9][\\/\\.][1-9][0-9][0-9][0-9])/);\n            \n            if(match){\n                dates.push(match[0]);\n                i += match.index + 7;\n            } else { break }\n        }\n\n        if(validationNewNote({id, name, content})){\n            _data_data_js__WEBPACK_IMPORTED_MODULE_1__.items.push({id, name, created, category, content, dates});\n            (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            closeModal();\n        } else {\n            alert(\"Invalid note!\");\n        }\n    } catch(e){\n        alert(\"Can't save this note\");\n        console.log(e);\n    }\n}\n\nfunction validationNewNote({id, name, content}){\n    if(_data_data_js__WEBPACK_IMPORTED_MODULE_1__.items.find(obj => obj.id === id)) return false\n    if(!name) return false\n    if(!content) return false\n\n    return true\n}\n\n//# sourceURL=webpack://radency-hometask-1/./src/components/modal.js?");

/***/ }),

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"archive\": () => (/* binding */ archive),\n/* harmony export */   \"archiveItem\": () => (/* binding */ archiveItem),\n/* harmony export */   \"deleteItem\": () => (/* binding */ deleteItem),\n/* harmony export */   \"getSummaries\": () => (/* binding */ getSummaries),\n/* harmony export */   \"items\": () => (/* binding */ items),\n/* harmony export */   \"unarchiveItem\": () => (/* binding */ unarchiveItem)\n/* harmony export */ });\nlet items = [\n    {\n        id: 1,\n        name: 'Shopping list',\n        created: '20/7/2021',\n        category: 'Task',\n        content: 'Tomatoes, bread',\n        dates: []\n    },\n    {\n        id: 2,\n        name: 'The Theory of Evolution',\n        created: '27/7/2021',\n        category: 'Random Thought',\n        content: 'The Theory of Evolution is one of the best-substantiated theories in the history of science',\n        dates: []\n    },\n    {\n        id: 3,\n        name: 'New Feature',\n        created: '5/4/2021',\n        category: 'Idea',\n        content: 'Implement new features on POS terminals',\n        dates: []\n    },\n    {\n        id: 4,\n        name: 'William Gaddies',\n        created: '7/4/2021',\n        category: 'Quote',\n        content: \"Power doesn't come to those who were born strongest, or fastest, or smartest. No. It comes to those who will do anything to achieve it\",\n        dates: []\n    },\n    {\n        id: 5,\n        name: 'Books',\n        created: '15/4/2021',\n        category: 'Task',\n        content: \"The Lean Startup\",\n        dates: []\n    },\n    {\n        id: 6,\n        name: 'Dentist',\n        created: '3/5/2021',\n        category: 'Task',\n        content: \"I'm gonna have a dentist appointment on the 3/5/2021, I moved it from 7/8/2022\",\n        dates: ['3/5/2021', '7/8/2022']\n    },\n    {\n        id: 7,\n        name: 'Motivation',\n        created: '31/5/2022',\n        category: 'Quote',\n        content: \"The World belongs to those who show up\",\n        dates: []\n    }\n];\n\nlet archive = [\n    {\n        id: 8,\n        name: 'George C. Marshall',\n        created: '30/7/2022',\n        category: 'Quote',\n        content: \"Don't look back. Look forward to your next objective\",\n        dates: []\n    }\n];\n\nconst deleteItem = (id) => {\n    items = items.filter(obj => obj.id !== id);\n}\n\nconst archiveItem = (id) => {\n    archive.push(items.find(obj => obj.id === id));\n    deleteItem(id);\n}\n\nconst unarchiveItem = (id) => {\n    items.push(archive.find(obj => obj.id === id));\n    archive = archive.filter(obj => obj.id !== id);\n}\n\nconst getSummaries = () => {\n    const summaries = [];\n\n    sumOfCategory(\"Task\");\n    sumOfCategory(\"Random Thought\");\n    sumOfCategory(\"Idea\");\n    sumOfCategory(\"Quote\");\n\n    function sumOfCategory(category){\n        const active = items.reduce((count, current) => {\n            return current.category === category ? count + 1 : count\n        }, 0);\n        const archived = archive.reduce((count, current) => {\n            return current.category === category ? count + 1 : count\n        }, 0);\n\n        if(active || archived){\n            summaries.push({category, active, archived});\n        }\n    }\n\n    return summaries\n}\n\n//# sourceURL=webpack://radency-hometask-1/./src/data/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/data */ \"./src/data/data.js\");\n/* harmony import */ var _components_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/item */ \"./src/components/item/index.js\");\n/* harmony import */ var _components_item_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/item/actions */ \"./src/components/item/actions/index.js\");\n/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modal */ \"./src/components/modal.js\");\n\n\n\n\n\nconst allItems = document.getElementById('allItems');\nconst archives = document.getElementById('archives');\nconst summary = document.getElementById('summary');\nconst addItemBtn = document.getElementById('addItemBtn');\n\nconst render = () => {\n    //filling the tables\n    allItems.innerHTML = _data_data__WEBPACK_IMPORTED_MODULE_0__.items.map(obj => (0,_components_item__WEBPACK_IMPORTED_MODULE_1__.itemTemplate)(obj)).join('');\n    archives.innerHTML = _data_data__WEBPACK_IMPORTED_MODULE_0__.archive.map(obj => (0,_components_item__WEBPACK_IMPORTED_MODULE_1__.archiveTemplate)(obj)).join('');\n    summary.innerHTML = (0,_data_data__WEBPACK_IMPORTED_MODULE_0__.getSummaries)().map(obj => (0,_components_item__WEBPACK_IMPORTED_MODULE_1__.summaryTemplate)(obj)).join('');\n\n    //adding event listeners\n    (0,_components_item_actions__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    addItemBtn.addEventListener('click', () => (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)()); \n}\n\n//logic\nrender();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://radency-hometask-1/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;