import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VacineRoutingModule} from './vacine-routing.module';
import {VacineComponent} from "./vacine.component";
import {ProfileComponent} from './pages/profile/profile.component';
import {SharedModule} from "../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from './pages/login/login.component';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {AppointmentsComponent} from './pages/appointments/appointments.component';
import {NewAppointmentComponent} from './pages/new-appointment/new-appointment.component';
import {HomeComponent} from './pages/home/home.component';
import {TableModule} from "primeng/table";
import {SignupComponent} from './pages/signup/signup.component';
import {VaccinesComponent} from './pages/vaccines/vaccines.component';
import {NewVaccineComponent} from './pages/new-vaccine/new-vaccine.component';
import {AllergiesComponent} from './pages/allergies/allergies.component';
import {NewAllergyComponent} from './pages/new-allergy/new-allergy.component';
import {ButtonModule} from "primeng/button";
import {AuthService} from "./core/services/login/auth.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BearerInterceptor} from "./core/interceptors/bearer.interceptor";
import {BlockUIModule} from "primeng/blockui";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import { FutureAppointmentsComponent } from './dialogs/future-appointments/future-appointments.component';
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import { BaixaVacinaComponent } from './dialogs/baixa-vacina/baixa-vacina.component';
import {InputTextareaModule} from "primeng/inputtextarea";
import { DeleteModalComponent } from './dialogs/delete-modal/delete-modal.component';


@NgModule({
  declarations: [
    VacineComponent,
    ProfileComponent,
    LoginComponent,
    AppointmentsComponent,
    NewAppointmentComponent,
    HomeComponent,
    SignupComponent,
    VaccinesComponent,
    NewVaccineComponent,
    AllergiesComponent,
    NewAllergyComponent,
    FutureAppointmentsComponent,
    BaixaVacinaComponent,
    DeleteModalComponent,
  ],
    imports: [
        CommonModule,
        VacineRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        FaIconComponent,
        TableModule,
        ButtonModule,
        HttpClientModule,
        BlockUIModule,
        ProgressSpinnerModule,
        ConfirmDialogModule,
        InputTextModule,
        DropdownModule,
        InputTextareaModule
    ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BearerInterceptor,
      multi: true
    }
  ]
})
export class VacineModule {
}
