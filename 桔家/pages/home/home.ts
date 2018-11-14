import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BPage } from '../b/b';
import { HttpClient } from '@angular/common/http';
import { SearchPage } from '../search/search';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  icons:string='camera';
  items = [];
  isActive=0;
  isClick(i){
    this.isActive =i;
  }
  constructor(public http:HttpClient,public navCtrl: NavController) {
    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
  }
  search(){
    this.navCtrl.push(SearchPage);
  }
  
  doInfinite(infiniteScroll) {
    this.http.get('/api/courses').subscribe(data=>{
      console.log(data);
      infiniteScroll.complete();
    })
  //   setTimeout(() => {
  //     for (let i = 0; i < 30; i++) {
  //       this.items.push( this.items.length );
  //     }
  //     infiniteScroll.complete();
  //     if(this.items.length>90){
  //       infiniteScroll.enable();//可传值true/false
  //     }
  //   }, 500);
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
