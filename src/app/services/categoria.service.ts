import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  myApi = 'http://localhost:3000/';
  myApp = 'categoria';

  constructor(private http: HttpClient) {}

  getCategorias(categoria: number = 0): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(
      `${this.myApi}${this.myApp}/${categoria}`
    );
  }

  getCategoria(nombre: string = ''): Observable<Categoria> {
    return this.http.get<Categoria>(
      `${this.myApi}${this.myApp}/nombre/${nombre}`
    );
  }
}
