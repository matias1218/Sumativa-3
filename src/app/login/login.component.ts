import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {Ng2IzitoastService} from "ng2-izitoast";
import { AutenticacionService } from 'src/services/autenticacion.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidUser = false;

  usuarioForm = new FormGroup({
    usuario: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private router: Router,public iziToast: Ng2IzitoastService,private authService:AutenticacionService) { }

  ngOnInit(): void {
  }

  
  iniciarSesion(){
    if(this.authService.login(this.usuarioForm.value.usuario,this.usuarioForm.value.password)){
      this.success();
    }
    else{
      this.invalidUser = true;
    }
  }

  success() {
    this.iziToast.success({ 
      title: "Bienvenido usuario "+this.authService.userApp,
      position:"topCenter", 
      
    });
    this.router.navigate(["tienda"]);
  }

}
