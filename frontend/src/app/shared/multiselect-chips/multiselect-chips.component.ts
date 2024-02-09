import {Component, Input} from '@angular/core';
import {BaseFieldComponent} from "../base-field.component";

@Component({
  selector: 'app-multiselect-chips',
  templateUrl: './multiselect-chips.component.html',
  styleUrl: './multiselect-chips.component.sass'
})
export class MultiselectChipsComponent extends BaseFieldComponent{
  @Input()options: any[] = [];
  @Input()optionLabel: string = '';
  @Input()showClear: boolean = true;
  @Input()optionValue: string = '';
}
