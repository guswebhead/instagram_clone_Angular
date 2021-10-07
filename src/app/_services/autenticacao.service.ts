import { Injectable } from '@angular/core';
import { Usuario } from '../acesso/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor() { }

  public cadastrarUsuario(usuario: Usuario): void {
    console.log("eis o service: ", usuario)
  }
}
