import {Component, Input} from '@angular/core';
import {BaseFieldComponent} from "../base-field.component";

@Component({
  selector: 'app-primary-btn',
  templateUrl: './primary-btn.component.html',
  styleUrl: './primary-btn.component.sass'
})
export class PrimaryBtnComponent extends BaseFieldComponent{

  @Input()
  onClick!: any;

  onClickHandler() : void{
    if (this.onClick){
      this.onClick();
    }
  }
}
