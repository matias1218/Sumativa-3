import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BodegaService {

  productosVitrina:Array<Producto> = [];
  productosVitrinaFiltered:Array<Producto> = [];
  constructor() {

    let producto1 = new Producto();
    producto1.codigo = 3434;
    producto1.nombre = "Iphone 10";
    producto1.precio = 500000;
    producto1.stock = 20;
    producto1.imagen = "https://falabella.scene7.com/is/image/FalabellaCO/4212149_1?wid=800&hei=800&qlt=70";
    this.productosVitrina.push(producto1);
    let producto2 = new Producto();
    producto2.codigo = 585;
    producto2.nombre = "Xiaomi 10";
    producto2.precio = 300000;
    producto2.stock = 50;
    producto2.imagen = "https://falabella.scene7.com/is/image/FalabellaCO/4212149_1?wid=800&hei=800&qlt=70";
    this.productosVitrina.push(producto2);
    let producto3 = new Producto();
    producto3.codigo = 658;
    producto3.nombre = "Samsung S10";
    producto3.precio = 250000;
    producto3.stock = 40;
    producto3.imagen = "https://falabella.scene7.com/is/image/FalabellaCO/4212149_1?wid=800&hei=800&qlt=70";
    this.productosVitrina.push(producto3);
    let producto4 = new Producto();
    producto4.codigo = 77;
    producto4.nombre = "Samsung Galaxy 20";
    producto4.precio = 350000;
    producto4.stock = 402;
    producto4.imagen = "https://falabella.scene7.com/is/image/FalabellaCO/4212149_1?wid=800&hei=800&qlt=70";
    this.productosVitrina.push(producto4);
  }

  editarProducto(prod:FormGroup){
    const index = this.productosVitrina.findIndex((prodAux:Producto) => prodAux.codigo == prod.value.codigo);
    let producto = this.productosVitrina[index];
    producto.nombre = prod.value.nombre;
    producto.precio = prod.value.precio;
    producto.stock = prod.value.stock;
  }
  borrarProducto(id:number){
    console.log(id);
    this.productosVitrina.splice(this.productosVitrina.findIndex(function(producto:Producto){
      return producto.codigo == id;
    }), 1);
  }
  filtrar(palabraClave:string){
    //console.log("palabra clave desde bodega "+palabraClave);
    //console.log(this.productosVitrina.filter((producto:Producto) => producto.nombre == palabraClave));
    // var filters={
    //   nombre:["Iphone 10"],
      
    // };
    // console.log(this.productosVitrina.filter(x =>Object.keys(filters).every(f => filters[f].some( z => z == x[f] ))));


    this.productosVitrinaFiltered = this.productosVitrina.filter((producto:Producto)=>{
      return producto.nombre.toLowerCase().indexOf(palabraClave.toLowerCase()) >= 0;
    })

  }
}


export class Producto{
  codigo:any;
  nombre:any;
  precio:any;
  stock:any;
  imagen:string;
}