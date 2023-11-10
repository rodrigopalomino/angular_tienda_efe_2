import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Route, Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css'],
})
export class LisaProductosComponent implements OnInit, OnChanges {
  imagesPath: string = '../../../../assets/';
  @Input() categoria_id!: number;
  @Input() page!: string;
  @Input() nombre!: string;

  cantidad: number = 16;
  listaProductos: Producto[] = [];

  row!: number;
  ultimoRow!: number;

  constructor(
    private _productoServices: ProductoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getRow();
    this.countProducto();
    this.getProductos();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['page']) {
      this.getRow();
      this.getProductos();
    }
  }

  getProductos() {
    this._productoServices
      .getProductos(
        this.categoria_id,
        this.cantidad * (this.row - 1),
        this.cantidad
      )
      .subscribe((data) => {
        this.listaProductos = data;
      });
  }

  getRow() {
    this.row = parseInt(this.page);
  }

  countProducto() {
    this._productoServices
      .countProducto(this.categoria_id)
      .subscribe((data) => {
        this.ultimoRow = Math.ceil(data / this.cantidad);
      });
  }

  siguiente() {
    console.log('siguiente');
    this.row += 1;
    this.router.navigate(['ver', this.nombre], {
      queryParams: { page: this.row },
    });
    this.getProductos();
  }

  anterior() {
    console.log('anterior');
    this.row -= 1;
    this.router.navigate(['ver', this.nombre], {
      queryParams: { page: this.row },
    });
    this.getProductos();
  }
}
