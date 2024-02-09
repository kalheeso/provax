import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BaseFieldComponent} from "../base-field.component";

@Component({
  selector: 'app-password-field',
  templateUrl: './password-field.component.html',
  styleUrl: './password-field.component.sass'
})
export class PasswordFieldComponent extends BaseFieldComponent{
}
