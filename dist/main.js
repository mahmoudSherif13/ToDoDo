/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/classes/list.js":
/*!*****************************!*\
  !*** ./src/classes/list.js ***!
  \*****************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"List\", function() { return List; });\n/* harmony import */ var _interfaces_storgeInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/storgeInterface */ \"./src/interfaces/storgeInterface.js\");\n\n\n\nlet List = (title)=>{\n    let _title = title;\n    let _tasks = {};\n    let _id = Object(_interfaces_storgeInterface__WEBPACK_IMPORTED_MODULE_0__[\"genListId\"])();\n\n    let getTitle = ()=>_title;\n\n    let getTasks = ()=>_tasks;\n    let addTask = (task)=> _tasks[task.getId()] = task;\n    let deleteTask = (id)=> delete _tasks[id];\n\n    let getId = ()=>_id;\n\n    return{\n        getTitle,\n        getTasks,\n        addTask,\n        deleteTask,\n        getId\n    };\n};\n\n//# sourceURL=webpack:///./src/classes/list.js?");

/***/ }),

/***/ "./src/classes/task.js":
/*!*****************************!*\
  !*** ./src/classes/task.js ***!
  \*****************************/
/*! exports provided: SubTask, Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SubTask\", function() { return SubTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Task\", function() { return Task; });\n/* harmony import */ var _interfaces_storgeInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/storgeInterface */ \"./src/interfaces/storgeInterface.js\");\n\n\nlet SubTask = (title)=>{\n    let _title = title;\n    let _checked = false;\n    let _id = Object(_interfaces_storgeInterface__WEBPACK_IMPORTED_MODULE_0__[\"genSubTaskId\"])();\n\n    let getTitle = ()=>_title;\n    let setSubTitle = (title)=>_title = title;\n\n    let getChecked = ()=>_checked;\n    let setComplete = ()=>_checked = true;\n    let setActive = ()=>_checked = false;\n\n    let getId = ()=>_id;\n\n    return{\n        getTitle,\n        setSubTitle,\n        getChecked,\n        setActive,\n        setComplete,\n        getId\n    }\n};\n\nlet Task = (title)=>{\n\n    let _id = Object(_interfaces_storgeInterface__WEBPACK_IMPORTED_MODULE_0__[\"genTaskId\"])();\n    let _title = title;\n    let _description;\n    let _dueDate;\n    let _priority = 2;\n    let _notes;\n    let _subTasksList = {};\n    let _checked = false ;\n\n    let getId = ()=>_id;\n\n    let getTitle = ()=>_title;\n    let setTitle = (title)=>_title = title;\n    \n    let getDescription = ()=>_description;\n    let setDescription = (description)=> _description = description; \n\n    let getDueDate = ()=>_dueDate;\n    let clearDueDate = ()=> _dueDate = undefined;\n    let setDueDate = (date)=>_dueDate = date;\n    \n    let getPriority = ()=>_priority;\n    let setPriority = (priority)=>{\n        if(1 <= priority && priority <= 3){\n            _priority = priority;\n        }\n    };\n\n    let getNotes = ()=>_notes;\n    let setNotes = (notes)=>_notes = notes;\n\n    let getChecklist = ()=>_subTasksList;\n    let addSubTask = (subTask)=>_subTasksList[subTask.getId()] = subTask;\n    let deleteSubTask = (checklistItemId)=> delete _subTasksList[checklistItemId];\n\n    let getChecked = ()=>_checked;\n    let setComplete = ()=>_checked = true;\n    let setActive = ()=>_checked = false;\n\n    return{\n        getId,\n        getTitle,\n        setTitle,\n        getDescription,\n        setDescription,\n        getDueDate,\n        clearDueDate,\n        setDueDate,\n        getPriority,\n        setPriority,\n        getNotes,\n        setNotes,\n        getChecklist,\n        addSubTask,\n        deleteSubTask,\n        getChecked,\n        setComplete,\n        setActive\n    };\n};\n\n\n//# sourceURL=webpack:///./src/classes/task.js?");

/***/ }),

