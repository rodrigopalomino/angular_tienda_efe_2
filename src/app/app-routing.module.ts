import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/page-inicio/page-inicio.module').then(
        (m) => m.PageInicioModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./components/productos/productos.module').then(
        (m) => m.ProductosModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
