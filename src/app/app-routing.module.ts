import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerFormComponent} from './components/customer-form/customer-form.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ItemFormComponent} from './components/item-form/item-form.component';
import {PlaceOrderComponent} from './components/place-order/place-order.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './auth.guard';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {
    path: 'customers',
    component: CustomerFormComponent,
    canActivate: [AuthGuard]
  },
  {path: 'items', component: ItemFormComponent, canActivate: [AuthGuard]},
  {path: 'place-order', component: PlaceOrderComponent, canActivate: [AuthGuard]},
  {path: 'login', redirectTo: ''},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
