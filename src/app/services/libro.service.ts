import { Injectable } from '@angular/core';
import { Libro } from '../models/libro.model';

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  // Base de Datos Estática con los 30 libros solicitados
  private catalogoLibros: Libro[] = [
    // Programación
    {
      id: 'LIB-001',
      titulo: 'Clean Code',
      categoria: 'Programación',
      autor: 'Robert C. Martin',
      disponibles: 12,
      descripcion: 'Manual de estilo de desarrollo ágil de software que enseña las mejores prácticas para escribir código limpio, legible y mantenible.',
      ubicacion: 'Estante A-1, Pasillo 3',
      isbn: '978-0132350884',
      anioPublicacion: 2008,
    },
    {
      id: 'LIB-002',
      titulo: 'Design Patterns',
      categoria: 'Programación',
      autor: 'GoF',
      disponibles: 5,
      descripcion: 'Obra fundamental sobre patrones de diseño de software orientado a objetos por Erich Gamma, Richard Helm, Ralph Johnson y John Vlissides.',
      ubicacion: 'Estante A-1, Pasillo 3',
      isbn: '978-0201633610',
      anioPublicacion: 1994,
    },
    {
      id: 'LIB-003',
      titulo: 'Refactoring',
      categoria: 'Programación',
      autor: 'Martin Fowler',
      disponibles: 8,
      descripcion: 'Guía exhaustiva para mejorar el diseño del código existente sin alterar su comportamiento externo.',
      ubicacion: 'Estante A-2, Pasillo 3',
      isbn: '978-0134757599',
      anioPublicacion: 2018,
    },
    {
      id: 'LIB-004',
      titulo: 'Head First Java',
      categoria: 'Programación',
      autor: 'Kathy Sierra',
      disponibles: 15,
      descripcion: 'Experiencia multisensorial para aprender programación orientada a objetos y fundamentos avanzados de Java.',
      ubicacion: 'Estante A-2, Pasillo 3',
      isbn: '978-0596009205',
      anioPublicacion: 2005,
    },
    {
      id: 'LIB-005',
      titulo: 'Effective Java',
      categoria: 'Programación',
      autor: 'Joshua Bloch',
      disponibles: 4,
      descripcion: 'Mejores prácticas autorizadas para la plataforma Java, cubriendo desde generics hasta concurrencia.',
      ubicacion: 'Estante A-3, Pasillo 3',
      isbn: '978-0134685991',
      anioPublicacion: 2017,
    },
    {
      id: 'LIB-006',
      titulo: 'Python Crash Course',
      categoria: 'Programación',
      autor: 'Eric Matthes',
      disponibles: 20,
      descripcion: 'Introducción práctica y acelerada a la programación en Python, ideal para proyectos del mundo real.',
      ubicacion: 'Estante A-3, Pasillo 3',
      isbn: '978-1593279288',
      anioPublicacion: 2019,
    },
    {
      id: 'LIB-007',
      titulo: 'Eloquent JavaScript',
      categoria: 'Programación',
      autor: 'Marijn Haverbeke',
      disponibles: 10,
      descripcion: 'Una inmersión profunda en el lenguaje JavaScript moderna, programación funcional y en el navegador.',
      ubicacion: 'Estante A-4, Pasillo 3',
      isbn: '978-1593279509',
      anioPublicacion: 2018,
    },
    {
      id: 'LIB-008',
      titulo: 'Angular Up and Running',
      categoria: 'Programación',
      autor: 'Shyam Seshadri',
      disponibles: 6,
      descripcion: 'Guía paso a paso para construir aplicaciones web escalables con Angular, componentes y servicios.',
      ubicacion: 'Estante A-4, Pasillo 3',
      isbn: '978-1491999837',
      anioPublicacion: 2018,
    },
    {
      id: 'LIB-009',
      titulo: 'Pragmatic Programmer',
      categoria: 'Programación',
      autor: 'Andrew Hunt',
      disponibles: 9,
      descripcion: 'Filosofía, técnicas y consejos clave para convertirse en un artesano del desarrollo de software.',
      ubicacion: 'Estante A-5, Pasillo 3',
      isbn: '978-0135957059',
      anioPublicacion: 2019,
    },

    // Bases de Datos
    {
      id: 'LIB-010',
      titulo: 'Database System Concepts',
      categoria: 'Bases de Datos',
      autor: 'Silberschatz',
      disponibles: 14,
      descripcion: 'Texto fundamental sobre arquitectura de motores de bases de datos relacionales, normalización y transacciones ACID.',
      ubicacion: 'Estante B-1, Pasillo 2',
      isbn: '978-0078022159',
      anioPublicacion: 2019,
    },
    {
      id: 'LIB-011',
      titulo: 'SQL For Dummies',
      categoria: 'Bases de Datos',
      autor: 'Allen G. Taylor',
      disponibles: 22,
      descripcion: 'Manual amigable para dominar consultas SQL, creación de esquemas y manipulación de datos relacionales.',
      ubicacion: 'Estante B-1, Pasillo 2',
      isbn: '978-1119525547',
      anioPublicacion: 2018,
    },
    {
      id: 'LIB-012',
      titulo: 'Seven Databases in Seven Weeks',
      categoria: 'Bases de Datos',
      autor: 'Luc Perkins',
      disponibles: 7,
      descripcion: 'Recorrido práctico por bases de datos NoSQL, distribuidas y relacionales modernas (PostgreSQL, Redis, Neo4j, etc.).',
      ubicacion: 'Estante B-2, Pasillo 2',
      isbn: '978-1680502534',
      anioPublicacion: 2018,
    },
    {
      id: 'LIB-013',
      titulo: 'High Performance MySQL',
      categoria: 'Bases de Datos',
      autor: 'Baron Schwartz',
      disponibles: 3,
      descripcion: 'Técnicas avanzadas para optimización, indexación, replicación y alta disponibilidad en MySQL.',
      ubicacion: 'Estante B-2, Pasillo 2',
      isbn: '978-1492080510',
      anioPublicacion: 2021,
    },
    {
      id: 'LIB-014',
      titulo: 'MongoDB: The Definitive Guide',
      categoria: 'Bases de Datos',
      autor: 'Shannon Bradshaw',
      disponibles: 11,
      descripcion: 'Manual definitivo sobre almacenamiento documental, agregaciones, sharding y diseño de modelos en MongoDB.',
      ubicacion: 'Estante B-3, Pasillo 2',
      isbn: '978-1491954461',
      anioPublicacion: 2019,
    },
    {
      id: 'LIB-015',
      titulo: 'Oracle PL/SQL Programming',
      categoria: 'Bases de Datos',
      autor: 'Steven Feuerstein',
      disponibles: 5,
      descripcion: 'Referencia exhaustiva de programación procedural para bases de datos empresariales Oracle.',
      ubicacion: 'Estante B-3, Pasillo 2',
      isbn: '978-1449324459',
      anioPublicacion: 2014,
    },
    {
      id: 'LIB-016',
      titulo: 'Data Warehouse Toolkit',
      categoria: 'Bases de Datos',
      autor: 'Ralph Kimball',
      disponibles: 8,
      descripcion: 'La guía canónica sobre modelado dimensional, esquemas en estrella y copos de nieve para Business Intelligence.',
      ubicacion: 'Estante B-4, Pasillo 2',
      isbn: '978-1118530801',
      anioPublicacion: 2013,
    },

    // Redes y Sistemas Operativos
    {
      id: 'LIB-017',
      titulo: 'Computer Networking',
      categoria: 'Redes',
      autor: 'Kurose & Ross',
      disponibles: 18,
      descripcion: 'Enfoque top-down sobre protocolos de redes informáticas, desde la capa de aplicación hasta la física.',
      ubicacion: 'Estante C-1, Pasillo 1',
      isbn: '978-0136681557',
      anioPublicacion: 2020,
    },
    {
      id: 'LIB-018',
      titulo: 'TCP/IP Illustrated',
      categoria: 'Redes',
      autor: 'W. Richard Stevens',
      disponibles: 4,
      descripcion: 'Análisis detallado y clásico de la suite de protocolos TCP/IP con capturas de paquetes y ejemplos reales.',
      ubicacion: 'Estante C-1, Pasillo 1',
      isbn: '978-0321336316',
      anioPublicacion: 2011,
    },
    {
      id: 'LIB-019',
      titulo: 'Modern Operating Systems',
      categoria: 'Redes',
      autor: 'Andrew S. Tanenbaum',
      disponibles: 13,
      descripcion: 'Conceptos clave de diseño de sistemas operativos: gestión de memoria, virtualización, procesos y sistemas de archivos.',
      ubicacion: 'Estante C-2, Pasillo 1',
      isbn: '978-0133591620',
      anioPublicacion: 2014,
    },
    {
      id: 'LIB-020',
      titulo: 'Linux Command Line',
      categoria: 'Redes',
      autor: 'William Shotts',
      disponibles: 25,
      descripcion: 'Aprenda a dominar el terminal Linux, shell scripting con Bash, gestión de permisos y automatización.',
      ubicacion: 'Estante C-2, Pasillo 1',
      isbn: '978-1593279523',
      anioPublicacion: 2019,
    },
    {
      id: 'LIB-021',
      titulo: 'Network Warrior',
      categoria: 'Redes',
      autor: 'Gary A. Donahue',
      disponibles: 6,
      descripcion: 'Soluciones prácticas para administradores de redes Cisco: switches, routers, VLANs, MPLS y firewalls.',
      ubicacion: 'Estante C-3, Pasillo 1',
      isbn: '978-1449387860',
      anioPublicacion: 2011,
    },
    {
      id: 'LIB-022',
      titulo: 'Hacking: The Art of Exploitation',
      categoria: 'Redes',
      autor: 'Jon Erickson',
      disponibles: 2,
      descripcion: 'Exploración de la seguridad informática a bajo nivel, depuración, desbordamiento de búfer y protocolos de red.',
      ubicacion: 'Estante C-3, Pasillo 1',
      isbn: '978-1593271442',
      anioPublicacion: 2008,
    },

    // Ciencias Básicas y Algoritmia
    {
      id: 'LIB-023',
      titulo: 'Introduction to Algorithms',
      categoria: 'Ciencias Básicas',
      autor: 'Thomas H. Cormen',
      disponibles: 10,
      descripcion: 'Conocido como CLRS, el libro de texto universitario más prestigioso en diseño y análisis de algoritmos y complejidad.',
      ubicacion: 'Estante D-1, Pasillo 4',
      isbn: '978-0262046305',
      anioPublicacion: 2022,
    },
    {
      id: 'LIB-024',
      titulo: 'Discrete Mathematics',
      categoria: 'Ciencias Básicas',
      autor: 'Kenneth Rosen',
      disponibles: 16,
      descripcion: 'Fundamentos matemáticos para la computación: lógica proposicional, teoría de grafos, relaciones y combinatoria.',
      ubicacion: 'Estante D-1, Pasillo 4',
      isbn: '978-1259676512',
      anioPublicacion: 2018,
    },
    {
      id: 'LIB-025',
      titulo: 'Calculus: Early Transcendentals',
      categoria: 'Ciencias Básicas',
      autor: 'James Stewart',
      disponibles: 30,
      descripcion: 'Cálculo diferencial e integral para ingeniería con claridad explicativa y problemas aplicados al mundo real.',
      ubicacion: 'Estante D-2, Pasillo 4',
      isbn: '978-1305272378',
      anioPublicacion: 2015,
    },
    {
      id: 'LIB-026',
      titulo: 'Linear Algebra and Its Applications',
      categoria: 'Ciencias Básicas',
      autor: 'Gilbert Strang',
      disponibles: 12,
      descripcion: 'Espacios vectoriales, matrices, transformaciones lineales, autovalores y aplicaciones al aprendizaje automático.',
      ubicacion: 'Estante D-2, Pasillo 4',
      isbn: '978-0030105678',
      anioPublicacion: 2006,
    },
    {
      id: 'LIB-027',
      titulo: 'Artificial Intelligence',
      categoria: 'Ciencias Básicas',
      autor: 'Stuart Russell',
      disponibles: 9,
      descripcion: 'Inteligencia Artificial: un enfoque moderno. El texto estándar de referencia en agentes inteligentes y aprendizaje automático.',
      ubicacion: 'Estante D-3, Pasillo 4',
      isbn: '978-0134610993',
      anioPublicacion: 2020,
    },
    {
      id: 'LIB-028',
      titulo: 'Grokking Algorithms',
      categoria: 'Ciencias Básicas',
      autor: 'Aditya Bhargava',
      disponibles: 21,
      descripcion: 'Guía ilustrada y muy visual para aprender algoritmos comunes como ordenamiento, grafos y programación dinámica.',
      ubicacion: 'Estante D-3, Pasillo 4',
      isbn: '978-1617292231',
      anioPublicacion: 2016,
    },
    {
      id: 'LIB-029',
      titulo: 'Physics for Scientists',
      categoria: 'Ciencias Básicas',
      autor: 'Raymond A. Serway',
      disponibles: 15,
      descripcion: 'Física universitaria para ciencias e ingeniería: mecánica clásica, electromagnetismo y termodinámica.',
      ubicacion: 'Estante D-4, Pasillo 4',
      isbn: '978-1337553292',
      anioPublicacion: 2018,
    },
    {
      id: 'LIB-030',
      titulo: 'Theory of Computation',
      categoria: 'Ciencias Básicas',
      autor: 'Michael Sipser',
      disponibles: 7,
      descripcion: 'Autómatas, lenguajes formales, computabilidad y teoría de la complejidad computacional.',
      ubicacion: 'Estante D-4, Pasillo 4',
      isbn: '978-1133187790',
      anioPublicacion: 2012,
    },
  ];

  /**
   * Obtiene la lista completa de libros del catálogo (30 libros).
   */
  obtenerTodos(): Libro[] {
    return [...this.catalogoLibros];
  }

  /**
   * Filtra el catálogo por categoría específica.
   * Si la categoría es vacía o 'Todas', retorna todos los libros.
   */
  filtrarPorCategoria(categoria: string): Libro[] {
    if (!categoria || categoria.trim() === '' || categoria.toLowerCase() === 'todas') {
      return this.obtenerTodos();
    }
    return this.catalogoLibros.filter(
      (libro) => libro.categoria.toLowerCase() === categoria.toLowerCase()
    );
  }

  /**
   * Busca un libro específico por su identificador (ID).
   */
  buscarPorId(id: string): Libro | undefined {
    if (!id) return undefined;
    const cleanId = id.trim().toUpperCase();
    return this.catalogoLibros.find((libro) => libro.id.toUpperCase() === cleanId);
  }

  /**
   * Retorna la lista de categorías únicas disponibles.
   */
  obtenerCategorias(): string[] {
    return ['Programación', 'Bases de Datos', 'Redes', 'Ciencias Básicas'];
  }
}
