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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/icon.react/0.2.2";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./doc/list.demo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var iconData = __webpack_require__("./lib/data.js");
iconData.render(function (item) {
    if (item.type === 'classify') {
        document.write('<h2>' + item.name + '</h2>');
    } else {
        document.write('\n        <span class="icon" >\n            <span class="fi fi-' + item.name + '" ></span>\n            <span class="icon-text">' + item.name + '</span>\n        </span>\n    ');
        if (item.o) {
            document.write('\n            <span class="icon" >\n                <span class="fi fi-' + item.name + '-o" ></span>\n                <span class="icon-text">' + item.name + '-o</span>\n            </span>\n        ');
        }
        if (item.of) {
            document.write('\n            <span class="icon" >\n                <span class="fi fi-' + item.name + '-of" ></span>\n                <span class="icon-text">' + item.name + '-of</span>\n            </span>\n        ');
        }
        if (item.f) {
            document.write('\n            <span class="icon" >\n                <span class="fi fi-' + item.name + '-f" ></span>\n                <span class="icon-text">' + item.name + '-f</span>\n            </span>\n        ');
        }
        if (item.s) {
            document.write('\n            <span class="icon" >\n                <span class="fi fi-' + item.name + '-s" ></span>\n                <span class="icon-text">' + item.name + '-s</span>\n            </span>\n        ');
        }
        if (item.sf) {
            document.write('\n            <span class="icon" >\n                <span class="fi fi-' + item.name + '-sf" ></span>\n                <span class="icon-text">' + item.name + '-sf</span>\n            </span>\n        ');
        }
    }
});

/***/ }),

