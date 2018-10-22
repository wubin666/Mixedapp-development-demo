import { Component, OnInit, Input, Output,EventEmitter,SimpleChanges, OnChanges } from '@angular/core';
import{ ShareService}from '../../services/share.service'
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges{
  
 
  
  @Input() arr;//arr:string[]; arr:Array<number>;  arr:Array<any>
  @Input() arr1;
  @Output() delIndex:EventEmitter<number>=new EventEmitter<number>();//<number>类型检查
  del(i){
     this.delIndex.emit(i);
  } 
  index=0;
  log(msg){
    console.log(`这是第${this.index++}次调用,调用的钩子函数是${msg}`);
  }
  constructor(private share:ShareService) {
    //this.log('constructor');
    //console.log(this.arr);
  }
  ngOnChanges(changes: SimpleChanges): void {
  //   //this.log('ngOnChanges');
  //   console.log(changes);
  //   for(let item in changes){
  //     //console.log(changes[item].currentValue);
  //     for(let i in changes[item]){
  //         console.log(`属性名是${i},属性值是${changes[item][i]}`)
  //     }
  //   }
  }//只有输入属性变化(地址改变data1赋给data)才会调用；在data中加入数据不会调用

  //msg;
  arr3;
  message:string;
  ngOnInit() {
    this.arr3=this.share.data;
    //this.message="hello"
    // this.log('ngOnInit');
    // console.log(this.arr);
    //this.msg=ajax();
  }//数据初始化

  // ngDoCheck(): void {
  //   this.log('ngDoCheck');
  // }
  // ngAfterContentChecked(): void {
  //   this.log('ngAfterContentChecked');
  // }
  // ngAfterContentInit(): void {
  //   this.log('ngAfterContentInit');
  // }
  // ngAfterViewInit(): void {
  //   this.log('ngAfterViewInit');
  // }
}
