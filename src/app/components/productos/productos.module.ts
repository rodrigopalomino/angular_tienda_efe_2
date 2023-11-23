import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { HomeProductosComponent } from './page-productos/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FiltrosComponent } from './page-productos/pages/filtros/filtros.component';
import { LisaProductosComponent } from './page-productos/pages/lista-productos/lista-productos.component';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { ImagenesComponent } from './page-producto/pages/imagenes/imagenes.component';
import { InformacionComponent } from './page-producto/pages/informacion/informacion.component';
import HomeProductoComponent from './page-producto/home/home.component';
import { DetalleComponent } from './page-producto/pages/detalle/detalle.component';

@NgModule({
  declarations: [
    HomeProductosComponent,
    FiltrosComponent,
    LisaProductosComponent,
    ImagenesComponent,
    InformacionComponent,
    HomeProductoComponent,
    DetalleComponent,
  ],
  imports: [CommonModule, ProductosRoutingModule, SharedModule, PipeModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductosModule {}
