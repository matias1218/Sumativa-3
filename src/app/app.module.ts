import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2IziToastModule } from 'ng2-izitoast'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { FormularioProductoComponent } from './productos/formulario-producto/formulario-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { ListarComponent } from './productos/listar/listar.component';
import { TiendaComponent } from './tienda/tienda.component';

// servicios
import { BodegaService } from '../services/bodega.service';
import { CarritoService } from 'src/services/carrito.service';
import { CarritoComponent } from './tienda/carrito/carrito.component';
import { FormularioPagoComponent } from './tienda/formulario-pago/formulario-pago.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    FormularioProductoComponent,
    EditarProductoComponent,
    ListarComponent,
    TiendaComponent,
    CarritoComponent,
    FormularioPagoComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2IziToastModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
    
  ],
  providers: [BodegaService,CarritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
