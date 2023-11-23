import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  imagesPath: string = '../../../../assets/';
  productos: Producto[] = [];
  nombre: string = '';
  mostrar: boolean = false;

  constructor(
    private _productoServices: ProductoService,
    private router: Router
  ) {}

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    const clickedElement = event.target as HTMLElement;
    if (!clickedElement.closest('.input-productos')) {
      this.mostrar = false;
    }
  }

  ngOnInit(): void {
    console.log('navbar');
  }

  searchProducto() {
    if (this.nombre !== '') {
      this._productoServices
        .searchProducto(this.nombre, 1, 10)
        .subscribe((data) => {
          this.productos = data.slice(0, 5);

          this.mostrar = true;
        });
    }
    this.mostrar = false;
  }

  clickProductoSpan(nombre: string) {
    this.router.navigate([nombre]);
  }

  clickButton() {
    if (this.nombre !== '') {
      this.router.navigate(['search', this.nombre]);
    }
  }
}
