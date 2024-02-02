import {Component, Input} from '@angular/core';
import {BaseFieldComponent} from "../base-field.component";

@Component({
  selector: 'app-dropdown-field',
  templateUrl: './dropdown-field.component.html',
  styleUrl: './dropdown-field.component.sass'
})
export class DropdownFieldComponent extends BaseFieldComponent{
  @Input()options: any[] = [];
  @Input()optionLabel: string = '';
  @Input()showClear: boolean = true;
  @Input()optionValue: string = '';
}