/***/ "./src/handlers/handle.js":
/*!********************************!*\
  !*** ./src/handlers/handle.js ***!
  \********************************/
/*! exports provided: createTask, init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTask\", function() { return createTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _interfaces_taskView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/taskView */ \"./src/interfaces/taskView.js\");\n/* harmony import */ var _classes_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/list */ \"./src/classes/list.js\");\n/* harmony import */ var _interfaces_listView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/listView */ \"./src/interfaces/listView.js\");\n/* harmony import */ var _classes_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/task */ \"./src/classes/task.js\");\n\n\n\n\n\nlet lists = {};\nlet tasks = {};\n\n\nlet listsHolder = document.getElementById(\"listsHolder\");\n\n\nfunction createNewList(title) {\n    const list = Object(_classes_list__WEBPACK_IMPORTED_MODULE_1__[\"List\"])(title);\n    const listView = Object(_interfaces_listView__WEBPACK_IMPORTED_MODULE_2__[\"getListView\"])(list);\n\n    lists[list.getId()] = list;\n    listsHolder.append(listView);\n}\n\n\nfunction removeList(listId) {\n    // delete the view\n    document.querySelector('#list.' + listId).remove();\n\n    // delete the list \n    delete lists[listId];\n}\n\n// tasks Function\n\nfunction createTask(title, listId) {\n    const task = Object(_classes_task__WEBPACK_IMPORTED_MODULE_3__[\"Task\"])(title);\n    const taskView = Object(_interfaces_taskView__WEBPACK_IMPORTED_MODULE_0__[\"getTaskView\"])(task);\n    const listTasks = document.getElementById(listId).querySelector(\".tasks\");\n\n    tasks[task.getId()] = task;\n    listTasks.append(taskView);\n}\n\nfunction removeTask(taskId) {\n    delete tasks[taskId];\n}\n\nfunction init() {\n    const newListBtn = document.getElementById('newList');\n    const titleView = document.getElementById('listTitle');\n    newListBtn.addEventListener('click', () => {\n        const title = titleView.value;\n        createNewList(title);\n    });\n}\n\n\n//# sourceURL=webpack:///./src/handlers/handle.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _interfaces_storgeInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces/storgeInterface */ \"./src/interfaces/storgeInterface.js\");\n/* harmony import */ var _handlers_handle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/handle */ \"./src/handlers/handle.js\");\n\n\nObject(_interfaces_storgeInterface__WEBPACK_IMPORTED_MODULE_0__[\"load\"])();\nwindow.setInterval(()=>{\n    Object(_interfaces_storgeInterface__WEBPACK_IMPORTED_MODULE_0__[\"save\"])();\n},800);\nObject(_handlers_handle__WEBPACK_IMPORTED_MODULE_1__[\"init\"])();\nconsole.log(\"testWebPack4\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/interfaces/listView.js":
/*!************************************!*\
  !*** ./src/interfaces/listView.js ***!
  \************************************/
/*! exports provided: getListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getListView\", function() { return getListView; });\n/* harmony import */ var _handlers_handle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers/handle */ \"./src/handlers/handle.js\");\n\nfunction newTaskBtn(id) {\n    console.log(id);\n    let title = prompt(\"task title\");\n    Object(_handlers_handle__WEBPACK_IMPORTED_MODULE_0__[\"createTask\"])(title, id);\n}\nfunction getListView(list) {\n    // list\n    const listView = document.createElement(\"div\");\n    listView.classList.add(\"list\");\n    listView.id = list.getId();\n\n    // title\n    const titleView = document.createElement(\"div\");\n    titleView.classList.add(\"list-name\");\n    titleView.innerText = list.getTitle();\n    listView.append(titleView);\n\n    // tasks\n    const tasksView = document.createElement(\"div\");\n    tasksView.classList.add(\"tasks\");\n    listView.append(tasksView);\n\n    // newTask\n    const newTaskView = document.createElement(\"div\");\n    newTaskView.classList.add(\"newTask\");\n    newTaskView.innerText = \"+\";\n    newTaskView.addEventListener('click', (e) => newTaskBtn(e.target.parentElement.id));\n    listView.append(newTaskView);\n\n    return listView;\n}\n\n//# sourceURL=webpack:///./src/interfaces/listView.js?");

