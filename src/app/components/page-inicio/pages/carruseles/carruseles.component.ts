import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-carruseles',
  templateUrl: './carruseles.component.html',
  styleUrls: ['./carruseles.component.css'],
})
export class CarruselesComponent implements OnInit {
  imagesPath: string = '../../../../assets/';

  listaTelevisores: Producto[] = [];
  listaDormitorio: Producto[] = [];
  listaCelulares: Producto[] = [];
  listaAccesoriosTecnologicos: Producto[] = [];
  listaComputacion: Producto[] = [];
  listaDigital: Producto[] = [];
  listaHogar: Producto[] = [];
  listaElectrohogar: Producto[] = [];
  listaSmartHome: Producto[] = [];
  listaDeporte: Producto[] = [];
  listaMultiservicios: Producto[] = [];

  constructor(private _productoServices: ProductoService) {}

  ngOnInit(): void {
    this.getListas();
  }

  getListas() {
    this._productoServices.getProductosDestacados(1).subscribe((data) => {
      this.listaTelevisores = data;
    });
    this._productoServices.getProductosDestacados(2).subscribe((data) => {
      this.listaDormitorio = data;
    });
    this._productoServices.getProductosDestacados(3).subscribe((data) => {
      this.listaCelulares = data;
    });
    this._productoServices.getProductosDestacados(4).subscribe((data) => {
      this.listaAccesoriosTecnologicos = data;
    });
    this._productoServices.getProductosDestacados(5).subscribe((data) => {
      this.listaComputacion = data;
    });
    this._productoServices.getProductosDestacados(6).subscribe((data) => {
      this.listaDigital = data;
    });
    this._productoServices.getProductosDestacados(7).subscribe((data) => {
      this.listaHogar = data;
    });
    this._productoServices.getProductosDestacados(8).subscribe((data) => {
      this.listaElectrohogar = data;
    });
    this._productoServices.getProductosDestacados(9).subscribe((data) => {
      this.listaSmartHome = data;
    });
    this._productoServices.getProductosDestacados(10).subscribe((data) => {
      this.listaDeporte = data;
    });
    this._productoServices.getProductosDestacados(11).subscribe((data) => {
      this.listaMultiservicios = data;
    });
  }
}
