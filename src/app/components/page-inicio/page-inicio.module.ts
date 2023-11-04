import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageInicioRoutingModule } from './page-inicio-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarruselHomeComponent } from './pages/carrusel-home/carrusel-home.component';
import { CarruselOfertasComponent } from './pages/carrusel-ofertas/carrusel-ofertas.component';
import { CarruselesComponent } from './pages/carruseles/carruseles.component';

@NgModule({
  declarations: [HomeComponent, CarruselHomeComponent, CarruselOfertasComponent, CarruselesComponent],
  imports: [CommonModule, PageInicioRoutingModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PageInicioModule {}
