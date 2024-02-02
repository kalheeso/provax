import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VacineComponent} from './vacine.component';
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {AppointmentsComponent} from "./pages/appointments/appointments.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {NewAppointmentComponent} from "./pages/new-appointment/new-appointment.component";
import {SignupComponent} from "./pages/signup/signup.component";
import {VaccinesComponent} from "./pages/vaccines/vaccines.component";
import {NewVaccineComponent} from "./pages/new-vaccine/new-vaccine.component";
import {AllergiesComponent} from "./pages/allergies/allergies.component";
import {NewAllergyComponent} from "./pages/new-allergy/new-allergy.component";
import {authGuard} from "./auth.guard";

const routes: Routes = [{ path: '', component: VacineComponent, children: [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent, canActivate: [authGuard],
    children:[
      {path: 'appointments', component: AppointmentsComponent, canActivate: [authGuard]},
      {path: 'profile', component: ProfileComponent, canActivate: [authGuard]},
      {path: 'appointment/new', component: NewAppointmentComponent, canActivate: [authGuard]},
      {path: 'vaccine', component: VaccinesComponent, canActivate: [authGuard]},
      {path: 'vaccine/new', component: NewVaccineComponent, canActivate: [authGuard]},
      {path: 'allergy', component: AllergiesComponent, canActivate: [authGuard]},
      {path: 'allergy/new', component: NewAllergyComponent, canActivate: [authGuard]},
    ]},
  {path: '**', redirectTo: 'login'}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacineRoutingModule { }
