import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { Child2Component } from './components/child2/child2.component';
import { LocalService } from './services/local.service';
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    Child2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
