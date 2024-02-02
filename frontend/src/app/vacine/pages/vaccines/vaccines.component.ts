import {Component, OnInit} from '@angular/core';
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import Vacina from "../../core/entities/Vacina";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {VacinaService} from "../../core/services/vaccine/vacina.service";
import {OverlayService} from "../../core/services/overlay/overlay.service";
import {DeleteModalComponent} from "../../dialogs/delete-modal/delete-modal.component";

@Component({
  selector: 'app-vaccines',
  templateUrl: './vaccines.component.html',
  styleUrl: './vaccines.component.sass',
  providers: [DialogService]
})
export class VaccinesComponent implements OnInit {
  vaccines: Vacina[] = [];

  ref: DynamicDialogRef | undefined;

  constructor(public service: VacinaService, public dialogService: DialogService, public overlayService:OverlayService) {
  }

  ngOnInit(): void {
    this.listarVacinas();
  }

  protected readonly faEdit = faEdit;


  listarVacinas(){
    this.overlayService.updateOverlayState(true)
    this.service.getVacinas().subscribe(
      (vaccines: Vacina[]) => {
        console.log('vacina', vaccines)
        this.vaccines = vaccines;
        this.overlayService.updateOverlayState(false)
      }
    );
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
          this.listarVacinas()
        })
      }
    })
  }

  protected readonly faTrash = faTrash;
}
