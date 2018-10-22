import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
//TodolistComponent是组件类
export class TodolistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //:跟类型
  title:string='My ToDoList';
  txt:string;
  counter:number=0;
  arr:Msg[]=[];
  getvalue(e){
      if(e.keyCode==13){    
        this.arr.push(new Msg(this.txt,false));//{title:this.txt,done:false}
        this.txt='';
      }
  }
  count(){
    this.counter=0;
    //forEach循环；()=>{}箭头函数
    this.arr.forEach((value,index)=>{
      if(value.done){
        this.counter++;
      }
    });
  }
  delete(idx){
    this.arr.splice(idx,1);
    this.count();
  }
  change(idx){
    this.arr[idx].done=!this.arr[idx].done;
    this.count();
  }
}
//声明类  暴露类加export，其他文件可引用
export class Msg{
  constructor(public title:string,public done:boolean){
    
  }
}
