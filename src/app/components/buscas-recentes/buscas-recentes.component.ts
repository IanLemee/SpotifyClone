import { Component, OnInit } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-buscas-recentes',
  templateUrl: './buscas-recentes.component.html',
  styleUrls: ['./buscas-recentes.component.scss']
})
export class BuscasRecentesComponent implements OnInit {

  pesquisasRecentes = [
    'Top Brasil',
    'Top Global',
    'Esquenta Sertaneja',
    'Funk Hits',
    'Pagodeira'
  ]

  campoPesquisa: string = ''
  buscando:string = ''

  constructor() { }

  ngOnInit(): void {
  }

  definirPesquisa(pesquisa:string) {
    this.campoPesquisa = pesquisa
  }

  buscar(buscando:string) {
    this.buscando = buscando
  }

}
