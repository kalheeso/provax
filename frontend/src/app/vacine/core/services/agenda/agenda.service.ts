import {Injectable} from '@angular/core';
import Agenda from "../../entities/Agenda";
import Vacina from "../../entities/Vacina";
import {BaseService} from "../base.service";
import {BaseServiceProvider} from "../base-service.provider";
import {map, Observable} from "rxjs";
import {FormGroup, Validators} from "@angular/forms";
import User from "../../entities/User";

@Injectable({
  providedIn: 'root'
})
export class AgendaService extends BaseService{

  constructor(private baseServiceProvider: BaseServiceProvider) {
    super(baseServiceProvider, '/agenda');
  }

  getNextAppointment(appointments : Agenda[]) : any{
    appointments = appointments.filter((item:any) => {
      let dataAp = new Date(item.data)
      return dataAp >= new Date() && item.situacao != 2
    }).sort((agendaA, agendaB) => {
      let dataA = new Date(agendaA.data)
      let dataB = new Date(agendaB.data)

      return dataA.getTime() - dataB.getTime()
    })

    return appointments
  }

  getPastAppointments(appointments : Agenda[]):Agenda[]{
    appointments = appointments.filter((item:any) => {
      let dataAp = new Date(item.data)
      return dataAp <= new Date() || item.situacao == 2
    })

    return appointments
  }

  getUserAppointments(id: number):Observable<Agenda[]>{
    let params = {
      "usuarioId": id
    }

    return this.getAppointmentsWithParams(params).pipe(
      map((response:any) => {
        let i = 1
        let dosesVacina = 0
        return response.map((agenda:any) => {
          if(agenda.vacina.doses != dosesVacina) {
            dosesVacina = agenda.vacina.doses
            i = 1
          }

          if(i > dosesVacina) i = 1

          let vacina = new Vacina(agenda.vacina.id, agenda.vacina.titulo, i, agenda.vacina.periodicidade, agenda.vacina.intervalo, agenda.vacina.situacao)

          ++i
          return new Agenda(agenda.id, agenda.data,  agenda.situacao, vacina, agenda.usuarioId)
        })
      })
    )
  }

  getAllAppointments(){
    return this.get().pipe(
      map((response:any) => {
        let i = 1
        let dosesVacina = 0

        return response.map((agenda:any) => {
          if(agenda.vacina.doses != dosesVacina) {
            dosesVacina = agenda.vacina.doses
            i = 1
          }

          if(i > dosesVacina) i = 1

          let vacina = new Vacina(agenda.vacina.id, agenda.vacina.titulo, i, agenda.vacina.periodicidade, agenda.vacina.intervalo, agenda.vacina.situacao)
          let usuario = agenda.usuario

          ++i
          return new Agenda(agenda.id, agenda.dataSituacao,  agenda.situacao, vacina, usuario)
        })
      })
    )
  }

  getUsersFromAppointments(appointments : Agenda[]){
    let users : User[] = []
    let userIds = new Set<number>()
    appointments.forEach(app => {
      if(!userIds.has(app.paciente.id)){
        userIds.add(app.paciente.id)
        users.push(app.paciente)
      }
    })

    return users
  }

  updateSituacao(id : number, situacao : string, observacao : string = ' '){
    let params = {
      "situacao": situacao,
      "id":  id,
      "observacoes": observacao
    }

    return this.putWithParamsAgenda(params)
  }

  getFormGroup() {
    return this.baseServiceProvider.getFormBuilder().group({
      data: ['', Validators.required],
      vacinaId: ['', Validators.required],
      usuarioId: ['', Validators.required]
    })
  }

  incluirAgendamento(formGroup: FormGroup) {
    let body = {
      dataSituacao: formGroup.controls['data'].value,
      usuario: {
        id: formGroup.controls['usuarioId'].value
      },
      vacina: {
        id: formGroup.controls['vacinaId'].value
      },
      situacao: 'AGENDADO'
    }

    if (formGroup.valid) {
      this.overlayService.updateOverlayState(true)
      this.post(body).subscribe({
        next: () => {
          this.baseServiceProvider.getRouter().navigate(['vacine/home/appointments']);
          this.overlayService.updateOverlayState(false)
        },
        error: (error) => {
          this.overlayService.updateOverlayState(false)
          this.baseServiceProvider.getMessageService().add(
            {
              severity: 'error',
              summary: 'Erro',
              detail: error.error
            }
          );
        }
      })
    }else {
      this.baseServiceProvider.getMessageService().add({severity:'error', summary: 'Erro', detail: 'Preencha todos os campos corretamente!'});
    }
  }

  getPacienteId() : number {
    return this.authService.getIdUsuarioLogado();
  }


}
