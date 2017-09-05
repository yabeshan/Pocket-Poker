webpackJsonp([0],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(265);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_home__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(215);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__components__["a" /* CpBoard */],
            __WEBPACK_IMPORTED_MODULE_8__components__["f" /* CpRoom */],
            __WEBPACK_IMPORTED_MODULE_8__components__["e" /* CpPlayer */],
            __WEBPACK_IMPORTED_MODULE_8__components__["d" /* CpDealer */],
            __WEBPACK_IMPORTED_MODULE_8__components__["c" /* CpCard */],
            __WEBPACK_IMPORTED_MODULE_8__components__["b" /* CpBottomMenu */],
            __WEBPACK_IMPORTED_MODULE_8__components__["g" /* CpTopMenu */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__components__["a" /* CpBoard */],
            __WEBPACK_IMPORTED_MODULE_8__components__["f" /* CpRoom */],
            __WEBPACK_IMPORTED_MODULE_8__components__["e" /* CpPlayer */],
            __WEBPACK_IMPORTED_MODULE_8__components__["d" /* CpDealer */],
            __WEBPACK_IMPORTED_MODULE_8__components__["c" /* CpCard */],
            __WEBPACK_IMPORTED_MODULE_8__components__["b" /* CpBottomMenu */],
            __WEBPACK_IMPORTED_MODULE_8__components__["g" /* CpTopMenu */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_9__providers__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers__["c" /* ResizeProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, 
        // ApiProvider = init connect to backend
        api, 
        // ResizeProvider = init resize and rotation
        resizer) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.api = api;
        this.resizer = resizer;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages__["a" /* HomePage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            setTimeout(function () {
                splashScreen.hide();
                var data = new __WEBPACK_IMPORTED_MODULE_5__models__["d" /* RequestModel */](__WEBPACK_IMPORTED_MODULE_6__providers__["b" /* REQUEST_UPDATE */], true, { 'action': "start-game" });
                __WEBPACK_IMPORTED_MODULE_6__providers__["a" /* ApiProvider */].boardAction.next(data);
            }, 3000);
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: '<ion-nav [root]="rootPage"></ion-nav>'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_6__providers__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers__["c" /* ResizeProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage() {
        this.init();
    }
    HomePage.prototype.init = function () {
        __WEBPACK_IMPORTED_MODULE_1__providers__["a" /* ApiProvider */].userAction.subscribe(this.userActionHandler);
    };
    HomePage.prototype.userActionHandler = function (data) {
        if (data && data.type == __WEBPACK_IMPORTED_MODULE_1__providers__["b" /* REQUEST_UPDATE */]) {
            console.log("userActionHandler", data.data["user"]);
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\Nick_work\poker\Pocket-Poker\src\pages\home\home.html"*/'<div class="game-container">\n\n	<cp-board></cp-board>\n	<cp-top-menu></cp-top-menu>\n	<cp-bottom-menu></cp-bottom-menu>\n\n</div>'/*ion-inline-end:"D:\Nick_work\poker\Pocket-Poker\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return REQUEST_UPDATE; });
/* unused harmony export REQUEST_ERROR */
/* unused harmony export REQUEST_COMPLETE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var REQUEST_UPDATE = "REQUEST_UPDATE";
var REQUEST_ERROR = "REQUEST_ERROR";
var REQUEST_COMPLETE = "REQUEST_COMPLETE";
var ApiProvider = ApiProvider_1 = (function () {
    function ApiProvider(http) {
        this.http = http;
        this.init();
    }
    ApiProvider.prototype.init = function () {
        this.boardRequest('http://yabeshan.github.io/Pocket-Poker/assets/mock-data/board.json', {});
        this.userRequest('http://yabeshan.github.io/Pocket-Poker/assets/mock-data/user.json', {});
    };
    ApiProvider.prototype.boardRequest = function (url, data) {
        var _this = this;
        this.http.get(url)
            .subscribe(function (data) { return ApiProvider_1.boardAction.next(new __WEBPACK_IMPORTED_MODULE_3__models__["d" /* RequestModel */](REQUEST_UPDATE, true, data.json())); }, function (err) { return _this.boardErrorHandler(err); }, function () { return ApiProvider_1.boardAction.next(new __WEBPACK_IMPORTED_MODULE_3__models__["d" /* RequestModel */](REQUEST_COMPLETE, false)); });
    };
    ApiProvider.prototype.boardErrorHandler = function (err) {
        console.log('boardErrorHandler :: ', err);
        ApiProvider_1.boardAction.next(new __WEBPACK_IMPORTED_MODULE_3__models__["d" /* RequestModel */](REQUEST_ERROR, false, err));
    };
    ApiProvider.prototype.userRequest = function (url, data) {
        var _this = this;
        this.http.get(url)
            .subscribe(function (data) { return ApiProvider_1.userAction.next(new __WEBPACK_IMPORTED_MODULE_3__models__["d" /* RequestModel */](REQUEST_UPDATE, true, data.json())); }, function (err) { return _this.userErrorHandler(err); }, function () { return ApiProvider_1.userAction.next(new __WEBPACK_IMPORTED_MODULE_3__models__["d" /* RequestModel */](REQUEST_COMPLETE, false)); });
    };
    ApiProvider.prototype.userErrorHandler = function (err) {
        console.log('userErrorHandler :: ', err);
        ApiProvider_1.userAction.next(new __WEBPACK_IMPORTED_MODULE_3__models__["d" /* RequestModel */](REQUEST_ERROR, false, err));
    };
    return ApiProvider;
}());
// userAction = login logout getUser setBet getCard getBalance
ApiProvider.userAction = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](null);
// boardAction = getPlayers getStatus
ApiProvider.boardAction = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_3__models__["d" /* RequestModel */]('loading'));
// animAction = cards players
ApiProvider.animAction = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](null);
ApiProvider = ApiProvider_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ApiProvider);

