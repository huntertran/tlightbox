(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tlightbox"] = factory();
	else
		root["tlightbox"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "47ad":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "aea3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Lightbox_vue_vue_type_style_index_0_id_45e5f052_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("47ad");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Lightbox_vue_vue_type_style_index_0_id_45e5f052_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Lightbox_vue_vue_type_style_index_0_id_45e5f052_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Lightbox_vue_vue_type_style_index_0_id_45e5f052_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"10cf99ce-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/Lightbox.vue?vue&type=template&id=45e5f052&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{ 'vue-lightbox' : !_vm.resetstyles }},[(_vm.title)?_c('h1',[_vm._v(_vm._s(_vm.title))]):_vm._e(),_c('ul',_vm._l((_vm.images),function(image,index){return _c('li',{key:index},[_c('img',{attrs:{"src":image.thumbnail,"alt":image.caption},on:{"click":function($event){return _vm.clickImage(index)}}})])}),0),(_vm.overlayActive)?_c('div',{staticClass:"lightbox-overlay",on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.closeOverlay($event)}}},[_c('div',{staticClass:"holder"},[_c('div',[(_vm.isShowLoading)?_c('div',{staticClass:"lds-heart"},[_c('div')]):_vm._e(),_c('img',{attrs:{"src":_vm.images[_vm.currentImageIndex].src},on:{"load":_vm.mainImageLoaded}})]),(_vm.nav)?_c('div',{staticClass:"nav"},[_c('a',{staticClass:"close",attrs:{"nohref":""},on:{"click":_vm.closeOverlay}},[_c('span',[_vm._v("×")])]),_c('a',{staticClass:"prev",attrs:{"nohref":""},on:{"click":_vm.prevImage}},[_c('span',[_vm._v("←")])]),_c('a',{staticClass:"next",attrs:{"nohref":""},on:{"click":_vm.nextImage}},[_c('span',[_vm._v("→")])])]):_vm._e(),(_vm.caption && _vm.images[_vm.currentImageIndex].caption)?_c('p',[_vm._v(_vm._s(_vm.images[_vm.currentImageIndex].caption))]):_vm._e()])]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Lightbox.vue?vue&type=template&id=45e5f052&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/Lightbox.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Lightboxvue_type_script_lang_js_ = ({
  props: {
    resetstyles: {
      default: false,
      type: Boolean
    },
    title: {
      type: String
    },
    images: {
      type: Array
    },
    loop: {
      default: true,
      type: Boolean
    },
    nav: {
      default: true,
      type: Boolean
    },
    caption: {
      default: true,
      type: Boolean
    }
  },
  data: function data() {
    return {
      currentImageIndex: null,
      overlayActive: false,
      isShowLoading: true
    };
  },
  mounted: function mounted() {
    var self = this;
    window.addEventListener("keydown", function (e) {
      self.handleGlobalKeyDown(e);
    });
  },
  methods: {
    mainImageLoaded: function mainImageLoaded() {
      this.isShowLoading = false;
    },
    clickImage: function clickImage(index) {
      this.currentImageIndex = index;
      this.overlayActive = true;
      this.preloadNextImage();
    },
    preloadNextImage: function preloadNextImage() {
      var nextImageIndex = 0;

      if (this.currentImageIndex === this.images.length - 1) {
        if (this.loop) {
          nextImageIndex = 0;
        }
      } else {
        nextImageIndex = this.currentImageIndex + 1;
      }

      var newImageToCache = new Image();
      newImageToCache.src = this.images[nextImageIndex].src;
    },
    nextImage: function nextImage() {
      if (this.currentImageIndex === this.images.length - 1) {
        if (this.loop) {
          this.currentImageIndex = 0;
        }
      } else {
        this.currentImageIndex += 1;
      }

      this.preloadNextImage();
    },
    prevImage: function prevImage() {
      if (this.currentImageIndex === 0) {
        if (this.loop) {
          this.currentImageIndex = this.images.length - 1;
        }
      } else {
        this.currentImageIndex -= 1;
      }
    },
    closeOverlay: function closeOverlay() {
      this.overlayActive = false;
    },
    handleGlobalKeyDown: function handleGlobalKeyDown(e) {
      switch (e.keyCode) {
        case 37:
          this.prevImage();
          break;

        case 39:
          this.nextImage();
          break;

        case 27:
          this.closeOverlay();
          break;

        default:
          break;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Lightbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Lightboxvue_type_script_lang_js_ = (Lightboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Lightbox.vue?vue&type=style&index=0&id=45e5f052&scoped=true&lang=scss&
var Lightboxvue_type_style_index_0_id_45e5f052_scoped_true_lang_scss_ = __webpack_require__("aea3");

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/Lightbox.vue






/* normalize component */

var component = normalizeComponent(
  components_Lightboxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "45e5f052",
  null
  
)

/* harmony default export */ var Lightbox = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (Lightbox);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=tlightbox.umd.js.map