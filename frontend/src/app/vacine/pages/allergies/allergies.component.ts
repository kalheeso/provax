import {Component, OnInit} from '@angular/core';
import Allergy from "../../core/entities/Allergy";
import {AllergyService} from "../../core/services/allergy/allergy.service";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {OverlayService} from "../../core/services/overlay/overlay.service";
import {VacinaService} from "../../core/services/vaccine/vacina.service";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {DeleteModalComponent} from "../../dialogs/delete-modal/delete-modal.component";

@Component({
  selector: 'app-allergies',
  templateUrl: './allergies.component.html',
  styleUrl: './allergies.component.sass',
  providers: [DialogService]
})
export class AllergiesComponent implements OnInit{
  allergies: Allergy[] = []

  ref: DynamicDialogRef | undefined

  constructor(public service:AllergyService, public dialogService:DialogService, public overlayService:OverlayService, public vacinaService:VacinaService) {
  }

  ngOnInit() {
    this.listarAlergias();
  }

  listarAlergias() {
    this.overlayService.updateOverlayState(true)
    this.service.getAlergias().subscribe(
      (allergies: Allergy[]) => {
        this.allergies = allergies
        this.overlayService.updateOverlayState(false)
      }
    )
  }

  delete(id:number){
    this.ref = this.dialogService.open(DeleteModalComponent, {
      header: 'Excluir Registro',
      width: '470px',
      height: '270px',
      baseZIndex: 10000,
      styleClass: 'delete-modal.component',
      maximizable: false,
      dismissableMask: true
    })

    this.ref.onClose.subscribe((deleted:boolean) => {
      if(deleted) {
        this.service.delete(id).subscribe(() => {
          this.listarAlergias()
        })
      }
    })
  }

  protected readonly faTrash = faTrash;
}
