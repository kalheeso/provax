import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  setToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  setIdUsuarioLogado(idUsuarioLogado: number) {
    sessionStorage.setItem('idUsuarioLogado', idUsuarioLogado.toString());
  }

  getIdUsuarioLogado(): number{
    return Number(sessionStorage.getItem('idUsuarioLogado'));
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  autenticarSessao(response : any) {
    this.setToken(response.token);
    this.setIdUsuarioLogado(response.usuarioID);
  }

  constructor() { }

  logout() {
    sessionStorage.clear()
  }
}
