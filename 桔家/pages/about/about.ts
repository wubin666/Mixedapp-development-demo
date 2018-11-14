import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Slides) Slides:Slides;
  isActive=0;
  isClick(i){
    this.isActive =i;
  }
  constructor(public http:HttpClient,public navCtrl: NavController) {
  }
  ionViewDidLoad(){
  }
  change(){
    //console.log(this.Slides.getActiveIndex());
  }
}
