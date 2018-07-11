import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToHospitals(): void {
    this.navCtrl.push("HospitalsPage");
  }

  goToProfile(): void {
    this.navCtrl.push('ProfilePage');
  }

  goToList(): void {
    this.navCtrl.push('EventListPage');
  }

}
