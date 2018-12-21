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

module.exports = "\n/* <------- Navigation Bar Styling ------->*/\n\n.scroll_main{\n  position: relative;\n  font-size: 30px;\n  padding-right: 10px;\n  top:15px;\n  color:white !important;\n  transition:.5s;\n}\n\n.head_text{\n  width:400px;\n  height: 60px;\n  margin:0 80px;\n  transition:.5s;\n  border-radius: 8px;\n}\n\n.head_text h1 {\n  font-size: 40px;\n  font-family: 'Nunito', sans-serif;\n  text-align: center;\n  border:2px solid white;\n  border-radius: 8px;\n  transition:.5s;\n}\n\n.head_text:hover h1{\n  color: rgb(107, 87, 124);\n  border:2px solid rgb(107, 87, 124);;\n}\n\n.head_text:hover i{\n  color: rgb(107, 87, 124) !important;\n}\n\n.nav_bar{\n  width:100%;\n  display: flex;\n  position: fixed;\n  top:0;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  z-index: 1;\n  background-color: #5F7E83;\n}\n\n.nav_bar ul {\n  position: fixed;\n  margin:10px 200px;\n}\n\n/*------->> Search */\n\n.fa-search{\n  color:white;\n  font-size: 18px;\n  padding-top: 12px;\n  padding-left: 20px;\n}\n\n.search{\n  position: fixed;\n  margin-top: 10px;\n  right:80px;\n  background-color: rgba(0, 0, 0, 0.171);\n  border-radius: 10px;\n}\n\n.search input{\n  width:400px;\n  border:none;\n  height:40px;\n  font-size: 16px;\n  color:white;\n  font-weight: 100;\n  padding-left: 15px;\n  background-color: rgba(255, 255, 255, 0);\n}\n\n.search input:focus{\n  border:none;\n  outline: none;\n}\n\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color:rgba(255, 255, 255, 0.884);\n}\n\n::-moz-placeholder { /* Firefox 19+ */\n  color:rgba(255, 255, 255, 0.884);\n}\n\n:-ms-input-placeholder { /* IE 10+ */\n  color:rgba(255, 255, 255, 0.884);\n}\n\n:-moz-placeholder { /* Firefox 18- */\n  color:rgba(255, 255, 255, 0.884);\n}\n\n/*------->> Login/Register */\n\n.nav_bar ul li{\n  width:40px;\n  height:40px;\n  text-align: center;\n  display: inline-block;\n  padding-top: 6px;\n  border-radius: 10px;\n  margin:0 20px 0 20px;\n  cursor: pointer;\n  transition: .5s;\n}\n\n.nav_bar ul li i{\n  text-decoration: none;\n  font-size: 30px;\n  text-align: center;\n  transition: .5s;\n}\n\n.about{\n  background-color: white !important;\n  border:none !important;\n  padding-top: 8px !important;\n  transition: .5s;\n}\n\n.about a {\n  color:hsl(184, 24%, 55%) !important;\n}\n\n.nav_bar ul li:hover i {\n  color:rgb(92, 56, 109);\n}\n\n/* <------- Add_post ------->*/\n\n.add_post{\n  display: inline-block;\n  width: 52px;\n  margin:auto 20px;\n  height:60px;\n  transition: .5s;\n}\n\n.add_post i{\n  font-size: 50px;\n  color: rgba(255, 255, 255, 0.322);\n  transition: .5s;\n}\n\n.add_post i:hover{\n  color:rgb(219, 219, 219);\n}\n\n.add_post_text {\n  margin:auto;\n  padding:15px 0 0 24px;\n  display: inline-block;\n  position:relative;\n  color:white;\n  font-size: 20px;\n  visibility: hidden;\n}\n\n#post_form{\n  display:block;\n  margin:20px auto;\n  width:460px;\n  height:80px;\n  border-radius: 6px;\n  background-color: white;\n}\n\n#post_form i{\n  font-size: 50px;\n  width:80px;\n  margin-top: 10px;\n  margin:10px 6px;\n  height:80px;\n  padding:6px 14px;\n  transition: .5s;\n}\n\n#post_form i:hover{\n  color: hsl(130, 36%, 50%);\n}\n\n.fa-link{\n  color:rgb(57, 76, 116);\n}\n\n.fa-images{\n  color:rgb(50, 100, 50);\n}\n\n.fa-font{\n  color:rgb(34, 34, 34);\n}\n\n.fa-youtube{\n  color:rgb(185, 42, 42);\n}\n\n.fa-headphones{\n  color:rgb(79, 49, 99);\n}\n\n/* <------- Blog Styling ------->*/\n\n.main_dash{\n  position: relative;\n  display: block;\n  width:36%;\n  margin:100px auto;\n  min-height: 760px;\n  border-radius: 6px;\n  padding:20px 0 60px 0;\n  background-color: rgba(0, 0, 0, 0.171);\n}\n\n.blog_contain{\n  width:100%;\n  margin:auto;\n}\n\n.blog_card{\n  display:block;\n  margin:20px auto;\n  width:460px;\n  min-height:350px;\n  border-radius: 6px;\n  background-color: white;\n}\n\n.blog_card h3{\n  font-size: 16px;\n  text-align: left;\n  margin-top: 30px;\n  padding-left: 0px;\n  color:black;\n  font-weight: bold;\n  display: inline-block;\n}\n\n.blog_card span{\n  margin:0;\n  padding:0;\n  top:0;\n  color:grey;\n}\n\n.card_img{\n  background-color: rgb(17, 17, 17);\n}\n\n.img{\n  width:100%;\n  margin:auto;\n}\n\n.gif{\n  width:100%!important;\n}\n\n.post_profile_photo{\n  width:50px!important;\n  border-radius: 50%;\n  display: inline-block;\n  margin:15px;\n}\n\n.card_contents{\n  width:80%;\n  margin:auto;\n}\n\n.card_contents h2, p{\n  color:rgb(24, 24, 24);\n}\n\n.card_contents h2{\n  padding: 10px 0;\n  text-align: center;\n  font-weight: bold;\n}\n\n.card_contents p{\n  padding-bottom: 5px;\n}\n\n.card_footer{\n  width:100%;\n  position: relative;\n  bottom: -5px;\n  background-color: rgb(255, 255, 255);\n  height:50px;\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n  text-align: right;\n}\n\n.card_footer .fa-scroll{\n  color:rgb(109, 109, 109) !important;\n  display: inline-block !important;\n\n}\n\n.card_footer p{\n  display: inline-block;\n  color:grey;\n  padding-right: 220px;\n  padding-top: 10px;\n}\n\n.card_footer i{\n  color:rgb(109, 109, 109);\n  position: relative;\n  padding-top: 15px;\n  display: inline-block;\n  font-size: 24px;\n  margin: 0 10px;\n  transition: .5s;\n}\n\n.card_footer i:hover{\n  color:rgb(97, 158, 95)!important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw2Q0FBNkM7O0FBRTdDO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsU0FBUztFQUNULHVCQUF1QjtFQUN2QixlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLHlCQUF5QjtFQUN6QixtQ0FBbUM7Q0FDcEM7O0FBRUQ7RUFDRSxvQ0FBb0M7Q0FDckM7O0FBRUQ7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQjs7QUFDRCxxQkFBcUI7O0FBRXJCO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsdUNBQXVDO0VBQ3ZDLG9CQUFvQjtDQUNyQjs7QUFDRDtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix5Q0FBeUM7Q0FDMUM7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osY0FBYztDQUNmOztBQUVELDhCQUE4Qix5QkFBeUI7RUFDckQsaUNBQWlDO0NBQ2xDOztBQUNELHFCQUFxQixpQkFBaUI7RUFDcEMsaUNBQWlDO0NBQ2xD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O0VBQ3JCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGlDQUFpQztDQUNsQyIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogPC0tLS0tLS0gTmF2aWdhdGlvbiBCYXIgU3R5bGluZyAtLS0tLS0tPiovXG5cbi5zY3JvbGxfbWFpbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHRvcDoxNXB4O1xuICBjb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOi41cztcbn1cblxuLmhlYWRfdGV4dHtcbiAgd2lkdGg6NDAwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luOjAgODBweDtcbiAgdHJhbnNpdGlvbjouNXM7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmhlYWRfdGV4dCBoMSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjoycHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgdHJhbnNpdGlvbjouNXM7XG59XG5cbi5oZWFkX3RleHQ6aG92ZXIgaDF7XG4gIGNvbG9yOiByZ2IoMTA3LCA4NywgMTI0KTtcbiAgYm9yZGVyOjJweCBzb2xpZCByZ2IoMTA3LCA4NywgMTI0KTs7XG59XG5cbi5oZWFkX3RleHQ6aG92ZXIgaXtcbiAgY29sb3I6IHJnYigxMDcsIDg3LCAxMjQpICFpbXBvcnRhbnQ7XG59XG5cbi5uYXZfYmFye1xuICB3aWR0aDoxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDowO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1RjdFODM7XG59XG5cbi5uYXZfYmFyIHVsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBtYXJnaW46MTBweCAyMDBweDtcbn1cbi8qLS0tLS0tLT4+IFNlYXJjaCAqL1xuXG4uZmEtc2VhcmNoe1xuICBjb2xvcjp3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uc2VhcmNoe1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHJpZ2h0OjgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNzEpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnNlYXJjaCBpbnB1dHtcbiAgd2lkdGg6NDAwcHg7XG4gIGJvcmRlcjpub25lO1xuICBoZWlnaHQ6NDBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjp3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xufVxuXG4uc2VhcmNoIGlucHV0OmZvY3Vze1xuICBib3JkZXI6bm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogQ2hyb21lL09wZXJhL1NhZmFyaSAqL1xuICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODg0KTtcbn1cbjo6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTkrICovXG4gIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC44ODQpO1xufVxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIElFIDEwKyAqL1xuICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODg0KTtcbn1cbjotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOC0gKi9cbiAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg4NCk7XG59XG5cbi8qLS0tLS0tLT4+IExvZ2luL1JlZ2lzdGVyICovXG4ubmF2X2JhciB1bCBsaXtcbiAgd2lkdGg6NDBweDtcbiAgaGVpZ2h0OjQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46MCAyMHB4IDAgMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAuNXM7XG59XG4ubmF2X2JhciB1bCBsaSBpe1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAuNXM7XG59XG5cbi5hYm91dHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDhweCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiAuNXM7XG59XG5cbi5hYm91dCBhIHtcbiAgY29sb3I6aHNsKDE4NCwgMjQlLCA1NSUpICFpbXBvcnRhbnQ7XG59XG5cbi5uYXZfYmFyIHVsIGxpOmhvdmVyIGkge1xuICBjb2xvcjpyZ2IoOTIsIDU2LCAxMDkpO1xufVxuXG5cbi8qIDwtLS0tLS0tIEFkZF9wb3N0IC0tLS0tLS0+Ki9cbi5hZGRfcG9zdHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTJweDtcbiAgbWFyZ2luOmF1dG8gMjBweDtcbiAgaGVpZ2h0OjYwcHg7XG4gIHRyYW5zaXRpb246IC41cztcbn1cblxuLmFkZF9wb3N0IGl7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMjIpO1xuICB0cmFuc2l0aW9uOiAuNXM7XG59XG5cbi5hZGRfcG9zdCBpOmhvdmVye1xuICBjb2xvcjpyZ2IoMjE5LCAyMTksIDIxOSk7XG59XG5cbi5hZGRfcG9zdF90ZXh0IHtcbiAgbWFyZ2luOmF1dG87XG4gIHBhZGRpbmc6MTVweCAwIDAgMjRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgY29sb3I6d2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4jcG9zdF9mb3Jte1xuICBkaXNwbGF5OmJsb2NrO1xuICBtYXJnaW46MjBweCBhdXRvO1xuICB3aWR0aDo0NjBweDtcbiAgaGVpZ2h0OjgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbiNwb3N0X2Zvcm0gaXtcbiAgZm9udC1zaXplOiA1MHB4O1xuICB3aWR0aDo4MHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW46MTBweCA2cHg7XG4gIGhlaWdodDo4MHB4O1xuICBwYWRkaW5nOjZweCAxNHB4O1xuICB0cmFuc2l0aW9uOiAuNXM7XG59XG5cbiNwb3N0X2Zvcm0gaTpob3ZlcntcbiAgY29sb3I6IGhzbCgxMzAsIDM2JSwgNTAlKTtcbn1cblxuLmZhLWxpbmt7XG4gIGNvbG9yOnJnYig1NywgNzYsIDExNik7XG59XG5cbi5mYS1pbWFnZXN7XG4gIGNvbG9yOnJnYig1MCwgMTAwLCA1MCk7XG59XG5cbi5mYS1mb250e1xuICBjb2xvcjpyZ2IoMzQsIDM0LCAzNCk7XG59XG5cbi5mYS15b3V0dWJle1xuICBjb2xvcjpyZ2IoMTg1LCA0MiwgNDIpO1xufVxuXG4uZmEtaGVhZHBob25lc3tcbiAgY29sb3I6cmdiKDc5LCA0OSwgOTkpO1xufVxuXG4vKiA8LS0tLS0tLSBCbG9nIFN0eWxpbmcgLS0tLS0tLT4qL1xuXG4ubWFpbl9kYXNoe1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDozNiU7XG4gIG1hcmdpbjoxMDBweCBhdXRvO1xuICBtaW4taGVpZ2h0OiA3NjBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOjIwcHggMCA2MHB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNzEpO1xufVxuXG4uYmxvZ19jb250YWlue1xuICB3aWR0aDoxMDAlO1xuICBtYXJnaW46YXV0bztcbn1cblxuLmJsb2dfY2FyZHtcbiAgZGlzcGxheTpibG9jaztcbiAgbWFyZ2luOjIwcHggYXV0bztcbiAgd2lkdGg6NDYwcHg7XG4gIG1pbi1oZWlnaHQ6MzUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5ibG9nX2NhcmQgaDN7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIGNvbG9yOmJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYmxvZ19jYXJkIHNwYW57XG4gIG1hcmdpbjowO1xuICBwYWRkaW5nOjA7XG4gIHRvcDowO1xuICBjb2xvcjpncmV5O1xufVxuXG4uY2FyZF9pbWd7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNywgMTcsIDE3KTtcbn1cblxuLmltZ3tcbiAgd2lkdGg6MTAwJTtcbiAgbWFyZ2luOmF1dG87XG59XG5cbi5naWZ7XG4gIHdpZHRoOjEwMCUhaW1wb3J0YW50O1xufVxuXG4ucG9zdF9wcm9maWxlX3Bob3Rve1xuICB3aWR0aDo1MHB4IWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjoxNXB4O1xufVxuXG4uY2FyZF9jb250ZW50c3tcbiAgd2lkdGg6ODAlO1xuICBtYXJnaW46YXV0bztcbn1cblxuLmNhcmRfY29udGVudHMgaDIsIHB7XG4gIGNvbG9yOnJnYigyNCwgMjQsIDI0KTtcbn1cblxuLmNhcmRfY29udGVudHMgaDJ7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNhcmRfY29udGVudHMgcHtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmNhcmRfZm9vdGVye1xuICB3aWR0aDoxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogLTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBoZWlnaHQ6NTBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmNhcmRfZm9vdGVyIC5mYS1zY3JvbGx7XG4gIGNvbG9yOnJnYigxMDksIDEwOSwgMTA5KSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcblxufVxuXG4uY2FyZF9mb290ZXIgcHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjpncmV5O1xuICBwYWRkaW5nLXJpZ2h0OiAyMjBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5jYXJkX2Zvb3RlciBpe1xuICBjb2xvcjpyZ2IoMTA5LCAxMDksIDEwOSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW46IDAgMTBweDtcbiAgdHJhbnNpdGlvbjogLjVzO1xufVxuXG4uY2FyZF9mb290ZXIgaTpob3ZlcntcbiAgY29sb3I6cmdiKDk3LCAxNTgsIDk1KSFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!---------------Navigation Bar-------------->\n<div class=\"nav_bar\">\n    <div class=\"head_text\">\n      <h1><i class=\"fas fa-scroll scroll_main\"></i>{{title}}</h1>\n    </div>\n\n    <!-- settings -->\n    <!-- <app-settings *ngIf=\"settingsClick\"></app-settings> -->\n    <app-settings></app-settings>\n\n    <!-- login/registration -->\n    <div class=\"login_register\">\n      <ul>\n        <li><a routerLink=\"/dashboard\" routerLinkActive=\"active\"><i class=\"fas fa-home\"></i></a></li>\n        <li><a routerLink=\"/random\" routerLinkActive=\"active\"><i class=\"far fa-compass\"></i></a></li>\n        <li><a routerLink=\"/signup\" routerLinkActive=\"active\"><i class=\"fas fa-comments\"></i></a></li>\n        <li><a routerLink=\"/signup\" routerLinkActive=\"active\"><i class=\"fas fa-cog\"></i></a></li>\n        <li><i class=\"fas fa-power-off\" (click)=\"logout()\"></i></li>\n      </ul>\n    </div>\n\n    <!-- search -->\n    <div class=\"search\">\n      <i class=\"fas fa-search\"></i>\n      <input type=\"text\" placeholder=\"Search Scroll\">\n\n    </div>\n</div>\n\n\n  <!---------------Post Dash -------------->\n\n  <div class=\"main_dash\">\n    <div class=\"add_post\">\n        <i *ngIf=\"!add_post\" (click)=\"add_post_clicked()\" class=\"fas fa-plus\"></i>\n        <i *ngIf=\"add_post\" (click)=\"add_post_clicked()\" class=\"fas fa-minus\"></i>\n    </div>\n    <p *ngIf=\"!add_post\" class=\"add_post_text\">Add a new post</p>\n\n    <div *ngIf=\"add_post\" id=\"post_form\">\n        <i class=\"fas fa-link\"></i>\n        <i class=\"fas fa-images\"></i>\n        <i class=\"fas fa-font\"></i>\n        <i class=\"fab fa-youtube\"></i>\n        <i class=\"fas fa-headphones\"></i>\n    </div>\n\n    <div class=\"blog_contain\">\n\n      <!-- card one -->\n      <div class=\"blog_card\">\n\n        <p>Hello {{user.username}}!</p>\n        <!-- <p>{{user | json}}</p> -->\n\n      <div class=\"card_head\">\n\n        <img class=\"post_profile_photo\" src=\"../assets/img/sky.jpg\" alt=\"\">\n        <h3>SkiesTheLimit <span>(22min ago)</span></h3>\n        <img class=\"img\" src=\"../assets/img/travel.jpg\" alt=\"\">\n      </div>\n\n      <div class=\"card_contents\">\n        <h2>Sailing in Greece</h2>\n        <p>I can't believe how amazing this weekend has been. Good food, wine, and friends to share this incredible journey with. I can't wait to visit again...</p>\n      </div>\n\n      <div class=\"card_footer\">\n\n          <i class=\"fas fa-scroll\"></i>\n          <p>915</p>\n\n          <i class=\"far fa-comment-dots\"></i>\n\n          <i class=\"fa fa-retweet\" aria-hidden=\"true\"></i>\n\n          <i class=\"fa fa-heart\" aria-hidden=\"true\"></i>\n      </div>\n    </div>\n\n      <!-- card three -->\n      <div class=\"blog_card\">\n        <img class=\"post_profile_photo\" src=\"../assets/img/sky.jpg\" alt=\"\">\n        <h3>Art-ifacts <span>(2 days ago)</span></h3>\n        <div class=\"card_img\">\n          <img class=\"gif\" src=\"../assets/img/fall.jpg\" alt=\"\">\n        </div>\n\n        <div class=\"card_footer\">\n\n            <i class=\"fas fa-scroll\"></i>\n            <p>12,300</p>\n\n            <i class=\"far fa-comment-dots\"></i>\n\n            <i class=\"fa fa-retweet\" aria-hidden=\"true\"></i>\n\n            <i class=\"fa fa-heart\" aria-hidden=\"true\"></i>\n        </div>\n\n      </div>\n\n      <!-- card two -->\n    <div class=\"blog_card\">\n      <img class=\"post_profile_photo\" src=\"../assets/img/sky.jpg\" alt=\"\">\n      <h3>GhibliDearest <span>(2 hours ago)</span></h3>\n      <div class=\"card_img\">\n        <img class=\"gif\" src=\"../assets/img/kiki.gif\" alt=\"\">\n      </div>\n\n      <div class=\"card_footer\">\n\n          <i class=\"fas fa-scroll\"></i>\n          <p>2,011</p>\n\n          <i class=\"far fa-comment-dots\"></i>\n\n          <i class=\"fa fa-retweet\" aria-hidden=\"true\"></i>\n\n          <i class=\"fa fa-heart\" aria-hidden=\"true\"></i>\n      </div>\n\n    </div>\n\n\n    <app-post></app-post>\n\n  <app-upload></app-upload>\n\n  </div>\n"


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

