import {Injectable} from '@angular/core';
import {BaseService} from "../base.service";
import {BaseServiceProvider} from "../base-service.provider";
import {AbstractControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user/user.service";
import {formatDate} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class SignupService extends BaseService{

  constructor(private baseServiceProvider : BaseServiceProvider, private userService : UserService ) {
    super(baseServiceProvider, '/usuario');
  }

  getFormGroup() {
    return this.baseServiceProvider.getFormBuilder().group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      senhaConfirmacao: ['', [Validators.required]],
      dataNascimento: [''],
      dataNascimentoForm: ['', Validators.required],
      sexo: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      uf: ['', Validators.required],
      setor: ['', Validators.required],
      cidade: ['', Validators.required],
    });
  }

  incluirUsuario(formGroup: FormGroup) {
    if (formGroup.get('password')?.value != formGroup.get('senhaConfirmacao')?.value) {
      this.baseServiceProvider.getMessageService().add({severity: 'warn', summary: 'Aviso!', detail: 'A senha e a confirmação da senha não são iguais.'});
      return;
    }

    formGroup.patchValue({
      dataNascimento: formatDate(formGroup.controls['dataNascimentoForm'].value, 'yyyy-MM-dd', 'en')
    })

    if (formGroup.invalid) {
      this.exibirMensagensDeAviso(formGroup);
      return;
    }

    this.userService.incluirUsuario(formGroup, 'vacine/home/appointments');
  }

  verificarCamposObrigatorios(formGroup: FormGroup): string[] {
    const mensagens: string[] = [];

    const verificarControles = (controles: { [key: string]: AbstractControl }) => {
      for (const controlName in controles) {
        const control: AbstractControl = controles[controlName];

        if (control instanceof FormGroup) {
          verificarControles((control as FormGroup).controls);
        } else if (control.validator) {
          if (control.hasError('required') && !control.value) {
            mensagens.push(`O campo ${controlName} é obrigatório.`);
          }
        }
      }
    };

    verificarControles(formGroup.controls);

    return mensagens;
  }

  exibirMensagensDeAviso(formGroup: FormGroup) {
    const mensagens = this.verificarCamposObrigatorios(formGroup);

    if (mensagens.length > 0) {
      mensagens.forEach(mensagem => {
        this.baseServiceProvider.getMessageService().add({
          severity: 'warn',
          summary: 'Aviso!',
          detail: mensagem
        });
      });
    }
  }
}
