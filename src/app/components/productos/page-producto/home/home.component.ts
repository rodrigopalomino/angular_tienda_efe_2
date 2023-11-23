import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export default class HomeProductoComponent implements OnInit {
  nombre!: string;
  producto!: Producto;

  constructor(
    private route: ActivatedRoute,
    private _productoServices: ProductoService
  ) {}

  ngOnInit(): void {
    this.getNombre();
    this.getProducto();
  }

  getNombre() {
    this.route.params.subscribe((params) => {
      this.nombre = params['nombre'];
    });
  }

  getProducto() {
    this._productoServices.getProducto(this.nombre).subscribe((data) => {
      this.producto = data;
      console.log(this.producto);
    });
  }
}
