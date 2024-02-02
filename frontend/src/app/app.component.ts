import {Component} from '@angular/core';
import {OverlayService} from "./vacine/core/services/overlay/overlay.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'frontend';
  loadRequest: boolean = false

  constructor(private service : OverlayService) {
    this.service.overlayState$.subscribe(state => this.loadRequest = state)
  }
}
