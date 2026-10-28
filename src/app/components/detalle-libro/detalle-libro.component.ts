import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { LibroService } from '../../services/libro.service';
import { Libro } from '../../models/libro.model';

@Component({
  selector: 'app-detalle-libro',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatDividerModule,
  ],
  templateUrl: './detalle-libro.component.html',
  styleUrl: './detalle-libro.component.css',
})
export class DetalleLibroComponent implements OnInit {
  libroId: string | null = null;
  libro: Libro | undefined;
  cargando: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private libroService: LibroService
  ) {}

  ngOnInit(): void {
    // Captura obligatoria del ID del libro desde la URL mediante ActivatedRoute
    this.route.paramMap.subscribe((params) => {
      this.libroId = params.get('id');
      if (this.libroId) {
        this.buscarLibro(this.libroId);
      } else {
        this.cargando = false;
      }
    });
  }

  buscarLibro(id: string): void {
    this.cargando = true;
    this.libro = this.libroService.buscarPorId(id);
    this.cargando = false;
  }

  getCategoriaBadgeClass(categoria?: string): string {
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
