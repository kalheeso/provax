import {Component, OnInit} from '@angular/core';
import {AgendaService} from "../../core/services/agenda/agenda.service";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import Agenda from "../../core/entities/Agenda";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {UserService} from "../../core/services/user/user.service";
import {OverlayService} from "../../core/services/overlay/overlay.service";
import User from "../../core/entities/User";
import {BaixaVacinaComponent} from "../../dialogs/baixa-vacina/baixa-vacina.component";

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.sass',
  providers: [DialogService]
})
export class AppointmentsComponent implements OnInit{
  constructor(public agendaService:AgendaService, private dialogService: DialogService, private userService : UserService, private overlayService:OverlayService){}

  displayedColumnsAdmin = ['Paciente', 'Data', 'Vacina', 'Situação', 'Dose', 'Ação']

  nextAppointment : Agenda[] = []
  futureAppointments : Agenda[] = []
  allAppointments : Agenda[] = []

  usuariosAdmin : User[] = []

  ref: DynamicDialogRef | undefined;

  ngOnInit(): void {
    this.overlayService.updateOverlayState(true)
      this.agendaService.getAllAppointments().subscribe((appointments:Agenda[]) => {
        this.allAppointments = appointments

        this.usuariosAdmin = this.agendaService.getUsersFromAppointments(this.allAppointments)

        this.overlayService.updateOverlayState(false)
      })
  }

  openBaixaModalAdmin(appointment: any){
    this.ref = this.dialogService.open(BaixaVacinaComponent, {
      header: 'Situação do Agendamento',
      width: '500px',
      height: '400px',
      baseZIndex: 10000,
      styleClass: 'baixa-vacina-component',
      maximizable: false,
      dismissableMask: true,
      data: {
        appointment: appointment
      }
    })

    this.ref.onClose.subscribe((result : boolean) => {
      if(result) this.getAllAppointments()
    })
  }

  getAllAppointments(){
    this.overlayService.updateOverlayState(true)
      this.agendaService.getAllAppointments().subscribe((appointments:Agenda[]) => {
        this.allAppointments = appointments

        this.overlayService.updateOverlayState(false)
      })
  }

  protected readonly faEdit = faEdit;
}
