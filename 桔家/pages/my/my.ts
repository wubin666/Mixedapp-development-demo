import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SetPage } from '../set/set';

/**
 * Generated class for the MyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  setting(){
    this.navCtrl.push(SetPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPage');
  }

}
