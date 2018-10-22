import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-shequdetail',
  templateUrl: './shequdetail.component.html',
  styleUrls: ['./shequdetail.component.css']
})
export class ShequdetailComponent implements OnInit {
  essayId:number;
  essay;
  constructor(private http:HttpClient,private router:ActivatedRoute) { }

  ngOnInit() {
    this.essayId=this.router.snapshot.params['essayId'];
    this.http.get('/api/essays/'+this.essayId).subscribe(data=>{
        this.essay=data;
        console.log(this.essay);
      }
    )
  }

}