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








var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'signup', component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
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

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
            ],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]],
            // providers: [PostService],
            // providers: [CommentService],
            // providers: [ChatService],
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

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


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "\n/* <------- Navigation Bar Styling ------->*/\n.nav_bar{\n  width:100%;\n  display: flex;\n  position: fixed;\n  margin-top: 20px;\n  z-index: 1;\n}\n.nav_bar ul {\n  position: fixed;\n  right:100px;\n}\n/*------->> Search */\n.fa-search{\n  color:white;\n  font-size: 18px;\n  padding-top: 12px;\n  padding-left: 20px;\n}\n.search{\n  position: relative;\n  left:100px;\n  background-color: rgba(0, 0, 0, 0.171);\n  border-radius: 10px;\n}\n.search input{\n  width:400px;\n  border:none;\n  height:40px;\n  font-size: 16px;\n  color:white;\n  font-weight: 100;\n  padding-left: 15px;\n  background-color: rgba(255, 255, 255, 0);\n}\n.search input:focus{\n  border:none;\n  outline: none;\n}\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color:rgba(255, 255, 255, 0.884);\n}\n::-moz-placeholder { /* Firefox 19+ */\n  color:rgba(255, 255, 255, 0.884);\n}\n:-ms-input-placeholder { /* IE 10+ */\n  color:rgba(255, 255, 255, 0.884);\n}\n:-moz-placeholder { /* Firefox 18- */\n  color:rgba(255, 255, 255, 0.884);\n}\n/*------->> Login/Register */\n.nav_bar ul li{\n  width:150px;\n  height:40px;\n  border:1px solid rgb(255, 255, 255);\n  text-align: center;\n  display: inline-block;\n  padding-top: 6px;\n  border-radius: 4px;\n  margin:0 10px;\n  cursor: pointer;\n  transition: .5s;\n}\n.nav_bar ul li a{\n  text-decoration: none;\n  font-size: 18px;\n  text-align: center;\n  transition: .5s;\n}\n.about{\n  background-color: white !important;\n  border:none !important;\n  padding-top: 8px !important;\n  transition: .5s;\n}\n.about a {\n  color:hsl(184, 24%, 55%) !important;\n}\n.nav_bar ul li:hover{\n  background-color: white;\n}\n.nav_bar ul li:hover a {\n  color:hsl(184, 24%, 55%);\n}\n.about:hover {\n  background-color: rgb(92, 56, 109) !important;\n}\n/* <------- Header Styling ------->*/\n.page_head{\n  position: relative;\n  top:300px;\n  width:100%;\n}\n.head_text{\n  width:30%;\n  margin:auto;\n  transition:.5s;\n  border-radius: 8px;\n}\n.page_head h1 {\n  font-size: 80px;\n  font-family: 'Nunito', sans-serif;\n  text-align: center;\n  border:2px solid white;\n  border-radius: 8px;\n}\n.head_text:hover {\n  background-color: rgb(107, 87, 124);\n}\n.page_head h4 {\n  margin-top:150px;\n  font-size: 40px;\n  font-family: 'Nunito', sans-serif;\n  text-align: center;\n}\n.scroll_main{\n  position: relative;\n  font-size: 60px;\n  padding-right: 20px;\n  top:30px;\n  color:white !important;\n}\n.fa-newspaper {\n  top:600px;\n  font-size: 400px;\n  color:rgba(255, 255, 255, 0.404) !important;\n  position: fixed;\n  transition:.5s;\n}\n.fa-signature {\n  right:300px;\n  top:300px;\n  font-size: 200px;\n  color:rgba(255, 255, 255, 0.404) !important;\n  position: fixed;\n  transition:.5s;\n}\n.fa-pen-fancy {\n  right:0px;\n  top:80px;\n  font-size: 300px;\n  color:rgba(255, 255, 255, 0.404) !important;\n  position: fixed;\n  transition:.5s;\n}\n.down_arrow{\n  padding-top: 200px;\n  width:80px;\n  margin:auto;\n}\n.fa-angle-double-down {\n  font-size: 80px;\n  color:rgba(255, 255, 255, 0.404) !important;\n  transition:.5s;\n}\n.arrow1{\n  bottom:80px;\n}\n.fa-angle-double-down:hover{\n  color:white !important;\n}\n.fa-pen-fancy:hover{\n  color:white !important;\n}\n.fa-signature:hover{\n  color:white !important;\n}\n.fa-newspaper:hover\n{\n  color:white !important;\n}\n/* <------- Picture Styling ------->*/\n.picture_contain{\n  position: relative;\n  top:310px;\n}\n.picture_contain img{\n  width:100%;\n  z-index: 0;\n}\n.picture_contain h4{\n  position: relative;\n  z-index: 1;\n  font-size: 40px;\n  top:-1000px;\n  text-align: center;\n}\n.arrow2{\n  position: relative;\n  z-index: 1;\n  font-size: 40px;\n  top:-580px;\n  text-align: center;\n}\n/* <------- Page Info 1 Styling ------->*/\n.page_info {\n  position: relative;\n  top:-60px;\n  width: 100%;\n  height:920px;\n  background-color: rgb(92, 56, 109);\n}\n#about{\n  padding-top: 100px;\n  text-align: center;\n}\n#info_head_2{\n  margin-top: 100px;\n  text-align: center;\n  font-size: 18px;\n}\n/* <------- Picture Info Styling ------->*/\n.page_info pre{\n  font-size: 30px;\n}\n.page_info_2 {\n  position: relative;\n  top:0;\n  width: 100%;\n  height:600px;\n}\n.page_info_head{\n  padding-top: 20px;\n  text-align: center;\n  font-size: 40px;\n}\n.page_info_2 h4{\n  margin-top: 30px;\n  text-align: center;\n  font-size: 20px;\n}\n.arrow3{\n  position: relative;\n  top:0px;\n}\n/* <------- Page Info 2 Styling ------->*/\n.blog_contain{\n  width:1500px;\n  margin:auto;\n}\n.blog_card{\n  display:inline-block;\n  margin: 60px 20px 0 20px;\n  width:460px;\n  min-height:350px;\n  border-radius: 6px;\n  background-color: white;\n}\n.blog_card h3{\n  font-size: 16px;\n  text-align: left;\n  margin-top: 30px;\n  padding-left: 0px;\n  color:black;\n  font-weight: bold;\n  display: inline-block;\n}\n.blog_card span{\n  margin:0;\n  padding:0;\n  top:0;\n  color:grey;\n}\n.card_img{\n  background-color: rgb(17, 17, 17);\n}\n.img{\n  width:100%;\n  margin:auto;\n}\n.gif{\n  width:100%!important;\n}\n.post_profile_photo{\n  width:50px!important;\n  border-radius: 50%;\n  display: inline-block;\n  margin:15px;\n}\n.card_contents{\n  width:80%;\n  margin:auto;\n}\n.card_contents h2, p{\n  color:rgb(24, 24, 24);\n}\n.card_contents h2{\n  padding: 10px 0;\n  text-align: center;\n  font-weight: bold;\n}\n.card_contents p{\n  padding-bottom: 5px;\n}\n.card_footer{\n  width:100%;\n  position: relative;\n  bottom: -5px;\n  background-color: rgb(255, 255, 255);\n  height:50px;\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n  text-align: right;\n}\n.card_footer .fa-scroll{\n  color:rgb(109, 109, 109) !important;\n  display: inline-block !important;\n\n}\n.card_footer p{\n  display: inline-block;\n  color:grey;\n  padding-right: 220px;\n  padding-top: 10px;\n}\n.card_footer i{\n  color:rgb(109, 109, 109);\n  position: relative;\n  padding-top: 15px;\n  display: inline-block;\n  font-size: 24px;\n  margin: 0 10px;\n  transition: .5s;\n}\n.card_footer i:hover{\n  color:rgb(97, 158, 95)!important;\n}\n.page_info_3 {\n  position: relative;\n  top:400px;\n  width: 100%;\n  height:890px;\n  text-align: center;\n  background-color: rgb(97, 158, 95);\n}\n.page_info_3 h3{\n  padding-top: 10px;\n  text-align: center;\n}\n.arrow4{\n  position: relative;\n  top:-240px;\n}\n/* <------- Info Icon Styling ------->*/\n.icons{\n  position: relative;\n  top:120px;\n  width:950px;\n  margin:auto;\n}\n.icon_contain{\n  display: inline-block;\n  margin:0 25px;\n  width:140px;\n  height:140px;\n  border-radius: 50%;\n  background-color: white;\n}\ni {\n  color: rgb(92, 56, 109);\n}\n.fa-pen {\n  position: relative;\n  font-size: 60px;\n  top:40px;\n  left:40px;\n}\n.fa-camera {\n  position: relative;\n  font-size: 70px;\n  top:35px;\n  left:36px;\n}\n.fa-paper-plane {\n  position: relative;\n  font-size: 70px;\n  top:35px;\n  left:30px;\n}\n.fa-laptop {\n  position: relative;\n  font-size: 70px;\n  top:35px;\n  left:27px;\n}\n.fa-mobile {\n  position: relative;\n  font-size: 70px;\n  top:35px;\n  left:48px;\n}\n.hidden{\n  visibility: hidden;\n}\n.hidden2{\n  visibility:hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDZDQUE2QztBQUM3QztFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0NBQ1o7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0NBQ2I7QUFDRCxxQkFBcUI7QUFFckI7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7Q0FDcEI7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsdUNBQXVDO0VBQ3ZDLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHlDQUF5QztDQUMxQztBQUVEO0VBQ0UsWUFBWTtFQUNaLGNBQWM7Q0FDZjtBQUVELDhCQUE4Qix5QkFBeUI7RUFDckQsaUNBQWlDO0NBQ2xDO0FBQ0QscUJBQXFCLGlCQUFpQjtFQUNwQyxpQ0FBaUM7Q0FDbEM7QUFDRCx5QkFBeUIsWUFBWTtFQUNuQyxpQ0FBaUM7Q0FDbEM7QUFDRCxvQkFBb0IsaUJBQWlCO0VBQ25DLGlDQUFpQztDQUNsQztBQUVELDZCQUE2QjtBQUM3QjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0NBQ2pCO0FBRUQ7RUFDRSxtQ0FBbUM7RUFDbkMsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1QixnQkFBZ0I7Q0FDakI7QUFFRDtFQUNFLG9DQUFvQztDQUNyQztB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RUFDaEIsU0FBUztFQUNULFVBQVU7Q0FDWDtBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtDQUNYO0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0NBQ1g7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7Q0FDWDtBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogPC0tLS0tLS0gTmF2aWdhdGlvbiBCYXIgU3R5bGluZyAtLS0tLS0tPiovXG4ubmF2X2JhcntcbiAgd2lkdGg6MTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB6LWluZGV4OiAxO1xufVxuXG4ubmF2X2JhciB1bCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6MTAwcHg7XG59XG4vKi0tLS0tLS0+PiBTZWFyY2ggKi9cblxuLmZhLXNlYXJjaHtcbiAgY29sb3I6d2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLnNlYXJjaHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OjEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTcxKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5zZWFyY2ggaW5wdXR7XG4gIHdpZHRoOjQwMHB4O1xuICBib3JkZXI6bm9uZTtcbiAgaGVpZ2h0OjQwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6d2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbn1cblxuLnNlYXJjaCBpbnB1dDpmb2N1c3tcbiAgYm9yZGVyOm5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIENocm9tZS9PcGVyYS9TYWZhcmkgKi9cbiAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg4NCk7XG59XG46Oi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE5KyAqL1xuICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODg0KTtcbn1cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJRSAxMCsgKi9cbiAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg4NCk7XG59XG46LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXG4gIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC44ODQpO1xufVxuXG4vKi0tLS0tLS0+PiBMb2dpbi9SZWdpc3RlciAqL1xuLm5hdl9iYXIgdWwgbGl7XG4gIHdpZHRoOjE1MHB4O1xuICBoZWlnaHQ6NDBweDtcbiAgYm9yZGVyOjFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjowIDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogLjVzO1xufVxuLm5hdl9iYXIgdWwgbGkgYXtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogLjVzO1xufVxuXG4uYWJvdXR7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiA4cHggIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogLjVzO1xufVxuXG4uYWJvdXQgYSB7XG4gIGNvbG9yOmhzbCgxODQsIDI0JSwgNTUlKSAhaW1wb3J0YW50O1xufVxuXG5cbi5uYXZfYmFyIHVsIGxpOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLm5hdl9iYXIgdWwgbGk6aG92ZXIgYSB7XG4gIGNvbG9yOmhzbCgxODQsIDI0JSwgNTUlKTtcbn1cblxuLmFib3V0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCA1NiwgMTA5KSAhaW1wb3J0YW50O1xufVxuXG4vKiA8LS0tLS0tLSBIZWFkZXIgU3R5bGluZyAtLS0tLS0tPiovXG5cbi5wYWdlX2hlYWR7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOjMwMHB4O1xuICB3aWR0aDoxMDAlO1xufVxuXG4uaGVhZF90ZXh0e1xuICB3aWR0aDozMCU7XG4gIG1hcmdpbjphdXRvO1xuICB0cmFuc2l0aW9uOi41cztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLnBhZ2VfaGVhZCBoMSB7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjoycHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmhlYWRfdGV4dDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDcsIDg3LCAxMjQpO1xufVxuXG4ucGFnZV9oZWFkIGg0IHtcbiAgbWFyZ2luLXRvcDoxNTBweDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNjcm9sbF9tYWlue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgdG9wOjMwcHg7XG4gIGNvbG9yOndoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5mYS1uZXdzcGFwZXIge1xuICB0b3A6NjAwcHg7XG4gIGZvbnQtc2l6ZTogNDAwcHg7XG4gIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MDQpICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdHJhbnNpdGlvbjouNXM7XG59XG5cbi5mYS1zaWduYXR1cmUge1xuICByaWdodDozMDBweDtcbiAgdG9wOjMwMHB4O1xuICBmb250LXNpemU6IDIwMHB4O1xuICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDA0KSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRyYW5zaXRpb246LjVzO1xufVxuXG4uZmEtcGVuLWZhbmN5IHtcbiAgcmlnaHQ6MHB4O1xuICB0b3A6ODBweDtcbiAgZm9udC1zaXplOiAzMDBweDtcbiAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQwNCkgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0cmFuc2l0aW9uOi41cztcbn1cblxuLmRvd25fYXJyb3d7XG4gIHBhZGRpbmctdG9wOiAyMDBweDtcbiAgd2lkdGg6ODBweDtcbiAgbWFyZ2luOmF1dG87XG59XG5cbi5mYS1hbmdsZS1kb3VibGUtZG93biB7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQwNCkgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjouNXM7XG59XG5cbi5hcnJvdzF7XG4gIGJvdHRvbTo4MHB4O1xufVxuXG4uZmEtYW5nbGUtZG91YmxlLWRvd246aG92ZXJ7XG4gIGNvbG9yOndoaXRlICFpbXBvcnRhbnQ7XG59XG4uZmEtcGVuLWZhbmN5OmhvdmVye1xuICBjb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xufVxuLmZhLXNpZ25hdHVyZTpob3ZlcntcbiAgY29sb3I6d2hpdGUgIWltcG9ydGFudDtcbn1cbi5mYS1uZXdzcGFwZXI6aG92ZXJcbntcbiAgY29sb3I6d2hpdGUgIWltcG9ydGFudDtcbn1cblxuLyogPC0tLS0tLS0gUGljdHVyZSBTdHlsaW5nIC0tLS0tLS0+Ki9cblxuLnBpY3R1cmVfY29udGFpbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6MzEwcHg7XG59XG5cbi5waWN0dXJlX2NvbnRhaW4gaW1ne1xuICB3aWR0aDoxMDAlO1xuICB6LWluZGV4OiAwO1xufVxuXG4ucGljdHVyZV9jb250YWluIGg0e1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgdG9wOi0xMDAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFycm93MntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDQwcHg7XG4gIHRvcDotNTgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogPC0tLS0tLS0gUGFnZSBJbmZvIDEgU3R5bGluZyAtLS0tLS0tPiovXG5cbi5wYWdlX2luZm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDotNjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDo5MjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCA1NiwgMTA5KTtcbn1cblxuI2Fib3V0e1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2luZm9faGVhZF8ye1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cblxuLyogPC0tLS0tLS0gUGljdHVyZSBJbmZvIFN0eWxpbmcgLS0tLS0tLT4qL1xuLnBhZ2VfaW5mbyBwcmV7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5wYWdlX2luZm9fMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOjA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6NjAwcHg7XG59XG5cbi5wYWdlX2luZm9faGVhZHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4ucGFnZV9pbmZvXzIgaDR7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYXJyb3cze1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDowcHg7XG59XG5cblxuLyogPC0tLS0tLS0gUGFnZSBJbmZvIDIgU3R5bGluZyAtLS0tLS0tPiovXG5cbi5ibG9nX2NvbnRhaW57XG4gIHdpZHRoOjE1MDBweDtcbiAgbWFyZ2luOmF1dG87XG59XG5cbi5ibG9nX2NhcmR7XG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDYwcHggMjBweCAwIDIwcHg7XG4gIHdpZHRoOjQ2MHB4O1xuICBtaW4taGVpZ2h0OjM1MHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uYmxvZ19jYXJkIGgze1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBjb2xvcjpibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmJsb2dfY2FyZCBzcGFue1xuICBtYXJnaW46MDtcbiAgcGFkZGluZzowO1xuICB0b3A6MDtcbiAgY29sb3I6Z3JleTtcbn1cblxuLmNhcmRfaW1ne1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcsIDE3LCAxNyk7XG59XG5cbi5pbWd7XG4gIHdpZHRoOjEwMCU7XG4gIG1hcmdpbjphdXRvO1xufVxuXG4uZ2lme1xuICB3aWR0aDoxMDAlIWltcG9ydGFudDtcbn1cblxuLnBvc3RfcHJvZmlsZV9waG90b3tcbiAgd2lkdGg6NTBweCFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46MTVweDtcbn1cblxuLmNhcmRfY29udGVudHN7XG4gIHdpZHRoOjgwJTtcbiAgbWFyZ2luOmF1dG87XG59XG5cbi5jYXJkX2NvbnRlbnRzIGgyLCBwe1xuICBjb2xvcjpyZ2IoMjQsIDI0LCAyNCk7XG59XG5cbi5jYXJkX2NvbnRlbnRzIGgye1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jYXJkX2NvbnRlbnRzIHB7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5jYXJkX2Zvb3RlcntcbiAgd2lkdGg6MTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IC01cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgaGVpZ2h0OjUwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDZweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jYXJkX2Zvb3RlciAuZmEtc2Nyb2xse1xuICBjb2xvcjpyZ2IoMTA5LCAxMDksIDEwOSkgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG5cbn1cblxuLmNhcmRfZm9vdGVyIHB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6Z3JleTtcbiAgcGFkZGluZy1yaWdodDogMjIwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uY2FyZF9mb290ZXIgaXtcbiAgY29sb3I6cmdiKDEwOSwgMTA5LCAxMDkpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIHRyYW5zaXRpb246IC41cztcbn1cblxuLmNhcmRfZm9vdGVyIGk6aG92ZXJ7XG4gIGNvbG9yOnJnYig5NywgMTU4LCA5NSkhaW1wb3J0YW50O1xufVxuXG4ucGFnZV9pbmZvXzMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDo0MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDo4OTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDE1OCwgOTUpO1xufVxuXG4ucGFnZV9pbmZvXzMgaDN7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hcnJvdzR7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOi0yNDBweDtcbn1cbi8qIDwtLS0tLS0tIEluZm8gSWNvbiBTdHlsaW5nIC0tLS0tLS0+Ki9cblxuLmljb25ze1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDoxMjBweDtcbiAgd2lkdGg6OTUwcHg7XG4gIG1hcmdpbjphdXRvO1xufVxuXG4uaWNvbl9jb250YWlue1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjowIDI1cHg7XG4gIHdpZHRoOjE0MHB4O1xuICBoZWlnaHQ6MTQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmkge1xuICBjb2xvcjogcmdiKDkyLCA1NiwgMTA5KTtcbn1cblxuLmZhLXBlbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiA2MHB4O1xuICB0b3A6NDBweDtcbiAgbGVmdDo0MHB4O1xufVxuXG4uZmEtY2FtZXJhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDcwcHg7XG4gIHRvcDozNXB4O1xuICBsZWZ0OjM2cHg7XG59XG5cbi5mYS1wYXBlci1wbGFuZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiA3MHB4O1xuICB0b3A6MzVweDtcbiAgbGVmdDozMHB4O1xufVxuXG4uZmEtbGFwdG9wIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDcwcHg7XG4gIHRvcDozNXB4O1xuICBsZWZ0OjI3cHg7XG59XG5cbi5mYS1tb2JpbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogNzBweDtcbiAgdG9wOjM1cHg7XG4gIGxlZnQ6NDhweDtcbn1cblxuLmhpZGRlbntcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uaGlkZGVuMntcbiAgdmlzaWJpbGl0eTpoaWRkZW47XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!---------------Navigation Bar-------------->\n<div class=\"nav_bar\">\n\n  <!-- search -->\n  <div class=\"search\">\n    <i class=\"fas fa-search\"></i>\n    <input type=\"text\" placeholder=\"Search Scroll\">\n\n  </div>\n\n  <!-- login/registration -->\n  <div class=\"login_register\">\n    <ul>\n      <li><a routerLink=\"/login\" routerLinkActive=\"active\">Login</a></li>\n      <li><a routerLink=\"/signup\" routerLinkActive=\"active\">Sign Up</a></li>\n      <li class=\"about\"><a href=\"\">About</a></li>\n    </ul>\n  </div>\n\n</div>\n\n\n<div class=\"page_head\">\n  <i class=\"far fa-newspaper\"></i>\n  <i class=\"fas fa-pen-fancy\"></i>\n  <i class=\"fas fa-signature\"></i>\n\n  <div class=\"hidden head_text\">\n    <h1><i class=\"fas fa-scroll scroll_main\"></i>{{title}}</h1>\n  </div>\n\n  <h4>\"Blogging made simple, for those that love to scroll\"</h4>\n\n  <div class=\"down_arrow arrow1\">\n    <i class=\"fas fa-angle-double-down\"></i>\n  </div>\n\n</div>\n\n\n\n<!------------- End of Opening Page ------------->\n\n<div class=\"picture_contain\">\n  <img src=\"../assets/img/mountains.jpg\" alt=\"Dolomites Mountains\">\n  <h4 id=\"info_head_1\">Scroll is made for everyone. Whether you are at home, on your phone, or in the mountains...</h4>\n\n  <div class=\"down_arrow arrow2\">\n    <i class=\"fas fa-angle-double-down\"></i>\n  </div>\n</div>\n\n\n\n<!------------- Start of About ------------->\n<div class=\"page_info\">\n  <pre id=\"about\">\n  Scroll is a familiar space,\n    where you can just be... you.</pre>\n\n  <h4 id=\"info_head_2\">\n    Blogs should be simple, elegant, powerful, and free. <br> Scroll puts these qualities together into a powerful <br>\n    platform, where you can express yourself! <br>\n    We are commited to open and free expression,\n    <br>because your blog is YOUR blog, not ours...\n  </h4>\n\n  <div class=\"icons\">\n      <div class=\"icon_contain\">\n          <i class=\"fas fa-pen\"></i>\n      </div>\n      <div class=\"icon_contain\">\n        <i class=\"fas fa-camera\"></i>\n      </div>\n      <div class=\"icon_contain\">\n          <i class=\"far fa-paper-plane\"></i>\n      </div>\n      <div class=\"icon_contain\">\n          <i class=\"fas fa-laptop\"></i>\n      </div>\n      <div class=\"icon_contain\">\n          <i class=\"fas fa-mobile\"></i>\n      </div>\n  </div>\n\n  <div class=\"down_arrow arrow3\">\n      <i class=\"fas fa-angle-double-down\"></i>\n  </div>\n</div>\n\n<div class=\"page_info_2\">\n  <h3 class=\"page_info_head\">Post about anything and everything.</h3>\n  <h4>Photos, Gifs, Stories, Life Updates, Poems, Art. The list of possibilites are limitless.</h4>\n\n  <div class=\"blog_contain\">\n\n    <!-- card one -->\n    <div class=\"blog_card\">\n\n      <div class=\"card_head\">\n        <img class=\"post_profile_photo\" src=\"../assets/img/sky.jpg\" alt=\"\">\n        <h3>SkiesTheLimit <span>(22min ago)</span></h3>\n        <img class=\"img\" src=\"../assets/img/travel.jpg\" alt=\"\">\n      </div>\n\n      <div class=\"card_contents\">\n        <h2>Sailing in Greece</h2>\n        <p>I can't believe how amazing this weekend has been. Good food, wine, and friends to share this incredible journey with. I can't wait to visit again...</p>\n      </div>\n\n      <div class=\"card_footer\">\n\n          <i class=\"fas fa-scroll\"></i>\n          <p>915</p>\n\n          <i class=\"far fa-comment-dots\"></i>\n\n          <i class=\"fa fa-retweet\" aria-hidden=\"true\"></i>\n\n          <i class=\"fa fa-heart\" aria-hidden=\"true\"></i>\n      </div>\n    </div>\n\n     <!-- card three -->\n     <div class=\"blog_card\">\n        <img class=\"post_profile_photo\" src=\"../assets/img/sky.jpg\" alt=\"\">\n        <h3>Art-ifacts <span>(2 days ago)</span></h3>\n        <div class=\"card_img\">\n          <img class=\"gif\" src=\"../assets/img/fall.jpg\" alt=\"\">\n        </div>\n\n        <div class=\"card_footer\">\n\n            <i class=\"fas fa-scroll\"></i>\n            <p>12,300</p>\n\n            <i class=\"far fa-comment-dots\"></i>\n\n            <i class=\"fa fa-retweet\" aria-hidden=\"true\"></i>\n\n            <i class=\"fa fa-heart\" aria-hidden=\"true\"></i>\n        </div>\n\n      </div>\n\n     <!-- card two -->\n    <div class=\"blog_card\">\n      <img class=\"post_profile_photo\" src=\"../assets/img/sky.jpg\" alt=\"\">\n      <h3>GhibliDearest <span>(2 hours ago)</span></h3>\n      <div class=\"card_img\">\n        <img class=\"gif\" src=\"../assets/img/kiki.gif\" alt=\"\">\n      </div>\n\n      <div class=\"card_footer\">\n\n          <i class=\"fas fa-scroll\"></i>\n          <p>2,011</p>\n\n          <i class=\"far fa-comment-dots\"></i>\n\n          <i class=\"fa fa-retweet\" aria-hidden=\"true\"></i>\n\n          <i class=\"fa fa-heart\" aria-hidden=\"true\"></i>\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"down_arrow arrow4\">\n      <i class=\"fas fa-angle-double-down\"></i>\n  </div>\n</div>\n\n<div class=\"page_info_3\">\n    <h3>Our Platform</h3>\n\n\n</div>\n"

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

