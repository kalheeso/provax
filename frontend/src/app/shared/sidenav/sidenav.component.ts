import {Component, OnInit} from '@angular/core';
import {faCircleUser, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {animate, keyframes, style, transition, trigger} from "@angular/animations";
import {navBarItems} from "./navBarItems";
import {LoginService} from "../../vacine/core/services/login/login.service";
import {UserService} from "../../vacine/core/services/user/user.service";
import User from "../../vacine/core/entities/User";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms',
          style({opacity: 1})
        )
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('350ms',
          style({opacity: 0})
        )
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
          keyframes([
            style({transform: 'rotate(0deg)', offset: '0'}),
            style({transform: 'rotate(2turn)', offset: '1'})
          ])
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit{

  usuarioLogado!: User;

  constructor(private loginService: LoginService, private userService : UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsuarioLogado().subscribe((usuario) => {
      this.usuarioLogado = usuario;
    });
  }

  podeVerMenu(item: any) {
    return true;
  }

  sideNavItems = navBarItems;

  logout() {
    this.loginService.logout();
  }

  protected readonly faCircleUser = faCircleUser;
  protected readonly faSignOutAlt = faSignOutAlt;
}
