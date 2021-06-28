import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import { Producto } from 'src/services/bodega.service';
import { CarritoService, DaoCarrito } from 'src/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  @Output() 
  emisorPago = new EventEmitter <any>();  

  carritoResumen:Array<DaoCarrito>;
  total:number;

  constructor(private carritoService:CarritoService) {
    this.total = carritoService.total;
    this.carritoResumen = carritoService.carritoResumen;
    
  }
  ngOnInit(): void {
    
  }
  pagar(){
    this.emisorPago.emit(true);
  }
  vaciarCarrito(){
    this.emisorPago.emit(false);
  }

}
