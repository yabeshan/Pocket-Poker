webpackJsonp([0],{

/***/ 100:
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

/***/ }),

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers__ = __webpack_require__(31);
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
            __WEBPACK_IMPORTED_MODULE_8__components__["d" /* CpRoom */],
            __WEBPACK_IMPORTED_MODULE_8__components__["c" /* CpPlayer */],
            __WEBPACK_IMPORTED_MODULE_8__components__["b" /* CpBottomMenu */],
            __WEBPACK_IMPORTED_MODULE_8__components__["e" /* CpTopMenu */],
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
            __WEBPACK_IMPORTED_MODULE_8__components__["d" /* CpRoom */],
            __WEBPACK_IMPORTED_MODULE_8__components__["c" /* CpPlayer */],
            __WEBPACK_IMPORTED_MODULE_8__components__["b" /* CpBottomMenu */],
            __WEBPACK_IMPORTED_MODULE_8__components__["e" /* CpTopMenu */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(31);
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
        __WEBPACK_IMPORTED_MODULE_5__providers__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers__["c" /* ResizeProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers__ = __webpack_require__(31);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(100);
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
// boardAction = getPlayers getStatus
ApiProvider.boardAction = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_3__models__["d" /* RequestModel */]('loading'));
// userAction = login logout getUser setBet getCard getBalance
ApiProvider.userAction = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](null);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(50);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cp_room_cp_room__ = __webpack_require__(274);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__cp_room_cp_room__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cp_player_cp_player__ = __webpack_require__(275);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__cp_player_cp_player__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cp_top_menu_cp_top_menu__ = __webpack_require__(276);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__cp_top_menu_cp_top_menu__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cp_bottom_menu_cp_bottom_menu__ = __webpack_require__(277);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__cp_bottom_menu_cp_bottom_menu__["a"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CpBoard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(31);
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
        this.top = 0;
        this.left = 0;
        this.zoom = 1;
        this.zoomX = 1;
        this.zoomY = 1;
        //
    }
    CpBoard.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* ResizeProvider */].resizeAction.subscribe(function (isLandscape) {
            _this.resizeActionHandler(isLandscape);
        });
        this.resizeActionHandler(null);
        setTimeout(function () {
            _this.resizeActionHandler(null);
        }, 3000);
    };
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
            // this.rotate = 0;
            this.rotatePlayer = "0";
            this.top = 0;
            this.left = 0;
            this.zoomX = w / 800;
            this.zoomY = h / ((h < 500) ? 640 : 600);
        }
        else {
            this.styles = "board-container-rotate";
            // this.rotate = -90;
            this.rotatePlayer = "90";
            this.top = 0;
            this.left = -100;
            this.zoomX = h / 800;
            this.zoomY = w / 600;
        }
        __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* ResizeProvider */].rotationAction.next(this.rotatePlayer);
        this.zoom = (this.zoomX < this.zoomY) ? this.zoomX : this.zoomY;
        var dist = (w - 800 * this.zoom);
        if (dist > 20) {
            this.left = dist * 0.5 / this.zoom;
        }
        else {
            this.top = (h - 600 * this.zoom) * 0.5 / this.zoom;
        }
    };
    CpBoard.prototype.mobilePosition = function (w, h, isLandscape) {
        var o = window.orientation + "";
        /*
                console.log (model);
                // 800x600
                let w: number = model.x;
                let h: number = model.y;
        
                if (model.isLandscape == true) {
                    if (w > 0 && h > 0) {
                        this.zoomX = w / 810;
                        this.zoomY = h / 640;
                        this.zoom = (this.zoomX < this.zoomY) ? this.zoomX : this.zoomY;
                        // console.log ("resizeActionHandler", this.zoom, model.x);
                    }
                    this.rotate = 0;
                    this.top = 0;
                    this.left = 400 * this.zoom;
                } else {
        
                    if (w > 0 && h > 0) {
                        this.zoomX = h / 800;
                        this.zoomY = w / 600;
                        this.zoom = (this.zoomX < this.zoomY) ? this.zoomX : this.zoomY;
                        // console.log ("resizeActionHandler", this.zoom, model.x);
                    }
                    this.rotate = -90;
                    this.top = 400 * this.zoom;
                    this.left = -100;//600 * this.zoom;
                }
                */
    };
    return CpBoard;
}());
CpBoard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'cp-board',template:/*ion-inline-start:"D:\Nick_work\poker\Pocket-Poker\src\components\cp-board\cp-board.html"*/'<div class="{{styles}}" \n\n    [style.zoom]="zoom" \n\n    [style.top.px]="top"\n\n    [style.left.px]="left">\n\n\n\n    <div class="cards-holder">\n\n            <!-- cards-holder -->\n\n    </div>\n\n    <div class="room-holder">\n\n        <cp-room></cp-room>\n\n    </div>\n\n\n\n</div>'/*ion-inline-end:"D:\Nick_work\poker\Pocket-Poker\src\components\cp-board\cp-board.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Platform */]])
], CpBoard);

//# sourceMappingURL=cp-board.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CpRoom; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(100);
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
    };
    CpRoom.prototype.boardActionHandler = function (data) {
        if (data && data.type == __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* REQUEST_UPDATE */] && data.data["players"]) {
            // console.log ("Room boardActionHandler", data.data["players"]);
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

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CpPlayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(31);
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
        this.rotate = "0";
        this.top = 0;
        this.left = 0;
        //
    }
    CpPlayer.prototype.ngOnInit = function () {
        var _this = this;
        this.playerAction.subscribe(function (data) { return _this.initPlayer(data); });
        __WEBPACK_IMPORTED_MODULE_3__providers__["c" /* ResizeProvider */].rotationAction.subscribe(function (angle) {
            _this.rotationActionHandler(angle);
        });
    };
    CpPlayer.prototype.initPlayer = function (model) {
        if (model == null || model.player == null) {
            this.model = null;
            this.visible = false;
            this.name = "";
            this.balance = "";
            this.image = "";
        }
        else {
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
    };
    CpPlayer.prototype.rotationActionHandler = function (angle) {
        this.rotate = angle;
    };
    return CpPlayer;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"])
], CpPlayer.prototype, "playerAction", void 0);
CpPlayer = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'cp-player',template:/*ion-inline-start:"D:\Nick_work\poker\Pocket-Poker\src\components\cp-player\cp-player.html"*/'<div class="player-container" \n\n    *ngIf="visible" \n\n    [style.top.px]="top" \n\n    [style.left.px]="left"\n\n    [style.transform]="\'rotate(\' + rotate + \'deg)\'" >\n\n\n\n    <div class="avatar">\n\n        <img src="{{image}}" style="width:90px">\n\n    </div>\n\n    <div class="label">\n\n        {{name}}<br>{{balance}}\n\n    </div>\n\n    \n\n</div>'/*ion-inline-end:"D:\Nick_work\poker\Pocket-Poker\src\components\cp-player\cp-player.html"*/
    }),
    __metadata("design:paramtypes", [])
], CpPlayer);

//# sourceMappingURL=cp-player.js.map

/***/ }),

/***/ 276:
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

/***/ 277:
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

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_provider__ = __webpack_require__(266);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_provider__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__api_provider__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resize_provider__ = __webpack_require__(271);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__resize_provider__["a"]; });


//# sourceMappingURL=index.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map