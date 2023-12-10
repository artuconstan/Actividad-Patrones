import { Pelicula } from "./Peliculas";
import { ProductoComestible } from "./Productos";
//Esta es la clase sala en donde el constructor tiene varios metodos en donde podemos escoger 
//o ver los asientos disponibles que tiene dicha salta ademas los productos gratis que tienen. 
//Esta clase tiene una agregacion con la clase Pelicula, ya que cada sala hace referencia a una pelicula.
//Y esta a su vez tiene una composicion con la clase ProductoComestible ya que cada sala contiene 
//una lista de producto comestible.
export class Sala {
    constructor(
      public numero: number,
      public pelicula: Pelicula,
      public asientosDisponibles: number,
      public productosGratis: ProductoComestible[]
    ) {}
  }