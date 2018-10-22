import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }
  course;
  headers=new HttpHeaders({})
  colorchange(e){
   
    for(var i='7';Number(i)<12;i=String(Number(i)+1))
    {
      document.getElementById(i).style.backgroundColor="white";
    }
    document.getElementById(e).style.backgroundColor="pink";
    // document.getElementById(e).style.color="#FF9966";
    
  }
  ngOnInit(){
    //this.http.get('/api/courses/1').subscribe((data)=>{
     //this.course=data;
    //console.log(data);
    // this.http.post('/api',{name:'wubin',pwd:123456},{headers:this.headers}).subscribe((data)=>{
    //   console.log(data);
    this.http.post('/api',{name:'wb',pwd:'hh'},{headers:this.headers}).subscribe((data)=>{
      console.log(data);
      console.log('lll');
    })
  }
  ngOnDestroy(){
     
  }
  // timer=null;
  // ngOnInit() {
  //   this.timer=setInterval(function(){
  //     console.log(11);
  //   },1000);
  // }
  // ngOnDestroy() {
  //   clearInterval(this.timer);
  // }
}
