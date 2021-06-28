import { Component, OnInit ,EventEmitter,Output,Input} from '@angular/core';
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

  @Input()
  total:number;

  constructor(private carritoService:CarritoService) {
  
    this.carritoResumen = carritoService.carritoResumen;
    
  }
  ngOnInit(): void {
    this.total = this.carritoService.total;
  }
  pagar(){
    this.emisorPago.emit(true);
  }
  vaciarCarrito(){
    this.emisorPago.emit(false);
  }
  borrarProductoResumen(resumen:DaoCarrito){
    this.carritoService.borrar(resumen);
    console.log("total en carrito"+this.total);
    this.ngOnInit();
  }


}
