import {Component, OnInit} from '@angular/core';
import {UserService} from "../../core/services/user/user.service";
import User from "../../core/entities/User";
import Gender from "../../core/entities/gender";
import {FormGroup} from "@angular/forms";
import Allergy from "../../core/entities/Allergy";
import {AllergyService} from "../../core/services/allergy/allergy.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.sass'
})
export class ProfileComponent implements OnInit{

  constructor(private userService: UserService,
              private alergiaService : AllergyService) { }
  formGroup !: FormGroup
  user !: User;
  genders: Gender[] = this.userService.getGenders();
  loadedUser : boolean = false
  alergias : Allergy[] = [];

  ngOnInit(): void {
    this.formGroup = this.userService.getFormGroup()
    this.genders = this.userService.getGenders();

    this.userService.getUsuarioLogado().subscribe((usuarioLogado) => {
      this.user = usuarioLogado
      this.loadFormGroup()
    })

    this.alergiaService.getAlergias().subscribe(
      (allergies: Allergy[]) => {
        this.alergias = allergies
      }
    )
  }

  loadFormGroup(){
    this.formGroup.setValue({
      nome: this.user.nome,
      email: this.user.email,
      dataNascimento: new Date(this.user.dataNascimento),
      sexo: {
        id: this.user.sexo,
        name: this.user.sexo == 'm' ? 'Masculino':'Feminino'
      },
      logradouro: this.user.logradouro,
      numero: this.user.numero,
      setor: this.user.setor,
      cidade: this.user.cidade,
      uf: this.user.uf,
      alergias: this.user.alergias
    })

    this.loadedUser = true
  }
}

