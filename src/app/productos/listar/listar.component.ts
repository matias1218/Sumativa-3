import { Component, Input, Output, OnInit ,EventEmitter} from '@angular/core';
import {Ng2IzitoastService} from "ng2-izitoast";
declare var $ : any;


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  

  @Input()
  productos:any;

  @Output() 
  emisorEdit = new EventEmitter <any>();  

  @Output() 
  emisorDelete = new EventEmitter <any>();  
  constructor(public iziToast: Ng2IzitoastService) { }

  

  ngOnInit(): void {
  }

  openModalFormDelete(){
    $('#myModalDelete').modal('show');
  }
  closeModalFormDelete(){
    $('#myModalDelete').modal('hide');
  }


  openEdit(producto){
    this.emisorEdit.emit(producto);
  }

  openDelete(producto){
    this.openModalFormDelete();
  }

  delete(producto){
    this.emisorDelete.emit(producto.codigo);
    this.closeModalFormDelete();
  }

}
