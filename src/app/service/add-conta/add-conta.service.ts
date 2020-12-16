import { Injectable } from '@angular/core';
import { Conta } from 'src/app/model/conta.model';

@Injectable({
  providedIn: 'root'
})
export class AddContaService {

  constructor() { }

  execute(conta: Conta) {
    console.log("Conta adcionada");
    console.log(conta);
  }
}
