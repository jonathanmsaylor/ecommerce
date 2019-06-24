import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { ArtPageComponent } from './art-page/art-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CheckoutPageComponent,
    ArtPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
