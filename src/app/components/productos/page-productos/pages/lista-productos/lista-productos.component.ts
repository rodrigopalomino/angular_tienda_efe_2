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
  @Input() search: string = '';
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
    if (this.search == '') {
      this.getRow();

      this.countProducto();
      this.getProductos();
    } else {
      this.getRow();

      this.countSearchProducto();
      this.searchProductos();
    }
  }

  searchProductos() {
    console.log('seacr= >', this.search);

    this._productoServices
      .searchProducto(
        this.search,
        this.cantidad * (this.row - 1),
        this.cantidad
      )
      .subscribe((data) => {
        this.listaProductos = data;
        console.log(this.listaProductos);
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['page']) {
      if (this.search == '') {
        this.getRow();

        this.getProductos();
      }
      this.searchProductos();
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
        this.scrollToTopWithAnimation();
      });
  }

  scrollToTopWithAnimation() {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
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

  countSearchProducto() {
    this._productoServices
      .countSearchProducto(this.search)
      .subscribe((data) => {
        this.ultimoRow = Math.ceil(data / this.cantidad);
      });
  }

  siguiente() {
    if (this.search == '') {
      this.row += 1;
      this.router.navigate(['ver', this.nombre], {
        queryParams: { page: this.row },
      });
      this.getProductos();
    }
    this.row += 1;
    this.router.navigate(['search', this.search], {
      queryParams: { page: this.row },
    });
    this.searchProductos();
  }

  anterior() {
    if (this.search == '') {
      this.row -= 1;
      this.router.navigate(['ver', this.nombre], {
        queryParams: { page: this.row },
      });
      this.getProductos();
    }
    this.row -= 1;
    this.router.navigate(['search', this.search], {
      queryParams: { page: this.row },
    });
    this.searchProductos();
  }

  clickCard(nombre: string) {
    this.router.navigate([nombre]);
  }
}
