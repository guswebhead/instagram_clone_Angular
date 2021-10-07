import { animate, state, style, transition, trigger, keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [
    trigger('animacao-banner', [
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado', [
        style({ opacity: 0, transform: 'translate(-100px, 0)' }),
        animate('500ms 0s ease-in-out')
      ])
    ]),

    trigger('animacao-painel', [
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado', [
        style({ opacity: 0, transform: 'translate(100px, 0)' }),
        animate('1.5s 0s ease-in-out', keyframes([
          style({ offset: 0.2, opacity: 1, transform: 'translateX(0)' }),
          style({ offset: 0.8, opacity: 1, transform: 'translateX(0)' }),

          style({ offset: 0.9, opacity: 1, transform: 'translateY(-10px)' }),
          style({ offset: 0.95, opacity: 1, transform: 'translateY(10px)' }),
          style({ offset: 0.97, opacity: 1, transform: 'translateY(-10px)' }),
          style({ offset: 0.99, opacity: 1, transform: 'translateY(10px)' }),
        ]))
      ])
    ])
  ]
})

export class AcessoComponent implements OnInit {

  public estadoBanner: string = 'criado'
  public estadoPainel: string = 'criado'

  public cadastro: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  public exibirPainel(evento: string): void {
    this.cadastro = evento === 'cadastro' ? true : false
  }

}
