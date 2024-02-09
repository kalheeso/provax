import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {AllergyService} from "../../core/services/allergy/allergy.service";
import Vacina from "../../core/entities/Vacina";
import {VacinaService} from "../../core/services/vaccine/vacina.service";

@Component({
  selector: 'app-new-allergy',
  templateUrl: './new-allergy.component.html',
  styleUrl: './new-allergy.component.sass'
})
export class NewAllergyComponent implements OnInit{
  public formGroup !: FormGroup;

  public vacinas : Vacina[] = [];

  constructor(private allergyService: AllergyService, private vacinaService : VacinaService){
  }
  ngOnInit(): void {
      this.formGroup = this.allergyService.getFormGroup();

      this.vacinaService.getVacinas().subscribe(
        (vacinas: Vacina[]) => {
          this.vacinas = vacinas
        }
      )
  }

  submeter() {
    this.formGroup.patchValue({
      vacinaId: this.formGroup.value.vacina?.id
    })

    this.allergyService.incluirAlergia(this.formGroup);
  }
}
