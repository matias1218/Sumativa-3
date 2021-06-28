import { Component, OnInit,HostListener} from '@angular/core';
import { BodegaService } from '../../services/bodega.service';
import { Producto } from '../../services/bodega.service';
import { CarritoService, DaoCarrito } from 'src/services/carrito.service';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import {Ng2IzitoastService} from "ng2-izitoast";
import { Router } from '@angular/router';
declare var $ : any;


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
  
})
export class TiendaComponent implements OnInit {
  
  subtotal = 0;
  subTotalIVA = 0;
  sticky =  {};
  productosVitrina:Array<Producto>;
  carrito:Array<Producto>;
  data:string = "";
  carritoResume = false;
  page = 1;
  pageSize =2;

  constructor(private bodegaService:BodegaService, private carritoService:CarritoService,@Inject(DOCUMENT) document,public iziToast: Ng2IzitoastService,private router:Router) { 
    this.productosVitrina = bodegaService.productosVitrina;
    this.carrito = carritoService.carrito;
  }

  ngOnInit(){
    this.productosVitrina = this.bodegaService.productosVitrina;
    this.carrito = this.carritoService.carrito;
    this.actualizarSubTotal();
  }


  // increiblemente sin esta funcion sirve igual (pero el sticky debe estar declarado arriba como sale en el if)
  @HostListener("window:scroll", ['$event'])
  doSomethingOnScroll($event:Event){
    if($event.currentTarget['scrollY']>306){
      this.sticky =  {
        "position": "sticky",
        "top": 0,
        "z-index": 1
      }
    }
    else{
      this.sticky =  {
        
      }
    }
  }
  

  // actualiza el precio del subtotal
  actualizarSubTotal(){
    let acumulado = 0;
    this.carrito.forEach((producto:Producto) => {
      acumulado+=producto.precio;
    });

    this.subtotal = acumulado;
    this.subTotalIVA = Math.floor((this.subtotal/1.19)*0.19);
    
  }

  // borra un producto de la lista del carrito de compras
  quitar(prod:any){
    this.carrito.splice(this.carrito.findIndex(function(producto:Producto){
      return producto.codigo === prod.codigo;
    }), 1);
    let valor = parseInt((<HTMLInputElement>document.getElementById('valor'+prod.codigo)).value);
    if(valor>0){
      valor-=1;
      (<HTMLInputElement>document.getElementById('valor'+prod.codigo)).value = valor+"";
    }
    this.actualizarSubTotal();
    
  }

  // agrega un producto al carrito de compras
  agregar(producto:any){
    
    this.carrito.push(producto);
    let valor = parseInt((<HTMLInputElement>document.getElementById('valor'+producto.codigo)).value);
    valor+=1;
    (<HTMLInputElement>document.getElementById('valor'+producto.codigo)).value = valor+"";
    this.actualizarSubTotal();
  }

  modelChanged(newObj) {
      // do something with new value
      if(this.data != ""){
        this.ngOnInit();
        console.log(newObj);
        this.bodegaService.filtrar(this.data);
        this.productosVitrina = this.bodegaService.productosVitrinaFiltered;
      }
      else{
        this.productosVitrina = this.bodegaService.productosVitrina;
      }
  }

  filtrar(){
    console.log(this.data);
  }

  verCarrito(){
    if(this.carrito.length == 0){
      this.iziToast.warning({ 
        title: "El carrito esta vacio",
        position:"topCenter",
        
      });
    }
    else{
      this.carritoService.getResumen();
      this.openCarritoModal();
      
    }
    
  }

  openCarritoModal(){
    $('#carritoModal').modal('show');
    this.carritoResume = true;
  }
  closeCarritoModal(){
    this.carritoResume = false;
    $('#carritoModal').modal('hide');
  }

  receptorPago($event:any){
    this.closeCarritoModal();
    if($event){
      console.log("true");
      this.router.navigate(["tienda/pago"]);
    }
    else{
      console.log("false");
      this.carritoService.vaciarCarrito();
      this.ngOnInit();
    }
  }
 

}







