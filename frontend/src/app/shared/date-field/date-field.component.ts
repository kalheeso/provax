import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BaseFieldComponent} from "../base-field.component";

@Component({
  selector: 'app-date-field',
  templateUrl: './date-field.component.html',
  styleUrl: './date-field.component.sass'
})
export class DateFieldComponent extends BaseFieldComponent{

}