var ApiProvider_1;
//# sourceMappingURL=api-provider.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardModel; });
var BoardModel = (function () {
    function BoardModel() {
    }
    return BoardModel;
}());

//# sourceMappingURL=board-model.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestModel; });
var RequestModel = (function () {
    function RequestModel(type, status, data) {
        if (type === void 0) { type = "test"; }
        if (status === void 0) { status = false; }
        if (data === void 0) { data = null; }
        this.type = type;
        this.status = status;
        this.data = data;
    }
    return RequestModel;
}());

//# sourceMappingURL=request-model.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionModel; });
var PositionModel = (function () {
    function PositionModel(x, y, zoom, orientation) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (zoom === void 0) { zoom = 1; }
        if (orientation === void 0) { orientation = "0"; }
        this.x = x;
        this.y = y;
        this.zoom = zoom;
        this.orientation = orientation;
    }
    return PositionModel;
}());

//# sourceMappingURL=position-model.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_provider__ = __webpack_require__(266);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_provider__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__api_provider__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resize_provider__ = __webpack_require__(271);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__resize_provider__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerModel; });
var PlayerModel = (function () {
    function PlayerModel(id, name, balance, image) {
        this.id = id;
        this.name = name;
        this.balance = balance;
        this.image = image;
    }
    return PlayerModel;
}());

//# sourceMappingURL=player-model.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResizeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResizeProvider = ResizeProvider_1 = (function () {
    function ResizeProvider(platform) {
        this.platform = platform;
        this.init();
    }
    ResizeProvider.prototype.init = function () {
        ResizeProvider_1.resizeAction.next(null);
        var that = this;
        window.addEventListener("resize", function () {
            // let isLandscape1: boolean = (that.platform && that.platform.isLandscape() == true);
            // let orient1 = window.orientation;
            setTimeout(function () {
                // let isLandscape2: boolean = (that.platform && that.platform.isLandscape() == true);
                // let orient2 = window.orientation;
                // alert( isLandscape1 + " = "+orient1 + "_____________" + isLandscape2 + " = "+orient2 );
                ResizeProvider_1.resizeAction.next(null);
            }, 100);
        }, false);
    };
    return ResizeProvider;
}());
// resizeAction = detect to resize, orientation, fullscreen // boolean = isLandscape 
ResizeProvider.resizeAction = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](null);
// rotationAction = fire from board after rotation // string = angle
ResizeProvider.rotationAction = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](null);
ResizeProvider = ResizeProvider_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Platform */]])
], ResizeProvider);

