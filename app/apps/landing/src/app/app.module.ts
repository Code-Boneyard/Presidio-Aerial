import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavModule } from './nav/nav.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, NavModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
