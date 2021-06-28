import { Component, OnInit,Input} from '@angular/core';


import {Ng2IzitoastService} from "ng2-izitoast";
import { FormGroup, FormControl } from '@angular/forms';
import { BodegaService } from '../../services/bodega.service';
import { Producto } from '../../services/bodega.service';
declare var $ : any;


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productosVitrina:Array<Producto>;
  setVisibleAddForm = false;
  setVisibleEditForm = false;
  auxProduct:any;

  

  constructor(private bodegaService:BodegaService,public iziToast: Ng2IzitoastService) {
      // se agregan algunos productos de prueba
      this.productosVitrina = bodegaService.productosVitrina;
  }

  ngOnInit(): void {
  }
 
  openModalFormAdd(){
    $('#myModalFormAdd').modal('show');
  }
  closeModalFormAdd(){
    $('#myModalFormAdd').modal('hide');
  }
  openModalFormEdit(){
    $('#myModalFormEdit').modal('show');
  }
  closeModalFormEdit(){
    $('#myModalFormEdit').modal('hide');
    this.setVisibleEditForm = false;
  }

  // metodo que recibe el producto a agregar desde el componente formulario de productos
  receptorFormulario($event: any){
    this.bodegaService.productosVitrina.push($event); 
    this.setVisibleAddForm = false;
    this.iziToast.success({ 
      title: "Producto Agregado",
      position:"topCenter",
      
    });
  }
  // metodo que recibe el producto a agregar desde el componente formulario de productos
  cancelDialog($event: any){
    this.setVisibleAddForm = $event;
    this.setVisibleEditForm = $event;
  }
  // metodo que recibe el producto a editar del componente listado
  receptorEdicionProductoLista($event: any){
    this.openModalFormEdit();
    this.setVisibleEditForm = true;
    this.auxProduct = $event;
  }

  // metodo que recibe el producto a editar del componente listado
  receptorEdicionProductoForm($event: FormGroup){
    this.setVisibleEditForm = false;
    this.bodegaService.editarProducto($event);
  }
  // metodo que recibe el producto a editar del componente listado
  receptorBorrarProductoLista($event: number){
    this.bodegaService.borrarProducto($event);
  }

}

