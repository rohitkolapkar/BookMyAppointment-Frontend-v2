import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthguardService } from './_services/authguard.service';

import { ConsumerHomeComponent } from './consumer-home/consumer-home.component';
import { ConsumerSignupComponent } from './consumer-signup/consumer-signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ServiceProviderSignupComponent } from './service-provider-signup/service-provider-signup.component';
import { ServiceProviderHomeComponent } from './service-provider-home/service-provider-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { Role } from './_models/role';
import { BookingComponent } from './booking/booking.component';
import { TestMultiStepFormComponent } from './test-multi-step-form/test-multi-step-form.component';
import { ListServicesComponent } from './list-services/list-services.component';
import { ConsumerListComponent } from './consumer-list/consumer-list.component';
import { ServiceProviderListComponent } from './service-provider-list/service-provider-list.component';
import { ConsumerAppointmentListComponent } from './consumer-appointment-list/consumer-appointment-list.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'settings',
    component:UserSettingsComponent,
    canActivate:[AuthguardService],
    data:{roles:[Role.Consumer,Role.Admin,Role.ServiceProvider]}
  },
  {
    path:'c/signup',
    component:ConsumerSignupComponent
  },
  {
    path:'sp/signup',
    component:ServiceProviderSignupComponent
  },
  {
    path:'c/home',
    component:ConsumerHomeComponent,
    canActivate:[AuthguardService],
    data:{roles:[Role.Consumer]}
  },
  {
    path:'c/book',
    component:BookingComponent,
    canActivate:[AuthguardService],
    data:{roles:[Role.Consumer]}
  },
  {
    path:'c/appointments',
    component:ConsumerAppointmentListComponent,
    canActivate:[AuthguardService],
    data:{roles:[Role.Consumer]}
  },
  {
    path:'sp/home',
    component:ServiceProviderHomeComponent,
    canActivate:[AuthguardService],
    data:{roles:[Role.ServiceProvider]}
  },
  {
    path:'sp/services',
    component:ListServicesComponent,
    canActivate:[AuthguardService],
    data:{roles:[Role.ServiceProvider]}
  },
  
  {
    path:'a/home',
    component:AdminHomeComponent,
    canActivate:[AuthguardService],
    data:{roles:[Role.Admin]}
  },
  {
    path:'a/consumers',
    component:ConsumerListComponent,
    canActivate:[AuthguardService],
    data:{roles:[Role.Admin]}
  },
  {
    path:'a/serviceProviders',
    component:ServiceProviderListComponent,
    canActivate:[AuthguardService],
    data:{roles:[Role.Admin]}
  },
  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//Help:
// Role based authenticate implemented, add roles to route acoording to need
// refer authguard service for more defaultMaxListeners.
// Roles are stored in enum : Role