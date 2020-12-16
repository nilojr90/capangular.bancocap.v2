import { Injectable } from '@angular/core';
import { Conta } from 'src/app/model/conta.model';

@Injectable({
  providedIn: 'root'
})
export class ListContaService {

  contas: Conta[] = [];

  constructor() {
    this.contas = [
      { cliente: 'Arthur', hash: '001', saldo: 500 },
      { cliente: 'Daniel', hash: '002', saldo: 255 },
      { cliente: 'Kalila', hash: '003', saldo: 950 },
      { cliente: 'Nilson', hash: '004', saldo: 260 },
      { cliente: 'Reinaldo', hash: '005', saldo: 389 },
    ]

  }

  execute(): Conta[] {
    return this.contas;
  }
}
