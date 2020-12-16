import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class AddClienteService {
  constructor() { }

  execute(cliente: Cliente) {
    console.log("Cliente Adcionado");
    console.log(cliente);
  }
}
