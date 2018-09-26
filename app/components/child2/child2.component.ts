import { Component, OnInit ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  constructor() { }
  
  txt:string; 
  @Output()  inputContent=new EventEmitter();
  content(e){
    if(e.keyCode==13)
    {
      this.inputContent.emit(this.txt);
      console.log("child2");
      console.log(this.txt);
      this.txt="";
    }
  }

  ngOnInit() {
  }

}