module.exports = "\n/* <------- Navigation Bar Styling ------->*/\nimg{\n  position: fixed;\n  top:-200px;\n  filter: blur(8px);\n  -webkit-filter: blur(4px);\n  filter: brightness(40%);\n}\n.nav_bar{\n  width:100%;\n  display: flex;\n  position: fixed;\n  margin-top: 20px;\n  z-index: 1;\n}\n.nav_bar ul {\n  position: fixed;\n  right:100px;\n}\n/*------->> Search */\n.fa-search{\n  color:white;\n  font-size: 18px;\n  padding-top: 12px;\n  padding-left: 20px;\n}\n.search{\n  position: relative;\n  left:100px;\n  background-color: rgba(0, 0, 0, 0.315);\n  border-radius: 10px;\n}\n.search input{\n  width:400px;\n  border:none;\n  height:40px;\n  font-size: 16px;\n  color:white;\n  font-weight: 100;\n  padding-left: 15px;\n  background-color: rgba(255, 255, 255, 0);\n}\n.search input:focus{\n  border:none;\n  outline: none;\n}\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color:rgba(255, 255, 255, 0.884);\n}\n::-moz-placeholder { /* Firefox 19+ */\n  color:rgba(255, 255, 255, 0.884);\n}\n:-ms-input-placeholder { /* IE 10+ */\n  color:rgba(255, 255, 255, 0.884);\n}\n:-moz-placeholder { /* Firefox 18- */\n  color:rgba(255, 255, 255, 0.884);\n}\n/*------->> Login/Register */\n.nav_bar ul li{\n  width:150px;\n  height:40px;\n  border:1px solid rgb(255, 255, 255);\n  text-align: center;\n  display: inline-block;\n  padding-top: 6px;\n  border-radius: 4px;\n  margin:0 10px;\n  cursor: pointer;\n  transition: .5s;\n}\n.nav_bar ul li a{\n  text-decoration: none;\n  font-size: 18px;\n  text-align: center;\n  transition: .5s;\n  width: 100px;\n}\n.about{\n  background-color: white !important;\n  border:none !important;\n  padding-top: 8px !important;\n  transition: .5s;\n}\n.about a {\n  color:hsl(184, 24%, 55%) !important;\n}\n.nav_bar ul li:hover{\n  background-color: white;\n}\n.nav_bar ul li:hover a {\n  color:hsl(184, 24%, 55%);\n}\n.about:hover {\n  background-color: rgb(92, 56, 109) !important;\n}\n/* <------- Header Styling ------->*/\n.page_head{\n  position: relative;\n  top:220px;\n  width:400px;\n  margin:auto;\n}\n.head_text{\n  height:400px;\n  margin:auto;\n  transition:.5s;\n}\n.page_head h1 {\n  font-size: 80px;\n  font-family: 'Nunito', sans-serif;\n  text-align: center;\n}\n.head_text{\n  width:90%;\n  margin:auto;\n}\n.page_head h4 {\n  margin-top:150px;\n  font-size: 40px;\n  font-family: 'Nunito', sans-serif;\n  text-align: center;\n}\n.scroll_main{\n  position: relative;\n  font-size: 60px;\n  padding-right: 20px;\n  top:30px;\n  color:white !important;\n}\n.login_input{\n  display:block;\n  width:100%;\n  border:2px solid rgb(233, 233, 233);\n  border-radius: 3px;\n  height:40px;\n  margin-top: 20px;\n  margin-bottom: 15px;\n  color: rgb(233, 233, 233) !important;\n  text-align: center;\n  font-size: 18px;\n  background-color: rgba(255, 255, 255, 0);\n  transition:.5s;\n}\n.login_input:hover{\n  background-color: rgba(255, 255, 255, 0.61);\n  color: rgb(29, 29, 29) !important;\n  border:2px solid rgba(255, 255, 255, 0.61);\n  border-radius: 3px;\n}\n.login_input:hover::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color: rgb(65, 65, 65) !important;\n  font-weight: bold;\n}\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color: rgb(233, 233, 233) !important;\n  transition:.5s;\n}\n::-moz-placeholder { /* Firefox 19+ */\n  color: rgb(233, 233, 233) !important;\n  transition:.5s;\n}\n:-ms-input-placeholder { /* IE 10+ */\n  color: rgb(233, 233, 233) !important;\n  transition:.5s;\n}\n:-moz-placeholder { /* Firefox 18- */\n  color: rgb(233, 233, 233) !important;\n  transition:.5s;\n}\n.login_input:focus{\n  outline:none;\n  border:2px solid  rgba(255, 255, 255, 0.61);\n  border-radius: 3px;\n  font-weight: bold;\n}\n.submit {\n  display:block;\n  width:100%;\n  border-radius: 20px;\n  border:none;\n  height:40px;\n  margin-top: 60px;\n  margin-bottom: 15px;\n  color: rgb(233, 233, 233) !important;\n  text-align: center;\n  font-size: 18px;\n  background-color: rgba(61, 37, 71, 0.822);\n  transition:.5s;\n}\n.submit:hover{\n  background-color: rgb(92, 56, 109);\n}\n.error {\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNkNBQTZDO0FBQzdDO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLHdCQUF3QjtDQUN6QjtBQUVEO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7Q0FDWjtBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7Q0FDYjtBQUNELHFCQUFxQjtBQUVyQjtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtDQUNwQjtBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx1Q0FBdUM7RUFDdkMsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIseUNBQXlDO0NBQzFDO0FBRUQ7RUFDRSxZQUFZO0VBQ1osY0FBYztDQUNmO0FBRUQsOEJBQThCLHlCQUF5QjtFQUNyRCxpQ0FBaUM7Q0FDbEM7QUFDRCxxQkFBcUIsaUJBQWlCO0VBQ3BDLGlDQUFpQztDQUNsQztBQUNELHlCQUF5QixZQUFZO0VBQ25DLGlDQUFpQztDQUNsQztBQUNELG9CQUFvQixpQkFBaUI7RUFDbkMsaUNBQWlDO0NBQ2xDO0FBRUQsNkJBQTZCO0FBQzdCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsYUFBYTtDQUNkO0FBRUQ7RUFDRSxtQ0FBbUM7RUFDbkMsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1QixnQkFBZ0I7Q0FDakI7QUFFRDtFQUNFLG9DQUFvQztDQUNyQztBQUdEO0VBQ0Usd0JBQXdCO0NBQ3pCO0FBRUQ7RUFDRSx5QkFBeUI7Q0FDMUI7QUFFRDtFQUNFLDhDQUE4QztDQUMvQztBQUVELHFDQUFxQztBQUVyQztFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7Q0FDYjtBQUVEO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLG1CQUFtQjtDQUNwQjtBQUVEO0VBQ0UsVUFBVTtFQUNWLFlBQVk7Q0FDYjtBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixTQUFTO0VBQ1QsdUJBQXVCO0NBQ3hCO0FBRUQ7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIseUNBQXlDO0VBQ3pDLGVBQWU7Q0FDaEI7QUFFRDtFQUNFLDRDQUE0QztFQUM1QyxrQ0FBa0M7RUFDbEMsMkNBQTJDO0VBQzNDLG1CQUFtQjtDQUNwQjtBQUVELGdEQUFnRCx5QkFBeUI7RUFDdkUsa0NBQWtDO0VBQ2xDLGtCQUFrQjtDQUNuQjtBQUVELDhCQUE4Qix5QkFBeUI7RUFDckQscUNBQXFDO0VBQ3JDLGVBQWU7Q0FDaEI7QUFDRCxxQkFBcUIsaUJBQWlCO0VBQ3BDLHFDQUFxQztFQUNyQyxlQUFlO0NBQ2hCO0FBQ0QseUJBQXlCLFlBQVk7RUFDbkMscUNBQXFDO0VBQ3JDLGVBQWU7Q0FDaEI7QUFDRCxvQkFBb0IsaUJBQWlCO0VBQ25DLHFDQUFxQztFQUNyQyxlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxhQUFhO0VBQ2IsNENBQTRDO0VBQzVDLG1CQUFtQjtFQUNuQixrQkFBa0I7Q0FDbkI7QUFFRDtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwwQ0FBMEM7RUFDMUMsZUFBZTtDQUNoQjtBQUVEO0VBQ0UsbUNBQW1DO0NBQ3BDO0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIDwtLS0tLS0tIE5hdmlnYXRpb24gQmFyIFN0eWxpbmcgLS0tLS0tLT4qL1xuaW1ne1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDotMjAwcHg7XG4gIGZpbHRlcjogYmx1cig4cHgpO1xuICAtd2Via2l0LWZpbHRlcjogYmx1cig0cHgpO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoNDAlKTtcbn1cblxuLm5hdl9iYXJ7XG4gIHdpZHRoOjEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgei1pbmRleDogMTtcbn1cblxuLm5hdl9iYXIgdWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OjEwMHB4O1xufVxuLyotLS0tLS0tPj4gU2VhcmNoICovXG5cbi5mYS1zZWFyY2h7XG4gIGNvbG9yOndoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5zZWFyY2h7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDoxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMxNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc2VhcmNoIGlucHV0e1xuICB3aWR0aDo0MDBweDtcbiAgYm9yZGVyOm5vbmU7XG4gIGhlaWdodDo0MHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOndoaXRlO1xuICBmb250LXdlaWdodDogMTAwO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG59XG5cbi5zZWFyY2ggaW5wdXQ6Zm9jdXN7XG4gIGJvcmRlcjpub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUvT3BlcmEvU2FmYXJpICovXG4gIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC44ODQpO1xufVxuOjotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOSsgKi9cbiAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg4NCk7XG59XG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSUUgMTArICovXG4gIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC44ODQpO1xufVxuOi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE4LSAqL1xuICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODg0KTtcbn1cblxuLyotLS0tLS0tPj4gTG9naW4vUmVnaXN0ZXIgKi9cbi5uYXZfYmFyIHVsIGxpe1xuICB3aWR0aDoxNTBweDtcbiAgaGVpZ2h0OjQwcHg7XG4gIGJvcmRlcjoxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW46MCAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IC41cztcbn1cbi5uYXZfYmFyIHVsIGxpIGF7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IC41cztcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4uYWJvdXR7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiA4cHggIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogLjVzO1xufVxuXG4uYWJvdXQgYSB7XG4gIGNvbG9yOmhzbCgxODQsIDI0JSwgNTUlKSAhaW1wb3J0YW50O1xufVxuXG5cbi5uYXZfYmFyIHVsIGxpOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLm5hdl9iYXIgdWwgbGk6aG92ZXIgYSB7XG4gIGNvbG9yOmhzbCgxODQsIDI0JSwgNTUlKTtcbn1cblxuLmFib3V0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCA1NiwgMTA5KSAhaW1wb3J0YW50O1xufVxuXG4vKiA8LS0tLS0tLSBIZWFkZXIgU3R5bGluZyAtLS0tLS0tPiovXG5cbi5wYWdlX2hlYWR7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOjIyMHB4O1xuICB3aWR0aDo0MDBweDtcbiAgbWFyZ2luOmF1dG87XG59XG5cbi5oZWFkX3RleHR7XG4gIGhlaWdodDo0MDBweDtcbiAgbWFyZ2luOmF1dG87XG4gIHRyYW5zaXRpb246LjVzO1xufVxuXG4ucGFnZV9oZWFkIGgxIHtcbiAgZm9udC1zaXplOiA4MHB4O1xuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRfdGV4dHtcbiAgd2lkdGg6OTAlO1xuICBtYXJnaW46YXV0bztcbn1cblxuLnBhZ2VfaGVhZCBoNCB7XG4gIG1hcmdpbi10b3A6MTUwcHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zY3JvbGxfbWFpbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDYwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHRvcDozMHB4O1xuICBjb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ubG9naW5faW5wdXR7XG4gIGRpc3BsYXk6YmxvY2s7XG4gIHdpZHRoOjEwMCU7XG4gIGJvcmRlcjoycHggc29saWQgcmdiKDIzMywgMjMzLCAyMzMpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGhlaWdodDo0MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBjb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICB0cmFuc2l0aW9uOi41cztcbn1cblxuLmxvZ2luX2lucHV0OmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjEpO1xuICBjb2xvcjogcmdiKDI5LCAyOSwgMjkpICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjoycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYxKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4ubG9naW5faW5wdXQ6aG92ZXI6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUvT3BlcmEvU2FmYXJpICovXG4gIGNvbG9yOiByZ2IoNjUsIDY1LCA2NSkgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIENocm9tZS9PcGVyYS9TYWZhcmkgKi9cbiAgY29sb3I6IHJnYigyMzMsIDIzMywgMjMzKSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOi41cztcbn1cbjo6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTkrICovXG4gIGNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMykgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjouNXM7XG59XG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSUUgMTArICovXG4gIGNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMykgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjouNXM7XG59XG46LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXG4gIGNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMykgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjouNXM7XG59XG5cbi5sb2dpbl9pbnB1dDpmb2N1c3tcbiAgb3V0bGluZTpub25lO1xuICBib3JkZXI6MnB4IHNvbGlkICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjEpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc3VibWl0IHtcbiAgZGlzcGxheTpibG9jaztcbiAgd2lkdGg6MTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOm5vbmU7XG4gIGhlaWdodDo0MHB4O1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBjb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYxLCAzNywgNzEsIDAuODIyKTtcbiAgdHJhbnNpdGlvbjouNXM7XG59XG5cbi5zdWJtaXQ6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgNTYsIDEwOSk7XG59XG5cbi5lcnJvciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!---------------Navigation Bar-------------->\n<img src=\"../../assets/img/login1.jpg\" alt=\"\">\n<div class=\"nav_bar\">\n  <!-- search -->\n  <div class=\"search\">\n    <i class=\"fas fa-search\"></i>\n    <input type=\"text\" placeholder=\"Search Scroll\">\n\n  </div>\n\n  <!-- login/registration -->\n  <div class=\"login_register\">\n    <ul>\n      <li><a routerLink=\"/\" routerLinkActive=\"active\">Home</a></li>\n      <li><a routerLink=\"/signup\" routerLinkActive=\"active\">Sign Up</a></li>\n      <li class=\"about\"><a href=\"\">About</a></li>\n    </ul>\n  </div>\n\n</div>\n\n\n\n<div class=\"page_head\">\n  <h1><i class=\"fas fa-scroll scroll_main\"></i>{{title}}</h1>\n  <div class=\"head_text\">\n    <form (submit)=\"login()\">\n      <input class=\"login_input\" type=\"text\" name=\"user.email\" [(ngModel)]=\"user.email\" placeholder=\"email\">\n      <input class=\"login_input\" type=\"text\" name=\"user.password\" [(ngModel)]=\"user.password\" placeholder=\"password\">\n      <div class=\"error\">\n        <p *ngIf=\"errors.username\">{{errors.username.message}}</p>\n        <p *ngIf=\"errors.email\">{{errors.email.message}}</p>\n        <p *ngIf=\"errors.password\">{{errors.password.message}}</p>\n        <p *ngIf=\"errors.repeat\">{{errors.repeat.message}}</p>\n      </div>\n      <input class=\"submit\" type=\"submit\" value=\"Start Scrolling\">\n    </form>\n  </div>\n\n\n</div>\n\n\n\n<!------------- End of Opening Page ------------->\n\n"

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

