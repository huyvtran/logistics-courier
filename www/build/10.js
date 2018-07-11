webpackJsonp([10],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventCreatePageModule", function() { return EventCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_create__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventCreatePageModule = /** @class */ (function () {
    function EventCreatePageModule() {
    }
    EventCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__event_create__["a" /* EventCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__event_create__["a" /* EventCreatePage */]),
            ],
        })
    ], EventCreatePageModule);
    return EventCreatePageModule;
}());

//# sourceMappingURL=event-create.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_event__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventCreatePage = /** @class */ (function () {
    function EventCreatePage(navCtrl, eventProvider) {
        this.navCtrl = navCtrl;
        this.eventProvider = eventProvider;
    }
    EventCreatePage.prototype.createEvent = function (eventName, eventDate, eventPrice, eventCost) {
        var _this = this;
        this.eventProvider
            .createEvent(eventName, eventDate, eventPrice, eventCost)
            .then(function (newEvent) {
            _this.navCtrl.pop();
        });
    };
    EventCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-event-create",template:/*ion-inline-start:"/home/kolawole/Documents/freelance/sandile/event-tutorial-1/src/pages/event-create/event-create.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>New Event</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label stacked>Event Name</ion-label>\n    <ion-input [(ngModel)]="eventName" type="text"\n    placeholder="What\'s your event\'s name?">\n    </ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Price</ion-label>\n    <ion-input [(ngModel)]="eventPrice" type="number"\n    placeholder="How much will guests pay?">\n    </ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Cost</ion-label>\n    <ion-input [(ngModel)]="eventCost" type="number"\n    placeholder="How much are you spending?">\n    </ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Event Date</ion-label>\n    <ion-datetime displayFormat="D MMM, YY" pickerFormat="DD MMM YYYY"\n    [(ngModel)]="eventDate">\n    </ion-datetime>\n  </ion-item>\n\n  <button ion-button block\n    (click)="createEvent(eventName, eventDate, eventPrice, eventCost)">\n    Create Event\n  </button>\n</ion-content>'/*ion-inline-end:"/home/kolawole/Documents/freelance/sandile/event-tutorial-1/src/pages/event-create/event-create.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */]])
    ], EventCreatePage);
    return EventCreatePage;
}());

//# sourceMappingURL=event-create.js.map

/***/ })

});
//# sourceMappingURL=10.js.map