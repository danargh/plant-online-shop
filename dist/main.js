/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ (() => {

eval("// let $ = require(\"jquery\");\r\n// import * as $ from \"jquery\";\r\n// let L = require(\"leaflet\");\r\n// module jquery\r\n\r\n// NAVIGATION\r\nconst sections = document.querySelectorAll(\"section[id]\");\r\n\r\nfunction scrollActive() {\r\n   const scrollY = window.pageYOffset;\r\n\r\n   sections.forEach((current) => {\r\n      const sectionHeight = current.offsetHeight,\r\n         sectionTop = current.offsetTop - 58,\r\n         sectionId = current.getAttribute(\"id\");\r\n\r\n      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {\r\n         document\r\n            .querySelector(\".nav__menu a[href*=\" + sectionId + \"]\")\r\n            .classList.add(\"item__text--active\");\r\n      } else {\r\n         document\r\n            .querySelector(\".nav__menu a[href*=\" + sectionId + \"]\")\r\n            .classList.remove(\"item__text--active\");\r\n      }\r\n   });\r\n}\r\nwindow.addEventListener(\"scroll\", scrollActive);\r\n\r\n// SEARCH BAR\r\nlet searchBar = document.querySelector(\".nav__search-bar-label\");\r\nsearchBar.addEventListener(\"click\", function () {\r\n   document\r\n      .querySelector(\".nav__search-bar-input\")\r\n      .classList.toggle(\"nav__search-bar-input--show\");\r\n});\r\n\r\n// UBAH BACKGROUND HEADER SAAT SCROLL\r\nfunction scrollHeader() {\r\n   let header = document.getElementById(\"header\");\r\n   if (this.scrollY >= 80) {\r\n      header.classList.add(\"scroll-header\");\r\n   } else {\r\n      header.classList.remove(\"scroll-header\");\r\n   }\r\n}\r\nwindow.addEventListener(\"scroll\", scrollHeader);\r\n\r\n// ACCORDION\r\nconst accordionItems = document.querySelectorAll(\".accord__items\");\r\n\r\naccordionItems.forEach((item) => {\r\n   const accordionHeader = item.querySelector(\".accord__button\");\r\n\r\n   accordionHeader.addEventListener(\"click\", () => {\r\n      const openItem = document.querySelector(\".accord__content--open\");\r\n\r\n      toggleItem(item);\r\n\r\n      if (openItem && openItem !== item) {\r\n         toggleItem(openItem);\r\n      }\r\n   });\r\n});\r\n\r\nconst toggleItem = (item) => {\r\n   const accordionContent = item.querySelector(\".accord__text\");\r\n\r\n   if (item.classList.contains(\"accord__content--open\")) {\r\n      accordionContent.removeAttribute(\"style\");\r\n      item.classList.remove(\"accord__content--open\");\r\n   } else {\r\n      accordionContent.style.height = accordionContent.scrollHeight + \"px\";\r\n      item.classList.add(\"accord__content--open\");\r\n   }\r\n};\r\n\r\n// // DROPDOWN-USER\r\n// let toggleUser = document.querySelector(\".nav__user-toggle\");\r\n// toggleUser.addEventListener(\"click\", function () {\r\n//    document\r\n//       .querySelector(\".nav__user-dropdown\")\r\n//       .classList.toggle(\"nav__user-dropdown--show\");\r\n// });\r\n\r\n// MAPS\r\nlet map = L.map(\"contact-us__maps\").setView([51.505, -0.09], 13);\r\nL.tileLayer(\r\n   \"https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=yV54Ll0lWZg3f0S6ceFN\",\r\n   {\r\n      attribution:\r\n         '<a href=\"https://www.maptiler.com/copyright/\" target=\"_blank\">&copy; MapTiler</a> <a href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\">&copy; OpenStreetMap contributors</a>',\r\n      maxZoom: 18,\r\n      id: \"mapbox/streets-v11\",\r\n      tileSize: 512,\r\n      zoomOffset: -1,\r\n   }\r\n).addTo(map);\r\n\r\nvar marker = L.marker([51.5, -0.09]).addTo(map);\r\n\r\n// SCROLL REVEAL ANIMATION\r\n// animasi agar saat buka website, terdapat animasi yang memunculkan konten\r\nconst sr = ScrollReveal({\r\n   origin: \"top\",\r\n   distance: \"60px\",\r\n   duration: 2500,\r\n   delay: 400,\r\n   // reset: true\r\n});\r\n\r\nsr.reveal(`.home__header, .faqs`);\r\nsr.reveal(`.home__bg`, {\r\n   delay: 500,\r\n});\r\nsr.reveal(`.home__social`, {\r\n   delay: 600,\r\n});\r\nsr.reveal(`.about-us__img, .contact-us__content`, {\r\n   origin: \"left\",\r\n});\r\nsr.reveal(`.about-us__header, .contact-us__header`, {\r\n   origin: \"right\",\r\n});\r\nsr.reveal(`.product__card, .footer, .category__container`, {\r\n   interval: 100,\r\n});\r\n\n\n//# sourceURL=webpack://front-end/./main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./main.js"]();
/******/ 	
/******/ })()
;