import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import User from "../../entities/User";
import Gender from "../../entities/gender";
import {BaseService} from "../base.service";
import {BaseServiceProvider} from "../base-service.provider";
import {catchError, from, map, Observable} from "rxjs";
import Allergy from "../../entities/Allergy";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService{

  constructor(private baseServiceProvider : BaseServiceProvider) {
    super(baseServiceProvider,  '/usuario');
  }

  getFormGroup(): FormGroup {
    return new FormBuilder().group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dataNascimento: ['', Validators.required],
      sexo: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      uf: ['', Validators.required],
      setor: ['', Validators.required],
      cidade: ['', Validators.required],
      alergias: [[]],
    });
  }

  getUser(id: number) : Observable<User> {
    return this.getById(id);
  }

  getUsuarioLogado(): Observable<User> {
    const cachedUser = sessionStorage.getItem('usuarioLogado');

    if (cachedUser) {
      return new Observable<User>(subscriber => {
        subscriber.next(JSON.parse(cachedUser));
      });
    } else {
      return from(this.getUser(this.authService.getIdUsuarioLogado())).pipe(
        map((usuario: User) => {
          usuario.alergias = usuario.alergias.map((alergia: Allergy) => {
            return new Allergy(alergia.id, alergia.nome, alergia.vacina, alergia.vacinaId);
          })
          sessionStorage.setItem('usuarioLogado', JSON.stringify(usuario));
          return usuario;
        }),
        catchError(error => {
          return new Observable<User>();
        })
      );
    }
  }

  getGenders(): Gender[]{
    return [
      new Gender('m', 'Masculino'),
      new Gender('f', 'Feminino')
    ];
  }

  incluirUsuario(formGroup: FormGroup, proximaRota: string) {
    if (formGroup.valid) {
      this.overlayService.updateOverlayState(true)

      let body = formGroup.value
      delete body['senhaConfirmacao']

      let obs = this.http.post<any>(`${this.apiUrl}` + '/auth/register', body, {headers: this.headers})
        .pipe(
          map(data => {
            this.messageService.add({severity: 'success', summary: 'Sucesso!', detail: 'Registro cadastrado com sucesso!'});
            return data;
          })
        )

      obs.subscribe({
        next: () => {
          this.router.navigate([proximaRota]);
          this.overlayService.updateOverlayState(false)
        },
        error: (error) => {
          this.overlayService.updateOverlayState(false)
          this.messageService.add(
            {
              severity: 'error',
              summary: 'Erro',
              detail: error.error
            }
          );
        }
      })
    }

  }
}
