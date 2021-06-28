import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { FormularioPagoComponent } from './tienda/formulario-pago/formulario-pago.component';
import { TiendaComponent } from './tienda/tienda.component';

const routes: Routes = [
  {
    path:"gestionProductos",
    component:ProductosComponent
  },
  {
    path:"tienda",
    component:TiendaComponent
  },
  {
    path:"tienda/pago",
    component:FormularioPagoComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
