import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Libro } from '../../models/libro.model';

@Component({
  selector: 'app-tabla-libros',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatTooltipModule,
  ],
  templateUrl: './tabla-libros.component.html',
  styleUrl: './tabla-libros.component.css',
})
export class TablaLibrosComponent {
  private _libros: Libro[] = [];
  dataSource = new MatTableDataSource<Libro>([]);
  displayedColumns: string[] = [
    'id',
    'titulo',
    'categoria',
    'autor',
    'disponibles',
    'acciones',
  ];

  /**
   * Setter para recibir los datos mediante @Input()
   * Requerimiento explícito: @Input() usando un set
   */
  @Input()
  set libros(data: Libro[]) {
    this._libros = data ? [...data] : [];
    this.dataSource.data = this._libros;
  }

  get libros(): Libro[] {
    return this._libros;
  }

  getCategoriaBadgeClass(categoria: string): string {
    switch (categoria) {
      case 'Programación':
        return 'cat-prog';
      case 'Bases de Datos':
        return 'cat-db';
      case 'Redes':
        return 'cat-net';
      case 'Ciencias Básicas':
        return 'cat-sci';
      default:
        return 'cat-default';
    }
  }
}
