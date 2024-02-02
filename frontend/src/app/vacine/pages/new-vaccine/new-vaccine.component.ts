import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {VacinaService} from "../../core/services/vaccine/vacina.service";

@Component({
  selector: 'app-new-vaccine',
  templateUrl: './new-vaccine.component.html',
  styleUrl: './new-vaccine.component.sass'
})
export class NewVaccineComponent implements OnInit{
  public formGroup !: FormGroup;

  readonly periodicidades = [
    {label: 'Dias', value: 1},
    {label: 'Semanas', value: 2},
    {label: 'Meses', value: 3},
    {label: 'Anos', value: 4}
  ]

  constructor(private vacinaService : VacinaService) {
  }

  ngOnInit(): void {
    this.formGroup = this.vacinaService.getFormGroup();
  }

  submeter() {
    this.formGroup.get('periodicidade')?.setValue(this.formGroup.get('periodicidadeSelecionada')?.value.value);
    this.vacinaService.incluirVacina(this.formGroup);
  }

}
