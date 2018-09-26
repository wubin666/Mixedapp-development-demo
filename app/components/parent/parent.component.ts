import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private local:LocalService) { }
  
  data=[];
  data1=[];
  receive(i){
    this.data.push(i);
    this.local.set('doing',this.data);
  }
  delstr(m){
    this.data1.push(this.data[m]);
    this.data.splice(m,1);
    this.local.set('doing',this.data);
    this.local.set('fin',this.data1);
  }
  changearr(n){
    this.data.push(this.data1[n]);
    this.data1.splice(n,1);
    this.local.set('doing',this.data);
    this.local.set('fin',this.data1);
  }
  ngOnInit() {
    if(localStorage.getItem('doing')){
      console.log(localStorage.getItem('doing'));
      this.data=localStorage.getItem('doing').split(',');
      
    }
    else{}

    if(localStorage.getItem('fin')){
      this.data1=localStorage.getItem('fin').split(',');  
    }
    else{}
    
  }

}
