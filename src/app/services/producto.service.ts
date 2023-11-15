import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  myApi = 'http://localhost:3000/';
  myApp = 'producto';

  constructor(private http: HttpClient) {}

  getProductosDestacados(destacado: number): Observable<Producto[]> {
    return this.http.get<Producto[]>(
      `${this.myApi}${this.myApp}/destacado/${destacado}`
    );
  }

  getProductos(categoria: number, inicio: number, cantidad: number) {
    return this.http.post<Producto[]>(`${this.myApi}${this.myApp}`, {
      categoria,
      inicio,
      cantidad,
    });
  }

  getProducto(nombre: string) {
    return this.http.get<Producto>(`${this.myApi}${this.myApp}/${nombre}`);
  }

  countProducto(categoria: number): Observable<number> {
    return this.http.get<number>(
      `${this.myApi}${this.myApp}/count/${categoria}`
    );
  }
}
