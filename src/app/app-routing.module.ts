import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  

import {​​​ RegisterComponent }​​​ from'./register/register.component';


import {​​​ PaymentComponent }​​​ from'./payment/payment.component';

import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ProceedComponent } from './proceed/proceed.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

const routes: Routes = [

{​​​"path":"",pathMatch:'full',redirectTo:'/homepage'}​​​,
{​​​"path":"adminlogin",component:AdminloginComponent}​​​,
{​​​"path":"admin",component:AdminComponent}​​​,
{​​​"path":"login",component:LoginComponent}​​​,
{​​​"path":"register",component:RegisterComponent}​​​,
{​​​"path":"user",component:UserComponent}​​​,
{​​​"path":"proceed",component:ProceedComponent}​​​,

{​​​"path":"payment",component:PaymentComponent}​​​,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

