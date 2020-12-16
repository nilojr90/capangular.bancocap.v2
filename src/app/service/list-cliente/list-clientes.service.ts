import { Injectable } from '@angular/core';
import { Cliente } from '../../model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ListClientesService {

  clientes: Cliente[] = [];

  constructor() {
    this.clientes = [
      { nome: 'Arthur', cpf: '008.983.384-84' },
      { nome: 'Daniel', cpf: '425.085.020-06' },
      { nome: 'Kalila', cpf: '738.586.970-01' },
      { nome: 'Nilson', cpf: '171.590.100-27' },
      { nome: 'Reinaldo', cpf: '866.676.730-89' },
    ]

  }

  execute(): Cliente[] {
    return this.clientes;
  }

}

