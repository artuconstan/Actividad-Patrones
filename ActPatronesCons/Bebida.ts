import { ProductoComestible } from "./Productos";
//Esta es la clase Bebida asi mismo como la clase anterior esta clase está heredada de ProductoComestible 
export class Bebida extends ProductoComestible {
//En esta clase tambien tenemos una propiedad que es tamaño y tambien utilizaremos a super para asi
//poder llamar los atributos de la clase padre 
    constructor(nombre: string, public tamano: string) {
      super(nombre);
    }
  
//Este es un metodo que nos motrara tanto el tamaño y el tipo de bebida que se va qa escoger
//al momento de ver la pelicula
    mostrarDetalle(): void {
      console.log("Bebida:", this.nombre);
      console.log("Tamaño:", this.tamano);
    }
  }