import {NgModule, OnInit} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerFormComponent} from './components/customer-form/customer-form.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ItemFormComponent} from './components/item-form/item-form.component';
import {PlaceOrderComponent} from './components/place-order/place-order.component';
import {LoginComponent} from './components/login/login.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'customers', component: CustomerFormComponent },
  { path: 'items', component: ItemFormComponent },
  { path: 'place-order', component: PlaceOrderComponent },
  { path: 'dashboard', redirectTo: '' },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
