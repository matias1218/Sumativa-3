import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/services/autenticacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sumativa2';

  routers:any;
  constructor(private router: Router,private auth:AutenticacionService){
    this.routers = router;
  }

  vistaSelected = true;
  
  gestion(){
    this.vistaSelected = true;
    

  }
  tienda(){
    this.vistaSelected = false;
  }
  cerrarSesion(){
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
