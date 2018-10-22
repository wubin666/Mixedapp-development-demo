import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  essayId:number;
  essays;
  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }
  ngOnInit() {
    this.http.get('/api/essays').subscribe(data=>{
      this.essays=data;
      console.log(data);
      // console.log(this.router.snapshot.queryParams['id']);
    })
  }//钩子函数只是执行一次

}
export class  Essay{
  constructor(
      public id:number,
      public headPortrait:string,
      public picture:string,
      public tname:string,
      public introduce:string,
      public name:string,
      public time:string,
      public reading:number,
      public comment:number,
  ){}
}