var ResizeProvider_1;
//# sourceMappingURL=resize-provider.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cp_board_cp_board__ = __webpack_require__(273);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__cp_board_cp_board__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cp_dealer_cp_dealer__ = __webpack_require__(274);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__cp_dealer_cp_dealer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cp_card_cp_card__ = __webpack_require__(275);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__cp_card_cp_card__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cp_room_cp_room__ = __webpack_require__(276);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__cp_room_cp_room__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cp_player_cp_player__ = __webpack_require__(277);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__cp_player_cp_player__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cp_top_menu_cp_top_menu__ = __webpack_require__(278);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__cp_top_menu_cp_top_menu__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cp_bottom_menu_cp_bottom_menu__ = __webpack_require__(279);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__cp_bottom_menu_cp_bottom_menu__["a"]; });







//# sourceMappingURL=index.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CpBoard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CpBoard = (function () {
    function CpBoard(platform) {
        this.platform = platform;
        this.styles = "board-container";
        this.rotatePlayer = "";
        this.top = 0;
        this.left = 0;
        this.zoom = 1;
        this.zoomX = 1;
        this.zoomY = 1;
        this.animStackIndex = -1;
        /*
        animStack: object[] = [{
            duration: 1000,
            model: new RequestModel("card",true,{card:1,action:'pos41'})
        },{
            duration: 1000,
            model: new RequestModel("card",true,{card:2,action:'pos42'})
        },{
            duration: 1000,
            model: new RequestModel("card",true,{card:2,action:'pos41open'})
        },{
            duration: 1000,
            model: new RequestModel("card",true,{card:1,action:'pos42open'})
        },{
            duration: 500,
            model: new RequestModel("card",true,{card:2,action:'http://yabeshan.github.io/Pocket-Poker/assets/cards/3H.svg'})
        },{
            duration: 3000,
            model: new RequestModel("card",true,{card:1,action:'http://yabeshan.github.io/Pocket-Poker/assets/cards/4H.svg'})
        },{
            duration: 1000,
            model: new RequestModel("card",true,{card:0,action:'http://yabeshan.github.io/Pocket-Poker/assets/cards/Red_Back.svg'})
        }];
        */
        this.animStack = [{
                duration: 1000,
                model: new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* RequestModel */]("card", true, { card: 1, action: 'pos21' })
            }, {
                duration: 1000,
                model: new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* RequestModel */]("card", true, { card: 2, action: 'pos41' })
            }, {
                duration: 1000,
                model: new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* RequestModel */]("card", true, { card: 3, action: 'pos81' })
            }, {
                duration: 1000,
                model: new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* RequestModel */]("card", true, { card: 4, action: 'pos22' })
            }, {
                duration: 1000,
                model: new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* RequestModel */]("card", true, { card: 5, action: 'pos42' })
            }, {
                duration: 1000,
                model: new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* RequestModel */]("card", true, { card: 6, action: 'pos82' })
            }, {
                duration: 1000,
                model: new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* RequestModel */]("card", true, { card: 7, action: 'board1' })
            }, {
                duration: 1000,
                model: new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* RequestModel */]("card", true, { card: 8, action: 'board2' })
            }, {
                duration: 1000,
                model: new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* RequestModel */]("card", true, { card: 9, action: 'board3' })
            }, {
                duration: 1000,
                model: new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* RequestModel */]("card", true, { card: 10, action: 'board4' })
            }, {
                duration: 1000,
                model: new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* RequestModel */]("card", true, { card: 11, action: 'board5' })
            }, {
                duration: 1000,
                model: new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* RequestModel */]("card", true, { card: 5, action: 'pos41open' })
            }, {
                duration: 1000,
                model: new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* RequestModel */]("card", true, { card: 2, action: 'pos42open' })
            }, {
                duration: 500,
                model: new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* RequestModel */]("card", true, { card: 5, action: 'http://yabeshan.github.io/Pocket-Poker/assets/cards/QS.svg' })
            }, {
                duration: 1000,
                model: new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* RequestModel */]("card", true, { card: 2, action: 'http://yabeshan.github.io/Pocket-Poker/assets/cards/9H.svg' })
            }, {
                duration: 500,
                model: new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* RequestModel */]("card", true, { card: 7, action: 'http://yabeshan.github.io/Pocket-Poker/assets/cards/6C.svg' })
            }, {
                duration: 1000,
                model: new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* RequestModel */]("card", true, { card: 8, action: 'http://yabeshan.github.io/Pocket-Poker/assets/cards/JD.svg' })
            }, {
                duration: 10000,
                model: new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* RequestModel */]("player", true, { player: 2, action: 'anim' })
            }, {
                duration: 500,
                model: new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* RequestModel */]("card", true, { card: 9, action: 'http://yabeshan.github.io/Pocket-Poker/assets/cards/TH.svg' })
            }, {
                duration: 1000,
                model: new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* RequestModel */]("card", true, { card: 10, action: 'http://yabeshan.github.io/Pocket-Poker/assets/cards/KS.svg' })
            }, {
                //     duration: 10000,
                //     model: new RequestModel("player",true,{player:4,action:'anim'})
                // },{
                duration: 10000,
                model: new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* RequestModel */]("player", true, { player: 8, action: 'anim' })
            }, {
                duration: 1000,
                model: new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* RequestModel */]("card", true, { card: 11, action: 'http://yabeshan.github.io/Pocket-Poker/assets/cards/QH.svg' })
            }, {
                duration: 3000,
                model: new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* RequestModel */]("card", true, { card: 11, action: 'posMaxi' })
            }, {
                duration: 1000,
                model: new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* RequestModel */]("card", true, { card: 11, action: 'board5' })
            }, {
                duration: 1000,
                model: new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* RequestModel */]("card", true, { card: 0, action: 'http://yabeshan.github.io/Pocket-Poker/assets/cards/Red_Back.svg' })
            }, {
                duration: 2000,
                model: new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* RequestModel */]("card", true, { card: 0, action: 'pos0' })
            }];
        //
    }
    CpBoard.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* ApiProvider */].boardAction.subscribe(function (data) { return _this.boardActionHandler(data); });
        __WEBPACK_IMPORTED_MODULE_3__providers__["c" /* ResizeProvider */].resizeAction.subscribe(function (isLandscape) {
            _this.resizeActionHandler(isLandscape);
        });
        this.resizeActionHandler(null);
        setTimeout(function () {
            _this.resizeActionHandler(null);
        }, 3000);
    };
    /******************* BOARD UTILS **********************/
    CpBoard.prototype.boardActionHandler = function (data) {
        if (data && data.type == __WEBPACK_IMPORTED_MODULE_3__providers__["b" /* REQUEST_UPDATE */] && data.data["action"] && data.data["action"] == "start-game") {
            this.updateGameController();
        }
    };
    CpBoard.prototype.updateGameController = function () {
        var _this = this;
        if (++this.animStackIndex >= this.animStack.length) {
            this.animStackIndex = 0;
        }
        var action = this.animStack[this.animStackIndex];
        __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* ApiProvider */].animAction.next(action["model"]);
        setTimeout(function () {
            _this.updateGameController();
        }, action["duration"]);
    };
    /******************** RESIZE UTILS **********************/
    CpBoard.prototype.resizeActionHandler = function (isLandscape) {
        var w = window.innerWidth;
        var h = window.innerHeight;
        if (window.orientation == undefined) {
            // desktop detect
            isLandscape = (h / w < 1.3);
        }
        else {
            // mobile tablet
            var o = window.orientation + "";
            isLandscape = (o.indexOf("90") >= 0);
        }
        this.boardPosition(w, h, isLandscape);
    };
    CpBoard.prototype.boardPosition = function (w, h, isLandscape) {
        if (isLandscape) {
            this.styles = "board-container";
            this.rotatePlayer = "";
            this.top = 0;
            this.left = 0;
            this.zoomX = w / 800;
            this.zoomY = h / ((h < 500) ? 640 : 600);
        }
        else {
            this.styles = "board-container rotate";
            this.rotatePlayer = "rotate";
            this.top = 0;
            this.left = -100;
            this.zoomX = h / 800;
            this.zoomY = w / 600;
        }
        __WEBPACK_IMPORTED_MODULE_3__providers__["c" /* ResizeProvider */].rotationAction.next(this.rotatePlayer);
        this.zoom = (this.zoomX < this.zoomY) ? this.zoomX : this.zoomY;
        var dist = (h - 600 * this.zoom) * 0.5 / this.zoom;
        if (dist >= 100) {
            this.top = dist;
        }
        else {
            this.left = (w - 800 * this.zoom) * 0.5 / this.zoom;
        }
    };
    return CpBoard;
}());
CpBoard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'cp-board',template:/*ion-inline-start:"D:\Nick_work\poker\Pocket-Poker\src\components\cp-board\cp-board.html"*/'<div class="{{styles}}" \n\n    [style.zoom]="zoom" \n\n    [style.-moz-transform]="\'scale(\'+zoom+\')\'"\n\n    [style.top.px]="top"\n\n    [style.left.px]="left">\n\n\n\n    <div class="dealer-holder">\n\n        <cp-dealer></cp-dealer>\n\n    </div>\n\n    \n\n    <div class="room-holder">\n\n        <cp-room></cp-room>\n\n    </div>\n\n\n\n</div>'/*ion-inline-end:"D:\Nick_work\poker\Pocket-Poker\src\components\cp-board\cp-board.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Platform */]])
], CpBoard);

