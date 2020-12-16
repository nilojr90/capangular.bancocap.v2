import { Component, OnInit } from '@angular/core';
import { Operacao } from 'src/app/model/operacao.model';
import { ListOperacaoService } from 'src/app/service/list-operacao/list-operacao.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['../../app.component.css', './extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  colunas = [
    { headerName: 'Data / Hora', field: 'data', valueFormatter: params => this.dateFormatter(params.data.data) },
    { field: 'tipo' },
    { field: 'valor', valueFormatter: params => this.currencyFormatter(params.data.valor, 'R$') },
    { field: 'hashOrigem' }
  ];

  operacoes: Operacao[] = [];

  constructor(private listOperacaoService: ListOperacaoService) {

    this.operacoes = listOperacaoService.execute();
  }

  ngOnInit(): void {
  }

  currencyFormatter(valor, sign) {
    var decimal = valor.toFixed(2);
    var formatado = decimal.replace(/\B(?=(\d{3})+(?!\d))/g, '.').replace('.', ',');
    return sign + ' ' + formatado;
  }

  dateFormatter(date: Date) {
    console.log(date);
    return date.toLocaleDateString();
  }


}

// Data/Hora,
//  Valor,
// Tipo de Operação (Depósito, Saque ou Transferência)
// e, em se tratando de transferência, o Hash da Conta de Origem da transferência.

