webpackJsonp([12],{

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/book-complete-modal/book-complete-modal.module": [
		304,
		11
	],
	"../pages/event-create/event-create.module": [
		305,
		10
	],
	"../pages/event-detail/event-detail.module": [
		306,
		9
	],
	"../pages/event-list/event-list.module": [
		307,
		8
	],
	"../pages/home/home.module": [
		308,
		7
	],
	"../pages/hospital-details/hospital-details.module": [
		309,
		6
	],
	"../pages/hospitals/hospitals.module": [
		310,
		5
	],
	"../pages/login/login.module": [
		311,
		2
	],
	"../pages/profile/profile.module": [
		312,
		4
	],
	"../pages/reset-password/reset-password.module": [
		313,
		1
	],
	"../pages/signup/signup.module": [
		314,
		0
	],
	"../pages/tabs/tabs.module": [
		315,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_auth__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_database__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthProvider = /** @class */ (function () {
    function AuthProvider() {
    }
    AuthProvider.prototype.loginUser = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    AuthProvider.prototype.signupUser = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(function (newUserCredential) {
            __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a
                .database()
                .ref("/userProfile/" + newUserCredential.user.uid + "/email")
                .set(email);
        })
            .catch(function (error) {
            console.error(error);
            throw new Error(error);
        });
    };
    AuthProvider.prototype.resetPassword = function (email) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.auth().sendPasswordResetEmail(email);
    };
    AuthProvider.prototype.logoutUser = function () {
        var userId = __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.auth().currentUser.uid;
        __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a
            .database()
            .ref("/userProfile/" + userId)
            .off();
        return __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.auth().signOut();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_auth__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_database__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_storage__ = __webpack_require__(267);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventProvider = /** @class */ (function () {
    function EventProvider() {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.eventListRef = __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a
                    .database()
                    .ref("/userProfile/" + user.uid + "/eventList");
            }
        });
    }
    EventProvider.prototype.createEvent = function (eventName, eventDate, eventPrice, eventCost) {
        return this.eventListRef.push({
            name: eventName,
            date: eventDate,
            price: eventPrice * 1,
            cost: eventCost * 1,
            revenue: eventCost * -1
        });
    };
    EventProvider.prototype.getEventList = function () {
        return this.eventListRef;
    };
    EventProvider.prototype.getEventDetail = function (eventId) {
        return this.eventListRef.child(eventId);
    };
    EventProvider.prototype.addGuest = function (guestName, eventId, eventPrice, guestPicture) {
        var _this = this;
        if (guestPicture === void 0) { guestPicture = null; }
        return this.eventListRef
            .child(eventId + "/guestList")
            .push({ guestName: guestName })
            .then(function (newGuest) {
            _this.eventListRef.child(eventId).transaction(function (event) {
                event.revenue += eventPrice;
                return event;
            });
            if (guestPicture != null) {
                return __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a
                    .storage()
                    .ref("/guestProfile/" + newGuest.key + "/profilePicture.png")
                    .putString(guestPicture, 'base64', { contentType: 'image/png' })
                    .then(function (savedPicture) {
                    _this.eventListRef
                        .child(eventId + "/guestList/" + newGuest.key + "/profilePicture")
                        .set(savedPicture.downloadURL);
                });
            }
        });
    };
    EventProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], EventProvider);
    return EventProvider;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HospitalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hospitals_hospitals__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the HospitalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HospitalProvider = /** @class */ (function () {
    function HospitalProvider(http) {
        this.http = http;
        console.log('Hello HospitalProvider Provider');
    }
    HospitalProvider.prototype.findAll = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_2__hospitals_hospitals__["a" /* default */]);
    };
    HospitalProvider.prototype.findByName = function (searchKey) {
        var key = searchKey.toUpperCase();
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_2__hospitals_hospitals__["a" /* default */].filter(function (hospital) {
            return (hospital.title + ' ' + hospital.address + ' ' + hospital.city + ' ' + hospital.description).toUpperCase().indexOf(key) > -1;
        }));
    };
    HospitalProvider.prototype.findById = function (id) {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_2__hospitals_hospitals__["a" /* default */][id - 1]);
    };
    HospitalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], HospitalProvider);
    return HospitalProvider;
}());

