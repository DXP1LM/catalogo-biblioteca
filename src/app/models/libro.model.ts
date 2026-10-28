export interface Libro {
  id: string;
  titulo: string;
  categoria: 'Programación' | 'Bases de Datos' | 'Redes' | 'Ciencias Básicas' | string;
  autor: string;
  disponibles: number;
  descripcion?: string;
  ubicacion?: string;
  isbn?: string;
  anioPublicacion?: number;
}
