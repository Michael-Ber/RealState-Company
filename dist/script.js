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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./src/assets/js/modules/tabs.js");
/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/carousel */ "./src/assets/js/modules/carousel.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/form */ "./src/assets/js/modules/form.js");



window.addEventListener('DOMContentLoaded', () => {
  const mainTab = new _modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"]('.tab__item', '.tab__content', 'tab__item_active', 'tab__content_active', '.tab__item_img');
  mainTab.init();
  const slaveTab = new _modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"]('.box', '.tab__inner_content', 'box_active', 'tab__inner_content_active');
  slaveTab.init();
  const carousel = new _modules_carousel__WEBPACK_IMPORTED_MODULE_1__["default"]('.intro__carousel_film', '.intro__carousel_item', 'intro__carousel_item_active', '.intro__carousel_dot', 'intro__carousel_dot_active');
  carousel.init();
  const form1 = new _modules_form__WEBPACK_IMPORTED_MODULE_2__["default"]('.form__login', 'input');
  form1.init();
  const form2 = new _modules_form__WEBPACK_IMPORTED_MODULE_2__["default"]('.form__subscribe', 'input');
  form2.init();
});

/***/ }),

/***/ "./src/assets/js/modules/carousel.js":
/*!*******************************************!*\
  !*** ./src/assets/js/modules/carousel.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
class Carousel {
  constructor(wrapper, items, itemActive, dots, dotActive) {
    this.wrapper = document.querySelector(wrapper);
    this.items = document.querySelectorAll(items);
    this.itemActive = itemActive;
    this.dots = document.querySelectorAll(dots);
    this.dotActive = dotActive;
    this.filmLength = +window.getComputedStyle(this.wrapper).width.slice(0, -2);
    this.slideLength = +window.getComputedStyle(this.items[0]).width.slice(0, -2);
    this.offset = 0;
    this.slideIndex = 2;
  }

  removeDotActive() {
    this.dots.forEach(dot => {
      dot.classList.remove(this.dotActive);
    });
  }

  addDotActive(i) {
    this.dots[i].classList.add(this.dotActive);
  }

  bindTriggers() {
    this.dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        this.moveToDot(i);
        this.slideIndex = i;
        this.removeDotActive();
        this.addDotActive(i);
      });
    });
  }

  moveToDot(i) {
    this.offset = this.slideLength * i;
    this.wrapper.style.transform = `translateX(-${this.offset}px)`;
  }

  init() {
    this.moveToDot(this.slideIndex);
    this.bindTriggers();
  }

}

/***/ }),

/***/ "./src/assets/js/modules/form.js":
/*!***************************************!*\
  !*** ./src/assets/js/modules/form.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
class Form {
  constructor(selector, inputs) {
    this.form = document.querySelector(selector);
    this.inputs = this.form.querySelectorAll(inputs);
  }

  setRequiredFields() {
    console.log(this.inputs);
    this.inputs.forEach(input => {
      input.setAttribute('required', true);
    });
  }

  sendForm() {
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      let formData = new FormData(this.form);
      this.postData('./assets/server.php', formData).then(res => console.log(res)).catch(() => console.log('error'));
    });
  }

  async postData(url, data) {
    const res = await fetch(url, {
      method: 'POST',
      body: data
    });
    return await res.text();
  }

  init() {
    this.setRequiredFields();
    this.sendForm();
  }

}

/***/ }),

/***/ "./src/assets/js/modules/tabs.js":
/*!***************************************!*\
  !*** ./src/assets/js/modules/tabs.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tabs; });
class Tabs {
  constructor(items, content, itemActiveClass, contentActiveClass, img) {
    this.item = document.querySelectorAll(items);
    this.content = document.querySelectorAll(content);
    this.itemActiveClass = itemActiveClass;
    this.contentActiveClass = contentActiveClass;
    this.img = document.querySelector(img);
  }

  removeActive() {
    this.item.forEach(item => {
      item.classList.remove(this.itemActiveClass);
    });
    this.content.forEach(content => {
      content.classList.remove(this.contentActiveClass);
    });
  }

  addActive(element, activeClass) {
    element.classList.add(activeClass);
  }

  bindTriggers() {
    this.item.forEach((item, i) => {
      item.addEventListener('click', () => {
        this.removeActive();
        this.addActive(item, this.itemActiveClass);
        this.addActive(this.content[i], this.contentActiveClass);

        if (this.img) {
          let distance = +item.getAttribute('data-tab');
          this.img.style.left = distance + 'px';
          this.img.style.transition = 'all .5s';
        }
      });
    });
  }

  init() {
    this.bindTriggers();
  }

}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map