//# sourceMappingURL=hospital.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the SpinnerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var SpinnerProvider = /** @class */ (function () {
    function SpinnerProvider(http, loadingCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        console.log('Hello SpinnerProvider Provider');
    }
    SpinnerProvider.prototype.load = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Loading'
        });
        this.loader.present();
    };
    SpinnerProvider.prototype.dismiss = function () {
        if (this.loader) {
            this.loader.dismiss();
            this.loader = null;
        }
    };
    SpinnerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */]])
    ], SpinnerProvider);
    return SpinnerProvider;
}());

//# sourceMappingURL=spinner.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the MapProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var MapProvider = /** @class */ (function () {
    function MapProvider(http) {
        this.http = http;
        this.contentHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.google_api_key = 'AIzaSyCKA5hvn9vH1cIdiwGEwTgeyBhys2gHpI0';
        console.log('Hello MapProvider Provider');
    }
    MapProvider.prototype.getAddress = function (params) {
        var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + params.lat + ',' + params.long;
        return this.GET(url);
    };
    MapProvider.prototype.getStreetAddress = function (params) {
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?key=' + this.google_api_key + '&latlng=' + params.lat + ',' + params.long + '&result_type=street_address';
        return this.GET(url);
    };
    MapProvider.prototype.GET = function (url) {
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    MapProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], MapProvider);
    return MapProvider;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_database__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileProvider = /** @class */ (function () {
    function ProfileProvider() {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.currentUser = user;
                _this.userProfile = __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.database().ref("/userProfile/" + user.uid);
            }
        });
    }
    ProfileProvider.prototype.getUserProfile = function () {
        return this.userProfile;
    };
    ProfileProvider.prototype.updateName = function (firstName, lastName) {
        return this.userProfile.update({ firstName: firstName, lastName: lastName });
    };
    ProfileProvider.prototype.updateDOB = function (birthDate) {
        return this.userProfile.update({ birthDate: birthDate });
    };
    ProfileProvider.prototype.updateEmail = function (newEmail, password) {
        var _this = this;
        var credential = __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.auth.
            EmailAuthProvider.credential(this.currentUser.email, password);
        return this.currentUser
            .reauthenticateWithCredential(credential)
            .then(function (user) {
            _this.currentUser.updateEmail(newEmail).then(function (user) {
                _this.userProfile.update({ email: newEmail });
            });
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    ProfileProvider.prototype.updatePassword = function (newPassword, oldPassword) {
        var _this = this;
        var credential = __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.auth
            .EmailAuthProvider.credential(this.currentUser.email, oldPassword);
        return this.currentUser
            .reauthenticateWithCredential(credential)
            .then(function (user) {
            _this.currentUser.updatePassword(newPassword).then(function (user) {
                console.log('Password Changed');
            });
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    ProfileProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ProfileProvider);
    return ProfileProvider;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_event_event__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_profile_profile__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_map_map__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_spinner_spinner__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_hospital_hospital__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_geolocation__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/book-complete-modal/book-complete-modal.module#BookCompleteModalPageModule', name: 'BookCompleteModalPage', segment: 'book-complete-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-create/event-create.module#EventCreatePageModule', name: 'EventCreatePage', segment: 'event-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-detail/event-detail.module#EventDetailPageModule', name: 'EventDetailPage', segment: 'event-detail/:eventId', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-list/event-list.module#EventListPageModule', name: 'EventListPage', segment: 'event-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hospital-details/hospital-details.module#HospitalDetailsPageModule', name: 'HospitalDetailsPage', segment: 'hospital-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hospitals/hospitals.module#HospitalsPageModule', name: 'HospitalsPage', segment: 'hospitals', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_event_event__["a" /* EventProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_profile_profile__["a" /* ProfileProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_map_map__["a" /* MapProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_spinner_spinner__["a" /* SpinnerProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_hospital_hospital__["a" /* HospitalProvider */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var hospitals = [
    {
        id: 1,
        address: "9 Sam Sekoati Ave",
        city: "Marimba Gardens Ext 9",
        state: "Johannesburg",
        zip: "01742",
        price: "$975,000",
        title: "Botshelong-Empilweni Private Hospital",
        bedrooms: 4,
        bathrooms: 3,
        long: 28.218116,
        lat: -26.344281,
        pic: "./assets/img/drmemorial.jpg",
        thumb: "./assets/img/drmemorial.jpg",
        tags: "colonial",
        description: "Private Hospital",
        broker: {
            id: 1,
            name: "Caroline Kingsley",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
        }
    },
    {
        id: 2,
        address: "6, Diepkloof, 1862, Cnr Immink Drive and, Chris Hani Rd,  ",
        city: "Diepkloof Zone",
        state: "Johannesburg",
        zip: "02420",
        price: "$1,200,000",
        title: "Dr SK Matseke Memorial Hospital",
        bedrooms: 5,
        bathrooms: 4,
        long: -26.258390,
        lat: 27.935620,
        pic: "./assets/img/diepkloof.jpg",
        thumb: "./assets/img/diepkloof.jpg",
        tags: "colonial",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 1,
            name: "Caroline Kingsley",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
        }
    },
    {
        id: 3,
        address: "Moshoeshoe St,",
        city: " Vanderbijlpark",
        state: "Johannesburg",
        zip: "02420",
        price: "$825,000",
        title: "Naledi-Nkayezi Hospital",
        bedrooms: 5,
        bathrooms: 4,
        long: -26.616440,
        lat: 27.855318,
        pic: "./assets/img/naledi.png",
        thumb: "./assets/img/naledi.png",
        tags: "contemporary",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 2,
            name: "Michael Jones",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michael_jones.jpg"
        }
    },
    {
        id: 4,
        address: "121 Eloff St",
        city: "Selby",
        state: "Johannesburg",
        zip: "02420",
        price: "$930,000",
        title: "Solomon Stix Morena",
        bedrooms: 5,
        bathrooms: 4,
        long: -26.221106,
        lat: 28.043206,
        pic: "./assets/img/solomostix.jpg",
        thumb: "./assets/img/solomostix.jpg",
        tags: "victorian",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 3,
            name: "Jonathan Bradley",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jonathan_bradley.jpg"
        }
    },
    {
        id: 5,
        address: "Sam Hancock St",
        city: " Braampark",
        state: "Johannesburg",
        zip: "02420",
        price: "$850,000",
        title: "Queen Victoria Hospital",
        bedrooms: 3,
        bathrooms: 2,
        long: -26.186801,
        lat: 28.041035,
        pic: "./assets/img/victoria.jpeg",
        thumb: "./assets/img/victoria.jpeg",
        tags: "contemporary",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 4,
            name: "Jennifer Wu",
            title: "Senior Broker",
            picture: "./assets/img/victoria.jpeg"
        }
    }
];
/* harmony default export */ __webpack_exports__["a"] = (hospitals);
//# sourceMappingURL=hospitals.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_auth__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.initializeApp({
            apiKey: "AIzaSyB-aw2WiNHhK10A-4gcqbc1ReA8fiDYddY",
            authDomain: "courier-logistics.firebaseapp.com",
            databaseURL: "https://courier-logistics.firebaseio.com",
            projectId: "courier-logistics",
            storageBucket: "courier-logistics.appspot.com",
            messagingSenderId: "1086581182333"
        });
        var unsubscribe = __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.auth().onAuthStateChanged(function (user) {
            if (!user) {
                _this.rootPage = 'LoginPage';
                unsubscribe();
            }
            else {
                _this.rootPage = 'TabsPage';
                unsubscribe();
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/kolawole/Documents/freelance/sandile/event-tutorial-1/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/kolawole/Documents/freelance/sandile/event-tutorial-1/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.js.map