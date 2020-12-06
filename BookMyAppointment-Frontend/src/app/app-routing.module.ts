import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsumerSignupComponent } from './consumer-signup/consumer-signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ServiceProviderSignupComponent } from './service-provider-signup/service-provider-signup.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'c/signup',component:ConsumerSignupComponent},
  {path:'sp/signup',component:ServiceProviderSignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
