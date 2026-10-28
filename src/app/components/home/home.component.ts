import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LibroService } from '../../services/libro.service';
import { Libro } from '../../models/libro.model';
import { TablaLibrosComponent } from '../tabla-libros/tabla-libros.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    TablaLibrosComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  categoriaSeleccionada: string = 'Todas';
  terminoBusqueda: string = '';

  categorias: string[] = [
    'Todas',
    'Programación',
    'Bases de Datos',
    'Redes',
    'Ciencias Básicas',
  ];

  librosFiltrados: Libro[] = [];

  constructor(private libroService: LibroService) {}

  ngOnInit(): void {
    // Carga inicial de todos los libros
    this.aplicarFiltros();
  }

  /**
   * Manejador de evento cuando cambia la categoría seleccionada en <mat-select>
   */
  onCategoriaChange(categoria: string): void {
    this.categoriaSeleccionada = categoria;
    this.aplicarFiltros();
  }

  /**
   * Aplica el filtrado según la categoría seleccionada en el servicio
   * y opcionalmente por término de búsqueda.
   */
  aplicarFiltros(): void {
    let libros = this.libroService.filtrarPorCategoria(this.categoriaSeleccionada);

    if (this.terminoBusqueda && this.terminoBusqueda.trim() !== '') {
      const term = this.terminoBusqueda.trim().toLowerCase();
      libros = libros.filter(
        (l) =>
          l.titulo.toLowerCase().includes(term) ||
          l.autor.toLowerCase().includes(term) ||
          l.id.toLowerCase().includes(term)
      );
    }

    this.librosFiltrados = libros;
  }

  limpiarFiltros(): void {
    this.categoriaSeleccionada = 'Todas';
    this.terminoBusqueda = '';
    this.aplicarFiltros();
  }

  get totalDisponibles(): number {
    return this.librosFiltrados.reduce((sum, item) => sum + item.disponibles, 0);
  }
}
