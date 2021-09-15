import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PaymentComponent } from './payment/payment.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ProceedComponent } from './proceed/proceed.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PaymentComponent,
         AdminComponent,
         UserComponent,
         AdminloginComponent,
         ProceedComponent,
         LoginComponent
         
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
