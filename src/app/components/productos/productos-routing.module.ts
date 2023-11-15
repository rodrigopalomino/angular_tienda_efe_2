import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeProductosComponent } from './page-productos/home/home.component';
import HomeProductoComponent from './page-producto/home/home.component';

const routes: Routes = [
  {
    path: 'ver/:general',
    component: HomeProductosComponent,
  },
  {
    path: 'ver/:general/:categoria',
    component: HomeProductosComponent,
  },
  {
    path: 'ver/:general/:categoria/:subcategoria',
    component: HomeProductosComponent,
  },
  {
    path: ':nombre',
    component: HomeProductoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosRoutingModule {}
