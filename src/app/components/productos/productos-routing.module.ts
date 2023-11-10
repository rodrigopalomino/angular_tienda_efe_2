import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page-productos/home/home.component';

const routes: Routes = [
  {
    path: ':general',
    component: HomeComponent,
  },
  {
    path: ':general/:categoria',
    component: HomeComponent,
  },
  {
    path: ':general/:categoria/:subcategoria',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosRoutingModule {}
