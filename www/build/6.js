webpackJsonp([6],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalDetailsPageModule", function() { return HospitalDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hospital_details__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HospitalDetailsPageModule = /** @class */ (function () {
    function HospitalDetailsPageModule() {
    }
    HospitalDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__hospital_details__["a" /* HospitalDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__hospital_details__["a" /* HospitalDetailsPage */]),
            ],
        })
    ], HospitalDetailsPageModule);
    return HospitalDetailsPageModule;
}());

//# sourceMappingURL=hospital-details.module.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HospitalDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hospital_hospital__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_spinner_spinner__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_map_map__ = __webpack_require__(212);
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
 * Generated class for the HospitalDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HospitalDetailsPage = /** @class */ (function () {
    function HospitalDetailsPage(actionSheetCtrl, navCtrl, navParams, hospitalProvider, geolocation, zone, platform, localStorage, mapService, loadingCtrl, modalCtrl, spinner, viewCtrl) {
        var _this = this;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hospitalProvider = hospitalProvider;
        this.geolocation = geolocation;
        this.zone = zone;
        this.platform = platform;
        this.localStorage = localStorage;
        this.mapService = mapService;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.spinner = spinner;
        this.viewCtrl = viewCtrl;
        this.addressElement = null;
        this.address = '';
        this.platform.ready().then(function () { return _this.loadMaps(); });
        this.hospital = this.navParams.data;
        this.step = 0;
        this.currentStep = "Hospital";
        hospitalProvider.findById(this.hospital.id).then(function (hospital) { return _this.hospital = hospital; });
    }
    // Available steps
    // "Hospital"
    //"Address",
    //"Time",
    //"Review"
    HospitalDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HospitalDetailsPage');
    };
    HospitalDetailsPage.prototype.loadMaps = function () {
        if (!!google) {
            this.initializeMap();
            this.initAutocomplete();
        }
        else {
            this.errorAlert('Error', 'Something went wrong with the Internet Connection. Please check your Internet.');
        }
    };
    HospitalDetailsPage.prototype.initializeMap = function () {
        var _this = this;
        var that = this;
        that.currentLocation();
        this.zone.run(function () {
            var mapEle = _this.mapElement.nativeElement;
            _this.map = new google.maps.Map(mapEle, {
                zoom: 16,
                center: { lat: 12.971599, lng: 77.594563 },
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }],
                disableDoubleClickZoom: false,
                disableDefaultUI: true,
                zoomControl: false,
                scaleControl: true,
            });
            // Map drag started
            _this.map.addListener('dragstart', function () {
                console.log('Drag start');
            });
            // Map dragging
            _this.map.addListener('drag', function () {
                that.address = 'Searching...';
            });
            //Reload markers every time the map moves
            _this.map.addListener('dragend', function () {
                var map_center = that.getMapCenter();
                var latLngObj = { 'lat': map_center.lat(), 'long': map_center.lng() };
                console.log(latLngObj);
                that.getAddress(latLngObj);
            });
            google.maps.event.addListenerOnce(_this.map, 'idle', function () {
                google.maps.event.trigger(_this.map, 'resize');
                mapEle.classList.add('show-map');
            });
            google.maps.event.addListener(_this.map, 'bounds_changed', function () {
                _this.zone.run(function () {
                    _this.resizeMap();
                });
            });
        });
    };
    HospitalDetailsPage.prototype.initAutocomplete = function () {
        var _this = this;
        this.addressElement = this.searchbar.nativeElement.querySelector('.searchbar-input');
        this.createAutocomplete(this.addressElement).subscribe(function (location) {
            console.log('Searchdata', location);
            var latLngObj = { 'lat': location.lat(), 'long': location.lng() };
            _this.getAddress(latLngObj);
            var options = {
                center: location,
                zoom: 16
            };
            _this.map.setOptions(options);
        });
    };
    HospitalDetailsPage.prototype.currentLocation = function () {
        var _this = this;
        this.spinner.load();
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var latLngObj = { 'lat': position.coords.latitude, 'long': position.coords.longitude };
            // Display  Marker
            _this.map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
            _this.getAddress(latLngObj);
            _this.spinner.dismiss();
            localStorage.setItem('current_latlong', JSON.stringify(latLngObj));
            return latLngObj;
        }, function (err) {
            console.log(err);
        });
    };
    HospitalDetailsPage.prototype.getAddress = function (latLngObj) {
        var _this = this;
        // Get the address object based on latLngObj
        this.mapService.getStreetAddress(latLngObj).subscribe(function (s_address) {
            if (s_address.status == "ZERO_RESULTS") {
                _this.mapService.getAddress(latLngObj).subscribe(function (address) {
                    _this.address = address.results[0].formatted_address;
                    _this.getAddressComponentByPlace(address.results[0], latLngObj);
                }, function (err) { return console.log("Error in getting the street address " + err); });
            }
            else {
                _this.address = s_address.results[0].formatted_address;
                _this.getAddressComponentByPlace(s_address.results[0], latLngObj);
                console.log(_this.address);
            }
        }, function (err) {
            console.log('No Address found ' + err);
        });
    };
    HospitalDetailsPage.prototype.getMapCenter = function () {
        return this.map.getCenter();
    };
    HospitalDetailsPage.prototype.createAutocomplete = function (addressEl) {
        var _this = this;
        var autocomplete = new google.maps.places.Autocomplete(addressEl);
        autocomplete.bindTo('bounds', this.map);
        return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (sub) {
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                var place = autocomplete.getPlace();
                if (!place.geometry) {
                    sub.error({
                        message: 'Autocomplete returned place with no geometry'
                    });
                }
                else {
                    var latLngObj = { 'lat': place.geometry.location.lat(), 'long': place.geometry.location.lng() };
                    _this.getAddress(latLngObj);
                    sub.next(place.geometry.location);
                }
            });
        });
    };
    HospitalDetailsPage.prototype.getAddressComponentByPlace = function (place, latLngObj) {
        var components;
        components = {};
        for (var i = 0; i < place.address_components.length; i++) {
            var ac = place.address_components[i];
            components[ac.types[0]] = ac.long_name;
        }
        var addressObj = {
            street: (components.street_number) ? components.street_number : 'not found',
            area: components.route,
            city: (components.sublocality_level_1) ? components.sublocality_level_1 : components.locality,
            country: (components.administrative_area_level_1) ? components.administrative_area_level_1 : components.political,
            postCode: components.postal_code,
            loc: [latLngObj.long, latLngObj.lat],
            address: this.address
        };
        localStorage.clear();
        localStorage.setItem('carryr_customer', JSON.stringify(addressObj));
        return components;
    };
    HospitalDetailsPage.prototype.resizeMap = function () {
        var _this = this;
        setTimeout(function () {
            google.maps.event.trigger(_this.map, 'resize');
        }, 200);
    };
    HospitalDetailsPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    HospitalDetailsPage.prototype.errorAlert = function (title, message) {
        alert('Error in Alert');
    };
    HospitalDetailsPage.prototype.bookNow = function (hospital) {
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Text',
                    handler: function () {
                        console.log('Text clicked');
                    }
                },
                {
                    text: 'Email',
                    handler: function () {
                        console.log('Email clicked');
                    }
                },
                {
                    text: 'Facebook',
                    handler: function () {
                        console.log('Facebook clicked');
                    }
                },
                {
                    text: 'Twitter',
                    handler: function () {
                        console.log('Twitter clicked');
                    }
                },
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HospitalDetailsPage.prototype.proceedToNextStep = function () {
        if (this.currentStep === "Hospital") {
            this.currentStep = "Address";
            return;
        }
        if (this.currentStep === "Address") {
            this.currentStep = "Time";
            return;
        }
        if (this.currentStep === "Time") {
            this.currentStep = "Review";
            return;
        }
        if (this.currentStep === "Review") {
        }
    };
    HospitalDetailsPage.prototype.validateAddress = function () {
        return true;
    };
    HospitalDetailsPage.prototype.validateDate = function () {
        return true;
    };
    HospitalDetailsPage.prototype.completeBooking = function () {
        if (true === this.validateAddress() && true === this.validateDate()) {
            var loading = this.loadingCtrl.create({
                content: "Completing checkout, please wait..."
            });
            loading.present();
            loading.dismiss();
            // The modal will show "Order complete"
            var myModal_1 = this.modalCtrl.create('BookCompleteModalPage');
            // Emptying the view stack
            this.navCtrl.popToRoot()
                .then(function () {
                myModal_1.present();
            })
                .catch(function (error) {
                console.log("An error has occurred while navigating back to the root view", error);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HospitalDetailsPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchbar', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HospitalDetailsPage.prototype, "searchbar", void 0);
    HospitalDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hospital-details',template:/*ion-inline-start:"/home/kolawole/Documents/freelance/sandile/event-tutorial-1/src/pages/hospital-details/hospital-details.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Book Hospital Ride</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-segment [(ngModel)]="currentStep">\n      <ion-segment-button value="Hospital">\n        Hospital\n      </ion-segment-button>\n      <ion-segment-button value="Address">\n        Address\n      </ion-segment-button>\n      <ion-segment-button value="Time">\n        Time\n      </ion-segment-button>\n      <ion-segment-button value="Review">\n        Review\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  <div [hidden]="currentStep !== \'Hospital\'">\n    <ion-card *ngIf="hospital.id">\n      <img src="{{hospital.pic}}" />\n      <ion-card-content>\n        <h2 class="card-title">{{hospital.title}}</h2>\n        <p>{{hospital.address}}, {{hospital.city}} {{hospital.state}}</p>\n      </ion-card-content>\n      <ion-list>\n\n\n      </ion-list>\n    </ion-card>\n  </div>\n  <section [hidden]="currentStep !== \'Address\'">\n    <ion-buttons float-end class="current-location">\n      <button ion-button icon-only (click)="currentLocation()">\n        <img src="./assets/icon/current-location.png" alt="">\n      </button>\n    </ion-buttons>\n\n    <ion-searchbar autocorrect="off" autocapitalize="off" spellcheck="off" #searchbar placeholder="Search..." class="search-box"></ion-searchbar>\n\n    <div #map id="map" class="map"></div>\n    <div class="centerMarker"></div>\n    <div class="address-view">\n      <ion-list>\n\n        <ion-item no-lines class="address-item">\n          <ion-label stacked class="title-label">ADDRESS</ion-label>\n          <ion-textarea class="address" [(ngModel)]="address"></ion-textarea>\n        </ion-item>\n        <ion-item>\n        </ion-item>\n      </ion-list>\n\n    </div>\n  </section>\n  <div [hidden]="currentStep !== \'Time\'">\n    <ion-item>\n      <ion-label>Date</ion-label>\n      <ion-datetime displayFormat="MMM DD, YYYY HH:mm" [(ngModel)]="date"></ion-datetime>\n    </ion-item>\n  </div>\n  <div [hidden]="currentStep !== \'Review\'">\n      <ion-item>\n          <ion-icon item-left name="leaf"></ion-icon>\n          <h3>From</h3>\n          <ion-note item-right>{{hospital.address}}</ion-note>\n        </ion-item>\n        <ion-item>\n            <ion-icon item-left name="leaf"></ion-icon>\n            <h3>From</h3>\n            <ion-note item-right>{{address}}</ion-note>\n          </ion-item>\n        <ion-item>\n            <ion-icon item-left name="leaf"></ion-icon>\n            <h3>Date</h3>\n            <ion-note item-right>{{date}}</ion-note>\n          </ion-item>\n\n  </div>\n  <ion-footer>\n    <button ion-button color="primary" block (click)=proceedToNextStep() *ngIf="currentStep !== \'Review\'">\n      Proceed\n    </button>\n    <button ion-button color="primary" block (click)=completeBooking() *ngIf="currentStep === \'Review\'">\n      Make Booking\n    </button>\n  </ion-footer>\n</ion-content>'/*ion-inline-end:"/home/kolawole/Documents/freelance/sandile/event-tutorial-1/src/pages/hospital-details/hospital-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_hospital_hospital__["a" /* HospitalProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__providers_map_map__["a" /* MapProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_spinner_spinner__["a" /* SpinnerProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], HospitalDetailsPage);
    return HospitalDetailsPage;
}());

//# sourceMappingURL=hospital-details.js.map

/***/ })

});
//# sourceMappingURL=6.js.map