import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../app.component.css', './login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = { email: "", senha: "" };
  error: boolean = false;
  errorDesc: string = "";

  constructor(private router: Router) { }

  /*  onLogin(formLogin: NgForm){
     this.router.navigate(['/home']);
   } */

  onLoginErro(email: string, password: string) {
    console.log(email, password);
    if (!email) {
      this.error = true;
      this.errorDesc = "Preencha o campo e-mail"
    } else if (!password) {
      this.error = true;
      this.errorDesc = "Preencha o campo senha"
    } else {
      this.error = false;
      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {
  }

}
