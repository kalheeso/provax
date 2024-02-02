import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.sass'
})
export class LogoComponent {
  @Input() justIcon!: boolean;
  @Input() hideText: boolean = false;
}
