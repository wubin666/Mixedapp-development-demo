import { Component, OnInit, EventEmitter,Output,Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  
  @Input() arr:string[];
  @Input() arr1:string[];
  @Output() delIndex=new EventEmitter();
  @Output() changeIndex=new EventEmitter();
  del(i){
    this.delIndex.emit(i);
  }
  delete(n){
    this.changeIndex.emit(n);
  }

  deletelist(idx){
    this.arr.splice(idx,1);
  }
  deletelist1(idx){
    this.arr1.splice(idx,1);
  }
  ngOnInit() {
  }

}
