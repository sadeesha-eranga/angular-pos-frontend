import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {CustomerFormComponent} from './components/customer-form/customer-form.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {HttpClientModule} from '@angular/common/http';
import {ItemFormComponent} from './components/item-form/item-form.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {PlaceOrderComponent} from './components/place-order/place-order.component';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './components/login/login.component';
import {CustomerService} from './services/customer.service';
import {ItemService} from './services/item.service';
import {OrderService} from './services/order.service';
import {MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { DatePickerComponent } from './date-picker/date-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerFormComponent,
    ItemFormComponent,
    DashboardComponent,
    PlaceOrderComponent,
    LoginComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    CustomerService,
    ItemService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
