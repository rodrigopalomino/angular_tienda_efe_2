import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precio',
})
export class PrecioPipe implements PipeTransform {
  transform(precio: number, oferta: number): unknown {
    const precioConDescuento = precio - precio * (oferta / 100);

    // Ajustar el precio para que termine en nueve
    const precioFinal = this.ajustarPrecioANueve(precioConDescuento);

    // Puedes agregar otros formatos, como agregar un símbolo de moneda, decimales, etc.
    return `S/ ${precioFinal.toFixed(2)}`;
  }

  private ajustarPrecioANueve(precio: number): number {
    const ultimoDigito = precio % 10;
    if (ultimoDigito !== 9) {
      const diferencia = 9 - ultimoDigito;
      precio += diferencia;
    }
    return precio;
  }
}
