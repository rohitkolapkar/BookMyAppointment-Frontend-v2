
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ConsumerSignupComponent } from './consumer-signup/consumer-signup.component';
import { ServiceProviderSignupComponent } from './service-provider-signup/service-provider-signup.component';
import { ConsumerHomeComponent } from './consumer-home/consumer-home.component';
import { ServiceProviderHomeComponent } from './service-provider-home/service-provider-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { BookingComponent } from './booking/booking.component';
import { TestMultiStepFormComponent } from './test-multi-step-form/test-multi-step-form.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { ListServicesComponent } from './list-services/list-services.component';
import { ConsumerListComponent } from './consumer-list/consumer-list.component';
import { ServiceProviderListComponent } from './service-provider-list/service-provider-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ConsumerSignupComponent,
    ServiceProviderSignupComponent,
    ConsumerHomeComponent,
    ServiceProviderHomeComponent,
    AdminHomeComponent,
    UserSettingsComponent,
    BookingComponent,
    TestMultiStepFormComponent,
    AddServiceComponent,
    ListServicesComponent,
    ConsumerListComponent,
    ServiceProviderListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    PasswordStrengthMeterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
