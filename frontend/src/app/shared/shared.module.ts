import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DateFieldComponent} from './date-field/date-field.component';
import {CalendarModule} from "primeng/calendar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LogoComponent} from './logo/logo.component';
import {PasswordFieldComponent} from './password-field/password-field.component';
import {PasswordModule} from "primeng/password";
import {PrimaryBtnComponent} from './primary-btn/primary-btn.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {TextFieldComponent} from './text-field/text-field.component';
import {InputMaskModule} from "primeng/inputmask";
import {BaseFieldComponent} from './base-field.component';
import {InputTextModule} from "primeng/inputtext";
import {CheckboxFieldComponent} from './checkbox-field/checkbox-field.component';
import {CheckboxModule} from "primeng/checkbox";
import {DropdownFieldComponent} from './dropdown-field/dropdown-field.component';
import {DropdownModule} from "primeng/dropdown";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {NumberFieldComponent} from './number-field/number-field.component';
import {InputNumberModule} from "primeng/inputnumber";
import {MultiselectChipsComponent} from './multiselect-chips/multiselect-chips.component';
import {MultiSelectModule} from "primeng/multiselect";


@NgModule({
  declarations: [
    DateFieldComponent,
    LogoComponent,
    PasswordFieldComponent,
    PrimaryBtnComponent,
    SidenavComponent,
    TextFieldComponent,
    BaseFieldComponent,
    CheckboxFieldComponent,
    DropdownFieldComponent,
    NumberFieldComponent,
    MultiselectChipsComponent
  ],
  exports: [
    TextFieldComponent,
    PrimaryBtnComponent,
    PasswordFieldComponent,
    DateFieldComponent,
    LogoComponent,
    SidenavComponent,
    CheckboxFieldComponent,
    DropdownFieldComponent,
    NumberFieldComponent,
    MultiselectChipsComponent
  ],
    imports: [
        CommonModule,
        CalendarModule,
        FormsModule,
        PasswordModule,
        RouterLinkActive,
        FaIconComponent,
        RouterLink,
        InputMaskModule,
        InputTextModule,
        CheckboxModule,
        DropdownModule,
        ToastModule,
        ConfirmDialogModule,
        ReactiveFormsModule,
        InputNumberModule,
        MultiSelectModule
    ]
})
export class SharedModule { }
