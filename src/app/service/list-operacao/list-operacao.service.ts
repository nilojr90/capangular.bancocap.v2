import { Injectable } from '@angular/core';
import { Operacao } from 'src/app/model/operacao.model';

@Injectable({
  providedIn: 'root'
})
export class ListOperacaoService {

  operacoes: Operacao[] = [];

  constructor() {
    this.operacoes = [
      { data: new Date(2020, 2, 11), tipo: 'Saque', valor: 550, hashOrigem: '' },
      { data: new Date(2020, 2, 12), tipo: 'Depósito', valor: 50.99, hashOrigem: '' },
      { data: new Date(2020, 2, 10), tipo: 'Transferência', valor: 1300, hashOrigem: '1234463131' },
      { data: new Date(2020, 3, 1), tipo: 'Transferência', valor: 5000, hashOrigem: '1234463131' },
      { data: new Date(2020, 2, 11), tipo: 'Saque', valor: 55.10, hashOrigem: '' },
    ]

  }

  execute(): Operacao[] {
    return this.operacoes;
  }
}
