import { Component } from '@angular/core';
import {DynamicDialogConfig} from "primeng/dynamicdialog";

@Component({
  selector: 'app-future-appointments',
  templateUrl: './future-appointments.component.html',
  styleUrl: './future-appointments.component.sass'
})
export class FutureAppointmentsComponent {
  futureAppointments: any[]
  displayedColumns = ['Data', 'Vacina', 'Situação', 'Dose']


  constructor(public config:DynamicDialogConfig) {
    this.futureAppointments = this.config.data.futureAppointments
  }


}
