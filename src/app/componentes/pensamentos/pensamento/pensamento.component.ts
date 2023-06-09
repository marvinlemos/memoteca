import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  constructor() { }

  @Input()
  pensamento = {
    conteudo: 'I love angular',
    autoria: 'Marvin',
    modelo: 'modelo3'
  }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256 ){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
