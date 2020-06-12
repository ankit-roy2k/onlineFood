function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/cart/cart.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");

    var routes = [{
      path: "signup",
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]
    }, {
      path: "login",
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: "home",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
      children: [{
        path: "",
        pathMatch: "full",
        redirectTo: "menu"
      }, {
        path: "menu",
        component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"]
      }, {
        path: "cart",
        component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"]
      }]
    }, {
      path: "",
      pathMatch: "full",
      redirectTo: "home"
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'foodOdering';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/cart/cart.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _food_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./food.model */
    "./src/app/food.model.ts");
    /* harmony import */


    var _order_order_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./order/order.component */
    "./src/app/order/order.component.ts");
    /* harmony import */


    var _order_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./order.model */
    "./src/app/order.model.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_food_model__WEBPACK_IMPORTED_MODULE_11__["Food"], _order_model__WEBPACK_IMPORTED_MODULE_13__["OrderItems"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"], _order_order_component__WEBPACK_IMPORTED_MODULE_12__["OrderComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"], _order_order_component__WEBPACK_IMPORTED_MODULE_12__["OrderComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]],
          providers: [_food_model__WEBPACK_IMPORTED_MODULE_11__["Food"], _order_model__WEBPACK_IMPORTED_MODULE_13__["OrderItems"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/cart/cart.component.ts":
  /*!****************************************!*\
    !*** ./src/app/cart/cart.component.ts ***!
    \****************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_order_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service/order-service.service */
    "./src/app/service/order-service.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CartComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", order_r2.foodname, " - ", order_r2.size, "\xA0\xA0 X \xA0\xA0", order_r2.quantity, " \xA0 \xA0 : \xA0 \xA0 ", order_r2.price, " ");
      }
    }

    function CartComponent_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please add items in the card.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CartComponent = /*#__PURE__*/function () {
      function CartComponent(orderService) {
        _classCallCheck(this, CartComponent);

        this.orderService = orderService;
        this.orders = [];
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.totalprice = this.orderService.getTotalPrice();
          this.orders = this.orderService.onGetOrder();
        }
      }, {
        key: "createAlert",
        value: function createAlert() {
          alert("Program ends here. Thank You! 😊");
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ɵfac = function CartComponent_Factory(t) {
      return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_order_service_service__WEBPACK_IMPORTED_MODULE_1__["OrderServiceService"]));
    };

    CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CartComponent,
      selectors: [["app-cart"]],
      decls: 9,
      vars: 3,
      consts: [[4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "click"]],
      template: function CartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CartComponent_li_2_Template, 2, 4, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CartComponent_span_6_Template, 2, 0, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_button_click_7_listener() {
            return ctx.createAlert();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Proceed to Pay");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orders);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total= Rs.", ctx.totalprice, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalprice == 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  position: relative;\n}\n\nul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  background-color: firebrick;\n  justify-content: center;\n  margin: 2rem;\n  padding: 2rem;\n  border: none;\n  outline: none;\n  border-radius: 0.3rem;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: center;\n  text-align: center;\n  color: whitesmoke;\n}\n\nul[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1rem auto;\n  padding-left: 2rem;\n  color: whitesmoke;\n}\n\nul[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  align-self: center;\n  width: 80%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -2rem;\n  right: 2rem;\n  padding: 1rem;\n  margin: 2rem auto;\n  background: dodgerblue;\n  border: none;\n  outline: none;\n  border-bottom: 2px solid #111111;\n  border-radius: 0.8rem;\n  color: whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9DOlxceGFtcHBcXGh0ZG9jc1xcZm9vZE9yZGVyaW5nXFxmb29kT2RlcmluZy9zcmNcXGFwcFxcY2FydFxcY2FydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQ0VKOztBRERJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0dSOztBRERJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNHUjs7QURESTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ0dSOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbnVse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogZmlyZWJyaWNrLCAkYWxwaGE6IDEuMCk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMnJlbTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xyXG4gICAgbGl7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICB9XHJcbiAgICBzcGFue1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtIGF1dG87XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgfVxyXG4gICAgaHJ7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOjgwJTtcclxuICAgIH1cclxufVxyXG5idXR0b257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0ycmVtO1xyXG4gICAgcmlnaHQ6IDJyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTExMTExO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuICAiLCJkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxudWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6IGZpcmVicmljaztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMnJlbTtcbiAgcGFkZGluZzogMnJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG59XG51bCBsaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG51bCBzcGFuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtIGF1dG87XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG51bCBociB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbn1cblxuYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0ycmVtO1xuICByaWdodDogMnJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luOiAycmVtIGF1dG87XG4gIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxMTExMTE7XG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cart',
          templateUrl: './cart.component.html',
          styleUrls: ['./cart.component.scss']
        }]
      }], function () {
        return [{
          type: _service_order_service_service__WEBPACK_IMPORTED_MODULE_1__["OrderServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/food.model.ts":
  /*!*******************************!*\
    !*** ./src/app/food.model.ts ***!
    \*******************************/

  /*! exports provided: Food */

  /***/
  function srcAppFoodModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Food", function () {
      return Food;
    });

    var Food = function Food() {
      _classCallCheck(this, Food);
    };
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _service_login_signup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/login-signup.service */
    "./src/app/service/login-signup.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(router, logout) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.logout = logout;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (sessionStorage.getItem('loggedIn') !== 'true') {
            this.router.navigate(['/login']);
          } else {
            this.name = sessionStorage.getItem('name');
          }
        }
      }, {
        key: "onLogOut",
        value: function onLogOut() {
          this.logout.onLogout();
          this.router.navigate(['/login']);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_login_signup_service__WEBPACK_IMPORTED_MODULE_2__["LoginSignupService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 14,
      vars: 3,
      consts: [["type", "submit", "name", "submit", "value", "Log Out", 3, "click"], [1, "buttons"], ["src", "assets/icons/cart.svg", "alt", "", "routerLinkActive", "active", "routerLink", "cart"], ["src", "assets/icons/home.svg", "routerLinkActive", "active", "routerLink", "/home/menu"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Food Plaza");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_input_click_3_listener() {
            return ctx.onLogOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 1, ctx.name), " ");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]],
      styles: [".active[_ngcontent-%COMP%] {\n  display: none;\n}\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  background: dodgerblue;\n  color: whitesmoke;\n  justify-content: space-between;\n  padding: 1rem;\n}\n\nnav[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: teal;\n  color: whitesmoke;\n  border: none;\n  outline: none;\n  border-bottom: 0.1rem solid #111111;\n  border-radius: 1rem;\n  padding: 0.5rem;\n}\n\ndiv[_ngcontent-%COMP%] {\n  background: #111111;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 0.7rem;\n  color: whitesmoke;\n}\n\ndiv[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  -webkit-filter: invert(69%) sepia(70%) saturate(6214%) hue-rotate(191deg) brightness(98%) contrast(107%);\n          filter: invert(69%) sepia(70%) saturate(6214%) hue-rotate(191deg) brightness(98%) contrast(107%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxceGFtcHBcXGh0ZG9jc1xcZm9vZE9yZGVyaW5nXFxmb29kT2RlcmluZy9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUNFSjs7QURESTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDR1I7O0FEQUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFFQSxpQkFBQTtBQ0VKOztBRERJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSx3R0FBQTtVQUFBLGdHQUFBO0FDR1IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZle1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5uYXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBpbnB1dHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0ZWFsO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCAjMTExMTExO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgfVxyXG59XHJcbmRpdntcclxuICAgIGJhY2tncm91bmQ6ICMxMTExMTE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDAuN3JlbTtcclxuICAgIC8vcGFkZGluZy1yaWdodDogNXJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxLjVyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoNjklKSBzZXBpYSg3MCUpIHNhdHVyYXRlKDYyMTQlKSBodWUtcm90YXRlKDE5MWRlZykgYnJpZ2h0bmVzcyg5OCUpIGNvbnRyYXN0KDEwNyUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCIuYWN0aXZlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxcmVtO1xufVxubmF2IGlucHV0IHtcbiAgYmFja2dyb3VuZDogdGVhbDtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkICMxMTExMTE7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuZGl2IHtcbiAgYmFja2dyb3VuZDogIzExMTExMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAuN3JlbTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5kaXYgaW1nIHtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIGZpbHRlcjogaW52ZXJ0KDY5JSkgc2VwaWEoNzAlKSBzYXR1cmF0ZSg2MjE0JSkgaHVlLXJvdGF0ZSgxOTFkZWcpIGJyaWdodG5lc3MoOTglKSBjb250cmFzdCgxMDclKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _service_login_signup_service__WEBPACK_IMPORTED_MODULE_2__["LoginSignupService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_login_signup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service/login-signup.service */
    "./src/app/service/login-signup.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid Credentials!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(logIn, router) {
        _classCallCheck(this, LoginComponent);

        this.logIn = logIn;
        this.router = router;
        this.email = "";
        this.password = "";
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.invalid = false;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          var formData = new FormData();
          formData.append('email', this.email);
          formData.append('password', this.password);
          formData.append('login', 'true');
          this.logIn.onLogin(formData).subscribe(function (res) {
            if (res['status'] === 'error') {
              _this.invalid = true;
            } else {
              sessionStorage.setItem('name', res['name']);
              sessionStorage.setItem('email', res['email']);
              sessionStorage.setItem('loggedIn', 'true');

              _this.router.navigate(['/home']);
            }
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_login_signup_service__WEBPACK_IMPORTED_MODULE_1__["LoginSignupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 13,
      vars: 4,
      consts: [[3, "submit"], [4, "ngIf"], ["type", "email", "name", "email", "placeholder", "Enter Email", "required", "", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "placeholder", "Enter Password", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", "name", "submit", "value", "Login", 3, "disabled"], ["routerLink", "/signup"], [2, "color", "firebrick", "text-align", "center"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_0_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "LOGIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_div_4_Template, 3, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Already have an account? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Signup Here.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.email === "" || ctx.password === "");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  flex-direction: column;\n  margin: 2rem auto;\n  padding: 3rem;\n  background: teal;\n  color: whitesmoke;\n  width: 60%;\n  color: whitesmoke;\n  text-align: center;\n}\nform[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin: 1rem 0;\n  border: none;\n  outline: none;\n  border-radius: 1rem;\n  border-bottom: 2px solid dodgerblue;\n}\nform[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  background: dodgerblue;\n  color: whitesmoke;\n  padding: 0.5rem 1.2rem;\n  text-transform: uppercase;\n  font-weight: bold;\n  border: none;\n  outline: none;\n  margin: 1rem auto;\n}\nform[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:disabled {\n  background: firebrick;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXHhhbXBwXFxodGRvY3NcXGZvb2RPcmRlcmluZ1xcZm9vZE9kZXJpbmcvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREFJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7QUNFUjtBREFJO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNFUjtBRERRO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtBQ0daIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xyXG4gICAgcGFkZGluZzogM3JlbTtcclxuICAgIGJhY2tncm91bmQ6IHRlYWw7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBjb2xvcjp3aGl0ZXNtb2tlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLGlucHV0W3R5cGU9XCJ0ZXh0XCJdLGlucHV0W3R5cGU9XCJlbWFpbFwiXXtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGRvZGdlcmJsdWU7XHJcbiAgICB9XHJcbiAgICBpbnB1dFt0eXBlPVwic3VibWl0XCJde1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMXJlbSBhdXRvO1xyXG4gICAgICAgICY6ZGlzYWJsZWR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGZpcmVicmljaztcclxuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMnJlbSBhdXRvO1xuICBwYWRkaW5nOiAzcmVtO1xuICBiYWNrZ3JvdW5kOiB0ZWFsO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgd2lkdGg6IDYwJTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmZvcm0gaW5wdXRbdHlwZT1wYXNzd29yZF0sIGZvcm0gaW5wdXRbdHlwZT10ZXh0XSwgZm9ybSBpbnB1dFt0eXBlPWVtYWlsXSB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbjogMXJlbSAwO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBkb2RnZXJibHVlO1xufVxuZm9ybSBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG59XG5mb3JtIGlucHV0W3R5cGU9c3VibWl0XTpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6IGZpcmVicmljaztcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _service_login_signup_service__WEBPACK_IMPORTED_MODULE_1__["LoginSignupService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/menu/menu.component.ts":
  /*!****************************************!*\
    !*** ./src/app/menu/menu.component.ts ***!
    \****************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_fetch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service/fetch.service */
    "./src/app/service/fetch.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _order_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../order/order.component */
    "./src/app/order/order.component.ts");

    function MenuComponent_app_order_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-order", 5);
      }

      if (rf & 2) {
        var foodItem_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("foodItem", foodItem_r1);
      }
    }

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent(fetchFood) {
        _classCallCheck(this, MenuComponent);

        this.fetchFood = fetchFood;
        this.food = [];
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.fetchFood.onFetch().subscribe(function (res) {
            _this2.food = res;
          });
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_fetch_service__WEBPACK_IMPORTED_MODULE_1__["FetchService"]));
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      decls: 8,
      vars: 1,
      consts: [[1, "menu"], [1, "f"], ["routerLink", "/home/cart"], [1, "row"], [3, "foodItem", 4, "ngFor", "ngForOf"], [3, "foodItem"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "MENU");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Checkout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MenuComponent_app_order_7_Template, 1, 1, "app-order", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.food);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _order_order_component__WEBPACK_IMPORTED_MODULE_4__["OrderComponent"]],
      styles: [".row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n}\n\n.menu[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 1rem auto;\n}\n\napp-order[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.f[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\na[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin: 2rem auto;\n  background: dodgerblue;\n  border: none;\n  outline: none;\n  border-bottom: 2px solid #111111;\n  border-radius: 0.8rem;\n  color: whitesmoke;\n  text-decoration: none;\n}\n\n@media screen and (max-width: 767px) {\n  app-order[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9DOlxceGFtcHBcXGh0ZG9jc1xcZm9vZE9yZGVyaW5nXFxmb29kT2RlcmluZy9zcmNcXGFwcFxcbWVudVxcbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksVUFBQTtBQ0dKOztBRERBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNJSjs7QURGQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ0tKOztBREZBO0VBQ0k7SUFDSSxXQUFBO0VDS047QUFDRiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuLm1lbnV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcclxufVxyXG5hcHAtb3JkZXJ7XHJcbiAgICB3aWR0aDogMzAlO1xyXG59XHJcbi5me1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuYXtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxMTExMTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjhyZW07XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4gIFxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7XHJcbiAgICBhcHAtb3JkZXJ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn0iLCIucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5tZW51IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDFyZW0gYXV0bztcbn1cblxuYXBwLW9yZGVyIHtcbiAgd2lkdGg6IDMwJTtcbn1cblxuLmYge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuYSB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbjogMnJlbSBhdXRvO1xuICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTExMTExO1xuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIGFwcC1vcmRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu',
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.scss']
        }]
      }], function () {
        return [{
          type: _service_fetch_service__WEBPACK_IMPORTED_MODULE_1__["FetchService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/order.model.ts":
  /*!********************************!*\
    !*** ./src/app/order.model.ts ***!
    \********************************/

  /*! exports provided: OrderItems */

  /***/
  function srcAppOrderModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderItems", function () {
      return OrderItems;
    });

    var OrderItems = function OrderItems() {
      _classCallCheck(this, OrderItems);
    };
    /***/

  },

  /***/
  "./src/app/order/order.component.ts":
  /*!******************************************!*\
    !*** ./src/app/order/order.component.ts ***!
    \******************************************/

  /*! exports provided: OrderComponent */

  /***/
  function srcAppOrderOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderComponent", function () {
      return OrderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _order_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../order.model */
    "./src/app/order.model.ts");
    /* harmony import */


    var _service_order_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/order-service.service */
    "./src/app/service/order-service.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var OrderComponent = /*#__PURE__*/function () {
      function OrderComponent(orderService) {
        _classCallCheck(this, OrderComponent);

        this.orderService = orderService;
        this.total = null;
      }

      _createClass(OrderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.size = "";
          this.quantity = 0;
        }
      }, {
        key: "less",
        value: function less() {
          if (this.quantity > 0) {
            this.quantity--;
          }

          this.calculatePrice();
        }
      }, {
        key: "more",
        value: function more() {
          this.quantity++;
          this.calculatePrice();
        }
      }, {
        key: "onSizeChange",
        value: function onSizeChange(size) {
          this.size = size.srcElement.value;
          this.calculatePrice();
        }
      }, {
        key: "calculatePrice",
        value: function calculatePrice() {
          this.total = this.quantity * this.foodItem[this.size];
        }
      }, {
        key: "addOrder",
        value: function addOrder() {
          var order = new _order_model__WEBPACK_IMPORTED_MODULE_1__["OrderItems"]();
          order.size = this.size;
          order.foodname = this.foodItem.foodname;
          order.quantity = this.quantity;
          order.price = this.total;
          this.orderService.onAddOrder(order);
          console.log(this.orderService.onGetOrder());
        }
      }]);

      return OrderComponent;
    }();

    OrderComponent.ɵfac = function OrderComponent_Factory(t) {
      return new (t || OrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_order_service_service__WEBPACK_IMPORTED_MODULE_2__["OrderServiceService"]));
    };

    OrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrderComponent,
      selectors: [["app-order"]],
      inputs: {
        foodItem: "foodItem"
      },
      decls: 20,
      vars: 6,
      consts: [[1, "order"], [3, "src", "alt"], [3, "submit"], ["name", "size", "required", "", 3, "change"], ["value", "", "disabled", "", "selected", ""], ["value", "small"], ["value", "medium"], ["value", "large"], [1, "quantity"], ["type", "button", "name", "add", "value", "-", 3, "click"], ["type", "button", "name", "add", "value", "+", 3, "click"], ["type", "submit", "name", "cart", 3, "value", "disabled"]],
      template: function OrderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function OrderComponent_Template_form_submit_4_listener() {
            return ctx.addOrder();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function OrderComponent_Template_select_change_5_listener($event) {
            return ctx.onSizeChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Select Size");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Medium");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Large");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_Template_input_click_15_listener() {
            return ctx.less();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_Template_input_click_18_listener() {
            return ctx.more();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.foodItem.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.foodItem.foodname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.foodItem.foodname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quantity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("value", "Add ", ctx.size !== "" && ctx.quantity > 0 ? "Rs." + ctx.total : "", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.size === "" || ctx.quantity <= 0);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]],
      styles: [".order[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1rem;\n  background: teal;\n  flex-direction: column;\n  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.5);\n  margin: 2rem auto;\n}\n.order[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  font-size: 1.5rem;\n  margin: 0.5rem auto;\n}\n.order[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 15rem;\n  border-radius: 1rem;\n}\n.order[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem 0.5rem;\n}\n.order[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: whitesmoke;\n  padding: 0.3rem;\n  border-bottom: 1px solid dodgerblue;\n  margin: 1rem auto;\n}\n.order[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.order[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  font-weight: bold;\n}\n.order[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%] {\n  height: 1rem;\n  width: 1rem;\n  border-radius: 50%;\n  border: none;\n  outline: none;\n  font-weight: bold;\n}\n.order[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%]:first-of-type {\n  color: firebrick !important;\n}\n.order[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%]:last-of-type {\n  color: teal !important;\n}\n.order[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.order[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  background: dodgerblue;\n  color: whitesmoke;\n  font-weight: bold;\n  padding: 0.5rem 1.2rem;\n  border: none;\n  outline: none;\n  margin: 0.5rem;\n  border-radius: 0.5rem;\n}\n.order[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:disabled {\n  background: firebrick;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvQzpcXHhhbXBwXFxodGRvY3NcXGZvb2RPcmRlcmluZ1xcZm9vZE9kZXJpbmcvc3JjXFxhcHBcXG9yZGVyXFxvcmRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvb3JkZXIvb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhDQUFBO0VBQ0EsaUJBQUE7QUNDSjtBREFJO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDRVI7QURBSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNFUjtBREFJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDRVI7QURBSTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0VBQ0EsaUJBQUE7QUNFUjtBREFJO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNFUjtBRERRO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ0daO0FERFE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0daO0FERlk7RUFDSSwyQkFBQTtBQ0loQjtBREZZO0VBQ0ksc0JBQUE7QUNJaEI7QUREUTtFQUNJLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQ0daO0FEQUk7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDRVI7QUREUTtFQUNJLHFCQUFBO0FDR1oiLCJmaWxlIjoic3JjL2FwcC9vcmRlci9vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcmRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZDogdGVhbDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBib3gtc2hhZG93OiAwIDAuMnJlbSAwLjVyZW0gcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC41KTtcclxuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xyXG4gICAgaDN7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgbWFyZ2luOiAwLjVyZW0gYXV0bztcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDE1cmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICB9XHJcbiAgICBmb3Jte1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xyXG4gICAgfVxyXG4gICAgc2VsZWN0e1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiAgICAgICAgcGFkZGluZzogMC4zcmVtO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBkb2RnZXJibHVlO1xyXG4gICAgICAgIG1hcmdpbjogMXJlbSBhdXRvO1xyXG4gICAgfVxyXG4gICAgLnF1YW50aXR5e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXRbdHlwZT1cImJ1dHRvblwiXXtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxcmVtIDtcclxuICAgICAgICAgICAgd2lkdGg6IDFyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgJjpmaXJzdC1vZi10eXBle1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGZpcmVicmljayAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6bGFzdC1vZi10eXBle1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHRlYWwgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXXtcclxuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlucHV0W3R5cGU9XCJzdWJtaXRcIl17XHJcbiAgICAgICAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcclxuICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMC41cmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgICAmOmRpc2FibGVke1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBmaXJlYnJpY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLm9yZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJhY2tncm91bmQ6IHRlYWw7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaGFkb3c6IDAgMC4ycmVtIDAuNXJlbSByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIG1hcmdpbjogMnJlbSBhdXRvO1xufVxuLm9yZGVyIGgzIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW46IDAuNXJlbSBhdXRvO1xufVxuLm9yZGVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1cmVtO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuLm9yZGVyIGZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbSAwLjVyZW07XG59XG4ub3JkZXIgc2VsZWN0IHtcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgcGFkZGluZzogMC4zcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZG9kZ2VyYmx1ZTtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG59XG4ub3JkZXIgLnF1YW50aXR5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ub3JkZXIgLnF1YW50aXR5IHNwYW4ge1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ub3JkZXIgLnF1YW50aXR5IGlucHV0W3R5cGU9YnV0dG9uXSB7XG4gIGhlaWdodDogMXJlbTtcbiAgd2lkdGg6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5vcmRlciAucXVhbnRpdHkgaW5wdXRbdHlwZT1idXR0b25dOmZpcnN0LW9mLXR5cGUge1xuICBjb2xvcjogZmlyZWJyaWNrICFpbXBvcnRhbnQ7XG59XG4ub3JkZXIgLnF1YW50aXR5IGlucHV0W3R5cGU9YnV0dG9uXTpsYXN0LW9mLXR5cGUge1xuICBjb2xvcjogdGVhbCAhaW1wb3J0YW50O1xufVxuLm9yZGVyIC5xdWFudGl0eSBpbnB1dFt0eXBlPXRleHRdIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLm9yZGVyIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW46IDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuLm9yZGVyIGlucHV0W3R5cGU9c3VibWl0XTpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6IGZpcmVicmljaztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-order',
          templateUrl: './order.component.html',
          styleUrls: ['./order.component.scss']
        }]
      }], function () {
        return [{
          type: _service_order_service_service__WEBPACK_IMPORTED_MODULE_2__["OrderServiceService"]
        }];
      }, {
        foodItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['foodItem']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/service/fetch.service.ts":
  /*!******************************************!*\
    !*** ./src/app/service/fetch.service.ts ***!
    \******************************************/

  /*! exports provided: FetchService */

  /***/
  function srcAppServiceFetchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FetchService", function () {
      return FetchService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var FetchService = /*#__PURE__*/function () {
      function FetchService(http) {
        _classCallCheck(this, FetchService);

        this.http = http;
        this.baseurl = "http://localhost/foodOrdering/index.php";
      }

      _createClass(FetchService, [{
        key: "onFetch",
        value: function onFetch() {
          return this.http.get(this.baseurl + '?fetch=1');
        }
      }]);

      return FetchService;
    }();

    FetchService.ɵfac = function FetchService_Factory(t) {
      return new (t || FetchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    FetchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FetchService,
      factory: FetchService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FetchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/login-signup.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/service/login-signup.service.ts ***!
    \*************************************************/

  /*! exports provided: LoginSignupService */

  /***/
  function srcAppServiceLoginSignupServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginSignupService", function () {
      return LoginSignupService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var LoginSignupService = /*#__PURE__*/function () {
      function LoginSignupService(http) {
        _classCallCheck(this, LoginSignupService);

        this.http = http;
        this.baseurl = "http://localhost/foodOrdering/index.php";
      }

      _createClass(LoginSignupService, [{
        key: "onLogin",
        value: function onLogin(form) {
          return this.http.post(this.baseurl, form);
        }
      }, {
        key: "onSignUp",
        value: function onSignUp(form) {
          return this.http.post(this.baseurl, form);
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          sessionStorage.setItem('loggedIn', 'false');
          sessionStorage.setItem('name', null);
          sessionStorage.setItem('email', null);
        }
      }]);

      return LoginSignupService;
    }();

    LoginSignupService.ɵfac = function LoginSignupService_Factory(t) {
      return new (t || LoginSignupService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    LoginSignupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginSignupService,
      factory: LoginSignupService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginSignupService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/order-service.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/service/order-service.service.ts ***!
    \**************************************************/

  /*! exports provided: OrderServiceService */

  /***/
  function srcAppServiceOrderServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderServiceService", function () {
      return OrderServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OrderServiceService = /*#__PURE__*/function () {
      function OrderServiceService() {
        _classCallCheck(this, OrderServiceService);

        this.orders = [];
      }

      _createClass(OrderServiceService, [{
        key: "onAddOrder",
        value: function onAddOrder(order) {
          var flag = false;

          var _iterator = _createForOfIteratorHelper(this.orders),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var elmnt = _step.value;

              if (elmnt.foodname === order.foodname && elmnt.size === order.size) {
                elmnt.price = order.price;
                elmnt.quantity = order.quantity;
                flag = true;
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          if (!flag) {
            this.orders.push(order);
          }
        }
      }, {
        key: "onGetOrder",
        value: function onGetOrder() {
          return this.orders;
        }
      }, {
        key: "getTotalPrice",
        value: function getTotalPrice() {
          var totalprice = 0;

          var _iterator2 = _createForOfIteratorHelper(this.orders),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var order = _step2.value;
              totalprice += order.price;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          return totalprice;
        }
      }]);

      return OrderServiceService;
    }();

    OrderServiceService.ɵfac = function OrderServiceService_Factory(t) {
      return new (t || OrderServiceService)();
    };

    OrderServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OrderServiceService,
      factory: OrderServiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/signup/signup.component.ts":
  /*!********************************************!*\
    !*** ./src/app/signup/signup.component.ts ***!
    \********************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_login_signup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service/login-signup.service */
    "./src/app/service/login-signup.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SignupComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Email id Already exists!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(signUp, route) {
        _classCallCheck(this, SignupComponent);

        this.signUp = signUp;
        this.route = route;
        this.name = '';
        this.password = '';
        this.email = '';
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.invalid = false;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this3 = this;

          var formData = new FormData();
          formData.append('name', this.name);
          formData.append('email', this.email);
          formData.append('password', this.password);
          formData.append('signup', 'true');
          this.signUp.onSignUp(formData).subscribe(function (res) {
            if (res['status'] === 'error') {
              _this3.invalid = true;
            } else {
              _this3.route.navigate(['/login']);
            }
          });
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_login_signup_service__WEBPACK_IMPORTED_MODULE_1__["LoginSignupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      decls: 14,
      vars: 4,
      consts: [[3, "submit"], [4, "ngIf"], ["type", "text", "name", "name", "placeholder", "Enter Name", "required", "", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", "placeholder", "Enter Email", "required", "", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "placeholder", "Enter Password", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Create", "name", "create"], ["routerLink", "/login"], [2, "color", "firebrick", "text-align", "center"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SignupComponent_Template_form_submit_0_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CREATE USER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SignupComponent_div_4_Template, 3, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Already have an account? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Login Here.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["span[_ngcontent-%COMP%] {\n  width: 90%;\n  display: block;\n  text-align: center;\n  background: whitesmoke;\n  color: #111111;\n  border-radius: 1rem;\n  padding: 0.5rem;\n  margin: 1rem auto;\n  cursor: pointer;\n}\n\nform[_ngcontent-%COMP%] {\n  margin: 2rem auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  flex-direction: column;\n  width: 95%;\n  background: teal;\n  padding: 1.5rem;\n  border-radius: 1rem;\n  text-align: center;\n  color: whitesmoke;\n}\n\ninput[type=email][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  margin: 0.5rem 0;\n}\n\noption[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n\ninput[type=submit][_ngcontent-%COMP%] {\n  background: dodgerblue;\n  color: whitesmoke;\n  padding: 0.5rem 1.2rem;\n  text-transform: uppercase;\n  font-weight: bold;\n  border: none;\n  outline: none;\n  margin: 1rem auto;\n}\n\n@media screen and (max-width: 767px) {\n  form[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 2rem auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0M6XFx4YW1wcFxcaHRkb2NzXFxmb29kT3JkZXJpbmdcXGZvb2RPZGVyaW5nL3NyY1xcYXBwXFxzaWdudXBcXHNpZ251cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDR0o7O0FEREE7RUFDSSx5QkFBQTtBQ0lKOztBREZBO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNLSjs7QURIQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLGlCQUFBO0VDTU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFue1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuICAgIGNvbG9yOiAjMTExMTExO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmZvcm17XHJcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgYmFja2dyb3VuZDogdGVhbDtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5pbnB1dFt0eXBlPVwiZW1haWxcIl0sIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSwgaW5wdXRbdHlwZT1cInRleHRcIl17XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xyXG59XHJcbm9wdGlvbntcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXXtcclxuICAgIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpe1xyXG4gICAgZm9ybXtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIG1hcmdpbjogMnJlbSBhdXRvO1xyXG4gICAgfVxyXG59Iiwic3BhbiB7XG4gIHdpZHRoOiA5MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIGNvbG9yOiAjMTExMTExO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIG1hcmdpbjogMXJlbSBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmZvcm0ge1xuICBtYXJnaW46IDJyZW0gYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDk1JTtcbiAgYmFja2dyb3VuZDogdGVhbDtcbiAgcGFkZGluZzogMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG5pbnB1dFt0eXBlPWVtYWlsXSwgaW5wdXRbdHlwZT1wYXNzd29yZF0sIGlucHV0W3R5cGU9dGV4dF0ge1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIG1hcmdpbjogMC41cmVtIDA7XG59XG5cbm9wdGlvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmlucHV0W3R5cGU9c3VibWl0XSB7XG4gIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW46IDFyZW0gYXV0bztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgZm9ybSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.scss']
        }]
      }], function () {
        return [{
          type: _service_login_signup_service__WEBPACK_IMPORTED_MODULE_1__["LoginSignupService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\xampp\htdocs\foodOrdering\foodOdering\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map