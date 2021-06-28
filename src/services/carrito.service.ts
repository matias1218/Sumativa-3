import { Injectable } from '@angular/core';
import { Producto } from './bodega.service';
@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  carrito:Array<Producto> = [];
  total:number;

  carritoResumen:Array<DaoCarrito> = [];
  constructor() { }

  vaciarCarrito(){
    this.carritoResumen.splice(0,this.carritoResumen.length);
    this.carrito.splice(0,this.carrito.length);
  }

  getResumen(){
    this.total = 0;
    this.carritoResumen.splice(0,this.carritoResumen.length)
    let idsAgregados = [];
		let cantidades = [];

    this.carrito.forEach(producto => {
      let codigo = producto.codigo;
      let cantidad = 0;
      if(idsAgregados.includes(codigo)){
        console.log("el codigo ya se revisó");
      }
      else{
        this.carrito.forEach(producto2 => {
          if(codigo == producto2.codigo){
            cantidad+=1;
          }
        });
        this.total = this.total + cantidad*producto.precio;
        console.log(this.total);
        idsAgregados.push(codigo);
        cantidades.push(cantidad);
        this.carritoResumen.push(new DaoCarrito(producto,cantidad));
      }
    });
    console.log(this.carritoResumen);
    
  }

}

export class DaoCarrito{
  producto:Producto;
  cantidad:number;
  constructor(producto:Producto,cantidad:number){
    this.producto = producto;
    this.cantidad = cantidad;
  }
  
}