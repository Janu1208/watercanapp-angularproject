import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderCansComponent } from './order-cans/order-cans.component';
import { ReserveCanComponent } from './reserve-can/reserve-can.component';
import { ReserveOrderCanComponent } from './reserve-order-can/reserve-order-can.component';
import { ReserveModifyOrderComponent } from './reserve-modify-order/reserve-modify-order.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { HomeComponent } from './home/home.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ViewstockComponent } from './viewstock/viewstock.component';
import { VieworderComponent } from './vieworder/vieworder.component';
import { ViewreserveComponent } from './viewreserve/viewreserve.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { AdminviewstockComponent } from './adminviewstock/adminviewstock.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';




const routes: Routes = [
{path: 'userlogin', component: UserLoginComponent},
{path: 'register', component: UserRegisterComponent},
{path: 'adminlogin', component: AdminLoginComponent},
{ path:'orderCans',component:OrderCansComponent},
{path: 'reserveCan', component: ReserveCanComponent},
 {path: 'reserveOrderCan', component: ReserveOrderCanComponent},
 {path: 'modifiedReservedCan', component: ReserveModifyOrderComponent},
 {path:'userHome',component:UserHomeComponent},
 { path:'updatestock',component:UpdateStockComponent},
{ path:'viewstock',component:ViewstockComponent},
{path:'adminhome',component:AdminHomeComponent},
{path:'vieworder',component:VieworderComponent},
{path:'viewreserve',component:ViewreserveComponent},
{path:'viewusers',component:ViewusersComponent},
{path:'adminviewstock',component:AdminviewstockComponent},
{path:'mainHome',component:HomeComponent},
{ path: '', redirectTo: 'mainHome', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