//# sourceMappingURL=cp-board.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CpDealer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CpDealer = (function () {
    function CpDealer() {
        this.card1 = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.card2 = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.card3 = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.card4 = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.card5 = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.card6 = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.card7 = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.card8 = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.card9 = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.card10 = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.card11 = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.card12 = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        //
    }
    CpDealer.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* ApiProvider */].animAction.subscribe(function (data) { return _this.parseAction(data); });
    };
    CpDealer.prototype.parseAction = function (data) {
        if (data == null || !data.type || data.type != "card") {
            return;
        }
        var id = data.data["card"];
        var bm = new __WEBPACK_IMPORTED_MODULE_2__models__["a" /* BoardModel */]();
        bm.type = data.data["action"];
        if (id == 0) {
            var k = 1;
            var total = 12;
            for (k; k < total; k++) {
                this["card" + k].next(bm);
            }
        }
        else {
            this["card" + id].next(bm);
        }
    };
    return CpDealer;
}());
CpDealer = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'cp-dealer',template:/*ion-inline-start:"D:\Nick_work\poker\Pocket-Poker\src\components\cp-dealer\cp-dealer.html"*/'<div>\n\n\n\n    <cp-card [cardAction]="card1"></cp-card>\n\n    <cp-card [cardAction]="card2"></cp-card>\n\n    <cp-card [cardAction]="card3"></cp-card>\n\n    <cp-card [cardAction]="card4"></cp-card>\n\n    <cp-card [cardAction]="card5"></cp-card>\n\n    <cp-card [cardAction]="card6"></cp-card>\n\n    <cp-card [cardAction]="card7"></cp-card>\n\n    <cp-card [cardAction]="card8"></cp-card>\n\n    <cp-card [cardAction]="card9"></cp-card>\n\n    <cp-card [cardAction]="card10"></cp-card>\n\n    <cp-card [cardAction]="card11"></cp-card>\n\n    <cp-card [cardAction]="card12"></cp-card>\n\n\n\n</div>'/*ion-inline-end:"D:\Nick_work\poker\Pocket-Poker\src\components\cp-dealer\cp-dealer.html"*/
    }),
    __metadata("design:paramtypes", [])
], CpDealer);

