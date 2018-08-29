import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {CustomerFormComponent} from './customer-form/customer-form.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {HttpClientModule} from '@angular/common/http';
import {ItemFormComponent} from './item-form/item-form.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import { PlaceOrderComponent } from './place-order/place-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerFormComponent,
    ItemFormComponent,
    DashboardComponent,
    PlaceOrderComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
