import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './layout/breadcrumbs/breadcrumbs.component';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BodyComponent } from './layout/body/body.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { AppointementsComponent } from './pages/appointements/appointements.component';
import { ConsultationComponent } from './pages/consultation/consultation.component';
import { SettingComponent } from './pages/setting/setting.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientFormComponent } from './pages/patients/patient-form/patient-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { FullCalendarModule } from '@fullcalendar/angular';
import { PaymentsComponent } from './pages/payments/payments.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    DashboardComponent,
    ProfileComponent,
    BodyComponent,
    PatientsComponent,
    AppointementsComponent,
    ConsultationComponent,
    SettingComponent,
    PatientFormComponent,
    PaymentsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NgSelectModule,
    AppRoutingModule,
    NgbModule,
    NgbModalModule,
    FullCalendarModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
