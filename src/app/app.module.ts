import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './component/cliente/cliente.component';
import { LoginComponent } from './component/login/login.component';
import { ContaComponent } from './component/conta/conta.component';
import { RecuperarSenhaComponent } from './component/recuperar-senha/recuperar-senha.component';
import { HomeComponent } from './component/home/home.component';
import { CPFPipe } from './pipe/cpf.pipe';
import { ClienteViewComponent } from './component/cliente-view/cliente-view.component';
import { ContaViewComponent } from './component/conta-view/conta-view.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DepositoComponent } from './component/deposito/deposito.component';
import { SaqueComponent } from './component/saque/saque.component';
import { TransferenciaComponent } from './component/transferencia/transferencia.component';
import { ExtratoComponent } from './component/extrato/extrato.component';
import { ButtonComponent } from './component/button/button.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ListClientesService } from './service/list-cliente/list-clientes.service';
import { API_URL } from './token';
import { maskConfig, GOOGLE_URL } from './config';
import { AddClienteService } from './service/add-cliente/add-cliente.service';
import { AddContaService } from './service/add-conta/add-conta.service';
import { ListContaService } from './service/list-conta/list-conta.service';
import { ListOperacaoService } from './service/list-operacao/list-operacao.service';




@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    LoginComponent,
    ContaComponent,
    RecuperarSenhaComponent,
    HomeComponent,
    ClienteViewComponent,
    ContaViewComponent,
    UsuarioComponent,
    DepositoComponent,
    CPFPipe,
    SaqueComponent,
    TransferenciaComponent,
    ExtratoComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(maskConfig),
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    CurrencyMaskModule,
  ],
  providers: [
    { provide: API_URL, useValue: GOOGLE_URL },
    ListClientesService,
    AddClienteService,
    AddContaService,
    ListContaService,
    ListOperacaoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
