import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageModule } from './page/page.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // 引入路由模块
    PageModule, // 引入page模块
    BrowserAnimationsModule, // 引入动画模块
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
