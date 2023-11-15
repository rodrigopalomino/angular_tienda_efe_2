import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export default class HomeProductoComponent implements OnInit {
  nombre!: string;

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
      console.log(data);
      console.log(data.imagenes);
    });
  }
}
