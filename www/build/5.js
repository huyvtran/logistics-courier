webpackJsonp([5],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalsPageModule", function() { return HospitalsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hospitals__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HospitalsPageModule = /** @class */ (function () {
    function HospitalsPageModule() {
    }
    HospitalsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__hospitals__["a" /* HospitalsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__hospitals__["a" /* HospitalsPage */]),
            ],
        })
    ], HospitalsPageModule);
    return HospitalsPageModule;
}());

//# sourceMappingURL=hospitals.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HospitalsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hospital_hospital__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the HospitalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HospitalsPage = /** @class */ (function () {
    function HospitalsPage(navCtrl, navParams, hospitalProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hospitalProvider = hospitalProvider;
    }
    HospitalsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HospitalsPage');
        this.findAll();
    };
    HospitalsPage.prototype.findAll = function () {
        var _this = this;
        this.hospitalProvider.findAll()
            .then(function (data) { return _this.hospitals = data; })
            .catch(function (error) { return alert(error); });
    };
    HospitalsPage.prototype.openHospitalDetail = function (hospital) {
        this.navCtrl.push('HospitalDetailsPage', hospital);
    };
    HospitalsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hospitals',template:/*ion-inline-start:"/home/kolawole/Documents/freelance/sandile/event-tutorial-1/src/pages/hospitals/hospitals.html"*/'<!--\n  Generated template for the HospitalsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>hospitals</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let hospital of hospitals">\n        <button ion-item (click)="openHospitalDetail(hospital)">\n            <ion-thumbnail item-left>\n                <img src="{{hospital.thumb}}"/>\n            </ion-thumbnail>\n            <h2>{{hospital.title}}</h2>\n            <p>{{hospital.city}}, {{hospital.state}}</p>\n        </button>\n \n    </ion-item-sliding>\n\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/kolawole/Documents/freelance/sandile/event-tutorial-1/src/pages/hospitals/hospitals.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_hospital_hospital__["a" /* HospitalProvider */]])
    ], HospitalsPage);
    return HospitalsPage;
}());

//# sourceMappingURL=hospitals.js.map

/***/ })

});
//# sourceMappingURL=5.js.map