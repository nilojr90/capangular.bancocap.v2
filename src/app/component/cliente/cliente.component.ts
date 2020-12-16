import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente.model';
import { AddClienteService } from 'src/app/service/add-cliente/add-cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['../../app.component.css', './cliente.component.css']
})
export class ClienteComponent implements OnInit {
  cliente: Cliente = {};
  error: boolean = false;
  errorDesc: string = "";

  constructor(
    private router: Router,
    private addClienteService: AddClienteService
  ) { }

  onCadastrar() {
    console.log(this.cliente.nome, this.cliente.cpf);
    if (!this.cliente.nome) {
      this.error = true;
      this.errorDesc = "Preencha o campo nome"
    } else if (!this.cliente.cpf) {
      this.error = true;
      this.errorDesc = "Insira o CPF"
    }
    else {
      this.addClienteService.execute(this.cliente);

      this.error = false;
      this.router.navigate(['/perfil']);
    }
  }

  ngOnInit(): void {
  }

}
