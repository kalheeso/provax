import {Component, Input} from '@angular/core';
import {BaseFieldComponent} from "../base-field.component";

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.sass'
})
export class TextFieldComponent extends BaseFieldComponent{

  @Input() mask !: string;
}
