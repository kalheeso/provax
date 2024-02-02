import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  private overlayState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public overlayState$: Observable<boolean> = this.overlayState.asObservable()

  updateOverlayState(state:boolean){
    this.overlayState.next(state)
  }
}
