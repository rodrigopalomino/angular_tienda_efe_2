import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel-ofertas',
  templateUrl: './carrusel-ofertas.component.html',
  styleUrls: ['./carrusel-ofertas.component.css'],
})
export class CarruselOfertasComponent {
  listaImagenes: string[] = [
    'https://www.efe.com.pe/media/wysiwyg/efe-carrusel-01_7.png',
    'https://www.efe.com.pe/media/wysiwyg/efe-carrusel-02_1.png',
    'https://www.efe.com.pe/media/wysiwyg/efe-carrusel-03_1.png',
    'https://www.efe.com.pe/media/wysiwyg/efe-carrusel-interbank.png',
    'https://www.efe.com.pe/media/wysiwyg/efe-carrusel-04_1.png',
    'https://www.efe.com.pe/media/wysiwyg/efe-carrusel-05_3.png',
  ];
}
