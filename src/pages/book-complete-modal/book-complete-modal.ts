import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the BookCompleteModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-complete-modal',
  templateUrl: 'book-complete-modal.html',
})
export class BookCompleteModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,    public viewCtrl : ViewController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookCompleteModalPage');
  }
  returnHome() {
    this.viewCtrl.dismiss()
  }
}
