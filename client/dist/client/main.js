(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _random_random_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./random/random.component */ "./src/app/random/random.component.ts");









var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'signup', component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'random', component: _random_random_component__WEBPACK_IMPORTED_MODULE_8__["RandomComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(_userService) {
        this._userService = _userService;
        this.title = 'scroll';
        this.users = [];
        this.newUser = {
            "name": ""
        };
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.andGetUsers = function () {
        var _this = this;
        var observable = this._userService.getUsers();
        observable.subscribe(function (data) {
            console.log(data);
            _this.users = data['users'];
        });
    };
    AppComponent.prototype.destroyUser = function (user_id) {
        var _this = this;
        var observable = this._userService.removeUser(user_id);
        observable.subscribe(function (data) {
            console.log(data);
            _this.andGetUsers();
        });
    };
    AppComponent.prototype.makeUser = function () {
        var _this = this;
        var observable = this._userService.createUser(this.newUser);
        observable.subscribe(function (data) {
            console.log(data);
            _this.andGetUsers();
            _this.newUser = {
                "name": ""
            };
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _upload_upload_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./upload/upload.module */ "./src/app/upload/upload.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _random_random_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./random/random.component */ "./src/app/random/random.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"],
                _random_random_component__WEBPACK_IMPORTED_MODULE_14__["RandomComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_15__["PostComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                _upload_upload_module__WEBPACK_IMPORTED_MODULE_7__["UploadModule"]
            ],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]],
            // providers: [PostService],
            // providers: [CommentService],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* <------- Navigation Bar Styling ------->*/\r\n\r\n.scroll_main{\r\n  position: relative;\r\n  font-size: 30px;\r\n  padding-right: 10px;\r\n  top:15px;\r\n  color:white !important;\r\n  transition:.5s;\r\n}\r\n\r\n.head_text{\r\n  width:400px;\r\n  height: 60px;\r\n  margin:0 80px;\r\n  transition:.5s;\r\n  border-radius: 8px;\r\n}\r\n\r\n.head_text h1 {\r\n  font-size: 40px;\r\n  font-family: 'Nunito', sans-serif;\r\n  text-align: center;\r\n  border:2px solid white;\r\n  border-radius: 8px;\r\n  transition:.5s;\r\n}\r\n\r\n.head_text:hover h1{\r\n  color: rgb(107, 87, 124);\r\n  border:2px solid rgb(107, 87, 124);;\r\n}\r\n\r\n.head_text:hover i{\r\n  color: rgb(107, 87, 124) !important;\r\n}\r\n\r\n.nav_bar{\r\n  width:100%;\r\n  display: flex;\r\n  position: fixed;\r\n  top:0;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  z-index: 1;\r\n  background-color: #5F7E83;\r\n}\r\n\r\n.nav_bar ul {\r\n  position: fixed;\r\n  margin:10px 200px;\r\n}\r\n\r\n/*------->> Search */\r\n\r\n.fa-search{\r\n  color:white;\r\n  font-size: 18px;\r\n  padding-top: 12px;\r\n  padding-left: 20px;\r\n}\r\n\r\n.search{\r\n  position: fixed;\r\n  margin-top: 10px;\r\n  right:80px;\r\n  background-color: rgba(0, 0, 0, 0.171);\r\n  border-radius: 10px;\r\n}\r\n\r\n.search input{\r\n  width:400px;\r\n  border:none;\r\n  height:40px;\r\n  font-size: 16px;\r\n  color:white;\r\n  font-weight: 100;\r\n  padding-left: 15px;\r\n  background-color: rgba(255, 255, 255, 0);\r\n}\r\n\r\n.search input:focus{\r\n  border:none;\r\n  outline: none;\r\n}\r\n\r\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n  color:rgba(255, 255, 255, 0.884);\r\n}\r\n\r\n::-moz-placeholder { /* Firefox 19+ */\r\n  color:rgba(255, 255, 255, 0.884);\r\n}\r\n\r\n:-ms-input-placeholder { /* IE 10+ */\r\n  color:rgba(255, 255, 255, 0.884);\r\n}\r\n\r\n:-moz-placeholder { /* Firefox 18- */\r\n  color:rgba(255, 255, 255, 0.884);\r\n}\r\n\r\n/*------->> Login/Register */\r\n\r\n.nav_bar ul li{\r\n  width:40px;\r\n  height:40px;\r\n  text-align: center;\r\n  display: inline-block;\r\n  padding-top: 6px;\r\n  border-radius: 10px;\r\n  margin:0 20px 0 20px;\r\n  cursor: pointer;\r\n  transition: .5s;\r\n}\r\n\r\n.nav_bar ul li i{\r\n  text-decoration: none;\r\n  font-size: 30px;\r\n  text-align: center;\r\n  transition: .5s;\r\n}\r\n\r\n.about{\r\n  background-color: white !important;\r\n  border:none !important;\r\n  padding-top: 8px !important;\r\n  transition: .5s;\r\n}\r\n\r\n.about a {\r\n  color:hsl(184, 24%, 55%) !important;\r\n}\r\n\r\n.nav_bar ul li:hover i {\r\n  color:rgb(92, 56, 109);\r\n}\r\n\r\n/* <------- Add_post ------->*/\r\n\r\n.add_post{\r\n  display: inline-block;\r\n  width: 52px;\r\n  margin:auto 20px;\r\n  height:60px;\r\n  transition: .5s;\r\n}\r\n\r\n.add_post i{\r\n  font-size: 50px;\r\n  color: rgba(255, 255, 255, 0.322);\r\n  transition: .5s;\r\n}\r\n\r\n.add_post i:hover{\r\n  color:rgb(219, 219, 219);\r\n}\r\n\r\n.add_post_text {\r\n  top:30px;\r\n  left:-110px;\r\n  padding:15px 0 0 24px;\r\n  display: inline-block;\r\n  position:relative;\r\n  color:rgb(219, 219, 219);\r\n  font-size: 20px;\r\n  visibility: hidden;\r\n}\r\n\r\n#post_form{\r\n  position: relative;\r\n  top:-80px;\r\n  display:block;\r\n  margin:20px auto;\r\n  width:460px;\r\n  height:70px;\r\n  border-radius: 6px;\r\n  background-color: white;\r\n}\r\n\r\n#post_form i{\r\n  font-size: 35px;\r\n  width:80px;\r\n  margin-top: 10px;\r\n  margin:10px 6px;\r\n  height:60px;\r\n  padding:6px 14px;\r\n  transition: .5s;\r\n}\r\n\r\n#post_form i:hover{\r\n  color: hsl(130, 36%, 50%);\r\n}\r\n\r\n.post_form_contents{\r\n  position: relative;\r\n  top:-80px;\r\n}\r\n\r\n.fa-link{\r\n  color:rgb(57, 76, 116);\r\n}\r\n\r\n.fa-images{\r\n  color:rgb(50, 100, 50);\r\n}\r\n\r\n.fa-font{\r\n  color:rgb(34, 34, 34);\r\n}\r\n\r\n.fa-youtube{\r\n  color:rgb(185, 42, 42);\r\n}\r\n\r\n.fa-headphones{\r\n  color:rgb(79, 49, 99);\r\n}\r\n\r\n/* <------- Blog Styling ------->*/\r\n\r\n.main_dash{\r\n  position: relative;\r\n  display: block;\r\n  width:36%;\r\n  margin:100px auto;\r\n  min-height: 760px;\r\n  border-radius: 6px;\r\n  padding:20px 0 60px 0;\r\n  background-color: rgba(0, 0, 0, 0.171);\r\n}\r\n\r\n.blog_contain{\r\n  width:100%;\r\n  margin:auto;\r\n}\r\n\r\n.blog_card{\r\n  position: relative;\r\n  top:-80px;\r\n  display:block;\r\n  margin:20px auto;\r\n  width:460px;\r\n  min-height:350px;\r\n  border-radius: 6px;\r\n  background-color: white;\r\n}\r\n\r\n.blog_card h3{\r\n  font-size: 16px;\r\n  text-align: left;\r\n  margin-top: 30px;\r\n  padding-left: 0px;\r\n  color:black;\r\n  font-weight: bold;\r\n  display: inline-block;\r\n}\r\n\r\n.blog_card span{\r\n  margin:0;\r\n  padding:0;\r\n  top:0;\r\n  color:grey;\r\n}\r\n\r\n.card_img{\r\n  background-color: rgb(17, 17, 17);\r\n}\r\n\r\n.img{\r\n  width:100%;\r\n  margin:auto;\r\n}\r\n\r\n.gif{\r\n  width:100%!important;\r\n}\r\n\r\n.post_profile_photo{\r\n  width:50px!important;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  margin:15px;\r\n}\r\n\r\n.card_contents{\r\n  width:80%;\r\n  margin:auto;\r\n}\r\n\r\n.card_contents h2, p{\r\n  color:rgb(24, 24, 24);\r\n}\r\n\r\n.card_contents h2{\r\n  padding: 10px 0;\r\n  text-align: center;\r\n  font-weight: bold;\r\n}\r\n\r\n.card_contents p{\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.card_footer{\r\n  width:100%;\r\n  position: relative;\r\n  bottom: -5px;\r\n  background-color: rgb(255, 255, 255);\r\n  height:50px;\r\n  border-bottom-left-radius: 6px;\r\n  border-bottom-right-radius: 6px;\r\n  text-align: right;\r\n}\r\n\r\n.card_footer .fa-scroll{\r\n  color:rgb(109, 109, 109) !important;\r\n  display: inline-block !important;\r\n\r\n}\r\n\r\n.card_footer p{\r\n  display: inline-block;\r\n  color:grey;\r\n  padding-right: 220px;\r\n  padding-top: 10px;\r\n}\r\n\r\n.card_footer i{\r\n  color:rgb(109, 109, 109);\r\n  position: relative;\r\n  padding-top: 15px;\r\n  display: inline-block;\r\n  font-size: 24px;\r\n  margin: 0 10px;\r\n  transition: .5s;\r\n}\r\n\r\n.card_footer i:hover{\r\n  color:rgb(97, 158, 95)!important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw2Q0FBNkM7O0FBRTdDO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsU0FBUztFQUNULHVCQUF1QjtFQUN2QixlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLHlCQUF5QjtFQUN6QixtQ0FBbUM7Q0FDcEM7O0FBRUQ7RUFDRSxvQ0FBb0M7Q0FDckM7O0FBRUQ7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQjs7QUFDRCxxQkFBcUI7O0FBRXJCO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsdUNBQXVDO0VBQ3ZDLG9CQUFvQjtDQUNyQjs7QUFDRDtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix5Q0FBeUM7Q0FDMUM7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osY0FBYztDQUNmOztBQUVELDhCQUE4Qix5QkFBeUI7RUFDckQsaUNBQWlDO0NBQ2xDOztBQUNELHFCQUFxQixpQkFBaUI7RUFDcEMsaUNBQWlDO0NBQ2xD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QyxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxvQ0FBb0M7RUFDcEMsaUNBQWlDOztDQUVsQzs7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGlDQUFpQztDQUNsQyIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiA8LS0tLS0tLSBOYXZpZ2F0aW9uIEJhciBTdHlsaW5nIC0tLS0tLS0+Ki9cclxuXHJcbi5zY3JvbGxfbWFpbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgdG9wOjE1cHg7XHJcbiAgY29sb3I6d2hpdGUgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOi41cztcclxufVxyXG5cclxuLmhlYWRfdGV4dHtcclxuICB3aWR0aDo0MDBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgbWFyZ2luOjAgODBweDtcclxuICB0cmFuc2l0aW9uOi41cztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5oZWFkX3RleHQgaDEge1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjoycHggc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHRyYW5zaXRpb246LjVzO1xyXG59XHJcblxyXG4uaGVhZF90ZXh0OmhvdmVyIGgxe1xyXG4gIGNvbG9yOiByZ2IoMTA3LCA4NywgMTI0KTtcclxuICBib3JkZXI6MnB4IHNvbGlkIHJnYigxMDcsIDg3LCAxMjQpOztcclxufVxyXG5cclxuLmhlYWRfdGV4dDpob3ZlciBpe1xyXG4gIGNvbG9yOiByZ2IoMTA3LCA4NywgMTI0KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2X2JhcntcclxuICB3aWR0aDoxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDowO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVGN0U4MztcclxufVxyXG5cclxuLm5hdl9iYXIgdWwge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBtYXJnaW46MTBweCAyMDBweDtcclxufVxyXG4vKi0tLS0tLS0+PiBTZWFyY2ggKi9cclxuXHJcbi5mYS1zZWFyY2h7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxuLnNlYXJjaHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICByaWdodDo4MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNzEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnNlYXJjaCBpbnB1dHtcclxuICB3aWR0aDo0MDBweDtcclxuICBib3JkZXI6bm9uZTtcclxuICBoZWlnaHQ6NDBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxufVxyXG5cclxuLnNlYXJjaCBpbnB1dDpmb2N1c3tcclxuICBib3JkZXI6bm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUvT3BlcmEvU2FmYXJpICovXHJcbiAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg4NCk7XHJcbn1cclxuOjotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOSsgKi9cclxuICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODg0KTtcclxufVxyXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSUUgMTArICovXHJcbiAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg4NCk7XHJcbn1cclxuOi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE4LSAqL1xyXG4gIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC44ODQpO1xyXG59XHJcblxyXG4vKi0tLS0tLS0+PiBMb2dpbi9SZWdpc3RlciAqL1xyXG4ubmF2X2JhciB1bCBsaXtcclxuICB3aWR0aDo0MHB4O1xyXG4gIGhlaWdodDo0MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZy10b3A6IDZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjowIDIwcHggMCAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuLm5hdl9iYXIgdWwgbGkgaXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuXHJcbi5hYm91dHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy10b3A6IDhweCAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IC41cztcclxufVxyXG5cclxuLmFib3V0IGEge1xyXG4gIGNvbG9yOmhzbCgxODQsIDI0JSwgNTUlKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2X2JhciB1bCBsaTpob3ZlciBpIHtcclxuICBjb2xvcjpyZ2IoOTIsIDU2LCAxMDkpO1xyXG59XHJcblxyXG5cclxuLyogPC0tLS0tLS0gQWRkX3Bvc3QgLS0tLS0tLT4qL1xyXG4uYWRkX3Bvc3R7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA1MnB4O1xyXG4gIG1hcmdpbjphdXRvIDIwcHg7XHJcbiAgaGVpZ2h0OjYwcHg7XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcblxyXG4uYWRkX3Bvc3QgaXtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMjIpO1xyXG4gIHRyYW5zaXRpb246IC41cztcclxufVxyXG5cclxuLmFkZF9wb3N0IGk6aG92ZXJ7XHJcbiAgY29sb3I6cmdiKDIxOSwgMjE5LCAyMTkpO1xyXG59XHJcblxyXG4uYWRkX3Bvc3RfdGV4dCB7XHJcbiAgdG9wOjMwcHg7XHJcbiAgbGVmdDotMTEwcHg7XHJcbiAgcGFkZGluZzoxNXB4IDAgMCAyNHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBjb2xvcjpyZ2IoMjE5LCAyMTksIDIxOSk7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuI3Bvc3RfZm9ybXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOi04MHB4O1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgbWFyZ2luOjIwcHggYXV0bztcclxuICB3aWR0aDo0NjBweDtcclxuICBoZWlnaHQ6NzBweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNwb3N0X2Zvcm0gaXtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgd2lkdGg6ODBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbjoxMHB4IDZweDtcclxuICBoZWlnaHQ6NjBweDtcclxuICBwYWRkaW5nOjZweCAxNHB4O1xyXG4gIHRyYW5zaXRpb246IC41cztcclxufVxyXG5cclxuI3Bvc3RfZm9ybSBpOmhvdmVye1xyXG4gIGNvbG9yOiBoc2woMTMwLCAzNiUsIDUwJSk7XHJcbn1cclxuXHJcbi5wb3N0X2Zvcm1fY29udGVudHN7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDotODBweDtcclxufVxyXG5cclxuLmZhLWxpbmt7XHJcbiAgY29sb3I6cmdiKDU3LCA3NiwgMTE2KTtcclxufVxyXG5cclxuLmZhLWltYWdlc3tcclxuICBjb2xvcjpyZ2IoNTAsIDEwMCwgNTApO1xyXG59XHJcblxyXG4uZmEtZm9udHtcclxuICBjb2xvcjpyZ2IoMzQsIDM0LCAzNCk7XHJcbn1cclxuXHJcbi5mYS15b3V0dWJle1xyXG4gIGNvbG9yOnJnYigxODUsIDQyLCA0Mik7XHJcbn1cclxuXHJcbi5mYS1oZWFkcGhvbmVze1xyXG4gIGNvbG9yOnJnYig3OSwgNDksIDk5KTtcclxufVxyXG5cclxuLyogPC0tLS0tLS0gQmxvZyBTdHlsaW5nIC0tLS0tLS0+Ki9cclxuXHJcbi5tYWluX2Rhc2h7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOjM2JTtcclxuICBtYXJnaW46MTAwcHggYXV0bztcclxuICBtaW4taGVpZ2h0OiA3NjBweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcGFkZGluZzoyMHB4IDAgNjBweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNzEpO1xyXG59XHJcblxyXG4uYmxvZ19jb250YWlue1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgbWFyZ2luOmF1dG87XHJcbn1cclxuXHJcbi5ibG9nX2NhcmR7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDotODBweDtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIG1hcmdpbjoyMHB4IGF1dG87XHJcbiAgd2lkdGg6NDYwcHg7XHJcbiAgbWluLWhlaWdodDozNTBweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5ibG9nX2NhcmQgaDN7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBjb2xvcjpibGFjaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5ibG9nX2NhcmQgc3BhbntcclxuICBtYXJnaW46MDtcclxuICBwYWRkaW5nOjA7XHJcbiAgdG9wOjA7XHJcbiAgY29sb3I6Z3JleTtcclxufVxyXG5cclxuLmNhcmRfaW1ne1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNywgMTcsIDE3KTtcclxufVxyXG5cclxuLmltZ3tcclxuICB3aWR0aDoxMDAlO1xyXG4gIG1hcmdpbjphdXRvO1xyXG59XHJcblxyXG4uZ2lme1xyXG4gIHdpZHRoOjEwMCUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucG9zdF9wcm9maWxlX3Bob3Rve1xyXG4gIHdpZHRoOjUwcHghaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOjE1cHg7XHJcbn1cclxuXHJcbi5jYXJkX2NvbnRlbnRze1xyXG4gIHdpZHRoOjgwJTtcclxuICBtYXJnaW46YXV0bztcclxufVxyXG5cclxuLmNhcmRfY29udGVudHMgaDIsIHB7XHJcbiAgY29sb3I6cmdiKDI0LCAyNCwgMjQpO1xyXG59XHJcblxyXG4uY2FyZF9jb250ZW50cyBoMntcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2FyZF9jb250ZW50cyBwe1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5jYXJkX2Zvb3RlcntcclxuICB3aWR0aDoxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IC01cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGhlaWdodDo1MHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDZweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uY2FyZF9mb290ZXIgLmZhLXNjcm9sbHtcclxuICBjb2xvcjpyZ2IoMTA5LCAxMDksIDEwOSkgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5jYXJkX2Zvb3RlciBwe1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb2xvcjpncmV5O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIyMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZF9mb290ZXIgaXtcclxuICBjb2xvcjpyZ2IoMTA5LCAxMDksIDEwOSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcblxyXG4uY2FyZF9mb290ZXIgaTpob3ZlcntcclxuICBjb2xvcjpyZ2IoOTcsIDE1OCwgOTUpIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!---------------Navigation Bar-------------->\r\n<div class=\"nav_bar\">\r\n    <div class=\"head_text\">\r\n      <h1><i class=\"fas fa-scroll scroll_main\"></i>{{title}}</h1>\r\n    </div>\r\n\r\n    <!-- settings -->\r\n    <!-- <app-settings *ngIf=\"settingsClick\"></app-settings> -->\r\n    <!-- <app-settings></app-settings> -->\r\n\r\n    <!-- login/registration -->\r\n    <div class=\"login_register\">\r\n      <ul>\r\n        <li><a routerLink=\"/dashboard\" routerLinkActive=\"active\"><i class=\"fas fa-home\"></i></a></li>\r\n        <li><a routerLink=\"/random\" routerLinkActive=\"active\"><i class=\"far fa-compass\"></i></a></li>\r\n        <li><a routerLink=\"/signup\" routerLinkActive=\"active\"><i class=\"fas fa-comments\"></i></a></li>\r\n        <li><a routerLink=\"/signup\" routerLinkActive=\"active\"><i class=\"fas fa-cog\"></i></a></li>\r\n        <li><i class=\"fas fa-power-off\" (click)=\"logout()\"></i></li>\r\n      </ul>\r\n    </div>\r\n\r\n    <!-- search -->\r\n    <div class=\"search\">\r\n      <i class=\"fas fa-search\"></i>\r\n      <input type=\"text\" placeholder=\"Search Scroll\">\r\n\r\n    </div>\r\n</div>\r\n\r\n\r\n  <!---------------Post Dash -------------->\r\n\r\n\r\n  <!-------------------------- Creating a post -------------------------->\r\n  <div class=\"main_dash\">\r\n    <div class=\"add_post\">\r\n        <i *ngIf=\"!add_post\" (click)=\"add_post_clicked()\" class=\"fas fa-plus\"></i>\r\n        <i *ngIf=\"add_post\" (click)=\"add_post_clicked()\" class=\"fas fa-minus\"></i>\r\n    </div>\r\n    <p *ngIf=\"!add_post\" class=\"add_post_text\">new post</p>\r\n\r\n    <div *ngIf=\"add_post\" id=\"post_form\">\r\n        <i (click)=\"link_click()\" class=\"fas fa-link\"></i>\r\n        <i (click)=\"image_click()\" class=\"fas fa-images\"></i>\r\n        <i (click)=\"text_click()\" class=\"fas fa-font\"></i>\r\n        <i (click)=\"video_click()\" class=\"fab fa-youtube\"></i>\r\n        <i (click)=\"music_click()\" class=\"fas fa-headphones\"></i>\r\n    </div>\r\n\r\n\r\n    <app-post class=\"post_form_contents\" *ngIf=\"add_postText\"></app-post>\r\n\r\n    <app-upload *ngIf=\"add_postText\"></app-upload>\r\n\r\n\r\n\r\n\r\n  <!-------------------------- Central Blog Posts -------------------------->\r\n\r\n    <div class=\"blog_contain\">\r\n\r\n      <!-- card one -->\r\n      <div class=\"blog_card\">\r\n\r\n        <!-- <p>Hello {{user.username}}!</p> -->\r\n        <!-- <p>{{user | json}}</p> -->\r\n\r\n      <div class=\"card_head\">\r\n\r\n        <img class=\"post_profile_photo\" src=\"../assets/img/sky.jpg\" alt=\"\">\r\n        <h3>SkiesTheLimit <span>(22min ago)</span></h3>\r\n        <img class=\"img\" src=\"../assets/img/travel.jpg\" alt=\"\">\r\n      </div>\r\n\r\n      <div class=\"card_contents\">\r\n        <h2>Sailing in Greece</h2>\r\n        <p>I can't believe how amazing this weekend has been. Good food, wine, and friends to share this incredible journey with. I can't wait to visit again...</p>\r\n      </div>\r\n\r\n      <div class=\"card_footer\">\r\n\r\n          <i class=\"fas fa-scroll\"></i>\r\n          <p>915</p>\r\n\r\n          <i class=\"far fa-comment-dots\"></i>\r\n\r\n          <i class=\"fa fa-retweet\" aria-hidden=\"true\"></i>\r\n\r\n          <i class=\"fa fa-heart\" aria-hidden=\"true\"></i>\r\n      </div>\r\n    </div>\r\n\r\n      <!-- card three -->\r\n      <div class=\"blog_card\">\r\n        <img class=\"post_profile_photo\" src=\"../assets/img/sky.jpg\" alt=\"\">\r\n        <h3>Art-ifacts <span>(2 days ago)</span></h3>\r\n        <div class=\"card_img\">\r\n          <img class=\"gif\" src=\"../assets/img/fall.jpg\" alt=\"\">\r\n        </div>\r\n\r\n        <div class=\"card_footer\">\r\n\r\n            <i class=\"fas fa-scroll\"></i>\r\n            <p>12,300</p>\r\n\r\n            <i class=\"far fa-comment-dots\"></i>\r\n\r\n            <i class=\"fa fa-retweet\" aria-hidden=\"true\"></i>\r\n\r\n            <i class=\"fa fa-heart\" aria-hidden=\"true\"></i>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!-- card two -->\r\n    <div class=\"blog_card\">\r\n      <img class=\"post_profile_photo\" src=\"../assets/img/sky.jpg\" alt=\"\">\r\n      <h3>GhibliDearest <span>(2 hours ago)</span></h3>\r\n      <div class=\"card_img\">\r\n        <img class=\"gif\" src=\"../assets/img/kiki.gif\" alt=\"\">\r\n      </div>\r\n\r\n      <div class=\"card_footer\">\r\n\r\n          <i class=\"fas fa-scroll\"></i>\r\n          <p>2,011</p>\r\n\r\n          <i class=\"far fa-comment-dots\"></i>\r\n\r\n          <i class=\"fa fa-retweet\" aria-hidden=\"true\"></i>\r\n\r\n          <i class=\"fa fa-heart\" aria-hidden=\"true\"></i>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.title = "scroll";
        this.add_post = false;
        this.add_postText = false;
        this.errors = {};
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.thisUser();
        console.log('made it to dashboard');
        jquery__WEBPACK_IMPORTED_MODULE_4__(document).ready(function () {
            // $("html, body").animate({ scrollTop: 0 }, "slow");
            // Add post
            jquery__WEBPACK_IMPORTED_MODULE_4__('.fa-plus').mouseover(function () {
                jquery__WEBPACK_IMPORTED_MODULE_4__('.add_post_text').css("visibility", "visible");
                jquery__WEBPACK_IMPORTED_MODULE_4__('.add_post_text').hide();
                jquery__WEBPACK_IMPORTED_MODULE_4__('.add_post_text').fadeIn(400);
            });
            jquery__WEBPACK_IMPORTED_MODULE_4__('.fa-plus').mouseout(function () {
                jquery__WEBPACK_IMPORTED_MODULE_4__('.add_post_text').fadeOut(400, function () {
                    jquery__WEBPACK_IMPORTED_MODULE_4__('.add_post_text').css("visibility", "hidden");
                });
            });
        });
    };
    DashboardComponent.prototype.thisUser = function () {
        var _this = this;
        var observable = this._userService.getOneById();
        observable.subscribe(function (data) {
            if (data['status'] == "not ok") {
                _this.errors = data['errors']['errors'];
                _this._router.navigate(['/']);
            }
            else {
                _this.user = data["user"];
            }
        });
    };
    DashboardComponent.prototype.logout = function () {
        var _this = this;
        var observable = this._userService.signOff();
        observable.subscribe(function (data) {
            if (data['status'] == "not ok") {
                _this.errors = data['errors']['errors'];
            }
            else {
                _this._router.navigate(['/']);
            }
        });
    };
    DashboardComponent.prototype.add_post_clicked = function () {
        if (this.add_post) {
            this.add_post = false;
        }
        else {
            this.add_post = true;
        }
    };
    //<<-----for controlling the form dropdown----->>
    DashboardComponent.prototype.text_click = function () {
        if (this.add_postText) {
            this.add_postText = false;
        }
        else {
            this.add_postText = true;
        }
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* <------- Navigation Bar Styling ------->*/\r\n.nav_bar{\r\n  width:100%;\r\n  display: flex;\r\n  position: fixed;\r\n  margin-top: 20px;\r\n  z-index: 1;\r\n}\r\n.nav_bar ul {\r\n  position: fixed;\r\n  right:100px;\r\n}\r\n/*------->> Search */\r\n.fa-search{\r\n  color:white;\r\n  font-size: 18px;\r\n  padding-top: 12px;\r\n  padding-left: 20px;\r\n}\r\n.search{\r\n  position: relative;\r\n  left:100px;\r\n  background-color: rgba(0, 0, 0, 0.171);\r\n  border-radius: 10px;\r\n}\r\n.search input{\r\n  width:400px;\r\n  border:none;\r\n  height:40px;\r\n  font-size: 16px;\r\n  color:white;\r\n  font-weight: 100;\r\n  padding-left: 15px;\r\n  background-color: rgba(255, 255, 255, 0);\r\n}\r\n.search input:focus{\r\n  border:none;\r\n  outline: none;\r\n}\r\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n  color:rgba(255, 255, 255, 0.884);\r\n}\r\n::-moz-placeholder { /* Firefox 19+ */\r\n  color:rgba(255, 255, 255, 0.884);\r\n}\r\n:-ms-input-placeholder { /* IE 10+ */\r\n  color:rgba(255, 255, 255, 0.884);\r\n}\r\n:-moz-placeholder { /* Firefox 18- */\r\n  color:rgba(255, 255, 255, 0.884);\r\n}\r\n/*------->> Login/Register */\r\n.nav_bar ul li{\r\n  width:150px;\r\n  height:40px;\r\n  border:1px solid rgb(255, 255, 255);\r\n  text-align: center;\r\n  display: inline-block;\r\n  padding-top: 6px;\r\n  border-radius: 4px;\r\n  margin:0 10px;\r\n  cursor: pointer;\r\n  transition: .5s;\r\n}\r\n.nav_bar ul li a{\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  text-align: center;\r\n  transition: .5s;\r\n}\r\n.about{\r\n  background-color: white !important;\r\n  border:none !important;\r\n  padding-top: 8px !important;\r\n  transition: .5s;\r\n}\r\n.about a {\r\n  color:hsl(184, 24%, 55%) !important;\r\n}\r\n.nav_bar ul li:hover{\r\n  background-color: white;\r\n}\r\n.nav_bar ul li:hover a {\r\n  color:hsl(184, 24%, 55%);\r\n}\r\n.about:hover {\r\n  background-color: rgb(92, 56, 109) !important;\r\n}\r\n/* <------- Header Styling ------->*/\r\n.page_head{\r\n  position: relative;\r\n  top:300px;\r\n  width:100%;\r\n}\r\n.head_text{\r\n  width:30%;\r\n  margin:auto;\r\n  transition:.5s;\r\n  border-radius: 8px;\r\n}\r\n.page_head h1 {\r\n  font-size: 80px;\r\n  font-family: 'Nunito', sans-serif;\r\n  text-align: center;\r\n  border:2px solid white;\r\n  border-radius: 8px;\r\n}\r\n.head_text:hover {\r\n  background-color: rgb(107, 87, 124);\r\n}\r\n.page_head h4 {\r\n  margin-top:150px;\r\n  font-size: 40px;\r\n  font-family: 'Nunito', sans-serif;\r\n  text-align: center;\r\n}\r\n.scroll_main{\r\n  position: relative;\r\n  font-size: 60px;\r\n  padding-right: 20px;\r\n  top:30px;\r\n  color:white !important;\r\n}\r\n.fa-newspaper {\r\n  top:600px;\r\n  font-size: 400px;\r\n  color:rgba(255, 255, 255, 0.404) !important;\r\n  position: fixed;\r\n  transition:.5s;\r\n}\r\n.fa-signature {\r\n  right:300px;\r\n  top:300px;\r\n  font-size: 200px;\r\n  color:rgba(255, 255, 255, 0.404) !important;\r\n  position: fixed;\r\n  transition:.5s;\r\n}\r\n.fa-pen-fancy {\r\n  right:0px;\r\n  top:80px;\r\n  font-size: 300px;\r\n  color:rgba(255, 255, 255, 0.404) !important;\r\n  position: fixed;\r\n  transition:.5s;\r\n}\r\n.down_arrow{\r\n  padding-top: 200px;\r\n  width:80px;\r\n  margin:auto;\r\n}\r\n.fa-angle-double-down {\r\n  font-size: 80px;\r\n  color:rgba(255, 255, 255, 0.404) !important;\r\n  transition:.5s;\r\n}\r\n.arrow1{\r\n  bottom:80px;\r\n}\r\n.fa-angle-double-down:hover{\r\n  color:white !important;\r\n}\r\n.fa-pen-fancy:hover{\r\n  color:white !important;\r\n}\r\n.fa-signature:hover{\r\n  color:white !important;\r\n}\r\n.fa-newspaper:hover\r\n{\r\n  color:white !important;\r\n}\r\n/* <------- Picture Styling ------->*/\r\n.picture_contain{\r\n  position: relative;\r\n  top:310px;\r\n}\r\n.picture_contain img{\r\n  width:100%;\r\n  z-index: 0;\r\n}\r\n.picture_contain h4{\r\n  position: relative;\r\n  z-index: 1;\r\n  font-size: 40px;\r\n  top:-1000px;\r\n  text-align: center;\r\n}\r\n.arrow2{\r\n  position: relative;\r\n  z-index: 1;\r\n  font-size: 40px;\r\n  top:-580px;\r\n  text-align: center;\r\n}\r\n/* <------- Page Info 1 Styling ------->*/\r\n.page_info {\r\n  position: relative;\r\n  top:-60px;\r\n  width: 100%;\r\n  height:920px;\r\n  background-color: rgb(92, 56, 109);\r\n}\r\n#about{\r\n  padding-top: 100px;\r\n  text-align: center;\r\n}\r\n#info_head_2{\r\n  margin-top: 100px;\r\n  text-align: center;\r\n  font-size: 18px;\r\n}\r\n/* <------- Picture Info Styling ------->*/\r\n.page_info pre{\r\n  font-size: 30px;\r\n}\r\n.page_info_2 {\r\n  position: relative;\r\n  top:0;\r\n  width: 100%;\r\n  height:600px;\r\n}\r\n.page_info_head{\r\n  padding-top: 20px;\r\n  text-align: center;\r\n  font-size: 40px;\r\n}\r\n.page_info_2 h4{\r\n  margin-top: 30px;\r\n  text-align: center;\r\n  font-size: 20px;\r\n}\r\n.arrow3{\r\n  position: relative;\r\n  top:0px;\r\n}\r\n/* <------- Page Info 2 Styling ------->*/\r\n.blog_contain{\r\n  width:1500px;\r\n  margin:auto;\r\n}\r\n.blog_card{\r\n  display:inline-block;\r\n  margin: 60px 20px 0 20px;\r\n  width:460px;\r\n  min-height:350px;\r\n  border-radius: 6px;\r\n  background-color: white;\r\n}\r\n.blog_card h3{\r\n  font-size: 16px;\r\n  text-align: left;\r\n  margin-top: 30px;\r\n  padding-left: 0px;\r\n  color:black;\r\n  font-weight: bold;\r\n  display: inline-block;\r\n}\r\n.blog_card span{\r\n  margin:0;\r\n  padding:0;\r\n  top:0;\r\n  color:grey;\r\n}\r\n.card_img{\r\n  background-color: rgb(17, 17, 17);\r\n}\r\n.img{\r\n  width:100%;\r\n  margin:auto;\r\n}\r\n.gif{\r\n  width:100%!important;\r\n}\r\n.post_profile_photo{\r\n  width:50px!important;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  margin:15px;\r\n}\r\n.card_contents{\r\n  width:80%;\r\n  margin:auto;\r\n}\r\n.card_contents h2, p{\r\n  color:rgb(24, 24, 24);\r\n}\r\n.card_contents h2{\r\n  padding: 10px 0;\r\n  text-align: center;\r\n  font-weight: bold;\r\n}\r\n.card_contents p{\r\n  padding-bottom: 5px;\r\n}\r\n.card_footer{\r\n  width:100%;\r\n  position: relative;\r\n  bottom: -5px;\r\n  background-color: rgb(255, 255, 255);\r\n  height:50px;\r\n  border-bottom-left-radius: 6px;\r\n  border-bottom-right-radius: 6px;\r\n  text-align: right;\r\n}\r\n.card_footer .fa-scroll{\r\n  color:rgb(109, 109, 109) !important;\r\n  display: inline-block !important;\r\n\r\n}\r\n.card_footer p{\r\n  display: inline-block;\r\n  color:grey;\r\n  padding-right: 220px;\r\n  padding-top: 10px;\r\n}\r\n.card_footer i{\r\n  color:rgb(109, 109, 109);\r\n  position: relative;\r\n  padding-top: 15px;\r\n  display: inline-block;\r\n  font-size: 24px;\r\n  margin: 0 10px;\r\n  transition: .5s;\r\n}\r\n.card_footer i:hover{\r\n  color:rgb(97, 158, 95)!important;\r\n}\r\n.page_info_3 {\r\n  position: relative;\r\n  top:400px;\r\n  width: 100%;\r\n  height:890px;\r\n  text-align: center;\r\n  background-color: rgb(97, 158, 95);\r\n}\r\n.page_info_3 h3{\r\n  padding-top: 10px;\r\n  text-align: center;\r\n}\r\n.arrow4{\r\n  position: relative;\r\n  top:-240px;\r\n}\r\n/* <------- Info Icon Styling ------->*/\r\n.icons{\r\n  position: relative;\r\n  top:120px;\r\n  width:950px;\r\n  margin:auto;\r\n}\r\n.icon_contain{\r\n  display: inline-block;\r\n  margin:0 25px;\r\n  width:140px;\r\n  height:140px;\r\n  border-radius: 50%;\r\n  background-color: white;\r\n}\r\ni {\r\n  color: rgb(92, 56, 109);\r\n}\r\n.fa-pen {\r\n  position: relative;\r\n  font-size: 60px;\r\n  top:40px;\r\n  left:40px;\r\n}\r\n.fa-camera {\r\n  position: relative;\r\n  font-size: 70px;\r\n  top:35px;\r\n  left:36px;\r\n}\r\n.fa-paper-plane {\r\n  position: relative;\r\n  font-size: 70px;\r\n  top:35px;\r\n  left:30px;\r\n}\r\n.fa-laptop {\r\n  position: relative;\r\n  font-size: 70px;\r\n  top:35px;\r\n  left:27px;\r\n}\r\n.fa-mobile {\r\n  position: relative;\r\n  font-size: 70px;\r\n  top:35px;\r\n  left:48px;\r\n}\r\n.hidden{\r\n  visibility: hidden;\r\n}\r\n.hidden2{\r\n  visibility:hidden;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDZDQUE2QztBQUM3QztFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0NBQ1o7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0NBQ2I7QUFDRCxxQkFBcUI7QUFFckI7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7Q0FDcEI7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsdUNBQXVDO0VBQ3ZDLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHlDQUF5QztDQUMxQztBQUVEO0VBQ0UsWUFBWTtFQUNaLGNBQWM7Q0FDZjtBQUVELDhCQUE4Qix5QkFBeUI7RUFDckQsaUNBQWlDO0NBQ2xDO0FBQ0QscUJBQXFCLGlCQUFpQjtFQUNwQyxpQ0FBaUM7Q0FDbEM7QUFDRCx5QkFBeUIsWUFBWTtFQUNuQyxpQ0FBaUM7Q0FDbEM7QUFDRCxvQkFBb0IsaUJBQWlCO0VBQ25DLGlDQUFpQztDQUNsQztBQUVELDZCQUE2QjtBQUM3QjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0NBQ2pCO0FBRUQ7RUFDRSxtQ0FBbUM7RUFDbkMsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1QixnQkFBZ0I7Q0FDakI7QUFFRDtFQUNFLG9DQUFvQztDQUNyQztB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RUFDaEIsU0FBUztFQUNULFVBQVU7Q0FDWDtBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtDQUNYO0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0NBQ1g7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7Q0FDWDtBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiA8LS0tLS0tLSBOYXZpZ2F0aW9uIEJhciBTdHlsaW5nIC0tLS0tLS0+Ki9cclxuLm5hdl9iYXJ7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5uYXZfYmFyIHVsIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6MTAwcHg7XHJcbn1cclxuLyotLS0tLS0tPj4gU2VhcmNoICovXHJcblxyXG4uZmEtc2VhcmNoe1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2h7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6MTAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE3MSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uc2VhcmNoIGlucHV0e1xyXG4gIHdpZHRoOjQwMHB4O1xyXG4gIGJvcmRlcjpub25lO1xyXG4gIGhlaWdodDo0MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG59XHJcblxyXG4uc2VhcmNoIGlucHV0OmZvY3Vze1xyXG4gIGJvcmRlcjpub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIENocm9tZS9PcGVyYS9TYWZhcmkgKi9cclxuICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODg0KTtcclxufVxyXG46Oi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE5KyAqL1xyXG4gIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC44ODQpO1xyXG59XHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJRSAxMCsgKi9cclxuICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODg0KTtcclxufVxyXG46LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXHJcbiAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg4NCk7XHJcbn1cclxuXHJcbi8qLS0tLS0tLT4+IExvZ2luL1JlZ2lzdGVyICovXHJcbi5uYXZfYmFyIHVsIGxpe1xyXG4gIHdpZHRoOjE1MHB4O1xyXG4gIGhlaWdodDo0MHB4O1xyXG4gIGJvcmRlcjoxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZy10b3A6IDZweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgbWFyZ2luOjAgMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcbi5uYXZfYmFyIHVsIGxpIGF7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcblxyXG4uYWJvdXR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctdG9wOiA4cHggIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuXHJcbi5hYm91dCBhIHtcclxuICBjb2xvcjpoc2woMTg0LCAyNCUsIDU1JSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5uYXZfYmFyIHVsIGxpOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubmF2X2JhciB1bCBsaTpob3ZlciBhIHtcclxuICBjb2xvcjpoc2woMTg0LCAyNCUsIDU1JSk7XHJcbn1cclxuXHJcbi5hYm91dDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCA1NiwgMTA5KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiA8LS0tLS0tLSBIZWFkZXIgU3R5bGluZyAtLS0tLS0tPiovXHJcblxyXG4ucGFnZV9oZWFke1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6MzAwcHg7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuLmhlYWRfdGV4dHtcclxuICB3aWR0aDozMCU7XHJcbiAgbWFyZ2luOmF1dG87XHJcbiAgdHJhbnNpdGlvbjouNXM7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcbi5wYWdlX2hlYWQgaDEge1xyXG4gIGZvbnQtc2l6ZTogODBweDtcclxuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjoycHggc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uaGVhZF90ZXh0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA3LCA4NywgMTI0KTtcclxufVxyXG5cclxuLnBhZ2VfaGVhZCBoNCB7XHJcbiAgbWFyZ2luLXRvcDoxNTBweDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNjcm9sbF9tYWlue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IDYwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB0b3A6MzBweDtcclxuICBjb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmEtbmV3c3BhcGVyIHtcclxuICB0b3A6NjAwcHg7XHJcbiAgZm9udC1zaXplOiA0MDBweDtcclxuICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDA0KSAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0cmFuc2l0aW9uOi41cztcclxufVxyXG5cclxuLmZhLXNpZ25hdHVyZSB7XHJcbiAgcmlnaHQ6MzAwcHg7XHJcbiAgdG9wOjMwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjAwcHg7XHJcbiAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQwNCkgIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdHJhbnNpdGlvbjouNXM7XHJcbn1cclxuXHJcbi5mYS1wZW4tZmFuY3kge1xyXG4gIHJpZ2h0OjBweDtcclxuICB0b3A6ODBweDtcclxuICBmb250LXNpemU6IDMwMHB4O1xyXG4gIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MDQpICFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRyYW5zaXRpb246LjVzO1xyXG59XHJcblxyXG4uZG93bl9hcnJvd3tcclxuICBwYWRkaW5nLXRvcDogMjAwcHg7XHJcbiAgd2lkdGg6ODBweDtcclxuICBtYXJnaW46YXV0bztcclxufVxyXG5cclxuLmZhLWFuZ2xlLWRvdWJsZS1kb3duIHtcclxuICBmb250LXNpemU6IDgwcHg7XHJcbiAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQwNCkgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOi41cztcclxufVxyXG5cclxuLmFycm93MXtcclxuICBib3R0b206ODBweDtcclxufVxyXG5cclxuLmZhLWFuZ2xlLWRvdWJsZS1kb3duOmhvdmVye1xyXG4gIGNvbG9yOndoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZhLXBlbi1mYW5jeTpob3ZlcntcclxuICBjb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5mYS1zaWduYXR1cmU6aG92ZXJ7XHJcbiAgY29sb3I6d2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4uZmEtbmV3c3BhcGVyOmhvdmVyXHJcbntcclxuICBjb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiA8LS0tLS0tLSBQaWN0dXJlIFN0eWxpbmcgLS0tLS0tLT4qL1xyXG5cclxuLnBpY3R1cmVfY29udGFpbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOjMxMHB4O1xyXG59XHJcblxyXG4ucGljdHVyZV9jb250YWluIGltZ3tcclxuICB3aWR0aDoxMDAlO1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5waWN0dXJlX2NvbnRhaW4gaDR7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIHRvcDotMTAwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFycm93MntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgdG9wOi01ODBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIDwtLS0tLS0tIFBhZ2UgSW5mbyAxIFN0eWxpbmcgLS0tLS0tLT4qL1xyXG5cclxuLnBhZ2VfaW5mbyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDotNjBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6OTIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCA1NiwgMTA5KTtcclxufVxyXG5cclxuI2Fib3V0e1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNpbmZvX2hlYWRfMntcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG5cclxuLyogPC0tLS0tLS0gUGljdHVyZSBJbmZvIFN0eWxpbmcgLS0tLS0tLT4qL1xyXG4ucGFnZV9pbmZvIHByZXtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLnBhZ2VfaW5mb18yIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOjA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OjYwMHB4O1xyXG59XHJcblxyXG4ucGFnZV9pbmZvX2hlYWR7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5cclxuLnBhZ2VfaW5mb18yIGg0e1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmFycm93M3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOjBweDtcclxufVxyXG5cclxuXHJcbi8qIDwtLS0tLS0tIFBhZ2UgSW5mbyAyIFN0eWxpbmcgLS0tLS0tLT4qL1xyXG5cclxuLmJsb2dfY29udGFpbntcclxuICB3aWR0aDoxNTAwcHg7XHJcbiAgbWFyZ2luOmF1dG87XHJcbn1cclxuXHJcbi5ibG9nX2NhcmR7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiA2MHB4IDIwcHggMCAyMHB4O1xyXG4gIHdpZHRoOjQ2MHB4O1xyXG4gIG1pbi1oZWlnaHQ6MzUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmxvZ19jYXJkIGgze1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uYmxvZ19jYXJkIHNwYW57XHJcbiAgbWFyZ2luOjA7XHJcbiAgcGFkZGluZzowO1xyXG4gIHRvcDowO1xyXG4gIGNvbG9yOmdyZXk7XHJcbn1cclxuXHJcbi5jYXJkX2ltZ3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcsIDE3LCAxNyk7XHJcbn1cclxuXHJcbi5pbWd7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBtYXJnaW46YXV0bztcclxufVxyXG5cclxuLmdpZntcclxuICB3aWR0aDoxMDAlIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBvc3RfcHJvZmlsZV9waG90b3tcclxuICB3aWR0aDo1MHB4IWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjoxNXB4O1xyXG59XHJcblxyXG4uY2FyZF9jb250ZW50c3tcclxuICB3aWR0aDo4MCU7XHJcbiAgbWFyZ2luOmF1dG87XHJcbn1cclxuXHJcbi5jYXJkX2NvbnRlbnRzIGgyLCBwe1xyXG4gIGNvbG9yOnJnYigyNCwgMjQsIDI0KTtcclxufVxyXG5cclxuLmNhcmRfY29udGVudHMgaDJ7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNhcmRfY29udGVudHMgcHtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uY2FyZF9mb290ZXJ7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm90dG9tOiAtNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBoZWlnaHQ6NTBweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDZweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmNhcmRfZm9vdGVyIC5mYS1zY3JvbGx7XHJcbiAgY29sb3I6cmdiKDEwOSwgMTA5LCAxMDkpICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uY2FyZF9mb290ZXIgcHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29sb3I6Z3JleTtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMjBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNhcmRfZm9vdGVyIGl7XHJcbiAgY29sb3I6cmdiKDEwOSwgMTA5LCAxMDkpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG4gIHRyYW5zaXRpb246IC41cztcclxufVxyXG5cclxuLmNhcmRfZm9vdGVyIGk6aG92ZXJ7XHJcbiAgY29sb3I6cmdiKDk3LCAxNTgsIDk1KSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYWdlX2luZm9fMyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDo0MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6ODkwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgMTU4LCA5NSk7XHJcbn1cclxuXHJcbi5wYWdlX2luZm9fMyBoM3tcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hcnJvdzR7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDotMjQwcHg7XHJcbn1cclxuLyogPC0tLS0tLS0gSW5mbyBJY29uIFN0eWxpbmcgLS0tLS0tLT4qL1xyXG5cclxuLmljb25ze1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6MTIwcHg7XHJcbiAgd2lkdGg6OTUwcHg7XHJcbiAgbWFyZ2luOmF1dG87XHJcbn1cclxuXHJcbi5pY29uX2NvbnRhaW57XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjowIDI1cHg7XHJcbiAgd2lkdGg6MTQwcHg7XHJcbiAgaGVpZ2h0OjE0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaSB7XHJcbiAgY29sb3I6IHJnYig5MiwgNTYsIDEwOSk7XHJcbn1cclxuXHJcbi5mYS1wZW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IDYwcHg7XHJcbiAgdG9wOjQwcHg7XHJcbiAgbGVmdDo0MHB4O1xyXG59XHJcblxyXG4uZmEtY2FtZXJhIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiA3MHB4O1xyXG4gIHRvcDozNXB4O1xyXG4gIGxlZnQ6MzZweDtcclxufVxyXG5cclxuLmZhLXBhcGVyLXBsYW5lIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiA3MHB4O1xyXG4gIHRvcDozNXB4O1xyXG4gIGxlZnQ6MzBweDtcclxufVxyXG5cclxuLmZhLWxhcHRvcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogNzBweDtcclxuICB0b3A6MzVweDtcclxuICBsZWZ0OjI3cHg7XHJcbn1cclxuXHJcbi5mYS1tb2JpbGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IDcwcHg7XHJcbiAgdG9wOjM1cHg7XHJcbiAgbGVmdDo0OHB4O1xyXG59XHJcblxyXG4uaGlkZGVue1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLmhpZGRlbjJ7XHJcbiAgdmlzaWJpbGl0eTpoaWRkZW47XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!---------------Navigation Bar-------------->\r\n<div class=\"nav_bar\">\r\n\r\n  <!-- search -->\r\n  <div class=\"search\">\r\n    <i class=\"fas fa-search\"></i>\r\n    <input type=\"text\" placeholder=\"Search Scroll\">\r\n\r\n  </div>\r\n\r\n  <!-- login/registration -->\r\n  <div class=\"login_register\">\r\n    <ul>\r\n      <li><a routerLink=\"/login\" routerLinkActive=\"active\">Login</a></li>\r\n      <li><a routerLink=\"/signup\" routerLinkActive=\"active\">Sign Up</a></li>\r\n      <li class=\"about\"><a href=\"\">About</a></li>\r\n    </ul>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"page_head\">\r\n  <i class=\"far fa-newspaper\"></i>\r\n  <i class=\"fas fa-pen-fancy\"></i>\r\n  <i class=\"fas fa-signature\"></i>\r\n\r\n  <div class=\"hidden head_text\">\r\n    <h1><i class=\"fas fa-scroll scroll_main\"></i>{{title}}</h1>\r\n  </div>\r\n\r\n  <h4>\"Blogging made simple, for those that love to scroll\"</h4>\r\n\r\n  <div class=\"down_arrow arrow1\">\r\n    <i class=\"fas fa-angle-double-down\"></i>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n<!------------- End of Opening Page ------------->\r\n\r\n<div class=\"picture_contain\">\r\n  <img src=\"../assets/img/mountains.jpg\" alt=\"Dolomites Mountains\">\r\n  <h4 id=\"info_head_1\">Scroll is made for everyone. Whether you are at home, on your phone, or in the mountains...</h4>\r\n\r\n  <div class=\"down_arrow arrow2\">\r\n    <i class=\"fas fa-angle-double-down\"></i>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!------------- Start of About ------------->\r\n<div class=\"page_info\">\r\n  <pre id=\"about\">\r\n  Scroll is a familiar space,\r\n    where you can just be... you.</pre>\r\n\r\n  <h4 id=\"info_head_2\">\r\n    Blogs should be simple, elegant, powerful, and free. <br> Scroll puts these qualities together into a powerful <br>\r\n    platform, where you can express yourself! <br>\r\n    We are commited to open and free expression,\r\n    <br>because your blog is YOUR blog, not ours...\r\n  </h4>\r\n\r\n  <div class=\"icons\">\r\n      <div class=\"icon_contain\">\r\n          <i class=\"fas fa-pen\"></i>\r\n      </div>\r\n      <div class=\"icon_contain\">\r\n        <i class=\"fas fa-camera\"></i>\r\n      </div>\r\n      <div class=\"icon_contain\">\r\n          <i class=\"far fa-paper-plane\"></i>\r\n      </div>\r\n      <div class=\"icon_contain\">\r\n          <i class=\"fas fa-laptop\"></i>\r\n      </div>\r\n      <div class=\"icon_contain\">\r\n          <i class=\"fas fa-mobile\"></i>\r\n      </div>\r\n  </div>\r\n\r\n  <div class=\"down_arrow arrow3\">\r\n      <i class=\"fas fa-angle-double-down\"></i>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page_info_2\">\r\n  <h3 class=\"page_info_head\">Post about anything and everything.</h3>\r\n  <h4>Photos, Gifs, Stories, Life Updates, Poems, Art. The list of possibilites are limitless.</h4>\r\n\r\n  <div class=\"blog_contain\">\r\n\r\n    <!-- card one -->\r\n    <div class=\"blog_card\">\r\n\r\n      <div class=\"card_head\">\r\n        <img class=\"post_profile_photo\" src=\"../assets/img/sky.jpg\" alt=\"\">\r\n        <h3>SkiesTheLimit <span>(22min ago)</span></h3>\r\n        <img class=\"img\" src=\"../assets/img/travel.jpg\" alt=\"\">\r\n      </div>\r\n\r\n      <div class=\"card_contents\">\r\n        <h2>Sailing in Greece</h2>\r\n        <p>I can't believe how amazing this weekend has been. Good food, wine, and friends to share this incredible journey with. I can't wait to visit again...</p>\r\n      </div>\r\n\r\n      <div class=\"card_footer\">\r\n\r\n          <i class=\"fas fa-scroll\"></i>\r\n          <p>915</p>\r\n\r\n          <i class=\"far fa-comment-dots\"></i>\r\n\r\n          <i class=\"fa fa-retweet\" aria-hidden=\"true\"></i>\r\n\r\n          <i class=\"fa fa-heart\" aria-hidden=\"true\"></i>\r\n      </div>\r\n    </div>\r\n\r\n     <!-- card three -->\r\n     <div class=\"blog_card\">\r\n        <img class=\"post_profile_photo\" src=\"../assets/img/sky.jpg\" alt=\"\">\r\n        <h3>Art-ifacts <span>(2 days ago)</span></h3>\r\n        <div class=\"card_img\">\r\n          <img class=\"gif\" src=\"../assets/img/fall.jpg\" alt=\"\">\r\n        </div>\r\n\r\n        <div class=\"card_footer\">\r\n\r\n            <i class=\"fas fa-scroll\"></i>\r\n            <p>12,300</p>\r\n\r\n            <i class=\"far fa-comment-dots\"></i>\r\n\r\n            <i class=\"fa fa-retweet\" aria-hidden=\"true\"></i>\r\n\r\n            <i class=\"fa fa-heart\" aria-hidden=\"true\"></i>\r\n        </div>\r\n\r\n      </div>\r\n\r\n     <!-- card two -->\r\n    <div class=\"blog_card\">\r\n      <img class=\"post_profile_photo\" src=\"../assets/img/sky.jpg\" alt=\"\">\r\n      <h3>GhibliDearest <span>(2 hours ago)</span></h3>\r\n      <div class=\"card_img\">\r\n        <img class=\"gif\" src=\"../assets/img/kiki.gif\" alt=\"\">\r\n      </div>\r\n\r\n      <div class=\"card_footer\">\r\n\r\n          <i class=\"fas fa-scroll\"></i>\r\n          <p>2,011</p>\r\n\r\n          <i class=\"far fa-comment-dots\"></i>\r\n\r\n          <i class=\"fa fa-retweet\" aria-hidden=\"true\"></i>\r\n\r\n          <i class=\"fa fa-heart\" aria-hidden=\"true\"></i>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"down_arrow arrow4\">\r\n      <i class=\"fas fa-angle-double-down\"></i>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page_info_3\">\r\n    <h3>Our Platform</h3>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = 'scroll';
    }
    HomeComponent.prototype.ngOnInit = function () {
        // JQuery Function Integrations
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            // $("html, body").animate({ scrollTop: 0 }, "slow");
            jquery__WEBPACK_IMPORTED_MODULE_2__('div.hidden').fadeIn(1500).removeClass('hidden');
            jquery__WEBPACK_IMPORTED_MODULE_2__("#info_head_1").hide();
            jquery__WEBPACK_IMPORTED_MODULE_2__(".icons").hide();
            //--------->> Picture Functions
            jquery__WEBPACK_IMPORTED_MODULE_2__('.arrow1').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__("html, body").animate({ scrollTop: 910 }, "slower");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#info_head_1").fadeIn(1500, function () { });
            });
            //--------->> About Section Functions
            jquery__WEBPACK_IMPORTED_MODULE_2__('.arrow2').click(function () {
                var about = jquery__WEBPACK_IMPORTED_MODULE_2__(document.getElementById("about"));
                jquery__WEBPACK_IMPORTED_MODULE_2__("html, body").animate({ scrollTop: 1990 }, "slower");
                about.animate({ fontSize: '50px' }, 1000);
                jquery__WEBPACK_IMPORTED_MODULE_2__(".icons").fadeIn(3000, function () { });
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__('.arrow3').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__("html, body").animate({ scrollTop: 2905 }, "slower");
                jquery__WEBPACK_IMPORTED_MODULE_2__('.arrow3').fadeOut("slow");
            });
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* <------- Navigation Bar Styling ------->*/\r\nimg{\r\n  position: fixed;\r\n  top:-200px;\r\n  filter: blur(8px);\r\n  -webkit-filter: blur(4px);\r\n  filter: brightness(40%);\r\n}\r\n.nav_bar{\r\n  width:100%;\r\n  display: flex;\r\n  position: fixed;\r\n  margin-top: 20px;\r\n  z-index: 1;\r\n}\r\n.nav_bar ul {\r\n  position: fixed;\r\n  right:100px;\r\n}\r\n/*------->> Search */\r\n.fa-search{\r\n  color:white;\r\n  font-size: 18px;\r\n  padding-top: 12px;\r\n  padding-left: 20px;\r\n}\r\n.search{\r\n  position: relative;\r\n  left:100px;\r\n  background-color: rgba(0, 0, 0, 0.315);\r\n  border-radius: 10px;\r\n}\r\n.search input{\r\n  width:400px;\r\n  border:none;\r\n  height:40px;\r\n  font-size: 16px;\r\n  color:white;\r\n  font-weight: 100;\r\n  padding-left: 15px;\r\n  background-color: rgba(255, 255, 255, 0);\r\n}\r\n.search input:focus{\r\n  border:none;\r\n  outline: none;\r\n}\r\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n  color:rgba(255, 255, 255, 0.884);\r\n}\r\n::-moz-placeholder { /* Firefox 19+ */\r\n  color:rgba(255, 255, 255, 0.884);\r\n}\r\n:-ms-input-placeholder { /* IE 10+ */\r\n  color:rgba(255, 255, 255, 0.884);\r\n}\r\n:-moz-placeholder { /* Firefox 18- */\r\n  color:rgba(255, 255, 255, 0.884);\r\n}\r\n/*------->> Login/Register */\r\n.nav_bar ul li{\r\n  width:150px;\r\n  height:40px;\r\n  border:1px solid rgb(255, 255, 255);\r\n  text-align: center;\r\n  display: inline-block;\r\n  padding-top: 6px;\r\n  border-radius: 4px;\r\n  margin:0 10px;\r\n  cursor: pointer;\r\n  transition: .5s;\r\n}\r\n.nav_bar ul li a{\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  text-align: center;\r\n  transition: .5s;\r\n  width: 100px;\r\n}\r\n.about{\r\n  background-color: white !important;\r\n  border:none !important;\r\n  padding-top: 8px !important;\r\n  transition: .5s;\r\n}\r\n.about a {\r\n  color:hsl(184, 24%, 55%) !important;\r\n}\r\n.nav_bar ul li:hover{\r\n  background-color: white;\r\n}\r\n.nav_bar ul li:hover a {\r\n  color:hsl(184, 24%, 55%);\r\n}\r\n.about:hover {\r\n  background-color: rgb(92, 56, 109) !important;\r\n}\r\n/* <------- Header Styling ------->*/\r\n.page_head{\r\n  position: relative;\r\n  top:220px;\r\n  width:400px;\r\n  margin:auto;\r\n}\r\n.head_text{\r\n  height:400px;\r\n  margin:auto;\r\n  transition:.5s;\r\n}\r\n.page_head h1 {\r\n  font-size: 80px;\r\n  font-family: 'Nunito', sans-serif;\r\n  text-align: center;\r\n}\r\n.head_text{\r\n  width:90%;\r\n  margin:auto;\r\n}\r\n.page_head h4 {\r\n  margin-top:150px;\r\n  font-size: 40px;\r\n  font-family: 'Nunito', sans-serif;\r\n  text-align: center;\r\n}\r\n.scroll_main{\r\n  position: relative;\r\n  font-size: 60px;\r\n  padding-right: 20px;\r\n  top:30px;\r\n  color:white !important;\r\n}\r\n.login_input{\r\n  display:block;\r\n  width:100%;\r\n  border:2px solid rgb(233, 233, 233);\r\n  border-radius: 3px;\r\n  height:40px;\r\n  margin-top: 20px;\r\n  margin-bottom: 15px;\r\n  color: rgb(233, 233, 233) !important;\r\n  text-align: center;\r\n  font-size: 18px;\r\n  background-color: rgba(255, 255, 255, 0);\r\n  transition:.5s;\r\n}\r\n.login_input:hover{\r\n  background-color: rgba(255, 255, 255, 0.61);\r\n  color: rgb(29, 29, 29) !important;\r\n  border:2px solid rgba(255, 255, 255, 0.61);\r\n  border-radius: 3px;\r\n}\r\n.login_input:hover::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n  color: rgb(65, 65, 65) !important;\r\n  font-weight: bold;\r\n}\r\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n  color: rgb(233, 233, 233) !important;\r\n  transition:.5s;\r\n}\r\n::-moz-placeholder { /* Firefox 19+ */\r\n  color: rgb(233, 233, 233) !important;\r\n  transition:.5s;\r\n}\r\n:-ms-input-placeholder { /* IE 10+ */\r\n  color: rgb(233, 233, 233) !important;\r\n  transition:.5s;\r\n}\r\n:-moz-placeholder { /* Firefox 18- */\r\n  color: rgb(233, 233, 233) !important;\r\n  transition:.5s;\r\n}\r\n.login_input:focus{\r\n  outline:none;\r\n  border:2px solid  rgba(255, 255, 255, 0.61);\r\n  border-radius: 3px;\r\n  font-weight: bold;\r\n}\r\n.submit {\r\n  display:block;\r\n  width:100%;\r\n  border-radius: 20px;\r\n  border:none;\r\n  height:40px;\r\n  margin-top: 60px;\r\n  margin-bottom: 15px;\r\n  color: rgb(233, 233, 233) !important;\r\n  text-align: center;\r\n  font-size: 18px;\r\n  background-color: rgba(61, 37, 71, 0.822);\r\n  transition:.5s;\r\n}\r\n.submit:hover{\r\n  background-color: rgb(92, 56, 109);\r\n}\r\n.error {\r\n  text-align: center;\r\n  background-color: rgba(0, 0, 0, 0.2);\r\n  border-radius: 3px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNkNBQTZDO0FBQzdDO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLHdCQUF3QjtDQUN6QjtBQUVEO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7Q0FDWjtBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7Q0FDYjtBQUNELHFCQUFxQjtBQUVyQjtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtDQUNwQjtBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx1Q0FBdUM7RUFDdkMsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIseUNBQXlDO0NBQzFDO0FBRUQ7RUFDRSxZQUFZO0VBQ1osY0FBYztDQUNmO0FBRUQsOEJBQThCLHlCQUF5QjtFQUNyRCxpQ0FBaUM7Q0FDbEM7QUFDRCxxQkFBcUIsaUJBQWlCO0VBQ3BDLGlDQUFpQztDQUNsQztBQUNELHlCQUF5QixZQUFZO0VBQ25DLGlDQUFpQztDQUNsQztBQUNELG9CQUFvQixpQkFBaUI7RUFDbkMsaUNBQWlDO0NBQ2xDO0FBRUQsNkJBQTZCO0FBQzdCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsYUFBYTtDQUNkO0FBRUQ7RUFDRSxtQ0FBbUM7RUFDbkMsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1QixnQkFBZ0I7Q0FDakI7QUFFRDtFQUNFLG9DQUFvQztDQUNyQztBQUdEO0VBQ0Usd0JBQXdCO0NBQ3pCO0FBRUQ7RUFDRSx5QkFBeUI7Q0FDMUI7QUFFRDtFQUNFLDhDQUE4QztDQUMvQztBQUVELHFDQUFxQztBQUVyQztFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7Q0FDYjtBQUVEO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLG1CQUFtQjtDQUNwQjtBQUVEO0VBQ0UsVUFBVTtFQUNWLFlBQVk7Q0FDYjtBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixTQUFTO0VBQ1QsdUJBQXVCO0NBQ3hCO0FBRUQ7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIseUNBQXlDO0VBQ3pDLGVBQWU7Q0FDaEI7QUFFRDtFQUNFLDRDQUE0QztFQUM1QyxrQ0FBa0M7RUFDbEMsMkNBQTJDO0VBQzNDLG1CQUFtQjtDQUNwQjtBQUVELGdEQUFnRCx5QkFBeUI7RUFDdkUsa0NBQWtDO0VBQ2xDLGtCQUFrQjtDQUNuQjtBQUVELDhCQUE4Qix5QkFBeUI7RUFDckQscUNBQXFDO0VBQ3JDLGVBQWU7Q0FDaEI7QUFDRCxxQkFBcUIsaUJBQWlCO0VBQ3BDLHFDQUFxQztFQUNyQyxlQUFlO0NBQ2hCO0FBQ0QseUJBQXlCLFlBQVk7RUFDbkMscUNBQXFDO0VBQ3JDLGVBQWU7Q0FDaEI7QUFDRCxvQkFBb0IsaUJBQWlCO0VBQ25DLHFDQUFxQztFQUNyQyxlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxhQUFhO0VBQ2IsNENBQTRDO0VBQzVDLG1CQUFtQjtFQUNuQixrQkFBa0I7Q0FDbkI7QUFFRDtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwwQ0FBMEM7RUFDMUMsZUFBZTtDQUNoQjtBQUVEO0VBQ0UsbUNBQW1DO0NBQ3BDO0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogPC0tLS0tLS0gTmF2aWdhdGlvbiBCYXIgU3R5bGluZyAtLS0tLS0tPiovXHJcbmltZ3tcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOi0yMDBweDtcclxuICBmaWx0ZXI6IGJsdXIoOHB4KTtcclxuICAtd2Via2l0LWZpbHRlcjogYmx1cig0cHgpO1xyXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg0MCUpO1xyXG59XHJcblxyXG4ubmF2X2JhcntcclxuICB3aWR0aDoxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm5hdl9iYXIgdWwge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDoxMDBweDtcclxufVxyXG4vKi0tLS0tLS0+PiBTZWFyY2ggKi9cclxuXHJcbi5mYS1zZWFyY2h7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxuLnNlYXJjaHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDoxMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzE1KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5zZWFyY2ggaW5wdXR7XHJcbiAgd2lkdGg6NDAwcHg7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgaGVpZ2h0OjQwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbn1cclxuXHJcbi5zZWFyY2ggaW5wdXQ6Zm9jdXN7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogQ2hyb21lL09wZXJhL1NhZmFyaSAqL1xyXG4gIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC44ODQpO1xyXG59XHJcbjo6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTkrICovXHJcbiAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg4NCk7XHJcbn1cclxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIElFIDEwKyAqL1xyXG4gIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC44ODQpO1xyXG59XHJcbjotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOC0gKi9cclxuICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODg0KTtcclxufVxyXG5cclxuLyotLS0tLS0tPj4gTG9naW4vUmVnaXN0ZXIgKi9cclxuLm5hdl9iYXIgdWwgbGl7XHJcbiAgd2lkdGg6MTUwcHg7XHJcbiAgaGVpZ2h0OjQwcHg7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBtYXJnaW46MCAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuLm5hdl9iYXIgdWwgbGkgYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4uYWJvdXR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctdG9wOiA4cHggIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuXHJcbi5hYm91dCBhIHtcclxuICBjb2xvcjpoc2woMTg0LCAyNCUsIDU1JSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5uYXZfYmFyIHVsIGxpOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubmF2X2JhciB1bCBsaTpob3ZlciBhIHtcclxuICBjb2xvcjpoc2woMTg0LCAyNCUsIDU1JSk7XHJcbn1cclxuXHJcbi5hYm91dDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCA1NiwgMTA5KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiA8LS0tLS0tLSBIZWFkZXIgU3R5bGluZyAtLS0tLS0tPiovXHJcblxyXG4ucGFnZV9oZWFke1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6MjIwcHg7XHJcbiAgd2lkdGg6NDAwcHg7XHJcbiAgbWFyZ2luOmF1dG87XHJcbn1cclxuXHJcbi5oZWFkX3RleHR7XHJcbiAgaGVpZ2h0OjQwMHB4O1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIHRyYW5zaXRpb246LjVzO1xyXG59XHJcblxyXG4ucGFnZV9oZWFkIGgxIHtcclxuICBmb250LXNpemU6IDgwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRfdGV4dHtcclxuICB3aWR0aDo5MCU7XHJcbiAgbWFyZ2luOmF1dG87XHJcbn1cclxuXHJcbi5wYWdlX2hlYWQgaDQge1xyXG4gIG1hcmdpbi10b3A6MTUwcHg7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zY3JvbGxfbWFpbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgdG9wOjMwcHg7XHJcbiAgY29sb3I6d2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvZ2luX2lucHV0e1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBib3JkZXI6MnB4IHNvbGlkIHJnYigyMzMsIDIzMywgMjMzKTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgaGVpZ2h0OjQwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMykgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgdHJhbnNpdGlvbjouNXM7XHJcbn1cclxuXHJcbi5sb2dpbl9pbnB1dDpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjEpO1xyXG4gIGNvbG9yOiByZ2IoMjksIDI5LCAyOSkgIWltcG9ydGFudDtcclxuICBib3JkZXI6MnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MSk7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4ubG9naW5faW5wdXQ6aG92ZXI6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUvT3BlcmEvU2FmYXJpICovXHJcbiAgY29sb3I6IHJnYig2NSwgNjUsIDY1KSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUvT3BlcmEvU2FmYXJpICovXHJcbiAgY29sb3I6IHJnYigyMzMsIDIzMywgMjMzKSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246LjVzO1xyXG59XHJcbjo6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTkrICovXHJcbiAgY29sb3I6IHJnYigyMzMsIDIzMywgMjMzKSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246LjVzO1xyXG59XHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJRSAxMCsgKi9cclxuICBjb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjouNXM7XHJcbn1cclxuOi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE4LSAqL1xyXG4gIGNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMykgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOi41cztcclxufVxyXG5cclxuLmxvZ2luX2lucHV0OmZvY3Vze1xyXG4gIG91dGxpbmU6bm9uZTtcclxuICBib3JkZXI6MnB4IHNvbGlkICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnN1Ym1pdCB7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICB3aWR0aDoxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgaGVpZ2h0OjQwcHg7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMykgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjEsIDM3LCA3MSwgMC44MjIpO1xyXG4gIHRyYW5zaXRpb246LjVzO1xyXG59XHJcblxyXG4uc3VibWl0OmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgNTYsIDEwOSk7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!---------------Navigation Bar-------------->\r\n<img src=\"../../assets/img/login1.jpg\" alt=\"\">\r\n<div class=\"nav_bar\">\r\n  <!-- search -->\r\n  <div class=\"search\">\r\n    <i class=\"fas fa-search\"></i>\r\n    <input type=\"text\" placeholder=\"Search Scroll\">\r\n\r\n  </div>\r\n\r\n  <!-- login/registration -->\r\n  <div class=\"login_register\">\r\n    <ul>\r\n      <li><a routerLink=\"/\" routerLinkActive=\"active\">Home</a></li>\r\n      <li><a routerLink=\"/signup\" routerLinkActive=\"active\">Sign Up</a></li>\r\n      <li class=\"about\"><a href=\"\">About</a></li>\r\n    </ul>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n<div class=\"page_head\">\r\n  <h1><i class=\"fas fa-scroll scroll_main\"></i>{{title}}</h1>\r\n  <div class=\"head_text\">\r\n    <form (submit)=\"login()\">\r\n      <input class=\"login_input\" type=\"text\" name=\"user.email\" [(ngModel)]=\"user.email\" placeholder=\"email\">\r\n      <input class=\"login_input\" type=\"text\" name=\"user.password\" [(ngModel)]=\"user.password\" placeholder=\"password\">\r\n      <div class=\"error\">\r\n        <p *ngIf=\"errors.username\">{{errors.username.message}}</p>\r\n        <p *ngIf=\"errors.email\">{{errors.email.message}}</p>\r\n        <p *ngIf=\"errors.password\">{{errors.password.message}}</p>\r\n        <p *ngIf=\"errors.repeat\">{{errors.repeat.message}}</p>\r\n      </div>\r\n      <input class=\"submit\" type=\"submit\" value=\"Start Scrolling\">\r\n    </form>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n<!------------- End of Opening Page ------------->\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.title = "scroll";
        this.user = {
            "email": '',
            "password": ''
        };
        this.errors = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var observable = this._userService.getOne(this.user);
        observable.subscribe(function (data) {
            if (data['status'] == "not ok") {
                _this.errors = data['errors']['errors'];
            }
            else {
                _this._router.navigate(['/dashboard']);
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/post.service.ts":
/*!*********************************!*\
  !*** ./src/app/post.service.ts ***!
  \*********************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PostService = /** @class */ (function () {
    function PostService(_http) {
        this._http = _http;
    }
    PostService.prototype.getAll = function () {
        return this._http.get('/posts');
    };
    PostService.prototype.createOne = function (post) {
        return this._http.post('/posts', post);
    };
    PostService.prototype.getOne = function (id) {
        return this._http.get("/post/" + id);
    };
    PostService.prototype.updateOne = function (id, post) {
        return this._http.put("/posts/" + id, post);
    };
    PostService.prototype.deleteOne = function (id) {
        return this._http.delete("/posts/" + id);
    };
    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/*!*****************************************!*\
  !*** ./src/app/post/post.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.addpost{\r\n  display:block;\r\n  margin:20px auto 0px;\r\n  width:460px;\r\n  min-height:80px;\r\n  border-radius: 6px;\r\n  background-color: white;\r\n}\r\n\r\ninput[type=\"text\"]{\r\n  width:100%;\r\n  color: black;\r\n  height:50px;\r\n  font-size: 25px;\r\n  text-align: center;\r\n  border:none;\r\n  border-bottom: 1px solid rgb(173, 173, 173);\r\n  border-top-right-radius: 6px;\r\n  border-top-left-radius: 6px;\r\n\r\n}\r\n\r\ntextarea {\r\n  min-width: 100%;\r\n  max-width:100%;\r\n  min-height: 100px;\r\n  border:none;\r\n  padding: 10px 20px;\r\n  font-size: 16px;\r\n  color:rgb(25, 25, 25);\r\n  resize: none;\r\n}\r\n\r\ninput:focus{\r\n  outline: none;\r\n}\r\n\r\ntextarea:focus{\r\n  outline: none;\r\n}\r\n\r\ninput[type=\"submit\"]{\r\n  background-color: rgb(37, 150, 71);\r\n  width:100px;\r\n  height:30px;\r\n  margin: auto 180px 10px 180px;\r\n  border-radius: 20px;\r\n  transition: .5s;\r\n  font-size: 14px;\r\n  border:none;\r\n}\r\n\r\ninput[type=\"submit\"]:hover{\r\n  background-color: rgb(35, 114, 59);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix3QkFBd0I7Q0FDekI7O0FBRUQ7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiw0Q0FBNEM7RUFDNUMsNkJBQTZCO0VBQzdCLDRCQUE0Qjs7Q0FFN0I7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsYUFBYTtDQUNkOztBQUVEO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0UsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLG1DQUFtQztDQUNwQyIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5hZGRwb3N0e1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgbWFyZ2luOjIwcHggYXV0byAwcHg7XHJcbiAgd2lkdGg6NDYwcHg7XHJcbiAgbWluLWhlaWdodDo4MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl17XHJcbiAgd2lkdGg6MTAwJTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgaGVpZ2h0OjUwcHg7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6bm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE3MywgMTczLCAxNzMpO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xyXG5cclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6MTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICBib3JkZXI6bm9uZTtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOnJnYigyNSwgMjUsIDI1KTtcclxuICByZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0OmZvY3Vze1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbnRleHRhcmVhOmZvY3Vze1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl17XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM3LCAxNTAsIDcxKTtcclxuICB3aWR0aDoxMDBweDtcclxuICBoZWlnaHQ6MzBweDtcclxuICBtYXJnaW46IGF1dG8gMTgwcHggMTBweCAxODBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHRyYW5zaXRpb246IC41cztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM1LCAxMTQsIDU5KTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"addpost\">\r\n\r\n  <!---------- post form ----------->\r\n  <form (submit)=\"create()\">\r\n\r\n      <!---------- Title ----------->\r\n      <input type=\"text\" name=\"post.title\" [(ngModel)]=\"post.title\" class=\"form-control\" placeholder=\"You title goes here\">\r\n      <!---------- Errors----------->\r\n      <small *ngIf=\"errors.title\" class=\"form-text text-muted\">{{errors.title.message}}</small>\r\n\r\n      <!---------- Contents ----------->\r\n      <textarea name=\"post.contents\" [(ngModel)]=\"post.contents\" placeholder=\"Go ahead, tell us how you really feel!\"></textarea>\r\n      <!---------- Errors ----------->\r\n      <small *ngIf=\"errors.contents\" class=\"form-text text-muted\">{{errors.content.message}}</small>\r\n\r\n      <!---------- Submit ----------->\r\n    <input type=\"submit\" value=\"Add a Post\" />\r\n\r\n  </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PostComponent = /** @class */ (function () {
    function PostComponent(_postService, _userService, _router) {
        this._postService = _postService;
        this._userService = _userService;
        this._router = _router;
        this.post = {
            "title": "",
            "contents": "",
            "creator_id": "",
            "creator_name": "",
            "creator_icon": ""
        };
        this.errors = {};
    }
    PostComponent.prototype.ngOnInit = function () {
        this.thisUser();
        console.log(this.user);
    };
    PostComponent.prototype.create = function () {
        var _this = this;
        console.log("CREATE EXECUTED");
        var observable = this._postService.createOne(this.post);
        observable.subscribe(function (data) {
            console.log(data);
            if (data['status'] == 'not ok') {
                _this.errors = data['errors']['errors'];
            }
            else {
                _this._router.navigate(['/dashboard']);
            }
        });
    };
    PostComponent.prototype.thisUser = function () {
        var _this = this;
        var observable = this._userService.getOneById();
        observable.subscribe(function (data) {
            if (data['status'] == "not ok") {
                _this.errors = data['errors']['errors'];
                _this._router.navigate(['/']);
            }
            else {
                _this.user = data["user"];
                console.log(_this.user);
                _this.post = {
                    "title": "",
                    "contents": "",
                    "creator_id": _this.user._id,
                    "creator_name": _this.user.username,
                    "creator_icon": _this.user.icon
                };
                console.log(_this.post);
            }
        });
    };
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/post/post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/random/random.component.css":
/*!*********************************************!*\
  !*** ./src/app/random/random.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* <------- Navigation Bar Styling ------->*/\r\n\r\n.scroll_main{\r\n  position: relative;\r\n  font-size: 30px;\r\n  padding-right: 10px;\r\n  top:15px;\r\n  color:white !important;\r\n  transition:.5s;\r\n}\r\n\r\n.head_text{\r\n  width:400px;\r\n  height: 60px;\r\n  margin:0 80px;\r\n  transition:.5s;\r\n  border-radius: 8px;\r\n}\r\n\r\n.head_text h1 {\r\n  font-size: 40px;\r\n  font-family: 'Nunito', sans-serif;\r\n  text-align: center;\r\n  border:2px solid white;\r\n  border-radius: 8px;\r\n  transition:.5s;\r\n}\r\n\r\n.head_text:hover h1{\r\n  color: rgb(107, 87, 124);\r\n  border:2px solid rgb(107, 87, 124);;\r\n}\r\n\r\n.head_text:hover i{\r\n  color: rgb(107, 87, 124) !important;\r\n}\r\n\r\n.nav_bar{\r\n  width:100%;\r\n  display: flex;\r\n  position: fixed;\r\n  top:0;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  z-index: 1;\r\n  background-color: hsl(184, 18%, 30%);\r\n}\r\n\r\n.nav_bar ul {\r\n  position: fixed;\r\n  margin:10px 200px;\r\n}\r\n\r\n/*------->> Search */\r\n\r\n.fa-search{\r\n  color:white;\r\n  font-size: 18px;\r\n  padding-top: 12px;\r\n  padding-left: 20px;\r\n}\r\n\r\n.search{\r\n  position: fixed;\r\n  margin-top: 10px;\r\n  right:80px;\r\n  background-color: rgba(0, 0, 0, 0.171);\r\n  border-radius: 10px;\r\n}\r\n\r\n.search input{\r\n  width:400px;\r\n  border:none;\r\n  height:40px;\r\n  font-size: 16px;\r\n  color:white;\r\n  font-weight: 100;\r\n  padding-left: 15px;\r\n  background-color: rgba(255, 255, 255, 0);\r\n}\r\n\r\n.search input:focus{\r\n  border:none;\r\n  outline: none;\r\n}\r\n\r\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n  color:rgba(255, 255, 255, 0.884);\r\n}\r\n\r\n::-moz-placeholder { /* Firefox 19+ */\r\n  color:rgba(255, 255, 255, 0.884);\r\n}\r\n\r\n:-ms-input-placeholder { /* IE 10+ */\r\n  color:rgba(255, 255, 255, 0.884);\r\n}\r\n\r\n:-moz-placeholder { /* Firefox 18- */\r\n  color:rgba(255, 255, 255, 0.884);\r\n}\r\n\r\n/*------->> Login/Register */\r\n\r\n.nav_bar ul li{\r\n  width:40px;\r\n  height:40px;\r\n  text-align: center;\r\n  display: inline-block;\r\n  padding-top: 6px;\r\n  border-radius: 10px;\r\n  margin:0 20px 0 20px;\r\n  cursor: pointer;\r\n  transition: .5s;\r\n}\r\n\r\n.nav_bar ul li i{\r\n  text-decoration: none;\r\n  font-size: 30px;\r\n  text-align: center;\r\n  transition: .5s;\r\n}\r\n\r\n.about{\r\n  background-color: white !important;\r\n  border:none !important;\r\n  padding-top: 8px !important;\r\n  transition: .5s;\r\n}\r\n\r\n.about a {\r\n  color:hsl(184, 24%, 55%) !important;\r\n}\r\n\r\n.nav_bar ul li:hover i {\r\n  color:rgb(92, 56, 109);\r\n}\r\n\r\n/* <------- Add_post ------->*/\r\n\r\n.add_post{\r\n  display: inline-block;\r\n  width: 52px;\r\n  margin:auto 20px;\r\n  height:60px;\r\n  transition: .5s;\r\n}\r\n\r\n.add_post i{\r\n  font-size: 50px;\r\n  color: rgba(255, 255, 255, 0.322);\r\n  transition: .5s;\r\n}\r\n\r\n.add_post i:hover{\r\n  color:rgb(219, 219, 219);\r\n}\r\n\r\n.add_post_text {\r\n  margin:auto;\r\n  padding:15px 0 0 24px;\r\n  display: inline-block;\r\n  position:relative;\r\n  color:white;\r\n  font-size: 20px;\r\n  visibility: hidden;\r\n}\r\n\r\n#post_form{\r\n  display:block;\r\n  margin:20px auto;\r\n  width:460px;\r\n  min-height:100px;\r\n  border-radius: 6px;\r\n  background-color: white;\r\n}\r\n\r\n#post_form i{\r\n  font-size: 50px;\r\n  width:80px;\r\n  margin-top: 10px;\r\n  margin:10px 6px;\r\n  height:80px;\r\n  padding:16px 14px;\r\n  transition: .5s;\r\n}\r\n\r\n#post_form i:hover{\r\n  color: hsl(130, 36%, 50%);\r\n}\r\n\r\n.fa-link{\r\n  color:rgb(57, 76, 116);\r\n}\r\n\r\n.fa-images{\r\n  color:rgb(50, 100, 50);\r\n}\r\n\r\n.fa-font{\r\n  color:rgb(34, 34, 34);\r\n}\r\n\r\n.fa-youtube{\r\n  color:rgb(185, 42, 42);\r\n}\r\n\r\n.fa-headphones{\r\n  color:rgb(79, 49, 99);\r\n}\r\n\r\n/* <------- Blog Styling ------->*/\r\n\r\n.main_dash{\r\n  position: relative;\r\n  display: block;\r\n  width:36%;\r\n  margin:100px auto;\r\n  min-height: 760px;\r\n  border-radius: 6px;\r\n  padding:20px 0 60px 0;\r\n  background-color: rgba(0, 0, 0, 0.171);\r\n}\r\n\r\n.blog_contain{\r\n  width:100%;\r\n  margin:auto;\r\n}\r\n\r\n.blog_card{\r\n  display:block;\r\n  margin:20px auto;\r\n  width:460px;\r\n  min-height:350px;\r\n  border-radius: 6px;\r\n  background-color: white;\r\n}\r\n\r\n.blog_card h3{\r\n  font-size: 16px;\r\n  text-align: left;\r\n  margin-top: 30px;\r\n  padding-left: 0px;\r\n  color:black;\r\n  font-weight: bold;\r\n  display: inline-block;\r\n}\r\n\r\n.blog_card span{\r\n  margin:0;\r\n  padding:0;\r\n  top:0;\r\n  color:grey;\r\n}\r\n\r\n.card_img{\r\n  background-color: rgb(17, 17, 17);\r\n}\r\n\r\n.img{\r\n  width:100%;\r\n  margin:auto;\r\n}\r\n\r\n.gif{\r\n  width:100%!important;\r\n}\r\n\r\n.post_profile_photo{\r\n  width:50px!important;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  margin:15px;\r\n}\r\n\r\n.card_contents{\r\n  width:80%;\r\n  margin:auto;\r\n}\r\n\r\n.card_contents h2, p{\r\n  color:rgb(24, 24, 24);\r\n}\r\n\r\n.card_contents h2{\r\n  padding: 10px 0;\r\n  text-align: center;\r\n  font-weight: bold;\r\n}\r\n\r\n.card_contents p{\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.card_footer{\r\n  width:100%;\r\n  position: relative;\r\n  bottom: -5px;\r\n  background-color: rgb(255, 255, 255);\r\n  height:50px;\r\n  border-bottom-left-radius: 6px;\r\n  border-bottom-right-radius: 6px;\r\n  text-align: right;\r\n}\r\n\r\n.card_footer .fa-scroll{\r\n  color:rgb(109, 109, 109) !important;\r\n  display: inline-block !important;\r\n\r\n}\r\n\r\n.card_footer p{\r\n  display: inline-block;\r\n  color:grey;\r\n  padding-right: 220px;\r\n  padding-top: 10px;\r\n}\r\n\r\n.card_footer i{\r\n  color:rgb(109, 109, 109);\r\n  position: relative;\r\n  padding-top: 15px;\r\n  display: inline-block;\r\n  font-size: 24px;\r\n  margin: 0 10px;\r\n  transition: .5s;\r\n}\r\n\r\n.card_footer i:hover{\r\n  color:rgb(97, 158, 95)!important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmFuZG9tL3JhbmRvbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw2Q0FBNkM7O0FBRTdDO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsU0FBUztFQUNULHVCQUF1QjtFQUN2QixlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLHlCQUF5QjtFQUN6QixtQ0FBbUM7Q0FDcEM7O0FBRUQ7RUFDRSxvQ0FBb0M7Q0FDckM7O0FBRUQ7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gscUNBQXFDO0NBQ3RDOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQjs7QUFDRCxxQkFBcUI7O0FBRXJCO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsdUNBQXVDO0VBQ3ZDLG9CQUFvQjtDQUNyQjs7QUFDRDtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix5Q0FBeUM7Q0FDMUM7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osY0FBYztDQUNmOztBQUVELDhCQUE4Qix5QkFBeUI7RUFDckQsaUNBQWlDO0NBQ2xDOztBQUNELHFCQUFxQixpQkFBaUI7RUFDcEMsaUNBQWlDO0NBQ2xDOztBQUNE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Q3JCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGlDQUFpQztDQUNsQyIsImZpbGUiOiJzcmMvYXBwL3JhbmRvbS9yYW5kb20uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiA8LS0tLS0tLSBOYXZpZ2F0aW9uIEJhciBTdHlsaW5nIC0tLS0tLS0+Ki9cclxuXHJcbi5zY3JvbGxfbWFpbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgdG9wOjE1cHg7XHJcbiAgY29sb3I6d2hpdGUgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOi41cztcclxufVxyXG5cclxuLmhlYWRfdGV4dHtcclxuICB3aWR0aDo0MDBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgbWFyZ2luOjAgODBweDtcclxuICB0cmFuc2l0aW9uOi41cztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5oZWFkX3RleHQgaDEge1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjoycHggc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHRyYW5zaXRpb246LjVzO1xyXG59XHJcblxyXG4uaGVhZF90ZXh0OmhvdmVyIGgxe1xyXG4gIGNvbG9yOiByZ2IoMTA3LCA4NywgMTI0KTtcclxuICBib3JkZXI6MnB4IHNvbGlkIHJnYigxMDcsIDg3LCAxMjQpOztcclxufVxyXG5cclxuLmhlYWRfdGV4dDpob3ZlciBpe1xyXG4gIGNvbG9yOiByZ2IoMTA3LCA4NywgMTI0KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2X2JhcntcclxuICB3aWR0aDoxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDowO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE4NCwgMTglLCAzMCUpO1xyXG59XHJcblxyXG4ubmF2X2JhciB1bCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIG1hcmdpbjoxMHB4IDIwMHB4O1xyXG59XHJcbi8qLS0tLS0tLT4+IFNlYXJjaCAqL1xyXG5cclxuLmZhLXNlYXJjaHtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoe1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OjgwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE3MSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uc2VhcmNoIGlucHV0e1xyXG4gIHdpZHRoOjQwMHB4O1xyXG4gIGJvcmRlcjpub25lO1xyXG4gIGhlaWdodDo0MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG59XHJcblxyXG4uc2VhcmNoIGlucHV0OmZvY3Vze1xyXG4gIGJvcmRlcjpub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIENocm9tZS9PcGVyYS9TYWZhcmkgKi9cclxuICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODg0KTtcclxufVxyXG46Oi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE5KyAqL1xyXG4gIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC44ODQpO1xyXG59XHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJRSAxMCsgKi9cclxuICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODg0KTtcclxufVxyXG46LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXHJcbiAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg4NCk7XHJcbn1cclxuXHJcbi8qLS0tLS0tLT4+IExvZ2luL1JlZ2lzdGVyICovXHJcbi5uYXZfYmFyIHVsIGxpe1xyXG4gIHdpZHRoOjQwcHg7XHJcbiAgaGVpZ2h0OjQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luOjAgMjBweCAwIDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IC41cztcclxufVxyXG4ubmF2X2JhciB1bCBsaSBpe1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IC41cztcclxufVxyXG5cclxuLmFib3V0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcblxyXG4uYWJvdXQgYSB7XHJcbiAgY29sb3I6aHNsKDE4NCwgMjQlLCA1NSUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXZfYmFyIHVsIGxpOmhvdmVyIGkge1xyXG4gIGNvbG9yOnJnYig5MiwgNTYsIDEwOSk7XHJcbn1cclxuXHJcblxyXG4vKiA8LS0tLS0tLSBBZGRfcG9zdCAtLS0tLS0tPiovXHJcbi5hZGRfcG9zdHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDUycHg7XHJcbiAgbWFyZ2luOmF1dG8gMjBweDtcclxuICBoZWlnaHQ6NjBweDtcclxuICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuXHJcbi5hZGRfcG9zdCBpe1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMyMik7XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcblxyXG4uYWRkX3Bvc3QgaTpob3ZlcntcclxuICBjb2xvcjpyZ2IoMjE5LCAyMTksIDIxOSk7XHJcbn1cclxuXHJcbi5hZGRfcG9zdF90ZXh0IHtcclxuICBtYXJnaW46YXV0bztcclxuICBwYWRkaW5nOjE1cHggMCAwIDI0cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbiNwb3N0X2Zvcm17XHJcbiAgZGlzcGxheTpibG9jaztcclxuICBtYXJnaW46MjBweCBhdXRvO1xyXG4gIHdpZHRoOjQ2MHB4O1xyXG4gIG1pbi1oZWlnaHQ6MTAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jcG9zdF9mb3JtIGl7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIHdpZHRoOjgwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW46MTBweCA2cHg7XHJcbiAgaGVpZ2h0OjgwcHg7XHJcbiAgcGFkZGluZzoxNnB4IDE0cHg7XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcblxyXG4jcG9zdF9mb3JtIGk6aG92ZXJ7XHJcbiAgY29sb3I6IGhzbCgxMzAsIDM2JSwgNTAlKTtcclxufVxyXG5cclxuLmZhLWxpbmt7XHJcbiAgY29sb3I6cmdiKDU3LCA3NiwgMTE2KTtcclxufVxyXG5cclxuLmZhLWltYWdlc3tcclxuICBjb2xvcjpyZ2IoNTAsIDEwMCwgNTApO1xyXG59XHJcblxyXG4uZmEtZm9udHtcclxuICBjb2xvcjpyZ2IoMzQsIDM0LCAzNCk7XHJcbn1cclxuXHJcbi5mYS15b3V0dWJle1xyXG4gIGNvbG9yOnJnYigxODUsIDQyLCA0Mik7XHJcbn1cclxuXHJcbi5mYS1oZWFkcGhvbmVze1xyXG4gIGNvbG9yOnJnYig3OSwgNDksIDk5KTtcclxufVxyXG5cclxuLyogPC0tLS0tLS0gQmxvZyBTdHlsaW5nIC0tLS0tLS0+Ki9cclxuXHJcbi5tYWluX2Rhc2h7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOjM2JTtcclxuICBtYXJnaW46MTAwcHggYXV0bztcclxuICBtaW4taGVpZ2h0OiA3NjBweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcGFkZGluZzoyMHB4IDAgNjBweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNzEpO1xyXG59XHJcblxyXG4uYmxvZ19jb250YWlue1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgbWFyZ2luOmF1dG87XHJcbn1cclxuXHJcbi5ibG9nX2NhcmR7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICBtYXJnaW46MjBweCBhdXRvO1xyXG4gIHdpZHRoOjQ2MHB4O1xyXG4gIG1pbi1oZWlnaHQ6MzUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmxvZ19jYXJkIGgze1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uYmxvZ19jYXJkIHNwYW57XHJcbiAgbWFyZ2luOjA7XHJcbiAgcGFkZGluZzowO1xyXG4gIHRvcDowO1xyXG4gIGNvbG9yOmdyZXk7XHJcbn1cclxuXHJcbi5jYXJkX2ltZ3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcsIDE3LCAxNyk7XHJcbn1cclxuXHJcbi5pbWd7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBtYXJnaW46YXV0bztcclxufVxyXG5cclxuLmdpZntcclxuICB3aWR0aDoxMDAlIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBvc3RfcHJvZmlsZV9waG90b3tcclxuICB3aWR0aDo1MHB4IWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjoxNXB4O1xyXG59XHJcblxyXG4uY2FyZF9jb250ZW50c3tcclxuICB3aWR0aDo4MCU7XHJcbiAgbWFyZ2luOmF1dG87XHJcbn1cclxuXHJcbi5jYXJkX2NvbnRlbnRzIGgyLCBwe1xyXG4gIGNvbG9yOnJnYigyNCwgMjQsIDI0KTtcclxufVxyXG5cclxuLmNhcmRfY29udGVudHMgaDJ7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNhcmRfY29udGVudHMgcHtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uY2FyZF9mb290ZXJ7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm90dG9tOiAtNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBoZWlnaHQ6NTBweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDZweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmNhcmRfZm9vdGVyIC5mYS1zY3JvbGx7XHJcbiAgY29sb3I6cmdiKDEwOSwgMTA5LCAxMDkpICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uY2FyZF9mb290ZXIgcHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29sb3I6Z3JleTtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMjBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNhcmRfZm9vdGVyIGl7XHJcbiAgY29sb3I6cmdiKDEwOSwgMTA5LCAxMDkpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG4gIHRyYW5zaXRpb246IC41cztcclxufVxyXG5cclxuLmNhcmRfZm9vdGVyIGk6aG92ZXJ7XHJcbiAgY29sb3I6cmdiKDk3LCAxNTgsIDk1KSFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/random/random.component.html":
/*!**********************************************!*\
  !*** ./src/app/random/random.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!---------------Navigation Bar-------------->\r\n<div class=\"nav_bar\">\r\n    <div class=\"head_text\">\r\n      <h1><i class=\"fas fa-scroll scroll_main\"></i>{{title}}</h1>\r\n    </div>\r\n\r\n    <!-- login/registration -->\r\n    <div class=\"login_register\">\r\n      <ul>\r\n        <li><a routerLink=\"/dashboard\" routerLinkActive=\"active\"><i class=\"fas fa-home\"></i></a></li>\r\n\r\n        <li><a routerLink=\"/random\" routerLinkActive=\"active\"><i class=\"far fa-compass\"></i></a></li>\r\n        <li><a routerLink=\"/signup\" routerLinkActive=\"active\"><i class=\"fas fa-comments\"></i></a></li>\r\n        <li><a routerLink=\"/signup\" routerLinkActive=\"active\"><i class=\"fas fa-cog\"></i></a></li>\r\n        <li><i class=\"fas fa-power-off\" (click)=\"logout()\"></i></li>\r\n      </ul>\r\n    </div>\r\n\r\n    <!-- search -->\r\n    <div class=\"search\">\r\n      <i class=\"fas fa-search\"></i>\r\n      <input type=\"text\" placeholder=\"Search Scroll\">\r\n\r\n    </div>\r\n</div>\r\n\r\n\r\n  <!---------------Post Dash -------------->\r\n\r\n  <div class=\"main_dash\">\r\n\r\n    <div class=\"blog_contain\">\r\n\r\n      <!-- card one -->\r\n      <div class=\"blog_card\" *ngFor=\"let card of cards\">\r\n\r\n        <div class=\"card_head\">\r\n          <img class=\"post_profile_photo\" src=\"{{ card.creator_icon }}\" alt=\"\">\r\n          <h3>{{card.creator_name}} <span>(22min ago)</span></h3>\r\n          <img class=\"img\" src=\"../assets/img/travel.jpg\" alt=\"\">\r\n        </div>\r\n\r\n        <div class=\"card_contents\">\r\n          <h2>{{card.title}}</h2>\r\n          <p>{{card.contents}}</p>\r\n        </div>\r\n\r\n        <div class=\"card_footer\">\r\n\r\n            <i class=\"fas fa-scroll\"></i>\r\n            <p>915</p>\r\n\r\n            <i class=\"far fa-comment-dots\"></i>\r\n\r\n            <i class=\"fa fa-retweet\" aria-hidden=\"true\"></i>\r\n\r\n            <i class=\"fa fa-heart\" aria-hidden=\"true\"></i>\r\n        </div>\r\n    </div>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/random/random.component.ts":
/*!********************************************!*\
  !*** ./src/app/random/random.component.ts ***!
  \********************************************/
/*! exports provided: RandomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomComponent", function() { return RandomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);






var RandomComponent = /** @class */ (function () {
    function RandomComponent(_postService, _userService, _router) {
        this._postService = _postService;
        this._userService = _userService;
        this._router = _router;
        this.title = "scroll";
        this.cards = [];
        this.errors = {};
    }
    RandomComponent.prototype.ngOnInit = function () {
        this.thisUser();
        this.getAllCards();
        jquery__WEBPACK_IMPORTED_MODULE_5__(document).ready(function () {
            // $("html, body").animate({ scrollTop: 0 }, "slow");
            // Add post
        });
    };
    RandomComponent.prototype.getAllCards = function () {
        var _this = this;
        var observable = this._postService.getAll();
        observable.subscribe(function (data) {
            var tempCards = data['posts'];
            for (var i = tempCards.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = tempCards[i];
                tempCards[i] = tempCards[j];
                tempCards[j] = temp;
            }
            _this.cards = tempCards;
            console.log(data);
        });
    };
    RandomComponent.prototype.thisUser = function () {
        var _this = this;
        var observable = this._userService.getOneById();
        observable.subscribe(function (data) {
            if (data['status'] == "not ok") {
                _this.errors = data['errors']['errors'];
                _this._router.navigate(['/']);
            }
            else {
                _this.user = data["user"];
            }
        });
    };
    RandomComponent.prototype.logout = function () {
        var _this = this;
        var observable = this._userService.signOff();
        observable.subscribe(function (data) {
            if (data['status'] == "not ok") {
                _this.errors = data['errors']['errors'];
            }
            else {
                _this._router.navigate(['/']);
            }
        });
    };
    RandomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-random',
            template: __webpack_require__(/*! ./random.component.html */ "./src/app/random/random.component.html"),
            styles: [__webpack_require__(/*! ./random.component.css */ "./src/app/random/random.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RandomComponent);
    return RandomComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* <------- Navigation Bar Styling ------->*/\r\n.imgb {\r\n  position: fixed;\r\n  top:-200px;\r\n  filter: blur(8px);\r\n  -webkit-filter: blur(4px);\r\n  filter: brightness(75%);\r\n}\r\n.nav_bar{\r\n  width:100%;\r\n  display: flex;\r\n  position: fixed;\r\n  margin-top: 20px;\r\n  z-index: 1;\r\n}\r\n.nav_bar ul {\r\n  position: fixed;\r\n  right:100px;\r\n}\r\n/*------->> Search */\r\n.fa-search{\r\n  color:white;\r\n  font-size: 18px;\r\n  padding-top: 12px;\r\n  padding-left: 20px;\r\n}\r\n.search{\r\n  position: relative;\r\n  left:100px;\r\n  background-color: rgba(0, 0, 0, 0.171);\r\n  border-radius: 10px;\r\n}\r\n.search input{\r\n  width:400px;\r\n  border:none;\r\n  height:40px;\r\n  font-size: 16px;\r\n  color:white;\r\n  font-weight: 100;\r\n  padding-left: 15px;\r\n  background-color: rgba(255, 255, 255, 0);\r\n}\r\n.search input:focus{\r\n  border:none;\r\n  outline: none;\r\n}\r\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n  color:rgba(255, 255, 255, 0.884);\r\n}\r\n::-moz-placeholder { /* Firefox 19+ */\r\n  color:rgba(255, 255, 255, 0.884);\r\n}\r\n:-ms-input-placeholder { /* IE 10+ */\r\n  color:rgba(255, 255, 255, 0.884);\r\n}\r\n:-moz-placeholder { /* Firefox 18- */\r\n  color:rgba(255, 255, 255, 0.884);\r\n}\r\n/*------->> Login/Register */\r\n.nav_bar ul li{\r\n  width:150px;\r\n  height:40px;\r\n  border:1px solid rgb(255, 255, 255);\r\n  text-align: center;\r\n  display: inline-block;\r\n  padding-top: 6px;\r\n  border-radius: 4px;\r\n  margin:0 10px;\r\n  cursor: pointer;\r\n  transition: .5s;\r\n}\r\n.nav_bar ul li a{\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  text-align: center;\r\n  transition: .5s;\r\n}\r\n.about{\r\n  background-color: white !important;\r\n  border:none !important;\r\n  padding-top: 8px !important;\r\n  transition: .5s;\r\n}\r\n.about a {\r\n  color:hsl(184, 24%, 55%) !important;\r\n}\r\n.nav_bar ul li:hover{\r\n  background-color: white;\r\n}\r\n.nav_bar ul li:hover a {\r\n  color:hsl(184, 24%, 55%);\r\n}\r\n.about:hover {\r\n  background-color: rgb(92, 56, 109) !important;\r\n}\r\n/* <------- Header Styling ------->*/\r\n.page_head{\r\n  position: relative;\r\n  top:220px;\r\n  width:400px;\r\n  margin:auto;\r\n}\r\n.head_text{\r\n  height:400px;\r\n  margin:auto;\r\n  transition:.5s;\r\n}\r\n.page_head h1 {\r\n  font-size: 80px;\r\n  font-family: 'Nunito', sans-serif;\r\n  text-align: center;\r\n}\r\n.head_text{\r\n  width:90%;\r\n  margin:auto;\r\n}\r\n.page_head h4 {\r\n  margin-top:150px;\r\n  font-size: 40px;\r\n  font-family: 'Nunito', sans-serif;\r\n  text-align: center;\r\n}\r\n.scroll_main{\r\n  position: relative;\r\n  font-size: 60px;\r\n  padding-right: 20px;\r\n  top:30px;\r\n  color:white !important;\r\n}\r\n.login_input{\r\n  display:block;\r\n  width:100%;\r\n  border:2px solid rgb(233, 233, 233);\r\n  border-radius: 3px;\r\n  height:40px;\r\n  margin-top: 20px;\r\n  margin-bottom: 15px;\r\n  color: rgb(233, 233, 233) !important;\r\n  text-align: center;\r\n  font-size: 18px;\r\n  background-color: rgba(255, 255, 255, 0);\r\n  transition:.5s;\r\n}\r\n.login_input:hover{\r\n  background-color: rgba(255, 255, 255, 0.61);\r\n  color: rgb(29, 29, 29) !important;\r\n  border:2px solid rgba(255, 255, 255, 0.61);\r\n  border-radius: 3px;\r\n}\r\n.login_input:hover::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n  color: rgb(65, 65, 65) !important;\r\n  font-weight: bold;\r\n}\r\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n  color: rgb(233, 233, 233) !important;\r\n  transition:.5s;\r\n}\r\n::-moz-placeholder { /* Firefox 19+ */\r\n  color: rgb(233, 233, 233) !important;\r\n  transition:.5s;\r\n}\r\n:-ms-input-placeholder { /* IE 10+ */\r\n  color: rgb(233, 233, 233) !important;\r\n  transition:.5s;\r\n}\r\n:-moz-placeholder { /* Firefox 18- */\r\n  color: rgb(233, 233, 233) !important;\r\n  transition:.5s;\r\n}\r\n.login_input:focus{\r\n  outline:none;\r\n  border:2px solid  rgba(255, 255, 255, 0.61);\r\n  border-radius: 3px;\r\n  font-weight: bold;\r\n}\r\n.submit {\r\n  display:block;\r\n  width:100%;\r\n  border-radius: 20px;\r\n  border:none;\r\n  height:40px;\r\n  margin-top: 30px;\r\n  margin-bottom: 15px;\r\n  color: rgb(233, 233, 233) !important;\r\n  text-align: center;\r\n  font-size: 18px;\r\n  background-color: rgba(61, 37, 71, 0.822);\r\n  transition:.5s;\r\n}\r\n.submit:hover{\r\n  background-color: rgb(92, 56, 109);\r\n}\r\n.error {\r\n  text-align: center;\r\n  background-color: rgba(0, 0, 0, 0.2);\r\n  border-radius: 3px;\r\n}\r\n/* HIDE RADIO */\r\n[type=radio] {\r\n  position: absolute;\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n/* IMAGE STYLES */\r\n[type=radio] + .post_profile_photo {\r\n  cursor: pointer;\r\n}\r\n/* CHECKED STYLES */\r\n[type=radio]:checked + .post_profile_photo {\r\n  opacity: 1;\r\n}\r\n.post_profile_photo{\r\n  width:50px!important;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  margin:15px;\r\n  opacity: 0.5;\r\n}\r\n.img{\r\n  width:100%;\r\n  margin:auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNkNBQTZDO0FBQzdDO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLHdCQUF3QjtDQUN6QjtBQUVEO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7Q0FDWjtBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7Q0FDYjtBQUNELHFCQUFxQjtBQUVyQjtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtDQUNwQjtBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx1Q0FBdUM7RUFDdkMsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIseUNBQXlDO0NBQzFDO0FBRUQ7RUFDRSxZQUFZO0VBQ1osY0FBYztDQUNmO0FBRUQsOEJBQThCLHlCQUF5QjtFQUNyRCxpQ0FBaUM7Q0FDbEM7QUFDRCxxQkFBcUIsaUJBQWlCO0VBQ3BDLGlDQUFpQztDQUNsQztBQUNELHlCQUF5QixZQUFZO0VBQ25DLGlDQUFpQztDQUNsQztBQUNELG9CQUFvQixpQkFBaUI7RUFDbkMsaUNBQWlDO0NBQ2xDO0FBRUQsNkJBQTZCO0FBQzdCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7Q0FDakI7QUFFRDtFQUNFLG1DQUFtQztFQUNuQyx1QkFBdUI7RUFDdkIsNEJBQTRCO0VBQzVCLGdCQUFnQjtDQUNqQjtBQUVEO0VBQ0Usb0NBQW9DO0NBQ3JDO0FBR0Q7RUFDRSx3QkFBd0I7Q0FDekI7QUFFRDtFQUNFLHlCQUF5QjtDQUMxQjtBQUVEO0VBQ0UsOENBQThDO0NBQy9DO0FBRUQscUNBQXFDO0FBRXJDO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtDQUNiO0FBRUQ7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7Q0FDaEI7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSxVQUFVO0VBQ1YsWUFBWTtDQUNiO0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtDQUFrQztFQUNsQyxtQkFBbUI7Q0FDcEI7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLFNBQVM7RUFDVCx1QkFBdUI7Q0FDeEI7QUFFRDtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix5Q0FBeUM7RUFDekMsZUFBZTtDQUNoQjtBQUVEO0VBQ0UsNENBQTRDO0VBQzVDLGtDQUFrQztFQUNsQywyQ0FBMkM7RUFDM0MsbUJBQW1CO0NBQ3BCO0FBRUQsZ0RBQWdELHlCQUF5QjtFQUN2RSxrQ0FBa0M7RUFDbEMsa0JBQWtCO0NBQ25CO0FBRUQsOEJBQThCLHlCQUF5QjtFQUNyRCxxQ0FBcUM7RUFDckMsZUFBZTtDQUNoQjtBQUNELHFCQUFxQixpQkFBaUI7RUFDcEMscUNBQXFDO0VBQ3JDLGVBQWU7Q0FDaEI7QUFDRCx5QkFBeUIsWUFBWTtFQUNuQyxxQ0FBcUM7RUFDckMsZUFBZTtDQUNoQjtBQUNELG9CQUFvQixpQkFBaUI7RUFDbkMscUNBQXFDO0VBQ3JDLGVBQWU7Q0FDaEI7QUFFRDtFQUNFLGFBQWE7RUFDYiw0Q0FBNEM7RUFDNUMsbUJBQW1CO0VBQ25CLGtCQUFrQjtDQUNuQjtBQUVEO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDBDQUEwQztFQUMxQyxlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxtQ0FBbUM7Q0FDcEM7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsbUJBQW1CO0NBQ3BCO0FBRUQsZ0JBQWdCO0FBQ2hCO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxTQUFTO0VBQ1QsVUFBVTtDQUNYO0FBRUQsa0JBQWtCO0FBQ2xCO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBRUQsb0JBQW9CO0FBQ3BCO0VBQ0UsV0FBVztDQUNaO0FBRUQ7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtDQUNkO0FBRUQ7RUFDRSxXQUFXO0VBQ1gsWUFBWTtDQUNiIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiA8LS0tLS0tLSBOYXZpZ2F0aW9uIEJhciBTdHlsaW5nIC0tLS0tLS0+Ki9cclxuLmltZ2Ige1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6LTIwMHB4O1xyXG4gIGZpbHRlcjogYmx1cig4cHgpO1xyXG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDc1JSk7XHJcbn1cclxuXHJcbi5uYXZfYmFye1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ubmF2X2JhciB1bCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OjEwMHB4O1xyXG59XHJcbi8qLS0tLS0tLT4+IFNlYXJjaCAqL1xyXG5cclxuLmZhLXNlYXJjaHtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OjEwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNzEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnNlYXJjaCBpbnB1dHtcclxuICB3aWR0aDo0MDBweDtcclxuICBib3JkZXI6bm9uZTtcclxuICBoZWlnaHQ6NDBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxufVxyXG5cclxuLnNlYXJjaCBpbnB1dDpmb2N1c3tcclxuICBib3JkZXI6bm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUvT3BlcmEvU2FmYXJpICovXHJcbiAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg4NCk7XHJcbn1cclxuOjotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOSsgKi9cclxuICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODg0KTtcclxufVxyXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSUUgMTArICovXHJcbiAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg4NCk7XHJcbn1cclxuOi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE4LSAqL1xyXG4gIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC44ODQpO1xyXG59XHJcblxyXG4vKi0tLS0tLS0+PiBMb2dpbi9SZWdpc3RlciAqL1xyXG4ubmF2X2JhciB1bCBsaXtcclxuICB3aWR0aDoxNTBweDtcclxuICBoZWlnaHQ6NDBweDtcclxuICBib3JkZXI6MXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbjowIDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IC41cztcclxufVxyXG4ubmF2X2JhciB1bCBsaSBhe1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IC41cztcclxufVxyXG5cclxuLmFib3V0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcblxyXG4uYWJvdXQgYSB7XHJcbiAgY29sb3I6aHNsKDE4NCwgMjQlLCA1NSUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4ubmF2X2JhciB1bCBsaTpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm5hdl9iYXIgdWwgbGk6aG92ZXIgYSB7XHJcbiAgY29sb3I6aHNsKDE4NCwgMjQlLCA1NSUpO1xyXG59XHJcblxyXG4uYWJvdXQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgNTYsIDEwOSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogPC0tLS0tLS0gSGVhZGVyIFN0eWxpbmcgLS0tLS0tLT4qL1xyXG5cclxuLnBhZ2VfaGVhZHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOjIyMHB4O1xyXG4gIHdpZHRoOjQwMHB4O1xyXG4gIG1hcmdpbjphdXRvO1xyXG59XHJcblxyXG4uaGVhZF90ZXh0e1xyXG4gIGhlaWdodDo0MDBweDtcclxuICBtYXJnaW46YXV0bztcclxuICB0cmFuc2l0aW9uOi41cztcclxufVxyXG5cclxuLnBhZ2VfaGVhZCBoMSB7XHJcbiAgZm9udC1zaXplOiA4MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkX3RleHR7XHJcbiAgd2lkdGg6OTAlO1xyXG4gIG1hcmdpbjphdXRvO1xyXG59XHJcblxyXG4ucGFnZV9oZWFkIGg0IHtcclxuICBtYXJnaW4tdG9wOjE1MHB4O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2Nyb2xsX21haW57XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIHRvcDozMHB4O1xyXG4gIGNvbG9yOndoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2dpbl9pbnB1dHtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgYm9yZGVyOjJweCBzb2xpZCByZ2IoMjMzLCAyMzMsIDIzMyk7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGhlaWdodDo0MHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBjb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gIHRyYW5zaXRpb246LjVzO1xyXG59XHJcblxyXG4ubG9naW5faW5wdXQ6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYxKTtcclxuICBjb2xvcjogcmdiKDI5LCAyOSwgMjkpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOjJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLmxvZ2luX2lucHV0OmhvdmVyOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogQ2hyb21lL09wZXJhL1NhZmFyaSAqL1xyXG4gIGNvbG9yOiByZ2IoNjUsIDY1LCA2NSkgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogQ2hyb21lL09wZXJhL1NhZmFyaSAqL1xyXG4gIGNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMykgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOi41cztcclxufVxyXG46Oi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE5KyAqL1xyXG4gIGNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMykgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOi41cztcclxufVxyXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSUUgMTArICovXHJcbiAgY29sb3I6IHJnYigyMzMsIDIzMywgMjMzKSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246LjVzO1xyXG59XHJcbjotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOC0gKi9cclxuICBjb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjouNXM7XHJcbn1cclxuXHJcbi5sb2dpbl9pbnB1dDpmb2N1c3tcclxuICBvdXRsaW5lOm5vbmU7XHJcbiAgYm9yZGVyOjJweCBzb2xpZCAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYxKTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zdWJtaXQge1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlcjpub25lO1xyXG4gIGhlaWdodDo0MHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBjb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYxLCAzNywgNzEsIDAuODIyKTtcclxuICB0cmFuc2l0aW9uOi41cztcclxufVxyXG5cclxuLnN1Ym1pdDpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDU2LCAxMDkpO1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4vKiBISURFIFJBRElPICovXHJcblt0eXBlPXJhZGlvXSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4vKiBJTUFHRSBTVFlMRVMgKi9cclxuW3R5cGU9cmFkaW9dICsgLnBvc3RfcHJvZmlsZV9waG90byB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBDSEVDS0VEIFNUWUxFUyAqL1xyXG5bdHlwZT1yYWRpb106Y2hlY2tlZCArIC5wb3N0X3Byb2ZpbGVfcGhvdG8ge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5wb3N0X3Byb2ZpbGVfcGhvdG97XHJcbiAgd2lkdGg6NTBweCFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46MTVweDtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5pbWd7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBtYXJnaW46YXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!---------------Navigation Bar-------------->\r\n<img class=\"imgb\" src=\"../../assets/img/park.jpg\" alt=\"\">\r\n<div class=\"nav_bar\">\r\n  <!-- search -->\r\n  <div class=\"search\">\r\n    <i class=\"fas fa-search\"></i>\r\n    <input type=\"text\" placeholder=\"Search Scroll\">\r\n\r\n  </div>\r\n\r\n  <!-- login/registration -->\r\n  <div class=\"login_register\">\r\n    <ul>\r\n      <li><a routerLink=\"/\" routerLinkActive=\"active\">Home</a></li>\r\n      <li><a routerLink=\"/login\" routerLinkActive=\"active\">Login</a></li>\r\n      <li class=\"about\"><a href=\"\">About</a></li>\r\n    </ul>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n<div class=\"page_head\">\r\n\r\n  <h1><i class=\"fas fa-scroll scroll_main\"></i>{{title}}</h1>\r\n  <div class=\"head_text\">\r\n    <br>\r\n    <form (submit)=\"create()\">\r\n      <p>Select your icon...</p>\r\n      <label>\r\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/1.png\" checked>\r\n        <img class=\"post_profile_photo\" src=\"../assets/img/1.png\" alt=\"\">\r\n      </label>\r\n      <label>\r\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/2.png\">\r\n        <img class=\"post_profile_photo\" src=\"../assets/img/2.png\" alt=\"\">\r\n      </label>\r\n      <label>\r\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/3.png\">\r\n        <img class=\"post_profile_photo\" src=\"../assets/img/3.png\" alt=\"\">\r\n      </label>\r\n      <label>\r\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/4.png\">\r\n        <img class=\"post_profile_photo\" src=\"../assets/img/4.png\" alt=\"\">\r\n      </label>\r\n      <label>\r\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/5.png\">\r\n        <img class=\"post_profile_photo\" src=\"../assets/img/5.png\" alt=\"\">\r\n      </label>\r\n      <label>\r\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/6.png\">\r\n        <img class=\"post_profile_photo\" src=\"../assets/img/6.png\" alt=\"\">\r\n      </label>\r\n      <label>\r\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/7.png\">\r\n        <img class=\"post_profile_photo\" src=\"../assets/img/7.png\" alt=\"\">\r\n      </label>\r\n      <label>\r\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/8.png\">\r\n        <img class=\"post_profile_photo\" src=\"../assets/img/8.png\" alt=\"\">\r\n      </label>\r\n      <input class=\"login_input\" type=\"text\" name=\"user.username\" [(ngModel)]=\"user.username\" placeholder=\"username\">\r\n      <input class=\"login_input\" type=\"text\" name=\"user.email\" [(ngModel)]=\"user.email\" placeholder=\"email\">\r\n      <input class=\"login_input\" type=\"text\" name=\"user.password\" [(ngModel)]=\"user.password\" placeholder=\"password\">\r\n      <div class=\"error\">\r\n        <p *ngIf=\"errors.icon\">{{errors.icon.message}}</p>\r\n        <p *ngIf=\"errors.username\">{{errors.username.message}}</p>\r\n        <p *ngIf=\"errors.email\">{{errors.email.message}}</p>\r\n        <p *ngIf=\"errors.password\">{{errors.password.message}}</p>\r\n        <p *ngIf=\"errors.repeat\">{{errors.repeat.message}}</p>\r\n      </div>\r\n      <input class=\"submit\" type=\"submit\" value=\"Start Scrolling\">\r\n    </form>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n<!------------- End of Opening Page ------------->\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.title = "scroll";
        this.user = {
            "username": '',
            "email": '',
            "password": '',
            "icon": ''
        };
        this.errors = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.create = function () {
        var _this = this;
        var observable = this._userService.createUser(this.user);
        observable.subscribe(function (data) {
            if (data['status'] == "not ok") {
                _this.errors = data['errors']['errors'];
            }
            else {
                _this._router.navigate(['/dashboard']);
            }
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".settingsBorder {\r\n  height: 500px;\r\n  width: 460px;\r\n  margin-top: 100px;\r\n}\r\n\r\n/* HIDE RADIO */\r\n\r\n[type=radio] {\r\n  position: absolute;\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n/* IMAGE STYLES */\r\n\r\n[type=radio] + .post_profile_photo {\r\n  cursor: pointer;\r\n}\r\n\r\n/* CHECKED STYLES */\r\n\r\n[type=radio]:checked + .post_profile_photo {\r\n  opacity: 1;\r\n}\r\n\r\n.post_profile_photo{\r\n  width:50px!important;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  margin:15px;\r\n  opacity: 0.5;\r\n}\r\n\r\n.img{\r\n  width:100%;\r\n  margin:auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2Isa0JBQWtCO0NBQ25COztBQUVELGdCQUFnQjs7QUFDaEI7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0NBQ1g7O0FBRUQsa0JBQWtCOztBQUNsQjtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRCxvQkFBb0I7O0FBQ3BCO0VBQ0UsV0FBVztDQUNaOztBQUVEO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLFdBQVc7RUFDWCxZQUFZO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHRpbmdzQm9yZGVyIHtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIHdpZHRoOiA0NjBweDtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG5cclxuLyogSElERSBSQURJTyAqL1xyXG5bdHlwZT1yYWRpb10ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxuLyogSU1BR0UgU1RZTEVTICovXHJcblt0eXBlPXJhZGlvXSArIC5wb3N0X3Byb2ZpbGVfcGhvdG8ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogQ0hFQ0tFRCBTVFlMRVMgKi9cclxuW3R5cGU9cmFkaW9dOmNoZWNrZWQgKyAucG9zdF9wcm9maWxlX3Bob3RvIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4ucG9zdF9wcm9maWxlX3Bob3Rve1xyXG4gIHdpZHRoOjUwcHghaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOjE1cHg7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uaW1ne1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgbWFyZ2luOmF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"settingsBorder\">\r\n  <form (submit)=\"updateSettings(user._id)\">\r\n    <div>\r\n      <p>Select your icon: </p>\r\n      <label>\r\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/1.png\" checked>\r\n        <img class=\"post_profile_photo\" src=\"../assets/img/1.png\" num=\"1\" alt=\"\">\r\n      </label>\r\n      <label>\r\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/2.png\">\r\n        <img class=\"post_profile_photo\" src=\"../assets/img/2.png\" num=\"2\" alt=\"\">\r\n      </label>\r\n      <label>\r\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/3.png\">\r\n        <img class=\"post_profile_photo\" src=\"../assets/img/3.png\" num=\"3\" alt=\"\">\r\n      </label>\r\n      <label>\r\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/4.png\">\r\n        <img class=\"post_profile_photo\" src=\"../assets/img/4.png\" num=\"4\" alt=\"\">\r\n      </label>\r\n      <label>\r\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/5.png\">\r\n        <img class=\"post_profile_photo\" src=\"../assets/img/5.png\" num=\"5\" alt=\"\">\r\n      </label>\r\n      <label>\r\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/6.png\">\r\n        <img class=\"post_profile_photo\" src=\"../assets/img/6.png\" num=\"6\" alt=\"\">\r\n      </label>\r\n      <label>\r\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/7.png\">\r\n        <img class=\"post_profile_photo\" src=\"../assets/img/7.png\" num=\"7\" alt=\"\">\r\n      </label>\r\n      <label>\r\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/8.png\">\r\n        <img class=\"post_profile_photo\" src=\"../assets/img/8.png\" num=\"8\" alt=\"\">\r\n      </label>\r\n\r\n      <br>\r\n      <input class=\"login_input\" type=\"text\" name=\"user.username\" [(ngModel)]=\"user.username\" placeholder=\"username\">\r\n      <br>\r\n      <input class=\"login_input\" type=\"text\" name=\"user.email\" [(ngModel)]=\"user.email\" placeholder=\"email\">\r\n      <br>\r\n      <input class=\"login_input\" type=\"text\" name=\"user.password\" [(ngModel)]=\"user.password\" placeholder=\"password\">\r\n      <div class=\"error\">\r\n        <p *ngIf=\"errors.icon\">{{errors.icon.message}}</p>\r\n        <p *ngIf=\"errors.username\">{{errors.username.message}}</p>\r\n        <p *ngIf=\"errors.email\">{{errors.email.message}}</p>\r\n        <p *ngIf=\"errors.password\">{{errors.password.message}}</p>\r\n        <p *ngIf=\"errors.repeat\">{{errors.repeat.message}}</p>\r\n      </div>\r\n    </div>\r\n\r\n    <input type=\"submit\" value=\"Save changes\" />\r\n    <a [routerLink]=\"['/dashboard']\"><input type=\"submit\" value=\"Cancel\" /></a>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(_userService, _router, _route) {
        this._userService = _userService;
        this._router = _router;
        this._route = _route;
        this.truck = {};
        this.errors = {};
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.thisUser();
        jquery__WEBPACK_IMPORTED_MODULE_4__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_4__('img').hover(function () {
                jquery__WEBPACK_IMPORTED_MODULE_4__(this).attr('src', '../assets/img/' + jquery__WEBPACK_IMPORTED_MODULE_4__(this).attr("num") + ".gif");
            }, function () {
                jquery__WEBPACK_IMPORTED_MODULE_4__(this).attr('src', '../assets/img/' + jquery__WEBPACK_IMPORTED_MODULE_4__(this).attr("num") + ".png");
            });
        });
    };
    SettingsComponent.prototype.thisUser = function () {
        var _this = this;
        var observable = this._userService.getOneById();
        observable.subscribe(function (data) {
            if (data['status'] == "not ok") {
                _this.errors = data['errors']['errors'];
                _this._router.navigate(['/']);
            }
            else {
                _this.user = data["user"];
                console.log("inside settings component", _this.user);
            }
        });
    };
    SettingsComponent.prototype.updateSettings = function (id) {
        var _this = this;
        var observable = this._userService.updateOne(id, this.user);
        observable.subscribe(function (data) {
            if (data['status'] == 'not ok') {
                _this.errors = data['errors']['errors'];
            }
            else {
                _this._router.navigate(['/dashboard']);
            }
        });
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/upload/dialog/dialog.component.css":
/*!****************************************************!*\
  !*** ./src/app/upload/dialog/dialog.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-files-btn {\r\n  float: right;\r\n}\r\n\r\n:host {\r\n  height: 100%;\r\n  display: flex;\r\n  flex: 1;\r\n  flex-direction: column;\r\n}\r\n\r\n.actions {\r\n  justify-content: flex-end;\r\n}\r\n\r\n.container {\r\n  height: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsUUFBUTtFQUNSLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLDBCQUEwQjtDQUMzQjs7QUFFRDtFQUNFLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWZpbGVzLWJ0biB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uYWN0aW9ucyB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/upload/dialog/dialog.component.html":
/*!*****************************************************!*\
  !*** ./src/app/upload/dialog/dialog.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"file\" #file style=\"display: none\" (change)=\"onFilesAdded()\" multiple />\r\n<div class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"space-evenly stretch\">\r\n  <h1 mat-dialog-title>Upload Files</h1>\r\n  <div>\r\n    <button [disabled]=\"uploading || uploadSuccessful\" mat-raised-button color=\"primary\" class=\"add-files-btn\" (click)=\"addFiles()\">\r\n      Add Files\r\n    </button>\r\n  </div>\r\n\r\n  <!-- This is the content of the dialog, containing a list of the files to upload -->\r\n  <mat-dialog-content fxFlex>\r\n    <mat-list>\r\n      <mat-list-item *ngFor=\"let file of files\">\r\n        <h4 mat-line>{{file.name}}</h4>\r\n        <mat-progress-bar *ngIf=\"progress\" mode=\"determinate\" [value]=\"progress[file.name].progress | async\"></mat-progress-bar>\r\n      </mat-list-item>\r\n    </mat-list>\r\n  </mat-dialog-content>\r\n\r\n  <!-- This are the actions of the dialog, containing the primary and the cancel button-->\r\n  <mat-dialog-actions class=\"actions\">\r\n    <button *ngIf=\"showCancelButton\" mat-button mat-dialog-close>Cancel</button>\r\n    <button mat-raised-button color=\"primary\" [disabled]=\"!canBeClosed\" (click)=\"closeDialog()\">{{primaryButtonText}}</button>\r\n  </mat-dialog-actions>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/upload/dialog/dialog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/upload/dialog/dialog.component.ts ***!
  \***************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../upload.service */ "./src/app/upload/upload.service.ts");
/* harmony import */ var rxjs_observable_forkJoin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/observable/forkJoin */ "./node_modules/rxjs-compat/_esm5/observable/forkJoin.js");





var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialogRef, uploadService) {
        this.dialogRef = dialogRef;
        this.uploadService = uploadService;
        this.files = new Set();
        this.canBeClosed = true;
        this.primaryButtonText = 'Upload';
        this.showCancelButton = true;
        this.uploading = false;
        this.uploadSuccessful = false;
    }
    DialogComponent.prototype.addFiles = function () {
        this.file.nativeElement.click();
    };
    DialogComponent.prototype.onFilesAdded = function () {
        var files = this.file.nativeElement.files;
        for (var key in files) {
            if (!isNaN(parseInt(key))) {
                this.files.add(files[key]);
            }
        }
    };
    DialogComponent.prototype.closeDialog = function () {
        var _this = this;
        // if everything was uploaded already, just close the dialog
        if (this.uploadSuccessful) {
            return this.dialogRef.close();
        }
        // set the component state to "uploading"
        this.uploading = true;
        // start the upload and save the progress map
        this.progress = this.uploadService.upload(this.files);
        // convert the progress map into an array
        var allProgressObservables = [];
        for (var key in this.progress) {
            allProgressObservables.push(this.progress[key].progress);
        }
        // Adjust the state variables
        // The OK-button should have the text "Finish" now
        this.primaryButtonText = 'Finish';
        // The dialog should not be closed while uploading
        this.canBeClosed = false;
        this.dialogRef.disableClose = true;
        // Hide the cancel-button
        this.showCancelButton = false;
        // When all progress-observables are completed...
        Object(rxjs_observable_forkJoin__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(allProgressObservables).subscribe(function (end) {
            // ... the dialog can be closed again...
            _this.canBeClosed = true;
            _this.dialogRef.disableClose = false;
            // ... the upload was successful...
            _this.uploadSuccessful = true;
            // ... and the component is no longer uploading
            _this.uploading = false;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('file'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DialogComponent.prototype, "file", void 0);
    DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/upload/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.css */ "./src/app/upload/dialog/dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], _upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"]])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/upload/upload.component.css":
/*!*********************************************!*\
  !*** ./src/app/upload/upload.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/upload/upload.component.html":
/*!**********************************************!*\
  !*** ./src/app/upload/upload.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button (click)=\"openUploadDialog()\">Upload</button>\r\n"

/***/ }),

/***/ "./src/app/upload/upload.component.ts":
/*!********************************************!*\
  !*** ./src/app/upload/upload.component.ts ***!
  \********************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/upload/dialog/dialog.component.ts");
/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upload.service */ "./src/app/upload/upload.service.ts");





var UploadComponent = /** @class */ (function () {
    function UploadComponent(dialog, uploadService) {
        this.dialog = dialog;
        this.uploadService = uploadService;
    }
    UploadComponent.prototype.openUploadDialog = function () {
        var dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], { width: '50%', height: '50%' });
    };
    UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.css */ "./src/app/upload/upload.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _upload_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/upload/upload.module.ts":
/*!*****************************************!*\
  !*** ./src/app/upload/upload.module.ts ***!
  \*****************************************/
/*! exports provided: UploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadModule", function() { return UploadModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload.component */ "./src/app/upload/upload.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/upload/dialog/dialog.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./upload.service */ "./src/app/upload/upload.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");










var UploadModule = /** @class */ (function () {
    function UploadModule() {
    }
    UploadModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"]],
            declarations: [_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"]],
            exports: [_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"]],
            entryComponents: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"]],
            providers: [_upload_service__WEBPACK_IMPORTED_MODULE_8__["UploadService"]]
        })
    ], UploadModule);
    return UploadModule;
}());



/***/ }),

/***/ "./src/app/upload/upload.service.ts":
/*!******************************************!*\
  !*** ./src/app/upload/upload.service.ts ***!
  \******************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");




var url = 'http://localhost:8888/upload';
var UploadService = /** @class */ (function () {
    function UploadService(http) {
        this.http = http;
    }
    UploadService.prototype.upload = function (files) {
        var _this = this;
        // this will be the our resulting map
        var status = {};
        files.forEach(function (file) {
            // create a new multipart-form for every file
            var formData = new FormData();
            formData.append('file', file, file.name);
            // create a http-post request and pass the form
            // tell it to report the upload progress
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', url, formData, {
                reportProgress: true
            });
            // create a new progress-subject for every file
            var progress = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            // send the http-request and subscribe for progress-updates
            _this.http.request(req).subscribe(function (event) {
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) {
                    // calculate the progress percentage
                    var percentDone = Math.round(100 * event.loaded / event.total);
                    // pass the percentage into the progress-stream
                    progress.next(percentDone);
                }
                else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                    // Close the progress-stream if we get an answer form the API
                    // The upload is complete
                    progress.complete();
                }
            });
            // Save every progress-observable in a map of all observables
            status[file.name] = {
                progress: progress.asObservable()
            };
        });
        // return the map of progress.observables
        return status;
    };
    UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.getUsers = function () {
        return this._http.get('/users');
    };
    UserService.prototype.createUser = function (user) {
        return this._http.post('/users', user);
    };
    // process login
    UserService.prototype.getOne = function (user) {
        return this._http.post("/user", user);
    };
    // gets user's data after login
    UserService.prototype.getOneById = function () {
        return this._http.get("/user");
    };
    UserService.prototype.signOff = function () {
        return this._http.get('/logout');
    };
    UserService.prototype.updateOne = function (id, user) {
        return this._http.put("/users/" + id, user);
    };
    UserService.prototype.removeUser = function (id) {
        return this._http.delete("/users/" + id);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jeffrey\Desktop\meanTest\scroll\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map