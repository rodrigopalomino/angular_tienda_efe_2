import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/interfaces/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeProductosComponent implements OnInit {
  general: string = '';
  categoria: string = '';
  subcategoria: string = '';
  page: string = '';
  categoriaActual!: Categoria;
  nombre!: string;

  constructor(
    private route: ActivatedRoute,
    private _categoriaServices: CategoriaService
  ) {
    this.route.params.subscribe((params) => {
      this.general = params['general'];
      this.categoria = params['categoria'];
      this.subcategoria = params['subcategoria'];
      this.nombre = params['nombre'];
      console.log(this.nombre);
    });
    this.route.queryParams.subscribe((queryParams) => {
      this.page = queryParams['page'] || 1;
    });
  }

  ngOnInit(): void {
    this.getCategoria();
  }

  getContador(): number {
    if (this.subcategoria !== undefined) {
      return 3;
    } else if (this.categoria !== undefined) {
      return 2;
    } else {
      return 1;
    }
  }

  getCategoria() {
    this._categoriaServices.getCategoria(this.ultimo).subscribe((data) => {
      this.categoriaActual = data;
    });
  }

  get ultimo(): string {
    return this.subcategoria || this.categoria || this.general;
  }
}