/***/ }),

/***/ "./src/interfaces/storgeInterface.js":
/*!*******************************************!*\
  !*** ./src/interfaces/storgeInterface.js ***!
  \*******************************************/
/*! exports provided: lists, genTaskId, genSubTaskId, genListId, save, load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lists\", function() { return lists; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"genTaskId\", function() { return genTaskId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"genSubTaskId\", function() { return genSubTaskId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"genListId\", function() { return genListId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"save\", function() { return save; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"load\", function() { return load; });\nlet taskId = 0;\nlet subTaskId = 0;\nlet listId = 0;\n\nlet lists = {};\n\nlet keys = {\n    TASK_ID:\"taskId\",\n    SUB_TASK_ID:\"subTaskId\",\n    LIST_ID:\"listId\",\n    LIST:\"list\"\n}\n\nfunction genTaskId(){\n    return taskId++;\n}\n\nfunction genSubTaskId(){\n    return subTaskId++;\n}\n\nfunction genListId(){\n    return listId++;\n}\n\nfunction save(){\n    localStorage.setItem(keys.TASK_ID, JSON.stringify(taskId));\n    localStorage.setItem(keys.SUB_TASK_ID, JSON.stringify(subTaskId));\n    localStorage.setItem(keys.LIST_ID, JSON.stringify(listId));\n    localStorage.setItem(keys.LIST, JSON.stringify(lists));\n}\n\nfunction load(){\n    if(!localStorage.getItem(keys.LIST)){\n        return;\n    }\n    taskId = JSON.parse(localStorage.getItem(keys.TASK_ID));\n    subTaskId = JSON.parse(localStorage.getItem(keys.SUB_TASK_ID));\n    listId = JSON.parse(localStorage.getItem(keys.LIST_ID));\n    lists = JSON.parse(localStorage.getItem(keys.LIST));\n    console.log(`gamed ${taskId}\\n`);\n}\n\n//# sourceURL=webpack:///./src/interfaces/storgeInterface.js?");

/***/ }),

/***/ "./src/interfaces/taskView.js":
/*!************************************!*\
  !*** ./src/interfaces/taskView.js ***!
  \************************************/
/*! exports provided: getTaskView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTaskView\", function() { return getTaskView; });\nconst priorityColors = [\"green\", \"#c9c300\", \"red\"];\n\nconst getCompletedTaskView = (todo) => {\n    const row = document.createElement('li');\n    row.classList.add(\"Task\");\n\n    const title = document.createElement(\"span\");\n    title.classList.add(\"title\");\n    title.setAttribute(\"data-id\", todo.getId());\n\n    title.style.textDecoration = \"line-through\";\n    title.innerText = todo.getTitle();\n\n    row.append(title);\n    return row;\n};\n\nconst getSubTasksViews = (todo) => {\n    const subList = document.createElement(\"ul\");\n    let subTasks = todo.getChecklist();\n\n    for (let subTaskKey in subTasks) {\n        let subTask = subTasks[subTaskKey];\n        const subTaskView = document.createElement(\"li\");\n        subTaskView.classList.add(\"Task\");\n        subTaskView.innerText = subTask.getTitle();\n        subList.append(subTaskView);\n    }\n    return subList;\n};\n\nfunction getTaskView(task) {\n    // task \n    const taskView = document.createElement('div');\n    taskView.classList.add(\"task\");\n    taskView.setAttribute(\"id\", task.getId());\n\n    // Priority\n    /// TODO : set the color based on the Priority\n    const PriorityView = document.createElement('span');\n    PriorityView.classList.add('pre');\n    taskView.append(PriorityView);\n\n    // title\n    const titleView = document.createElement('div');\n    titleView.innerText = task.getTitle();\n    taskView.append(titleView);\n\n    return taskView;\n};\n\n\n//# sourceURL=webpack:///./src/interfaces/taskView.js?");

/***/ })

/******/ });