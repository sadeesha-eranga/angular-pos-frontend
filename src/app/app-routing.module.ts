import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerFormComponent} from './customer-form/customer-form.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ItemFormComponent} from './item-form/item-form.component';
import {PlaceOrderComponent} from './place-order/place-order.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'customers', component: CustomerFormComponent },
  { path: 'items', component: ItemFormComponent },
  { path: 'place-order', component: PlaceOrderComponent },
  { path: 'dashboard', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
