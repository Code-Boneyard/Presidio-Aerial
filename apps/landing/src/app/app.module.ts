import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutes } from './app.routes';
import { FooterComponent } from './nav/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule,
    AppRoutes,
    HttpClientModule, 
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
