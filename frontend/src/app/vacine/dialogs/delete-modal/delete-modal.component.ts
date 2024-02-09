import { Component } from '@angular/core';
import {DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.sass'
})
export class DeleteModalComponent {

  constructor(private ref : DynamicDialogRef) {
  }

  sim(){
    this.ref.close(true)
  }

  nao(){
    this.ref.close(false)
  }
}
