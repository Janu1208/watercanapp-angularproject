import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderCansComponent } from './order-cans/order-cans.component';
import { UserOperationsHeaderComponent } from './user-operations-header/user-operations-header.component';
import { ReserveCanComponent } from './reserve-can/reserve-can.component';
import { ReserveOrderCanComponent } from './reserve-order-can/reserve-order-can.component';
import { ReserveModifyOrderComponent } from './reserve-modify-order/reserve-modify-order.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormsModule} from '@angular/forms';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { RegisterserviceService } from './core/registerservice.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginserviceService } from './core/loginservice.service';
import { AdminloginService } from './core/adminlogin.service';
import { ViewStockService } from './core/viewstock.service';
import { ViewstockComponent } from './viewstock/viewstock.component';



@NgModule({
  declarations: [
    AppComponent,
    OrderCansComponent,
    UserOperationsHeaderComponent,
    ReserveCanComponent,
    ReserveOrderCanComponent,
    ReserveModifyOrderComponent,
    UserHomeComponent,
    UserLoginComponent,
    UserRegisterComponent,
    AdminLoginComponent,
    HeaderComponent,
    HomeComponent,
    ViewstockComponent,
    UpdateStockComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RegisterserviceService,LoginserviceService,AdminloginService,ViewStockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
