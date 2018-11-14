import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyPage } from '../my/my';

/**
 * Generated class for the SetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set',
  templateUrl: 'set.html',
})
export class SetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  backing(){
    this.navCtrl.push(MyPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SetPage');
  }

}
