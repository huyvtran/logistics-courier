import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { ActionSheetController, ModalController, LoadingController, IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';
import { HospitalProvider } from '../../providers/hospital/hospital'
import { Geolocation } from '@ionic-native/geolocation';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { SpinnerProvider } from '../../providers/spinner/spinner'
import { MapProvider } from '../../providers/map/map';
declare var google;
/**
 * Generated class for the HospitalDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hospital-details',
  templateUrl: 'hospital-details.html',
})
export class HospitalDetailsPage {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('searchbar', { read: ElementRef }) searchbar: ElementRef;
  addressElement: HTMLInputElement = null;

  map: any;
  address = '';
  step: number;
  hospital: any;
  currentStep: string;
  constructor(public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public hospitalProvider: HospitalProvider,
    public geolocation: Geolocation,
    public zone: NgZone,
    public platform: Platform,
    public localStorage: Storage,
    public mapService: MapProvider,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public spinner: SpinnerProvider,
    public viewCtrl: ViewController,
  ) {
    this.platform.ready().then(() => this.loadMaps());
    this.hospital = this.navParams.data;
    this.step = 0;
    this.currentStep = "Hospital";
    hospitalProvider.findById(this.hospital.id).then(
      hospital => this.hospital = hospital
    );
  }

  // Available steps
  // "Hospital"
  //"Address",
  //"Time",
  //"Review"

  ionViewDidLoad() {
    console.log('ionViewDidLoad HospitalDetailsPage');

  }

  loadMaps() {
    if (!!google) {
      this.initializeMap();
      this.initAutocomplete();
    } else {
      this.errorAlert('Error', 'Something went wrong with the Internet Connection. Please check your Internet.')
    }
  }


  initializeMap() {
    let that = this;
    that.currentLocation();
    this.zone.run(() => {
      var mapEle = this.mapElement.nativeElement;
      this.map = new google.maps.Map(mapEle, {
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
      this.map.addListener('dragstart', function () {
        console.log('Drag start');
      });
      // Map dragging
      this.map.addListener('drag', function () {
        that.address = 'Searching...';
      });
      //Reload markers every time the map moves
      this.map.addListener('dragend', function () {
        let map_center = that.getMapCenter();
        let latLngObj = { 'lat': map_center.lat(), 'long': map_center.lng() };
        console.log(latLngObj);
        that.getAddress(latLngObj);
      });

      google.maps.event.addListenerOnce(this.map, 'idle', () => {
        google.maps.event.trigger(this.map, 'resize');
        mapEle.classList.add('show-map');
      });

      google.maps.event.addListener(this.map, 'bounds_changed', () => {
        this.zone.run(() => {
          this.resizeMap();
        });
      });


    });
  }

  initAutocomplete(): void {
    this.addressElement = this.searchbar.nativeElement.querySelector('.searchbar-input');
    this.createAutocomplete(this.addressElement).subscribe((location) => {
      console.log('Searchdata', location);
      let latLngObj = { 'lat': location.lat(), 'long': location.lng() };
      this.getAddress(latLngObj);
      let options = {
        center: location,
        zoom: 16
      };
      this.map.setOptions(options);
    });
  }

  currentLocation() {
    this.spinner.load();
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let latLngObj = { 'lat': position.coords.latitude, 'long': position.coords.longitude };
      // Display  Marker
      this.map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
      this.getAddress(latLngObj);
      this.spinner.dismiss();
      localStorage.setItem('current_latlong', JSON.stringify(latLngObj));
      return latLngObj;

    }, (err) => {
      console.log(err);
    });
  }

  getAddress(latLngObj) {
    // Get the address object based on latLngObj
    this.mapService.getStreetAddress(latLngObj).subscribe(
      s_address => {
        if (s_address.status == "ZERO_RESULTS") {
          this.mapService.getAddress(latLngObj).subscribe(
            address => {
              this.address = address.results[0].formatted_address;
              this.getAddressComponentByPlace(address.results[0], latLngObj);
            },
            err => console.log("Error in getting the street address " + err)
          )
        } else {
          this.address = s_address.results[0].formatted_address;
          this.getAddressComponentByPlace(s_address.results[0], latLngObj);
          console.log(this.address);
        }
      },
      err => {
        console.log('No Address found ' + err);
      }
    );
  }

  getMapCenter() {
    return this.map.getCenter()
  }

  createAutocomplete(addressEl: HTMLInputElement): Observable<any> {
    const autocomplete = new google.maps.places.Autocomplete(addressEl);
    autocomplete.bindTo('bounds', this.map);
    return new Observable((sub: any) => {
      google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const place = autocomplete.getPlace();
        if (!place.geometry) {
          sub.error({
            message: 'Autocomplete returned place with no geometry'
          });
        } else {
          let latLngObj = { 'lat': place.geometry.location.lat(), 'long': place.geometry.location.lng() }
          this.getAddress(latLngObj);
          sub.next(place.geometry.location);
        }
      });
    });
  }

  getAddressComponentByPlace(place, latLngObj) {
    var components;

    components = {};

    for (var i = 0; i < place.address_components.length; i++) {
      let ac = place.address_components[i];
      components[ac.types[0]] = ac.long_name;
    }

    let addressObj = {
      street: (components.street_number) ? components.street_number : 'not found',
      area: components.route,
      city: (components.sublocality_level_1) ? components.sublocality_level_1 : components.locality,
      country: (components.administrative_area_level_1) ? components.administrative_area_level_1 : components.political,
      postCode: components.postal_code,
      loc: [latLngObj.long, latLngObj.lat],
      address: this.address
    }
    localStorage.clear();
    localStorage.setItem('carryr_customer', JSON.stringify(addressObj));
    return components;
  }

  resizeMap() {
    setTimeout(() => {
      google.maps.event.trigger(this.map, 'resize');
    }, 200);
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  errorAlert(title, message) {
    alert('Error in Alert');
  }

  bookNow(hospital) {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Text',
          handler: () => {
            console.log('Text clicked');
          }
        },
        {
          text: 'Email',
          handler: () => {
            console.log('Email clicked');
          }
        },
        {
          text: 'Facebook',
          handler: () => {
            console.log('Facebook clicked');
          }
        },
        {
          text: 'Twitter',
          handler: () => {
            console.log('Twitter clicked');
          }
        },
        {
          text: 'Cancel',

          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();

  }

  proceedToNextStep() {

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
  }

  validateAddress() {
    return true;
  }

  validateDate() {
    return true;
  }
  completeBooking() {

    if (true === this.validateAddress() && true === this.validateDate()) {

      let loading = this.loadingCtrl.create({
        content: "Completing checkout, please wait..."
      });

      loading.present();


      loading.dismiss();

      // The modal will show "Order complete"
      let myModal = this.modalCtrl.create('BookCompleteModalPage');

      // Emptying the view stack
      this.navCtrl.popToRoot()
        .then(() => {
          myModal.present();
        })
        .catch((error) => {
          console.log("An error has occurred while navigating back to the root view", error)
        })

    }
  }
}