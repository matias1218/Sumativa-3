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
    let producto5 = new Producto();
    producto5.codigo = 2123;
    producto5.nombre = "Iphone X";
    producto5.precio = 500000;
    producto5.stock = 55;
    producto5.imagen = "https://falabella.scene7.com/is/image/FalabellaCO/4212149_1?wid=800&hei=800&qlt=70";
    this.productosVitrina.push(producto5);
    let producto6 = new Producto();
    producto6.codigo = 3234;
    producto6.nombre = "Xiaomi Redmi Note 9";
    producto6.precio = 350000;
    producto6.stock = 34;
    producto6.imagen = "https://falabella.scene7.com/is/image/FalabellaCO/4212149_1?wid=800&hei=800&qlt=70";
    this.productosVitrina.push(producto6);
    let producto7 = new Producto();
    producto7.codigo = 7887;
    producto7.nombre = "HTC ONE Next";
    producto7.precio = 200000;
    producto7.stock = 43;
    producto7.imagen = "https://falabella.scene7.com/is/image/FalabellaCO/4212149_1?wid=800&hei=800&qlt=70";
    this.productosVitrina.push(producto7);
    let producto8 = new Producto();
    producto8.codigo = 7979;
    producto8.nombre = "Xperia Mini";
    producto8.precio = 350990;
    producto8.stock = 33;
    producto8.imagen = "https://falabella.scene7.com/is/image/FalabellaCO/4212149_1?wid=800&hei=800&qlt=70";
    this.productosVitrina.push(producto8);
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