import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  template: ''
})
export class BaseFieldComponent {

  @Input() formGroup!: FormGroup;
  @Input() model!: any;

  @Input() id: string = '';
  @Input() name: string = '';
  @Input() label : string = '';
  @Input() value: any;
  @Input() placeholder: string = '';
  @Input() formInline : boolean = false;

  @Input() readonly : boolean = false;
  @Input() required : boolean = false;
  @Input() disabled : boolean = false;

  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>();
}
