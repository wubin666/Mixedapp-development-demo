import { Injectable } from '@angular/core';
import {CommonService} from './Common.service';
import {LogService} from './log.service';

@Injectable()
export class Common2Service implements CommonService{
  set(key,value){
    console.log('set');
    return localStorage.setItem(key,value);
  }
  get(key){
    console.log('get方法调用了');
    return localStorage.getItem(key); 
  }

  constructor(private log:LogService) { }
}
