import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodolistComponent } from './components/todolist/todolist.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { CommonService } from './services/common.service';
import { Common2Service } from './services/common2.service';
import {RouterModule,Router} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { CommunityComponent } from './components/community/community.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { TongbudetailComponent } from './components/tongbudetail/tongbudetail.component';
import { HometaskComponent } from './components/hometask/hometask.component';
import { ShequdetailComponent } from './components/shequdetail/shequdetail.component';
@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    ParentComponent,
    ChildComponent,
    HeaderComponent,
    HomeComponent,
    TongbuComponent,
    CourseComponent,
    CommunityComponent,
    TongbudetailComponent,
    HometaskComponent,
    ShequdetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent,children:[
        //{},
      ]},
      {path:'tongbu',component:TongbuComponent},
      {path:'tongbu/:courseId',component:TongbuComponent},
      {path:'course',component:CourseComponent},
      {path:'community',component:CommunityComponent},
      {path:'',redirectTo:'home',pathMatch:"full"},
      {path:"**",component:CommunityComponent}
    ]),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide:CommonService,useClass:Common2Service}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
