export interface Categoria {
  categoria_id: number;
  nombre: string;
  parent_id: string | null;
  cantidad_productos?: number;
}
