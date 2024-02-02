import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../core/services/login/login.service";
import {faLock, faUser} from "@fortawesome/free-solid-svg-icons";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent implements OnInit{

  loginFormGroup!: FormGroup;

  constructor(private router: Router,
              private loginService: LoginService,
              private messageService:MessageService) {
  }

  ngOnInit(): void {
    this.loginFormGroup = this.loginService.getFormGroup();
  }

  doLogin():void{
    if (this.loginFormGroup.valid){
      this.loginService.doLogin(this.loginFormGroup.value);
    }
    else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Dados Inválidos',
        detail: 'Preencha os dados corretamente.'
      })
    }
  }

  createAccount() {
    this.router.navigate(['/vacine/signup']);
  }

  protected readonly faUser = faUser;

  protected readonly faLock = faLock;
}
