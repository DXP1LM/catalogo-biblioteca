# Práctica 9: Catálogo de Biblioteca Universitaria
### Universidad Nacional de San Agustín de Arequipa (UNSA)
**Facultad de Ingeniería de Producción y Servicios**  
**Unidad de Capacitación Producción y Servicios**

Aplicación web desarrollada en **Angular (Standalone Components)** con **Angular Material** para gestionar el catálogo de libros de la facultad, aplicando el patrón arquitectónico **Smart/Dumb Components**, inyección de servicios estáticos y enrutamiento dinámico.

---

## 🏛️ Arquitectura del Proyecto

El proyecto implementa estrictamente los requerimientos planteados en la práctica:

```
src/app/
├── models/
│   └── libro.model.ts                  # Interfaz del modelo de Libro
├── services/
│   └── libro.service.ts                # Servicio central con los 30 libros estáticos
├── components/
│   ├── home/                           # SMART / CONTAINER COMPONENT
│   │   ├── home.component.ts           # Lógica de estado y filtrado por categoría
│   │   ├── home.component.html         # <mat-card>, <mat-form-field>, <mat-select>
│   │   └── home.component.css
│   ├── tabla-libros/                   # DUMB / PRESENTATIONAL COMPONENT
│   │   ├── tabla-libros.component.ts   # @Input() set libros(data) y MatTableDataSource
│   │   ├── tabla-libros.component.html # <table mat-table>, <button mat-raised-button color="primary"> con [routerLink]
│   │   └── tabla-libros.component.css
│   └── detalle-libro/                  # ROUTING & DETAIL COMPONENT
│       ├── detalle-libro.component.ts  # Captura de :id vía ActivatedRoute y búsqueda en servicio
│       ├── detalle-libro.component.html# <mat-card> con ficha técnica y botón volver
│       └── detalle-libro.component.css
├── app.routes.ts                       # Enrutamiento dinámico ('', 'libro/:id', '**')
├── app.config.ts                       # Configuración de proveedores Standalone
├── app.ts / app.html / app.css         # Shell de la aplicación (Navbar y Footer UNSA)
└── main.ts                             # Bootstrap de la aplicación
```

---

## 📋 Requerimientos Implementados

1. **Servicio Central (`LibroService`)**:
   - Almacena la lista estática completa de **30 libros** distribuidos en las categorías:
     - `Programación` (9 libros: LIB-001 al LIB-009)
     - `Bases de Datos` (7 libros: LIB-010 al LIB-016)
     - `Redes` (6 libros: LIB-017 al LIB-022)
     - `Ciencias Básicas` (8 libros: LIB-023 al LIB-030)
   - Métodos:
     - `obtenerTodos()`: Retorna los 30 libros.
     - `filtrarPorCategoria(categoria)`: Filtra por categoría seleccionada o retorna todos si es 'Todas'.
     - `buscarPorId(id)`: Busca un libro específico por su código (ID).

2. **Componente Contenedor (`HomeComponent` - Smart)**:
   - Implementa el buscador y filtro utilizando componentes de Material:
     - `<mat-card>`
     - `<mat-form-field>`
     - `<mat-select>` (Categorías: Todas, Programación, Bases de Datos, Redes, Ciencias Básicas)
   - Pasa la lista filtrada al componente hijo mediante el enlace de propiedades:
     ```html
     <app-tabla-libros [libros]="librosFiltrados"></app-tabla-libros>
     ```

3. **Componente Presentacional (`TablaLibrosComponent` - Dumb)**:
   - Recibe los datos mediante `@Input()` implementando un **`set libros(data: Libro[])`**:
     ```typescript
     @Input()
     set libros(data: Libro[]) {
       this._libros = data ? [...data] : [];
       this.dataSource.data = this._libros;
     }
     ```
   - Renderiza los libros obligatoriamente en una `<table mat-table>`.
   - Cada fila incluye el botón solicitado:
     ```html
     <button mat-raised-button color="primary" [routerLink]="['/libro', element.id]">
       <mat-icon>open_in_new</mat-icon> Ver Detalle
     </button>
     ```

4. **Enrutamiento y Detalle (`DetalleLibroComponent`)**:
   - Ruta configurada: `/libro/:id`.
   - Captura el ID del libro dinámicamente desde la URL mediante `ActivatedRoute`:
     ```typescript
     this.route.paramMap.subscribe(params => {
       const id = params.get('id');
       this.libro = this.libroService.buscarPorId(id);
     });
     ```
   - Muestra una `<mat-card>` con la **ficha técnica completa del libro** (código, título, autor, categoría, unidades disponibles, ubicación física, ISBN y sinopsis).
   - Incluye el botón con `<button mat-raised-button color="primary" routerLink="/">` para regresar al catálogo principal.

---

## 🚀 Instrucciones de Ejecución

### 1. Clonar o acceder al proyecto
```bash
cd c:/Users/DLM/Desktop/27oct
```

### 2. Instalar dependencias (si es necesario)
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm start
# O con Angular CLI:
ng serve --open
```
Navegar en el navegador a: `http://localhost:4200/`

### 4. Compilar para producción
```bash
npm run build
```

---

## 📸 Evidencias de Ejecución (Capturas de Pantalla)

Las capturas requeridas se encuentran almacenadas en la carpeta [`evidencias/`](evidencias/):

1. **`evidencias/1_catalogo_principal_completo.png`**:
   - Pantalla principal (`HomeComponent`) mostrando la tabla con los 30 libros cargados al inicio.
2. **`evidencias/2_filtro_categoria_redes.png`**:
   - Demostración del funcionamiento del filtro por categoría seleccionando **"Redes"** (muestra los 6 libros correspondientes: LIB-017 al LIB-022).
3. **`evidencias/3_detalle_libro_LIB-017.png`**:
   - Pantalla de detalle (`DetalleLibroComponent`) evidenciando el cambio de ruta a `/libro/LIB-017`, la ficha técnica del libro *Computer Networking* de Kurose & Ross y el botón para regresar.

---

## 📦 Subir a Repositorio GitHub

Para cumplir con el primer entregable de la práctica, ejecute los siguientes comandos en la raíz del proyecto:

```bash
git add .
git commit -m "Implementación Práctica 9: Catálogo de Biblioteca Universitaria (Smart/Dumb, Routing, Material)"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```
