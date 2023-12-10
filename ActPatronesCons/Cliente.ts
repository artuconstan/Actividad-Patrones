import { Pelicula } from "./Peliculas";
import { Sala } from "./sala";
import { ProductoComestible } from "./Productos";
//En esta clase cliente podemos ver que el constructor tiene varias propiedades.
//Esta clase tiene una asociación con las clases Pelicula, Sala y ProductoComestible 
//ya que cada cliente está asociado con una película, una sala y una lista de productos comestibles que consumirá.
export class Cliente {
    constructor(
      public nombre: string,
      public pelicula: Pelicula,
      public sala: Sala,
      public asiento: number,
      public productosConsumidos: ProductoComestible[]
    ) {}
  }