module.exports = "\n/* <------- Navigation Bar Styling ------->*/\nimg{\n  position: fixed;\n  top:-200px;\n  filter: blur(8px);\n  -webkit-filter: blur(4px);\n  filter: brightness(40%);\n}\n.nav_bar{\n  width:100%;\n  display: flex;\n  position: fixed;\n  margin-top: 20px;\n  z-index: 1;\n}\n.nav_bar ul {\n  position: fixed;\n  right:100px;\n}\n/*------->> Search */\n.fa-search{\n  color:white;\n  font-size: 18px;\n  padding-top: 12px;\n  padding-left: 20px;\n}\n.search{\n  position: relative;\n  left:100px;\n  background-color: rgba(0, 0, 0, 0.315);\n  border-radius: 10px;\n}\n.search input{\n  width:400px;\n  border:none;\n  height:40px;\n  font-size: 16px;\n  color:white;\n  font-weight: 100;\n  padding-left: 15px;\n  background-color: rgba(255, 255, 255, 0);\n}\n.search input:focus{\n  border:none;\n  outline: none;\n}\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color:rgba(255, 255, 255, 0.884);\n}\n::-moz-placeholder { /* Firefox 19+ */\n  color:rgba(255, 255, 255, 0.884);\n}\n:-ms-input-placeholder { /* IE 10+ */\n  color:rgba(255, 255, 255, 0.884);\n}\n:-moz-placeholder { /* Firefox 18- */\n  color:rgba(255, 255, 255, 0.884);\n}\n/*------->> Login/Register */\n.nav_bar ul li{\n  width:150px;\n  height:40px;\n  border:1px solid rgb(255, 255, 255);\n  text-align: center;\n  display: inline-block;\n  padding-top: 6px;\n  border-radius: 4px;\n  margin:0 10px;\n  cursor: pointer;\n  transition: .5s;\n}\n.nav_bar ul li a{\n  text-decoration: none;\n  font-size: 18px;\n  text-align: center;\n  transition: .5s;\n}\n.about{\n  background-color: white !important;\n  border:none !important;\n  padding-top: 8px !important;\n  transition: .5s;\n}\n.about a {\n  color:hsl(184, 24%, 55%) !important;\n}\n.nav_bar ul li:hover{\n  background-color: white;\n}\n.nav_bar ul li:hover a {\n  color:hsl(184, 24%, 55%);\n}\n.about:hover {\n  background-color: rgb(92, 56, 109) !important;\n}\n/* <------- Header Styling ------->*/\n.page_head{\n  position: relative;\n  top:220px;\n  width:400px;\n  margin:auto;\n}\n.head_text{\n  height:400px;\n  margin:auto;\n  transition:.5s;\n}\n.page_head h1 {\n  font-size: 80px;\n  font-family: 'Nunito', sans-serif;\n  text-align: center;\n}\n.head_text{\n  width:90%;\n  margin:auto;\n}\n.page_head h4 {\n  margin-top:150px;\n  font-size: 40px;\n  font-family: 'Nunito', sans-serif;\n  text-align: center;\n}\n.scroll_main{\n  position: relative;\n  font-size: 60px;\n  padding-right: 20px;\n  top:30px;\n  color:white !important;\n}\n.login_input{\n  display:block;\n  width:100%;\n  border:2px solid rgb(233, 233, 233);\n  border-radius: 3px;\n  height:40px;\n  margin-top: 20px;\n  margin-bottom: 15px;\n  color: rgb(233, 233, 233) !important;\n  text-align: center;\n  font-size: 18px;\n  background-color: rgba(255, 255, 255, 0);\n  transition:.5s;\n}\n.login_input:hover{\n  background-color: rgba(255, 255, 255, 0.61);\n  color: rgb(29, 29, 29) !important;\n  border:2px solid rgba(255, 255, 255, 0.61);\n  border-radius: 3px;\n}\n.login_input:hover::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color: rgb(65, 65, 65) !important;\n  font-weight: bold;\n}\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color: rgb(233, 233, 233) !important;\n  transition:.5s;\n}\n::-moz-placeholder { /* Firefox 19+ */\n  color: rgb(233, 233, 233) !important;\n  transition:.5s;\n}\n:-ms-input-placeholder { /* IE 10+ */\n  color: rgb(233, 233, 233) !important;\n  transition:.5s;\n}\n:-moz-placeholder { /* Firefox 18- */\n  color: rgb(233, 233, 233) !important;\n  transition:.5s;\n}\n.login_input:focus{\n  outline:none;\n  border:2px solid  rgba(255, 255, 255, 0.61);\n  border-radius: 3px;\n  font-weight: bold;\n}\n.submit {\n  display:block;\n  width:100%;\n  border-radius: 20px;\n  border:none;\n  height:40px;\n  margin-top: 60px;\n  margin-bottom: 15px;\n  color: rgb(233, 233, 233) !important;\n  text-align: center;\n  font-size: 18px;\n  background-color: rgba(61, 37, 71, 0.822);\n  transition:.5s;\n}\n.submit:hover{\n  background-color: rgb(92, 56, 109);\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNkNBQTZDO0FBQzdDO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLHdCQUF3QjtDQUN6QjtBQUVEO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7Q0FDWjtBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7Q0FDYjtBQUNELHFCQUFxQjtBQUVyQjtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtDQUNwQjtBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx1Q0FBdUM7RUFDdkMsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIseUNBQXlDO0NBQzFDO0FBRUQ7RUFDRSxZQUFZO0VBQ1osY0FBYztDQUNmO0FBRUQsOEJBQThCLHlCQUF5QjtFQUNyRCxpQ0FBaUM7Q0FDbEM7QUFDRCxxQkFBcUIsaUJBQWlCO0VBQ3BDLGlDQUFpQztDQUNsQztBQUNELHlCQUF5QixZQUFZO0VBQ25DLGlDQUFpQztDQUNsQztBQUNELG9CQUFvQixpQkFBaUI7RUFDbkMsaUNBQWlDO0NBQ2xDO0FBRUQsNkJBQTZCO0FBQzdCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7Q0FDakI7QUFFRDtFQUNFLG1DQUFtQztFQUNuQyx1QkFBdUI7RUFDdkIsNEJBQTRCO0VBQzVCLGdCQUFnQjtDQUNqQjtBQUVEO0VBQ0Usb0NBQW9DO0NBQ3JDO0FBR0Q7RUFDRSx3QkFBd0I7Q0FDekI7QUFFRDtFQUNFLHlCQUF5QjtDQUMxQjtBQUVEO0VBQ0UsOENBQThDO0NBQy9DO0FBRUQscUNBQXFDO0FBRXJDO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtDQUNiO0FBRUQ7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7Q0FDaEI7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSxVQUFVO0VBQ1YsWUFBWTtDQUNiO0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtDQUFrQztFQUNsQyxtQkFBbUI7Q0FDcEI7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLFNBQVM7RUFDVCx1QkFBdUI7Q0FDeEI7QUFFRDtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix5Q0FBeUM7RUFDekMsZUFBZTtDQUNoQjtBQUVEO0VBQ0UsNENBQTRDO0VBQzVDLGtDQUFrQztFQUNsQywyQ0FBMkM7RUFDM0MsbUJBQW1CO0NBQ3BCO0FBRUQsZ0RBQWdELHlCQUF5QjtFQUN2RSxrQ0FBa0M7RUFDbEMsa0JBQWtCO0NBQ25CO0FBRUQsOEJBQThCLHlCQUF5QjtFQUNyRCxxQ0FBcUM7RUFDckMsZUFBZTtDQUNoQjtBQUNELHFCQUFxQixpQkFBaUI7RUFDcEMscUNBQXFDO0VBQ3JDLGVBQWU7Q0FDaEI7QUFDRCx5QkFBeUIsWUFBWTtFQUNuQyxxQ0FBcUM7RUFDckMsZUFBZTtDQUNoQjtBQUNELG9CQUFvQixpQkFBaUI7RUFDbkMscUNBQXFDO0VBQ3JDLGVBQWU7Q0FDaEI7QUFFRDtFQUNFLGFBQWE7RUFDYiw0Q0FBNEM7RUFDNUMsbUJBQW1CO0VBQ25CLGtCQUFrQjtDQUNuQjtBQUVEO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDBDQUEwQztFQUMxQyxlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxtQ0FBbUM7Q0FDcEMiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiA8LS0tLS0tLSBOYXZpZ2F0aW9uIEJhciBTdHlsaW5nIC0tLS0tLS0+Ki9cbmltZ3tcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6LTIwMHB4O1xuICBmaWx0ZXI6IGJsdXIoOHB4KTtcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDQwJSk7XG59XG5cbi5uYXZfYmFye1xuICB3aWR0aDoxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5uYXZfYmFyIHVsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDoxMDBweDtcbn1cbi8qLS0tLS0tLT4+IFNlYXJjaCAqL1xuXG4uZmEtc2VhcmNoe1xuICBjb2xvcjp3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uc2VhcmNoe1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6MTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMTUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnNlYXJjaCBpbnB1dHtcbiAgd2lkdGg6NDAwcHg7XG4gIGJvcmRlcjpub25lO1xuICBoZWlnaHQ6NDBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjp3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xufVxuXG4uc2VhcmNoIGlucHV0OmZvY3Vze1xuICBib3JkZXI6bm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogQ2hyb21lL09wZXJhL1NhZmFyaSAqL1xuICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODg0KTtcbn1cbjo6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTkrICovXG4gIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC44ODQpO1xufVxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIElFIDEwKyAqL1xuICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODg0KTtcbn1cbjotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOC0gKi9cbiAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg4NCk7XG59XG5cbi8qLS0tLS0tLT4+IExvZ2luL1JlZ2lzdGVyICovXG4ubmF2X2JhciB1bCBsaXtcbiAgd2lkdGg6MTUwcHg7XG4gIGhlaWdodDo0MHB4O1xuICBib3JkZXI6MXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOjAgMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAuNXM7XG59XG4ubmF2X2JhciB1bCBsaSBhe1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAuNXM7XG59XG5cbi5hYm91dHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDhweCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiAuNXM7XG59XG5cbi5hYm91dCBhIHtcbiAgY29sb3I6aHNsKDE4NCwgMjQlLCA1NSUpICFpbXBvcnRhbnQ7XG59XG5cblxuLm5hdl9iYXIgdWwgbGk6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubmF2X2JhciB1bCBsaTpob3ZlciBhIHtcbiAgY29sb3I6aHNsKDE4NCwgMjQlLCA1NSUpO1xufVxuXG4uYWJvdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDU2LCAxMDkpICFpbXBvcnRhbnQ7XG59XG5cbi8qIDwtLS0tLS0tIEhlYWRlciBTdHlsaW5nIC0tLS0tLS0+Ki9cblxuLnBhZ2VfaGVhZHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6MjIwcHg7XG4gIHdpZHRoOjQwMHB4O1xuICBtYXJnaW46YXV0bztcbn1cblxuLmhlYWRfdGV4dHtcbiAgaGVpZ2h0OjQwMHB4O1xuICBtYXJnaW46YXV0bztcbiAgdHJhbnNpdGlvbjouNXM7XG59XG5cbi5wYWdlX2hlYWQgaDEge1xuICBmb250LXNpemU6IDgwcHg7XG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZF90ZXh0e1xuICB3aWR0aDo5MCU7XG4gIG1hcmdpbjphdXRvO1xufVxuXG4ucGFnZV9oZWFkIGg0IHtcbiAgbWFyZ2luLXRvcDoxNTBweDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNjcm9sbF9tYWlue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgdG9wOjMwcHg7XG4gIGNvbG9yOndoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dpbl9pbnB1dHtcbiAgZGlzcGxheTpibG9jaztcbiAgd2lkdGg6MTAwJTtcbiAgYm9yZGVyOjJweCBzb2xpZCByZ2IoMjMzLCAyMzMsIDIzMyk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgaGVpZ2h0OjQwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMykgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIHRyYW5zaXRpb246LjVzO1xufVxuXG4ubG9naW5faW5wdXQ6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MSk7XG4gIGNvbG9yOiByZ2IoMjksIDI5LCAyOSkgIWltcG9ydGFudDtcbiAgYm9yZGVyOjJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjEpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5sb2dpbl9pbnB1dDpob3Zlcjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIENocm9tZS9PcGVyYS9TYWZhcmkgKi9cbiAgY29sb3I6IHJnYig2NSwgNjUsIDY1KSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogQ2hyb21lL09wZXJhL1NhZmFyaSAqL1xuICBjb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246LjVzO1xufVxuOjotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOSsgKi9cbiAgY29sb3I6IHJnYigyMzMsIDIzMywgMjMzKSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOi41cztcbn1cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJRSAxMCsgKi9cbiAgY29sb3I6IHJnYigyMzMsIDIzMywgMjMzKSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOi41cztcbn1cbjotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOC0gKi9cbiAgY29sb3I6IHJnYigyMzMsIDIzMywgMjMzKSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOi41cztcbn1cblxuLmxvZ2luX2lucHV0OmZvY3Vze1xuICBvdXRsaW5lOm5vbmU7XG4gIGJvcmRlcjoycHggc29saWQgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zdWJtaXQge1xuICBkaXNwbGF5OmJsb2NrO1xuICB3aWR0aDoxMDAlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6bm9uZTtcbiAgaGVpZ2h0OjQwcHg7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMykgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjEsIDM3LCA3MSwgMC44MjIpO1xuICB0cmFuc2l0aW9uOi41cztcbn1cblxuLnN1Ym1pdDpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCA1NiwgMTA5KTtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!---------------Navigation Bar-------------->\n<img src=\"../../assets/img/login1.jpg\" alt=\"\">\n<div class=\"nav_bar\">\n  <!-- search -->\n  <div class=\"search\">\n    <i class=\"fas fa-search\"></i>\n    <input type=\"text\" placeholder=\"Search Scroll\">\n\n  </div>\n\n  <!-- login/registration -->\n  <div class=\"login_register\">\n    <ul>\n      <li><a routerLink=\"/\" routerLinkActive=\"active\">Home</a></li>\n      <li><a routerLink=\"/signup\" routerLinkActive=\"active\">Sign Up</a></li>\n      <li class=\"about\"><a href=\"\">About</a></li>\n    </ul>\n  </div>\n\n</div>\n\n\n\n<div class=\"page_head\">\n  <h1><i class=\"fas fa-scroll scroll_main\"></i>{{title}}</h1>\n  <div class=\"head_text\">\n    <input class=\"login_input\" type=\"text\" placeholder=\"email\">\n    <input class=\"login_input\" type=\"text\" placeholder=\"password\">\n    <input class=\"submit\" type=\"submit\" value=\"Start Scrolling\">\n  </div>\n\n\n</div>\n\n\n\n<!------------- End of Opening Page ------------->\n\n"

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


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.title = "scroll";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* <------- Navigation Bar Styling ------->*/\nimg{\n  position: fixed;\n  top:-200px;\n  filter: blur(8px);\n  -webkit-filter: blur(4px);\n  filter: brightness(75%);\n}\n.nav_bar{\n  width:100%;\n  display: flex;\n  position: fixed;\n  margin-top: 20px;\n  z-index: 1;\n}\n.nav_bar ul {\n  position: fixed;\n  right:100px;\n}\n/*------->> Search */\n.fa-search{\n  color:white;\n  font-size: 18px;\n  padding-top: 12px;\n  padding-left: 20px;\n}\n.search{\n  position: relative;\n  left:100px;\n  background-color: rgba(0, 0, 0, 0.171);\n  border-radius: 10px;\n}\n.search input{\n  width:400px;\n  border:none;\n  height:40px;\n  font-size: 16px;\n  color:white;\n  font-weight: 100;\n  padding-left: 15px;\n  background-color: rgba(255, 255, 255, 0);\n}\n.search input:focus{\n  border:none;\n  outline: none;\n}\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color:rgba(255, 255, 255, 0.884);\n}\n::-moz-placeholder { /* Firefox 19+ */\n  color:rgba(255, 255, 255, 0.884);\n}\n:-ms-input-placeholder { /* IE 10+ */\n  color:rgba(255, 255, 255, 0.884);\n}\n:-moz-placeholder { /* Firefox 18- */\n  color:rgba(255, 255, 255, 0.884);\n}\n/*------->> Login/Register */\n.nav_bar ul li{\n  width:150px;\n  height:40px;\n  border:1px solid rgb(255, 255, 255);\n  text-align: center;\n  display: inline-block;\n  padding-top: 6px;\n  border-radius: 4px;\n  margin:0 10px;\n  cursor: pointer;\n  transition: .5s;\n}\n.nav_bar ul li a{\n  text-decoration: none;\n  font-size: 18px;\n  text-align: center;\n  transition: .5s;\n}\n.about{\n  background-color: white !important;\n  border:none !important;\n  padding-top: 8px !important;\n  transition: .5s;\n}\n.about a {\n  color:hsl(184, 24%, 55%) !important;\n}\n.nav_bar ul li:hover{\n  background-color: white;\n}\n.nav_bar ul li:hover a {\n  color:hsl(184, 24%, 55%);\n}\n.about:hover {\n  background-color: rgb(92, 56, 109) !important;\n}\n/* <------- Header Styling ------->*/\n.page_head{\n  position: relative;\n  top:220px;\n  width:400px;\n  margin:auto;\n}\n.head_text{\n  height:400px;\n  margin:auto;\n  transition:.5s;\n}\n.page_head h1 {\n  font-size: 80px;\n  font-family: 'Nunito', sans-serif;\n  text-align: center;\n}\n.head_text{\n  width:90%;\n  margin:auto;\n}\n.page_head h4 {\n  margin-top:150px;\n  font-size: 40px;\n  font-family: 'Nunito', sans-serif;\n  text-align: center;\n}\n.scroll_main{\n  position: relative;\n  font-size: 60px;\n  padding-right: 20px;\n  top:30px;\n  color:white !important;\n}\n.login_input{\n  display:block;\n  width:100%;\n  border:2px solid rgb(233, 233, 233);\n  border-radius: 3px;\n  height:40px;\n  margin-top: 20px;\n  margin-bottom: 15px;\n  color: rgb(233, 233, 233) !important;\n  text-align: center;\n  font-size: 18px;\n  background-color: rgba(255, 255, 255, 0);\n  transition:.5s;\n}\n.login_input:hover{\n  background-color: rgba(255, 255, 255, 0.61);\n  color: rgb(29, 29, 29) !important;\n  border:2px solid rgba(255, 255, 255, 0.61);\n  border-radius: 3px;\n}\n.login_input:hover::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color: rgb(65, 65, 65) !important;\n  font-weight: bold;\n}\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color: rgb(233, 233, 233) !important;\n  transition:.5s;\n}\n::-moz-placeholder { /* Firefox 19+ */\n  color: rgb(233, 233, 233) !important;\n  transition:.5s;\n}\n:-ms-input-placeholder { /* IE 10+ */\n  color: rgb(233, 233, 233) !important;\n  transition:.5s;\n}\n:-moz-placeholder { /* Firefox 18- */\n  color: rgb(233, 233, 233) !important;\n  transition:.5s;\n}\n.login_input:focus{\n  outline:none;\n  border:2px solid  rgba(255, 255, 255, 0.61);\n  border-radius: 3px;\n  font-weight: bold;\n}\n.submit {\n  display:block;\n  width:100%;\n  border-radius: 20px;\n  border:none;\n  height:40px;\n  margin-top: 60px;\n  margin-bottom: 15px;\n  color: rgb(233, 233, 233) !important;\n  text-align: center;\n  font-size: 18px;\n  background-color: rgba(61, 37, 71, 0.822);\n  transition:.5s;\n}\n.submit:hover{\n  background-color: rgb(92, 56, 109);\n}\n.error {\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNkNBQTZDO0FBQzdDO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLHdCQUF3QjtDQUN6QjtBQUVEO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7Q0FDWjtBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7Q0FDYjtBQUNELHFCQUFxQjtBQUVyQjtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtDQUNwQjtBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx1Q0FBdUM7RUFDdkMsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIseUNBQXlDO0NBQzFDO0FBRUQ7RUFDRSxZQUFZO0VBQ1osY0FBYztDQUNmO0FBRUQsOEJBQThCLHlCQUF5QjtFQUNyRCxpQ0FBaUM7Q0FDbEM7QUFDRCxxQkFBcUIsaUJBQWlCO0VBQ3BDLGlDQUFpQztDQUNsQztBQUNELHlCQUF5QixZQUFZO0VBQ25DLGlDQUFpQztDQUNsQztBQUNELG9CQUFvQixpQkFBaUI7RUFDbkMsaUNBQWlDO0NBQ2xDO0FBRUQsNkJBQTZCO0FBQzdCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7Q0FDakI7QUFFRDtFQUNFLG1DQUFtQztFQUNuQyx1QkFBdUI7RUFDdkIsNEJBQTRCO0VBQzVCLGdCQUFnQjtDQUNqQjtBQUVEO0VBQ0Usb0NBQW9DO0NBQ3JDO0FBR0Q7RUFDRSx3QkFBd0I7Q0FDekI7QUFFRDtFQUNFLHlCQUF5QjtDQUMxQjtBQUVEO0VBQ0UsOENBQThDO0NBQy9DO0FBRUQscUNBQXFDO0FBRXJDO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtDQUNiO0FBRUQ7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7Q0FDaEI7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSxVQUFVO0VBQ1YsWUFBWTtDQUNiO0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtDQUFrQztFQUNsQyxtQkFBbUI7Q0FDcEI7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLFNBQVM7RUFDVCx1QkFBdUI7Q0FDeEI7QUFFRDtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix5Q0FBeUM7RUFDekMsZUFBZTtDQUNoQjtBQUVEO0VBQ0UsNENBQTRDO0VBQzVDLGtDQUFrQztFQUNsQywyQ0FBMkM7RUFDM0MsbUJBQW1CO0NBQ3BCO0FBRUQsZ0RBQWdELHlCQUF5QjtFQUN2RSxrQ0FBa0M7RUFDbEMsa0JBQWtCO0NBQ25CO0FBRUQsOEJBQThCLHlCQUF5QjtFQUNyRCxxQ0FBcUM7RUFDckMsZUFBZTtDQUNoQjtBQUNELHFCQUFxQixpQkFBaUI7RUFDcEMscUNBQXFDO0VBQ3JDLGVBQWU7Q0FDaEI7QUFDRCx5QkFBeUIsWUFBWTtFQUNuQyxxQ0FBcUM7RUFDckMsZUFBZTtDQUNoQjtBQUNELG9CQUFvQixpQkFBaUI7RUFDbkMscUNBQXFDO0VBQ3JDLGVBQWU7Q0FDaEI7QUFFRDtFQUNFLGFBQWE7RUFDYiw0Q0FBNEM7RUFDNUMsbUJBQW1CO0VBQ25CLGtCQUFrQjtDQUNuQjtBQUVEO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDBDQUEwQztFQUMxQyxlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxtQ0FBbUM7Q0FDcEM7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixxQ0FBcUM7Q0FDdEMiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiA8LS0tLS0tLSBOYXZpZ2F0aW9uIEJhciBTdHlsaW5nIC0tLS0tLS0+Ki9cbmltZ3tcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6LTIwMHB4O1xuICBmaWx0ZXI6IGJsdXIoOHB4KTtcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDc1JSk7XG59XG5cbi5uYXZfYmFye1xuICB3aWR0aDoxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5uYXZfYmFyIHVsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDoxMDBweDtcbn1cbi8qLS0tLS0tLT4+IFNlYXJjaCAqL1xuXG4uZmEtc2VhcmNoe1xuICBjb2xvcjp3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uc2VhcmNoe1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6MTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNzEpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnNlYXJjaCBpbnB1dHtcbiAgd2lkdGg6NDAwcHg7XG4gIGJvcmRlcjpub25lO1xuICBoZWlnaHQ6NDBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjp3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xufVxuXG4uc2VhcmNoIGlucHV0OmZvY3Vze1xuICBib3JkZXI6bm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogQ2hyb21lL09wZXJhL1NhZmFyaSAqL1xuICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODg0KTtcbn1cbjo6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTkrICovXG4gIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC44ODQpO1xufVxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIElFIDEwKyAqL1xuICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODg0KTtcbn1cbjotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOC0gKi9cbiAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg4NCk7XG59XG5cbi8qLS0tLS0tLT4+IExvZ2luL1JlZ2lzdGVyICovXG4ubmF2X2JhciB1bCBsaXtcbiAgd2lkdGg6MTUwcHg7XG4gIGhlaWdodDo0MHB4O1xuICBib3JkZXI6MXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOjAgMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAuNXM7XG59XG4ubmF2X2JhciB1bCBsaSBhe1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAuNXM7XG59XG5cbi5hYm91dHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDhweCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiAuNXM7XG59XG5cbi5hYm91dCBhIHtcbiAgY29sb3I6aHNsKDE4NCwgMjQlLCA1NSUpICFpbXBvcnRhbnQ7XG59XG5cblxuLm5hdl9iYXIgdWwgbGk6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubmF2X2JhciB1bCBsaTpob3ZlciBhIHtcbiAgY29sb3I6aHNsKDE4NCwgMjQlLCA1NSUpO1xufVxuXG4uYWJvdXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDU2LCAxMDkpICFpbXBvcnRhbnQ7XG59XG5cbi8qIDwtLS0tLS0tIEhlYWRlciBTdHlsaW5nIC0tLS0tLS0+Ki9cblxuLnBhZ2VfaGVhZHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6MjIwcHg7XG4gIHdpZHRoOjQwMHB4O1xuICBtYXJnaW46YXV0bztcbn1cblxuLmhlYWRfdGV4dHtcbiAgaGVpZ2h0OjQwMHB4O1xuICBtYXJnaW46YXV0bztcbiAgdHJhbnNpdGlvbjouNXM7XG59XG5cbi5wYWdlX2hlYWQgaDEge1xuICBmb250LXNpemU6IDgwcHg7XG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZF90ZXh0e1xuICB3aWR0aDo5MCU7XG4gIG1hcmdpbjphdXRvO1xufVxuXG4ucGFnZV9oZWFkIGg0IHtcbiAgbWFyZ2luLXRvcDoxNTBweDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNjcm9sbF9tYWlue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgdG9wOjMwcHg7XG4gIGNvbG9yOndoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dpbl9pbnB1dHtcbiAgZGlzcGxheTpibG9jaztcbiAgd2lkdGg6MTAwJTtcbiAgYm9yZGVyOjJweCBzb2xpZCByZ2IoMjMzLCAyMzMsIDIzMyk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgaGVpZ2h0OjQwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMykgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIHRyYW5zaXRpb246LjVzO1xufVxuXG4ubG9naW5faW5wdXQ6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MSk7XG4gIGNvbG9yOiByZ2IoMjksIDI5LCAyOSkgIWltcG9ydGFudDtcbiAgYm9yZGVyOjJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjEpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5sb2dpbl9pbnB1dDpob3Zlcjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIENocm9tZS9PcGVyYS9TYWZhcmkgKi9cbiAgY29sb3I6IHJnYig2NSwgNjUsIDY1KSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogQ2hyb21lL09wZXJhL1NhZmFyaSAqL1xuICBjb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246LjVzO1xufVxuOjotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOSsgKi9cbiAgY29sb3I6IHJnYigyMzMsIDIzMywgMjMzKSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOi41cztcbn1cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJRSAxMCsgKi9cbiAgY29sb3I6IHJnYigyMzMsIDIzMywgMjMzKSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOi41cztcbn1cbjotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOC0gKi9cbiAgY29sb3I6IHJnYigyMzMsIDIzMywgMjMzKSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOi41cztcbn1cblxuLmxvZ2luX2lucHV0OmZvY3Vze1xuICBvdXRsaW5lOm5vbmU7XG4gIGJvcmRlcjoycHggc29saWQgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zdWJtaXQge1xuICBkaXNwbGF5OmJsb2NrO1xuICB3aWR0aDoxMDAlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6bm9uZTtcbiAgaGVpZ2h0OjQwcHg7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMykgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjEsIDM3LCA3MSwgMC44MjIpO1xuICB0cmFuc2l0aW9uOi41cztcbn1cblxuLnN1Ym1pdDpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCA1NiwgMTA5KTtcbn1cblxuLmVycm9yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!---------------Navigation Bar-------------->\n<img src=\"../../assets/img/park.jpg\" alt=\"\">\n<div class=\"nav_bar\">\n  <!-- search -->\n  <div class=\"search\">\n    <i class=\"fas fa-search\"></i>\n    <input type=\"text\" placeholder=\"Search Scroll\">\n\n  </div>\n\n  <!-- login/registration -->\n  <div class=\"login_register\">\n    <ul>\n      <li><a routerLink=\"/\" routerLinkActive=\"active\">Home</a></li>\n      <li><a routerLink=\"/login\" routerLinkActive=\"active\">Login</a></li>\n      <li class=\"about\"><a href=\"\">About</a></li>\n    </ul>\n  </div>\n\n</div>\n\n\n\n<div class=\"page_head\">\n  <h1><i class=\"fas fa-scroll scroll_main\"></i>{{title}}</h1>\n  <div class=\"head_text\">\n    <form (submit)=\"create()\">\n      <input class=\"login_input\" type=\"text\" name=\"user.username\" [(ngModel)]=\"user.username\" placeholder=\"username\">\n      <input class=\"login_input\" type=\"text\" name=\"user.email\" [(ngModel)]=\"user.email\" placeholder=\"email\">\n      <input class=\"login_input\" type=\"text\" name=\"user.password\" [(ngModel)]=\"user.password\" placeholder=\"password\">\n      <div class=\"error\">\n        <p class=\"errorText\" *ngIf=\"errors.username\">{{errors.username.message}}</p>\n        <p class=\"errorText\" *ngIf=\"errors.email\">{{errors.email.message}}</p>\n        <p class=\"errorText\" *ngIf=\"errors.password\">{{errors.password.message}}</p>\n      </div>\n      <input class=\"submit\" type=\"submit\" value=\"Start Scrolling\">\n    </form>\n  </div>\n\n\n</div>\n\n\n\n<!------------- End of Opening Page ------------->\n\n"

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
            "password": ''
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

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


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
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
    UserService.prototype.getOne = function (id) {
        return this._http.get("/user/" + id);
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

module.exports = __webpack_require__(/*! /Users/andynguyen/Documents/CodingDojo/mean/scroll/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map