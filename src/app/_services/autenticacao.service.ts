import { Injectable } from '@angular/core';
import { Usuario } from '../acesso/usuario.model';
import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor() { }

  public cadastrarUsuario(usuario: Usuario): void {
    console.log("eis o service: ", usuario)
    firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
      .then((resposta: any) => {
        console.log(resposta)
      })
      .catch((erro: Error) => {
        console.log(erro)
      })
  }

}