//# sourceMappingURL=cp-dealer.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CpCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CpCard = (function () {
    function CpCard() {
        this.styles = "card pos0";
        this.imgSrc = "http://yabeshan.github.io/Pocket-Poker/assets/cards/Red_Back.svg";
        //
    }
    CpCard.prototype.ngOnInit = function () {
        var _this = this;
        this.cardAction.subscribe(function (data) { return _this.initCard(data); });
    };
    CpCard.prototype.initCard = function (data) {
        if (data == null) {
            return;
        }
        var imgFlag = data.type.indexOf(".svg");
        if (imgFlag < 0) {
            this.styles = "card " + data.type;
        }
        else {
            this.imgSrc = data.type;
        }
    };
    return CpCard;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"])
], CpCard.prototype, "cardAction", void 0);
CpCard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'cp-card',template:/*ion-inline-start:"D:\Nick_work\poker\Pocket-Poker\src\components\cp-card\cp-card.html"*/'<div>\n\n    <img class="{{styles}}" src="{{imgSrc}}">\n\n</div>'/*ion-inline-end:"D:\Nick_work\poker\Pocket-Poker\src\components\cp-card\cp-card.html"*/
    }),
    __metadata("design:paramtypes", [])
], CpCard);

//# sourceMappingURL=cp-card.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CpRoom; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CpRoom = (function () {
    function CpRoom() {
        this.allPlayers = [];
        this.positionPlayers = [
            { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 650, y: 320 }, { x: 0, y: 0 },
            { x: 350, y: 430 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 180, y: 50 }
        ];
        this.player0 = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.player1 = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.player2 = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.player3 = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.player4 = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.player5 = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.player6 = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.player7 = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.player8 = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        //
    }
    CpRoom.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* ApiProvider */].boardAction.subscribe(function (data) { return _this.boardActionHandler(data); });
        __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* ApiProvider */].animAction.subscribe(function (data) { return _this.parseAction(data); });
    };
    CpRoom.prototype.parseAction = function (data) {
        if (data == null || !data.type || data.type != "player") {
            return;
        }
        if (data.data["action"] == "anim") {
            var bm = new __WEBPACK_IMPORTED_MODULE_3__models__["a" /* BoardModel */]();
            bm.type = "anim";
            this["player" + data.data["player"]].next(bm);
        }
    };
    CpRoom.prototype.boardActionHandler = function (data) {
        if (data && data.type == __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* REQUEST_UPDATE */] && data.data["players"]) {
            this.parseAllPlayers(data.data["players"]);
        }
    };
    CpRoom.prototype.parseAllPlayers = function (data) {
        var _this = this;
        this.allPlayers = [];
        data.map(function (item) {
            var player = null;
            if (item.id) {
                player = new __WEBPACK_IMPORTED_MODULE_3__models__["b" /* PlayerModel */](item.id, item.name, item.balance, item.image);
            }
            _this.initPlayer(_this.allPlayers.length, player);
            _this.allPlayers.push(player);
        });
    };
    CpRoom.prototype.initPlayer = function (id, model) {
        var bm = new __WEBPACK_IMPORTED_MODULE_3__models__["a" /* BoardModel */]();
        bm.type = "position";
        bm.player = model;
        bm.position = new __WEBPACK_IMPORTED_MODULE_3__models__["c" /* PositionModel */](this.positionPlayers[id]["x"], this.positionPlayers[id]["y"], 1);
        this["player" + id].next(bm);
    };
    return CpRoom;
}());
CpRoom = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'cp-room',template:/*ion-inline-start:"D:\Nick_work\poker\Pocket-Poker\src\components\cp-room\cp-room.html"*/'<div class="room-container">\n\n    \n\n	<cp-player [playerAction]="player0"></cp-player>\n\n	<cp-player [playerAction]="player1"></cp-player>\n\n	<cp-player [playerAction]="player2"></cp-player>\n\n	<cp-player [playerAction]="player3"></cp-player>\n\n	<cp-player [playerAction]="player4"></cp-player>\n\n	<cp-player [playerAction]="player5"></cp-player>\n\n	<cp-player [playerAction]="player6"></cp-player>\n\n	<cp-player [playerAction]="player7"></cp-player>\n\n	<cp-player [playerAction]="player8"></cp-player>\n\n	\n\n</div>'/*ion-inline-end:"D:\Nick_work\poker\Pocket-Poker\src\components\cp-room\cp-room.html"*/
    }),
    __metadata("design:paramtypes", [])
], CpRoom);