module.exports = "input{\n    color: black;\n}\n\n#post_form{\n  display:block;\n  margin:20px auto;\n  width:460px;\n  height:80px;\n  border-radius: 6px;\n  background-color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix3QkFBd0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9wb3N0L3Bvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0e1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuI3Bvc3RfZm9ybXtcbiAgZGlzcGxheTpibG9jaztcbiAgbWFyZ2luOjIwcHggYXV0bztcbiAgd2lkdGg6NDYwcHg7XG4gIGhlaWdodDo4MHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"AddPost\">\n  <form (submit)=\"create()\">\n    <div class=\"form-group\">\n      <label for=\"Title\">Title: </label>\n      <input type=\"text\" name=\"post.title\" [(ngModel)]=\"post.title\" class=\"form-control\" placeholder=\"Post Name\">\n      <small *ngIf=\"errors.title\" class=\"form-text text-muted\">{{errors.title.message}}</small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"Content\">Contents: </label>\n      <textarea name=\"post.contents\" [(ngModel)]=\"post.contents\" placeholder=\"Style\" rows=\"8\" cols=\"80\"></textarea>\n      <small *ngIf=\"errors.contents\" class=\"form-text text-muted\">{{errors.content.message}}</small>\n    </div>\n    <input type=\"submit\" value=\"Add a Post\" />\n    <a [routerLink]=\"['/dashboard']\"><input type=\"submit\" value=\"Cancel\" /></a> \n  </form>\n</div>\n\n"

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

