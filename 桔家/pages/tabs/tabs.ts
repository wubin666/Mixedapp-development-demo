import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { APage } from '../a/a';
import { BPage } from '../b/b';
import { MyPage } from '../my/my';
import { ModalController } from 'ionic-angular';
import { AddPage } from '../add/add';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab4Root = APage;
  tab6Root = MyPage;
  //tab5Root = 'BPage';//不用在根目录app.moudule.ts中引用的使用方式
  constructor(public modalCtrl:ModalController) {

  }
  ionViewDidLoad(){
    document.querySelector('#tab-t0-2').addEventListener('click',()=>{
      let profileModal = this.modalCtrl.create(AddPage);
      profileModal.present();
    },false)
  }
}
