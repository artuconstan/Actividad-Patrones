import { Pelicula } from "./Peliculas";
// Interfaz Observer para el patrón Observer
interface Observer {
    actualizar(pelicula: Pelicula): void;
  }
  
  // Implementación del patrón Observer
  class Observador implements Observer {
    actualizar(pelicula: Pelicula): void {
      // Lógica para manejar actualizaciones en la película (por ejemplo, cambios en la lista de espectadores o salas disponibles)
      // ...
    }
  }