module.exports = "\n/* <------- Navigation Bar Styling ------->*/\n\n.scroll_main{\n  position: relative;\n  font-size: 30px;\n  padding-right: 10px;\n  top:15px;\n  color:white !important;\n  transition:.5s;\n}\n\n.head_text{\n  width:400px;\n  height: 60px;\n  margin:0 80px;\n  transition:.5s;\n  border-radius: 8px;\n}\n\n.head_text h1 {\n  font-size: 40px;\n  font-family: 'Nunito', sans-serif;\n  text-align: center;\n  border:2px solid white;\n  border-radius: 8px;\n  transition:.5s;\n}\n\n.head_text:hover h1{\n  color: rgb(107, 87, 124);\n  border:2px solid rgb(107, 87, 124);;\n}\n\n.head_text:hover i{\n  color: rgb(107, 87, 124) !important;\n}\n\n.nav_bar{\n  width:100%;\n  display: flex;\n  position: fixed;\n  top:0;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  z-index: 1;\n  background-color: hsl(184, 18%, 30%);\n}\n\n.nav_bar ul {\n  position: fixed;\n  margin:10px 200px;\n}\n\n/*------->> Search */\n\n.fa-search{\n  color:white;\n  font-size: 18px;\n  padding-top: 12px;\n  padding-left: 20px;\n}\n\n.search{\n  position: fixed;\n  margin-top: 10px;\n  right:80px;\n  background-color: rgba(0, 0, 0, 0.171);\n  border-radius: 10px;\n}\n\n.search input{\n  width:400px;\n  border:none;\n  height:40px;\n  font-size: 16px;\n  color:white;\n  font-weight: 100;\n  padding-left: 15px;\n  background-color: rgba(255, 255, 255, 0);\n}\n\n.search input:focus{\n  border:none;\n  outline: none;\n}\n\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color:rgba(255, 255, 255, 0.884);\n}\n\n::-moz-placeholder { /* Firefox 19+ */\n  color:rgba(255, 255, 255, 0.884);\n}\n\n:-ms-input-placeholder { /* IE 10+ */\n  color:rgba(255, 255, 255, 0.884);\n}\n\n:-moz-placeholder { /* Firefox 18- */\n  color:rgba(255, 255, 255, 0.884);\n}\n\n/*------->> Login/Register */\n\n.nav_bar ul li{\n  width:40px;\n  height:40px;\n  text-align: center;\n  display: inline-block;\n  padding-top: 6px;\n  border-radius: 10px;\n  margin:0 20px 0 20px;\n  cursor: pointer;\n  transition: .5s;\n}\n\n.nav_bar ul li i{\n  text-decoration: none;\n  font-size: 30px;\n  text-align: center;\n  transition: .5s;\n}\n\n.about{\n  background-color: white !important;\n  border:none !important;\n  padding-top: 8px !important;\n  transition: .5s;\n}\n\n.about a {\n  color:hsl(184, 24%, 55%) !important;\n}\n\n.nav_bar ul li:hover i {\n  color:rgb(92, 56, 109);\n}\n\n/* <------- Add_post ------->*/\n\n.add_post{\n  display: inline-block;\n  width: 52px;\n  margin:auto 20px;\n  height:60px;\n  transition: .5s;\n}\n\n.add_post i{\n  font-size: 50px;\n  color: rgba(255, 255, 255, 0.322);\n  transition: .5s;\n}\n\n.add_post i:hover{\n  color:rgb(219, 219, 219);\n}\n\n.add_post_text {\n  margin:auto;\n  padding:15px 0 0 24px;\n  display: inline-block;\n  position:relative;\n  color:white;\n  font-size: 20px;\n  visibility: hidden;\n}\n\n#post_form{\n  display:block;\n  margin:20px auto;\n  width:460px;\n  min-height:100px;\n  border-radius: 6px;\n  background-color: white;\n}\n\n#post_form i{\n  font-size: 50px;\n  width:80px;\n  margin-top: 10px;\n  margin:10px 6px;\n  height:80px;\n  padding:16px 14px;\n  transition: .5s;\n}\n\n#post_form i:hover{\n  color: hsl(130, 36%, 50%);\n}\n\n.fa-link{\n  color:rgb(57, 76, 116);\n}\n\n.fa-images{\n  color:rgb(50, 100, 50);\n}\n\n.fa-font{\n  color:rgb(34, 34, 34);\n}\n\n.fa-youtube{\n  color:rgb(185, 42, 42);\n}\n\n.fa-headphones{\n  color:rgb(79, 49, 99);\n}\n\n/* <------- Blog Styling ------->*/\n\n.main_dash{\n  position: relative;\n  display: block;\n  width:36%;\n  margin:100px auto;\n  min-height: 760px;\n  border-radius: 6px;\n  padding:20px 0 60px 0;\n  background-color: rgba(0, 0, 0, 0.171);\n}\n\n.blog_contain{\n  width:100%;\n  margin:auto;\n}\n\n.blog_card{\n  display:block;\n  margin:20px auto;\n  width:460px;\n  min-height:350px;\n  border-radius: 6px;\n  background-color: white;\n}\n\n.blog_card h3{\n  font-size: 16px;\n  text-align: left;\n  margin-top: 30px;\n  padding-left: 0px;\n  color:black;\n  font-weight: bold;\n  display: inline-block;\n}\n\n.blog_card span{\n  margin:0;\n  padding:0;\n  top:0;\n  color:grey;\n}\n\n.card_img{\n  background-color: rgb(17, 17, 17);\n}\n\n.img{\n  width:100%;\n  margin:auto;\n}\n\n.gif{\n  width:100%!important;\n}\n\n.post_profile_photo{\n  width:50px!important;\n  border-radius: 50%;\n  display: inline-block;\n  margin:15px;\n}\n\n.card_contents{\n  width:80%;\n  margin:auto;\n}\n\n.card_contents h2, p{\n  color:rgb(24, 24, 24);\n}\n\n.card_contents h2{\n  padding: 10px 0;\n  text-align: center;\n  font-weight: bold;\n}\n\n.card_contents p{\n  padding-bottom: 5px;\n}\n\n.card_footer{\n  width:100%;\n  position: relative;\n  bottom: -5px;\n  background-color: rgb(255, 255, 255);\n  height:50px;\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n  text-align: right;\n}\n\n.card_footer .fa-scroll{\n  color:rgb(109, 109, 109) !important;\n  display: inline-block !important;\n\n}\n\n.card_footer p{\n  display: inline-block;\n  color:grey;\n  padding-right: 220px;\n  padding-top: 10px;\n}\n\n.card_footer i{\n  color:rgb(109, 109, 109);\n  position: relative;\n  padding-top: 15px;\n  display: inline-block;\n  font-size: 24px;\n  margin: 0 10px;\n  transition: .5s;\n}\n\n.card_footer i:hover{\n  color:rgb(97, 158, 95)!important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmFuZG9tL3JhbmRvbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw2Q0FBNkM7O0FBRTdDO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsU0FBUztFQUNULHVCQUF1QjtFQUN2QixlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLHlCQUF5QjtFQUN6QixtQ0FBbUM7Q0FDcEM7O0FBRUQ7RUFDRSxvQ0FBb0M7Q0FDckM7O0FBRUQ7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gscUNBQXFDO0NBQ3RDOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQjs7QUFDRCxxQkFBcUI7O0FBRXJCO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsdUNBQXVDO0VBQ3ZDLG9CQUFvQjtDQUNyQjs7QUFDRDtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix5Q0FBeUM7Q0FDMUM7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osY0FBYztDQUNmOztBQUVELDhCQUE4Qix5QkFBeUI7RUFDckQsaUNBQWlDO0NBQ2xDOztBQUNELHFCQUFxQixpQkFBaUI7RUFDcEMsaUNBQWlDO0NBQ2xDOztBQUNE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Q3JCLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGlDQUFpQztDQUNsQyIsImZpbGUiOiJzcmMvYXBwL3JhbmRvbS9yYW5kb20uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogPC0tLS0tLS0gTmF2aWdhdGlvbiBCYXIgU3R5bGluZyAtLS0tLS0tPiovXG5cbi5zY3JvbGxfbWFpbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHRvcDoxNXB4O1xuICBjb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOi41cztcbn1cblxuLmhlYWRfdGV4dHtcbiAgd2lkdGg6NDAwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luOjAgODBweDtcbiAgdHJhbnNpdGlvbjouNXM7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmhlYWRfdGV4dCBoMSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjoycHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgdHJhbnNpdGlvbjouNXM7XG59XG5cbi5oZWFkX3RleHQ6aG92ZXIgaDF7XG4gIGNvbG9yOiByZ2IoMTA3LCA4NywgMTI0KTtcbiAgYm9yZGVyOjJweCBzb2xpZCByZ2IoMTA3LCA4NywgMTI0KTs7XG59XG5cbi5oZWFkX3RleHQ6aG92ZXIgaXtcbiAgY29sb3I6IHJnYigxMDcsIDg3LCAxMjQpICFpbXBvcnRhbnQ7XG59XG5cbi5uYXZfYmFye1xuICB3aWR0aDoxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDowO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxODQsIDE4JSwgMzAlKTtcbn1cblxuLm5hdl9iYXIgdWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1hcmdpbjoxMHB4IDIwMHB4O1xufVxuLyotLS0tLS0tPj4gU2VhcmNoICovXG5cbi5mYS1zZWFyY2h7XG4gIGNvbG9yOndoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5zZWFyY2h7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcmlnaHQ6ODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE3MSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc2VhcmNoIGlucHV0e1xuICB3aWR0aDo0MDBweDtcbiAgYm9yZGVyOm5vbmU7XG4gIGhlaWdodDo0MHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOndoaXRlO1xuICBmb250LXdlaWdodDogMTAwO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG59XG5cbi5zZWFyY2ggaW5wdXQ6Zm9jdXN7XG4gIGJvcmRlcjpub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUvT3BlcmEvU2FmYXJpICovXG4gIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC44ODQpO1xufVxuOjotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOSsgKi9cbiAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg4NCk7XG59XG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSUUgMTArICovXG4gIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC44ODQpO1xufVxuOi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE4LSAqL1xuICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODg0KTtcbn1cblxuLyotLS0tLS0tPj4gTG9naW4vUmVnaXN0ZXIgKi9cbi5uYXZfYmFyIHVsIGxpe1xuICB3aWR0aDo0MHB4O1xuICBoZWlnaHQ6NDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjowIDIwcHggMCAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IC41cztcbn1cbi5uYXZfYmFyIHVsIGxpIGl7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IC41cztcbn1cblxuLmFib3V0e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IC41cztcbn1cblxuLmFib3V0IGEge1xuICBjb2xvcjpoc2woMTg0LCAyNCUsIDU1JSkgIWltcG9ydGFudDtcbn1cblxuLm5hdl9iYXIgdWwgbGk6aG92ZXIgaSB7XG4gIGNvbG9yOnJnYig5MiwgNTYsIDEwOSk7XG59XG5cblxuLyogPC0tLS0tLS0gQWRkX3Bvc3QgLS0tLS0tLT4qL1xuLmFkZF9wb3N0e1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MnB4O1xuICBtYXJnaW46YXV0byAyMHB4O1xuICBoZWlnaHQ6NjBweDtcbiAgdHJhbnNpdGlvbjogLjVzO1xufVxuXG4uYWRkX3Bvc3QgaXtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMyMik7XG4gIHRyYW5zaXRpb246IC41cztcbn1cblxuLmFkZF9wb3N0IGk6aG92ZXJ7XG4gIGNvbG9yOnJnYigyMTksIDIxOSwgMjE5KTtcbn1cblxuLmFkZF9wb3N0X3RleHQge1xuICBtYXJnaW46YXV0bztcbiAgcGFkZGluZzoxNXB4IDAgMCAyNHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBjb2xvcjp3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbiNwb3N0X2Zvcm17XG4gIGRpc3BsYXk6YmxvY2s7XG4gIG1hcmdpbjoyMHB4IGF1dG87XG4gIHdpZHRoOjQ2MHB4O1xuICBtaW4taGVpZ2h0OjEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4jcG9zdF9mb3JtIGl7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgd2lkdGg6ODBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luOjEwcHggNnB4O1xuICBoZWlnaHQ6ODBweDtcbiAgcGFkZGluZzoxNnB4IDE0cHg7XG4gIHRyYW5zaXRpb246IC41cztcbn1cblxuI3Bvc3RfZm9ybSBpOmhvdmVye1xuICBjb2xvcjogaHNsKDEzMCwgMzYlLCA1MCUpO1xufVxuXG4uZmEtbGlua3tcbiAgY29sb3I6cmdiKDU3LCA3NiwgMTE2KTtcbn1cblxuLmZhLWltYWdlc3tcbiAgY29sb3I6cmdiKDUwLCAxMDAsIDUwKTtcbn1cblxuLmZhLWZvbnR7XG4gIGNvbG9yOnJnYigzNCwgMzQsIDM0KTtcbn1cblxuLmZhLXlvdXR1YmV7XG4gIGNvbG9yOnJnYigxODUsIDQyLCA0Mik7XG59XG5cbi5mYS1oZWFkcGhvbmVze1xuICBjb2xvcjpyZ2IoNzksIDQ5LCA5OSk7XG59XG5cbi8qIDwtLS0tLS0tIEJsb2cgU3R5bGluZyAtLS0tLS0tPiovXG5cbi5tYWluX2Rhc2h7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOjM2JTtcbiAgbWFyZ2luOjEwMHB4IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDc2MHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6MjBweCAwIDYwcHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE3MSk7XG59XG5cbi5ibG9nX2NvbnRhaW57XG4gIHdpZHRoOjEwMCU7XG4gIG1hcmdpbjphdXRvO1xufVxuXG4uYmxvZ19jYXJke1xuICBkaXNwbGF5OmJsb2NrO1xuICBtYXJnaW46MjBweCBhdXRvO1xuICB3aWR0aDo0NjBweDtcbiAgbWluLWhlaWdodDozNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmJsb2dfY2FyZCBoM3tcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgY29sb3I6YmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5ibG9nX2NhcmQgc3BhbntcbiAgbWFyZ2luOjA7XG4gIHBhZGRpbmc6MDtcbiAgdG9wOjA7XG4gIGNvbG9yOmdyZXk7XG59XG5cbi5jYXJkX2ltZ3tcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3LCAxNywgMTcpO1xufVxuXG4uaW1ne1xuICB3aWR0aDoxMDAlO1xuICBtYXJnaW46YXV0bztcbn1cblxuLmdpZntcbiAgd2lkdGg6MTAwJSFpbXBvcnRhbnQ7XG59XG5cbi5wb3N0X3Byb2ZpbGVfcGhvdG97XG4gIHdpZHRoOjUwcHghaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOjE1cHg7XG59XG5cbi5jYXJkX2NvbnRlbnRze1xuICB3aWR0aDo4MCU7XG4gIG1hcmdpbjphdXRvO1xufVxuXG4uY2FyZF9jb250ZW50cyBoMiwgcHtcbiAgY29sb3I6cmdiKDI0LCAyNCwgMjQpO1xufVxuXG4uY2FyZF9jb250ZW50cyBoMntcbiAgcGFkZGluZzogMTBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2FyZF9jb250ZW50cyBwe1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uY2FyZF9mb290ZXJ7XG4gIHdpZHRoOjEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAtNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGhlaWdodDo1MHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2FyZF9mb290ZXIgLmZhLXNjcm9sbHtcbiAgY29sb3I6cmdiKDEwOSwgMTA5LCAxMDkpICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuXG59XG5cbi5jYXJkX2Zvb3RlciBwe1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOmdyZXk7XG4gIHBhZGRpbmctcmlnaHQ6IDIyMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmNhcmRfZm9vdGVyIGl7XG4gIGNvbG9yOnJnYigxMDksIDEwOSwgMTA5KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbjogMCAxMHB4O1xuICB0cmFuc2l0aW9uOiAuNXM7XG59XG5cbi5jYXJkX2Zvb3RlciBpOmhvdmVye1xuICBjb2xvcjpyZ2IoOTcsIDE1OCwgOTUpIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/random/random.component.html":
/*!**********************************************!*\
  !*** ./src/app/random/random.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!---------------Navigation Bar-------------->\n<div class=\"nav_bar\">\n    <div class=\"head_text\">\n      <h1><i class=\"fas fa-scroll scroll_main\"></i>{{title}}</h1>\n    </div>\n\n    <!-- login/registration -->\n    <div class=\"login_register\">\n      <ul>\n        <li><a routerLink=\"/dashboard\" routerLinkActive=\"active\"><i class=\"fas fa-home\"></i></a></li>\n\n        <li><a routerLink=\"/random\" routerLinkActive=\"active\"><i class=\"far fa-compass\"></i></a></li>\n        <li><a routerLink=\"/signup\" routerLinkActive=\"active\"><i class=\"fas fa-comments\"></i></a></li>\n        <li><a routerLink=\"/signup\" routerLinkActive=\"active\"><i class=\"fas fa-cog\"></i></a></li>\n        <li><i class=\"fas fa-power-off\" (click)=\"logout()\"></i></li>\n      </ul>\n    </div>\n\n    <!-- search -->\n    <div class=\"search\">\n      <i class=\"fas fa-search\"></i>\n      <input type=\"text\" placeholder=\"Search Scroll\">\n\n    </div>\n</div>\n\n\n  <!---------------Post Dash -------------->\n\n  <div class=\"main_dash\">\n\n    <div class=\"blog_contain\">\n\n      <!-- card one -->\n      <div class=\"blog_card\" *ngFor=\"let card of cards\">\n\n        <div class=\"card_head\">\n          <img class=\"post_profile_photo\" src=\"{{ card.creator_icon }}\" alt=\"\">\n          <h3>{{card.creator_name}} <span>(22min ago)</span></h3>\n          <img class=\"img\" src=\"../assets/img/travel.jpg\" alt=\"\">\n        </div>\n\n        <div class=\"card_contents\">\n          <h2>{{card.title}}</h2>\n          <p>{{card.contents}}</p>\n        </div>\n\n        <div class=\"card_footer\">\n\n            <i class=\"fas fa-scroll\"></i>\n            <p>915</p>\n\n            <i class=\"far fa-comment-dots\"></i>\n\n            <i class=\"fa fa-retweet\" aria-hidden=\"true\"></i>\n\n            <i class=\"fa fa-heart\" aria-hidden=\"true\"></i>\n        </div>\n    </div>\n\n  </div>\n"

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

module.exports = "\n/* <------- Navigation Bar Styling ------->*/\n.imgb {\n  position: fixed;\n  top:-200px;\n  filter: blur(8px);\n  -webkit-filter: blur(4px);\n  filter: brightness(75%);\n}\n.nav_bar{\n  width:100%;\n  display: flex;\n  position: fixed;\n  margin-top: 20px;\n  z-index: 1;\n}\n.nav_bar ul {\n  position: fixed;\n  right:100px;\n}\n/*------->> Search */\n.fa-search{\n  color:white;\n  font-size: 18px;\n  padding-top: 12px;\n  padding-left: 20px;\n}\n.search{\n  position: relative;\n  left:100px;\n  background-color: rgba(0, 0, 0, 0.171);\n  border-radius: 10px;\n}\n.search input{\n  width:400px;\n  border:none;\n  height:40px;\n  font-size: 16px;\n  color:white;\n  font-weight: 100;\n  padding-left: 15px;\n  background-color: rgba(255, 255, 255, 0);\n}\n.search input:focus{\n  border:none;\n  outline: none;\n}\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color:rgba(255, 255, 255, 0.884);\n}\n::-moz-placeholder { /* Firefox 19+ */\n  color:rgba(255, 255, 255, 0.884);\n}\n:-ms-input-placeholder { /* IE 10+ */\n  color:rgba(255, 255, 255, 0.884);\n}\n:-moz-placeholder { /* Firefox 18- */\n  color:rgba(255, 255, 255, 0.884);\n}\n/*------->> Login/Register */\n.nav_bar ul li{\n  width:150px;\n  height:40px;\n  border:1px solid rgb(255, 255, 255);\n  text-align: center;\n  display: inline-block;\n  padding-top: 6px;\n  border-radius: 4px;\n  margin:0 10px;\n  cursor: pointer;\n  transition: .5s;\n}\n.nav_bar ul li a{\n  text-decoration: none;\n  font-size: 18px;\n  text-align: center;\n  transition: .5s;\n}\n.about{\n  background-color: white !important;\n  border:none !important;\n  padding-top: 8px !important;\n  transition: .5s;\n}\n.about a {\n  color:hsl(184, 24%, 55%) !important;\n}\n.nav_bar ul li:hover{\n  background-color: white;\n}\n.nav_bar ul li:hover a {\n  color:hsl(184, 24%, 55%);\n}\n.about:hover {\n  background-color: rgb(92, 56, 109) !important;\n}\n/* <------- Header Styling ------->*/\n.page_head{\n  position: relative;\n  top:220px;\n  width:400px;\n  margin:auto;\n}\n.head_text{\n  height:400px;\n  margin:auto;\n  transition:.5s;\n}\n.page_head h1 {\n  font-size: 80px;\n  font-family: 'Nunito', sans-serif;\n  text-align: center;\n}\n.head_text{\n  width:90%;\n  margin:auto;\n}\n.page_head h4 {\n  margin-top:150px;\n  font-size: 40px;\n  font-family: 'Nunito', sans-serif;\n  text-align: center;\n}\n.scroll_main{\n  position: relative;\n  font-size: 60px;\n  padding-right: 20px;\n  top:30px;\n  color:white !important;\n}\n.login_input{\n  display:block;\n  width:100%;\n  border:2px solid rgb(233, 233, 233);\n  border-radius: 3px;\n  height:40px;\n  margin-top: 20px;\n  margin-bottom: 15px;\n  color: rgb(233, 233, 233) !important;\n  text-align: center;\n  font-size: 18px;\n  background-color: rgba(255, 255, 255, 0);\n  transition:.5s;\n}\n.login_input:hover{\n  background-color: rgba(255, 255, 255, 0.61);\n  color: rgb(29, 29, 29) !important;\n  border:2px solid rgba(255, 255, 255, 0.61);\n  border-radius: 3px;\n}\n.login_input:hover::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color: rgb(65, 65, 65) !important;\n  font-weight: bold;\n}\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color: rgb(233, 233, 233) !important;\n  transition:.5s;\n}\n::-moz-placeholder { /* Firefox 19+ */\n  color: rgb(233, 233, 233) !important;\n  transition:.5s;\n}\n:-ms-input-placeholder { /* IE 10+ */\n  color: rgb(233, 233, 233) !important;\n  transition:.5s;\n}\n:-moz-placeholder { /* Firefox 18- */\n  color: rgb(233, 233, 233) !important;\n  transition:.5s;\n}\n.login_input:focus{\n  outline:none;\n  border:2px solid  rgba(255, 255, 255, 0.61);\n  border-radius: 3px;\n  font-weight: bold;\n}\n.submit {\n  display:block;\n  width:100%;\n  border-radius: 20px;\n  border:none;\n  height:40px;\n  margin-top: 30px;\n  margin-bottom: 15px;\n  color: rgb(233, 233, 233) !important;\n  text-align: center;\n  font-size: 18px;\n  background-color: rgba(61, 37, 71, 0.822);\n  transition:.5s;\n}\n.submit:hover{\n  background-color: rgb(92, 56, 109);\n}\n.error {\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n}\n/* HIDE RADIO */\n[type=radio] {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n/* IMAGE STYLES */\n[type=radio] + .post_profile_photo {\n  cursor: pointer;\n}\n/* CHECKED STYLES */\n[type=radio]:checked + .post_profile_photo {\n  opacity: 1;\n}\n.post_profile_photo{\n  width:50px!important;\n  border-radius: 50%;\n  display: inline-block;\n  margin:15px;\n  opacity: 0.5;\n}\n.img{\n  width:100%;\n  margin:auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNkNBQTZDO0FBQzdDO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLHdCQUF3QjtDQUN6QjtBQUVEO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7Q0FDWjtBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7Q0FDYjtBQUNELHFCQUFxQjtBQUVyQjtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtDQUNwQjtBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx1Q0FBdUM7RUFDdkMsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIseUNBQXlDO0NBQzFDO0FBRUQ7RUFDRSxZQUFZO0VBQ1osY0FBYztDQUNmO0FBRUQsOEJBQThCLHlCQUF5QjtFQUNyRCxpQ0FBaUM7Q0FDbEM7QUFDRCxxQkFBcUIsaUJBQWlCO0VBQ3BDLGlDQUFpQztDQUNsQztBQUNELHlCQUF5QixZQUFZO0VBQ25DLGlDQUFpQztDQUNsQztBQUNELG9CQUFvQixpQkFBaUI7RUFDbkMsaUNBQWlDO0NBQ2xDO0FBRUQsNkJBQTZCO0FBQzdCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7Q0FDakI7QUFFRDtFQUNFLG1DQUFtQztFQUNuQyx1QkFBdUI7RUFDdkIsNEJBQTRCO0VBQzVCLGdCQUFnQjtDQUNqQjtBQUVEO0VBQ0Usb0NBQW9DO0NBQ3JDO0FBR0Q7RUFDRSx3QkFBd0I7Q0FDekI7QUFFRDtFQUNFLHlCQUF5QjtDQUMxQjtBQUVEO0VBQ0UsOENBQThDO0NBQy9DO0FBRUQscUNBQXFDO0FBRXJDO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtDQUNiO0FBRUQ7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7Q0FDaEI7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSxVQUFVO0VBQ1YsWUFBWTtDQUNiO0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtDQUFrQztFQUNsQyxtQkFBbUI7Q0FDcEI7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLFNBQVM7RUFDVCx1QkFBdUI7Q0FDeEI7QUFFRDtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix5Q0FBeUM7RUFDekMsZUFBZTtDQUNoQjtBQUVEO0VBQ0UsNENBQTRDO0VBQzVDLGtDQUFrQztFQUNsQywyQ0FBMkM7RUFDM0MsbUJBQW1CO0NBQ3BCO0FBRUQsZ0RBQWdELHlCQUF5QjtFQUN2RSxrQ0FBa0M7RUFDbEMsa0JBQWtCO0NBQ25CO0FBRUQsOEJBQThCLHlCQUF5QjtFQUNyRCxxQ0FBcUM7RUFDckMsZUFBZTtDQUNoQjtBQUNELHFCQUFxQixpQkFBaUI7RUFDcEMscUNBQXFDO0VBQ3JDLGVBQWU7Q0FDaEI7QUFDRCx5QkFBeUIsWUFBWTtFQUNuQyxxQ0FBcUM7RUFDckMsZUFBZTtDQUNoQjtBQUNELG9CQUFvQixpQkFBaUI7RUFDbkMscUNBQXFDO0VBQ3JDLGVBQWU7Q0FDaEI7QUFFRDtFQUNFLGFBQWE7RUFDYiw0Q0FBNEM7RUFDNUMsbUJBQW1CO0VBQ25CLGtCQUFrQjtDQUNuQjtBQUVEO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDBDQUEwQztFQUMxQyxlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxtQ0FBbUM7Q0FDcEM7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsbUJBQW1CO0NBQ3BCO0FBRUQsZ0JBQWdCO0FBQ2hCO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxTQUFTO0VBQ1QsVUFBVTtDQUNYO0FBRUQsa0JBQWtCO0FBQ2xCO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBRUQsb0JBQW9CO0FBQ3BCO0VBQ0UsV0FBVztDQUNaO0FBRUQ7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtDQUNkO0FBRUQ7RUFDRSxXQUFXO0VBQ1gsWUFBWTtDQUNiIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogPC0tLS0tLS0gTmF2aWdhdGlvbiBCYXIgU3R5bGluZyAtLS0tLS0tPiovXG4uaW1nYiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOi0yMDBweDtcbiAgZmlsdGVyOiBibHVyKDhweCk7XG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDRweCk7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg3NSUpO1xufVxuXG4ubmF2X2JhcntcbiAgd2lkdGg6MTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB6LWluZGV4OiAxO1xufVxuXG4ubmF2X2JhciB1bCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6MTAwcHg7XG59XG4vKi0tLS0tLS0+PiBTZWFyY2ggKi9cblxuLmZhLXNlYXJjaHtcbiAgY29sb3I6d2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLnNlYXJjaHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OjEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTcxKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5zZWFyY2ggaW5wdXR7XG4gIHdpZHRoOjQwMHB4O1xuICBib3JkZXI6bm9uZTtcbiAgaGVpZ2h0OjQwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6d2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbn1cblxuLnNlYXJjaCBpbnB1dDpmb2N1c3tcbiAgYm9yZGVyOm5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIENocm9tZS9PcGVyYS9TYWZhcmkgKi9cbiAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg4NCk7XG59XG46Oi1tb3otcGxhY2Vob2xkZXIgeyAvKiBGaXJlZm94IDE5KyAqL1xuICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODg0KTtcbn1cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJRSAxMCsgKi9cbiAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg4NCk7XG59XG46LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXG4gIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC44ODQpO1xufVxuXG4vKi0tLS0tLS0+PiBMb2dpbi9SZWdpc3RlciAqL1xuLm5hdl9iYXIgdWwgbGl7XG4gIHdpZHRoOjE1MHB4O1xuICBoZWlnaHQ6NDBweDtcbiAgYm9yZGVyOjFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjowIDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogLjVzO1xufVxuLm5hdl9iYXIgdWwgbGkgYXtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogLjVzO1xufVxuXG4uYWJvdXR7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiA4cHggIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogLjVzO1xufVxuXG4uYWJvdXQgYSB7XG4gIGNvbG9yOmhzbCgxODQsIDI0JSwgNTUlKSAhaW1wb3J0YW50O1xufVxuXG5cbi5uYXZfYmFyIHVsIGxpOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLm5hdl9iYXIgdWwgbGk6aG92ZXIgYSB7XG4gIGNvbG9yOmhzbCgxODQsIDI0JSwgNTUlKTtcbn1cblxuLmFib3V0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCA1NiwgMTA5KSAhaW1wb3J0YW50O1xufVxuXG4vKiA8LS0tLS0tLSBIZWFkZXIgU3R5bGluZyAtLS0tLS0tPiovXG5cbi5wYWdlX2hlYWR7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOjIyMHB4O1xuICB3aWR0aDo0MDBweDtcbiAgbWFyZ2luOmF1dG87XG59XG5cbi5oZWFkX3RleHR7XG4gIGhlaWdodDo0MDBweDtcbiAgbWFyZ2luOmF1dG87XG4gIHRyYW5zaXRpb246LjVzO1xufVxuXG4ucGFnZV9oZWFkIGgxIHtcbiAgZm9udC1zaXplOiA4MHB4O1xuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRfdGV4dHtcbiAgd2lkdGg6OTAlO1xuICBtYXJnaW46YXV0bztcbn1cblxuLnBhZ2VfaGVhZCBoNCB7XG4gIG1hcmdpbi10b3A6MTUwcHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zY3JvbGxfbWFpbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDYwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHRvcDozMHB4O1xuICBjb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ubG9naW5faW5wdXR7XG4gIGRpc3BsYXk6YmxvY2s7XG4gIHdpZHRoOjEwMCU7XG4gIGJvcmRlcjoycHggc29saWQgcmdiKDIzMywgMjMzLCAyMzMpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGhlaWdodDo0MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBjb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICB0cmFuc2l0aW9uOi41cztcbn1cblxuLmxvZ2luX2lucHV0OmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjEpO1xuICBjb2xvcjogcmdiKDI5LCAyOSwgMjkpICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjoycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYxKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4ubG9naW5faW5wdXQ6aG92ZXI6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUvT3BlcmEvU2FmYXJpICovXG4gIGNvbG9yOiByZ2IoNjUsIDY1LCA2NSkgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIENocm9tZS9PcGVyYS9TYWZhcmkgKi9cbiAgY29sb3I6IHJnYigyMzMsIDIzMywgMjMzKSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOi41cztcbn1cbjo6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTkrICovXG4gIGNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMykgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjouNXM7XG59XG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSUUgMTArICovXG4gIGNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMykgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjouNXM7XG59XG46LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXG4gIGNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMykgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjouNXM7XG59XG5cbi5sb2dpbl9pbnB1dDpmb2N1c3tcbiAgb3V0bGluZTpub25lO1xuICBib3JkZXI6MnB4IHNvbGlkICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjEpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc3VibWl0IHtcbiAgZGlzcGxheTpibG9jaztcbiAgd2lkdGg6MTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOm5vbmU7XG4gIGhlaWdodDo0MHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBjb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYxLCAzNywgNzEsIDAuODIyKTtcbiAgdHJhbnNpdGlvbjouNXM7XG59XG5cbi5zdWJtaXQ6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgNTYsIDEwOSk7XG59XG5cbi5lcnJvciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi8qIEhJREUgUkFESU8gKi9cblt0eXBlPXJhZGlvXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLyogSU1BR0UgU1RZTEVTICovXG5bdHlwZT1yYWRpb10gKyAucG9zdF9wcm9maWxlX3Bob3RvIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBDSEVDS0VEIFNUWUxFUyAqL1xuW3R5cGU9cmFkaW9dOmNoZWNrZWQgKyAucG9zdF9wcm9maWxlX3Bob3RvIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnBvc3RfcHJvZmlsZV9waG90b3tcbiAgd2lkdGg6NTBweCFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46MTVweDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uaW1ne1xuICB3aWR0aDoxMDAlO1xuICBtYXJnaW46YXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!---------------Navigation Bar-------------->\n<img class=\"imgb\" src=\"../../assets/img/park.jpg\" alt=\"\">\n<div class=\"nav_bar\">\n  <!-- search -->\n  <div class=\"search\">\n    <i class=\"fas fa-search\"></i>\n    <input type=\"text\" placeholder=\"Search Scroll\">\n\n  </div>\n\n  <!-- login/registration -->\n  <div class=\"login_register\">\n    <ul>\n      <li><a routerLink=\"/\" routerLinkActive=\"active\">Home</a></li>\n      <li><a routerLink=\"/login\" routerLinkActive=\"active\">Login</a></li>\n      <li class=\"about\"><a href=\"\">About</a></li>\n    </ul>\n  </div>\n\n</div>\n\n\n\n<div class=\"page_head\">\n\n  <h1><i class=\"fas fa-scroll scroll_main\"></i>{{title}}</h1>\n  <div class=\"head_text\">\n    <br>\n    <form (submit)=\"create()\">\n      <p>Select your icon...</p>\n      <label>\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/1.png\" checked>\n        <img class=\"post_profile_photo\" src=\"../assets/img/1.png\" alt=\"\">\n      </label>\n      <label>\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/2.png\">\n        <img class=\"post_profile_photo\" src=\"../assets/img/2.png\" alt=\"\">\n      </label>\n      <label>\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/3.png\">\n        <img class=\"post_profile_photo\" src=\"../assets/img/3.png\" alt=\"\">\n      </label>\n      <label>\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/4.png\">\n        <img class=\"post_profile_photo\" src=\"../assets/img/4.png\" alt=\"\">\n      </label>\n      <label>\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/5.png\">\n        <img class=\"post_profile_photo\" src=\"../assets/img/5.png\" alt=\"\">\n      </label>\n      <label>\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/6.png\">\n        <img class=\"post_profile_photo\" src=\"../assets/img/6.png\" alt=\"\">\n      </label>\n      <label>\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/7.png\">\n        <img class=\"post_profile_photo\" src=\"../assets/img/7.png\" alt=\"\">\n      </label>\n      <label>\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/8.png\">\n        <img class=\"post_profile_photo\" src=\"../assets/img/8.png\" alt=\"\">\n      </label>\n      <input class=\"login_input\" type=\"text\" name=\"user.username\" [(ngModel)]=\"user.username\" placeholder=\"username\">\n      <input class=\"login_input\" type=\"text\" name=\"user.email\" [(ngModel)]=\"user.email\" placeholder=\"email\">\n      <input class=\"login_input\" type=\"text\" name=\"user.password\" [(ngModel)]=\"user.password\" placeholder=\"password\">\n      <div class=\"error\">\n        <p *ngIf=\"errors.icon\">{{errors.icon.message}}</p>\n        <p *ngIf=\"errors.username\">{{errors.username.message}}</p>\n        <p *ngIf=\"errors.email\">{{errors.email.message}}</p>\n        <p *ngIf=\"errors.password\">{{errors.password.message}}</p>\n        <p *ngIf=\"errors.repeat\">{{errors.repeat.message}}</p>\n      </div>\n      <input class=\"submit\" type=\"submit\" value=\"Start Scrolling\">\n    </form>\n  </div>\n\n\n</div>\n\n\n\n<!------------- End of Opening Page ------------->\n"

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

module.exports = ".settingsBorder {\n  height: 500px;\n  width: 460px;\n  margin-top: 100px;\n}\n\n/* HIDE RADIO */\n\n[type=radio] {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* IMAGE STYLES */\n\n[type=radio] + .post_profile_photo {\n  cursor: pointer;\n}\n\n/* CHECKED STYLES */\n\n[type=radio]:checked + .post_profile_photo {\n  opacity: 1;\n}\n\n.post_profile_photo{\n  width:50px!important;\n  border-radius: 50%;\n  display: inline-block;\n  margin:15px;\n  opacity: 0.5;\n}\n\n.img{\n  width:100%;\n  margin:auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2Isa0JBQWtCO0NBQ25COztBQUVELGdCQUFnQjs7QUFDaEI7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0NBQ1g7O0FBRUQsa0JBQWtCOztBQUNsQjtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRCxvQkFBb0I7O0FBQ3BCO0VBQ0UsV0FBVztDQUNaOztBQUVEO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLFdBQVc7RUFDWCxZQUFZO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHRpbmdzQm9yZGVyIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDQ2MHB4O1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuLyogSElERSBSQURJTyAqL1xuW3R5cGU9cmFkaW9dIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKiBJTUFHRSBTVFlMRVMgKi9cblt0eXBlPXJhZGlvXSArIC5wb3N0X3Byb2ZpbGVfcGhvdG8ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIENIRUNLRUQgU1RZTEVTICovXG5bdHlwZT1yYWRpb106Y2hlY2tlZCArIC5wb3N0X3Byb2ZpbGVfcGhvdG8ge1xuICBvcGFjaXR5OiAxO1xufVxuXG4ucG9zdF9wcm9maWxlX3Bob3Rve1xuICB3aWR0aDo1MHB4IWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjoxNXB4O1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5pbWd7XG4gIHdpZHRoOjEwMCU7XG4gIG1hcmdpbjphdXRvO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"settingsBorder\">\n  <form (submit)=\"updateSettings(user._id)\">\n    <div>\n      <p>Select your icon: </p>\n      <label>\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/1.png\" checked>\n        <img class=\"post_profile_photo\" src=\"../assets/img/1.png\" num=\"1\" alt=\"\">\n      </label>\n      <label>\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/2.png\">\n        <img class=\"post_profile_photo\" src=\"../assets/img/2.png\" num=\"2\" alt=\"\">\n      </label>\n      <label>\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/3.png\">\n        <img class=\"post_profile_photo\" src=\"../assets/img/3.png\" num=\"3\" alt=\"\">\n      </label>\n      <label>\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/4.png\">\n        <img class=\"post_profile_photo\" src=\"../assets/img/4.png\" num=\"4\" alt=\"\">\n      </label>\n      <label>\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/5.png\">\n        <img class=\"post_profile_photo\" src=\"../assets/img/5.png\" num=\"5\" alt=\"\">\n      </label>\n      <label>\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/6.png\">\n        <img class=\"post_profile_photo\" src=\"../assets/img/6.png\" num=\"6\" alt=\"\">\n      </label>\n      <label>\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/7.png\">\n        <img class=\"post_profile_photo\" src=\"../assets/img/7.png\" num=\"7\" alt=\"\">\n      </label>\n      <label>\n        <input type=\"radio\" name=\"user.icon\" [(ngModel)]=\"user.icon\" value=\"../assets/img/8.png\">\n        <img class=\"post_profile_photo\" src=\"../assets/img/8.png\" num=\"8\" alt=\"\">\n      </label>\n\n      <br>\n      <input class=\"login_input\" type=\"text\" name=\"user.username\" [(ngModel)]=\"user.username\" placeholder=\"username\">\n      <br>\n      <input class=\"login_input\" type=\"text\" name=\"user.email\" [(ngModel)]=\"user.email\" placeholder=\"email\">\n      <br>\n      <input class=\"login_input\" type=\"text\" name=\"user.password\" [(ngModel)]=\"user.password\" placeholder=\"password\">\n      <div class=\"error\">\n        <p *ngIf=\"errors.icon\">{{errors.icon.message}}</p>\n        <p *ngIf=\"errors.username\">{{errors.username.message}}</p>\n        <p *ngIf=\"errors.email\">{{errors.email.message}}</p>\n        <p *ngIf=\"errors.password\">{{errors.password.message}}</p>\n        <p *ngIf=\"errors.repeat\">{{errors.repeat.message}}</p>\n      </div>\n    </div>\n\n    <input type=\"submit\" value=\"Save changes\" />\n    <a [routerLink]=\"['/dashboard']\"><input type=\"submit\" value=\"Cancel\" /></a>\n  </form>\n</div>\n"

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

module.exports = ".add-files-btn {\n  float: right;\n}\n\n:host {\n  height: 100%;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n}\n\n.actions {\n  justify-content: flex-end;\n}\n\n.container {\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsUUFBUTtFQUNSLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLDBCQUEwQjtDQUMzQjs7QUFFRDtFQUNFLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWZpbGVzLWJ0biB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5hY3Rpb25zIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/upload/dialog/dialog.component.html":
/*!*****************************************************!*\
  !*** ./src/app/upload/dialog/dialog.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"file\" #file style=\"display: none\" (change)=\"onFilesAdded()\" multiple />\n<div class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"space-evenly stretch\">\n  <h1 mat-dialog-title>Upload Files</h1>\n  <div>\n    <button [disabled]=\"uploading || uploadSuccessful\" mat-raised-button color=\"primary\" class=\"add-files-btn\" (click)=\"addFiles()\">\n      Add Files\n    </button>\n  </div>\n\n  <!-- This is the content of the dialog, containing a list of the files to upload -->\n  <mat-dialog-content fxFlex>\n    <mat-list>\n      <mat-list-item *ngFor=\"let file of files\">\n        <h4 mat-line>{{file.name}}</h4>\n        <mat-progress-bar *ngIf=\"progress\" mode=\"determinate\" [value]=\"progress[file.name].progress | async\"></mat-progress-bar>\n      </mat-list-item>\n    </mat-list>\n  </mat-dialog-content>\n\n  <!-- This are the actions of the dialog, containing the primary and the cancel button-->\n  <mat-dialog-actions class=\"actions\">\n    <button *ngIf=\"showCancelButton\" mat-button mat-dialog-close>Cancel</button>\n    <button mat-raised-button color=\"primary\" [disabled]=\"!canBeClosed\" (click)=\"closeDialog()\">{{primaryButtonText}}</button>\n  </mat-dialog-actions>\n</div>\n"

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

module.exports = "<button mat-raised-button (click)=\"openUploadDialog()\">Upload</button>\n"

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


module.exports = __webpack_require__(/*! /Users/aignaci1/Desktop/Coding Dojo/scroll/client/src/main.ts */"./src/main.ts");



/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map