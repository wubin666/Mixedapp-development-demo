import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() {
    let a;
    console

  }
  //constructor()外层写方法和属性
  set(key,value){
    return localStorage.setItem(key,value);
  }
  get(key){
    return localStorage.getItem(key); 
  }
}
