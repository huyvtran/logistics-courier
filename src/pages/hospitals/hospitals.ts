import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HospitalProvider } from '../../providers/hospital/hospital';

/**
 * Generated class for the HospitalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hospitals',
  templateUrl: 'hospitals.html',
})
export class HospitalsPage {
  hospitals: Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public hospitalProvider: HospitalProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HospitalsPage');
    this.findAll();
  }


  findAll() {
    this.hospitalProvider.findAll()
      .then(data => this.hospitals = data)
      .catch(error => alert(error));
  }

  openHospitalDetail(hospital: any) {
    this.navCtrl.push('HospitalDetailsPage', hospital);
  }
}