//# sourceMappingURL=cp-room.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CpPlayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CpPlayer = (function () {
    function CpPlayer() {
        this.position = new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* PositionModel */](100);
        this.model = null;
        this.visible = false;
        this.name = "";
        this.balance = "";
        this.image = "";
        this.styles = "player-container";
        this.animStyles = "circle-anim-container";
        this.top = 0;
        this.left = 0;
        //
    }
    CpPlayer.prototype.ngOnInit = function () {
        var _this = this;
        this.playerAction.subscribe(function (data) { return _this.initPlayer(data); });
        __WEBPACK_IMPORTED_MODULE_3__providers__["c" /* ResizeProvider */].rotationAction.subscribe(function (angle) { return _this.rotationActionHandler(angle); });
    };
    CpPlayer.prototype.initPlayer = function (model) {
        var _this = this;
        if (model == null) {
            this.model = null;
            this.visible = false;
            this.name = "";
            this.balance = "";
            this.image = "";
            return;
        }
        if (model.type == "position" && model.player != null) {
            this.model = model.player;
            this.visible = true;
            this.name = this.model.name;
            this.balance = this.model.balance;
            this.image = this.model.image;
            this.position = model.position;
            if (this.position != null) {
                this.top = this.position.y;
                this.left = this.position.x;
            }
        }
        if (model.type == "anim") {
            this.animStyles = "circle-anim-container";
            setTimeout(function () {
                _this.animStyles = "circle-anim-container circle-anim-start";
            }, 50);
        }
    };
    CpPlayer.prototype.rotationActionHandler = function (angle) {
        this.styles = "player-container " + angle;
    };
    return CpPlayer;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"])
], CpPlayer.prototype, "playerAction", void 0);
CpPlayer = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'cp-player',template:/*ion-inline-start:"D:\Nick_work\poker\Pocket-Poker\src\components\cp-player\cp-player.html"*/'<div class="{{styles}}"\n\n    *ngIf="visible" \n\n    [style.top.px]="top" \n\n    [style.left.px]="left">\n\n\n\n    <div class="avatar">\n\n        <img src="{{image}}" style="width:90px">\n\n    </div>\n\n\n\n    <div class="{{animStyles}}">\n\n        <svg height="100" width="100">\n\n            <circle cx="-50" cy="50" r="47" />\n\n        </svg>\n\n    </div>\n\n\n\n    <div class="label">\n\n        {{name}}<br>{{balance}}\n\n    </div>\n\n	\n\n</div>'/*ion-inline-end:"D:\Nick_work\poker\Pocket-Poker\src\components\cp-player\cp-player.html"*/
    }),
    __metadata("design:paramtypes", [])
], CpPlayer);

