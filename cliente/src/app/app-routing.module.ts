import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componenetes
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { PageNoFoundComponent } from './components/page-no-found/page-no-found.component';

const routes: Routes = [
  { path: '', component: ListarProductosComponent },
  { path: 'crear-producto', component: CrearProductoComponent },
  { path: 'producto/:id', component: CrearProductoComponent },
  { path: 'no-found', component: PageNoFoundComponent },
  { path: '**', redirectTo: 'no-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
