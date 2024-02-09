import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "./login/auth.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {FormBuilder} from "@angular/forms";
import {OverlayService} from "./overlay/overlay.service";

@Injectable({
    providedIn: 'root'
})
export class BaseServiceProvider{
  protected constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private confirmationService: ConfirmationService,
    private messageService : MessageService,
    private formBuilder : FormBuilder,
    private overlayService : OverlayService
  ) {
  }

  public getHttp(): HttpClient {
    return this.http;
  }

  public getRouter(): Router {
    return this.router;
  }

  public getAuthService(): AuthService {
    return this.authService;
  }

  public getConfirmationService() {
    return this.confirmationService;
  }

  public getMessageService() {
    return this.messageService;
  }

  public getFormBuilder() {
    return this.formBuilder;
  }

  public getOverlayService(){
    return this.overlayService
  }
}
