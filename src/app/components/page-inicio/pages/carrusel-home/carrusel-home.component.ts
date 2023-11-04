import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-carrusel-home',
  templateUrl: './carrusel-home.component.html',
  styleUrls: ['./carrusel-home.component.css'],
})
export class CarruselHomeComponent {
  listaImagenes: string[] = [
    'https://www.efe.com.pe/media/wysiwyg/efe-sliders-b2c-271023-01-01.jpg',
    'https://www.efe.com.pe/media/wysiwyg/efe-slider-b2c-271023-02-01_2.png',
    'https://www.efe.com.pe/media/wysiwyg/efe-sliders-b2c-271023-03-02_2.png',
    'https://www.efe.com.pe/media/wysiwyg/efe-slider-b2c-271023-04-01_1.png',
    'https://www.efe.com.pe/media/wysiwyg/IMG_8117.png',
    'https://www.efe.com.pe/media/wysiwyg/efe-sliders-b2c-271023-06-01_2.png',
    'https://www.efe.com.pe/media/wysiwyg/SLIDERS-IPHONE15_2.jpg',
    'https://www.efe.com.pe/media/wysiwyg/efe-slider-b2c-271023-07-01_1.png',
    'https://www.efe.com.pe/media/wysiwyg/efe-sliders-b2c-271023-08-02_1.png',
    'https://www.efe.com.pe/media/wysiwyg/efe-slider-b2c-271023-09-02_1_.png',
  ];
}