/***/ "./lib/data.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var onfaceIconData = {
    tags: [{
        name: 'direction'
    }, {
        name: 'logo'
    }, {
        name: 'control'
    }, {
        name: 'status'
    }, {
        name: 'chart'
    }, {
        name: 'load'
    }, {
        name: 'file'
    }],
    icons: [{
        name: 'onface',
        tags: ['logo']
    }, {
        name: 'arrow-left',
        tags: ['direction']
    }, {
        name: 'arrow-right',
        tags: ['direction']
    }, {
        name: 'arrow-up',
        tags: ['direction']
    }, {
        name: 'arrow-down',
        tags: ['direction']
    }, {
        name: 'double-up',
        tags: ['direction']
    }, {
        name: 'double-down',
        tags: ['direction']
    }, {
        name: 'double-left',
        tags: ['direction']
    }, {
        name: 'double-right',
        tags: ['direction']
    }, {
        name: 'up',
        o: true,
        of: true,
        s: true,
        sf: true,
        tags: ['direction']
    }, {
        name: 'down',
        o: true,
        of: true,
        s: true,
        sf: true,
        tags: ['direction']
    }, {
        name: 'left',
        o: true,
        of: true,
        s: true,
        sf: true,
        tags: ['direction']
    }, {
        name: 'right',
        o: true,
        of: true,
        s: true,
        sf: true,
        tags: ['direction']
    }, {
        name: 'check',
        o: true,
        of: true,
        s: true,
        sf: true,
        tags: ['status']
    }, {
        name: 'close',
        o: true,
        of: true,
        s: true,
        sf: true,
        tags: ['control']
    }, {
        name: 'minus',
        o: true,
        of: true,
        s: true,
        sf: true,
        tags: ['control']
    }, {
        name: 'plus',
        o: true,
        of: true,
        s: true,
        sf: true,
        tags: ['control']
    }, {
        name: 'code',
        f: true,
        tags: ['control']
    }, {
        name: 'info',
        o: true,
        of: true,
        tags: ['status']
    }, {
        name: 'warning',
        o: true,
        of: true,
        tags: ['status']
    }, {
        name: 'fastforward',
        tags: ['control']
    }, {
        name: 'fastbackward',
        tags: ['control']
    }, {
        name: 'rmb',
        o: true,
        of: true,
        tags: []
    }, {
        name: 'apple',
        f: true,
        tags: ['logo']
    }, {
        name: 'android',
        tags: ['logo']
    }, {
        name: 'tag',
        f: true
    }, {
        name: 'tags',
        f: true
    }, {
        name: 'play',
        f: true,
        tags: ['control']
    }, {
        name: 'bar-chart',
        tags: ['chart']
    }, {
        name: 'bars-chart',
        tags: ['chart']
    }, {
        name: 'dot-chart',
        tags: ['chart']
    }, {
        name: 'pie-chart',
        tags: ['chart']
    }, {
        name: 'line-chart',
        tags: ['chart']
    }, {
        name: 'area-chart',
        tags: ['chart']
    }, {
        name: 'windows',
        o: true,
        tags: ['logo']
    }, {
        name: 'ie',
        tags: ['logo']
    }, {
        name: 'calendar',
        f: true,
        tags: ['control']
    }, {
        name: 'lock',
        tags: ['control']
    }, {
        name: 'unlock',
        tags: ['control']
    }, {
        name: 'upload',
        tags: ['load']
    }, {
        name: 'download',
        tags: ['load']
    }, {
        name: 'loading',
        tags: ['load']
    }, {
        name: 'cloud-upload',
        f: true,
        tags: ['load']
    }, {
        name: 'cloud-download',
        f: true,
        tags: ['load']
    }, {
        name: 'cloud',
        f: true,
        tags: ['load']
    }, {
        name: 'display'
    }, {
        name: 'file',
        tags: ['file']
    }, {
        name: 'pdf-file',
        tags: ['file']
    }, {
        name: 'jpg-file',
        tags: ['file']
    }, {
        name: 'word-file',
        tags: ['file']
    }, {
        name: 'unknow-file',
        tags: ['file']
    }, {
        name: 'github',
        tags: ['logo']
    }, {
        name: 'chrome',
        tags: ['logo']
    }, {
        name: 'message'
    }, {
        name: 'calculator',
        tags: ['control']
    }, {
        name: 'smile',
        f: true
    }, {
        name: 'frown',
        f: true
    }, {
        name: 'meh',
        f: true
    }, {
        name: 'heart',
        f: true
    }, {
        name: 'pushpin',
        f: true
    }, {
        name: 'enter'
    }, {
        name: 'roll-back'
    }, {
        name: 'delete',
        tags: ['control']
    }, {
        name: 'like',
        tags: ['control']
    }, {
        name: 'dislike',
        tags: ['control']
    }, {
        name: 'folder',
        tags: ['file']
    }, {
        name: 'folder-open',
        tags: ['file']
    }, {
        name: 'text-file',
        tags: ['file']
    }, {
        name: 'scan',
        tags: ['control']
    }, {
        name: 'appstore',
        f: true
    }, {
        name: 'edit',
        tags: ['control']
    }, {
        name: 'export',
        tags: ['control']
    }, {
        name: 'export-left',
        tags: ['control']
    }, {
        name: 'camera',
        f: true,
        tags: ['control']
    }, {
        name: 'eye',
        f: true,
        tags: ['control']
    }, {
        name: 'location',
        f: true,
        tags: ['control']
    }, {
        name: 'qrcode',
        tags: ['control']
    }, {
        name: 'inbox'
    }, {
        name: 'menu-unfold',
        tags: ['control']
    }, {
        name: 'menu-fold',
        tags: ['control']
    }, {
        name: 'mobile'
    }, {
        name: 'notification'
    }, {
        name: 'paperclip'
    }, {
        name: 'phone'
    }, {
        name: 'picture'
    }, {
        name: 'power-off',
        tags: ['control']
    }, {
        name: 'setting',
        tags: ['control']
    }, {
        name: 'share',
        tags: ['control']
    }, {
        name: 'search'
    }, {
        name: 'solution'
    }, {
        name: 'pad'
    }, {
        name: 'team'
    }, {
        name: 'user'
    }, {
        name: 'to-top',
        tags: ['control']
    }, {
        name: 'video-camera'
    }, {
        name: 'save'
    }, {
        name: 'shopping-cart'
    }, {
        name: 'exception',
        tags: ['status']
    }, {
        name: 'filter',
        tags: ['control']
    }, {
        name: 'star',
        f: true,
        tags: ['control']
    }, {
        name: 'laptop'
    }, {
        name: 'home'
    }, {
        name: 'link',
        tags: ['control']
    }, {
        name: 'logout',
        tags: ['control']
    }, {
        name: 'mail'
    }, {
        name: 'email'
    }, {
        name: 'clock',
        f: true,
        tags: ['status']
    }, {
        name: 'pause',
        o: true,
        of: true,
        tags: ['status']
    }, {
        name: 'copy',
        tags: ['control']
    }, {
        name: 'ellipsis'
    }, {
        name: 'swap',
        tags: ['control']
    }, {
        name: 'swap-right',
        tags: ['control']
    }, {
        name: 'swap-left',
        tags: ['control']
    }, {
        name: 'question',
        o: true,
        of: true,
        tags: ['status']
    }, {
        name: 'bars',
        tags: ['control']
    }, {
        name: 'book'
    }, {
        name: 'credit-card'
    }, {
        name: 'service',
        tags: ['control']
    }, {
        name: 'reload',
        tags: ['control']
    }, {
        name: 'resize',
        tags: ['control']
    }, {
        name: 'shrink',
        tags: ['control']
    }, {
        name: 'retweet',
        tags: ['control']
    }, {
        name: 'roll-back',
        tags: ['control']
    }, {
        name: 'caret-up',
        tags: ['direction']
    }, {
        name: 'caret-down',
        tags: ['direction']
    }, {
        name: 'caret-left',
        tags: ['direction']
    }, {
        name: 'caret-right',
        tags: ['direction']
    }, {
        name: 'backward',
        tags: ['control']
    }, {
        name: 'forward',
        tags: ['control']
    }, {
        name: 'step-backward',
        tags: ['control']
    }, {
        name: 'step-forward',
        tags: ['control']
    }],
    render: function render(callback) {
        var self = this;
        self.tags.map(function (tag) {
            callback({
                type: 'classify',
                name: tag.name
            });
            self.icons.forEach(function (icon) {
                if (icon.tags) {
                    var bingo = icon.tags.find(function (item) {
                        return tag.name === item;
                    });
                    if (bingo) {
                        callback(icon);
                    }
                }
            });
        });
        callback({
            type: 'classify',
            name: 'common'
        });
        self.icons.forEach(function (icon) {
            icon.tags = icon.tags || [];
            if (icon.tags.length === 0) {
                callback(icon);
            }
        });
    }
};

if (true) {
    module.exports = onfaceIconData;
}

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./doc/list.demo.js");


/***/ })

/******/ });