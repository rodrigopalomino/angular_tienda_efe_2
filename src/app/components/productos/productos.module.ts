import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { HomeComponent } from './page-productos/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FiltrosComponent } from './page-productos/pages/filtros/filtros.component';
import { LisaProductosComponent } from './page-productos/pages/lista-productos/lista-productos.component';

@NgModule({
  declarations: [HomeComponent, FiltrosComponent, LisaProductosComponent],
  imports: [CommonModule, ProductosRoutingModule, SharedModule],
})
export class ProductosModule {}
