import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetalleLibroComponent } from './components/detalle-libro/detalle-libro.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Catálogo de Biblioteca Universitaria - UNSA',
  },
  {
    path: 'libro/:id',
    component: DetalleLibroComponent,
    title: 'Detalle de Libro - UNSA',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
