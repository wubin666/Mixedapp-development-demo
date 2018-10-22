import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import {ShareService} from '../../services/share.service'
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers:[CommonService]
})
export class ParentComponent implements OnInit {
  constructor(private share:ShareService) { 
  
  }
  add(){
    this.share.add(100);
  }
  data;
  data1=['a','b','c','d'];
  del(i){
    this.data.splice(i,1);
    //this.local.set('list',this.data);
  }
  ngOnInit() {
    // if(this.local.get('list')){
    //   this.data=this.local.get('list').split(',');
    //   console.log(this.data);
    // }else{
    //   this.data=[1,2,3,4,5,6,7];
    //   console.log(this.data);
    // }
    //this.local.set('name','liu')
    //setTimeout(()=>{
    //  this.data=this.data1;
    //},3000)
    // setInterval(()=>{
    //   this.data.push(2);
    // },1000);
  }

}
