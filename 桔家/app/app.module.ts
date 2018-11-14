import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { APage } from '../pages/a/a';
import { BPage } from '../pages/b/b';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { MyPage } from '../pages/my/my';
import { AddPage } from '../pages/add/add';
import { SetPage } from '../pages/set/set';
import { SearchPage } from '../pages/search/search';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    APage,
    BPage,
    MyPage,
    AddPage,
    SetPage,
    SearchPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: 'Go Back',
      tabsHideOnSubPages:'true'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    APage,
    BPage,
    MyPage,
    AddPage,
    SetPage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