//# sourceMappingURL=cp-player.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CpTopMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CpTopMenu = (function () {
    function CpTopMenu() {
        //
    }
    CpTopMenu.prototype.ngOnInit = function () {
    };
    return CpTopMenu;
}());
CpTopMenu = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'cp-top-menu',template:/*ion-inline-start:"D:\Nick_work\poker\Pocket-Poker\src\components\cp-top-menu\cp-top-menu.html"*/'<ion-fab top left >\n\n    <button ion-fab>Меню</button>\n\n    <ion-fab-list side="right">\n\n        <button ion-fab><ion-icon name="contact"></ion-icon></button>\n\n        <button ion-fab><ion-icon name="share-alt"></ion-icon></button>\n\n        <button ion-fab><ion-icon name="card"></ion-icon></button>\n\n        <button ion-fab><ion-icon name="construct"></ion-icon></button>\n\n    </ion-fab-list>\n\n    <ion-fab-list side="bottom">\n\n        <button ion-fab><ion-icon name="beer"></ion-icon></button>\n\n        <button ion-fab><ion-icon name="cafe"></ion-icon></button>\n\n    </ion-fab-list>\n\n</ion-fab>'/*ion-inline-end:"D:\Nick_work\poker\Pocket-Poker\src\components\cp-top-menu\cp-top-menu.html"*/
    }),
    __metadata("design:paramtypes", [])
], CpTopMenu);

//# sourceMappingURL=cp-top-menu.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CpBottomMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CpBottomMenu = (function () {
    function CpBottomMenu() {
        //
    }
    CpBottomMenu.prototype.ngOnInit = function () {
    };
    return CpBottomMenu;
}());
CpBottomMenu = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'cp-bottom-menu',template:/*ion-inline-start:"D:\Nick_work\poker\Pocket-Poker\src\components\cp-bottom-menu\cp-bottom-menu.html"*/'<div class="bottom-menu-container">\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-2 class="bottom-menu-holder">\n\n                <button ion-button clear>Фолд</button>\n\n            </ion-col>\n\n            <ion-col col-2 class="bottom-menu-holder">\n\n                <button ion-button clear>Колл 50</button>\n\n            </ion-col>\n\n            <ion-col col-2 class="bottom-menu-holder">\n\n                <button ion-button clear>Рейз до 1000</button>\n\n            </ion-col>\n\n            <ion-col col-6 class="bottom-menu-holder">\n\n                <ion-range style="margin-top:-10px;">\n\n                    <ion-icon range-left name="remove-circle"></ion-icon>\n\n                    <ion-icon range-right name="add-circle"></ion-icon>\n\n                </ion-range>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</div>\n\n\n\n'/*ion-inline-end:"D:\Nick_work\poker\Pocket-Poker\src\components\cp-bottom-menu\cp-bottom-menu.html"*/
    }),
    __metadata("design:paramtypes", [])
], CpBottomMenu);

//# sourceMappingURL=cp-bottom-menu.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__board_model__ = __webpack_require__(267);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__board_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_model__ = __webpack_require__(268);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__request_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__position_model__ = __webpack_require__(269);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__position_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__player_model__ = __webpack_require__(270);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__player_model__["a"]; });




//# sourceMappingURL=index.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map