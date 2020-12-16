import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';
import { ButtonComponent } from 'src/app/component/button/button.component';
import { AgGridAngular } from 'ag-grid-angular';
import { ListClientesService } from 'src/app/service/list-cliente/list-clientes.service';

@Component({
  selector: 'app-cliente-view',
  templateUrl: './cliente-view.component.html',
  styleUrls: ['../../app.component.css', './cliente-view.component.css']
})
export class ClienteViewComponent implements OnInit {
  frameworkComponents: any;
  api: any;
  colunas = [
    { field: 'nome', editable: true },
    { field: 'cpf', editable: true },
    {
      headerName: 'Edit',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.onEditButtonClick.bind(this),
        label: 'Edit'
      },
    },
    {
      headerName: 'Save',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.onSaveButtonClick.bind(this),
        label: 'Save'
      },
    },
    {
      headerName: 'Delete',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.onDeleteButtonClick.bind(this),
        label: 'Delete'
      },
    },

  ];

  linhas = [];

  constructor(private clienteListService: ListClientesService) {
    this.frameworkComponents = {
      buttonRenderer: ButtonComponent,
    }

    this.linhas = clienteListService.execute();
  }

  @ViewChild('agGrid') agGrid: AgGridAngular;

  onEditButtonClick(params) {
    this.api.startEditingCell({
      rowIndex: params.rowIndex,
      colKey: 'nome'
    });
  }

  onSaveButtonClick(params) {
    this.api.stopEditing();
  }

  onDeleteButtonClick(params) {

    this.api.updateRowData({ remove: [params.data] });
  }

  onGridReady(params) {
    this.api = params.api;
  }

  ngOnInit(): void {
  }

}
