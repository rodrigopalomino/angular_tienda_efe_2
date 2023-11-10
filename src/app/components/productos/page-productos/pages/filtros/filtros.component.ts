import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Categoria } from 'src/app/interfaces/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css'],
})
export class FiltrosComponent implements OnInit {
  @Input() categoria_id!: number;

  categorias: Categoria[] = [];

  constructor(
    private _categoriaServices: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias() {
    this._categoriaServices
      .getCategorias(this.categoria_id)
      .subscribe((data) => {
        this.categorias = data;
        console.log(data);
      });
  }

  clickCategoria(nombre: string) {
    this.router.navigate([nombre], { relativeTo: this.route });
  }
}
