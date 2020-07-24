import { AuthenticationRoutingModule } from './authentication-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';


//https://malcoded.com/posts/angular-fundamentals-modules/
//https://angular.io/guide/lazy-loading-ngmodules
// E:\VeggiesFrontEndWS\BVegan\Veggies>ng generate module products --route products --module app.module
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ],
  exports: [LoginComponent]
})
export class AuthenticationModule { }
